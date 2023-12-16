import { Row, Col } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { useProduct } from "@/entities/products/hooks/useProduct";
import Loading from "@/shared/ui/Loading/Loading";
import { FC, useMemo } from "react";
import ImgSlider from "@/features/products/ui/ImgSlider/ImgSlider";
import ProductDetailsInfo from "@/widgets/ProductDetailsInfo/ProductDetailsInfo";

interface Props {}

/**
 * Страница с деталями продукта
 */
const ProductDetailPage: FC<Props> = () => {
  const navigate = useNavigate();

  // Получаем параметры из URL
  const { productId, positionId } = useParams<{
    productId: string;
    positionId: string;
  }>();

  // Получаем данные о продукте
  const { data: product, isLoading, isError } = useProduct(Number(productId));

  // Получаем информацию о выбранной позиции продукта
  const position = useMemo(() => {
    return product?.colors.find((c) => c.id === Number(positionId));
  }, [product, positionId]);

  // Загрузка данных
  if (isLoading) return <Loading />;

  // Ошибка в получении данных
  if (isError || !product || !product.colors.length) {
    return <div>Error loading products</div>;
  }

  // Нет нужного цвета, поэтому берем первый цвет
  if (!position) {
    navigate(`/catalog/${product.id}/position/${product.colors[0].id}`);
    return null;
  }

  // Обработчик изменения цвета
  const handleColorChange = (positionId: number) => {
    navigate(`/catalog/${product.id}/position/${positionId}`);
  };

  return (
    <>
      <Row justify="center" gutter={[16, 16]}>
        <Col>
          <ImgSlider images={position.images} />
        </Col>

        <Col>
          <ProductDetailsInfo
            position={position}
            product={product}
            onColorChange={handleColorChange}
          />
        </Col>
      </Row>
    </>
  );
};

export default ProductDetailPage;
