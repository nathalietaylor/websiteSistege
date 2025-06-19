import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Treinamentos() {
  const slides = [
    {
      title: "Metodologia “Online ao vivo”",
      content:
        "Aprendizado prático, com troca de experiências e exemplos de documentação. Foco na aplicação imediata do conhecimento.",
    },
    {
      title: "Metodologia “On the Job”",
      content:
        "Treinamento realizado “in Company” com base nos processos e documentos da organização. Foco na aplicação imediata.",
    },
    {
      title: "Instrutores Especialistas",
      content:
        "Auditores líderes com experiência em normas ISO 27001, 27701, 22301, ISO20000-1 e vivência prática nacional/internacional.",
    },
    {
      title: "Conteúdo Personalizado",
      content:
        "Treinamentos adaptados às necessidades do setor e objetivos da organização.",
    },
  ];

  const [index, setIndex] = useState(0);
  const handlePrev = () =>
    setIndex((index - 1 + slides.length) % slides.length);
  const handleNext = () => setIndex((index + 1) % slides.length);

  return (
    <div className="bg-dark text-white min-h-screen font-sans">
      <section className="px-6 md:px-20 py-16 bg-black text-white">
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-4">
              SISTEGE: Excelência em Treinamentos para Sistemas de Gestão
            </h2>
            <p className="text-gray-300">
              Na SISTEGE, transformamos conhecimento em resultados tangíveis.
              Somos especialistas em capacitar profissionais e organizações para
              dominar os desafios dos sistemas de gestão, com treinamentos que
              combinam rigor técnico e aplicação prática, desenvolvendo
              profissionais alinhados com normas ISO.
            </p>
          </div>
          <img
            src="/training.jpg"
            alt="Treinamento em andamento"
            className="rounded-xl shadow-md"
          />
        </div>

        <h3 className="text-xl font-semibold text-center text-primary mb-8">
          Diferenciais dos Nossos Treinamentos
        </h3>

        <div className="max-w-xl mx-auto bg-gray-800 p-6 rounded-lg shadow relative">
          <h4 className="text-lg font-semibold mb-2 text-white">
            {slides[index].title}
          </h4>
          <p className="text-gray-400 text-sm">{slides[index].content}</p>

          <div className="flex justify-between mt-4">
            <button
              onClick={handlePrev}
              className="text-primary hover:underline"
            >
              ← Anterior
            </button>
            <button
              onClick={handleNext}
              className="text-primary hover:underline"
            >
              Próximo →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
