import { UrgencyBar } from "@/components/UrgencyBar";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Problem } from "@/components/Problem";
import { Checkout } from "@/components/Checkout";
import { Bio } from "@/components/Bio";
import { Guarantee } from "@/components/Guarantee";
import { FAQ } from "@/components/FAQ";

const Index = () => {
  return (
    <main className="min-h-screen">
      <UrgencyBar />
      <Hero />
      <HowItWorks />
      <Problem />
      <Checkout />
      <Bio />
      <Guarantee />
      <FAQ />
      
      <footer className="bg-black text-gray-600 py-8 text-center text-sm border-t border-gray-900">
        <div className="container mx-auto px-4">
          <p className="mb-2">Copyright © 2025 Thais Araújo. Todos os direitos reservados</p>
          <p className="text-xs">Não associado ao Facebook ou Facebook Inc.</p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
