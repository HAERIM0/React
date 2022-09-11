import React from 'react'
import Dialog from './Dialog'

export default function thankDailog() {
    return (
        <Dialog
            title={<h1 style={{ color: 'purple' }}>Thanks</h1>}
            description="HiHi"
            button="clese" />
    )
}
