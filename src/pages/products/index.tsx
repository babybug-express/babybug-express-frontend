import React, { FunctionComponent, ReactElement } from "react";

interface ProductsPops {
  productList: Array<{ tabName: string }>;
}

const Products: FunctionComponent<ProductsPops> = ({
  productList,
}): ReactElement => {
  return (
    <div>
      Products -{" "}
      {productList?.map((list, index) => (
        <div>{list.tabName}</div>
      ))}
    </div>
  );
};

export default Products;
