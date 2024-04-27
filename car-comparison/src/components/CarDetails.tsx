
import CarHeaderItem from "./CarHeaderItem";
import useMediaQuery from "../hooks/useMediaQuery";
import type { Car } from "../types";

const CarDetails = ({
  acceleration,
  battery,
  color,
  imgs,
  maximumAutonomy,
  power,
  slot,
  torque,
}: Car) => {
  const screenWidth = useMediaQuery();
  const isMobile = screenWidth <= 768;

  return (
    <div className="relative h-screen w-screen" slot={slot}>
      <img
        className="w-full h-full object-fill"
        src={isMobile ? imgs.backMobile : imgs.backDesktop}
      />
      <div className="absolute w-full h-full top-0">
        <div className="flex justify-around items-center h-full flex-col py-14 md:py-9">
          <div className="flex flex-col items-center justify-center gap-8 max-sm:gap-4 max-sm:justify-start">
            <img
              className={`self-center md:self-start ml-0 md:ml-32 h-8 max-sm:h-5 w-auto`}
              src={imgs.carLogo}
              alt=""
            />
            <div
              className={`flex flex-wrap max-[400px]:divide-x-0 divide-x ${
                color === "black" ? "divide-black" : "divide-white"
              } gap-y-8 max-sm:gap-y-2 gap-x-1 justify-center w-full items-center [&>div]:pl-2 [&>div:first-child]:pl-0 ${
                color === "black" ? "text-black" : "text-white"
              }`}
            >
              <CarHeaderItem title={battery} subtitle="BATERÍA" type="kWh" />
              <CarHeaderItem title={torque} subtitle="TORQUE" type="kWh" />
              <CarHeaderItem title={power} subtitle="POTENCIA" type="kWh" />
              <CarHeaderItem
                title={maximumAutonomy}
                subtitle="AUTONOMÍA MÁXIMA"
                type="kWh"
              />
              <CarHeaderItem
                title={acceleration}
                subtitle="ACELERACIÓN (0 - 100 KM/H)"
                type="kWh"
              />
            </div>
          </div>

          <img
            className="max-w-[80%] md:max-w-[550px] max-sm:mt-7"
            src={isMobile ? imgs.carMobil : imgs.car}
          />
        </div>
      </div>
      {slot === "first" && (
        <div className="absolute bottom-4 left-6 max-w-[350px] hidden md:block">
          <div className=" divide-x divide-red-500">
            <h3 className="text-xl">
              Un <span className="font-semibold text-white">MG</span> sin
              precedentes
            </h3>
          </div>
          <p className="text-base">
            Equipado con tecnologías inteligentes, MG4 permite a todo el mundo
            adentrarse en la experiencia de la movilidad eléctrica pura. Y
            gracias a su rango de autonomía, tendrás mucho{" "}
            <span className="font-semiboldx">MG4</span> para hacer lo que
            quieras.
          </p>
        </div>
      )}
    </div>
  );
};

export default CarDetails;
