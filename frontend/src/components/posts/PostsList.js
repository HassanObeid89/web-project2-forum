import React, {useState} from 'react'
import Post from './Post'

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
