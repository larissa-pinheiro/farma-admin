
function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-100 text-gray-600 text-sm border-t border-gray-200 px-6 py-4 flex flex-col md:flex-row items-center justify-between">

      <div className="text-center md:text-left mb-2 md:mb-0">
        Criado por Larissa Pinheiro © {year} <strong className="text-[#3b8b7d]">FarmaAdmin</strong> — Todos os direitos reservados.
      </div>

      <div className="flex items-center gap-4 mb-2 md:mb-0">
        <span className="hidden sm:inline">Versão 1.0</span>
        <span className="hidden sm:inline">|</span>
        <a href="https://github.com/larissa-pinheiro" className="hover:text-emerald-700" target="_blank" rel="noopener noreferrer">Ajuda</a>
        <a href="https://www.linkedin.com/in/larissa-mpinheiro/" className="hover:text-emerald-700" target="_blank" rel="noopener noreferrer">Contato</a>
        <a href="#" className="hover:text-emerald-700">Política de Privacidade</a>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded-full">
          Servidor online
        </span>
      </div>
    </footer>
  );
}

export default Footer;
