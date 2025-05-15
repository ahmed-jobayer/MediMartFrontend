/* eslint-disable @next/next/no-img-element */
"use client";

import { getAllProducts } from "@/services/Product";
import { useEffect, useState } from "react";
import { TMedicine } from "@/types";
import { Carousel } from "antd";
import Link from "next/link";
import Loading from "@/components/shared/Loading";

const HeroSection = () => {
    const [data, setProducts] = useState<TMedicine[]>([]);
      const [loading, setLoading] = useState(true);

    const fetchFeaturedProducts = async () => {
      try {
        const response = await getAllProducts("1", "100", {}); // fetching 100 to filter from
        console.log(response);
        const allProducts = response?.data?.result || [];
  
        setProducts(allProducts);
      } catch (error) {
        console.error("Failed to fetch featured products:", error);
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      fetchFeaturedProducts();
    }, []);
 
    console.log(data);
    if (loading) {
      return <Loading/>
    }

  return (
    <div>
     <Carousel
      autoplay={{ dotDuration: true }}
      autoplaySpeed={2000}
      arrows={true}
      fade={true}
      className="container mx-auto mt-12 min-h-[55vh] bg-gradient-to-r from-blue-500 to-white rounded-4xl"
    >
      {data &&
      
        [...data] // shallow copy to safely sort
          .sort((a, b) => {
            // First, prioritize in-stock items
            if (a.inStock !== b.inStock) {
              return a.inStock ? -1 : 1; // in-stock (true) comes before out-of-stock (false)
            }
            // Then sort by price (high to low)
            return b.price - a.price;
          }) // high to low sort
          .slice(0, 6)
          .map((d: TMedicine) => (
            <Link  href={`/shop/${d?._id}`} key={d?._id}>
              <div className="rounded-4xl ">
                {/* description */}
                <header className="flex min-h-[55vh] h-full lg:flex-row flex-col gap-[50px] lg:gap-0 justify-center items-center rounded-4xl">
                  <div className="px-8 mt-8 sm:h-1/2  lg:mt-0 w-full lg:w-[50%] text-center text-black">
                    <h1 className="text-[40px] lg:text-[60px] leading-[45px] lg:leading-[65px] font-[500]">
                      {d?.name}
                    </h1>
                    <p className="text-[16px] mt-2">{d?.description}</p>
                  </div>

                  {/* image */}
                  <div className="w-full lg:w-[50%] p-10 flex justify-center items-center rounded-4xl">
                    <img
                      src={d?.Img as string }
                      alt="image"
                      // width={192}
                      // height={192}
                      className="w-48 h-48 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full"
                    />
                  </div>
                </header>
              </div>
            </Link>
          ))}
    </Carousel>
    </div>
  );
};

export default HeroSection;
