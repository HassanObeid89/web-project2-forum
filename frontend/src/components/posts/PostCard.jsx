import React ,{useState} from 'react'
import CommentsPage from '../comment/CommentsPage';
import PostUpdateForm from "./PostUpdateForm"
import { FaRegUserCircle } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";


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
                <div>
                    <FaRegUserCircle />
                    {post.user.name}
                    
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
                
                    <CommentsPage />
                </div>
        </div>
    </div>
    
}

export default PostCard
