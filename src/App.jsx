import React from 'react'
import CompteControl from './components/CompteControl'
// eslint-disable-next-line no-unused-vars
import FormCompare from './components/Comparer'
// import ComparerControl from './components/ComparerControl'
/* import LoginControl from './components/ControlLogin' */
import { createStore } from 'redux'
import { Provider } from 'react-redux'

function reducer (state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      }
    default:
      return state
  }
}

const store = createStore(reducer)
function App (props) {
  return (
    /* <div>
      <LoginControl/>
    </div> */
    <Provider>
      <CompteControl store={store}/>
       {/* <ComparerControl/> */}
    </Provider>
  )
}
export default App
