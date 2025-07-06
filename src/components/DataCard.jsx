import Link from "next/link";
import React from "react";

const postData = async () => {
  const fetchData = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = fetchData.json();
//   console.log(data);
  return data;
};

const DataCard = async () => {
  const data = await postData();
  console.log(data);
  return (
    <div className="grid grid-cols-3 gap-4">
      {data.map((card) => (
        <div className="border-2 space-y-4">
          <p> post no : {card?.id}</p>
          <p> title:{card?.title}</p>
          <p>{card?.body}</p>
          <Link className="btn border-2 bg-white text-black p-2 rounded-2xl" href={`/posts/${card?.id}`}>
            details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default DataCard;
