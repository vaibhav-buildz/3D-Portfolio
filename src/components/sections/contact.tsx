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
          {/* Subtle premium backdrop glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-neutral-200 via-neutral-300 to-neutral-200 dark:from-neutral-800 dark:via-neutral-700 dark:to-neutral-800 rounded-2xl blur-2xl opacity-40 animate-pulse duration-[4000ms]" />
          
          <TiltCard className="w-full h-full relative z-10 min-h-full">
            <Card className="h-full border border-neutral-200/50 dark:border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_60px_-15px_rgba(255,255,255,0.05)] bg-white/40 dark:bg-black/50 backdrop-blur-xl rounded-2xl md:mt-10 overflow-hidden relative">
              {/* Inner glass reflection */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent dark:from-white/10 dark:via-transparent pointer-events-none rounded-2xl" />
              
              <div style={{ transform: "translateZ(40px)", transformStyle: "preserve-3d" }}>
                <CardHeader className="relative z-10">
                  <CardTitle className="text-4xl bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-500 dark:from-white dark:to-neutral-400 font-bold">Get In Touch</CardTitle>
                  <CardDescription className="text-neutral-600 dark:text-neutral-400 font-medium">
                    Please contact me directly at{" "}
                    <a
                      target="_blank"
                      href={`mailto:${config.email}`}
                      className="text-neutral-800 hover:text-neutral-500 dark:text-neutral-200 dark:hover:text-neutral-400 font-bold transition-colors underline decoration-neutral-300 dark:decoration-neutral-700 underline-offset-4"
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
              y: [-8, 8, -8],
              rotateX: [0, 5, -5, 0],
              rotateY: [0, -5, 5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute z-20 top-1/3 left-1/3 bg-white/30 dark:bg-neutral-900/50 backdrop-blur-xl border border-white/40 dark:border-white/10 p-8 rounded-3xl shadow-xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            style={{ transformStyle: "preserve-3d", transform: "translateZ(50px)" }}
          >
            <Send className="w-20 h-20 text-neutral-800 dark:text-neutral-200 drop-shadow-sm" />
          </motion.div>

          {/* Secondary Floating Icon */}
          <motion.div
            animate={{
              y: [8, -8, 8],
              rotateX: [-5, 2, -5],
              rotateZ: [-2, 2, -2]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute z-10 top-1/4 right-1/4 bg-white/20 dark:bg-neutral-800/40 backdrop-blur-lg border border-white/30 dark:border-white/5 p-5 rounded-2xl shadow-lg dark:shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
            style={{ transformStyle: "preserve-3d", transform: "translateZ(20px)" }}
          >
            <Mail className="w-12 h-12 text-neutral-600 dark:text-neutral-400" />
          </motion.div>

          {/* Tertiary Floating Icon */}
          <motion.div
            animate={{
              y: [-4, 12, -4],
              rotateY: [-8, 0, -8],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute z-30 bottom-1/4 right-1/3 bg-white/30 dark:bg-neutral-900/40 backdrop-blur-md border border-white/40 dark:border-white/10 p-6 rounded-full shadow-lg dark:shadow-[0_15px_40px_rgba(0,0,0,0.4)]"
            style={{ transformStyle: "preserve-3d", transform: "translateZ(80px)" }}
          >
            <CheckCircle2 className="w-14 h-14 text-neutral-700 dark:text-neutral-300" />
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};
export default ContactSection;
