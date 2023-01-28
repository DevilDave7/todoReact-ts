import { Table } from "antd"
import { CheckOutlined,CloseOutlined } from '@ant-design/icons'
import { Task } from "../Interfaces/task.interface"

interface Props{
  data: Task[],
  loading: boolean
}

const columns = [
  {
    dataIndex:'id',
    title:'#'
  },
  {
    dataIndex:'userId',
    title:'User Id'
  },
  {
    dataIndex:'title',
    title:'Description'
    },
  {
    dataIndex:'completed',
    title:'Completed',
    render :(res:Task)=>res.completed?<CheckOutlined />:<CloseOutlined /> }
]


export const TableTodo = ({data,loading=true}:Props) => {

  return (
    <Table
     columns={columns}
      dataSource={data}
      scroll={{y:450}}
      loading={loading}
      rowKey={(res:Task)=>res.id}
      size="small"
      style={{width:'75%'}}
    />
  )
}
