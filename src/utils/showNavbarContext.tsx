import React, { useContext } from 'react'

export const ShowTransparentNavbarContext = React.createContext(false)

export const ShowTransparentNavbarProvider =
  ShowTransparentNavbarContext.Provider

export const useShowTransparentNavbar = () =>
  useContext(ShowTransparentNavbarContext)
