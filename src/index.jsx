import React from 'react'
import ReactDOM from 'react-dom'

function UserGreeting (props) {
  return <h1>Welcome back!</h1>
}

function GuestGreeting (props) {
  return <h1>Please sign up.</h1>
}

function Greeting (props) {
  const { isLoggedIn } = props
  if (isLoggedIn) {
    return <UserGreeting />
  }

  return <GuestGreeting />
}

function LoginButton (props) {
  function login () {
    // eslint-disable-next-line react/prop-types
    props.setIsLogin()
  }

  return (
    <div>
      <button onClick={login}>LOGIN</button>
    </div>
  )
}

function LogoutButton (props) {
  function logout () {
    // eslint-disable-next-line new-cap,react/prop-types
    props.SetisLogin()
  }

  return (
    <div>
      <button onClick={logout}>LOGOUT</button>
    </div>
  )
}

// eslint-disable-next-line no-unused-vars
function LoginControl (props) {
  const [
    isLoggedIn,
    SetisLogin
  ] = React.useState(false)
  // eslint-disable-next-line init-declarations
  let button
  if (isLoggedIn) {
    // eslint-disable-next-line new-cap
    button = <LogoutButton SetisLogin={() => SetisLogin(false)} />
  } else {
    // eslint-disable-next-line new-cap
    button = <LoginButton setIsLogin={() => SetisLogin(true)}/>
  }

  return (
    <div>
      <Greeting isLoggedIn = {isLoggedIn} />
      {button}
    </div>
  )
}

ReactDOM.render(
  <LoginControl />,
  document.getElementById('root')
)
