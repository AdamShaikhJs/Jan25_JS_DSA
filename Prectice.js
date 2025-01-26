const obj = {
    name: 'My Object',
    regularFunction: function() {
      console.log(this); // 'this' refers to `obj`
    }
  };
  
  // {
  //   // Inside a block scope
    obj.regularFunction(); // 'this' refers to `obj`
  // }


  console.log(this)