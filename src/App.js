import React from "react";

const Food = (props) => {
  return (
    <div>
      <h2>I like {props.name}</h2>
      <img src={props.picture} style={{ width: "200px", height: "200px" }} />
    </div>
  );
};

const foodILike = [
  {
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
  },
  {
    name: "삼겹살",
    image:
      "https://recipe1.ezmember.co.kr/cache/recipe/2020/06/30/d77f639c047a6cf6d5afb463d9d210ce1.jpg",
  },
  {
    name: "부대찌개",
    image:
      "https://recipe1.ezmember.co.kr/cache/recipe/2018/02/27/b5806f01ccb6f6d5d9aa94bdd6f4287e1_m.jpg",
  },
  {
    name: "된장찌개",
    image:
      "https://recipe1.ezmember.co.kr/cache/recipe/2016/10/27/462f2e2c70a260e044c4450bc18e6f651_m.jpg",
  },
];

const App = () => {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
};

export default App;
