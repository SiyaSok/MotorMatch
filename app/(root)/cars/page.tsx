/** @format */
import { getCars } from "@/lib/actions/cars-action";
import CarCard from "@/components/ui/cars/CarCard";

const Cars = async () => {
  const cars = await getCars();

  return (
    <section className='py-6'>
      <div className='py-6 px-4 max-w-7xl   container-xl lg:container m-auto '>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8'>
          {cars.map((car) => (
            <CarCard car={car} key={car.name + car.model + car.year} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cars;
