function mirState (modifier, initial) {
  let state = initial

  function getState () {
    return state
  }

  function setState (newValue) {
    state = newValue
    modifier(state)
  }

  return [getState, setState]
}

export { mirState }