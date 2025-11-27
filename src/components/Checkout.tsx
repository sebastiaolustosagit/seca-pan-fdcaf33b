import { Check, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CountdownTimer } from "./CountdownTimer";

export const Checkout = () => {
  return (
    <section id="checkout" className="bg-dark text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          
          {/* Lista de Itens */}
          <div className="w-full lg:w-1/2">
            <span className="inline-block bg-accent text-black text-xs font-bold px-3 py-1 rounded uppercase mb-4">
              OFERTA ÚNICA
            </span>
            <h2 className="font-display font-bold text-2xl md:text-3xl mb-6">
              O que você recebe hoje:
            </h2>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start p-4 bg-white/5 rounded-lg border border-white/5">
                <Check className="w-5 h-5 text-success mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-gray-200 font-medium text-sm md:text-base block">
                    Imersão 7 Dias AO VIVO (Protocolo Seca Pança)
                  </span>
                  <span className="text-gray-500 text-xs line-through">Valor: R$ 197,00</span>
                </div>
              </li>
              
              <li className="flex items-start p-4 bg-white/5 rounded-lg border border-white/5">
                <Check className="w-5 h-5 text-success mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-gray-200 font-medium text-sm md:text-base block">
                    Cardápio de Desinflamação Rápida
                  </span>
                  <span className="text-gray-500 text-xs line-through">Valor: R$ 97,00</span>
                </div>
              </li>
              
              <li className="flex items-start p-4 bg-white/5 rounded-lg border border-white/5">
                <Check className="w-5 h-5 text-success mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-gray-200 font-medium text-sm md:text-base block">
                    Tira Dúvidas com Nutri ao Vivo
                  </span>
                  <span className="text-gray-500 text-xs line-through">Valor: Inestimável</span>
                </div>
              </li>
            </ul>
            
            <div className="pt-6 border-t border-gray-800">
              <p className="text-gray-400 text-sm md:text-base mb-2">
                Valor Total: <span className="line-through">R$ 361,00</span>
              </p>
              <p className="font-bold text-xl md:text-2xl">
                Hoje por apenas: <span className="text-success text-3xl md:text-4xl">R$ 17,00</span>
              </p>
            </div>
          </div>

          {/* Box de Preço */}
          <div className="w-full lg:w-1/2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl relative">
            <p className="text-center uppercase text-gray-300 text-xs tracking-widest mb-6">
              Escolha Inteligente
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {/* Opção 1 - Ativa */}
              <div className="bg-success/10 border-2 border-success rounded-xl p-4 text-center relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-success text-white text-[10px] font-bold px-3 py-1 rounded-full whitespace-nowrap shadow-lg">
                  Últimas Vagas
                </div>
                <p className="font-display font-bold uppercase text-xs mb-1 mt-2">1º Lote</p>
                <p className="font-display font-black text-3xl text-success mb-2">R$ 17</p>
                <span className="bg-destructive text-white text-[10px] px-2 py-1 rounded">
                  ÚLTIMAS VAGAS
                </span>
              </div>
              
              {/* Opção 2 - Inativa */}
              <div className="bg-gray-800 border border-gray-700 rounded-xl p-4 text-center opacity-60 grayscale">
                <p className="font-display font-bold uppercase text-xs text-gray-500 mb-1 mt-2">2º Lote</p>
                <p className="font-display font-black text-3xl text-gray-600 mb-2">R$ 35</p>
                <span className="text-gray-500 text-[10px] uppercase">Em Breve</span>
              </div>
            </div>

            <div className="text-center mb-8">
              <p className="text-sm text-gray-400 mb-4">
                Economia imediata de <span className="text-success font-bold">R$ 18,00</span>.
              </p>
              <div className="inline-block bg-black/30 px-4 py-2 rounded text-xs font-mono">
                O preço sobe em: <CountdownTimer />
              </div>
            </div>

            <Button 
              asChild
              className="w-full bg-gradient-to-b from-primary to-primary-dark text-white font-display font-bold text-base md:text-lg py-6 rounded-lg shadow-[0_3px_0_hsl(var(--primary-dark))] hover:shadow-none hover:translate-y-[2px] transition-all uppercase flex items-center justify-center gap-2"
            >
              <a 
                href="https://pay.hub.la/ONBH2MZ7scTPoOOVFrR5" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                QUERO PAGAR R$ 17
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </a>
            </Button>

            <div className="flex items-center justify-center gap-2 text-xs text-gray-500 mt-3">
              <Shield className="w-4 h-4 text-success" />
              Pagamento 100% Seguro
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
