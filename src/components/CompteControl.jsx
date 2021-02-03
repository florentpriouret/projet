import React from 'react'
import Compteur from './Compteur'
import ButtonCompte from './ButtonCompte'
function CompteControl (props) {
  const [
    compteur,
    setcompteur
  ] = React.useState(0)

  return (
    <div>
      <Compteur compteur = {compteur} />
      <ButtonCompte clickSetcompteur={() => setcompteur(compteur + 1)} />
    </div>
  )
}

export default CompteControl
