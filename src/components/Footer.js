const Footer = () => {
    return (
      <footer className="bg-black text-gray-400 py-6">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            © 2015 Comidas e Lugares. Todos os direitos reservados.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="/privacy" className="hover:text-white text-sm">
              Política de Privacidade
            </a>
            <a href="/terms" className="hover:text-white text-sm">
              Termos de Uso
            </a>
          </div>
          <div className="mt-4">
            <a href="https://www.instagram.com/comidaselugaresemteresina/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              Instagram
            </a>
            {' | '}
            <a href="https://www.tiktok.com/@comidaselugaresthe" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              Tik Tok
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  