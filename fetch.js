const { NotionToMarkdown } = require("notion-to-md");
const fs = require("fs");
const path = require("path");
const Notion = require("@notionhq/client");
const fetch = require("node-fetch");
require("dotenv").config();

const AUTH_SECRET_TOKEN = process.env.AUTH_SECRET_TOKEN;
const PAGE_ID = process.env.PAGE_ID;

const notionClient = new Notion.Client({ auth: AUTH_SECRET_TOKEN });
const n2m = new NotionToMarkdown({ notionClient: notionClient });

async function downloadImage(url, dest, filename) {
  try {
    const response = await fetch(url);
    if (!response.ok)
      throw new Error(`Failed to fetch ${url}: ${response.statusText}`);

    const buffer = await response.buffer();

    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }

    const filePath = path.join(dest, filename);
    fs.writeFileSync(filePath, buffer);

    console.log(`Image saved to ${filePath}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

async function urlConverter(code) {
  const startMarker = "https://prod-files-secure.s3.us-west-2.amazonaws.com";
  const endMarker = "&x-id=GetObject";
  const imageUrls = [];

  let currentIndex = 0;

  while (currentIndex < code.length) {
    const startIndex = code.indexOf(startMarker, currentIndex);
    if (startIndex === -1) {
      break;
    }

    const endIndex = code.indexOf(endMarker, startIndex);
    if (endIndex === -1) {
      break;
    }

    const imageUrl = code.substring(startIndex, endIndex + endMarker.length);
    imageUrls.push(imageUrl);

    currentIndex = endIndex + endMarker.length;
  }

  console.log(imageUrls);

  const imageIds = imageUrls.map((url) => {
    const imageUrlRegex =
      /https:\/\/prod-files-secure\.s3\.us-west-2\.amazonaws\.com\/[a-f0-9-]+\/[a-f0-9-]+\/[a-zA-Z0-9%.-]+\?(?:[^"'\\s]+)/g;

    // Assuming url is your input URL
    const parts = url.split("/");
    const imageId = parts[parts.length - 2]; // Assuming this is still relevant

    const matchedUrls = url.match(imageUrlRegex);
    if (!matchedUrls || matchedUrls.length === 0) {
      throw new Error("No valid image URLs found in the input.");
    }

    const fullUrl = matchedUrls[0];
    const urlObj = new URL(fullUrl);
    const pathname = urlObj.pathname; // Extract the path part of the URL
    const fileNameWithExtension = pathname.substring(
      pathname.lastIndexOf("/") + 1,
    ); // Get file name with extension

    // Now we need to isolate the file extension from the file name
    const fileType = fileNameWithExtension.substring(
      fileNameWithExtension.lastIndexOf(".") + 1,
    );

    // Return the extracted details
    return { imageId, fileType, imageUrl: url };
  });

  console.log(imageIds);

  const localDir = path.join(__dirname, "public/images");

  for (const { imageId, fileType, imageUrl } of imageIds) {
    const fileName = `${imageId}.${fileType}`;
    await downloadImage(imageUrl, localDir, fileName);
    const localImageUrl = `/images/${fileName}`;
    code = code.replace(imageUrl, localImageUrl);
  }
  return code;
}

async function getPages() {
  const pages = [];
  let cursor = undefined;

  while (true) {
    const response = await notionClient.databases.query({
      database_id: PAGE_ID,
      start_cursor: cursor,
    });

    pages.push(...response.results);
    cursor = response.next_cursor;

    if (!cursor) {
      break;
    }
  }

  return pages;
}

async function createMdFiles() {
  const pages = await getPages();

  for (let page of pages) {
    if (page.properties.public.checkbox === false) {
      continue;
    }

    const {
      title: _title,
      description: _description,
      slug: _slug,
      created_at: _created_at,
    } = page.properties;

    const title = _title.title[0].plain_text;
    const desc = _description.rich_text.reduce(
      (acc, cur) => acc + cur.plain_text,
      "",
    );
    const date = _created_at.date.start;

    const mdblocks = await n2m.pageToMarkdown(page.id);
    const mdString = n2m.toMarkdownString(mdblocks);

    const mdxHeader = `---
title: ${title}
description: ${desc}
date: ${date}
---
`;

    const actualContent = mdxHeader.concat(mdString.parent ?? "");
    const content = await urlConverter(actualContent);

    const key = _slug.rich_text.reduce((acc, cur) => acc + cur.plain_text, "");
    const filePath = `./content/${key}.mdx`;

    fs.writeFile(filePath, content, function (err) {
      if (err) throw err;
      console.log(`${title}.mdx file is created successfully.`);
    });
  }
}

createMdFiles().catch(console.error);
