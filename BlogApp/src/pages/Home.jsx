import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import authService from "../appwrite/auth";
import appwriteServices from "../appwrite/config";
import { Link } from "react-router-dom";
function Home() {
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
        //console.log(posts);
        setPosts(userPosts);
      }
    });
  }, []);
  console.log(posts);
  const user = {
    name: "Siddharth",
    title: "Full Stack Developer & Competitive Programmer",
    bio: "I'm a passionate developer working with a variety of technologies and always learning new things. I enjoy solving complex problems and building impactful projects.",
    image: "https://cdn-icons-png.flaticon.com/512/219/219970.png",
  };
  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <Link to="/login" className="font-bold text-3xl">
                Login to read Posts
              </Link>
            </div>
          </div>
        </Container>
      </div>
    );
  } else {
    return (
      <Container>
        <div className="flex flex-col items-center text-center">
          <img
            src={user.image}
            alt={user.name}
            className="rounded-full w-32 h-32 mb-4 object-cover"
          />
          <h1 className="text-3xl font-bold mb-4">Welcome, {user.name}!</h1>
          <p className="text-xl text-gray-600 mb-6">{user.title}</p>
          <p className="text-md text-gray-500">{user.bio}</p>
        </div>
      </Container>
    );
  }
}

export default Home;
