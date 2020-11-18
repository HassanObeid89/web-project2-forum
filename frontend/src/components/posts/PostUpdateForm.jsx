import React, {useState} from 'react'

function PostUpdateForm({ oldPost, onUpdateClick }) {

    const [title, setTitle] = useState(oldPost.title);
    const [content, setContent] = useState(oldPost.content);

    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title" >Update Post</h4>
                <div>
                    <div className="form-group">
                        
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
                            className="btn btn-primary"
                            onClick={() => onUpdateClick ({...oldPost, title, content})}>
                            Save
                            </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostUpdateForm
