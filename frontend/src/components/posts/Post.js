import React from 'react'

function Post({data}) {

    

    return (
        <div className="card">
            <div className="card-body">
                <div className="card-title">
                    {data.title}
                </div>

                <div>
                    {data.content}
                </div>
                
        </div>
    </div>
    )
}

export default Post
