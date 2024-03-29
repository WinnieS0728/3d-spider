import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className=" bg-red-500 p-2">
      <nav className="flex items-center justify-between">
        <Link
          href={"/"}
          className="aspect-square w-12 rounded-full bg-yellow-500"
        >
          avatar
        </Link>
        <div className="flex items-center justify-center gap-12">
          <Link href={"/"}>menu</Link>
          <Link href={"/"}>
            <div className="h-16 w-24 bg-yellow-500">logo</div>
          </Link>
          <Link href={"/"}>contact</Link>
        </div>
        <Link
          href={"/"}
          className="aspect-square w-12 rounded-full bg-yellow-500"
        >
          shop cart
        </Link>
      </nav>
    </header>
  );
}
