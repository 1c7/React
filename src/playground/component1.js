console.log('Our first component');

// class IndecisionApp extends React.Component{
//   render(){
    
//   }
// }

class Header extends React.Component{
  render(){
    return <p>Header</p>
  }
}

const jsx = (
  <div>
    <h1>asdasd</h1>
    <Header/>
    <Header/>
    <Header/>
  </div>
)

ReactDOM.render(jsx, document.getElementById('app'))