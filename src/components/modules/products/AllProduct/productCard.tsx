/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import AddToCartButton from "@/components/shared/AddToCartButton";
import BuyNow from "@/components/shared/BuyNow";
import { TMedicine } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ProductCard = ({ medicine }: { medicine: TMedicine }) => {
  const path = usePathname();
  // console.log(path);

  return (
    <div className="">
      {/* Card Container */}
      <div className="border p-4 rounded-md shadow-blue-200 transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-lg flex flex-col">
        <Link href={`/shop/${medicine?._id}`}>
          {/* Make image and name clickable via Link */}
          <div className="relative  w-full overflow-hidden rounded-md group">
            <Image
              src={medicine?.Img as string}
              alt={medicine?.name}
              width={300}
              height={300}
              className=" w-full rounded-md transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <h4 className="font-semibold text-sm mt-2">{medicine?.name}</h4>
          <p className="font-bold mt-2">${medicine?.price}</p>
        </Link>
        {/* Buttons */}
        <div className="flex items-center justify-center mt-auto pt-4 space-x-4">
          <AddToCartButton medicine={medicine} />
          {path !== "/shop" && <BuyNow medicine={medicine} />}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
