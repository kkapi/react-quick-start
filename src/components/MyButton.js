import { useState } from "react"

export default function MyButton() {

    function HandleClick() {
        setCount(count + 1)
    }

    const [count, setCount] = useState(0);

    return (
        <button onClick={HandleClick}>Clicked {count} times</button>
    )
}