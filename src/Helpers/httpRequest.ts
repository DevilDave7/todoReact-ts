import axios from "axios"

const BASE_URI = 'https://jsonplaceholder.typicode.com/todos';
const headers = {
  "Content-Type": "Application/json"
}


export const getTasks = async() => {
  return await axios.get(BASE_URI,{headers})
  .then(({data})=>data).catch(error=>(
    {
      code:505,
      data:[],
      error
    }
  ))
}
