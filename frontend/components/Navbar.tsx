import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex item-center justify-between py-6 ">
      <Link href="/">
        <div className="flex items-center cursor-pointer pl-4">
          {/* <Image src="/logo.png" height={35} width={40} /> */}

          <img
            src="https://pbs.twimg.com/media/Ff265AiakAYqGR5?format=jpg&name=360x360"
            className="w-10 h-10 text-white p-2 bg-[#308875] rounded-full"
            alt=""
          />
          <span className="font-bold text-2xl ml-3 text-primary">
            Raval's Blog
          </span>
        </div>
      </Link>
      {/* <ul className="flex items-center">
                <li className="mr-6 font-medium text-gray-600">
                    <a href="#">Products</a>
                </li>
                <li className="mr-6 font-medium text-gray-600">
                    <a href="#">pricing</a>
                </li>
                <li className="mr-6 font-medium text-gray-600">
                    <a href="#">Docs</a>
                </li>
                <li className="mr-6 font-medium text-gray-600">
                    <a href="#">Company</a>
                </li>
            </ul> */}
      {/* <ul className="flex items-center">
                <li className="mr-6 font-medium text-gray-600">
                    <a href="#" className="hover:text-gray-400">
                        Log in
                    </a>
                </li>
                <li className="font-medium text-gray-600">
                    <a
                        href="#"
                        className="bg-primary py-2 px-4 rounded-sm text-white hover:bg-primary-dark transition-all">
                        Sign up
                    </a>
                </li>
            </ul> */}
    </nav>
  );
};

export default Navbar;
