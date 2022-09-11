import React from 'react'
import "./CommentItem.css"
import CommentItem from './CommentItem'
export default function Comments({ commentList }) {
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
