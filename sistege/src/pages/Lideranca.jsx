import React from "react";
import { Link } from "react-router-dom";

export default function Lideranca() {
  return (
    <div className="bg-dark text-white min-h-screen font-sans">
      <section className="px-6 md:px-20 py-16 bg-black text-white">
        <h2 className="text-center text-xl font-semibold text-primary mb-8">
          Nossa Liderança
        </h2>
        <div className="md:flex gap-8 items-center">
          <img
            src="/lider.jpg"
            alt="Reinaldo Zampieri"
            className="w-64 rounded-xl shadow-md mb-6 md:mb-0"
          />
          <div>
            <blockquote className="italic text-gray-300">
              "Na SISTEGE, acreditamos que a implantação de um sistema de gestão
              só faz sentido quando transforma desafios em oportunidades reais."
            </blockquote>
            <p className="mt-4 text-right text-primary font-semibold">
              Reinaldo Zampieri
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
