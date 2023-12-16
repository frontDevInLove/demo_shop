import { FC } from "react";
import { Card } from "antd";
import { ProductItem } from "@/entities/products/models";

interface Props {
  product: ProductItem;
}

const ProductCard: FC<Props> = ({ product }) => {
  return (
    <Card cover={<img alt={product.name} src={product.images[0]} />}>
      <Card.Meta title={product.name} description={`Price: ${product.price}`} />
    </Card>
  );
};

export default ProductCard;
