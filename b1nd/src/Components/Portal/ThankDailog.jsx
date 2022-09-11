import React from 'react'
import Dialog from './Dialog'

export default function ThankDailog() {
    return (
        <Dialog
            title={<h1 style={{ color: 'purple' }}>Thanks</h1>}
            description="HiHi"
            button={
                <button style={{ backgroundColor: "blue", color: "white" }}>
                    close
                </button>
            }
        />
    )
}
