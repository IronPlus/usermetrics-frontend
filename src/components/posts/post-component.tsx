import React from "react";
import { Paper } from "@mui/material";
import { Post } from "../../models/post";

interface PostComponentProps {
  post: Post;
}

const PostComponent: React.FC<PostComponentProps> = ({ post }) => {
  return (
    <Paper
      className="post-component"
      sx={{ padding: 2, marginBottom: 4 }}
      elevation={8}
    >
      <p>
        <strong>Name: </strong>
        {post.from_name}
      </p>
      <p>
        <strong>Message: </strong>
        {post.message}
      </p>
      <p>
        <strong>Time: </strong>
        {post.created_time}
      </p>
    </Paper>
  );
};

export default PostComponent;
