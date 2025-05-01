import FeaturedSection from "@/components/modules/home/FeaturedSection/FeaturedSection";
import HeroSection from "@/components/modules/home/HeroSection";
import TestimonialSection from "@/components/modules/home/Testimonials/TestimonialSections";

const HomePage = () => {
  return (
    <>
      {/* <Navbar /> */}
      <main className="min-h-screen">
        <HeroSection />
        <FeaturedSection/>
        <TestimonialSection/> 
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default HomePage;
