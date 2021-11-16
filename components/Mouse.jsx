import {useState} from "react"

export default function Mouse() {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const estilo = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#222",
        color: "#fff",
        height: "100vh"
    }

    const move = event => {
        setX(event.clientX)
        setY(event.clientY)
    }

    return (
        <div style = {estilo} onMouseMove={move}>
            <div>Mouse x : {x}</div>
            <div>Mouse y : {y}</div>
        </div>
    )
}