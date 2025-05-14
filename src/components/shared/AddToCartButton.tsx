'use client';

import { useAppDispatch } from "@/redux/hooks";
import { ShoppingCart } from "lucide-react";
import { TMedicine } from "@/types";
import { addProduct } from "@/redux/features/cartSlice";
import CustomButton from "./CustomButton";

const AddToCartButton = ({ medicine }: { medicine: TMedicine }) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(addProduct(medicine));
  };

  return (
    <CustomButton
          className="!text-blue-500 bg-white border"
            handleAnything={() => handleClick()}
            textName={
              <div className="flex gap-1 justify-content-center items-center ">
                <ShoppingCart />
                Add to Cart
              </div>
            }
          />
  );
};

export default AddToCartButton;
