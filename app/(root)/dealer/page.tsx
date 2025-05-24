/** @format */

import { Card, CardContent } from "@/components/ui/card";
import { getDealers } from "@/lib/actions/dealer-action";
import { Star } from "lucide-react";

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
      <section className='py-6'>
        <div className='container-xl lg:container m-auto py-6'>
          <h1 className='text-2xl font-bold'>Welcome to the Dealer Page</h1>
          <p className='mt-4'>
            Here you can manage your dealership, view cars, and more.
          </p>

          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-6'>
            {dealers.map((dealer) => (
              <Card
                key={dealer._id}
                className='bg-white rounded-lg shadow-md p-6 mt-6'>
                <CardContent>
                  <h3 className='text-xl font-bold'>{dealer.dealershipName}</h3>
                  <div className='flex items-center  text-yellow-500'>
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
                  <div className='mt-2'>
                    <p className='text-gray-600 mb-4'>
                      Location: {dealer.location || "Not specified"}
                    </p>
                    <p className='text-gray-600 mb-4'>
                      Rating: {dealer.rating.toFixed(1)} / 5
                    </p>
                    <p className='text-gray-600 mb-4'>
                      Established: {new Date(dealer.createdAt).getFullYear()}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DealerMainPage;
