// import { createSlice } from "@reduxjs/toolkit";


// const todoSlice = createSlice({
//     name: "todo",
//     initialState: {
//         todos: []
//     },
//     reducers: {
//         addTodo: (state, payload)=>{
//             state.todos.push(payload); 
//         },
//         editTodo: (state)=>{
//             state.todos
//         },
//         deleteTodo: (id)=>{
//             state.todos.filter((e)=> e.id != id)
//         }

//     }
// });
// export const {addTodo, editTodo, deleteTodo} = todoSlice.actions;
// export default todoSlice.reducer;









import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    todos: []
    
}
console.log(initialState.todos);
const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
      addTodo: (state, action) => {
        state.todos.push(action.payload);
      },
      editTodo: (state, action) => {
        const { id, inputValue, inputTextArea } = action.payload;
        const todo = state.todos.find((todo) => todo.id === id);
        if (todo) {
          todo.inputValue = inputValue;
          todo.inputTextArea = inputTextArea;
        }
      },
      deleteTodo: (state, action) => {
        const id = action.payload;
        state.todos = state.todos.filter((e) => e.id !== id);
      },
    },
  });
  



export const { addTodo, editTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
