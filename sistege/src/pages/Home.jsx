import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-dark text-white min-h-screen font-sans">
      <section className="px-6 py-20 text-center md:text-left md:flex md:items-center md:justify-between md:px-20 bg-gradient-to-br from-gray-900 to-black">
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Gestão descomplicada <br /> para seu sistema
          </h1>
          <p className="mt-4 text-gray-400 text-lg">
            Consultoria assistida com foco em autonomia e eficiência
          </p>
          <Link to="/treinamentos">
            <button className="mt-6 bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition shadow-md">
              Saiba mais
            </button>
          </Link>
        </div>
        <img
          src="/hero-image.jpg"
          alt="Profissional trabalhando"
          className="hidden md:block w-1/3 rounded-xl shadow-lg"
        />
      </section>
    </div>
  );
}
