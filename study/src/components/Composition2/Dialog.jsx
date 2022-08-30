import React, { useState } from 'react'

export default function Dialog(props) {
    const [IsOpen, setIsOpen] = useState(false)
    return (
        <>
            <button onClick={() => setIsOpen(true)}>Open</button>
            {IsOpen && <div
                style={{
                    position: "absolute",
                    zIndex: 90,
                    top: "50%",
                    lefe: "50%",
                    fransform: "translate(-50%,-50%)",
                    border: "1px solid black",
                    padding: 24,
                    backgroundColor: "white",
                }}
            >
                <h1>{props.title}</h1>
                <h5>{props.description}</h5>
                <button onClcik={() => setIsOpen(false)}>{props.button}</button>
            </div>
            }
            {IsOpen && <div style={{
                position: "fixed",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                backgroundColor: "lightgray",
            }}>
            </div>}
        </>
    )
}
