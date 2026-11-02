import testimonialAvatar from "@/assets/testimonial-avatar.png";
import type { TestimonialItem } from "@/components/testimonial-card";

export const testimonialsData: TestimonialItem[] = [
  {
    id: "bombay-drycleaners",
    name: "Rajesh Sharma",
    role: "Founder & Director",
    company: "Bombay Dry Cleaners",
    category: "E-Commerce",
    avatar: testimonialAvatar,
    projectUrl: "https://bombaydrycleaners.com",
    quote:
      "Mantuja transformed our local service business into an automated, high-performing online platform. The website is lightning fast, mobile-friendly, and our customer bookings jumped by 140% within the first two months. Couldn't recommend him enough!",
    rating: 5,
    highlight: "+140% online bookings",
  },
  {
    id: "trivoxo-toys",
    name: "Pooja Agarwal",
    role: "Product Lead",
    company: "Trivoxo Toys",
    category: "E-Commerce",
    avatar: testimonialAvatar,
    projectUrl: "https://trivoxotoys.com",
    quote:
      "Working with Mantuja was seamless from day one. He delivered a vibrant, modern toy store with instant search and flawless mobile responsiveness. The code quality and attention to micro-interactions exceeded our expectations.",
    rating: 5,
    highlight: "Smooth checkout & responsive UX",
  },
  {
    id: "ojas-pharma",
    name: "Dr. Sandeep Patel",
    role: "Managing Director",
    company: "Ojas Pharma",
    category: "Corporate",
    avatar: testimonialAvatar,
    projectUrl: "https://ojaspharma.in",
    quote:
      "Precision, technical reliability, and clear communication define Mantuja's work. He built our pharmaceutical product showcase and distributor portal strictly to regulatory and UI requirements with zero delays.",
    rating: 5,
    highlight: "Enterprise-grade reliability",
  },
  {
    id: "aurevia-organics",
    name: "Neha Mehra",
    role: "Co-Founder",
    company: "Aurevia Organics",
    category: "E-Commerce",
    avatar: testimonialAvatar,
    projectUrl: "https://aureviaorganicss.com",
    quote:
      "Mantuja has an extraordinary design aesthetic and technical mastery in the MERN stack. Our organic wellness brand needed a clean, elegant presence that radiates trust — and he brought that vision to life beautifully.",
    rating: 5,
    highlight: "Refined aesthetic & brand trust",
  },
  {
    id: "ss-production",
    name: "Vikram Singh",
    role: "Creative Director",
    company: "SS Production House",
    category: "Web Apps",
    avatar: testimonialAvatar,
    quote:
      "Mantuja is one of the most reliable full-stack developers I have worked with. From dynamic React interfaces to robust backend API integration, he tackles complex requirements with proactive creativity and speed.",
    rating: 5,
    highlight: "Exceptional full-stack delivery",
  },
  {
    id: "meta-web-kit",
    name: "Amitabh Verma",
    role: "Senior Tech Lead",
    company: "Meta Web Kit",
    category: "Web Apps",
    avatar: testimonialAvatar,
    quote:
      "Whenever we need complex client projects delivered end-to-end with modern JavaScript, Node.js, and pixel-perfect responsiveness, Mantuja is our first call. Always delivers on time with top-tier code structure.",
    rating: 5,
    highlight: "Consistent on-time shipping",
  },
];
