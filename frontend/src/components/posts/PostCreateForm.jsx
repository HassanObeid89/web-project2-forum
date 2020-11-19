import React, { useState } from 'react'
import { FaRegUserCircle } from "react-icons/fa";


function PostCreateForm({  onCreateClick, userData }) {

    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    

    const onCreatePostClick = () => {
        const postData = {title, content};
        onCreateClick(postData)
            .then(() => {
                setTitle("");
                setContent("");
            })
    }

   

    return (
        
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title" >
                    
                    <FaRegUserCircle />
                    {userData.name}
                    
                    </h4>
                    <div>
                        <div className="form-group">
                            
                            <input
                            type="text"
                            className="form-control"
                            placeholder="Type the title here"
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
                            onClick={onCreatePostClick}>
                                Post
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    )
    
}

export default PostCreateForm
