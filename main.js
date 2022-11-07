//SET TIME OUT 

// setTimeout(() => {
// console.log('Test')
// },3000)
 
// setInterval(() => {
//     console.log('Test2')
// },3000)


const TodoListTasks = []
var todoListAddBtn = document.getElementById('todo-list-task-text-add-btn')
todoListAddBtn.addEventListener('click', AddTodo)

function AddTodo(event){
    var todoListTaskText = document.getElementById('todo-list-task-text').value;
    console.log(todoListTaskText)
}
