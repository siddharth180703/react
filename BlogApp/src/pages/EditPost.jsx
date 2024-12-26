import React, { useEffect, useState } from "react";
import { PostForm, Container } from "../components";
import appwriteServices from "../appwrite/config";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function EditPost() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    appwriteServices.getPost(slug).then((post) => {
      if (post) {
        console.log(post);
        setPost(post);
      } else {
        navigate("/");
      }
    });
  }, [slug, navigate]);
  //console.log(post);
  return post ? (
    <div className="py-8">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  ) : null;
}

export default EditPost;
