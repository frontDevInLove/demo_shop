import { FC, useContext, useMemo } from "react";
import { Button, Col, Row } from "antd";
import { observer } from "mobx-react-lite";
import { CartStoreContext } from "@/entities/basket/store/cartStore";
import { BasketCart } from "@/entities/basket/models/BasketCart.interface";
import CounterButton from "@/features/products/CounterWithAvailability/ui/CounterButton/CounterButton";

interface Props {
  options: BasketCart;
  available: boolean;
}

const CounterWithAvailability: FC<Props> = ({ options, available }) => {
  const cartStore = useContext(CartStoreContext);

  const { size } = options;
  const handleAddToCart = () => {
    cartStore.addToCart(options as Required<BasketCart>);
  };
  const handleRemoveCart = () => {
    cartStore.removeFromCart(options as Required<BasketCart>);
  };

  // переменная которая хранит информацию о товаре в корзине
  const cart = useMemo(() => {
    const { productId, positionId, size } = options;
    const findKey = JSON.stringify({ productId, positionId, size });

    return Object.entries(cartStore.items).find(([key]) => key === findKey);
  }, [cartStore.items, options]);

  // Если товар недоступен
  if (!available)
    return (
      <Button type="link" disabled className="w-full">
        Нет в наличии
      </Button>
    );

  // Если товар уже находится в корзине, то отображается количество
  if (cart) {
    return (
      <Row gutter={[16, 16]} align="middle" className="">
        <Col span={10}>В корзине:</Col>
        <Col span={14}>
          <CounterButton
            quantity={cart[1].quantity}
            handleRemoveCart={handleRemoveCart}
            handleAddToCart={handleAddToCart}
          />
        </Col>
      </Row>
    );
  }

  // Если товар доступен и не находится в корзине, отображается кнопка "В корзину"
  return (
    <Button block onClick={handleAddToCart} type="primary" disabled={!size}>
      В корзину
    </Button>
  );
};

export default observer(CounterWithAvailability);
