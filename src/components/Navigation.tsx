"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { headerData } from "../../constant/data";

const Navigation = () => {
  const pathname = usePathname();
  return (
    <div className="hidden w-1/3 items-center gap-7 text-[13px] leading-[25px] font-bold tracking-[2px] text-white uppercase md:inline-flex">
      {headerData?.map((item) => {
        return (
          <Link
            href={item?.href}
            key={item?.href}
            className={`hover:text-dark_orange hoveEffect group relative ${pathname === item?.href && "text-dark_orange"}`}
          >
            {item?.title}
            <span
              className={`bg-dark_orange hoverEffect absolute -bottom-0.5 left-1/2 h-0.5 w-0 group-hover:left-0 group-hover:w-1/2 ${pathname === item?.href && "w-1/2"}`}
            />
            <span
              className={`bg-dark_orange absolute right-1/2 -bottom-0.5 h-0.5 w-0 group-hover:right-0 group-hover:w-1/2 ${pathname === item?.href && "w-1/2"}`}
            />
          </Link>
        );
      })}
    </div>
  );
};
export default Navigation;
