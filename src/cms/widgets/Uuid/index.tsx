import { UuidControl } from './control'

export const UuidWidget = (opts = {}) => ({
  name: 'uuid',
  controlComponent: UuidControl,
  ...opts,
})
