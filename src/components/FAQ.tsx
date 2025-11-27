import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "Tenho medo de engordar tudo de novo depois...",
      answer: "Nós resolvemos isso com a 'Reintrodução'. Você vai aprender não só a secar, mas a manter o peso comendo o que gosta."
    },
    {
      question: "O desafio é ao vivo?",
      answer: "Sim! De 08 a 14 de Dezembro. As aulas são liberadas às 07:30h para você assistir quando acordar, mas ficam gravadas."
    },
    {
      question: "Vou passar fome?",
      answer: "Não! A estratégia é baseada em saciedade e densidade nutricional. Você vai comer MUITO, mas dos alimentos certos."
    },
    {
      question: "Os ingredientes são caros?",
      answer: "Zero. Usamos ovo, frango, legumes, frutas da estação. Nada de farinhas caras ou nomes estranhos."
    },
    {
      question: "Por quanto tempo tenho acesso?",
      answer: "Ao comprar o Replay você tem acesso vitalício ao material em PDF e 1 ano de acesso às gravações das aulas."
    }
  ];

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-display font-bold text-gray-900 text-center text-2xl md:text-3xl mb-10">
          Perguntas Frequentes
        </h2>
        
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <AccordionTrigger className="bg-muted px-4 py-4 hover:no-underline text-left font-display font-bold text-gray-900 text-sm md:text-base">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="bg-white px-4 py-4 text-gray-600 text-sm md:text-base leading-relaxed border-t border-gray-100">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
