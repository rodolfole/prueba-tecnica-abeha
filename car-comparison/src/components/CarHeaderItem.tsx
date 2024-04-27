interface Props {
  title: string;
  type: string;
  subtitle: string;
}

const CarHeaderItem = ({ subtitle, title, type }: Props) => {
  return (
    <>
      <div className="flex flex-col items-center w-[180px] max-[400px]:w-full">
        <h3 className="font-medium md:font-bold text-xl sm:text-3xl md:text-5xl">
          {title} <span className="text-sm font-medium md:text-lg">{type}</span>
        </h3>
        <p className="text-xs leading-tight text-center">{subtitle}</p>
      </div>
    </>
  );
};

export default CarHeaderItem;
