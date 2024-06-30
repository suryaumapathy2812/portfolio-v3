import { getBlogPosts } from "@/lib/content";
import { Suspense } from "react";
import { formatDate } from "date-fns";
import CustomMDX from "./components/mdx";

export default function Page({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    return <div>Blog not found</div>;
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `https://suryaumapathy.in${post.metadata.image}`
              : `https://suryaumapathy.in/og?title=${post.metadata.title}`,
            url: `https://suryaumapathy.in/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: "Surya Umapathy",
            },
          }),
        }}
      />
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        {post.metadata.title}
      </h1>
  <div className="">

  </div>
      <div className="prose flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
        <Suspense fallback={<p className="h-5" />}>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {/* {formatDate(post.metadata.publishedAt, "MMMM dd, yyyy")} */}
          </p>
        </Suspense>
        <Suspense fallback={<p className="h-5" />}>
          {/* <Views slug={post.slug} /> */}
        </Suspense>
      </div>
      <article className="prose prose-quoteless prose-neutral dark:prose-invert">
        <CustomMDX source={post.content} />
      </article>
    </section>
  );
}
