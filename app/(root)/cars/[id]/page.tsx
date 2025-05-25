/** @format */

import { Badge } from "@/components/ui/badge";
import { Pin, Wallet } from "lucide-react";

import { getSingleCars } from "@/lib/actions/cars-action";
import CarDisplayPageImages from "@/components/ui/cars/CarDisplayPageImages";
import Engine from "@/components/ui/cars/Engine";
import PerformanceEconomy from "@/components/ui/cars/PerformanceEconomy";
import Safety from "@/components/ui/cars/Safety";
import Features from "@/components/ui/cars/Features";
import Specifications from "@/components/ui/cars/Specifications";
import { Separator } from "@/components/ui/separator";
import CarSumIcon from "@/components/ui/cars/CarSumIcon";
import Summary from "@/components/ui/cars/Summary";
import Link from "next/link";

const CarDisplayPage = async (props: { params: Promise<{ id: string }> }) => {
  const { id } = await props.params;

  const car = await getSingleCars(id);
  return (
    <section className='container mx-auto px-4 py-8'>
      <div className='grid md:grid-cols-2 gap-8'>
        <div>
          <CarDisplayPageImages car={JSON.parse(JSON.stringify(car))} />
          <div className='space-y-4'>
            <div className='grid mt-6'>
              <Engine car={car} />
              <PerformanceEconomy car={car} />
              <Safety car={car} />
              <Features car={car} />
              <Specifications car={car} />
            </div>
          </div>
        </div>

        <div className='space-y-4'>
          <h1 className='text-3xl font-bold flex items-center gap-2'>
            {car.brand} {car.year} {car.name} ({car.model})
          </h1>
          <p className='text-2xl font-bold text-green-600 flex items-center gap-1'>
            <Wallet size={22} /> R
            {car.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
          </p>
          <Link
            href={`/dealer/${car.dealer._id}`}
            className='text-lg font-bold text-black flex items-center gap-1'>
            <Pin size={18} />
            {car.dealer.dealershipName} - {car.dealer.location}
          </Link>

          <div className='flex gap-3 flex-wrap'>
            <Badge variant='default'>{car.brand}</Badge>
            <Badge variant='outline'>Seats: {car.Seats}</Badge>
            <Badge variant='outline'>Body: {car.bodyType}</Badge>
            <Badge variant='outline'>Fuel: {car.fuelType}</Badge>
            <Badge variant='outline'>Transmission: {car.transmission}</Badge>
            <Badge variant='outline'>
              Mileage: {car.mileage.toLocaleString()} Km
            </Badge>
          </div>
          <Separator className='my-6' />
          <CarSumIcon car={car} />
          <Separator className='my-6' />
          <Summary car={car} />
        </div>
      </div>
    </section>
  );
};

export default CarDisplayPage;
