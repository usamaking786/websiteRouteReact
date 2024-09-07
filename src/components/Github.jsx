import React from 'react'

import { useLoaderData } from 'react-router-dom';


function Github() {
  const data = useLoaderData();
    // const [data,setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/usamaking786')
    //     .then((response)=> response.json())
    //     .then((data) => setData(data))
    //     console.log(data);
        
    //   }, [])
  return (
    <div>

       Github Data {data.login}

       <img src={data.avatar_url} alt={data.login}  width="200px"/>
    </div>
  )
}

export default Github

export const githubinfoLoader = async ()=> {
  const response = await fetch('https://api.github.com/users/usamaking786')
  return response.json();
}