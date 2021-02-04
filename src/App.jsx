import React from 'react'
import CompteControl from './components/CompteControl'
// eslint-disable-next-line no-unused-vars
import FormCompare from './components/Comparer'
// eslint-disable-next-line no-unused-vars
import ComparerControl from './components/ComparerControl'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducer'
/* import LoginControl from './components/ControlLogin' */
const store = createStore(reducer)
function App (props) {
  return (
    /* <div>
      <LoginControl/>
    </div> */
    <div>
      <Provider store={store}>
      <CompteControl/>
      </Provider>,
      {/* <ComparerControl/> */}
    </div>
  )
}
export default (App)
