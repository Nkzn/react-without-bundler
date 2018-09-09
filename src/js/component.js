export const Counter = (props) => {
  return (
    h('div', null, [
      h('div', {key: 'count'}, props.count),
      h('button', {key: 'increment', onClick: props.increment}, '+'),
      h('button', {key: 'decrement', onClick: props.decrement}, '-'),
      h('button', {key: 'reset', onClick: props.reset}, 'reset'),
    ])
  )
}
