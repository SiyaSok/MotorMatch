/** @format */

import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton"; // ensure you have this

export default function SkeletonCarCard() {
  return (
    <Card className='w-full max-w-sm pt-0'>
      <div className='relative'>
        <Skeleton className='w-full h-58 rounded-t-xl' />

        <div className='absolute top-2 right-2'>
          <Skeleton className='w-12 h-6 rounded-md' />
        </div>
      </div>

      <CardContent className='space-y-2'>
        <Skeleton className='w-24 h-4' />

        <div>
          <div className='flex justify-between items-start'>
            <div className='space-y-2'>
              <Skeleton className='w-32 h-6' />
              <Skeleton className='w-16 h-4' />
            </div>
          </div>

          <div className='my-4 flex flex-wrap gap-2'>
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className='w-20 h-6 rounded-md' />
            ))}
          </div>

          <div className='my-4 flex flex-wrap gap-4'>
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} className='w-24 h-4' />
            ))}
          </div>

          <div className='flex justify-between items-center mt-4'>
            <Skeleton className='w-24 h-6' />
            <Skeleton className='w-28 h-10 rounded-md' />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
