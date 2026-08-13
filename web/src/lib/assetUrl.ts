/** Public folder paths — always root-absolute so routing + single-file build work. */
export function assetUrl(path: string) {
  return `/${path.replace(/^\//, '')}`
}
