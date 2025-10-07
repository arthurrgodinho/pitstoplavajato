import React, { useRef, useCallback, useEffect } from 'react';
import { StarIcon } from './icons/StarIcon';
import { ChevronLeftIcon, ChevronRightIcon } from './icons/ChevronIcons';
import { GoogleIcon } from './icons/GoogleIcon';
import { VerifiedCheckIcon } from './icons/VerifiedCheckIcon';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Testimonial {
  photoUrl: string;
  name: string;
  review: string;
}

const testimonials: Testimonial[] = [
  { photoUrl: 'images/testimonials/janes.png', name: 'Janes Ferreira Lopes', review: 'Minha experiência nesse lavajato já vem de um bom tempo! Excelente o atendimento e também a limpeza do carro, por isso que só lavo nesse lugar…' },
  { photoUrl: 'images/testimonials/paulo.png', name: 'Paulo Cardoso', review: 'Altíssima qualidade! Atendimento profissional e experiência ótima! Estão de parabéns! Único que salva aqui em Palmas! 👏🏻' },
  { photoUrl: 'images/testimonials/kesia.png', name: 'Késia Anne Lise', review: 'Sempre muito boa, ótimos profissionais!' },
  { photoUrl: 'images/testimonials/bruno.png', name: 'Bruno Camargo Pires', review: 'Atendimento excelente e serviço espetacular, profissionalismos e muita qualidade no serviço. Recomendo. Pra mim é o melhor lava jato de Palmas.' },
  { photoUrl: 'images/testimonials/lucas.png', name: 'Lucas Gloria', review: 'O melhor de Palmas!! Meu Ford Ka ficou zero' },
  { photoUrl: 'images/testimonials/diego.png', name: 'Diego Manoel', review: 'Recomendo! Excelente trabalho, nós da @usadospalmas estamos satisfeitos com o trabalho executado em nossos veículos!' },
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <div className="flex-shrink-0 w-[320px] bg-brand-gray p-6 rounded-lg shadow-lg flex flex-col">
        <div>
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                    <img src={testimonial.photoUrl} alt={testimonial.name} className="w-12 h-12 rounded-full border-2 border-brand-yellow" />
                    <span className="font-bold text-lg ml-3">{testimonial.name}</span>
                </div>
                <GoogleIcon className="w-8 h-8"/>
            </div>
            <div className="flex items-center mb-4">
                <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} className="w-5 h-5 text-yellow-400" />)}
                </div>
                <VerifiedCheckIcon className="w-5 h-5 text-blue-500 ml-2" />
            </div>
            <p className="text-brand-light-text text-sm">"{testimonial.review}"</p>
        </div>
    </div>
);

const AUTO_SLIDE_INTERVAL = 4000;
const RESUME_DELAY = 7000;
const CARD_WIDTH_WITH_GAP = 336; // Card width (320) + gap (16)

const Testimonials: React.FC = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const intervalRef = useRef<number | null>(null);
    const resumeTimeoutRef = useRef<number | null>(null);
    const isInteractingRef = useRef(false);
    const [sectionRef, isSectionInView] = useScrollAnimation();

    const stopAutoSlide = useCallback(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
        if (resumeTimeoutRef.current) {
            clearTimeout(resumeTimeoutRef.current);
            resumeTimeoutRef.current = null;
        }
    }, []);
    
    const startAutoSlide = useCallback(() => {
        stopAutoSlide();
        intervalRef.current = window.setInterval(() => {
            const container = scrollContainerRef.current;
            if (container && !isInteractingRef.current) {
                const maxScroll = container.scrollWidth - container.clientWidth;
                if (container.scrollLeft >= maxScroll - 1) { // -1 for floating point precision
                    container.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    container.scrollBy({ left: CARD_WIDTH_WITH_GAP, behavior: 'smooth' });
                }
            }
        }, AUTO_SLIDE_INTERVAL);
    }, [stopAutoSlide]);

    const handleUserInteraction = useCallback(() => {
        stopAutoSlide();
        resumeTimeoutRef.current = window.setTimeout(() => {
            startAutoSlide();
        }, RESUME_DELAY);
    }, [startAutoSlide, stopAutoSlide]);
    
    const scroll = (direction: 'left' | 'right') => {
        handleUserInteraction();
        const container = scrollContainerRef.current;
        if (container) {
            const { scrollLeft, scrollWidth, clientWidth } = container;
            const maxScroll = scrollWidth - clientWidth;

            if (direction === 'right') {
                // Use a small tolerance for floating point comparisons
                if (scrollLeft >= maxScroll - 5) {
                    container.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    container.scrollBy({ left: CARD_WIDTH_WITH_GAP, behavior: 'smooth' });
                }
            } else { // direction === 'left'
                if (scrollLeft <= 5) {
                    container.scrollTo({ left: maxScroll, behavior: 'smooth' });
                } else {
                    container.scrollBy({ left: -CARD_WIDTH_WITH_GAP, behavior: 'smooth' });
                }
            }
        }
    };

    useEffect(() => {
        startAutoSlide();
        const container = scrollContainerRef.current;
        
        const handleInteractionStart = () => {
            isInteractingRef.current = true;
            handleUserInteraction();
        };

        const handleInteractionEnd = () => {
            isInteractingRef.current = false;
        };

        if (container) {
            container.addEventListener('mousedown', handleInteractionStart);
            container.addEventListener('touchstart', handleInteractionStart, { passive: true });
            container.addEventListener('mouseup', handleInteractionEnd);
            container.addEventListener('touchend', handleInteractionEnd);
            container.addEventListener('mouseleave', handleInteractionEnd);
        }

        return () => {
            stopAutoSlide();
            if (container) {
                 container.removeEventListener('mousedown', handleInteractionStart);
                 container.removeEventListener('touchstart', handleInteractionStart);
                 container.removeEventListener('mouseup', handleInteractionEnd);
                 container.removeEventListener('touchend', handleInteractionEnd);
                 container.removeEventListener('mouseleave', handleInteractionEnd);
            }
        };
    }, [startAutoSlide, handleUserInteraction]);

    return (
        <section id="depoimentos" className="py-20 bg-brand-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div 
                    ref={sectionRef}
                    className={`flex flex-col md:flex-row items-center gap-12 transition-all duration-700 ease-out ${isSectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                    {/* Left Column */}
                    <div className="flex-shrink-0 text-center md:text-left md:w-1/4">
                        <h2 className="text-4xl font-black text-white">EXCELENTE</h2>
                        <div className="flex justify-center md:justify-start my-2">
                            {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} className="w-6 h-6 text-yellow-400" />)}
                        </div>
                        <p className="text-brand-light-text">
                            Com base em <strong>80+ avaliações</strong>
                        </p>
                        <GoogleIcon className="w-16 h-16 mx-auto md:mx-0 mt-4"/>
                    </div>

                    {/* Right Column (Carousel) */}
                    <div className="w-full md:w-3/4 relative flex items-center">
                        <button 
                            onClick={() => scroll('left')}
                            className="hidden md:block absolute -left-4 md:-left-8 z-10 bg-brand-yellow text-black p-3 rounded-full shadow-lg hover:brightness-90 transition-all duration-300"
                            aria-label="Anterior"
                        >
                            <ChevronLeftIcon className="w-6 h-6" />
                        </button>

                        <div ref={scrollContainerRef} className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide cursor-grab active:cursor-grabbing">
                            {testimonials.map((testimonial, index) => (
                                <TestimonialCard key={index} testimonial={testimonial} />
                            ))}
                        </div>
                        
                        <button 
                            onClick={() => scroll('right')} 
                            className="hidden md:block absolute -right-4 md:-right-8 z-10 bg-brand-yellow text-black p-3 rounded-full shadow-lg hover:brightness-90 transition-all duration-300"
                            aria-label="Próximo"
                        >
                            <ChevronRightIcon className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
