import React, { useState, useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom';

export default function HttpRequestComponent() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {

                return res.json();

            })

            .then((data) => {
                setData(data);
            })
    }, [])
    return (

        <>
            {/* {data.map((photo) => (
                <img src={photo.url} alt={photo.title} width={100} />
            ))} */}

            <table className='table table-success table-striped '>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>User ID</th>
                        <th>Title</th>
                        <th>Cody</th>
                        <th>See link</th>
                        <th>See Comment</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((data) => (
                        <Fragment key={data.id}>
                            <tr>
                                <td>{data.id}</td>
                                <td>{data.userId}</td>
                                <td>{data.title}</td>
                                <td>{data.body}</td>
                                <td>
                                    <Link to={`/post/${data.id}`}>
                                        See Post
                                    </Link>
                                </td>
                                <td>
                                    <Link to={`/post/${data.id}/comments`}>
                                        See Comment
                                    </Link>
                                </td>
                            </tr>
                        </Fragment>
                    ))}
                </tbody>
            </table>
        </>

    )
}
