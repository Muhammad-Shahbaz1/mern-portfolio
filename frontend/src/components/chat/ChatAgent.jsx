import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMessageSquare, FiX, FiSend, FiUser, FiCpu } from 'react-icons/fi';

const ChatAgent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: "Hi! 👋 I'm Shahbaz's AI assistant. Ask me anything about his skills, experience, services, or how to get in touch!"
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMessage = { role: 'user', text: trimmed };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Build history (exclude the initial greeting)
      const history = messages
        .filter((_, i) => i > 0) // skip initial greeting
        .map(m => ({ role: m.role === 'assistant' ? 'model' : 'user', text: m.text }));

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: trimmed, history })
      });

      const data = await response.json();

      if (response.ok && data.reply) {
        setMessages(prev => [...prev, { role: 'assistant', text: data.reply }]);
      } else {
        setMessages(prev => [...prev, { role: 'assistant', text: data.error || 'Sorry, something went wrong. Please try again!' }]);
      }
    } catch (err) {
      setMessages(prev => [...prev, { role: 'assistant', text: 'Could not connect to the AI service. Please try again later.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const quickQuestions = [
    "What are Shahbaz's skills?",
    "How to contact him?",
    "What services does he offer?",
  ];

  return (
    <>
      {/* Floating Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-primary to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-primary/30 cursor-pointer"
          >
            <FiMessageSquare className="text-white text-2xl" />
            {/* Pulse animation */}
            <span className="absolute w-full h-full rounded-full bg-primary/40 animate-ping" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)] h-[520px] max-h-[calc(100vh-3rem)] flex flex-col rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border border-slate-700/50"
            style={{ background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 bg-gradient-to-r from-primary/20 to-blue-600/20 border-b border-slate-700/50">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-r from-primary to-blue-600 flex items-center justify-center">
                  <FiCpu className="text-white text-lg" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">Shahbaz's AI Assistant</h4>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-green-400 text-xs">Online</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full hover:bg-slate-700/50 flex items-center justify-center transition-colors cursor-pointer"
              >
                <FiX className="text-slate-400 text-lg" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex gap-2.5 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-1 ${
                    msg.role === 'user'
                      ? 'bg-primary/20'
                      : 'bg-gradient-to-r from-primary/30 to-blue-600/30'
                  }`}>
                    {msg.role === 'user'
                      ? <FiUser className="text-primary text-xs" />
                      : <FiCpu className="text-blue-400 text-xs" />
                    }
                  </div>
                  <div className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-primary/20 text-white rounded-tr-sm'
                      : 'bg-slate-800/80 text-slate-200 rounded-tl-sm border border-slate-700/30'
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {/* Loading indicator */}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-2.5"
                >
                  <div className="w-7 h-7 rounded-full bg-gradient-to-r from-primary/30 to-blue-600/30 flex items-center justify-center shrink-0">
                    <FiCpu className="text-blue-400 text-xs" />
                  </div>
                  <div className="bg-slate-800/80 border border-slate-700/30 px-4 py-3 rounded-2xl rounded-tl-sm">
                    <div className="flex gap-1.5">
                      <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Quick questions - only show at start */}
              {messages.length === 1 && !isLoading && (
                <div className="space-y-2 pt-2">
                  <p className="text-slate-500 text-xs font-medium px-1">Quick questions:</p>
                  {quickQuestions.map((q, i) => (
                    <button
                      key={i}
                      onClick={() => { setInput(q); }}
                      className="block w-full text-left text-xs px-3 py-2 bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 rounded-lg border border-slate-700/30 transition-colors cursor-pointer"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="px-4 py-3 border-t border-slate-700/50 bg-slate-900/50">
              <div className="flex items-center gap-2 bg-slate-800/60 rounded-xl border border-slate-700/40 px-3 py-1 focus-within:border-primary/50 transition-colors">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about Shahbaz..."
                  disabled={isLoading}
                  className="flex-1 bg-transparent text-white text-sm placeholder-slate-500 py-2 outline-none disabled:opacity-50"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="w-8 h-8 rounded-lg bg-primary/20 hover:bg-primary/30 flex items-center justify-center transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                >
                  <FiSend className="text-primary text-sm" />
                </button>
              </div>
              <p className="text-center text-slate-600 text-[10px] mt-2">Powered by AI • Ask anything about Shahbaz</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatAgent;
