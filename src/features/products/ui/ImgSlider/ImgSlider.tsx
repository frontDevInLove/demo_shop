import { FC } from "react";
import { Carousel, Image } from "antd";
import "./ImgSlider.scss";

interface Props {
  images: string[];
}

const ImgSlider: FC<Props> = ({ images }) => {
  return (
    <Image.PreviewGroup>
      <Carousel
        dots={{ className: "CarouselDots" }}
        infinite={false}
        className="Carousel"
      >
        {images.map((image, index) => (
          <div key={index}>
            <div className="Carousel_img">
              <Image src={image} preview={{ mask: <>Подробнее</> }} />
            </div>
          </div>
        ))}
      </Carousel>
    </Image.PreviewGroup>
  );
};

export default ImgSlider;
