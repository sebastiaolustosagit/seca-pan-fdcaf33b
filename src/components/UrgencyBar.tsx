import { AlertCircle } from "lucide-react";

export const UrgencyBar = () => {
  return (
    <div className="sticky top-0 z-50 bg-secondary text-white py-2 px-4 text-center shadow-lg animate-pulse">
      <div className="container mx-auto flex items-center justify-center gap-2">
        <AlertCircle className="w-4 h-4 flex-shrink-0" />
        <p className="text-xs md:text-sm font-bold uppercase">
          ATENÇÃO: O LOTE 1 ENCERRA EM BREVE. GARANTA O PREÇO DE R$ 17 AGORA.
        </p>
      </div>
    </div>
  );
};
