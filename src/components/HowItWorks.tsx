import { Target, Flame, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HowItWorks = () => {
  const scrollToCheckout = () => {
    document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="how-it-works" className="bg-muted py-12 md:py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-12">
          <h2 className="font-display font-bold text-gray-900 text-2xl md:text-3xl mb-2">
            Como funciona o Desafio?
          </h2>
          <p className="font-bold text-secondary text-sm md:text-base flex items-center justify-center gap-2">
            <Calendar className="w-4 h-4" />
            AO VIVO de 08 a 14 de Dezembro
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <div className="w-12 h-12 bg-gradient-to-br from-success to-green-600 rounded-xl flex items-center justify-center text-white mb-4 mx-auto transform rotate-3">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-gray-900 text-base md:text-lg mb-2">
              A Troca Diária
            </h3>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
              Todo dia uma missão simples: "Tire o alimento X e coma o Y". Sem complicar.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <div className="w-12 h-12 bg-gradient-to-br from-success to-green-600 rounded-xl flex items-center justify-center text-white mb-4 mx-auto transform rotate-3">
              <Flame className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-gray-900 text-base md:text-lg mb-2">
              Queima Acelerada
            </h3>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
              Aprenda a combinação de alimentos que força seu corpo a usar gordura como combustível.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <div className="w-12 h-12 bg-gradient-to-br from-success to-green-600 rounded-xl flex items-center justify-center text-white mb-4 mx-auto transform rotate-3">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-gray-900 text-base md:text-lg mb-2">
              Sem Enrolação
            </h3>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
              Aulas curtas e diretas às 07:30h. Você assiste, aplica e vê o resultado.
            </p>
          </div>
        </div>

        <Button 
          onClick={scrollToCheckout}
          className="bg-gradient-to-b from-primary to-primary-dark text-white font-display font-bold text-sm md:text-lg px-12 py-6 rounded-lg shadow-[0_3px_0_hsl(var(--primary-dark))] hover:shadow-none hover:translate-y-[2px] transition-all uppercase"
        >
          Quero Entrar no Desafio
        </Button>
      </div>
    </section>
  );
};
