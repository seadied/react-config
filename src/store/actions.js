
export const ADD_TODO = 'ADD_TODO'


export const addTodo = (data) => {
    // console.log(data)
    return {
        type: ADD_TODO,
        data
    }
}