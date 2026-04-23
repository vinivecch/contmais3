/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode } from "react";
import { motion } from "motion/react";
import { 
  Calculator, 
  TrendingUp, 
  FileText, 
  PieChart, 
  BarChart4, 
  CheckCircle2, 
  MessageCircle, 
  ShieldCheck,
  ChevronRight,
  Target,
  Clock,
  Menu,
  X,
  Star,
  Users,
  Instagram
} from "lucide-react";
import { useState } from "react";

const WHATSAPP_LINK = "https://wa.me/5581998803186?text=Olá%20Amanda,%20gostaria%20de%20falar%20sobre%20a%20contabilidade%20do%20meu%20negócio.";
const INSTAGRAM_LINK = "https://www.instagram.com/contmaiscontabilidade_?igsh=YXNuajJhZ3RmaDE5";

const SectionTitle = ({ children, subtitle, center = false }: { children: ReactNode; subtitle?: string; center?: boolean }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`mb-16 ${center ? "text-center" : "text-left"}`}
  >
    {subtitle && (
      <span className="text-brand-emerald font-bold text-xs uppercase tracking-[0.4em] mb-4 block">
        {subtitle}
      </span>
    )}
    <h2 className="text-4xl md:text-5xl font-bold text-brand-blue leading-tight font-serif">
      {children}
    </h2>
  </motion.div>
);

const Button = ({ children, primary = false, className = "", onClick }: { children: ReactNode; primary?: boolean; className?: string; onClick?: () => void }) => (
  <motion.a
    href={WHATSAPP_LINK}
    target="_blank"
    rel="noopener noreferrer"
    onClick={onClick}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest transition-all ${
      primary 
        ? "bg-brand-blue text-white shadow-xl shadow-brand-blue/20 hover:bg-slate-800" 
        : "bg-brand-emerald text-white shadow-xl shadow-brand-emerald/20 hover:bg-teal-700"
    } ${className}`}
  >
    {children}
  </motion.a>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-brand-cream text-slate-800 font-sans selection:bg-brand-emerald selection:text-white">
      {/* Floating WhatsApp */}
      <a 
        href={WHATSAPP_LINK} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="whatsapp-float transition-all hover:bg-teal-600 shadow-teal-500/30 shadow-2xl"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle size={28} />
      </a>

      {/* Header */}
      <header className="fixed top-0 w-full z-50 glass-morphism py-4 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Calculator className="text-brand-blue" size={32} />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-brand-blue leading-none tracking-tighter uppercase">Amanda Gonçalves</span>
              <span className="text-[10px] font-bold text-brand-emerald uppercase tracking-[0.2em]">ContMais Contabilidade</span>
            </div>
          </div>
          
          <nav className="hidden md:flex gap-8 text-[10px] font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-brand-emerald transition-colors">Início</a>
            <a href="#solucoes" className="hover:text-brand-emerald transition-colors">Soluções</a>
            <a href="#sobre" className="hover:text-brand-emerald transition-colors">A Consultora</a>
            <a href="#resultados" className="hover:text-brand-emerald transition-colors">Resultados</a>
          </nav>


          <div className="hidden md:block">
            <Button primary className="px-6 py-3 text-[10px]">Analisar meu MEI</Button>
          </div>

          <button className="md:hidden text-brand-blue" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.nav 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 p-6 flex flex-col gap-6 font-bold uppercase tracking-widest text-center"
          >
            <a href="#" onClick={() => setIsMenuOpen(false)}>Início</a>
            <a href="#solucoes" onClick={() => setIsMenuOpen(false)}>Soluções</a>
            <a href="#sobre" onClick={() => setIsMenuOpen(false)}>Sobre</a>
            <a href="#resultados" onClick={() => setIsMenuOpen(false)}>Resultados</a>
            <Button primary onClick={() => setIsMenuOpen(false)}>Consultoria</Button>
          </motion.nav>
        )}
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-blue/5 -z-1" />
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-brand-emerald/10 rounded-full">
                <ShieldCheck size={18} className="text-brand-emerald" />
                <span className="text-xs font-bold text-brand-emerald uppercase tracking-wider">Contabilidade Sem Burocracia</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-brand-blue leading-[1.1] font-serif">
                Sua empresa livre de <span className="italic text-brand-emerald">burocracia</span> e focada no <span className="italic">lucro</span>.
              </h1>
              <p className="text-slate-600 text-lg md:text-xl max-w-lg leading-relaxed font-light">
                Descubra como Amanda Gonçalves e a ContMais transformam a gestão de MEIs e Simples Nacional em uma vantagem competitiva estratégica.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <Button primary className="px-10 py-5">
                  Quero uma Consultoria Estratégica
                </Button>
                <div className="flex items-center gap-4 text-slate-400">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200" />
                    ))}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest">+200 Clientes Satisfeitos</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl shadow-brand-blue/20">
                <img 
                  src="contmais.png" 
                  alt="Amanda Gonçalves - ContMais" 
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src.indexOf('contmais.jpeg') === -1 && target.src.indexOf('contmais.jpg') === -1) {
                        // Se falhar como .png, tenta .jpeg
                        target.src = 'contmais.jpeg';
                    } else if (target.src.indexOf('contmais.jpeg') !== -1) {
                        // Se falhar como .jpeg, tenta .jpg
                        target.src = 'contmais.jpg';
                    } else {
                        // Fallback final profissional
                        target.src = "https://images.pexels.com/photos/3727459/pexels-photo-3727459.jpeg?auto=compress&cs=tinysrgb&w=1200";
                    }
                  }}
                />
              </div>
              {/* Floating badges */}
              <div className="absolute -top-10 -right-10 z-20 p-6 glass-morphism rounded-3xl shadow-xl hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-brand-emerald/20 rounded-2xl">
                    <TrendingUp className="text-brand-emerald" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase">Crescimento Fiscal</p>
                    <p className="text-2xl font-black text-brand-blue">100% Legal</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* VITRINE DE SOLUÇÕES */}
        <section id="solucoes" className="section-padding">
          <div className="max-w-7xl mx-auto">
            <SectionTitle subtitle="Vitrine de Soluções" center>
              Impulsione sua Jornada Empreendedora
            </SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:h-[800px]">
              {/* BPO Financeiro */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="md:col-span-8 bento-card p-0 overflow-hidden"
              >
                <div className="absolute inset-0 opacity-20">
                  <img 
                    src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                    alt="BPO Financeiro Background"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="relative z-10 h-full flex flex-col justify-between p-10">
                  <div className="space-y-6 text-brand-blue">
                    <div className="inline-block p-4 bg-brand-blue text-white rounded-2xl">
                      <TrendingUp size={32} />
                    </div>
                    <h3 className="text-4xl font-bold font-serif">Gestão Digital MEI</h3>
                    <p className="text-slate-700 max-w-md text-lg font-light">
                      Assuma o controle total do seu faturamento e guias DAS. Tudo sem papel, 100% humanizado e digital.
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {["DASN-SIMEI Anual", "Emissão de Notas", "Parcelamento de Débitos", "Controle de Limites"].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-sm font-bold opacity-70">
                          <CheckCircle2 size={18} className="text-brand-emerald" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-8">
                    <Button>Saber mais</Button>
                  </div>
                </div>
              </motion.div>

              {/* Recuperação Tributária */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="md:col-span-4 bento-card p-0 overflow-hidden bg-white"
              >
                <div className="absolute inset-0 opacity-10">
                  <img 
                    src="https://images.pexels.com/photos/5900222/pexels-photo-5900222.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                    alt="Simples Nacional Background"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="relative z-10 h-full flex flex-col justify-between p-10">
                  <div className="space-y-6">
                    <div className="inline-block p-4 bg-brand-emerald text-white rounded-2xl shadow-lg shadow-brand-emerald/20">
                      <FileText size={32} />
                    </div>
                    <h3 className="text-3xl font-bold font-serif text-brand-blue">Simples Nacional</h3>
                    <p className="text-slate-700 text-lg font-medium leading-relaxed">
                      Planejamento tributário estratégico para reduzir sua carga legal e otimizar cada centavo do seu lucro.
                    </p>
                  </div>
                  <div className="pt-8">
                    <Button primary>Consultar agora</Button>
                  </div>
                </div>
              </motion.div>

              {/* Mentoria de Lucro */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="md:col-span-12 bento-card bg-slate-900 border-none relative"
              >
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-emerald via-transparent to-transparent" />
                </div>
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 py-6">
                  <div className="w-24 h-24 bg-brand-emerald rounded-full flex items-center justify-center shrink-0">
                    <Target size={48} className="text-white" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold text-white font-serif">Mentoria de Inteligência Financeira</h3>
                    <p className="text-slate-400 max-w-2xl font-light">
                      Não somos apenas contadores de guias. Amanda Gonçalves oferece mentoria focada em análise de margens, formação de preço e blindagem patrimonial para pequenos empresários.
                    </p>
                  </div>
                  <div className="md:ml-auto">
                    <Button className="bg-brand-emerald">Acessar Agenda</Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to action Banner */}
        <section className="bg-brand-blue py-20 overflow-hidden relative">
          <motion.div 
            initial={{ x: "0%" }}
            animate={{ x: "-50%" }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap gap-20"
          >
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-10">
                <span className="text-6xl font-black text-white/5 uppercase italic">Zero Burocracia</span>
                <span className="text-6xl font-black text-brand-emerald uppercase italic">Contabilidade Estratégica</span>
                <span className="text-6xl font-black text-white/5 uppercase italic">Simples Nacional</span>
                <span className="text-6xl font-black text-brand-emerald uppercase italic">MEI SEM MULTAS</span>
              </div>
            ))}
          </motion.div>
        </section>

        {/* SOBRE AMANDA */}
        <section id="sobre" className="section-padding bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative lg:order-2">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-brand-emerald/5 rounded-full blur-[100px]" />
              <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-2xl">
                <img 
                  src="amanda.png" 
                  alt="Amanda Gonçalves - Consultora" 
                  className="w-full h-auto object-cover aspect-[4/5]"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src.indexOf('pexels.com') === -1) {
                      target.src = 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1200';
                    }
                  }}
                />
              </div>
            </div>

            <div className="space-y-10 lg:order-1">
              <div className="space-y-6">
                <span className="text-brand-emerald font-bold text-xs uppercase tracking-[0.6em]">A Consultora</span>
                <h2 className="text-5xl font-bold text-brand-blue font-serif leading-tight">
                  Amanda Gonçalves: <br /> Sua parceira na <span className="italic">contabilidade humanizada</span>.
                </h2>
              </div>
              
              <div className="space-y-6 text-slate-600 text-lg font-light leading-relaxed">
                <p>Com anos de experiência em gestão fiscal e atendimento a pequenos negócios, Amanda Gonçalves fundou a ContMais para preencher o vazio deixado pela contabilidade tradicional.</p>
                <p>Nossa abordagem une tecnologia de ponta com um atendimento humano que entende as dores do microempreendedor brasileiro.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
                {[
                  { icon: <Clock />, title: "Gestão Ativa", desc: "Acompanhamento em tempo real do seu faturamento." },
                  { icon: <ShieldCheck />, title: "Segurança Total", desc: "Seu CNPJ sempre em dia com o fisco." },
                  { icon: <Target />, title: "Foco no Lucro", desc: "Assessoria para redução legal de impostos." },
                  { icon: <Users />, title: "Atendimento Humanizado", desc: "Nada de tickets, fale com pessoas de verdade." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="p-3 bg-brand-cream rounded-2xl text-brand-emerald h-fit">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-blue text-sm uppercase">{item.title}</h4>
                      <p className="text-xs text-slate-400 font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="pt-8 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <p className="text-2xl font-serif italic text-brand-blue">Amanda Gonçalves</p>
                  <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Fundadora & CEO</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DEPOIMENTOS / RESULTADOS */}
        <section id="resultados" className="section-padding bg-brand-cream/50">
          <div className="max-w-7xl mx-auto">
            <SectionTitle subtitle="Novas Histórias de Sucesso" center>
              Quem Confia na ContMais
            </SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                { name: "Carlos Mendes", role: "Infoprodutor", text: "Eu perdia noites de sono com medo de multas do MEI. A Amanda regularizou tudo em uma semana.", avatar: "https://i.pravatar.cc/150?u=carlos" },
                { name: "Juliana Silva", role: "CEO Agência Digital", text: "A migração para o Simples Nacional foi tranquila e economizamos 15% em impostos no primeiro mês.", avatar: "https://i.pravatar.cc/150?u=juliana" },
                { name: "Ricardo Porto", role: "E-commerce", text: "O BPO financeiro da ContMais me liberou para focar 100% nas vendas. Melhor investimento do ano.", avatar: "https://i.pravatar.cc/150?u=ricardo" }
              ].map((t, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-10 rounded-[3rem] shadow-xl shadow-slate-200/50 flex flex-col items-center text-center space-y-6"
                >
                  <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-brand-cream">
                    <img src={t.avatar} alt={t.name} referrerPolicy="no-referrer" />
                  </div>
                  <div className="flex gap-1 text-brand-emerald">
                    {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={14} fill="currentColor" />)}
                  </div>
                  <p className="text-slate-600 font-light leading-relaxed">"{t.text}"</p>
                  <div>
                    <h4 className="font-bold text-brand-blue uppercase text-sm tracking-widest">{t.name}</h4>
                    <p className="text-[10px] font-bold text-brand-emerald uppercase tracking-[0.2em]">{t.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contato" className="section-padding bg-slate-900 text-white rounded-[4rem] mx-6 md:mx-12 overflow-hidden mb-20 relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-emerald/5 -z-1" />
          <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-12">
            <div className="max-w-3xl space-y-6">
              <span className="text-brand-emerald font-bold text-xs uppercase tracking-[0.6em]">Vamos Conversar</span>
              <h2 className="text-5xl md:text-6xl font-bold font-serif leading-tight">Agende sua <span className="text-brand-emerald italic">Consultoria Estratégica</span>.</h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed">Estamos prontos para atender você com inteligência e humanidade em todo o Brasil. Clique no botão abaixo e fale diretamente com a nossa equipe.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-4xl">
              <div className="flex flex-col items-center gap-4 p-8 bg-white/5 rounded-3xl border border-white/10">
                <div className="p-4 bg-brand-emerald/20 rounded-2xl text-brand-emerald">
                  <Target size={32} />
                </div>
                <h4 className="font-bold text-lg uppercase tracking-widest">Localização</h4>
                <p className="text-slate-400 font-light">Av. Paulista, 1000 - Edifício Corporate <br /> São Paulo - SP</p>
              </div>
              <div className="flex flex-col items-center gap-4 p-8 bg-white/5 rounded-3xl border border-white/10">
                <div className="p-4 bg-brand-emerald/20 rounded-2xl text-brand-emerald">
                  <Clock size={32} />
                </div>
                <h4 className="font-bold text-lg uppercase tracking-widest">Atendimento</h4>
                <p className="text-slate-400 font-light">Segunda à Sexta • das 09h às 18h</p>
              </div>
            </div>

            <Button className="w-full sm:w-auto px-16 py-8 bg-brand-emerald hover:bg-teal-700 text-lg">
              Solicitar Orçamento no WhatsApp
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-brand-blue text-white py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-20">
          <div className="col-span-1 md:col-span-2 space-y-8">
            <div className="flex items-center gap-2">
              <Calculator className="text-brand-emerald" size={40} />
              <div className="flex flex-col">
                <span className="text-2xl font-bold leading-none tracking-tighter uppercase">Amanda Gonçalves</span>
                <span className="text-xs font-bold text-brand-emerald uppercase tracking-[0.2em]">ContMais Contabilidade</span>
              </div>
            </div>
            <p className="text-slate-400 max-w-sm font-light leading-relaxed">
              Transformando a contabilidade em uma vantagem estratégica para MEIs e pequenas empresas no Brasil. Gestão humanizada e 100% digital.
            </p>
            <div className="flex gap-4 pt-4">
               <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-brand-emerald hover:text-brand-blue transition-all">
                 <Instagram size={18} />
               </a>
               <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-brand-emerald hover:text-brand-blue transition-all">
                 <MessageCircle size={18} />
               </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.4em] mb-8 text-brand-emerald">Links</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-slate-300">
              <li><a href="#" className="hover:text-brand-emerald transition-colors">Início</a></li>
              <li><a href="#solucoes" className="hover:text-brand-emerald transition-colors">Soluções</a></li>
              <li><a href="#sobre" className="hover:text-brand-emerald transition-colors">Sobre</a></li>
              <li><a href="#resultados" className="hover:text-brand-emerald transition-colors">Resultados</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.4em] mb-8 text-brand-emerald">Contato</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-slate-300">
              <li>
                <a 
                  href={WHATSAPP_LINK} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 bg-[#25D366] hover:bg-green-600 text-white px-5 py-2.5 rounded-xl transition-all shadow-lg shadow-green-500/20 active:scale-95 w-fit"
                >
                  <MessageCircle size={16} /> WhatsApp
                </a>
              </li>
              <li>
                <a 
                  href={INSTAGRAM_LINK} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] hover:opacity-90 text-white px-5 py-2.5 rounded-xl transition-all shadow-lg shadow-purple-500/20 active:scale-95 w-fit lowercase"
                >
                  <Instagram size={16} /> @contmaiscontabilidade_
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-20 mt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold uppercase tracking-[0.4em] text-slate-500">
          <p>© 2026 ContMais Contabilidade - Todos os direitos reservados</p>
          <div className="flex gap-8">
            <span>Privacidade</span>
            <span>Termos</span>
            <span>CRC: SP-000000/O</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
