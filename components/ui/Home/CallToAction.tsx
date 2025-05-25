/** @format */

import Link from "next/link";

const CallToAction = () => {
  return (
    <section className='py-20 px-4 bg-black text-white'>
      <div className='max-w-4xl mx-auto text-center'>
        <h2 className='text-3xl md:text-4xl font-bold mb-6'>
          Ready to find your dream car?
        </h2>
        <p className='text-xl mb-8'>
          Join thousands of happy customers who found their perfect vehicle with
          us
        </p>
        <div className='flex flex-col sm:flex-row justify-center gap-4'>
          <Link
            href='/cars'
            className='bg-white text-black hover:bg-gray-100 px-8 py-4 rounded-md font-medium text-lg transition-colors'>
            Browse All Cars
          </Link>
          <Link
            href='/dealers'
            className='bg-transparent border-2 border-white hover:bg-blue-800 px-8 py-4 rounded-md font-medium text-lg transition-colors'>
            Find a Dealer
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
