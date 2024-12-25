import React, { useEffect, useState } from "react";
import { PostCard, Container } from "../components";
import appwriteServices from "../appwrite/config";
function AllPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    appwriteServices.getPosts([]).then((posts) => {
      if (posts) setPosts(posts.documents);
    });
  }, []);
  return (
    <div className="w-full py-8">
      <Container>
        {posts.map((post) => {
          <div className="flex flex-wrap">
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard post={post} />;
            </div>
          </div>;
        })}
      </Container>
    </div>
  );
}

export default AllPosts;
