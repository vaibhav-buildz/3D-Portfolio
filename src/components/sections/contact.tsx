"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ContactForm from "../ContactForm";
import { config } from "@/data/config";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";
import { TiltCard } from "../ui/tilt-card";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle2 } from "lucide-react";

const ContactSection = () => {
  return (
    <SectionWrapper id="contact" className="min-h-screen max-w-7xl mx-auto ">
      <SectionHeader id='contact' className="relative mb-14" title={
        <>
          LET&apos;S WORK <br />
          TOGETHER
        </>} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 z-[10] relative mx-4">
        
        {/* Left column: 3D Tilt Contact Form */}
        <div className="relative w-full perspective-[1000px]">
          {/* Glowing backdrop layer */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-2xl blur-xl opacity-30 animate-pulse" />
          
          <TiltCard className="w-full h-full relative z-10 min-h-full">
            <Card className="h-full border border-white/10 shadow-2xl bg-white/10 dark:bg-black/40 backdrop-blur-md rounded-2xl md:mt-10 overflow-hidden relative">
              {/* Inner glass reflection */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none rounded-2xl" />
              
              <div style={{ transform: "translateZ(40px)", transformStyle: "preserve-3d" }}>
                <CardHeader className="relative z-10">
                  <CardTitle className="text-4xl bg-clip-text text-transparent bg-gradient-to-r from-neutral-800 to-neutral-400 dark:from-neutral-200 dark:to-neutral-500 font-bold">Get In Touch</CardTitle>
                  <CardDescription className="text-neutral-600 dark:text-neutral-400 font-medium">
                    Please contact me directly at{" "}
                    <a
                      target="_blank"
                      href={`mailto:${config.email}`}
                      className="text-blue-500 hover:text-blue-400 font-bold transition-colors"
                    >
                      {config.email.replace(/@/g, "(at)")}
                    </a>{" "}
                    or drop your info here.
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div style={{ transform: "translateZ(20px)" }}>
                    <ContactForm />
                  </div>
                </CardContent>
              </div>
            </Card>
          </TiltCard>
        </div>

        {/* Right column: Floating 3D Icons */}
        <div className="hidden md:flex flex-col items-center justify-center relative w-full h-full min-h-[500px] perspective-[1000px]">
          {/* Main Floating Icon */}
          <motion.div
            animate={{
              y: [-10, 10, -10],
              rotateX: [0, 10, -10, 0],
              rotateY: [0, -10, 10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute z-20 top-1/3 left-1/3 bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
            style={{ transformStyle: "preserve-3d", transform: "translateZ(50px)" }}
          >
            <Send className="w-20 h-20 text-blue-400" />
          </motion.div>

          {/* Secondary Floating Icon */}
          <motion.div
            animate={{
              y: [10, -10, 10],
              rotateX: [-10, 5, -10],
              rotateZ: [-5, 5, -5]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute z-10 top-1/4 right-1/4 bg-white/5 dark:bg-black/10 backdrop-blur-lg border border-white/10 p-5 rounded-2xl shadow-[0_10px_30px_rgba(139,_92,_246,_0.4)]"
            style={{ transformStyle: "preserve-3d", transform: "translateZ(20px)" }}
          >
            <Mail className="w-12 h-12 text-purple-400" />
          </motion.div>

          {/* Tertiary Floating Icon */}
          <motion.div
            animate={{
              y: [-5, 15, -5],
              rotateY: [-15, 0, -15],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute z-30 bottom-1/4 right-1/3 bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 p-6 rounded-full shadow-[0_15px_40px_rgba(34,_197,_94,_0.4)]"
            style={{ transformStyle: "preserve-3d", transform: "translateZ(80px)" }}
          >
            <CheckCircle2 className="w-14 h-14 text-green-400" />
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};
export default ContactSection;
