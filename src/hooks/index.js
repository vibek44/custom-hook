import { useEffect, useState } from 'react';
import axios from 'axios'

export const useResource=(baseUrl)=>{
  const [resources,setResources]=useState([])

  useEffect(()=>{
    //console.log('fetching...')
    const fetchData=async()=>{
     const res=await axios.get(baseUrl)
      console.log(res)
      setResources(res.data)
    }

    fetchData()
  },[])

  const create=async(newObject)=>{
    const res=await axios.post(baseUrl,newObject)
    setResources(resources.concat(res.data))
    
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