import NextImage, { type ImageProps } from "next/image";
import { withBasePath } from "@/lib/paths";

/** next/image does not auto-prefix basePath for static assets — do it here. */
export default function Image({ src, ...props }: ImageProps) {
  const resolved = typeof src === "string" ? withBasePath(src) : src;
  return <NextImage src={resolved} {...props} />;
}
