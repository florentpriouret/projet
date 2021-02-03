import React from 'react'
import LoginButton from './ButtonLogin'
import LogoutButton from './ButtonLogout'
import Greeting from './Greeting'
function Comptecontrol (props) {
  const [
    isLoggedIn,
    setIsLogin
  ] = React.useState(false)
  // eslint-disable-next-line init-declarations
  let button
  if (isLoggedIn) {
    // eslint-disable-next-line new-cap
    button = <LogoutButton SetisLogin={() => setIsLogin(false)} />
  } else {
    // eslint-disable-next-line new-cap
    button = <LoginButton setIsLogin={() => setIsLogin(true)}/>
  }
  return (
    <div>
      <Greeting isLoggedIn = {isLoggedIn} />
      {button}
    </div>
  )
}

export default Comptecontrol
