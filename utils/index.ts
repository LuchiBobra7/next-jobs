import { Query } from 'types/query'

export const removeEmptyParams = (obj: Query) => {
  return Object.fromEntries(
    Object.entries(obj).filter(
      ([_, value]) => value !== undefined && value.trim() !== ''
    )
  )
}

export const slugify = (str: string) => {
  str = str
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-') // collapse dashes

  return str
}
