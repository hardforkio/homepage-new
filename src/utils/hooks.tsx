import React, { useContext, FunctionComponent, useState } from 'react'

type NavbarState = [boolean, (newValue: boolean) => void]

export const NavbarContext = React.createContext<NavbarState>([
  true,
  () => {
    console.warn(
      'WARNING: useNavbarState was used without a NavbarContext Provider',
    )
  },
])

export const NavbarStateProvider: FunctionComponent = ({ children }) => {
  const [transparent, setTransparent] = useState(true)
  return (
    <NavbarContext.Provider value={[transparent, setTransparent]}>
      {children}
    </NavbarContext.Provider>
  )
}

export const useNavbarState = () => useContext(NavbarContext)
