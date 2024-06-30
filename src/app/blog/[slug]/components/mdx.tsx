import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";

export default function CustomMDX(props: MDXRemoteProps) {
  return <MDXRemote source={props.source} />;
}
