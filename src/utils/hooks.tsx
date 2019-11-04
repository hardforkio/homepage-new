import React, { useContext, FunctionComponent, useState } from 'react'

export const NavbarContext = React.createContext<any>(undefined)

export const NavbarStateProvider: FunctionComponent = ({ children }) => {
  const [transparent, setTransparent] = useState(true)
  return (
    <NavbarContext.Provider value={[transparent, setTransparent]}>
      {children}
    </NavbarContext.Provider>
  )
}

export const useNavbarState = () => useContext(NavbarContext)
