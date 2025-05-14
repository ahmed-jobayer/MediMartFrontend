/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useAppDispatch } from "@/redux/hooks";
import { BanknoteArrowUp } from "lucide-react";
import { TMedicine } from "@/types";
import { addProduct } from "@/redux/features/cartSlice";
import { useRouter } from "next/navigation";
import CustomButton from "./CustomButton";

const BuyNow = ({ medicine }: { medicine: TMedicine }) => {
  const dispatch = useAppDispatch();

  const handleAddProduct = (medicine: TMedicine) => {
    dispatch(addProduct(medicine));
  };

  const router = useRouter();
   
    const handleBuyNow= (e: any) =>{    
      e.preventDefault(); //  Prevent <Link> default nav
      e.stopPropagation(); //  Prevents the Link from triggering / event bubbling
      handleAddProduct(medicine)
      router.push(`/cart`);
    }

  return (
      <CustomButton
            handleAnything={handleBuyNow}
            textName={
              <div className="flex gap-1 justify-content-center items-center ">
                <BanknoteArrowUp />
                Buy Now
              </div>
            }
          />
  );
};

export default BuyNow;