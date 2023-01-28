import './app.css'
import { useEffect, useReducer } from "react"
import {Button, Form, Input} from 'antd'
import { ToDoReducer } from "./Reducer/ToDoReducer"
import { AddTask, getAllTasks } from './Actions/todo.action';
import { TodoState } from "./Interfaces/todo.interface";
import { TableTodo } from './Components/TableTodo';
import { getTasks } from "./Helpers/httpRequest";

function App() {

  const INITIAL_STATE: TodoState={
    Tasks: [],
    IsLoading: true,
    Error: null
  }

  const [form] = Form.useForm();

  const handleSubmit = ({newTask}:any)=>{
    dispatch ( AddTask(newTask) );
    form.resetFields();
  }

  const [todo, dispatch] = useReducer(ToDoReducer, INITIAL_STATE)

  useEffect(() => {
    getTasks().then(data=>{
      dispatch ( getAllTasks(data) );
    })
  }, [])
  

  return (
    <article>
      <h1 >To-do List</h1>
      <div className='content'>
        <Form layout="inline" form={form} className="form"
        onFinish={handleSubmit} autoComplete="off" >
          <Form.Item  name={'newTask'} >
            <Input 
            placeholder="Ingrese aqui su siguiente tarea"/>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Agregar
            </Button>
          </Form.Item>
        </Form>
        <TableTodo data={todo.Tasks} loading={todo.IsLoading}/>
      </div>
    </article>
  )
}

export default App
