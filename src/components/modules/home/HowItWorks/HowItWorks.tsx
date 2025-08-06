"use client";

import { Search, FileText, ShoppingCart, Truck } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    id: 1,
    icon: Search,
    title: "Search & Select",
    description: "Browse our extensive catalog or search for specific medicines you need.",
    color: "from-blue-500 to-blue-600",
  },
  {
    id: 2,
    icon: FileText,
    title: "Upload Prescription",
    description: "For prescription medicines, simply upload a clear photo of your prescription.",
    color: "from-green-500 to-green-600",
  },
  {
    id: 3,
    icon: ShoppingCart,
    title: "Add to Cart & Pay",
    description: "Review your order, apply any discounts, and proceed with secure payment.",
    color: "from-purple-500 to-purple-600",
  },
  {
    id: 4,
    icon: Truck,
    title: "Fast Delivery",
    description: "Get your medicines delivered safely to your doorstep within hours.",
    color: "from-orange-500 to-orange-600",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-0">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Getting your medicines has never been easier. Follow these simple steps
            to get your healthcare essentials delivered to your door.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step) => {
            const IconComponent = step.icon;
            return (
              <div key={step.id} className="relative">
                {/* Connecting Line */}
               
                
                <div className="relative z-10 text-center group ">
                  {/* Step Number */}
                  <div className="inline-flex  items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-bold text-lg mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {step.id}
                  </div>
                  <div className="border mx-9 mb-3"/>
                  {/* Icon */}
                  <div className={`w-20 h-20  mx-auto mb-6 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-primary/5 to-secondary/5 px-8 py-6 rounded-2xl border border-primary/10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <ShoppingCart className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-foreground">Ready to get started?</h4>
                <p className="text-sm text-muted-foreground">Start shopping for your medicines now</p>
              </div>
            </div>
            <Link href={'/shop'}>
            <button className="bg-primary cursor-pointer hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-medium transition-colors duration-200 shadow-md hover:shadow-lg">
              Start Shopping
            </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
