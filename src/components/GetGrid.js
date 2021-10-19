import React from "react";
import { GifGridItem } from "../GifGridItem";
import { useFetchHook } from "../hooks/useFetchHook";

export const GetGrid = ({ category }) => {
  const { data: images, loading } = useFetchHook(category);

  return (
    <>
      <div className="fondo">
        <h3>{category}</h3>
        <span className="carga">
          {loading ? "...Cargando" : "Datos cargados"}
        </span>
      </div>
      <br />
      <br />
      <div className="cardGrid">
        {images.length > 0 ? (
          images.map((img) => <GifGridItem key={img.id} {...img} />)
        ) : (
          <span>¡Ups! no se encontro gifs...</span>
        )}
      </div>
    </>
  );
};
