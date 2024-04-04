import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function Commit() {
  const { id } = useParams();
  const [data, setData] = useState('');

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
        console.log(data[0].body)
      });
  }, []);

  return (
    <div>
      <span className='fs-2 text-light  bg-secondary p-2 rounded-5'>Post Id : {data.length > 0 && data[0].postId} </span> <br/><br/>
      <span className='fs-2 text-light  bg-secondary p-2 rounded-5'>Email : {data.length > 0 && data[0].email} </span><br/><br/>
      <span className='fs-2 text-light  bg-secondary p-2 rounded-5'>Body : {data.length > 0 && data[0].body} </span><br/><br/>
    </div>
  )
}
