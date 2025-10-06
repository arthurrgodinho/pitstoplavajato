import React, { useState } from 'react';
import { ChevronDownIcon } from './icons/ChevronIcons';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
    { question: 'Quanto tempo leva o serviço?', answer: 'O tempo varia conforme o serviço. Uma lavagem de precisão leva cerca de 2-3 horas, enquanto um revestimento cerâmico pode levar de 1 a 2 dias devido ao tempo de cura.' },
    { question: 'Vocês oferecem detalhamento móvel?', answer: 'Atualmente, todos os nossos serviços são realizados em nosso estúdio para garantir o controle de qualidade e o ambiente ideal para a aplicação dos produtos.' },
    { question: 'Qual a diferença entre polimento e revestimento?', answer: 'O polimento remove imperfeições da pintura, como riscos e manchas, restaurando o brilho. O revestimento cerâmico é uma camada protetora aplicada após o polimento, que oferece proteção duradoura contra raios UV, sujeira e pequenos arranhões.' },
    { question: 'Preciso agendar com antecedência?', answer: 'Sim, recomendamos agendar com pelo menos uma semana de antecedência para garantir a disponibilidade, especialmente para serviços mais demorados.' },
    { question: 'O que é proteção cerâmica?', answer: 'É um polímero líquido aplicado à pintura que se liga quimicamente, criando uma camada de proteção hidrofóbica e resistente que dura anos, mantendo o carro limpo e brilhante por mais tempo.' },
];

const AccordionItem: React.FC<{ item: FAQItem; isOpen: boolean; onClick: () => void; }> = ({ item, isOpen, onClick }) => {
    return (
        <div className="border-b border-brand-gray">
            <button onClick={onClick} className="w-full flex justify-between items-center text-left py-5 px-2">
                <span className="text-lg font-semibold">{item.question}</span>
                <ChevronDownIcon className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <p className="p-4 text-brand-light-text">{item.answer}</p>
            </div>
        </div>
    );
};

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const [titleRef, isTitleInView] = useScrollAnimation();
    const [accordionRef, isAccordionInView] = useScrollAnimation();

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 bg-brand-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div 
                    ref={titleRef}
                    className={`text-center mb-12 transition-all duration-700 ease-out ${isTitleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold">Perguntas Frequentes</h2>
                    <p className="text-brand-light-text mt-4">Tudo o que você precisa saber antes de agendar.</p>
                </div>
                <div 
                    ref={accordionRef}
                    className={`max-w-3xl mx-auto transition-all duration-700 ease-out ${isAccordionInView ? 'opacity-100' : 'opacity-0'}`}
                >
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} item={faq} isOpen={openIndex === index} onClick={() => handleToggle(index)} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
