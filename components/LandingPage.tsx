'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import {
  ShoppingCart,
  MessageCircle,
  Building2,
  Gamepad2,
  TrendingUp,
  Shield,
  Cloud,
  Monitor,
  Bot,
  Globe,
  Database,
  GitBranch,
  Lock,
  Tags,
  Activity,
  ArrowRight,
  Sparkles,
  Menu,
  X,
  Zap,
  Home,
  Mail,
} from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Navbar Component
interface NavbarProps {
  scrollToSection: (sectionId: string) => void;
}

const Navbar = ({ scrollToSection }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const handleScrollToSection = (sectionId: string) => {
    scrollToSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 shadow-lg backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <button
            onClick={scrollToTop}
            className="flex items-center transition-opacity hover:opacity-80"
          >
            <img
              src="/images/data-harbor-logo2.png"
              alt="DataHarbor"
              className="h-36 w-auto sm:h-42"
            />
          </button>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-8 md:flex">
            <button
              onClick={() => handleScrollToSection('services')}
              className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
            >
              Our Services
            </button>
            <button
              onClick={() => handleScrollToSection('technology')}
              className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
            >
              Technology
            </button>
            <button
              onClick={() => handleScrollToSection('data-solution')}
              className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
            >
              Data Solution
            </button>
            <button className="text-sm font-medium text-gray-300 transition-colors hover:text-white">
              Blog
            </button>
            <button
              onClick={() => handleScrollToSection('summary')}
              className="rounded-lg bg-yellow-400 px-6 py-2.5 text-sm font-semibold text-gray-900 transition-all hover:bg-yellow-300"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-gray-300 transition-colors hover:bg-gray-800 hover:text-white md:hidden"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="border-t border-gray-800 py-4 md:hidden"
          >
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => handleScrollToSection('services')}
                className="text-left text-sm font-medium text-gray-300 transition-colors hover:text-white"
              >
                Our Services
              </button>
              <button
                onClick={() => handleScrollToSection('technology')}
                className="text-left text-sm font-medium text-gray-300 transition-colors hover:text-white"
              >
                Technology
              </button>
              <button
                onClick={() => handleScrollToSection('data-solution')}
                className="text-left text-sm font-medium text-gray-300 transition-colors hover:text-white"
              >
                Data Solution
              </button>
              <button className="text-left text-sm font-medium text-gray-300 transition-colors hover:text-white">
                Blog
              </button>
              <button
                onClick={() => handleScrollToSection('summary')}
                className="inline-block rounded-lg bg-yellow-400 px-6 py-2.5 text-center text-sm font-semibold text-gray-900 transition-all hover:bg-yellow-300"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
}

const ServiceCard = ({ icon, title, subtitle, description, buttonText }: ServiceCardProps) => (
  <motion.div
    variants={fadeIn}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
    className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-xl"
  >
    <div className="flex-1">
      {/* Icon and Title */}
      <div className="mb-6 flex items-center gap-3 rounded-xl bg-gray-50 p-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#fdc800] text-gray-900">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      </div>

      {/* Subtitle */}
      <h4 className="mb-3 text-base font-bold text-gray-900">{subtitle}</h4>

      {/* Description */}
      <p className="mb-6 text-sm leading-relaxed text-gray-600">{description}</p>

      {/* Country Flags */}
      <div className="mb-6 flex flex-wrap items-center gap-2">
        <span className="text-2xl">🇺🇸</span>
        <span className="text-2xl">🇮🇳</span>
        <span className="text-2xl">🇬🇧</span>
        <span className="text-2xl">🇦🇪</span>
        <span className="text-2xl">🇩🇪</span>
        <span className="text-2xl">🇨🇦</span>
      </div>
    </div>

    {/* Button - anchored to bottom */}
    <button className="mt-auto w-full rounded-lg bg-[#151e2e] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1f2937]">
      {buttonText}
    </button>
  </motion.div>
);

interface TechCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefit: string;
}

const TechCard = ({ icon, title, description, benefit }: TechCardProps) => (
  <motion.div
    variants={fadeIn}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
    className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-xl"
  >
    <div className="flex-1">
      {/* Icon and Title */}
      <div className="mb-6 flex items-center gap-3 rounded-xl bg-gray-50 p-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#fdc800] text-gray-900">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      </div>

      {/* Description */}
      <p className="mb-4 text-sm leading-relaxed text-gray-600">{description}</p>

      {/* Benefit */}
      <p className="text-sm font-semibold text-gray-900">✓ {benefit}</p>
    </div>
  </motion.div>
);

export default function LandingPage() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const services = [
    {
      icon: <ShoppingCart className="h-6 w-6" />,
      title: 'E-Commerce',
      subtitle: 'Optimize Pricing. Monitor Competitors',
      description: 'Track product listings, pricing changes, reviews & ratings from Amazon, Flipkart, Walmart, Meesho & more.',
      buttonText: 'Explore E-Commerce Data',
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Quick Commerce',
      subtitle: 'Capture Real-Time FMCG Movements',
      description: 'Monitor hourly stockouts, delivery times & pricing on Blinkit, Zepto, Getir, and Gopuff.',
      buttonText: 'Scrape Q-Commerce Data',
    },
    {
      icon: <ShoppingCart className="h-6 w-6" />,
      title: 'Grocery',
      subtitle: 'Pin Code-Level Grocery Intelligence',
      description: 'Extract SKU prices, discounts & availability across Blinkit, Instacart, BigBasket, RedMart & FairPrice.',
      buttonText: 'Start Grocery Scraping',
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: 'Food Delivery',
      subtitle: 'Compare Menus & Offers Instantly',
      description: 'Scrape restaurant menus, delivery fees & promo codes from Swiggy, Zomato, Uber Eats, and DoorDash.',
      buttonText: 'Explore Food Data',
    },
    {
      icon: <Building2 className="h-6 w-6" />,
      title: 'Travel',
      subtitle: 'Monitor Flight, Hotel & OTA Prices',
      description: 'Scrape live airfare, hotel rates & travel packages from Google Flights, Skyscanner, Booking.com, and Agoda.',
      buttonText: 'Scrape Travel Sites',
    },
    {
      icon: <Home className="h-6 w-6" />,
      title: 'Hotel',
      subtitle: 'Dynamic Hotel Price Benchmarking',
      description: 'Extract hotel room rates, reviews & availability for rate parity, OTA monitoring & direct bookings.',
      buttonText: 'Monitor Hotel Data',
    },
    {
      icon: <Gamepad2 className="h-6 w-6" />,
      title: 'Car Rental',
      subtitle: 'Real-Time Car Rental Price Tracking',
      description: 'Extract rental car rates, discounts & fleet availability for rate parity, competitor tracking & booking optimization.',
      buttonText: 'Monitor Car Rental Data',
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: 'Real Estate',
      subtitle: 'On-Demand Real Estate Data Extraction',
      description: 'Extract property listings, pricing trends & availability for portfolio analysis, pricing models & investment insights.',
      buttonText: 'Monitor Real Estate Data',
    },
  ];

  const techFeatures = [
    {
      icon: <Shield className="h-5 w-5" />,
      title: 'Smart Access Layer',
      description: 'Automated redirections, user-agent optimization, and header management for consistent access.',
      benefit: 'Reliable, consistent data collection across all target sites.',
    },
    {
      icon: <Cloud className="h-5 w-5" />,
      title: 'Cloudflare / Akamai Compatible Engine',
      description: 'Specialized access and token management for sites protected by Cloudflare, Akamai, PerimeterX, etc.',
      benefit: 'Continuous access even on the most protected sites.',
    },
    {
      icon: <Monitor className="h-5 w-5" />,
      title: 'Managed Rendering Infrastructure',
      description: 'Full page rendering and dynamic content processing for JS-heavy pages.',
      benefit: 'Works seamlessly with SPA, AJAX, or lazy-loaded content.',
    },
    {
      icon: <Bot className="h-5 w-5" />,
      title: 'Automatic CAPTCHA Detection & Solving',
      description: 'AI-powered CAPTCHA recognition with fallback handling.',
      benefit: 'Data flow never interrupted.',
    },
    {
      icon: <Globe className="h-5 w-5" />,
      title: 'Dynamic Proxy Management',
      description: 'Global 95M+ IP pool with geolocation targeting to bypass blocks and throttling.',
      benefit: 'Stable access anywhere in the world.',
    },
    {
      icon: <Database className="h-5 w-5" />,
      title: 'Data Processing & Transformation Layer',
      description: 'Converts raw data into structured formats (e.g., product info, price, stock, reviews).',
      benefit: 'Delivered in any format — CSV, JSON, or DB Dump.',
    },
    {
      icon: <GitBranch className="h-5 w-5" />,
      title: 'Delta Tracking & Periodic Updates',
      description: 'Identifies and fetches only changed data during ongoing projects.',
      benefit: 'Faster updates, reduced redundancy.',
    },
    {
      icon: <Lock className="h-5 w-5" />,
      title: 'Secure Data Delivery',
      description: 'Data delivered via HTTPS, S3, Webhooks, or DB connections.',
      benefit: 'Maximum data security and uptime.',
    },
    {
      icon: <Tags className="h-5 w-5" />,
      title: 'Normalized & Enriched Datasets',
      description: 'Converts collected data into standard schema and enriches it with tags.',
      benefit: 'Ready for analysis or integration.',
    },
    {
      icon: <Activity className="h-5 w-5" />,
      title: 'Operational Monitoring & Performance Tracking',
      description: 'Real-time job monitoring, error recovery, and retry mechanisms.',
      benefit: 'Zero data loss, 100% reliability.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navbar */}
      <Navbar scrollToSection={scrollToSection} />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-6 py-16 pt-32 lg:py-20 lg:pt-32">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-600/20 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left side - Text content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Powered by badge - moved to top */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm ring-1 ring-white/20"
              >
                <Sparkles className="h-4 w-4 text-primary-400" />
                <span className="text-sm font-medium text-gray-200">Powered by Scrape.do</span>
              </motion.div>

              <h1 className="mb-8 text-xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Get the Data You Need,{' '}
                
                  From Any Website
                {' '}
                — Exactly How You Want It.
              </h1>

              {/* Subcopy */}
              <div className="mb-8 rounded-xl bg-gray-800/30 p-6 backdrop-blur-sm">
                <p className="mb-3 text-base leading-relaxed text-gray-300">
                  With our infrastructure powering verified data extraction across{' '}
                  <span className="font-semibold text-yellow-400">700M+ domains</span>, we deliver any data
                  you need — directly from your target websites — in your preferred format (CSV, JSON, Database
                  Dump, etc.).
                </p>

                <p className="mb-3 text-base leading-relaxed text-gray-300">
                  Whether you need a one-time dataset or scheduled weekly/monthly updates, we provide the most
                  optimized solution for your needs.
                </p>

                <p className="text-base leading-relaxed text-gray-300">
                  With experience across{' '}
                  <span className="font-semibold text-yellow-400">1,000+ projects</span>, focus on managing
                  the data, not finding it — leave the rest to us.
                </p>
              </div>
            </motion.div>

            {/* Right side - Image placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl ring-1 ring-white/10">
                <img
                  src="/images/data-harbor.png"
                  alt="DataHarbor - Data extraction platform"
                  className="h-full w-full object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="h-px bg-[#151e2e]"></div>
      </div>

      {/* Services Section */}
      <section id="services" className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Expertise Across Every Industry
            </h2>
            <p className="text-lg text-gray-600">
              From e-commerce to finance, we extract data from any platform
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="h-px bg-[#151e2e]"></div>
      </div>

      {/* Technology Section */}
      <section id="technology" className="bg-gradient-to-b from-gray-50 to-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              
                Powerful, Reliable, Scalable{' '}
              — The New Standard of Data Delivery
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
              Whether one-time or periodic extraction, our infrastructure simulates real user behavior,
              bypasses access restrictions, and delivers clean, ready-to-analyze datasets.
              <br />
              Just tell us what data you need — we handle the rest.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {techFeatures.map((feature, index) => (
              <TechCard key={index} {...feature} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="h-px bg-[#151e2e]"></div>
      </div>

      {/* Data Solutions Section */}
      <section id="data-solution" className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Empower Every Project with Real-Time Web Scraping Solutions
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
              We create projects specific to your needs on more than 700M target web sites and provide your target data in the format you want.
            </p>
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left Side - Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center"
            >
              <div className="rounded-2xl border-2 border-gray-200 bg-white p-8 shadow-sm">
                <h3 className="mb-6 text-2xl font-bold text-gray-900">
                  Access ready-to-use, structured data
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#fdc800]">
                      <span className="text-sm font-bold text-gray-900">✓</span>
                    </div>
                    <p className="text-base text-gray-700">
                      We provide you with data in formats such as CSV, Excel, JSON etc. or directly to DB.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#fdc800]">
                      <span className="text-sm font-bold text-gray-900">✓</span>
                    </div>
                    <p className="text-base text-gray-700">
                      For ongoing projects, it can be updated daily, weekly or monthly.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#fdc800]">
                      <span className="text-sm font-bold text-gray-900">✓</span>
                    </div>
                    <p className="text-base text-gray-700">
                      For one-time projects, we provide you with data in formats such as CSV, Excel, JSON etc. or directly to DB.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Table */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center"
            >
              <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#151e2e] text-white">
                      <th className="px-6 py-4 text-left text-sm font-semibold">Industry</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Available Formats</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Update Frequency</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">E-Commerce</td>
                      <td className="px-6 py-4 text-sm text-gray-600">CSV, Excel, JSON etc. or directly to DB</td>
                      <td className="px-6 py-4 text-sm text-gray-600">Daily, Weekly, Monthly, Bi-Weekly, Real-time</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Real Estate</td>
                      <td className="px-6 py-4 text-sm text-gray-600">CSV, Excel, JSON etc. or directly to DB</td>
                      <td className="px-6 py-4 text-sm text-gray-600">Daily, Weekly, Monthly, Bi-Weekly, Real-time</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Car Rental</td>
                      <td className="px-6 py-4 text-sm text-gray-600">CSV, Excel, JSON etc. or directly to DB</td>
                      <td className="px-6 py-4 text-sm text-gray-600">Daily, Weekly, Monthly, Bi-Weekly, Real-time</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Hotel</td>
                      <td className="px-6 py-4 text-sm text-gray-600">CSV, Excel, JSON etc. or directly to DB</td>
                      <td className="px-6 py-4 text-sm text-gray-600">Daily, Weekly, Monthly, Bi-Weekly, Real-time</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Travel</td>
                      <td className="px-6 py-4 text-sm text-gray-600">CSV, Excel, JSON etc. or directly to DB</td>
                      <td className="px-6 py-4 text-sm text-gray-600">Daily, Weekly, Monthly, Bi-Weekly, Real-time</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Food Delivery</td>
                      <td className="px-6 py-4 text-sm text-gray-600">CSV, Excel, JSON etc. or directly to DB</td>
                      <td className="px-6 py-4 text-sm text-gray-600">Daily, Weekly, Monthly, Bi-Weekly, Real-time</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Grocery</td>
                      <td className="px-6 py-4 text-sm text-gray-600">CSV, Excel, JSON etc. or directly to DB</td>
                      <td className="px-6 py-4 text-sm text-gray-600">Daily, Weekly, Monthly, Bi-Weekly, Real-time</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Quick Commerce</td>
                      <td className="px-6 py-4 text-sm text-gray-600">CSV, Excel, JSON etc. or directly to DB</td>
                      <td className="px-6 py-4 text-sm text-gray-600">Daily, Weekly, Monthly, Bi-Weekly, Real-time</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="h-px bg-[#151e2e]"></div>
      </div>

      {/* Summary Section */}
      <section id="summary" className="bg-gray-50 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Let's Build Your Custom Data Solution
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
              Whether you are a startup, an established company, or an individual, our team delivers scalable, customized data tailored to your needs in the format you want, with timely and 24/7 global support.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16 text-center"
          >
            <a
              href="https://wa.me/905079609474"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-[#151e2e] bg-[#151e2e] px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-transparent hover:text-[#151e2e]"
            >
              Start Now
              <ArrowRight className="h-5 w-5" />
            </a>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left Side - Process */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center"
            >
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#fdc800]">
                    <span className="text-sm font-bold text-gray-900">✓</span>
                  </div>
                  <p className="text-base text-gray-700">
                    You tell us the target site and what data you need — we handle everything from proxy rotation, rendering, CAPTCHA solving, normalization, and secure delivery.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#fdc800]">
                    <span className="text-sm font-bold text-gray-900">✓</span>
                  </div>
                  <p className="text-base text-gray-700">
                    Forget proxies, browsers, and blockers — We bring the data from inside the site, directly to you.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#fdc800]">
                    <span className="text-sm font-bold text-gray-900">✓</span>
                  </div>
                  <p className="text-base text-gray-900">
                    All you receive is ready-to-use data.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Trust Points */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center"
            >
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🤝</span>
                  <div>
                    <p className="text-base font-semibold text-gray-900">Tailored solutions for every customer.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🌐</span>
                  <div>
                    <p className="text-base font-semibold text-gray-900">Global data coverage (USA, UK, UAE, India & more)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🔐</span>
                  <div>
                    <p className="text-base font-semibold text-gray-900">Secure, NDA-compliant delivery</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">💡</span>
                  <div>
                    <p className="text-base font-semibold text-gray-900">Special project consultancy for each customer with field experts</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="h-px bg-[#151e2e]"></div>
      </div>

      {/* Fixed Contact Buttons - Bottom Right */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/905079609474"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all hover:scale-110 hover:bg-green-600 hover:shadow-xl"
          aria-label="WhatsApp"
        >
          <svg
            className="h-7 w-7"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </a>

        {/* Mail Button */}
        <a
          href="mailto:muratonurmese@gmail.com"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg transition-all hover:scale-110 hover:bg-blue-600 hover:shadow-xl"
          aria-label="Email"
        >
          <Mail className="h-7 w-7" />
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-gray-400">
              Start earning today.
            </p>
            <h2 className="mb-6 text-2xl font-bold text-white sm:text-4xl">
              All you receive is ready-to-use data.
            </h2>
          </div>

          <div className="flex flex-col items-center justify-between gap-8 border-t border-gray-700 pt-8 md:flex-row">
            {/* Left - Logo */}
            <div className="flex items-center">
              <img
                src="/images/data-harbor-logo2.png"
                alt="DataHarbor"
                className="h-36 w-auto sm:h-42"
              />
            </div>

            {/* Right - Navigation and WhatsApp */}
            <div className="flex flex-wrap items-center justify-center gap-6">
              <button
                onClick={() => scrollToSection('services')}
                className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
              >
                Our Services
              </button>
              <button
                onClick={() => scrollToSection('technology')}
                className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
              >
                Technology
              </button>
              <button
                onClick={() => scrollToSection('data-solution')}
                className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
              >
                Data Solution
              </button>
              <button className="text-sm font-medium text-gray-300 transition-colors hover:text-white">
                Blog
              </button>
              <a
                href="https://wa.me/905079609474"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-white transition-all hover:bg-green-600"
                aria-label="WhatsApp"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              © 2024 DataHarbor. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
