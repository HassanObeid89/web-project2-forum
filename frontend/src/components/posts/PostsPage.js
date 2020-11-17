import React, {useState, useEffect} from "react";
import PostsApi from "../../api/PostsApi";
import PostForm from "./PostForm";
import Api from "../../api/Api"

function PostsPage() {

    // const [body, setBody] = useState(null);

    // useEffect(() => {
    //     Api.get("/posts")
    //     .then  (r => {
    //         const body = r.data;
    //         setBody(body)
    //     });
    // }, []);

    
  

    return (
        <div>
            {/* <div>here is the comments{body}</div> */}
            {/* <PostForm onSubmit={comment}/> */}
        </div>
    );
}

export default PostsPage;