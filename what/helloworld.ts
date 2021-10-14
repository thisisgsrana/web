// console.log("helloworld");

// var myNum = "nooooo";
// if(typeof(myNum) == typeof(123)){
//     console.log("its a num");
// }else{
//     console.log("its a string");
    
// }
// const myObj = ["help", "me", 'please'];

// function getLenght(Obj: string | string[]){
//      console.log(Obj.length);
         
// }
// getLenght(myObj);
// console.log(myObj[0]);

interface Todo {
    title: string;
    description: string;
  }
   
  function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return { ...todo, ...fieldsToUpdate} ;
    
  }
   
  const todo1 = {
    title: "organize desk",
    description: "clear clutter",
  };
   
  const todo2 = updateTodo(todo1, {
      title: "are you a trash?",
    description: "throw out trash",
  });
  const todo3 =updateTodo(todo1, {
    title: "TODO # 3 ",
  description: "Be a strong leader",
});
console.log(todo3);
