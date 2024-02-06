import React from "react";

import CategroyList from "../Components/Category/CategoryList";

const Pocetna = () => {
  const CATEGORIES = [
    {
      id: "c1",
      name: "Toperi",
      image:
        "https://deadizajn.hr/wp-content/uploads/2023/05/PhotoRoom_20240131_234054.jpg",
      products: 20,
    },
    {
      id: "c2",
      name: "Personalizirane Lampe",
      image:
        "https://deadizajn.hr/wp-content/uploads/2023/05/PhotoRoom_20240131_231221.jpg",
      products: 14,
    },
    {
      id: "c3",
      name: "Božićni asortiman",
      image:
        "https://deadizajn.hr/wp-content/uploads/2023/10/PhotoRoom_20240131_224141.jpg",
      products: 17,
    },{
      id: "c4",
      name: "Uskršnji asortiman",
      image:
        "https://deadizajn.hr/wp-content/uploads/2022/10/eo0qg891.jpg",
      products: 10,
    },
  ];

  return <CategroyList items={CATEGORIES} />;
};

export default Pocetna;
