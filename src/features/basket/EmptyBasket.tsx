import { FC } from "react";
import { Link } from "react-router-dom";
import { Button, Empty } from "antd";

interface Props {}

const EmptyBasket: FC<Props> = () => {
  return (
    <Empty
      description={<span>Ваша корзина пуста</span>}
      imageStyle={{ marginTop: 24 }}
    >
      <Link to="/catalog">
        <Button type="primary">Перейти к покупкам</Button>
      </Link>
    </Empty>
  );
};

export default EmptyBasket;
