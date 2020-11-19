import React, {useState, useEffect} from "react";


import Api from "../../api/Api";
import PostCard from "./PostCard";
import PostCreateForm from "./PostCreateForm";


function PostsPage() {

    const [posts, setPosts] = useState([]);
    const [userData, setUserData] = useState([]);
    const  [email, setEmail] = useState("")

    const getAll = () => {
        Api.get("/posts")
            .then((response) => setPosts(response.data));
    };
    

    const createPost = (postData) => {
           return  Api.post("/posts", postData)
            .then((response) => {setPosts([...posts, response.data])});

    }

    useEffect (() => {
        Api.get("/user/me")
            .then(response => {
                const userData = response.data
                setUserData(userData)
            
            });
    },[]);

    useEffect (() => {
        Api.get("/user/")
            .then(response => {
                const email = response.data
                setEmail(email);
            });
    }, []);

    const deletePost = (post) => {
        if (post.user.email === email) {
            
            Api.delete("/posts/" + post.id)
                .then(r => getAll());

        }else{
            alert("you cant delete the post");
        }
    
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
            

            <PostCreateForm userData={userData}  onCreateClick={createPost} />

            {/* {
                posts.map(post => (<PostCreateForm 
                    key={post.id}
                    post={post}
                    // email={email}
                    onCreateClick={createPost} />))
                    .filter(user => (posts.user.email === email))
                
            } */}

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