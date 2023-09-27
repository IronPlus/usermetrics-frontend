import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  Fab,
  Pagination,
} from "@mui/material";
import * as React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Post } from "../../models/post";
import getPostsByPageNum from "../../services/posts-service";
import HeaderComponent from "../shared/header-component";
import ProgressComponent from "../shared/progress-component";
import ScrollTop from "../shared/scroll-top-component";
import PostComponent from "./post-component";

interface PostsComponentState {
  pageNum: number;
  postsPerPage: number;
  posts: Post[] | null;
}

const PostsComponent: React.FC = () => {
  const initialState = (): PostsComponentState => {
    return {
      pageNum: 1,
      postsPerPage: 5,
      posts: null,
    };
  };

  const [state, setState] = useState(initialState);

  const navigate = useNavigate();

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    pageNum: number
  ) => {
    setState({
      pageNum: pageNum,
      postsPerPage: state.postsPerPage,
      posts: null,
    });
  };

  const showAllPosts = () => {
    setState({
      pageNum: state.pageNum,
      postsPerPage: 10,
      posts: null,
    });
  };

  useEffect(() => {
    if (state.posts) return;
    getPostsByPageNum(state.pageNum)
      .then((posts) => {
                setState({
          pageNum: state.pageNum,
          postsPerPage: state.postsPerPage,
          posts,
        });
      })
      .catch(() => {
        navigate("/error");
      });
  });

  if (state.posts !== null) {
    return (
      <React.Fragment>
        <CssBaseline />
        <HeaderComponent />
        <Container
          maxWidth="md"
          sx={{ marginBottom: 5 }}
          className="posts-container"
        >
          <h2 id="back-to-top-anchor">All user posts</h2>
          <Box my={2} display="flex" justifyContent="right">
            <Pagination
              count={10}
              page={state.pageNum}
              color="primary"
              onChange={handlePageChange}
              sx={{ marginBottom: 2 }}
            />
          </Box>
          <div>
            {state.posts.slice(0, state.postsPerPage).map((post) => (
              <PostComponent key={post.id} post={post} />
            ))}
          </div>
          <div>
            {state.postsPerPage === 5 && (
              <Button
                className="show-all-button"
                variant="contained"
                onClick={showAllPosts}
              >
                Show all posts
              </Button>
            )}
          </div>
        </Container>
        <ScrollTop>
          <Fab size="small">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </React.Fragment>
    );
  } else return <ProgressComponent />;
};

export default PostsComponent;
