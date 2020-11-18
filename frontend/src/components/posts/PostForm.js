import React, { useState } from 'react'


function PostForm({ onSubmit }) {

    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");


    return (
        
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title" >What is on your mind</h4>
                    <div>
                        <div className="form-group">
                            <label>Body</label>
                            <input
                        
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            value={title}
                            onChange={e => setTitle(e.target.value)} />

                        <textarea
                                type="text"
                                className="form-control"
                                placeholder="Whats in your mind"
                                value={content}
                                onChange={e => setContent(e.target.value)} />
                        </div>
                        
                        <div className="form-group">
                            <button
                                className="btn btn-info"
                                onClick={ e => onSubmit({ content, title })}>
                                Post
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        
    )
}

export default PostForm
