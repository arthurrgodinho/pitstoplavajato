import React from 'react';
import { WhatsAppIcon } from './icons/SocialIcons';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const logoUrl = 'images/logo-pitstopcardetailing.png';

const Booking: React.FC = () => {
    const [ref, isInView] = useScrollAnimation();

    const handleBookingClick = () => {
        const message = `Olá! Gostaria de agendar um serviço.`;
        const whatsappUrl = `https://wa.me/5563992495105?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <section id="agendar" className="py-20 bg-brand-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div 
                    ref={ref}
                    className={`max-w-3xl mx-auto text-center transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                    <img src={logoUrl} alt="Pit Stop Logo" className="h-20 w-auto mx-auto mb-8" />
                    <h2 className="text-3xl sm:text-4xl font-bold">Pronto para transformar seu carro?</h2>
                    <p className="text-brand-light-text mt-4 mb-10">Clique no botão abaixo para agendar seu horário pelo WhatsApp. É rápido e fácil!</p>
                    <button
                        onClick={handleBookingClick}
                        className="bg-brand-yellow text-black font-bold py-4 px-10 text-lg rounded-md hover:brightness-95 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-brand-yellow/30 flex items-center justify-center gap-3 mx-auto"
                        aria-label="Agendar pelo WhatsApp"
                    >
                        <WhatsAppIcon className="w-7 h-7" />
                        <span>Agendar pelo WhatsApp</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Booking;
