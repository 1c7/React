
class Counter extends React.Component{
  constructor(props){
    super(props)
    this.handlePlus = this.handlePlus.bind(this);
    this.handleMinus = this.handleMinus.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  handlePlus(){
    console.log('plus');
  }
  handleMinus(){
    console.log('m');
  }
  handleReset(){
    console.log('reset');
  }
  render(){
    return(
      <div>
        <h1>Counter: </h1>
        <button onClick={this.handlePlus}>+1</button>
        <button onClick={this.handleMinus}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    )
  }
}




ReactDOM.render(<Counter/>, document.getElementById('app'))