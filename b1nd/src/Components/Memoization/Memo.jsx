import React from 'react'
import { useState, memo, useEffect } from 'react';
import Comments from "./Comments"
import "./CommentItem.css"

const commentList = [
    { title: "comment1", content: "message1", likes: 1 },
    { title: "comment2", content: "message2", likes: 1 },
    { title: "comment3", content: "message3", likes: 1 },
]

export default function Memo() {
    const [comments, setComments] = useState(commentList);

    useEffect(() => {
        const interval = setInterval(() => {
            setComments((prevComments) => [
                ...prevComments,
                {
                    title: `comment1${prevComments.length + 1}`, content: `message${prevComments.length + 1}`, likes: 1,
                    content: `message${prevComments.length + 1}`, content: `message${prevComments.length + 1}`, likes: 1,
                    likes: 1,
                },
            ]);
        }, 1000)
        return () => {
            clearInterval(interval);

        }
    }, []);
    return <Comments commentList={comments} />

}
