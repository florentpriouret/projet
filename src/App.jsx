import React from 'react'
import CompteControl from './components/CompteControl'
// eslint-disable-next-line no-unused-vars
import FormCompare from './components/Comparer'
import ComparerControl from './components/ComparerControl'
/* import LoginControl from './components/ControlLogin' */

function App (props) {
  return (
    /* <div>
      <LoginControl/>
    </div> */
    <div>
      <CompteControl/>
      <ComparerControl/>
    </div>
  )
}
export default App
