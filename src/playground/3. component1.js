console.log('Our first component');

class Header extends React.Component{
  render(){
    return <div>
      <h2>Header</h2>
      <p>{this.props.options.length}</p>
    </div>
  }
}

class IndecisionApp extends React.Component{
  render(){
    let options = ['a', 'b', 'c', 'd']
    return (
      <div>
        <h1>App</h1>
        <Header options={options}/>
      </div>
    )
  }
}


ReactDOM.render(<IndecisionApp/>, document.getElementById('app'))