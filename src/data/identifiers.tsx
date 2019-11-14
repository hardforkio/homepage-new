import * as R from 'ramda'
/**
 * Represents an item in a netlify cms collection
 */
export interface CollectionItem {
  id: string //id, unique within each collection
}

/**
 * Looks up a content item by title.
 * The title is guaranteed to be present on each item in a netlify CMS collection,
 * and also to be unique within the collection
 * @param id
 * @param list
 */
export const getById = (
  id: string,
): ((list: CollectionItem[]) => CollectionItem | undefined) =>
  R.find<CollectionItem>(R.propEq('id', id))
