"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import React, { useState } from "react";
import { Container } from "../shared/Container";
import Heading from "@/components/shared/Heading";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Linkedin,
  Github,
  Loader2,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "../ui/card";

const CONTACT_CONTENT = {
  title: "Get In Touch",
  description:
    "I am actively seeking new opportunities. Let's connect and build something great together.",
  form: {
    name: "Name",
    email: "Email",
    message: "Message",
    placeholderName: "Your Name",
    placeholderEmail: "Your Email",
    placeholderMessage: "Your Message",
    submitButton: "Send Message",
  },
  social: [
    {
      name: "GitHub",
      url: "https://github.com/your-username",
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/your-profile",
      icon: Linkedin,
    },
  ],
  email: "your.email@example.com",
};

export const ContactSection = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formEl = e.currentTarget;
    const formData = new FormData(formEl);
    const data = Object.fromEntries(formData);

    setStatus("sending");
    setFeedbackMessage("Sending message...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("sent");
        setFeedbackMessage("Message sent successfully! 🚀");
        formEl.reset(); // ✅ reset only on success
      } else {
        setStatus("error");
        setFeedbackMessage(result.message || "Failed to send message.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
      setFeedbackMessage("A network error occurred. Please try again.");
    } finally {
      setTimeout(() => {
        setStatus("idle");
        setFeedbackMessage("");
      }, 4000);
    }
  };

  return (
    <section className="py-6 md:py-12 lg:py-20">
      <Container>
        <div className="text-center mb-12 space-y-4">
          <Heading as="h2" id="contact">
            {CONTACT_CONTENT.title}
          </Heading>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground md:text-lg max-w-xl mx-auto"
          >
            {CONTACT_CONTENT.description}
          </motion.p>
        </div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full md:w-2/3 lg:w-1/2"
          >
            <Card className="bg-background/60 backdrop-blur-lg border-border shadow-xl p-6 rounded-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder={CONTACT_CONTENT.form.placeholderName}
                  required
                />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={CONTACT_CONTENT.form.placeholderEmail}
                  required
                />
                <Textarea
                  id="message"
                  name="message"
                  placeholder={CONTACT_CONTENT.form.placeholderMessage}
                  rows={6}
                  required
                  className="resize-none"
                />

                <Button
                  type="submit"
                  className={cn(
                    "w-full group relative overflow-hidden px-6 py-4 rounded-full shadow-md transition-all duration-300"
                  )}
                  disabled={status === "sending"}
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {status === "sending" && (
                      <motion.span
                        key="sending"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center justify-center gap-2"
                      >
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Sending...
                      </motion.span>
                    )}
                    {status === "sent" && (
                      <motion.span
                        key="sent"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center justify-center gap-2 text-green-500"
                      >
                        <CheckCircle2 className="h-5 w-5" />
                        Sent!
                      </motion.span>
                    )}
                    {status === "error" && (
                      <motion.span
                        key="error"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center justify-center gap-2 text-red-500"
                      >
                        <XCircle className="h-5 w-5" />
                        Error
                      </motion.span>
                    )}
                    {status === "idle" && (
                      <motion.span
                        key="idle"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center justify-center gap-2"
                      >
                        {CONTACT_CONTENT.form.submitButton}
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </Button>

                <AnimatePresence>
                  {feedbackMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className={cn(
                        "mt-3 text-sm text-center font-medium",
                        status === "sent"
                          ? "text-green-500"
                          : status === "error"
                          ? "text-red-500"
                          : "text-muted-foreground"
                      )}
                    >
                      {feedbackMessage}
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
