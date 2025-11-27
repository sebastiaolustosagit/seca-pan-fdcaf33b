import { Check } from "lucide-react";

export const Bio = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-gray-100">
          
          <div className="w-full md:w-1/2 flex-shrink-0">
            <img 
              src="https://thaisaraujo.com.br/wp-content/uploads/2025/11/foto-sobre2.webp" 
              alt="Thais Araújo - PsicoNutri especialista em emagrecimento com abordagem nutricional e psicológica"
              loading="lazy"
              width="400"
              height="500"
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>

          <div className="w-full md:w-1/2 text-left">
            <h3 className="font-display font-bold text-gray-900 text-2xl md:text-3xl mb-2">
              Com Thais Araújo
            </h3>
            <p className="uppercase font-bold text-success text-sm tracking-wide mb-6">
              Nutricionista e Psicóloga (PsicoNutri)
            </p>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
              Especialista em emagrecimento com uma visão única: unir a{" "}
              <strong className="text-gray-900 bg-green-50 px-1 rounded">
                Nutrição e a Psicologia
              </strong>{" "}
              para tratar a raiz do problema, e não apenas os sintomas.
            </p>

            <ul className="space-y-4 mb-8 font-medium text-gray-700">
              <li className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 bg-success text-white rounded-full text-xs flex-shrink-0">
                  ✓
                </span>
                <span className="text-sm md:text-base">
                  Mais de <strong className="text-gray-900">10.000 vidas</strong> transformadas.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 bg-success text-white rounded-full text-xs flex-shrink-0">
                  ✓
                </span>
                <span className="text-sm md:text-base">
                  Método proprietário com <strong className="text-gray-900">embasamento científico</strong>.
                </span>
              </li>
            </ul>

            <div className="bg-green-50 p-6 rounded-xl border-l-4 border-success">
              <p className="text-gray-800 font-medium text-sm md:text-base leading-relaxed">
                Criei este{" "}
                <strong className="text-green-700">Guia de 7 Dias</strong> para
                democratizar meu método de consultório. É a forma mais acessível,
                prática e segura para você destravar seu intestino e começar a
                emagrecer agora.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
