import { ImgComparisonSlider } from "@img-comparison-slider/react";

import CarDetails from "./CarDetails";
import { CARS } from "../constants";

const CarComparison = () => {
  return (
    <ImgComparisonSlider>
      {CARS.map((car) => (
        <CarDetails key={car.id} {...car} />
      ))}
    </ImgComparisonSlider>
  );
};

export default CarComparison;
