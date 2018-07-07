// 030 Method Binding.mp4

const obj = {
  name: 'JJJJk',
  getName(){
    console.log(this.name);
  }
}

// Work
// obj.getName();


// Not Work
// var getName = obj.getName;
// getName();


// Work again
var getName = obj.getName.bind(obj); // bind 可以决定 this 的 context
getName();