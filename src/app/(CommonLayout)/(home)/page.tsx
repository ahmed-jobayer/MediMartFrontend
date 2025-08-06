import FeaturedSection from "@/components/modules/home/FeaturedSection/FeaturedSection";
import HeroSection from "@/components/modules/home/HeroSection";
import TestimonialSection from "@/components/modules/home/Testimonials/TestimonialSections";
import WhyChooseUs from "@/components/modules/home/WhyChooseUs/WhyChooseUs";
import HowItWorks from "@/components/modules/home/HowItWorks/HowItWorks";

const HomePage = () => {
  return (
    <>
      {/* <Navbar /> */}
      <main className="min-h-screen">
        <HeroSection />
        <FeaturedSection/>
        <WhyChooseUs />
        <HowItWorks />
        <TestimonialSection/> 
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default HomePage;
