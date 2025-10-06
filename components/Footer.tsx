import React from 'react';
import { PhoneIcon, MailIcon, MapPinIcon } from './icons/ContactIcons';
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from './icons/SocialIcons';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const logoUrl = 'public/images/logo-pitstopcardetailing.png';

const AnimatedColumn: React.FC<{ children: React.ReactNode, index: number }> = ({ children, index }) => {
    const [ref, isInView] = useScrollAnimation();
    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            {children}
        </div>
    );
};


const Footer: React.FC = () => {
    return (
        <footer className="bg-brand-gray text-brand-light-text py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Column 1: Logo & About */}
                    <AnimatedColumn index={0}>
                        <div>
                            <img src={logoUrl} alt="Pit Stop Logo" className="h-16 w-auto mb-4" />
                            <p className="text-sm">Excelência em limpeza e estética automotiva. Cuidado, tecnologia e paixão em cada serviço.</p>
                            <div className="flex space-x-4 mt-4">
                               <a href="#" className="hover:text-white"><FacebookIcon/></a>
                               <a href="#" className="hover:text-white"><InstagramIcon/></a>
                               <a href="#" className="hover:text-white"><WhatsAppIcon/></a>
                            </div>
                        </div>
                    </AnimatedColumn>

                    {/* Column 2: Quick Links */}
                    <AnimatedColumn index={1}>
                        <div>
                            <h4 className="font-semibold text-white mb-4">Navegação</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#depoimentos" className="hover:text-white">Avaliações</a></li>
                                <li><a href="#servicos" className="hover:text-white">Serviços</a></li>
                                <li><a href="#galeria" className="hover:text-white">Sobre Nós</a></li>
                                <li><a href="#agendar" className="hover:text-white">Agendar</a></li>
                            </ul>
                        </div>
                    </AnimatedColumn>

                    {/* Column 3: Contact Info */}
                    <AnimatedColumn index={2}>
                        <div>
                            <h4 className="font-semibold text-white mb-4">Contato</h4>
                             <ul className="space-y-3 text-sm">
                                <li className="flex items-start"><MapPinIcon className="w-5 h-5 mr-2 mt-1 shrink-0"/><span>2 Ruas Atras do SuperBig Centro - Q. 104 Sul Rua SE 9, 32 - CJ 3 - Plano Diretor Sul, Palmas - TO, 77020-024</span></li>
                                <li className="flex items-center"><PhoneIcon className="w-5 h-5 mr-2 shrink-0"/><a href="tel:+5511999999999" className="hover:text-white">(63) 99249-5105</a></li>
                                {/* <li className="flex items-center"><MailIcon className="w-5 h-5 mr-2 shrink-0"/><a href="mailto:contato@autobrilho.com" className="hover:text-white">contato@autobrilho.com</a></li> */}
                            </ul>
                        </div>
                    </AnimatedColumn>

                    {/* Column 4: Opening Hours & Map */}
                    <AnimatedColumn index={3}>
                        <div>
                            <h4 className="font-semibold text-white mb-4">Horário de Funcionamento</h4>
                            <p className="text-sm">Seg - Sex: 7:45 - 18:00</p>
                            <p className="text-sm">Sáb: 8:00 - 13:00</p>
                            <div className="mt-4 rounded-md overflow-hidden h-24">
                               <iframe 
                                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.880384130603!2d-48.3258606!3d-10.190368300000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9324cb3dad1b036d%3A0x960e27bda3106ba1!2sPit%20Stop%20Lava%20Jato%20-%20Est%C3%A9tica%20Automotiva%20Especializada!5e0!3m2!1spt-BR!2sbr!4v1759789435271!5m2!1spt-BR!2sbr" 
                                 width="100%" 
                                 height="100%" 
                                 style={{border:0}} 
                                 allowFullScreen={false}
                                 loading="lazy" 
                                 referrerPolicy="no-referrer-when-downgrade"
                                 title="Google Maps Location">
                               </iframe>
                            </div>
                        </div>
                    </AnimatedColumn>
                </div>
                <div className="border-t border-gray-700 pt-6 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Pit Stop Lava Jato. Todos os direitos reservados.</p>
                     {/* | <a href="#" className="underline hover:text-white">Política de Privacidade</a> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
