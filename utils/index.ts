import { Query } from 'types/query'

export const isEmpty = (val: any) => {
  return val === undefined || val == null || val.length <= 0 ? true : false
}

export const slugify = (str: string) => {
  str = str
    .trim()
    .toLowerCase()
    .replaceAll('.', '-') // replace dotes by -
    .replace(/[^a-z0-9 -]/, '') // remove invalid chars
    .replace(/-+/g, '-') // collapse dashes
  return str
}

export const removeEmptyParams = (obj: Query): Query => {
  return (
    Object.fromEntries(
      Object.entries(obj)
        .filter(([_, item]: any) => item != null && item.trim() !== '')
        .map(([newItem, item]) => [
          newItem,
          item === Object(item) ? removeEmptyParams(item) : slugify(item),
        ])
    ) || {}
  )
}
