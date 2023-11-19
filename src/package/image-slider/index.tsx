import React from "react";
import { container, inner, warpper } from "./ImageSlider.css";

interface CarouselProps {
  carouselList: string[];
}

const ImageSlider: React.FC<CarouselProps> = ({ carouselList }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);
  const length = carouselList.length;

  const handleClickTransform = (index: number) => {
    let newIndex = index;

    if (length === 0) {
      newIndex = length - 1;
    }

    if (length <= index) {
      newIndex = 0;
    }

    console.log({ newIndex });

    if (ref.current) {
      setCurrentIndex(newIndex);
      ref.current.style.transform = `translate(-${newIndex}00vw)`;
    }
  };

  return (
    <div className={warpper}>
      <div className={container} ref={ref}>
        {carouselList.map((item) => {
          return (
            <div className={inner}>
              <img src={item} alt="" />
            </div>
          );
        })}
      </div>

      <button
        className="button-1"
        onClick={() => handleClickTransform(currentIndex - 1)}
      >
        {"<"}
      </button>
      <button
        className="button-1"
        onClick={() => handleClickTransform(currentIndex + 1)}
      >
        {">"}
      </button>
    </div>
  );
};

export default ImageSlider;
