import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa6';

export default function ContactTab() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus('');

        // Web3Forms setup payload
        const formData = new FormData();
        formData.append('access_key', '6dd4b132-3b38-4a3b-ab85-9123a8841693'); // Put your Web3Forms access key here
        formData.append('name', form.name);
        formData.append('email', form.email);
        formData.append('message', form.message);

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setStatus('Message dispatched! Lokesh will reach back shortly.');
                setForm({ name: '', email: '', message: '' });
            } else {
                setStatus('Something went wrong. Please try emailing directly.');
            }
        } catch (error) {
            setStatus('Network error. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-cardBg p-8 rounded-3xl border border-zinc-900/80 shadow-2xl grid grid-cols-1 lg:grid-cols-5 gap-8 animate-fadeIn">
            <div className="lg:col-span-2 flex flex-col justify-between gap-6">
                <div>
                    <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400 tracking-tight leading-snug">
                        Let's build something epic together.
                    </h3>
                    <p className="text-xs text-zinc-400 mt-3 leading-relaxed">
                        Have an application design, a technical opening, or want to explore AI engineering integration ideas? Send a direct message!
                    </p>
                </div>

                {/* Clickable Communication Blocks */}
                <div className="text-xs text-zinc-400 font-mono space-y-2.5 bg-zinc-900/30 p-4 rounded-2xl border border-zinc-800/40">
                    <p className="text-zinc-500 font-bold text-[10px] uppercase tracking-wider mb-1">Contact Metadata</p>
                    <p className="hover:text-white transition">📍 Hyderabad, Telangana, India</p>
                    <p><a href="mailto:lokeshmudiraj222@gmail.com" className="hover:text-accentOrange transition">📥 lokeshmudiraj222@gmail.com</a></p>
                    <p><a href="tel:+916302827494" className="hover:text-accentOrange transition">📞 +91 6302827494</a></p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="lg:col-span-3 flex flex-col gap-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <input
                        type="text"
                        placeholder="Your Name"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="bg-zinc-900/60 border border-zinc-800/80 rounded-xl p-3.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-accentOrange focus:bg-zinc-900 transition-all duration-300"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="bg-zinc-900/60 border border-zinc-800/80 rounded-xl p-3.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-accentOrange focus:bg-zinc-900 transition-all duration-300"
                    />
                </div>
                <textarea
                    placeholder="Project framework details or message inquiries..."
                    rows="5"
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="bg-zinc-900/60 border border-zinc-800/80 rounded-xl p-3.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-accentOrange focus:bg-zinc-900 transition-all duration-300 resize-none"
                />
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`bg-accentOrange text-white font-bold text-xs py-3.5 rounded-xl shadow-lg shadow-accentOrange/10 transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-wider ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-orange-600 cursor-pointer'
                        }`}
                >
                    {isSubmitting ? 'Sending...' : 'Send Message'} <FaPaperPlane size={11} />
                </button>
                {status && (
                    <p className={`text-center text-xs font-medium mt-1 py-2 rounded-lg border ${status.includes('dispatched') // Changed to lowercase 'd'
                            ? 'text-green-400 bg-green-500/5 border-green-500/10'
                            : 'text-red-400 bg-red-500/5 border-red-500/10'
                        }`}>
                        {status}
                    </p>
                )}
            </form>
        </div>
    );
}