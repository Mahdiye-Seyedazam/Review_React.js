import React, { useState } from "react";

const Categories = ({categories , filterMenue}) => {

  const [mainCategory, setMainCategory] = useState('all')

  return (
    <div className="btn-container">
      {

        categories.map((category)=>(
          <button
          key={category}
        type="button"
        onClick={()=>{setMainCategory(category)
          filterMenue(category)
        }}
        className={category === mainCategory ? 'filter-btn highlight ' : ' filter-btn'}
      >
        {category}
      </button>
        ))
}
      
      
    </div>
  );
};

export default Categories;
