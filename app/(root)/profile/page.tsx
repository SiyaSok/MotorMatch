/** @format */

import { auth } from "@/auth";
import connectDB from "@/config/db";
import User from "@/models/User";
const ProfilePage = async () => {
  await connectDB();

  const session = await auth();

  console.log(session);

  let userData = null;
  if (session && session.user && session.user.id) {
    userData = await User.findById(session.user.id);
  }

  console.log(userData);

  return (
    <section className='max-w-7xl container-xl lg:container m-auto'>
      <div className='flex'>
        <div className='w-full md:max-w-[1140px]'>
          {" "}
          <h1 className='text-2xl font-bold'>Profile</h1>
          <p className='mt-2'>Welcome to your profile page!</p>
          <div className='mt-5'>
            <div className='bg-white p-4 rounded-lg shadow-md'>
              <h2 className='text-xl font-semibold mb-4'>User Information</h2>
              {userData ? (
                <div>
                  <p className='text-gray-700'>Name: {userData.name}</p>
                  <p className='text-gray-700'>Email: {userData.email}</p>
                  <p className='text-gray-700'>
                    Joined: {new Date(userData.createdAt).toLocaleDateString()}
                  </p>
                </div>
              ) : (
                <p className='text-gray-700'>User not found</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
