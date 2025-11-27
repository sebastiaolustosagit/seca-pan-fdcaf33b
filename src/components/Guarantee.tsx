import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Guarantee = () => {
  return (
    <section className="bg-yellow-50 border-t-4 border-b-4 border-accent py-12">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
          <ShieldCheck className="w-7 h-7 text-white" />
        </div>
        
        <h3 className="font-display font-bold text-gray-900 text-2xl md:text-3xl mb-3">
          Garantia Blindada de 7 Dias
        </h3>
        
        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
          Entre, assista às primeiras aulas e veja o cardápio. Se você não sentir
          que vale 10x o valor de R$ 17,{" "}
          <strong className="text-gray-900">eu devolvo seu dinheiro na hora.</strong>{" "}
          O risco é todo meu.
        </p>
        
        <Button 
          asChild
          className="bg-gradient-to-b from-primary to-primary-dark text-white font-display font-bold text-base md:text-lg px-10 py-6 rounded-lg shadow-[0_3px_0_hsl(var(--primary-dark))] hover:shadow-none hover:translate-y-[2px] transition-all uppercase"
        >
          <a 
            href="https://pay.hub.la/ONBH2MZ7scTPoOOVFrR5" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            QUERO ENTRAR SEM RISCO
          </a>
        </Button>
      </div>
    </section>
  );
};
