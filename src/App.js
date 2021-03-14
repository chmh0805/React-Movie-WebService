import React from "react";
import PropTypes from "prop-types";

const Food = ({ name, picture, rating }) => {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img
        src={picture}
        style={{ width: "200px", height: "200px" }}
        alt={name}
      />
    </div>
  );
};

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "삼겹살",
    image:
      "https://recipe1.ezmember.co.kr/cache/recipe/2020/06/30/d77f639c047a6cf6d5afb463d9d210ce1.jpg",
    rating: 4.9,
  },
  {
    id: 3,
    name: "부대찌개",
    image:
      "https://recipe1.ezmember.co.kr/cache/recipe/2018/02/27/b5806f01ccb6f6d5d9aa94bdd6f4287e1_m.jpg",
    rating: 4.8,
  },
  {
    id: 4,
    name: "된장찌개",
    image:
      "https://recipe1.ezmember.co.kr/cache/recipe/2016/10/27/462f2e2c70a260e044c4450bc18e6f651_m.jpg",
    rating: 4.7,
  },
];

const renderFood = (dish) => {
  return (
    <Food
      key={dish.id}
      name={dish.name}
      picture={dish.image}
      rating={dish.rating}
    />
  );
};

const App = () => {
  return <div>{foodILike.map(renderFood)}</div>;
};

export default App;
