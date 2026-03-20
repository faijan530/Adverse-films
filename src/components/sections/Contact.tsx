import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../lib/firebase";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    brand: "",
    type: "",
    budget: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Save lead to Firebase Firestore
      await addDoc(collection(db, "leads"), {
        ...form,
        createdAt: serverTimestamp(),
        source: "website_contact_form"
      });

      // Show success message
      alert("Thank you for your inquiry! We'll contact you soon.");
      
      // Reset form
      setForm({
        name: "",
        brand: "",
        type: "",
        budget: "",
        message: "",
      });
    } catch (error) {
      console.error("Error saving lead:", error);
      alert("Sorry, there was an error. Please try again or contact us directly.");
    }
  };

  const whatsappNumber = "919617225305"; // Your actual WhatsApp number
  const whatsappMessage = `Hi, I'm ${form.name || "[Name]"}. I want a ${form.type || "[Project Type]"} project. Budget: ${form.budget || "[Budget]"}. ${form.message ? `Message: ${form.message}` : ""}`;

  return (
    <section id="contact" className="relative py-32 px-6 bg-gradient-to-b from-black to-gray-950">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 border border-white/10 rounded-full text-xs font-black tracking-widest text-white/60 mb-6 backdrop-blur-sm bg-white/5">
            LET'S CONNECT
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
            <span className="text-white">READY TO</span>
            <span className="block text-accent">CREATE?</span>
          </h2>
          <div className="w-32 h-1 bg-accent mx-auto mb-12"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* LEFT SIDE */}
          <div>
            <h3 className="text-4xl md:text-5xl font-black tracking-tighter mb-8 leading-tight">
              Let's create something
              <span className="block text-accent">people remember.</span>
            </h3>

            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Tell us about your project and we'll craft a film that actually drives results and makes your brand unforgettable.
            </p>

            {/* WhatsApp CTA - PRIMARY */}
            <div className="mb-12">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <div className="bg-green-500 text-black px-12 py-6 text-xl font-black tracking-wider shadow-2xl shadow-green-500/30 hover:shadow-green-500/50 transform hover:scale-105 transition-all duration-500 flex items-center gap-3">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.197-.767.967-.94 1.164-.173.197-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.297.297-.495.099-.198.05-.372-.05-.52-.099-.149-.889-1.782-1.225-2.423-.336-.64-.673-.554-.94-.554-.267 0-.573-.05-.88-.05-.307 0-.804.149-1.225.767-.42.618-1.61 1.613-1.61 3.937 0 2.324 1.586 4.568 1.808 4.875.222.307 3.124 4.868 7.571 6.823 1.058.458 1.887.731 2.531.937.804.252 1.531.217 2.109.132.645-.099 1.986-.768 2.265-1.511.279-.743.279-1.379.198-1.511-.081-.133-.297-.223-.644-.421z"/>
                    <path d="M20.317 3.683c-3.725-3.632-9.726-3.632-13.452 0L3.932 5.617c-3.632 3.725-3.632 9.726 0 13.452l1.933 1.933c3.725 3.632 9.726 3.632 13.452 0l1.933-1.933c3.632-3.725 3.632-9.726 0-13.452zM16.845 17.539l-1.933 1.933c-2.983 2.983-7.822 2.983-10.805 0L2.174 17.539c-2.983-2.983-2.983-7.822 0-10.805l1.933-1.933c2.983-2.983 7.822-2.983 10.805 0l1.933 1.933c2.983 2.983 2.983 7.822 0 10.805z"/>
                  </svg>
                  Chat on WhatsApp
                </div>
              </a>
              <p className="text-sm text-gray-500 mt-3">⚡ Instant reply - Fastest way to connect</p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-accent font-semibold">Email</p>
                  <p className="text-gray-400">hello@adversefilms.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-accent font-semibold">Phone</p>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-accent font-semibold">Studio</p>
                  <p className="text-gray-400">Los Angeles, CA</p>
                </div>
              </div>
            </div>

            {/* Urgency Note */}
            <div className="mt-12 p-4 border border-accent/30 rounded-lg bg-accent/5 backdrop-blur-sm">
              <p className="text-sm font-semibold text-accent">⚡ Limited slots available per month</p>
              <p className="text-xs text-gray-400 mt-1">Book your project now to secure your spot</p>
            </div>
          </div>

          {/* RIGHT SIDE — FORM */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleInputChange}
                  placeholder="Your Name *"
                  required
                  className="w-full bg-black/50 border border-white/20 px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-accent focus:bg-black/70 transition-all duration-300 rounded-lg"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="brand"
                  value={form.brand}
                  onChange={handleInputChange}
                  placeholder="Brand / Company *"
                  required
                  className="w-full bg-black/50 border border-white/20 px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-accent focus:bg-black/70 transition-all duration-300 rounded-lg"
                />
              </div>

              <div>
                <select
                  name="type"
                  value={form.type}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-black/50 border border-white/20 px-6 py-4 text-white focus:outline-none focus:border-accent focus:bg-black/70 transition-all duration-300 rounded-lg"
                >
                  <option value="" className="bg-gray-900">Project Type *</option>
                  <option value="Ad Film" className="bg-gray-900">Ad Film</option>
                  <option value="Brand Film" className="bg-gray-900">Brand Film</option>
                  <option value="Product Reel" className="bg-gray-900">Product Reel</option>
                  <option value="Music Video" className="bg-gray-900">Music Video</option>
                  <option value="Documentary" className="bg-gray-900">Documentary</option>
                  <option value="Other" className="bg-gray-900">Other</option>
                </select>
              </div>

              <div>
                <select
                  name="budget"
                  value={form.budget}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-black/50 border border-white/20 px-6 py-4 text-white focus:outline-none focus:border-accent focus:bg-black/70 transition-all duration-300 rounded-lg"
                >
                  <option value="" className="bg-gray-900">Budget Range *</option>
                  <option value="$5K - $10K" className="bg-gray-900">$5K - $10K</option>
                  <option value="$10K - $25K" className="bg-gray-900">$10K - $25K</option>
                  <option value="$25K - $50K" className="bg-gray-900">$25K - $50K</option>
                  <option value="$50K - $100K" className="bg-gray-900">$50K - $100K</option>
                  <option value="$100K+" className="bg-gray-900">$100K+</option>
                </select>
              </div>

              <div>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project (optional)"
                  rows={4}
                  className="w-full bg-black/50 border border-white/20 px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-accent focus:bg-black/70 transition-all duration-300 rounded-lg resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-accent text-black px-8 py-4 text-lg font-black tracking-wider shadow-2xl shadow-accent/30 hover:shadow-accent/50 transform hover:scale-105 transition-all duration-500 rounded-lg"
              >
                Submit Inquiry
              </button>
            </form>

            <p className="text-sm text-gray-500 mt-6 text-center">
              We'll respond within 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
