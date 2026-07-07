import Hero from "@/app/components/ui/landing/Hero";
import Features from "@/app/components/ui/landing/Features";
import Testimonials from "@/app/components/ui/landing/Testimonials";
import Footer from "@/app/components/ui/landing/Footer";

export const metadata = {
  title: "Landing Page",
  description: "A responsive SaaS-style landing page built with Next.js and Tailwind CSS.",
};

export default function LandingPage() {
  return (
    <main>
      <Hero />
      <Features />
      <Testimonials />
      <Footer />
    </main>
  );
}