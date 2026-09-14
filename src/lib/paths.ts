/** Base path for GitHub Pages project sites (empty for local / root hosting). */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix absolute app paths with basePath. Leaves URLs and already-prefixed paths alone. */
export function withBasePath(path: string): string {
  if (!path.startsWith("/") || path.startsWith("//")) return path;
  if (basePath && (path === basePath || path.startsWith(`${basePath}/`))) {
    return path;
  }
  return `${basePath}${path}`;
}
