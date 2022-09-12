import React from 'react'
import ThankDialog from "./ThankDailog"
import { createPortal } from "react-dom"

const Portal = (props) => {
    return createPortal(props.children, document.getElementById("portal"));
};

export default function Example() {
    s
    return (
        <div>
            <Portal>
                <ThankDialog />
            </Portal>
            <div style={{ position: "absolute" }}>
                <button>ㅎㅇ</button>
            </div>
        </div>
    )
}
