import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Service {
  imageUrl: string;
  title: string;
  description: string;
}

const services: Service[] = [
  { imageUrl: 'public/images/services/lavagem-simples.jpg', title: 'Lavagem Simples', description: 'Limpeza meticulosa que preserva e realça a pintura do seu veículo.' },
  { imageUrl: 'public/images/services/polimento-cristalizado.jpg', title: 'Polimento Profissional', description: 'Restauração do brilho original, removendo riscos e imperfeições.' },
  { imageUrl: 'public/images/services/preparacao-de-carro-para-revenda.jpg', title: 'Preparação de Carro Para Revenda', description: 'Limpeza completa e Detalhamento, seu carro como novo.' },
  { imageUrl: 'public/images/services/lavagem-do-motor.jpg', title: 'Lavagem do Motor', description: 'Limpeza técnica e profissional, sem danificar o motor do seu carro.' },
  { imageUrl: 'public/images/services/aplicacao-de-revestimento.jpg', title: 'Revestimento Cerâmico', description: 'Proteção máxima com brilho intenso e efeito hidrofóbico por anos.' },
  { imageUrl: 'public/images/services/limpeza-interna-completa.jpg', title: 'Higienização de Estofados', description: 'Higienização completa da parte interna do seu carro.' },
];

const ServiceCard: React.FC<{ service: Service; index: number }> = ({ service, index }) => {
    const [ref, isInView] = useScrollAnimation();
    return (
        <div 
            ref={ref}
            className={`bg-brand-gray rounded-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-700 ease-out flex flex-col ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <img src={service.imageUrl} alt={service.title} className="w-full h-48 object-cover" />
            <div className="p-6 text-center flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-brand-light-text flex-grow">{service.description}</p>
            </div>
        </div>
    );
};


const Services: React.FC = () => {
    const [titleRef, isTitleInView] = useScrollAnimation();
    const [buttonRef, isButtonInView] = useScrollAnimation();

    return (
        <section id="servicos" className="py-20 bg-brand-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div 
                    ref={titleRef}
                    className={`text-center mb-12 transition-all duration-700 ease-out ${isTitleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold">Nossos Serviços</h2>
                    <p className="text-brand-light-text mt-4 max-w-2xl mx-auto">Oferecemos uma gama completa de serviços para transformar seu carro, por dentro e por fora.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} index={index} />
                    ))}
                </div>
                <div 
                    ref={buttonRef}
                    className={`text-center mt-12 transition-all duration-700 ease-out ${isButtonInView ? 'opacity-100' : 'opacity-0'}`}
                >
                    <a href="https://wa.me/5563992495105" className="text-brand-yellow font-semibold border border-brand-yellow py-2 px-6 rounded-md hover:bg-brand-yellow hover:text-black transition-colors duration-300">
                        Ver todos os serviços
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Services;
