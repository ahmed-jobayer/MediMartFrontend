import { Button } from "@/components/ui/button";
import { XCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

const FailedOrder = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 text-center max-w-md w-full">
        <XCircle className="text-red-500 w-16 h-16 mx-auto mb-4" />
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Payment Failed
        </h2>
        <p className="text-gray-600 mb-6">
          Unfortunately, your payment could not be processed. Please try again
          or contact support.
        </p>
        <div className="flex justify-center gap-4">
          <Link href={"/"}>
            <Button className="cursor-pointer bg-purple-600" variant="default">
              Go to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FailedOrder;
