/** @format */

import Logo from "./Logo";
import MobileMenuButton from "./MobileMenuButton";
import NavLinks from "./NavLinks";
import UserButtonWrapper from "./UserButtonWrapper";

const Navbar = async () => {
  return (
    <nav className='bg-black sticky top-0 z-50 shadow-md'>
      <div className='container mx-auto px-2 sm:px-6 lg:px-8'>
        <div className='relative flex h-20 items-center justify-between'>
          {/* Mobile menu button and logo (left side) */}
          <div className='absolute inset-y-0 left-0 flex items-center md:hidden'>
            <MobileMenuButton />
            <Logo mobile />
          </div>

          {/* Main logo and nav links */}
          <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
            <Logo />
            <NavLinks />
          </div>

          {/* User button (right side) */}
          <UserButtonWrapper />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
