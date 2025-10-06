import React from 'react';
import { ExperienceIcon, PremiumProductsIcon, SpecializedTeamIcon, PersonalizedServiceIcon, SatisfactionGuaranteeIcon } from './icons/WhyUsIcons';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Differentiator {
  icon: React.ElementType;
  text: string;
}

const differentiators: Differentiator[] = [
    { icon: ExperienceIcon, text: '+27 Anos de Experiência' },
    { icon: PremiumProductsIcon, text: 'Produtos Premium Certificados' },
    { icon: SpecializedTeamIcon, text: 'Equipe Especializada' },
    { icon: PersonalizedServiceIcon, text: 'Atendimento Personalizado' },
    { icon: SatisfactionGuaranteeIcon, text: 'Garantia de Satisfação' },
];

const DifferentiatorItem: React.FC<{ item: Differentiator; index: number }> = ({ item, index }) => {
    const [ref, isInView] = useScrollAnimation();
    return (
        <div
            ref={ref}
            className={`flex flex-col items-center text-center w-36 transition-all duration-700 ease-out ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <div className="bg-brand-gray p-5 rounded-full mb-4 border-2 border-brand-yellow">
                <item.icon className="w-10 h-10 text-brand-yellow" />
            </div>
            <p className="font-semibold text-center">{item.text}</p>
        </div>
    );
};

const WhyUs: React.FC = () => {
    const [titleRef, isTitleInView] = useScrollAnimation();

    return (
        <section id="diferenciais" className="py-20 bg-brand-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    ref={titleRef}
                    className={`text-center mb-12 transition-all duration-700 ease-out ${isTitleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold">O Que Nos Torna Diferentes</h2>
                    <p className="text-brand-light-text mt-4 max-w-2xl mx-auto">Nosso compromisso com a excelência em cada detalhe.</p>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                    {differentiators.map((item, index) => (
                        <DifferentiatorItem key={index} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
