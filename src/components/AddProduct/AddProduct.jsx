import React from "react";
import { Row } from "./styled";

const AddProduct = () => {
  return (
    <form>
      <Row>
        <div>
          <label htmlFor="name">Producto:</label>
          <input id="name" name="name" type="text" />
        </div>

        <div>          
          <label htmlFor="quantity">Cantidad:</label>
          <input id="quantity" name="quantity" type="number" />
        </div>

        <div>          
          <label htmlFor="unit">Unidad:</label>
          <input
            id="unit"
            name="unit"
            type="text"
            placeholder="cm, metros, gramos, etc."
          />
        </div>
      </Row>

      <Row>
        <div>
          <label htmlFor="description">Descripción</label>
          <textarea id="description" name="description" cols="40" rows="4"></textarea>
        </div>
      </Row>

      <Row>
        <button type="submit">Guardar</button>
      </Row>
    </form>
  );
};

export default AddProduct;
