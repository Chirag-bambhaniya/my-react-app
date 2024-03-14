import { useState } from "react";

export default function UserCounter(initialValue = 0) {

    const [count, setCount] = useState(initialValue)

    let increment = () => setCount( count + 1 )

    return [ count, increment ]

}