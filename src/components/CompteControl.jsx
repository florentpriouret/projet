import React from 'react'
import Compteur from './Compteur'
import ButtonCompte from './ButtonCompte'
// eslint-disable-next-line no-unused-vars
// import { connect } from 'react-redux'
function CompteControl (props) {
  return (
    <div>
      <Compteur />
      <ButtonCompte clickSetcompteur={() => props.dispatch({ type: 'INCREMENT' })} />
    </div>
  )
}

export default CompteControl
