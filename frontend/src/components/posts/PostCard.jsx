import React ,{useState} from 'react'
import PostUpdateForm from "./PostUpdateForm"

function PostCard({post, onUpdateClick, onDeleteClick}) {

    const [isUpdating, setIsUpdating] = useState(false);

    const handleUpdateClick = () => {
        setIsUpdating(true);
    };


        


    return isUpdating ?
        <PostUpdateForm oldPost={post} onUpdateClick={(updatedPost) => { setIsUpdating(false); onUpdateClick(updatedPost); }} />
        :
        <div className="card">
            <div className="card-body">
                <div className="card-title">
                    {post.title}
                </div>

                <div>
                    {post.content}
                </div>
                <div className="form-group">
                    <button
                        className="btn btn-info" onClick={handleUpdateClick}>
                        update
                    </button>
                    <button
                        className="btn btn-info" onClick={() => onDeleteClick(post)}>
                        Delete
                    </button>
                    

                </div>
        </div>
    </div>
    
}

export default PostCard
