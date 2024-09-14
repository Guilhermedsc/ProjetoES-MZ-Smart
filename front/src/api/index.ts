export default function customFetch(path: string, options: RequestInit) {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
  return fetch(baseUrl + path, options)
}