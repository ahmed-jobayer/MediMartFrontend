/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/redux/hooks";
import { Zap } from "lucide-react";
import { TMedicine } from "@/types";
import { addProduct } from "@/redux/features/cartSlice";
import { useRouter } from "next/navigation";

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
     <Button
        onClick={handleBuyNow}
        variant="outline"
        className="flex items-center gap-2 cursor-pointer"
    >
        <Zap className="w-5 h-5" />
        Buy Now
    </Button>
  );
};

export default BuyNow;