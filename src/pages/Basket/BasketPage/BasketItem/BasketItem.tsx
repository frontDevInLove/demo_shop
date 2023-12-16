import { FC, useContext } from "react";
import { CartStoreContext } from "@/entities/basket/store/cartStore";
import { Card, Col, Row } from "antd";
import CounterButton from "@/features/products/CounterWithAvailability/ui/CounterButton/CounterButton";
import { observer } from "mobx-react-lite";
import "./BasketItem.scss";
import ImagePreview from "@/features/basket/ImagePreview";
import BasketItemInfo from "@/features/basket/BasketItemInfo";

interface Props {
  itemsKey: string;
}

const BasketItem: FC<Props> = ({ itemsKey }) => {
  const cartStore = useContext(CartStoreContext);

  const { cart, quantity } = cartStore.items[itemsKey];

  const handleAddToCart = () => {
    cartStore.addToCart(cart);
  };
  const handleRemoveCart = () => {
    if (quantity === 1) return;

    cartStore.removeFromCart(cart);
  };

  return (
    <>
      {/*Мобильная версия*/}
      <Card className="xl:hidden">
        <Row gutter={[32, 16]} className="text-center">
          <Col span={24} sm={12}>
            <ImagePreview cart={cart} className="Col_1" />
          </Col>

          <Col span={24} sm={12}>
            <BasketItemInfo itemsKey={itemsKey} />

            <p>
              <div className="Col_1 m-auto">
                <CounterButton
                  quantity={quantity}
                  handleAddToCart={handleAddToCart}
                  handleRemoveCart={handleRemoveCart}
                />
              </div>
            </p>
          </Col>
        </Row>
      </Card>

      {/*Десктоп версия*/}
      <Card className="hidden xl:block">
        <Row gutter={[32, 16]}>
          <Col>
            <ImagePreview cart={cart} className="Col_1" />

            <p>
              <div className="Col_1 m-auto">
                <CounterButton
                  quantity={quantity}
                  handleAddToCart={handleAddToCart}
                  handleRemoveCart={handleRemoveCart}
                />
              </div>
            </p>
          </Col>

          <Col>
            <BasketItemInfo itemsKey={itemsKey} />
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default observer(BasketItem);
