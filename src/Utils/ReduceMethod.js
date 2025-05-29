export const nextTd = (todoList) => {
    return todoList.reduce((initial, todoitem)=>{
        return initial.id > todoitem.id ? initial : todoitem
    })
}