import React from 'react'
import { connect } from 'react-redux'
function Compteur (props) {
  // const { compteur } = props
  return <h1>{props.count}</h1>
}
const mapStateToProps = state => ({
  count: state.count
})
export default connect(mapStateToProps)(Compteur)
