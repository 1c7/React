console.log('App.js running!');




var list = [1,2,3];
var count = 0;

const add = () => {
  console.log('mionusOne');
}

const plusOne = () => {
  console.log('plusOne');
}

const newValue = () =>{

}

function formSubmit(e){
  e.preventDefault();
  var input_element = e.target.elements.in;
  var value = input_element.value;
  // alert(value);
  list.push(value);
  render();
  input_element.value = '';
}



var appRoot = document.getElementById('app');

function render(){
  var template = (
    <div>
      <h1>{name}</h1>
      {/* <p>Count: {count}</p> */}
      {
        list.map((l)=>{
          return <p key={l}>{l}</p>;
        })
      }
      <form onSubmit={formSubmit}>
        <input type='text' onClick={newValue} name='in'/>
        <button type='submit'>submit</button>
      </form>
      
      {/* <button onClick={add}>Add!</button> */}
      {/* <button onClick={plusOne}>Plus</button> */}
    </div>
  );
  ReactDOM.render(template, appRoot);
}

render()