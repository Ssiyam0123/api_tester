import React from "react";

const PostDetails = async ({ params }) => {
  const { id } = await params;
  const getDetails = async () => {
    const fetchData = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const data = fetchData.json();
    return data;
  };

  const data = await getDetails();
//   console.log(data);

  return (
    <div className="flex flex-col text-center mt-10 space-y-10">
      <p>post no: {data?.id}</p>
      <p> {data?.title}</p>
      <p>{data?.body}</p>
    </div>
  );
};

export default PostDetails;
