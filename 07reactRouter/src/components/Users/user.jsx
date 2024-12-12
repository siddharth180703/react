import React from "react";
import { useParams } from "react-router-dom";
function User() {
  const { userid } = useParams();
  return (
    <>
      <h1 className="text-white bg-gray-700 text-center text-3xl py-4">
        User is: {userid}
      </h1>
    </>
  );
}
export default User;
