/** @format */

import { Card, CardContent } from "@/components/ui/card";
import { getDealers } from "@/lib/actions/dealer-action";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Calendar,
  Facebook,
  Globe2,
  Instagram,
  MapPin,
  Phone,
  Star,
} from "lucide-react";
import Image from "next/image";

const DealerMainPage = async () => {
  const dealers = await getDealers();

  if (!dealers || dealers.length === 0) {
    return (
      <div className='container-xl lg:container m-auto py-6'>
        <h1 className='text-2xl font-bold'>No Dealers Found</h1>
        <p className='mt-4'>There are currently no dealers available.</p>
      </div>
    );
  }
  return (
    <div>
      <section className='py-12 bg-gray-50'>
        <div className='container-xl lg:container m-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h1 className='text-3xl md:text-4xl font-bold text-gray-900'>
              Dealership Directory
            </h1>
            <p className='mt-4 text-lg text-gray-600 max-w-2xl mx-auto'>
              Browse our network of trusted dealerships offering premium
              vehicles and exceptional service.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {dealers.map((dealer) => (
              <Card
                key={dealer._id}
                className='bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300'>
                <div className='relative h-48 '>
                  {dealer.dealerLogo ? (
                    <Image
                      width={500}
                      height={200}
                      loading='lazy'
                      src={dealer.dealerLogo}
                      alt={`${dealer.dealershipName} logo`}
                      className='w-full h-full object-contain'
                    />
                  ) : (
                    <div className='flex items-center justify-center h-full text-gray-400'>
                      <Building2 size={48} />
                    </div>
                  )}
                  {dealer.isFeatured && (
                    <div className='absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold'>
                      Featured
                    </div>
                  )}
                </div>

                <CardContent className='p-6'>
                  <div className='flex justify-between items-start'>
                    <h3 className='text-xl font-bold text-gray-900'>
                      {dealer.dealershipName}
                    </h3>
                    {dealer.isVerified && (
                      <BadgeCheck size={20} className='text-blue-500' />
                    )}
                  </div>

                  <div className='flex items-center mt-2 text-yellow-500'>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        fill={
                          i < Math.floor(dealer.rating)
                            ? "currentColor"
                            : "none"
                        }
                        strokeWidth={i < Math.floor(dealer.rating) ? 0 : 1.5}
                      />
                    ))}
                    <span className='text-gray-600 ml-2 text-sm'>
                      {dealer.rating.toFixed(1)} ({dealer.reviews?.length || 0}{" "}
                      reviews)
                    </span>
                  </div>

                  <div className='mt-4 space-y-3'>
                    <div className='flex items-center text-gray-600'>
                      <MapPin size={16} className='mr-2 text-gray-400' />
                      <span>
                        {dealer.address?.street || "Address not specified"},{" "}
                        {dealer.location}{" "}
                      </span>
                    </div>

                    <div className='flex items-center text-gray-600'>
                      <Phone size={16} className='mr-2 text-gray-400' />
                      <a
                        href={`tel:${dealer.phone}`}
                        className='hover:text-blue-600'>
                        {dealer.phone}
                      </a>
                    </div>

                    <div className='flex items-center text-gray-600'>
                      <Calendar size={16} className='mr-2 text-gray-400' />
                      <span>
                        Est.{" "}
                        {dealer.established ||
                          new Date(dealer.createdAt).getFullYear()}
                      </span>
                    </div>
                  </div>

                  <p className='mt-4 text-gray-600 line-clamp-2'>
                    {dealer.description || "No description available."}
                  </p>

                  <div className='mt-6 flex justify-between items-center'>
                    <a
                      href={`/dealers/${dealer._id}`}
                      className='text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center'>
                      View dealership <ArrowRight size={16} className='ml-1' />
                    </a>

                    <div className='flex space-x-2'>
                      {dealer.socialLinks?.website && (
                        <a
                          href={dealer.socialLinks.website}
                          target='_blank'
                          rel='noopener noreferrer'>
                          <Globe2
                            size={18}
                            className='text-gray-500 hover:text-blue-600'
                          />
                        </a>
                      )}
                      {dealer.socialLinks?.instagram && (
                        <a
                          href={dealer.socialLinks.instagram}
                          target='_blank'
                          rel='noopener noreferrer'>
                          <Instagram
                            size={18}
                            className='text-gray-500 hover:text-pink-600'
                          />
                        </a>
                      )}
                      {dealer.socialLinks?.facebook && (
                        <a
                          href={dealer.socialLinks.facebook}
                          target='_blank'
                          rel='noopener noreferrer'>
                          <Facebook
                            size={18}
                            className='text-gray-500 hover:text-blue-700'
                          />
                        </a>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {dealers.length === 0 && (
            <div className='text-center py-12'>
              <div className='mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6'>
                <Building2 size={40} className='text-gray-400' />
              </div>
              <h3 className='text-xl font-medium text-gray-900'>
                No dealerships found
              </h3>
              <p className='mt-2 text-gray-600'>
                Check back later or contact us to list your dealership.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default DealerMainPage;
