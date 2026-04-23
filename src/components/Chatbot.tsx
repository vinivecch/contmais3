/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Send, Bot, Loader2 } from "lucide-react";
import { GoogleGenAI } from "@google/genai";

let aiInstance: GoogleGenAI | null = null;

function getAI() {
  if (!aiInstance) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is not defined");
    }
    aiInstance = new GoogleGenAI({ apiKey });
  }
  return aiInstance;
}

interface Message {
  role: "user" | "model";
  text: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "model", text: "Olá! Sou o assistente virtual da ContMais. Como posso ajudar com seu MEI ou Simples Nacional hoje?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", text: input };
    const currentMessages = [...messages, userMessage];
    setMessages(currentMessages);
    setInput("");
    setIsLoading(true);

    try {
      const ai = getAI();
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: currentMessages.map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        })),
        config: {
          systemInstruction: `Você é o assistente virtual da ContMais Contabilidade, liderada pela Amanda Gonçalves. Seu escritório fica na Avenida Paulista, 1000 - São Paulo/SP.

Sua missão é ajudar Microempreendedores (MEI) e empresas do Simples Nacional a entenderem como simplificar sua contabilidade.

Diretrizes de Persona:
1. Extremamente profissional, mas com linguagem humana e sem burocracia (linguagem clara).
2. Fale sobre tranquilidade fiscal, foco no negócio e crescimento seguro.
3. Se perguntarem sobre a Amanda, destaque sua visão de que a contabilidade deve impulsionar sonhos, não dar dor de cabeça.
4. FAQ Básica:
   - Serviços: Gestão de MEI (DASN), Simples Nacional, BPO Financeiro e Planejamento Tributário.
   - Localização: Avenida Paulista, São Paulo (Edifício Corporate). Atendimento digital para todo o país.
   - Taxas: Oferecemos uma consultoria inicial gratuita via WhatsApp.
5. CTA: Sempre ofereça agendar uma consultoria estratégica gratuita via WhatsApp.
6. Mantenha as respostas concisas.`
        }
      });
      const modelText = response.text || "Pode repetir? Ou se preferir, chame a Amanda no WhatsApp!";
      setMessages((prev) => [...prev, { role: "model", text: modelText }]);
    } catch (error) {
      console.error("Chatbot error:", error);
      setMessages((prev) => [...prev, { role: "model", text: "Tive um probleminha técnico. Vamos conversar no WhatsApp?" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-28 right-8 z-[60] w-14 h-14 bg-brand-gold text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-transform"
        whileHover={{ rotate: 15 }}
      >
        {isOpen ? <X size={24} /> : <Bot size={24} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-44 right-8 z-[60] w-[350px] md:w-[400px] h-[500px] bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col sm:right-4 sm:left-4 sm:w-auto md:left-auto"
          >
            {/* Header */}
            <div className="bg-brand-blue p-4 text-white flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot size={20} />
              </div>
              <div>
                <h3 className="font-bold text-sm">IA ContMais</h3>
                <p className="text-[10px] opacity-100 text-brand-gold uppercase tracking-widest font-bold">Amanda Gonçalves</p>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="ml-auto p-1 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Fechar chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-slate-50/50">
              {messages.map((msg, i) => (
                <div 
                  key={i} 
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.role === "user" 
                      ? "bg-brand-gold text-white rounded-tr-none shadow-md" 
                      : "bg-white text-slate-900 rounded-tl-none border border-slate-100 shadow-sm"
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-slate-100 flex items-center gap-2">
                    <Loader2 className="animate-spin text-brand-gold" size={16} />
                    <span className="text-xs text-slate-500 font-bold">Analisando...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-slate-100 flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Como posso ajudar seu negócio?"
                className="flex-grow bg-slate-100 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/20 text-slate-900"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="w-10 h-10 bg-brand-gold text-white rounded-xl flex items-center justify-center hover:bg-brand-gold/90 transition-colors disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </div>
            
            {/* Promo Footer */}
            <div className="px-4 py-2 bg-slate-50 border-t border-slate-100 flex items-center justify-center">
              <p className="text-[9px] text-slate-600 font-bold uppercase tracking-tighter">
                Powered by IA • ContMais © 2026
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
