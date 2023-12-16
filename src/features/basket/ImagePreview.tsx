import { FC } from "react";
import { Image } from "antd";
import { Link } from "react-router-dom";
import { BasketCart } from "@/entities/basket/models";
import * as React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  cart: Required<BasketCart>;
}

const ImagePreview: FC<Props> = ({ cart, ...props }) => {
  return (
    <Link
      to={`/catalog/${cart.productId}/position/${cart.positionId}`}
      className=""
    >
      <Image
        src={cart.preview}
        alt={`${cart.name} ${cart.color}`}
        preview={false}
        {...props}
      />
    </Link>
  );
};

export default ImagePreview;
