import Link from "next/link";
import React from "react";

const CategoryPage = async ({ params }) => {
  const { cat } = await params;
  const getData = async () => {
    const fetchData = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`
    );
    return fetchData.json();
  };
  // console.log(cat)
  const data = await getData();
  console.log(data);
  return (
    <div>
      {data?.meals.map((meal) => (
        <Link href={`/meal-details/${meal?.idMeal}`}>
          <p>{meal?.strMeal}</p>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;
