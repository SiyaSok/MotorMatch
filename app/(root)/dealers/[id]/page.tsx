/** @format */

import { getSingleDealer } from "@/lib/actions/dealer-action";
import {
  BadgeCheck,
  Building2,
  Facebook,
  Globe2,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Star,
  Twitter,
} from "lucide-react";
import Image from "next/image";

const Dealer = async (props: { params: Promise<{ id: string }> }) => {
  const { id } = await props.params;

  const dealer = await getSingleDealer(id);

  if (!dealer) {
    return (
      <div className='container-xl lg:container m-auto py-6'>
        <h1 className='text-2xl font-bold'>Dealer Not Found</h1>
        <p className='mt-4'>The dealer you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div>
      <section>
        <div className='relative bg-gray-900 text-white'>
          <div className='absolute inset-0 bg-black'></div>
          <div className='relative container-xl lg:container m-auto px-4 py-24 sm:px-6 lg:px-8'>
            <div className='flex flex-col md:flex-row items-center gap-8'>
              <div className='w-32 h-32 rounded-full bg-white p-1 flex-shrink-0'>
                <Image
                  width={128}
                  height={128}
                  src={dealer.dealerLogo}
                  alt={`${dealer.dealershipName} logo`}
                  className='w-full h-full object-contain rounded-full'
                />
              </div>
              <div>
                <div className='flex items-center gap-2'>
                  <h1 className='text-4xl font-bold'>
                    {dealer.dealershipName}
                  </h1>
                  {dealer.isVerified && (
                    <BadgeCheck size={24} className='text-blue-400' />
                  )}
                </div>
                <div className='flex items-center mt-2'>
                  <div className='flex text-yellow-400'>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        fill={
                          i < Math.floor(dealer.rating ?? 0)
                            ? "currentColor"
                            : "none"
                        }
                        strokeWidth={
                          i < Math.floor(dealer.rating ?? 0) ? 0 : 1.5
                        }
                      />
                    ))}
                  </div>
                  <span className='ml-2 text-gray-300'>
                    {(dealer.rating ?? 0).toFixed(1)} ({dealer.established} -
                    Present)
                  </span>
                </div>
                <p className='mt-4 text-gray-300 max-w-2xl'>
                  {dealer.description}
                </p>
                <div className='p-1'>
                  <div className='space-y-1 flex flex-row gap-6'>
                    <div className='flex flex-row'>
                      <MapPin
                        size={20}
                        className='text-gray-300 mt-0.5 mr-3 flex-shrink-0'
                      />
                      <div>
                        <p className='text-gray-300'>
                          {dealer.address?.street ?? "N/A"}
                          {dealer.address?.city ?? "N/A"},{" "}
                          {dealer.address?.state ?? "N/A"}{" "}
                          {dealer.address?.zipcode ?? "N/A"}
                        </p>
                      </div>
                    </div>

                    <div className='flex items-center'>
                      <Phone
                        size={20}
                        className='text-gray-300 mr-3 flex-shrink-0'
                      />
                      <div>
                        <a
                          href={`tel:${dealer.phone}`}
                          className='text-gray-300 hover:text-blue-800'>
                          {dealer.phone}
                        </a>
                      </div>
                    </div>

                    <div className='flex items-center'>
                      <Globe2
                        size={20}
                        className='text-gray-300 mr-3 flex-shrink-0'
                      />
                      <div>
                        <a
                          href={dealer.website}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='text-gray-300 hover:text-blue-800'>
                          {dealer.website.replace(/^https?:\/\//, "")}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='mt-2'>
                    <p className='font-medium mb-2'>Connect With Us</p>
                    <div className='flex space-x-4'>
                      {dealer.socialLinks?.facebook && (
                        <a
                          href={dealer.socialLinks.facebook}
                          target='_blank'
                          rel='noopener noreferrer'>
                          <Facebook
                            size={20}
                            className='text-gray-300 hover:text-blue-700'
                          />
                        </a>
                      )}
                      {dealer.socialLinks?.instagram && (
                        <a
                          href={dealer.socialLinks.instagram}
                          target='_blank'
                          rel='noopener noreferrer'>
                          <Instagram
                            size={20}
                            className='text-gray-300 hover:text-pink-600'
                          />
                        </a>
                      )}
                      {dealer.socialLinks?.twitter && (
                        <a
                          href={dealer.socialLinks.twitter}
                          target='_blank'
                          rel='noopener noreferrer'>
                          <Twitter
                            size={20}
                            className='text-gray-300 hover:text-blue-400'
                          />
                        </a>
                      )}
                      {dealer.socialLinks?.linkedin && (
                        <a
                          href={dealer.socialLinks.linkedin}
                          target='_blank'
                          rel='noopener noreferrer'>
                          <Linkedin
                            size={20}
                            className='text-gray-300 hover:text-blue-600'
                          />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container-xl lg:container m-auto pb-6'>
          <div className='min-h-screen bg-gray-50'>
            {/* Hero Section */}

            {/* Main Content */}
            <div className='max-w-9xl mx-auto px-4 py-12 sm:px-6 lg:px-8'>
              <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                {/* Left Column - Dealer Info */}

                {/* Right Column - Inventory */}

                <div className='lg:col-span-2'>
                  <div className='mb-8'>
                    <h2 className='text-2xl font-bold mb-6'>Our Inventory</h2>

                    {dealer.cars.length > 0 ? (
                      <div className='space-y-6'>
                        {dealer.cars.map((car) => (
                          <div
                            key={car._id}
                            className='bg-white rounded-lg shadow-md overflow-hidden'>
                            <div className='md:flex'>
                              {/* Car Images */}
                              <div className='md:w-1/2'>
                                <div className='h-64 md:h-full'>
                                  <Image
                                    width={600}
                                    height={400}
                                    src={
                                      car.imageUrls?.[0] ??
                                      "/placeholder-image.jpg"
                                    }
                                    alt={`${car.brand} ${car.model}`}
                                    className='w-full h-full object-cover'
                                  />
                                </div>
                              </div>

                              {/* Car Details */}
                              <div className='p-6 md:w-1/2'>
                                <div className='flex justify-between items-start'>
                                  <div>
                                    <h3 className='text-xl font-bold'>
                                      {car.brand} {car.model}
                                    </h3>
                                    <p className='text-gray-600'>
                                      {car.year} •{" "}
                                      {car.mileage.toLocaleString()} miles
                                    </p>
                                  </div>
                                  <div className='bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium'>
                                    ${car.price.toLocaleString()}
                                  </div>
                                </div>

                                <div className='mt-4 grid grid-cols-2 gap-4'>
                                  <div>
                                    <p className='text-gray-500 text-sm'>
                                      Body Type
                                    </p>
                                    <p className='font-medium'>
                                      {car.bodyType}
                                    </p>
                                  </div>
                                  <div>
                                    <p className='text-gray-500 text-sm'>
                                      Transmission
                                    </p>
                                    <p className='font-medium capitalize'>
                                      {car.transmission}
                                    </p>
                                  </div>
                                  <div>
                                    <p className='text-gray-500 text-sm'>
                                      Fuel Type
                                    </p>
                                    <p className='font-medium capitalize'>
                                      {car.fuelType}
                                    </p>
                                  </div>
                                  <div>
                                    <p className='text-gray-500 text-sm'>
                                      Seats
                                    </p>
                                    <p className='font-medium'>{car.Seats}</p>
                                  </div>
                                </div>

                                <div className='mt-6'>
                                  <h4 className='font-bold mb-2'>
                                    Engine Specifications
                                  </h4>
                                  <div className='grid grid-cols-2 gap-4 text-sm'>
                                    <div>
                                      <p className='text-gray-500'>Power</p>
                                      <p>{car.engine?.powerMax ?? "N/A"} HP</p>
                                    </div>
                                    <div>
                                      <p className='text-gray-500'>
                                        Engine Size
                                      </p>
                                      <p>{car.engine?.engineSize ?? "N/A"}L</p>
                                    </div>
                                    <div>
                                      <p className='text-gray-500'>Cylinders</p>
                                      <p>{car.engine?.cylinders ?? "N/A"}</p>
                                    </div>
                                    <div>
                                      <p className='text-gray-500'>
                                        Transmission
                                      </p>
                                      <p>
                                        {car.engine?.transmissionType ?? "N/A"}
                                      </p>
                                    </div>
                                  </div>
                                </div>

                                <div className='mt-6'>
                                  <h4 className='font-bold mb-2'>Features</h4>
                                  <div className='flex flex-wrap gap-2'>
                                    {car.features &&
                                      typeof car.features === "object" &&
                                      Object.entries(car.features).map(
                                        ([feature, value]) =>
                                          value && (
                                            <span
                                              key={feature}
                                              className='bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs'>
                                              {feature
                                                .split(/(?=[A-Z])/)
                                                .join(" ")}
                                            </span>
                                          )
                                      )}
                                  </div>
                                </div>

                                <div className='mt-6 flex justify-end'>
                                  <button className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-colors'>
                                    View Details
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className='bg-white rounded-lg shadow-md p-8 text-center'>
                        <Building2
                          size={48}
                          className='mx-auto text-gray-400 mb-4'
                        />
                        <h3 className='text-xl font-medium text-gray-900'>
                          No vehicles currently available
                        </h3>
                        <p className='mt-2 text-gray-600'>
                          Check back soon for our latest inventory updates
                        </p>
                      </div>
                    )}
                  </div>

                  {/* About Section */}
                  <div className='bg-white rounded-lg shadow-md p-6'>
                    <h2 className='text-xl font-bold mb-4'>
                      About {dealer.dealershipName}
                    </h2>
                    <p className='text-gray-700 mb-4'>{dealer.description}</p>

                    <div className='grid grid-cols-2 gap-4 mt-6'>
                      <div className='bg-gray-50 p-4 rounded-lg'>
                        <p className='text-gray-500'>Established</p>
                        <p className='font-medium'>{dealer.established}</p>
                      </div>
                      <div className='bg-gray-50 p-4 rounded-lg'>
                        <p className='text-gray-500'>Location</p>
                        <p className='font-medium'>{dealer.location}</p>
                      </div>
                      <div className='bg-gray-50 p-4 rounded-lg'>
                        <p className='text-gray-500'>Status</p>
                        <p className='font-medium'>
                          {dealer.isActive ? "Active" : "Inactive"}
                        </p>
                      </div>
                      <div className='bg-gray-50 p-4 rounded-lg'>
                        <p className='text-gray-500'>Last Updated</p>
                        <p className='font-medium'>
                          {dealer.updatedAt
                            ? new Date(dealer.updatedAt).toLocaleDateString()
                            : "N/A"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          );
        </div>
      </section>
    </div>
  );
};

export default Dealer;
