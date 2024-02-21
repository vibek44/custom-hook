import { useEffect, useState } from 'react';
import axios from 'axios'

export const useResource=(baseUrl)=>{
  const [resources,setResources]=useState([])

  useEffect(()=>{
    axios.get(baseUrl)
    .then(res=>{
      //console.log(res);
     setResources(res.data)})
    })

  const create=(newObject)=>{
    axios.post(baseUrl,newObject)
    .then(res=>setResources(resources.concat(res.data)))
    .catch(err=>console.log('err'))
  }

  const service={
    create
  }

  return[resources,service]

}

export const useField=(type)=>{

const [value,setValue]=useState('')

const onChange=(e)=>{
  setValue(e.target.value)
}

return{
  type,
  value,
  onChange
}


}