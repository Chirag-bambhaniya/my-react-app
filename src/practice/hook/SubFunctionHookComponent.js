import React, { useEffect } from "react";

export default function SubFunctionHookComponent(){

    useEffect(() => {

        return () => console.log('Component Hide');

    });

    return (

        <div>
            Sub Functional Component
        </div>

    )

}