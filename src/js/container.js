import {Counter} from './component.js'
import * as Actions from './module.js'

const mapStateToProps = (state, props) => {
  return {
    count: state.counter,
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    increment: () => dispatch(Actions.increment()),
    decrement: () => dispatch(Actions.decrement()),
    reset: () => dispatch(Actions.reset()),
  }
}

export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Counter)
