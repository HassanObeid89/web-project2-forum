import React ,{useState} from 'react'
import PostUpdateForm from "./PostUpdateForm"

function PostCard({post, onUpdateClick, onDeleteClick, userData}) {

    const [isUpdating, setIsUpdating] = useState(false);
    
    const handleUpdateClick = () => {
        setIsUpdating(true);
    };

    // const userData = post.map(user => <PostCard userData={user} />)
        


    return isUpdating ?
        <PostUpdateForm oldPost={post} onUpdateClick={(updatedPost) => { setIsUpdating(false); onUpdateClick(updatedPost); }} />
        :
        <div className="card">
            <div className="card-body">
                <div>
                    {post.user.name}
                    {post.user.id}
                </div>
                <div className="card-title">
                    
                    {post.title}
                </div>

                <div>
                    {post.content}
                </div>
                <div className="form-group">
                    <button
                        className="btn-update" onClick={handleUpdateClick}>
                        Update
                    </button>
                    <button
                        className="btn-delete" onClick={() => onDeleteClick(post)}>
                        Delete
                    </button>
                    

                </div>
        </div>
    </div>
    
}

export default PostCard
