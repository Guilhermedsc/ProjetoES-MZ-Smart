export function normalizeString(str: string) {
  return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}

export function formatDatetime(datetime: string) {
  const date = new Date(datetime)
  return date.toLocaleDateString() + " " + date.toLocaleTimeString()
}
