import React, { useState } from "react";
import {
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle2,
} from "lucide-react";
import { ContactCircle } from "../components/ContactCircle";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
  budget: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    budget: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
        budget: "",
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="pt-[120px] pb-20 bg-dark">
        <div className="px-[0.7vw]">
          <div className="max-w-[90vw] mx-auto text-center">
            <h1 className="font-title text-f-120 md:text-f-180 text-cream mb-6 leading-[0.85]">
              LET'S MAKE
              <span className="block text-red">WAVES</span>
              TOGETHER
            </h1>
            <p className="font-copy text-f-24 text-cream/80 max-w-3xl mx-auto">
              Ready to break the norm? Drop us a line and let's create something
              extraordinary.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-cream">
        <div className="px-[0.7vw]">
          <div className="max-w-[90vw] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
              {/* Left Column - Contact Form */}
              <div>
                <h2 className="font-title text-f-60 text-dark mb-8 leading-[0.9]">
                  START A PROJECT
                </h2>

                {isSubmitted ? (
                  <div className="bg-dark rounded-lg p-12 text-center">
                    <CheckCircle2 className="w-20 h-20 text-red mx-auto mb-6" />
                    <h3 className="font-title text-f-36 text-cream mb-4">
                      THANK YOU!
                    </h3>
                    <p className="font-copy text-cream/80">
                      We've received your message and will get back to you
                      within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label
                          htmlFor="name"
                          className="font-copy font-semibold text-dark uppercase tracking-wider text-xs"
                        >
                          Your Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="bg-cream border-2 border-dark text-dark placeholder:text-dark/40 focus:border-red transition-colors h-12"
                          placeholder="John Doe"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="email"
                          className="font-copy font-semibold text-dark uppercase tracking-wider text-xs"
                        >
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="bg-cream border-2 border-dark text-dark placeholder:text-dark/40 focus:border-red transition-colors h-12"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label
                          htmlFor="company"
                          className="font-copy font-semibold text-dark uppercase tracking-wider text-xs"
                        >
                          Company
                        </Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="bg-cream border-2 border-dark text-dark placeholder:text-dark/40 focus:border-red transition-colors h-12"
                          placeholder="Your Company"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="phone"
                          className="font-copy font-semibold text-dark uppercase tracking-wider text-xs"
                        >
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="bg-cream border-2 border-dark text-dark placeholder:text-dark/40 focus:border-red transition-colors h-12"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="budget"
                        className="font-copy font-semibold text-dark uppercase tracking-wider text-xs"
                      >
                        Project Budget
                      </Label>
                      <Input
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="bg-cream border-2 border-dark text-dark placeholder:text-dark/40 focus:border-red transition-colors h-12"
                        placeholder="e.g., $10k - $50k"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="message"
                        className="font-copy font-semibold text-dark uppercase tracking-wider text-xs"
                      >
                        Tell us about your project *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="bg-cream border-2 border-dark text-dark placeholder:text-dark/40 focus:border-red transition-colors resize-none"
                        placeholder="Share your vision, goals, and what you're hoping to achieve..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-dark text-cream hover:bg-red h-14 font-copy font-bold uppercase tracking-wider transition-colors duration-300 text-base"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="animate-pulse">Sending</span>
                          <span className="flex gap-1">
                            <span className="animate-bounce">.</span>
                            <span
                              className="animate-bounce"
                              style={{ animationDelay: "0.1s" }}
                            >
                              .
                            </span>
                            <span
                              className="animate-bounce"
                              style={{ animationDelay: "0.2s" }}
                            >
                              .
                            </span>
                          </span>
                        </span>
                      ) : (
                        <span className="flex items-center gap-3">
                          Send Message
                          <Send className="w-5 h-5" />
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </div>

              {/* Right Column - Company Info */}
              <div>
                <h2 className="font-title text-f-60 text-dark mb-8 leading-[0.9]">
                  GET IN TOUCH
                </h2>

                {/* Contact Info Cards */}
                <div className="space-y-6 mb-12">
                  <div className="bg-dark p-8 rounded-lg border-2 border-dark hover:border-red transition-colors duration-300">
                    <div className="flex items-start gap-4">
                      <div className="bg-red p-3 rounded">
                        <Mail className="w-6 h-6 text-cream" />
                      </div>
                      <div>
                        <h3 className="font-copy font-bold text-cream uppercase tracking-wider text-sm mb-2">
                          Email Us
                        </h3>
                        <a
                          href="mailto:hello@narwhal.studio"
                          className="font-copy text-cream/80 hover:text-red transition-colors text-lg"
                        >
                          hello@narwhal.studio
                        </a>
                        <p className="font-copy text-cream/60 text-sm mt-1">
                          For general inquiries
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-dark p-8 rounded-lg border-2 border-dark hover:border-red transition-colors duration-300">
                    <div className="flex items-start gap-4">
                      <div className="bg-red p-3 rounded">
                        <Phone className="w-6 h-6 text-cream" />
                      </div>
                      <div>
                        <h3 className="font-copy font-bold text-cream uppercase tracking-wider text-sm mb-2">
                          Call Us
                        </h3>
                        <a
                          href="tel:415.555.0100"
                          className="font-copy text-cream/80 hover:text-red transition-colors text-lg"
                        >
                          415.555.0100
                        </a>
                        <p className="font-copy text-cream/60 text-sm mt-1">
                          Mon-Fri, 9am-6pm PST
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-dark p-8 rounded-lg border-2 border-dark hover:border-red transition-colors duration-300">
                    <div className="flex items-start gap-4">
                      <div className="bg-red p-3 rounded">
                        <MapPin className="w-6 h-6 text-cream" />
                      </div>
                      <div>
                        <h3 className="font-copy font-bold text-cream uppercase tracking-wider text-sm mb-2">
                          Visit Us
                        </h3>
                        <p className="font-copy text-cream/80 text-lg">
                          123 Creative Street
                        </p>
                        <p className="font-copy text-cream/80 text-lg">
                          San Francisco, CA 94102
                        </p>
                        <p className="font-copy text-cream/60 text-sm mt-1">
                          By appointment only
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div>
                  <h3 className="font-copy font-bold text-dark uppercase tracking-wider text-sm mb-4">
                    Follow Our Journey
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-14 h-14 bg-dark rounded-lg hover:bg-red transition-colors duration-300 group"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-7 h-7 text-cream" />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-14 h-14 bg-dark rounded-lg hover:bg-red transition-colors duration-300 group"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-7 h-7 text-cream" />
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-14 h-14 bg-dark rounded-lg hover:bg-red transition-colors duration-300 group"
                      aria-label="Twitter"
                    >
                      <Twitter className="w-7 h-7 text-cream" />
                    </a>
                    <a
                      href="mailto:hello@narwhal.studio"
                      className="flex items-center justify-center w-14 h-14 bg-dark rounded-lg hover:bg-red transition-colors duration-300 group"
                      aria-label="Email"
                    >
                      <Mail className="w-7 h-7 text-cream" />
                    </a>
                  </div>
                </div>

                {/* Animated Contact Circle */}
                <div className="mt-12 flex justify-center lg:justify-start">
                  <ContactCircle />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-dark">
        <div className="px-[0.7vw]">
          <div className="max-w-[90vw] mx-auto">
            <h2 className="font-title text-f-80 text-cream mb-12 text-center">
              OUR TEAM
            </h2>

            <div className="max-w-4xl mx-auto">
              <ul className="space-y-0">
                <li className="flex flex-col md:flex-row justify-between py-4 border-t-2 border-b-2 border-cream">
                  <span className="font-copy font-semibold text-sm uppercase tracking-wider text-cream">
                    John Anderson
                  </span>
                  <span className="font-copy font-semibold text-sm uppercase tracking-wider text-cream">
                    Creative Director / Managing Partner
                  </span>
                </li>
                <li className="flex flex-col md:flex-row justify-between py-4 border-b-2 border-cream">
                  <span className="font-copy font-semibold text-sm uppercase tracking-wider text-cream">
                    Sarah Mitchell
                  </span>
                  <span className="font-copy font-semibold text-sm uppercase tracking-wider text-cream">
                    Executive Producer
                  </span>
                </li>
                <li className="flex flex-col md:flex-row justify-between py-4 border-b-2 border-cream">
                  <span className="font-copy font-semibold text-sm uppercase tracking-wider text-cream">
                    David Chen
                  </span>
                  <span className="font-copy font-semibold text-sm uppercase tracking-wider text-cream">
                    Head of Strategy
                  </span>
                </li>
                <li className="flex flex-col md:flex-row justify-between py-4 border-b-2 border-cream">
                  <span className="font-copy font-semibold text-sm uppercase tracking-wider text-cream">
                    Emma Davis
                  </span>
                  <span className="font-copy font-semibold text-sm uppercase tracking-wider text-cream">
                    New Business Director
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-cream border-t-2 border-dark">
        <div className="px-[0.7vw] text-center">
          <p className="font-copy text-xs uppercase tracking-wider text-dark/60">
            © 2024 Narwhal Studio. All rights reserved. Made with creativity &
            waves.
          </p>
        </div>
      </footer>
    </div>
  );
}