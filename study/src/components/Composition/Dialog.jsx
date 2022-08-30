import React from 'react'

export default function Dialog(props) {
    return (
        <div style={{ backgroundColor: 'pink', display: 'flex', justifyContent: "center" }}>
            {props.children}
        </ div>
    )
}
