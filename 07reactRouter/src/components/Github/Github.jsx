import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/siddharth180703")
  //       .then((res) => res.json())
  //       .then((res) => {
  //         setData(res);
  //       });
  //   }, []);
  const data = useLoaderData();
  return (
    <div className="bg-gray-700 text-3xl text-white p-4 m-2 text-center">
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="Git Picture" width={300}></img>
    </div>
  );
}
export default Github;
export const GithubInfo = async () => {
  const response = await fetch("https://api.github.com/users/siddharth180703");
  return response.json();
};
