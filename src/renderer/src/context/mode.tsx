import * as React from 'react'
import { useContext, useState } from 'react'

enum Mode {
  gallery = 'gallery',
  float = 'float'
}
interface Props {
  children: React.ReactNode
}

const ModeContext = React.createContext<{ mode: Mode; setMode: (mode: Mode) => any }>({
  mode: Mode.gallery,
  setMode: () => void 0
})

const ModeProvider: React.FC<Props> = ({ children }) => {
  const [mode, setMode] = useState(Mode.gallery)
  return (
    <ModeContext.Provider
      value={{
        mode,
        setMode
      }}
    >
      {children}
    </ModeContext.Provider>
  )
}

const useMode = (): any => {
  return useContext(ModeContext)
}

export { ModeProvider, Mode }

export default useMode
