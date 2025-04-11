/** @format */
import { getCars } from "@/lib/actions/cars-action";
import CarCard from "@/components/ui/cars/CarCard";

const Cars = async () => {
  const cars = await getCars();

  return (
    <section className='py-6'>
      <div className='container-xl lg:container m-auto py-6'>
        <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 md:gap-4'>
          {cars.map((car) => (
            <CarCard car={car} key={car.name + car.model + car.year} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cars;
