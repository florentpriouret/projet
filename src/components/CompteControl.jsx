import React from 'react'
import Compteur from './Compteur'
import ButtonCompte from './ButtonCompte'
import { connect } from 'react-redux'

function CompteControl (props) {
  // const [
  //   compteur,
  //   setcompteur
  // ] = React.useState(0)

  return (
    <div>
      <Compteur compteur = {props.compteur} />
      <ButtonCompte clickSetcompteur={() => (props.dispatch({ type: 'INCREMENT' }))} />
      {/* <ButtonCompte clickSetcompteur={() => setcompteur(store.dispatch({ type: 'INCREMENT' }))} /> */}
    </div>
  )
}
const mapStateToProps = state => ({
  compteur: state.compteur
})
export default connect(mapStateToProps)(CompteControl)
