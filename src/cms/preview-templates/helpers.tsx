/**
 * Unknown and undocumented type defined by netlify-cms-app. Represents an entry in a collection
 */
type Entry = any

/**
 * Unknown and undocumented props which netlify-cms-app passes to every preview template
 */
export interface PreviewProps {
  entry: Entry
}

//From https://github.com/robertcoopercode/gatsby-netlify-cms/blob/master/src/cms/preview-templates/MeetupPreview.js
/**
 * Convert a collection entry to JSON
 *
 * This is probably the same JSON that netlify CMS would output, when told to output JSON
 * @param entry
 */
export const getJSON = (entry: Entry) => entry.getIn(['data']).toJS()
