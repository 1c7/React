
class Visible extends React.Component{
  constructor(props){
    super(props)
    this.toggleVisible = this.toggleVisible.bind(this)
    this.state = {
      visible: true,
    }
  }
  toggleVisible(){
    console.log('run toggle')
    this.setState((prevState)=>{
      return {
        visible: !prevState.visible
      } 
    })
  } 
  render(){
    return(
      <div>
        <button onClick={this.toggleVisible}>
          {this.state.visible? '隐藏' :'显示'}
        </button>
        {this.state.visible && (
          <h1>I WOULD DISAPPER AND SHOW</h1>
        )}
      </div>
    )
  }
}

ReactDOM.render(<Visible/>, document.getElementById('app'))