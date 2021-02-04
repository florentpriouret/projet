function reducer (state = { compteur: 42 }, action) {
  switch (action.type) {
    case 'INCREMENT': {
      return { compteur: state.compteur + 1 }
    }
    default: {
      return state
    }
  }
}
export default reducer
