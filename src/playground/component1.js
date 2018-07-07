console.log('Our first component');

class Header extends React.Component{
  render(){
    return <p>Header</p>
  }
}

class IndecisionApp extends React.Component{
  render(){
    return (
      <div>
        <h1>asdasd</h1>
        <Header/>
        <Header/>
        <Header/>
      </div>
    )
  }
}


ReactDOM.render(<IndecisionApp/>, document.getElementById('app'))