import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import { GetGrid } from "./components/GetGrid";

export const GifExpertApp = () => {
  const [categorias, setCategorias] = useState(["Death Note"]);
  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory ingresarCategorias={setCategorias} />
      <hr />
      <ol>
        {categorias.map((cat) => (
          <GetGrid key={cat} category={cat} />
        ))}
      </ol>
    </>
  );
};
