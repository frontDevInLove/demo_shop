import { FC } from "react";
import { Col, Row } from "antd";
import CartIcon from "@/features/basket/CartIcon";
import { useLocation, useNavigate } from "react-router-dom";
import CatalogIcon from "@/features/products/CatalogIcon";

interface Props {}

const Header: FC<Props> = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goToCatalog = () => {
    navigate(`/catalog`);
  };

  const goToBasket = () => {
    navigate(`/basket`);
  };

  return (
    <Row className="Wrapper py-3" align="middle">
      <Col span={10} offset={2}>
        {location.pathname !== "/catalog" && (
          <CatalogIcon onClick={goToCatalog} />
        )}
      </Col>
      <Col span={10} className="text-right">
        <CartIcon onClick={goToBasket} />
      </Col>
    </Row>
  );
};

export default Header;
