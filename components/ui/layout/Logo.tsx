/** @format */

import Link from "next/link";

const Logo = ({ mobile = false }: { mobile?: boolean }) => {
  return (
    <Link className='flex flex-shrink-0 items-center' href='/'>
      <span
        className={`${
          mobile ? "block md:hidden" : "hidden md:block"
        } text-white text-2xl font-bold ml-2`}>
        Moto Match
      </span>
    </Link>
  );
};

export default Logo;
