import Link from "next/link";
import { ReactNode } from "react";

interface CardProps {
  title?: string;
  description?: string;
  svg: ReactNode;
  href?: string;
}

const Card = ({
  title = "",
  description = "",
  svg,
  href = "#",
}: CardProps) => {
  return (
    <Link
      href={href}
      className="transition-all duration-1000 bg-white hover:bg-blue-500 hover:shadow-xl m-2 p-4 relative z-40 group block"
    >
      <div className="absolute bg-blue-500/50 top-0 left-0 w-24 h-1 z-30 transition-all duration-200 group-hover:bg-white group-hover:w-1/2" />
      {svg}
      <div className="py-2 px-9 relative">
        <h3 className="mt-8 text-lg font-semibold text-black group-hover:text-white">
          {title}
        </h3>
        <p className="mt-4 text-base text-gray-600 group-hover:text-white">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default Card;
