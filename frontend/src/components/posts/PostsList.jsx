import React from 'react'
import Post from './PostCard'

function PostsList({ data }) {

    
    
    return (
        <div>
            {
                data.map(post => <Post data={post}/>)
            }

            
            
        </div>
    )
}

export default PostsList
