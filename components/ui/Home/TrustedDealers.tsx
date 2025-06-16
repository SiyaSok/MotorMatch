/** @format */

import { getDealers } from "@/lib/actions/dealer-action";
import {
  ArrowRight,
  BadgeCheck,
  Calendar,
  ShieldCheck,
  Star,
} from "lucide-react";
import Link from "next/link";

const TrustedDealers = async () => {
  const topDealers = await getDealers();

  return (
    <section className='py-16 px-4 max-w-7xl container-xl lg:container m-auto'>
      <h2 className='text-3xl font-bold text-gray-900 mb-8'>Trusted Dealers</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {topDealers.map((dealer) => (
          <div
            key={dealer._id}
            className='bg-white rounded-xl shadow-md overflow-hidden'>
            <div className='p-6'>
              <div className='flex items-center mb-4'>
                <div className='bg-blue-100 p-3 rounded-full mr-4'>
                  <BadgeCheck className='text-blue-600' size={24} />
                </div>
                <div>
                  <h3 className='text-xl font-bold'>{dealer.dealershipName}</h3>
                  <div className='flex items-center text-yellow-500'>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        fill={
                          i < Math.floor(dealer.rating)
                            ? "currentColor"
                            : "none"
                        }
                      />
                    ))}
                    <span className='text-gray-600 ml-2'>
                      ({dealer.rating.toFixed(1)})
                    </span>
                  </div>
                </div>
              </div>

              <div className='space-y-2 text-gray-700 mb-4'>
                <div className='flex items-center'>
                  <ShieldCheck size={16} className='mr-2 text-blue-600' />
                  <span>Verified Dealer</span>
                </div>
                <div className='flex items-center'>
                  <Calendar size={16} className='mr-2 text-blue-600' />
                  <span>
                    {new Date(dealer.createdAt).getFullYear()} - Present
                  </span>
                </div>
              </div>

              <Link
                href={`/dealers/${dealer._id}`}
                className='inline-flex items-center text-blue-600 hover:text-blue-800 mt-2'>
                View inventory <ArrowRight size={16} className='ml-1' />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustedDealers;
