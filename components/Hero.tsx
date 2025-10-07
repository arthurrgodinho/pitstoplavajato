import React, { useState, useEffect } from 'react';
import { StarIcon } from './icons/StarIcon';
import { DownArrowIcon } from './icons/DownArrowIcon';

const Hero: React.FC = () => {
    const [isArrowVisible, setIsArrowVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            // Hide the arrow when user scrolls down and remove the listener for performance
            if (window.scrollY > 50) {
                setIsArrowVisible(false);
                window.removeEventListener('scroll', handleScroll);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleArrowClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        document.querySelector('#depoimentos')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="hero" className="relative min-h-screen flex items-center text-white pt-20">
            {/* Desktop Background */}
            <div className="absolute inset-0 hidden md:block">
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('images/desktop-background.jpg')` }}></div>
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent"></div>
            </div>
            {/* Mobile Background */}
            <div className="absolute inset-0 md:hidden">
                 <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('images/mobile-background.jpg')` }}></div>
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl text-left">
                    <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black uppercase tracking-wider mb-4 animate-fade-in-down">
                        Seu carro como <span className="text-brand-yellow">novo</span>, todos os dias.
                    </h1>
                    <h2 className="text-lg sm:text-xl lg:text-2xl text-brand-light-text font-light mb-8 animate-fade-in-up">
                        Cuidado premium com cuidado real e tecnologia.
                    </h2>
                    <a href="https://wa.me/5563992495105" className="inline-block bg-brand-yellow text-black font-bold py-4 px-10 text-lg rounded-md hover:brightness-90 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-brand-yellow/50 animate-bounce-slow">
                        Agende seu horário
                    </a>
                </div>
            </div>

            <a
                href="#depoimentos"
                onClick={handleArrowClick}
                aria-label="Rolar para baixo"
                className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-20 cursor-pointer transition-opacity duration-500 ${isArrowVisible ? 'opacity-100 animate-bounce' : 'opacity-0 pointer-events-none'}`}
            >
                <DownArrowIcon className="w-10 h-10 text-white" />
            </a>
        </section>
    );
};

export default Hero;