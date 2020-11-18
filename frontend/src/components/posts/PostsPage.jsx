import React, {useState, useEffect} from "react";


import Api from "../../api/Api";
import CommentsPage from "../comment/CommentsPage";
import PostCard from "./PostCard";
import PostCreateForm from "./PostCreateForm";


function PostsPage() {

    const [posts, setPosts] = useState([]);

    const getAll = () => {
        Api.get("/posts")
            .then((response) => setPosts(response.data));
    };
    

    const createPost = (postData) => {
           return  Api.post("/posts", postData)
            .then((response) => {setPosts([...posts, response.data])});

    }

    const deletePost = (post) => {
        Api.delete("/posts/" + post.id)
            .then(r => getAll());
    }


    const updatePost = (updatedPost) => {
        Api.put("/posts/", updatedPost)
            .then(response => getAll());
    };

    useEffect(() => {
        getAll();
    },[]);


    return (
        <div className="card">
            <PostCreateForm  onCreateClick= {createPost} />
            {
                posts.map(post => (<PostCard
                    key={post.id}
                    post={post}
                    onUpdateClick={updatePost}
                    onDeleteClick={deletePost}
                     />))
            }           
            
        </div>
    );
}

export default PostsPage;