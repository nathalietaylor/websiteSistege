export default function Footer() {
  return (
    <footer className="bg-dark text-gray-400 text-sm text-center py-6 border-t border-gray-700">
      <p>
        © {new Date().getFullYear()} SISTEGE Sistemas de Gestão. Todos os
        direitos reservados.
      </p>
    </footer>
  );
}
