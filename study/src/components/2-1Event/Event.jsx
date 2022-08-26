import React from 'react'

export default function Event() {
    const btClick = () => {
        console.log("click");
    }

    const Capture = () => {
        console.log("Capture");
    }

    const Capture2 = () => {
        console.log("capture2")
    }

    const Bubble = () => {
        console.log("Bubble");
    }
    return (
        <div onClickCapture={Capture}>
            <div onClickCapture={Capture2} onClick={Bubble}>
                <button onClick={btClick}>button</button>
            </div>
        </div>
    )
}
