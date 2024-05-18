import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../api/axios";
import "../styles/CreatePost.css";

function CreatePost(props) {
  const categoryId = props.categoryId;
  const navigate = useNavigate();

  console.log("categoryId", categoryId);

  // Define state for post
  const [post, setPost] = useState({
    title: "",
    content: "",
    user_id: 1,
    category_id: categoryId,
  });

  const handleAddPost = async () => {
    try {
      // Send POST request to create a new post
      await axiosInstance.post("/posts", post);

      // Clear the form fields after successful post creation
      setPost({
        title: "",
        content: "",
        user_id: 1, // Resetting user_id if needed
        category_id: categoryId,
      });

      // Redirect the user to a specific page after successful post creation
      // For example, you can redirect them back to the list of posts
      navigate(-1)
    } catch (error) {
      console.error("Failed to create post:", error);
    }
  };

  // Function to handle changes in input fields
  const handlepostChange = (event) => {
    const { name, value } = event.target;
    // Update the corresponding field in the post state
    setPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  return (
    <div className="create-post">
      <h2>Create a new post</h2>

      <label className="create-post-content-wrapper">
        <input
          type="text"
          id="title"
          placeholder="Title"
          name="title"
          value={post.title}
          onChange={handlepostChange}
        />
      </label>

      <label className="create-post-content-wrapper">
        <textarea
          id="content"
          placeholder="Write down your ideas here..."
          name="content"
          value={post.content}
          onChange={handlepostChange}
        />
      </label>

      <label className="create-post-content-wrapper">
        <button type="submit" onClick={handleAddPost}>Create post</button>
      </label>
    </div>
  );
}

export default CreatePost;
