"use client";
import { Package, Truck } from "lucide-react";
import { motion } from "framer-motion";

const ValueProposition = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-4"
        >
          Our Promise
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
          className="text-4xl md:text-5xl font-black tracking-tight text-foreground mb-6"
        >
          Premium quality.<br />Fast delivery.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto mb-16"
        >
          We combine meticulous craftsmanship with streamlined production to deliver exceptional packaging solutions that meet your timeline.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: false }}
            className="flex flex-col items-center gap-4 p-8 rounded-xl bg-secondary"
          >
            <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
              <Package className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground">Premium Craftsmanship</h3>
            <p className="text-muted-foreground leading-relaxed">
              Every package is crafted with precision using premium materials, ensuring your brand stands out.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: false }}
            className="flex flex-col items-center gap-4 p-8 rounded-xl bg-secondary"
          >
            <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center">
              <Truck className="h-6 w-6 text-accent-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground">Fast Turnaround</h3>
            <p className="text-muted-foreground leading-relaxed">
              Reliable production timelines without compromising on quality. Your packaging, delivered on time.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
