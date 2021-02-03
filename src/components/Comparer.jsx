import React from 'react'
function FormCompare (props) {
  return (
    <div>
      <label id='res'> </label>
      <input id='first' onChange={Compare(document.getElementById('first')?.value, document.getElementById('second')?.value)}/>
      <input id='second' onChange={Compare(document.getElementById('first')?.value, document.getElementById('second')?.value)}/>
    </div>
  )
  function Compare (a, b) {
    if (a !== undefined && b !== undefined) {
      if (a >= b) {

      } else {

      }
    }
  }
}
export default FormCompare
