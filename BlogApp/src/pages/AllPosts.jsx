import React, { useEffect, useState } from "react";
import { PostCard, Container } from "../components";
import appwriteServices from "../appwrite/config";
import authService from "../appwrite/auth";
function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    authService.getCurrentUser().then((user) => {
      setUserId(user.$id);
    });
  }, []);
  useEffect(() => {
    appwriteServices.getPosts([]).then((posts) => {
      if (posts) {
        const userPosts = posts.documents.filter(
          (post) => post.userId === userId
        );
        console.log(posts);
        setPosts(userPosts);
      }
    });
  }, []);
  return (
    <div className="w-full py-8">
      <Container>
        {posts.length === 0 ? (
          <p>No posts available.</p>
        ) : (
          <div className="flex flex-wrap gap-12">
            {posts.map((post) => (
              <div
                key={post.$id}
                className="p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
              >
                <PostCard post={post} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}

export default AllPosts;
