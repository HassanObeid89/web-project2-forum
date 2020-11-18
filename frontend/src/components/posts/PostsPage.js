import React, {useState, useEffect} from "react";
import PostsApi from "../../api/PostsApi";


import PostForm from "./PostForm";
import Api from "../../api/Api";
import PostsList from "./PostsList";


function PostsPage() {
    const [body, setBody] = useState(null);




    const [posts, setPosts] = useState([]);

    useEffect(() => {
        Api.get("/posts")
            .then((res) => setPosts(res.data))
    },[]);
    

    const createPost = (postData) => {
        Api.post("/posts", postData)
            .then((r) => console.log(r));

    }

    
  

    return (
        <div className="card">
            <PostForm onSubmit= {createPost} />
            <PostsList data= {posts}/>
           

        </div>
    );
}

export default PostsPage;