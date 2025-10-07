import React, { useState } from 'react';

const logoUrl = 'images/logo-pitstopcardetailing.png';

const Logo: React.FC = () => (
    <a href="#" className="flex-shrink-0">
        <img src={logoUrl} alt="Pit Stop Logo" className="h-16 w-auto" />
    </a>
);

const NavLinks: React.FC<{className?: string}> = ({className}) => {
    const links = [
        { name: 'Início', href: '#hero' },
        { name: 'Avaliações', href: '#depoimentos' },
        { name: 'Serviços', href: '#servicos' },
        { name: 'Sobre Nós', href: '#galeria' },
        { name: 'Agendar', href: '#agendar' }
    ];

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className={`items-center gap-6 ${className}`}>
            {links.map(link => (
                <a key={link.name} href={link.href} onClick={(e) => handleScroll(e, link.href)} className="text-brand-light-text hover:text-white transition-colors duration-300">
                    {link.name}
                </a>
            ))}
        </nav>
    );
}

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-brand-black bg-opacity-80 backdrop-blur-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <Logo />
                    <div className="hidden md:flex items-center gap-6">
                        <NavLinks className="flex"/>
                        <a href="https://wa.me/5563992495105" className="bg-brand-yellow text-black font-semibold py-2 px-5 rounded-md hover:brightness-90 transition-all duration-300 shadow-lg shadow-brand-yellow/20">
                            Agendar Agora
                        </a>
                    </div>
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path></svg>
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-brand-black pb-4">
                    <NavLinks className="flex flex-col items-center gap-4"/>
                     <a href="https://wa.me/5563992495105" className="block text-center mt-4 bg-brand-yellow text-black font-semibold py-2 px-5 rounded-md hover:brightness-90 transition-all duration-300 w-11/12 mx-auto">
                        Agendar Agora
                    </a>
                </div>
            )}
        </header>
    );
};

export default Header;