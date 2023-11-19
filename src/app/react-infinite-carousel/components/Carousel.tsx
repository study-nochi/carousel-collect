import React, { TouchEventHandler, useEffect, useRef, useState } from "react";
import {
  carousel,
  carouselItem,
  carouselWrapper,
  container,
  swipeLeft,
  swipeRight,
} from "./Carousel.css";

interface CarouselProps {
  carouselList: string[];
}

const Carousel: React.FC<CarouselProps> = ({ carouselList }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentList, setCurrentList] = useState<string[]>();
  const [touchStartX, setTouchStartX] = useState<number>(0);
  const [touchEndX, setTouchEndX] = useState<number>(0);
  const carouselRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (carouselRef.current !== null) {
      carouselRef.current.style.transform = `translateX(-${currentIndex}00%)`;
    }
  }, [currentIndex]);

  useEffect(() => {
    if (carouselList.length !== 0) {
      const startData = carouselList[0];
      const endData = carouselList[carouselList.length - 1];
      const newList = [endData, ...carouselList, startData];

      setCurrentList(newList);
    }
  }, [carouselList]);

  const moveToNthSlide = (index: number) => {
    setTimeout(() => {
      setCurrentIndex(index);
      if (carouselRef.current !== null) {
        carouselRef.current.style.transition = "";
      }
    }, 500);
  };

  const handleSwipe = (direction: number) => {
    const newIndex = currentIndex + direction;

    if (newIndex === carouselList.length + 1) {
      moveToNthSlide(1);
    } else if (newIndex === 0) {
      moveToNthSlide(carouselList.length);
    }

    setCurrentIndex((prev) => prev + direction);

    if (carouselRef.current !== null) {
      carouselRef.current.style.transition = "all 0.5s ease-in-out";
    }
  };

  const handleTouchStart: TouchEventHandler<HTMLDivElement> = (e) => {
    setTouchStartX(e.nativeEvent.touches[0].clientX);
  };

  const handleTouchMove: TouchEventHandler<HTMLDivElement> = (e) => {
    const currTouchX = e.nativeEvent.changedTouches[0].clientX;

    if (carouselRef.current !== null) {
      carouselRef.current.style.transform = `translateX(calc(-${currentIndex}00% - ${
        (touchStartX - currTouchX) * 2 || 0
      }px))`;
    }
  };

  const handleTouchEnd: TouchEventHandler<HTMLDivElement> = (e) => {
    setTouchEndX(e.nativeEvent.changedTouches[0].clientX);

    if (touchStartX >= touchEndX) {
      handleSwipe(1);
    } else {
      handleSwipe(-1);
    }
  };

  return (
    <div className={container}>
      <div
        className={carouselWrapper}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <button
          type="button"
          className={swipeLeft}
          onClick={() => {
            handleSwipe(-1);
          }}
        >
          {"<"}
        </button>
        <button
          type="button"
          className={swipeRight}
          onClick={() => {
            handleSwipe(+1);
          }}
        >
          {">"}
        </button>
        <ul className={carousel} ref={carouselRef}>
          {currentList?.map((image, index) => {
            const key = `carousel-image-${index}`;

            return (
              <li key={key} className={carouselItem}>
                <img src={image} alt="image" />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Carousel;
