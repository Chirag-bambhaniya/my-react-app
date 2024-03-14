let ListKeyComponent = () => {

    let details = [
        {
            name: 'Chirag',
            role: 'Web Designer'
        },
        {
            name: 'Gargi',
            role: 'Web Designer'
        },
        {
            name: 'Mehul',
            role: 'Full Stack'
        }
    ];

    // console.log(details.name);
    // console.log(details.role);

    return (

        // details.map((value , index ) => {

        //     console.log(value);
        //     console.log(index);

        // })

        // details.map((value, index) =>

        //     <div key={index}>{value.name} , {value.role}</div>

        // )

        <ul>

           { details.map((value, index) =>
           
                <h3 key={index}>
                    <li>{value.name}</li>
                    <li>{value.role}</li>
                    <br />
                </h3> 

           )}


        </ul>
    )

}

export default ListKeyComponent;