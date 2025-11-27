import { Lock, Zap, RefreshCw, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToCheckout = () => {
    document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-gray-900 to-black opacity-90"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(55,65,81,0.3)_0%,rgba(0,0,0,0)_100%)]"></div>
      
      <div className="container mx-auto px-4 py-8 md:py-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          {/* Coluna de Texto */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="flex justify-center lg:justify-start mb-3">
              <span className="inline-block bg-success/20 text-success text-[10px] md:text-xs font-bold px-3 py-1 rounded-full border border-success/30 uppercase tracking-wider">
                MÉTODO COMPROVADO
              </span>
            </div>
            
            <h1 className="font-display font-black text-2xl md:text-3xl lg:text-4xl leading-tight mb-4">
              Desafio Seca Pança 7 Dias AO VIVO: O Único Método Prático para{" "}
              <span className="text-accent">Perder até 5kg em 7 dias</span>
            </h1>
            
            <p className="text-gray-300 text-sm md:text-lg leading-snug mb-6">
              <strong className="text-white">Simples, Rápido e Direto.</strong>
              <br className="md:hidden" />
              {" "}Todo dia vamos tirar um alimento que te inflama e colocar um que seca. Sem passar fome.
            </p>

            {/* 3 Pilares */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 md:p-5 mb-6 text-left">
              <p className="text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3 pb-2 border-b border-white/10">
                ENTENDA OS 3 PILARES:
              </p>

              <div className="space-y-3">
                <div className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <Zap className="w-3 h-3 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-accent font-bold text-xs md:text-sm leading-tight">1. Interruptor Metabólico</h3>
                    <p className="text-gray-300 text-[10px] md:text-xs leading-tight">Destrave a queima de gordura já nas primeiras 24h.</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-success/10 border border-success/20 flex items-center justify-center">
                    <RefreshCw className="w-3 h-3 text-success" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xs md:text-sm leading-tight">2. Regra da Substituição</h3>
                    <p className="text-gray-300 text-[10px] md:text-xs leading-tight">Troque alimentos inflamatórios por opções que emagrecem.</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    <Wallet className="w-3 h-3 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xs md:text-sm leading-tight">3. Fim do Cardápio Caro</h3>
                    <p className="text-gray-300 text-[10px] md:text-xs leading-tight">Alimentos comuns que você tem em casa (superiores a suplementos de R$ 200).</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="max-w-md mx-auto lg:mx-0">
              <div className="mb-3">
                <div className="flex justify-between text-[10px] md:text-xs font-bold mb-1">
                  <span className="text-accent">1º Lote: R$ 17,00</span>
                  <span className="text-secondary">🔥 94% Vendido</span>
                </div>
                <div className="w-full h-1.5 bg-gray-700 rounded-full overflow-hidden mb-4">
                  <div className="h-full w-[94%] bg-gradient-to-r from-accent to-secondary"></div>
                </div>
              </div>

              <Button 
                onClick={scrollToCheckout}
                className="w-full bg-gradient-to-b from-primary to-primary-dark text-white font-display font-bold text-sm md:text-lg py-6 rounded-lg shadow-[0_3px_0_hsl(var(--primary-dark))] hover:shadow-none hover:translate-y-[2px] transition-all uppercase mb-3 animate-pulse"
              >
                CLIQUE PARA EMAGRECER 5kg
              </Button>

              <div className="w-full bg-gray-800 text-gray-500 font-display font-bold text-xs md:text-sm py-4 rounded-lg border-b-2 border-gray-900 text-center uppercase mb-3 cursor-not-allowed">
                2º Lote: R$ 35,00
                <span className="block text-[10px] font-normal opacity-70 normal-case mt-1">
                  (Falta 6% para iniciar)
                </span>
              </div>

              <p className="text-[10px] md:text-xs text-gray-400 flex items-center justify-center lg:justify-start gap-2 mt-3">
                <Lock className="w-3 h-3" />
                Garantia de 7 dias ou seu dinheiro de volta.
              </p>
            </div>
          </div>

          {/* Coluna de Imagem */}
          <div className="w-full lg:w-1/2 relative mt-6 lg:mt-0">
            <div className="relative z-10 max-w-[280px] mx-auto rounded-xl overflow-hidden border-b-4 border-success shadow-2xl">
              <img 
                src="https://thaisaraujo.com.br/wp-content/uploads/2025/11/foto-sobre2.webp" 
                alt="Thais Araújo - Nutricionista e Psicóloga especializada em emagrecimento"
                width="448"
                height="560"
                loading="eager"
                fetchPriority="high"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 text-center">
                <p className="font-display font-bold text-white text-sm md:text-base">Thais Araújo</p>
                <p className="text-success text-[10px] md:text-xs">Nutricionista & Psicóloga</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
