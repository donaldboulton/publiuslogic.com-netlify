import CMS from 'netlify-cms-app'

import { TagPreview } from '../components/TagWidget/TagPreview'
import { TagControl } from '../components/TagWidget/TagControl'

CMS.registerWidget('tags', TagControl, TagPreview)

export default {
  CMS,
}
