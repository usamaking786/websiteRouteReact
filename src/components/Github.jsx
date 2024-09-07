import React, {useEffect} from 'react'
import { useState } from 'react';

function Github() {
    const [data,setData] = useState([]);
    useEffect(() => {
        fetch('https://api.github.com/users/usamaking786')
        .then((response)=> response.json())
        .then((data) => setData(data))
        console.log(data);
        
      }, [])
  return (
    <div>

       Github Data {data.login}

       <img src={data.avatar_url} alt={data.login}  width="200px"/>
    </div>
  )
}

export default Github