import { FC, useContext } from "react";
import { observer } from "mobx-react-lite";
import { CartStoreContext } from "@/entities/basket/store/cartStore";
import BasketItem from "@/pages/Basket/BasketPage/BasketItem/BasketItem";
import EmptyBasket from "@/features/basket/EmptyBasket";

interface Props {}

const BasketPage: FC<Props> = () => {
  const cartStore = useContext(CartStoreContext);

  const basketCatalog = Object.keys(cartStore.items).map((itemsKey) => (
    <p key={itemsKey}>
      <BasketItem itemsKey={itemsKey} />
    </p>
  ));

  return (
    <div>
      <h2>Корзина</h2>

      {basketCatalog.length ? basketCatalog : <EmptyBasket />}
    </div>
  );
};

export default observer(BasketPage);
