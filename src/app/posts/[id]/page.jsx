import React from "react";

const PostDetails = async ({ params }) => {
  const { id } = await params
  const getDetails = async () => {
    const fetchData = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const data = fetchData.json();
    return data;
  };

  const data = await getDetails();

  return <div>{data?.id}</div>;
};

export default PostDetails;
