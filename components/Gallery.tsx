import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// Using a single, representative image pair for the new design.
const images = {
    before: { src: 'public/images/gallery/1998.jpg', alt: 'Carro antes do detalhamento' },
    after: { src: 'public/images/gallery/2025.jpg', alt: 'Carro depois do detalhamento' },
};

const Gallery: React.FC = () => {
    const [contentRef, isContentInView] = useScrollAnimation();

    return (
        <section id="galeria" className="py-20 bg-brand-gray overflow-hidden ajuste-galeria">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div 
                    ref={contentRef}
                    className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center transition-all duration-700 ease-out ajuste-galeria ${isContentInView ? 'opacity-100' : 'opacity-0'}`}
                >
                    {/* Left Column: CTA */}
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                            Não é Profissão, <br className="hidden md:block" /> é <span className="text-brand-yellow">Paixão</span>
                        </h2>
                        <p className="text-brand-light-text text-lg mb-8 max-w-md mx-auto md:mx-0">
                            Estamos a 27 anos oferecendo o melhor em limpeza e estética automotiva para a população palmense. Cuidar do seu carro é nossa paixão.
                        </p>
                         <a href="https://wa.me/5563992495105" className="inline-block bg-brand-yellow text-black font-bold py-3 px-8 text-md rounded-md hover:brightness-90 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-brand-yellow/30">
                            Conheça Nossos Serviços
                        </a>
                    </div>

                    {/* Right Column: Images */}
                    <div className="relative h-96 md:h-[500px]">
                        {/* Back Image */}
                        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-7/12 max-w-sm transition-all duration-500 ease-out">
                             <span className="absolute top-2 left-2 bg-black bg-opacity-70 text-white text-xs font-bold py-1 px-2 rounded z-10">1998</span>
                            <img 
                                src={images.before.src} 
                                alt={images.before.alt} 
                                className="w-full h-auto object-cover rounded-lg shadow-2xl border-4 border-neutral-800" 
                            />
                        </div>
                        {/* Front Image */}
                         <div className="absolute top-1/2 right-0 -translate-y-[40%] w-7/12 max-w-sm transition-all duration-500 ease-out z-20">
                            <span className="absolute top-2 left-2 bg-brand-yellow text-black text-xs font-bold py-1 px-2 rounded z-10">2025</span>
                            <img 
                                src={images.after.src} 
                                alt={images.after.alt} 
                                className="w-full h-auto object-cover rounded-lg shadow-2xl border-4 border-neutral-800" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;