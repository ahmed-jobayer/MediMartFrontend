"use client";

import { CheckCircle, Clock, Shield, Truck } from "lucide-react";

const features = [
  {
    id: 1,
    icon: Shield,
    title: "Trusted Quality",
    description: "All our medicines are sourced from certified manufacturers and undergo rigorous quality checks.",
  },
  {
    id: 2,
    icon: Truck,
    title: "Fast Delivery",
    description: "Quick and reliable delivery service ensuring your medicines reach you on time, every time.",
  },
  {
    id: 3,
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock customer support to help you with any queries or concerns.",
  },
  {
    id: 4,
    icon: CheckCircle,
    title: "Licensed Pharmacy",
    description: "We are a fully licensed pharmacy with certified pharmacists to ensure your safety.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 md:px-0">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Why Choose MediMart?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We&apos;re committed to providing you with the best healthcare experience
            through quality products, exceptional service, and reliable support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.id}
                className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition-shadow duration-300 text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-primary/5 px-6 py-3 rounded-full">
            <CheckCircle className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">
              Trusted by over 10,000+ satisfied customers
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
