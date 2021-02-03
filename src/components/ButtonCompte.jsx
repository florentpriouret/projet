import React from 'react'
function ButtonCompte (props) {
  function clicker () {
    props.setcompteur()
  }

  return (
    <div>
      <button onClick={clicker}>ajouter</button>
    </div>
  )
}
export default ButtonCompte
