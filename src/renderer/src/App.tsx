import { useEffect, useState } from 'react'
import Header from './components/Header'
import useMode, { Mode } from './context/mode'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { RcvEngine, EngineEvent, ErrorCodeType, GrantType } from '@ringcentral/video-sdk'
import config from './config'
import InMeeting from './components/InMeeting'
import StartView from './components/StartView'

function App(): JSX.Element {
  const { mode } = useMode()
  const [rcvEngine, setRcvEngine] = useState<RcvEngine>(null as any)
  const navigate = useNavigate()

  const initSDK = async () => {
    const { clientId, clientSecret, jwt, userName, password } = config
    // You could open 'enableDiscovery' and set 'discoveryServer' if neccessary
    const engine = RcvEngine.create({ clientId, clientSecret, enableDiscovery: false })
    // if config jwt, initialize SDK with jwt
    // else initialize SDK with password
    await engine.authorize({
      grantType: jwt ? GrantType.JWT : GrantType.PASSWORD,
      jwt,
      username: userName,
      password
    })
    engine.on(EngineEvent.MEETING_JOINED, (meetingId, errorCode) => {
      if (errorCode === ErrorCodeType.ERR_OK) {
        if (!window.location.pathname.includes('/meeting/')) {
          navigate(`/meeting/${meetingId}`)
        }
      }
    })
    engine.on(EngineEvent.MEETING_LEFT, () => {
      navigate('/', { replace: true })
    })
    setRcvEngine(engine)
  }

  useEffect(() => {
    handleMove()
    initSDK()
  }, [])

  function handleMove(): void {
    const { send } = window.electronAPI.ipcRenderer
    let biasX = 0
    let biasY = 0
    function moveEvent(e): void {
      send('suspensionWindowMove', { x: e.screenX - biasX, y: e.screenY - biasY })
    }
    function initSuspension(): void {
      const suspensionDom = document.getElementsByClassName('suspension-container')[0]
      suspensionDom.addEventListener('mousedown', function (e: any) {
        switch (e.button) {
          case 0:
            biasX = e.x
            biasY = e.y
            document.addEventListener('mousemove', moveEvent)
            break
          case 2:
            send('createSuspensionMenu')
            break
        }
      })
      suspensionDom.addEventListener('mouseup', function () {
        biasX = 0
        biasY = 0
        document.removeEventListener('mousemove', moveEvent)
      })
    }
    initSuspension()
  }
  return (
    <div
      className={`suspension-container ${mode === Mode.gallery ? 'bg-white' : 'bg-transparent'}`}
    >
      <Header />
      <Routes>
        <Route path="meeting">
          <Route path=":meetingId" element={<InMeeting rcvEngine={rcvEngine} />} />
        </Route>
        <Route path="/" element={<StartView rcvEngine={rcvEngine} />} />
      </Routes>
    </div>
  )
}

export default App
