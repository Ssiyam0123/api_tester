import React from "react";

const MealDetails = async ({ params }) => {
  const { id } = await params;
  const getData = async () => {
    const fetchData = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );

    return fetchData.json();
  };

  const data = await getData();
  console.log(data);
  return (
    <div>
      {data.meals.map((t) => (
        <div>
          <p>{t.strMeal}</p>
          <p>{t.strCategory}</p>
          <p>{t.strArea}</p>
          <p>{t.strInstructions}</p>
        </div>
      ))}
    </div>
  );
};

export default MealDetails;
