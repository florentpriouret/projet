import React from 'react'
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

export default LoginButton
