import { useState } from 'react'
import { FormRegister } from './component/FormRegister'

function App() {
  const [toggleProfile, setToggleProfile] = useState(false)
  return toggleProfile ? (
    <h1>Aqui el perfil</h1>
  ) : (
    <FormRegister
      toggleProfile={toggleProfile}
      setToggleProfile={setToggleProfile}
    />
  )
}

export default App
