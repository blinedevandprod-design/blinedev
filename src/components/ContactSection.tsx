"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "", company: "", email: "", phone: "", budget: "", timeline: "", message: "", privacy: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.privacy) {
      toast.error("Please accept the privacy policy.");
      return;
    }
    toast.success("Message sent! We'll respond within 24 hours.");
    setForm({ name: "", company: "", email: "", phone: "", budget: "", timeline: "", message: "", privacy: false });
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-4">Contact</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground mb-4">
            Let's connect.<br />Fast response.
          </h2>
          <p className="text-muted-foreground">Reach out for quotes or questions.</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: false }}
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Name</label>
            <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className="bg-secondary" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Company</label>
            <Input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="bg-secondary" />
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
              <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required className="bg-secondary" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Phone</label>
              <Input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="bg-secondary" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Budget range</label>
              <select
                value={form.budget}
                onChange={(e) => setForm({ ...form, budget: e.target.value })}
                className="w-full h-10 rounded-md border border-border bg-secondary px-3 text-sm text-foreground"
              >
                <option value="">Select...</option>
                <option value="<5k">Under $5,000</option>
                <option value="5k-15k">$5,000 – $15,000</option>
                <option value="15k-50k">$15,000 – $50,000</option>
                <option value="50k+">$50,000+</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Project timeline</label>
              <select
                value={form.timeline}
                onChange={(e) => setForm({ ...form, timeline: e.target.value })}
                className="w-full h-10 rounded-md border border-border bg-secondary px-3 text-sm text-foreground"
              >
                <option value="">Select...</option>
                <option value="urgent">Urgent (1–2 weeks)</option>
                <option value="standard">Standard (3–4 weeks)</option>
                <option value="flexible">Flexible (1–2 months)</option>
              </select>
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
            <Textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={4}
              className="bg-secondary"
              required
            />
          </div>
          <div className="flex items-start gap-3">
            <Checkbox
              checked={form.privacy}
              onCheckedChange={(checked) => setForm({ ...form, privacy: checked as boolean })}
              id="privacy"
            />
            <label htmlFor="privacy" className="text-sm text-muted-foreground leading-snug">
              I agree to the privacy policy and consent to being contacted regarding my inquiry.
            </label>
          </div>
          <Button type="submit" variant="cta" size="lg" className="w-full">
            Submit
          </Button>
        </motion.form>

      </div>
    </section>
  );
};

export default ContactSection;
