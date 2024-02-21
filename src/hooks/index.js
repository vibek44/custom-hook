import { useState } from 'react';
import axios from axios

export const useResource=(url)=>{


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