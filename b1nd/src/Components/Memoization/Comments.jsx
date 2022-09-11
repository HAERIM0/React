import React from 'react'
import "./CommentItem.css"
import CommentItem from './CommentItem'
import { useCallback } from 'react';
export default function Comments({ commentList }) {
    const handleChange = useCallback(() => {
        console.log("눌림");
    }, []);

    return (
        <div>
            {commentList.map((comment) => (
                <CommentItem
                    key={comment.title}
                    title={comment.title}
                    content={comment.content}
                    likes={comment.likes}
                    onClick={() => console.log('눌림')}
                />
            ))}
        </div>
    );
}
