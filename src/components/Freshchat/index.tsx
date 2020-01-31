import { FC, useEffect } from 'react'

export const Freshchat: FC = () => {
  useEffect(() => {
    initFreshchat()
  })

  return null
}

const initFreshchat = () =>
  window.fcWidget &&
  window.fcWidget.init({
    token: '7c455c50-a2c2-48d4-8dec-5b60386ae32a',
    host: 'https://wchat.freshchat.com',
    config: {
      headerProperty: {
        backgroundColor: '#21b2a6',
      },
    },
  })
