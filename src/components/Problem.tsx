import { AlertTriangle } from "lucide-react";

export const Problem = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="font-display font-bold text-gray-900 text-2xl md:text-3xl mb-4">
          Por que você desiste das dietas?
        </h2>
        <p className="text-gray-600 text-sm md:text-base mb-10">
          Não é culpa sua. Os métodos tradicionais foram feitos para falhar.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-left">
          {/* Problema 1 */}
          <div className="bg-red-50 p-5 rounded-xl border-l-4 border-destructive">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0" />
              <h3 className="font-display font-bold text-gray-900 text-sm md:text-base">
                Passar Fome
              </h3>
            </div>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
              Dietas restritivas te deixam fraca, ansiosa e louca por doces.
            </p>
          </div>

          {/* Problema 2 */}
          <div className="bg-red-50 p-5 rounded-xl border-l-4 border-destructive">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0" />
              <h3 className="font-display font-bold text-gray-900 text-sm md:text-base">
                Comida Cara
              </h3>
            </div>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
              Você não precisa de farinha de amêndoas ou salmão para emagrecer.
            </p>
          </div>

          {/* Problema 3 */}
          <div className="bg-red-50 p-5 rounded-xl border-l-4 border-destructive">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0" />
              <h3 className="font-display font-bold text-gray-900 text-sm md:text-base">
                Efeito Sanfona
              </h3>
            </div>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
              Perde 2kg, ganha 4kg. Seu metabolismo trava e você desanima.
            </p>
          </div>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl p-6">
          <p className="font-display font-black text-secondary text-lg md:text-xl mb-2">
            O SEGREDO É A SIMPLICIDADE.
          </p>
          <p className="text-gray-600 text-sm md:text-base">
            Não é sobre comer pouco. É sobre comer os alimentos que "desligam" a inflamação.
          </p>
        </div>
      </div>
    </section>
  );
};
