import { useState } from "react";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

  return (
    <>
      <h1>GifExpertApp</h1>
      <ol>
        {categories.map(category => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
