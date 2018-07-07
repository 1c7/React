
let User = (props) => {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h2>Age: {props.age}</h2>
    </div>
  )
}

ReactDOM.render(<User name='androis' age={27}/>, document.getElementById('app'))