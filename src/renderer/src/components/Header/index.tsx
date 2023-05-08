import css from './index.module.css'
import * as React from 'react'
import { GridView, AllInclusive } from '@mui/icons-material'
import useMode, { Mode } from '../../context/mode'

const Header: React.FC = () => {
  const { mode, setMode } = useMode()

  function handleSwitchSuspensionWindow(): void {
    setMode(Mode.float)
    const { send } = window.electronAPI.ipcRenderer
    send('showSuspensionWindow')
  }
  function handleSwitchMainWindow(): void {
    setMode(Mode.gallery)
    const { send } = window.electronAPI.ipcRenderer
    send('hideSuspensionWindow')
  }

  return (
    <div className={`${css.header} ${mode == Mode.float && css.floatHeader}`}>
      <span
        className={`${css.menuItem} ${mode == Mode.float && css.menuItemActive}`}
        onClick={handleSwitchSuspensionWindow}
      >
        <AllInclusive className={css.menuItemIcon} />
        Floating View
      </span>
      <span
        className={`${css.menuItem} ${mode == Mode.gallery && css.menuItemActive}`}
        onClick={handleSwitchMainWindow}
      >
        <GridView className={css.menuItemIcon} />
        Gallery View
      </span>
    </div>
  )
}

export default Header
