"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import React, { useState } from "react";
import { Container } from "../shared/Container";
import Heading from "@/components/shared/Heading";
import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin, Github } from "lucide-react";
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
  const [status, setStatus] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    setStatus("sending");
    setFeedbackMessage("Sending message...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("sent");
        setFeedbackMessage("Message sent successfully!");
        (e.currentTarget as HTMLFormElement).reset(); // Reset form fields
      } else {
        setStatus("error");
        setFeedbackMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
      setFeedbackMessage("A network error occurred. Please try again.");
    } finally {
      setTimeout(() => {
        setStatus("");
        setFeedbackMessage("");
      }, 5000); // Clear the message after 5 seconds
    }
  };

  return (
    <section id="contact" className="py-6 md:py-9 lg:py-16">
      <Container>
        <div className="text-center mb-16 space-y-4">
          <Heading as="h2">{CONTACT_CONTENT.title}</Heading>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground md:text-xl max-w-2xl mx-auto"
          >
            {CONTACT_CONTENT.description}
          </motion.p>
        </div>

        <div className="flex item-center justify-center gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full md:w-1/2 flex-shrink-0"
          >
            <Card className="h-full bg-background dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 shadow-md p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="sr-only">
                    {CONTACT_CONTENT.form.name}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder={CONTACT_CONTENT.form.placeholderName}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    {CONTACT_CONTENT.form.email}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={CONTACT_CONTENT.form.placeholderEmail}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    {CONTACT_CONTENT.form.message}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder={CONTACT_CONTENT.form.placeholderMessage}
                    rows={6}
                    required
                    className="w-full resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full group px-6 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  disabled={status === "sending"}
                >
                  {status === "sending"
                    ? "Sending..."
                    : status === "sent"
                    ? "Message Sent!"
                    : status === "error"
                    ? "Error!"
                    : CONTACT_CONTENT.form.submitButton}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>

                <AnimatePresence>
                  {feedbackMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className={cn(
                        "mt-4 text-sm text-center font-medium",
                        status === "sent" ? "text-green-500" : "text-red-500"
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
