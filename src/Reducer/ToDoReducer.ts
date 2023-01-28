import { TodoAction } from '../Actions/todo.action';
import { TodoState } from '../Interfaces/todo.interface';
import { Task } from '../Interfaces/task.interface';


export const ToDoReducer =  (state:TodoState, {type,payload}:TodoAction):TodoState => {
  switch (type){
    case 'getTasks':
      return {
        IsLoading: false,
        Tasks: payload.value.reverse(),
        Error: null
      }
    case 'AddTask':
      return {
        ...state,
        Tasks: [{
          id: state.Tasks.sort((a,b)=>a.id-b.id).reverse()[0].id+1,
          title: payload.value,
          userId: 1,
          completed: false
        },...state.Tasks]
      }

    default:
      return state;
  }
}


