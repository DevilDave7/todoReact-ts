import { Task } from '../Interfaces/task.interface';

export type TodoAction =
  |{type: 'getTasks', payload:{value:Task[]}}
  |{type: 'AddTask', payload:{value:string}}

export const getAllTasks = (value:Task[]):TodoAction=>(
  {type: 'getTasks', payload:{value}}
)

export const AddTask = (value:string):TodoAction=>(
  {type: 'AddTask', payload:{value}}
)