import { useEffect } from "react"

const Counter = ({ count, data }) => {
    useEffect(() => {
        console.log("Mount Phase Only")
    }, [])


    useEffect(() => {
        console.log("Update Phase Only")
    }, [count])

    useEffect(()=>{
        return()=>{
            console.log("unmount phase only")
        }
    },[])

    return (
        <div>
            <h1>Counter value: {count}</h1>
            <h1>Data value: {data}</h1>
        </div>
    )
}

export default Counter



