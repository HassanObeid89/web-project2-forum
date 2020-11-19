import React ,{useState} from 'react'
import PostUpdateForm from "./PostUpdateForm"
import { FaRegUserCircle } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";


function PostCard({post, onUpdateClick, onDeleteClick}) {

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
                        className="btn btn-info" onClick={handleUpdateClick}>
                        Update
                    </button>
                    <RiDeleteBin5Line onClick={() => onDeleteClick(post)}/>
                    <button
                        className="btn btn-info" onClick={() => onDeleteClick(post)}>
                        Delete
                    </button>
                    

                </div>
        </div>
    </div>
    
}

export default PostCard
