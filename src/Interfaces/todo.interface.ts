import { Task } from './task.interface';

export interface TodoState{
  Tasks: Task[] ,
  IsLoading: boolean,
  Error: any
}