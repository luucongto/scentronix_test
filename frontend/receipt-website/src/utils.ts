export const camelToSentenceCase = (str: string): string => {
  return str
    .replace(/([A-Z])/g, ' $1') // Insert space before each uppercase letter
    .replace(/^./, (match) => match.toUpperCase()) // Capitalize the first letter of the string
    .toLowerCase()
    .replace(/(?:^|\s)\S/g, (match) => match.toUpperCase())
}
export const capitalizeSentenceCase = (str: string) => {
  return str
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (match) => match.toUpperCase())
}
