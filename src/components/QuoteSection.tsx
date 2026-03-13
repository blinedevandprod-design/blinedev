"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send, CheckCircle, Shield, Zap } from "lucide-react";
import quoteBg from "@/assets/quote-bg.jpg";
import { toast } from "sonner";
import { motion } from "framer-motion";

const QuoteSection = () => {
  const [form, setForm] = useState({ name: "", company: "", email: "", projectType: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Quote request sent! We'll be in touch shortly.");
    setForm({ name: "", company: "", email: "", projectType: "" });
  };

  return (
    <section id="quote" className="py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left - Image + info */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
            className="relative rounded-2xl overflow-hidden min-h-[500px] flex flex-col justify-end"
          >
            <img
              src={quoteBg.src}
              alt="Premium packaging on dark navy background"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-navy-dark/60" />
            <div className="relative z-10 p-8 lg:p-12">
              <h2 className="text-3xl md:text-4xl font-black text-primary-foreground mb-4">
                Request your<br />custom quote now
              </h2>
              <div className="space-y-3 mt-6">
                <div className="flex items-center gap-3 text-primary-foreground/80 text-sm">
                  <CheckCircle className="h-4 w-4 text-accent" />
                  <span>Tailored packaging for every project</span>
                </div>
                <div className="flex items-center gap-3 text-primary-foreground/80 text-sm">
                  <Zap className="h-4 w-4 text-accent" />
                  <span>Fast turnaround. Reliable delivery.</span>
                </div>
                <div className="flex items-center gap-3 text-primary-foreground/80 text-sm">
                  <Shield className="h-4 w-4 text-accent" />
                  <span>Website branding that stands out</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: false }}
            className="bg-background rounded-2xl p-8 lg:p-12 shadow-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Name</label>
                <Input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your full name"
                  required
                  className="bg-secondary border-border"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Company</label>
                <Input
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  placeholder="Your company name"
                  className="bg-secondary border-border"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                <Input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                  required
                  className="bg-secondary border-border"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Project type</label>
                <select
                  value={form.projectType}
                  onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                  className="w-full h-10 rounded-md border border-border bg-secondary px-3 text-sm text-foreground"
                  required
                >
                  <option value="">Select a type...</option>
                  <option value="luxury">Luxury packaging</option>
                  <option value="corporate">Corporate branding</option>
                  <option value="prototype">Prototypes</option>
                  <option value="boutique">Boutique packaging</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button type="submit" variant="cta" size="lg" className="flex-1">
                  <Send className="mr-2 h-4 w-4" />
                  Send quote
                </Button>
                <Button variant="navy" size="lg" asChild className="flex-1">
                  <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
