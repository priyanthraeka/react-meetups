import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-20 h-14 bg-black text-white fixed left-0 top-0 right-0">
      <Link href="/" className="text-2xl font-bold">
        React Meetups
      </Link>
      <ul className="flex gap-7 text-xl">
        <li>
          <Link href="/meetups">All Meetups</Link>
        </li>
        <li>
          <Link href="/add">Add Meetups</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
