import { FC, useContext, useMemo } from "react";
import { Button, Tag } from "antd";
import { observer } from "mobx-react-lite";
import { CartStoreContext } from "@/entities/basket/store/cartStore";
import { calculateTotalPrice } from "@/shared/lib";

interface Props {
  itemsKey: string;
}

const BasketItemInfo: FC<Props> = ({ itemsKey }) => {
  const cartStore = useContext(CartStoreContext);

  const { cart, quantity } = cartStore.items[itemsKey];

  const total = useMemo(
    () => calculateTotalPrice(cart.price, quantity),
    [cart.price, quantity],
  );

  const handleRemoveFromCart = () => {
    cartStore.removeAllQuantityFromCart(cart);
  };

  return (
    <>
      <p className="">
        <Tag color="magenta">{total}</Tag>
      </p>
      <div className="font-bold">{cart.name}</div>

      <div className="text-500">
        <p>Размер: {cart.size.label}</p>
        <p>Цвет: {cart.color}</p>
        <p>Цена: {cart.price}</p>
      </div>
      <p>
        <Button type="primary" onClick={handleRemoveFromCart}>
          Удалить
        </Button>
      </p>
    </>
  );
};

export default observer(BasketItemInfo);
