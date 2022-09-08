import React from 'react'

export default function Extraction() {
    return (
        <div className='commnt'>
            <div className='UserInfo'>
                <img
                    className='Avatar'
                    src={props.author.avatarUrl}
                    alt={props.author.name}
                />
            </div>

        </div>
    )
}
