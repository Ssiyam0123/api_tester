import Link from "next/link";
import React from "react";

export default async function Category() {
  const getCategory = async () => {
    const fetchData = await fetch(
      "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
    );
    const data = fetchData.json();
    return data;
  };

  const data = await getCategory();

//   console.log(data);
  return (
    <div className="flex justify-between mt-10">
      {data?.meals.map((cat) => (
        <Link href={`/category/${cat.strCategory}`}>{cat.strCategory}</Link>
      ))}
    </div>
  );
}
