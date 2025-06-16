/** @format */
"use client";
import {
  AddToWishList,
  checkBookmarkStatus,
} from "@/lib/actions/wishList.action";
import { CarTypeS } from "@/types";
import { HeartIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const AddToWishListButton = ({ car }: { car: CarTypeS }) => {
  const { data: session } = useSession();
  const userId = session?.user?.id;

  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBookmarkStatus = async () => {
      if (!userId) {
        setIsLoading(false);
        return;
      }
      try {
        const res = await checkBookmarkStatus(car._id);
        setIsBookmarked(res.isBookmarked ?? false);
      } catch {
        toast.error("Failed to fetch bookmark status");
      } finally {
        setIsLoading(false);
      }
    };

    fetchBookmarkStatus();
  }, [car._id, userId]);

  const handleAddToList = async () => {
    if (!userId) {
      toast.error("Please sign in to add car to your wishlist");
      return;
    }

    try {
      const res = await AddToWishList(car._id);
      toast.success(res.message);
      setIsBookmarked(res.isBookmarked as boolean);
    } catch {
      toast.error("Failed to add car to wishlist");
      setIsBookmarked(false);
    }
  };

  if (isLoading) {
    return (
      <div className='absolute top-0 right-2 px-2 py-1 rounded-md text-sm'>
        <HeartIcon size={20} className='inline mr-1' />
      </div>
    );
  }

  return (
    <div
      onClick={handleAddToList}
      className='absolute top-0 right-2 px-2 py-1 rounded-md text-sm cursor-pointer hover:opacity-80 transition-opacity'>
      <HeartIcon
        size={20}
        className='inline mr-1'
        fill={isBookmarked ? "red" : "none"}
        stroke={isBookmarked ? "red" : "black"}
      />
    </div>
  );
};

export default AddToWishListButton;
