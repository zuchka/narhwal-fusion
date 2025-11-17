import React, { useEffect, useRef } from "react";
import {
  ArrowRight,
  PlayCircle,
  Mail,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";
import { ContactCircle } from "../components/ContactCircle";

// Work item data
const workItems = [
  {
    id: 1,
    title: "Ocean Spray Rebrand",
    subtitle: "Full Brand Identity",
    videoUrl: "/placeholder.svg",
    imageUrl:
      "https://images.pexels.com/photos/7466999/pexels-photo-7466999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    title: "TechWave Summit",
    subtitle: "Digital Campaign",
    videoUrl: "/placeholder.svg",
    imageUrl:
      "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    title: "Neon Dreams",
    subtitle: "Urban Fashion Film",
    videoUrl: "/placeholder.svg",
    imageUrl:
      "https://images.pexels.com/photos/722245/pexels-photo-722245.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 4,
    title: "StartUp Launch",
    subtitle: "Product Reveal",
    videoUrl: "/placeholder.svg",
    imageUrl:
      "https://images.pexels.com/photos/30965502/pexels-photo-30965502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 5,
    title: "Brand Strategy Co.",
    subtitle: "Corporate Identity",
    videoUrl: "/placeholder.svg",
    imageUrl:
      "https://images.pexels.com/photos/7661184/pexels-photo-7661184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 6,
    title: "Digital Horizons",
    subtitle: "Social Campaign",
    videoUrl: "/placeholder.svg",
    imageUrl:
      "https://images.pexels.com/photos/8970684/pexels-photo-8970684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

// Media feed items
const mediaItems = [
  {
    id: 1,
    image:
      "https://images.pexels.com/photos/4515793/pexels-photo-4515793.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=2",
    title: "Behind the Scenes: Neon Dreams",
    date: "2 days ago",
  },
  {
    id: 2,
    image:
      "https://images.pexels.com/photos/7640433/pexels-photo-7640433.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=2",
    title: "Award Win: Creative Excellence",
    date: "1 week ago",
  },
  {
    id: 3,
    image:
      "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=2",
    title: "Narwhal Studio Opening",
    date: "2 weeks ago",
  },
  {
    id: 4,
    image:
      "https://images.pexels.com/photos/8970684/pexels-photo-8970684.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=2",
    title: "Team Strategy Session",
    date: "3 weeks ago",
  },
];

// Team members
const teamMembers = [
  {
    name: "Alex Chen",
    role: "Creative Director",
    email: "alex@narwhal.studio",
  },
  {
    name: "Sarah Johnson",
    role: "Strategy Lead",
    email: "sarah@narwhal.studio",
  },
  {
    name: "Mike Williams",
    role: "Production Head",
    email: "mike@narwhal.studio",
  },
  { name: "Emma Davis", role: "New Business", email: "emma@narwhal.studio" },
];

export default function Index() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add any animations or interactions here
  }, []);

  return (
    <div className="min-h-screen bg-cream noise-overlay">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-[722px] flex items-center justify-center overflow-hidden pt-[60px] bg-gradient-to-br from-dark via-dark to-red/20"
      >
        {/* Background overlay */}
        <div className="absolute inset-0 bg-cream mix-difference z-10 pointer-events-none" />

        {/* Hero content */}
        <div className="relative z-20 w-full px-4 md:px-[2vw] text-center">
          <div className="max-w-[90vw] mx-auto">
            <h1 className="font-title leading-none">
              <span className="block text-f-60 md:text-f-80 text-dark/80 mb-2 animate-fadeIn">
                make waves
              </span>
              <span className="block text-f-120 md:text-f-180 text-red font-bold animate-fadeIn animation-delay-200 relative">
                NARwhal
                <span className="absolute -inset-8 bg-red/30 blur-3xl -z-10"></span>
              </span>
            </h1>

            {/* Decorative elements */}
            <div className="absolute right-[10%] top-1/2 -translate-y-1/2 w-[45vw] h-[45vw] bg-red rounded-full opacity-25 blur-3xl animate-pulse" />
            <div
              className="absolute left-[10%] top-1/3 w-[40vw] h-[40vw] bg-red rounded-full opacity-20 blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[35vw] h-[35vw] bg-red rounded-full opacity-15 blur-3xl animate-pulse"
              style={{ animationDelay: "0.5s" }}
            />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-dark animate-bounce" />
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 bg-dark">
        {/* Marquee stripe */}
        <div className="relative h-[140px] md:h-[200px] flex items-center overflow-hidden mb-16 w-full">
          <div
            className="flex absolute whitespace-nowrap animate-marquee"
            style={{ lineHeight: "1" }}
          >
            <span className="font-title text-f-80 md:text-f-120 text-cream uppercase inline-block px-4">
              Work • Selected Projects • Work • Selected Projects • Work •
              Selected Projects •
            </span>
            <span className="font-title text-f-80 md:text-f-120 text-cream uppercase inline-block px-4">
              Work • Selected Projects • Work • Selected Projects • Work •
              Selected Projects •
            </span>
            <span className="font-title text-f-80 md:text-f-120 text-cream uppercase inline-block px-4">
              Work • Selected Projects • Work • Selected Projects • Work •
              Selected Projects •
            </span>
            <span className="font-title text-f-80 md:text-f-120 text-cream uppercase inline-block px-4">
              Work • Selected Projects • Work • Selected Projects • Work •
              Selected Projects •
            </span>
          </div>
        </div>

        {/* Work grid */}
        <div className="px-[0.7vw]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[0.7vw]">
            {workItems.map((item) => (
              <div
                key={item.id}
                className="group relative bg-cream rounded-md overflow-hidden cursor-pointer transition-smooth hover:scale-[1.02]"
              >
                <div className="aspect-video-16-9 relative overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center">
                    <PlayCircle className="w-16 h-16 text-cream" />
                  </div>
                </div>
                <div className="p-6">
                  <p className="font-copy text-xs uppercase tracking-wider text-dark/60 mb-2">
                    {item.subtitle}
                  </p>
                  <h3 className="font-title text-2xl text-dark">
                    {item.title}
                  </h3>
                  {/* Progress bar */}
                  <div className="mt-4 h-[6px] bg-dark/10 rounded-full overflow-hidden">
                    <div className="h-full w-0 bg-red rounded-full group-hover:w-full transition-all duration-1000" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View all work button */}
        <div className="flex justify-center mt-16">
          <button className="btn-outline flex items-center gap-3">
            View All Work
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Quote Section */}
      <section id="quote" className="py-32 px-[0.7vw] bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/3">
              <div className="w-32 h-32 bg-red rounded-full opacity-20 blur-2xl" />
            </div>
            <div className="w-full md:w-2/3">
              <blockquote className="font-copy text-f-36 leading-[1.2em] text-dark">
                "Like the mythical narwhal piercing through Arctic waters, we
                break through the noise with bold creativity that can't be
                ignored."
              </blockquote>
              <p className="font-copy text-sm uppercase tracking-wider text-dark/60 mt-8">
                — Founder & Creative Director
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Media/Feed Section */}
      <section id="media" className="py-20 bg-dark">
        <div className="px-[0.7vw]">
          <h2 className="font-title text-f-80 text-cream mb-12">
            In Your Feed
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[0.7vw]">
            {mediaItems.map((item) => (
              <div
                key={item.id}
                className="group relative bg-cream rounded-md overflow-hidden cursor-pointer"
              >
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <p className="font-copy text-xs uppercase tracking-wider text-dark/60 mb-2">
                    {item.date}
                  </p>
                  <h4 className="font-copy font-semibold text-dark">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hit Us Up Section with Animation */}
      <section className="py-32 bg-cream border-t-2 border-dark">
        <div className="px-[0.7vw]">
          <div className="max-w-[90vw] mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
              {/* Left side - 2/3 column */}
              <div className="flex-1 lg:w-2/3">
                <div className="flex flex-col h-full justify-between">
                  {/* Top section with title and social */}
                  <div className="flex flex-col md:flex-row justify-between mb-12 md:items-start">
                    {/* Title and location */}
                    <div className="mb-8 md:mb-0">
                      <h2 className="font-title text-f-80 md:text-f-120 text-dark uppercase mb-4 leading-[0.85]">
                        NARWHAL
                      </h2>
                      <h3 className="font-title text-f-24 md:text-f-32 text-dark uppercase">
                        San Francisco, CA
                      </h3>
                    </div>

                    {/* Social icons - aligned to top of NARWHAL text */}
                    <div className="flex gap-3 md:mt-[-0.25rem]">
                      <a
                        href="#"
                        className="flex items-center justify-center w-12 h-12 bg-dark rounded hover:bg-red transition-colors duration-300"
                        aria-label="Instagram"
                      >
                        <Instagram className="w-6 h-6 text-cream" />
                      </a>
                      <a
                        href="#"
                        className="flex items-center justify-center w-12 h-12 bg-dark rounded hover:bg-red transition-colors duration-300"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="w-6 h-6 text-cream" />
                      </a>
                      <a
                        href="#"
                        className="flex items-center justify-center w-12 h-12 bg-dark rounded hover:bg-red transition-colors duration-300"
                        aria-label="Twitter"
                      >
                        <Twitter className="w-6 h-6 text-cream" />
                      </a>
                      <a
                        href="#"
                        className="flex items-center justify-center w-12 h-12 bg-dark rounded hover:bg-red transition-colors duration-300"
                        aria-label="Email"
                      >
                        <Mail className="w-6 h-6 text-cream" />
                      </a>
                    </div>
                  </div>

                  {/* Team list */}
                  <div>
                    <ul className="space-y-0">
                      <li className="flex flex-col md:flex-row justify-between py-3 border-t-2 border-b-2 border-dark">
                        <span className="font-copy font-semibold text-sm uppercase tracking-wider text-dark">
                          John Anderson
                        </span>
                        <span className="font-copy font-semibold text-sm uppercase tracking-wider text-dark">
                          Creative Director / Managing Partner
                        </span>
                      </li>
                      <li className="flex flex-col md:flex-row justify-between py-3 border-b-2 border-dark">
                        <span className="font-copy font-semibold text-sm uppercase tracking-wider text-dark">
                          Sarah Mitchell
                        </span>
                        <span className="font-copy font-semibold text-sm uppercase tracking-wider text-dark">
                          Executive Producer
                        </span>
                      </li>
                      <li className="flex flex-col md:flex-row justify-between py-3 border-b-2 border-dark">
                        <span className="font-copy font-semibold text-sm uppercase tracking-wider text-dark">
                          David Chen
                        </span>
                        <span className="font-copy font-semibold text-sm uppercase tracking-wider text-dark">
                          Head of Strategy
                        </span>
                      </li>
                      <li className="flex flex-col md:flex-row justify-between py-3 border-b-2 border-dark">
                        <div className="flex flex-col md:flex-row gap-2 md:gap-8">
                          <a
                            href="mailto:hello@narwhal.studio"
                            className="font-copy font-semibold text-sm uppercase tracking-wider text-dark hover:text-red transition-colors duration-300"
                          >
                            hello@narwhal.studio
                          </a>
                        </div>
                        <a
                          href="tel:415.555.0100"
                          className="font-copy font-semibold text-sm uppercase tracking-wider text-dark hover:text-red transition-colors duration-300"
                        >
                          415.555.0100
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right side animated circle - 1/3 column */}
              <div className="flex-shrink-0 lg:w-1/3 flex justify-center lg:justify-end">
                <a
                  href="mailto:hello@narwhal.studio"
                  className="inline-block"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <ContactCircle />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-dark">
        <div className="px-[0.7vw] text-center">
          <p className="font-copy text-xs uppercase tracking-wider text-cream/60">
            © 2024 Narwhal Studio. All rights reserved. Made with creativity &
            laughs.
          </p>
        </div>
      </footer>
    </div>
  );
}
