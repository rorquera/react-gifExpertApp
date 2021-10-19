import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ ingresarCategorias }) => {
  const [inputValue, setInputValue] = useState("");

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (inputValue.length > 0) {
      ingresarCategorias((listaCategorias) => [inputValue, ...listaCategorias]);
      setInputValue("");
    }
  };
  return (
    <form onSubmit={handleOnSubmit}>
      <input type="text" value={inputValue} onChange={handleOnChange} />
    </form>
  );
};

AddCategory.propTypes = {
  ingresarCategorias: PropTypes.func.isRequired,
};

export default AddCategory;
