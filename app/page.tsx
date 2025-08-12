"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Globe,
  Languages,
  Phone,
  Mail,
  MapPin,
  Star,
  Heart,
  Sparkles,
  Hand,
  ShoppingCart,
  Menu,
  X,
  ArrowRight,
  Play,

} from "lucide-react"
import Image from "next/image"
import { motion, useAnimation, useInView } from "framer-motion"
import { useScroll, useTransform } from "framer-motion"
import AnimatedButton from "@/components/animated-button"
import WhatsAppButton from "@/components/whatsapp-button"
import Link from "next/link"

export default function ArdElFakharCreative() {
  const [language, setLanguage] = useState<"fr" | "ar">("fr")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "fr" ? "ar" : "fr"))
  }

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  }

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  }

  const fadeInDown = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  }

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } }
  }

  const rotateIn = {
    hidden: { opacity: 0, rotate: -15 },
    visible: { opacity: 1, rotate: 0, transition: { duration: 0.8 } }
  }
  type ProductImages = {
  [key: string]: string;
};

type LanguageProductImages = {
  fr: ProductImages;
  ar: ProductImages;
};
const productImages: LanguageProductImages = {
  fr: {
    "Tajine Royal": "/IMG_2070.JPG",
    "Tajine Moyen": "/IMG_2071.JPG", 
    "Tajine Petit": "/IMG_2072.JPG"
  },
  ar: {
    "طاجين رويال": "/IMG_2070.JPG",
    "طاجين متوسط": "/IMG_2071.JPG",
    "طاجين صغير": "/IMG_2072.JPG"
  }
};
  const content = {
    fr: {
      nav: {
        home: "Accueil",
        about: "À Propos",
        products: "Produits",
        contact: "Contact",
      },
      hero: {
        title: "Ard El Fakhar",
        subtitle: "L'Art Authentique du Maroc",
        description:
          "Découvrez l'univers fascinant de nos créations artisanales, où chaque tajine raconte une histoire, chaque vase porte l'âme du Maroc.",
        cta: "Explorer nos Créations",
        experience: "25+ ans d'expérience",
        artisans: "50+ artisans partenaires",
        badge: "✨ Artisanat Authentique",
        watchWorkshop: "Voir l'Atelier",
        years: "Années",
        artisansText: "Artisans",
        creations: "Créations",
        authentic: "Authentique",
      },
      values: [
        { icon: Hand, title: "Fait Main", desc: "Chaque pièce unique" },
        { icon: Heart, title: "Éthique", desc: "Commerce équitable" },
        { icon: Sparkles, title: "Authentique", desc: "Traditions préservées" },
        { icon: Globe, title: "Mondial", desc: "Livraison partout" },
      ],
      valuesSection: {
        title: "Nos Valeurs",
        subtitle: "L'essence de notre artisanat",
        quote: "Chaque valeur guide nos mains, chaque création porte notre âme",
      },
      about: {
        title: "Notre Histoire",
        subtitle: "Une Passion Transmise",
        description:
          "Depuis trois générations, nous perpétuons l'art ancestral de la poterie marocaine. Chaque création est le fruit d'un savoir-faire unique, transmis de maître à apprenti dans les ateliers de Chichaoua.",
        badge: "Notre Histoire",
        threeGenerations: "Trois Générations",
        ofKnowHow: "de Savoir-Faire",
        foundation: "Fondation",
        satisfiedClients: "Clients Satisfaits",
      },
     products: {
  title: "Nos Créations",
  subtitle: "L'Excellence Artisanale",
  discover: "Découvrir",
  items: [
    {
      name: "Tajine Royal",
      description: "Notre pièce maîtresse, parfaite pour les grandes occasions et réceptions familiales",
      price: "À partir de 450 MAD",
      category: "Grand Format",
    },
    {
      name: "Tajine Moyen",
      description: "La taille idéale pour les repas de 4 à 6 personnes, alliant élégance et praticité",
      price: "À partir de 320 MAD",
      category: "Taille Standard",
    },
    {
      name: "Tajine Petit",
      description: "Parfait pour les déjeuners en couple ou les dégustations de spécialités marocaines",
      price: "À partir de 220 MAD",
      category: "Format Intime",
    },
  ],
},
      testimonials: {
        title: "Témoignages",
        subtitle: "Ce que disent nos clients",
        items: [
          {
            name: "Fatima L.",
            location: "Casablanca",
            text: "Une qualité exceptionnelle qui transforme chaque repas en moment magique.",
            rating: 5,
          },
          {
            name: "Omar K.",
            location: "Paris",
            text: "L'authenticité marocaine dans toute sa splendeur. Mes invités sont toujours émerveillés.",
            rating: 5,
          },
        ],
      },
      contact: {
        title: "Créons Ensemble",
        subtitle: "Votre Vision, Notre Savoir-Faire",
        email: "contact@ardelfakhar.com",
        phone: "+212 600 123 456",
        address: "Chichaoua, Maroc",
        orderNow: "Commander Maintenant",
        visitWorkshop: "Visitez Notre Atelier",
        workshopLocation: "Chichaoua, Maroc",
      },
      footer: {
        description: "L'art authentique du Maroc, transmis avec passion",
        rights: "© 2025 Ard El Fakhar. Tous droits réservés.",
      },
    },
    ar: {
      nav: {
        home: "الرئيسية",
        about: "من نحن",
        products: "المنتجات",
        
        contact: "اتصل بنا",
      },
      hero: {
        title: "أرض الفخار",
        subtitle: "الفن الأصيل للمغرب",
        description: "اكتشف عالم إبداعاتنا الحرفية الساحر، حيث كل طاجين يحكي قصة، وكل مزهرية تحمل روح المغرب.",
        cta: "استكشف إبداعاتنا",
        experience: "25+ سنة خبرة",
        artisans: "50+ حرفي شريك",
        badge: "✨ حرف أصيلة",
        watchWorkshop: "شاهد الورشة",
        years: "سنوات",
        artisansText: "حرفيون",
        creations: "إبداعات",
        authentic: "أصيل",
      },
      values: [
        { icon: Hand, title: "صنع يدوي", desc: "كل قطعة فريدة" },
        { icon: Heart, title: "أخلاقي", desc: "تجارة عادلة" },
        { icon: Sparkles, title: "أصيل", desc: "تقاليد محفوظة" },
        { icon: Globe, title: "عالمي", desc: "توصيل في كل مكان" },
      ],
      valuesSection: {
        title: "قيمنا",
        subtitle: "جوهر حرفتنا",
        quote: "كل قيمة توجه أيدينا، كل إبداع يحمل روحنا",
      },
      about: {
        title: "قصتنا",
        subtitle: "شغف منقول",
        description:
          "منذ ثلاثة أجيال، نحافظ على فن الفخار المغربي الأصيل. كل إبداع هو ثمرة معرفة فريدة، منقولة من المعلم إلى التلميذ في ورش فاس.",
        badge: "قصتنا",
        threeGenerations: "ثلاثة أجيال",
        ofKnowHow: "من المعرفة",
        foundation: "التأسيس",
        satisfiedClients: "عملاء راضون",
      },
    products: {
  title: "إبداعاتنا",
  subtitle: "التميز الحرفي",
  discover: "اكتشف",
  items: [
    {
      name: "طاجين رويال",
      description: "تحفة فنية مناسبة للمناسبات الكبيرة والاستقبالات العائلية",
      price: "ابتداء من 450 درهم",
      category: "مقاس كبير",
    },
    {
      name: "طاجين متوسط",
      description: "الحجم المثالي لوجبات 4 إلى 6 أشخاص، يجمع بين الأناقة والعملية",
      price: "ابتداء من 320 درهم",
      category: "مقاس عادي",
    },
    {
      name: "طاجين صغير",
      description: "مثالي لوجبات الزوجين أو تذوق الأطباق المغربية",
      price: "ابتداء من 220 درهم",
      category: "مقاس صغير",
    },
  ],
},
      testimonials: {
        title: "شهادات العملاء",
        subtitle: "ما يقوله عملاؤنا",
        items: [
          {
            name: "فاطمة ل.",
            location: "الدار البيضاء",
            text: "جودة استثنائية تحول كل وجبة إلى لحظة سحرية.",
            rating: 5,
          },
          {
            name: "عمر ك.",
            location: "باريس",
            text: "الأصالة المغربية في كل روعتها. ضيوفي منبهرون دائماً.",
            rating: 5,
          },
        ],
      },
      contact: {
        title: "لنبدع معاً",
        subtitle: "رؤيتك، خبرتنا",
        email: "contact@ardelfakhar.com",
        phone: "+212 600 123 456",
        address: "مدينة فاس، المغرب",
        orderNow: "اطلب الآن",
        visitWorkshop: "زر ورشتنا",
        workshopLocation: "مدينة فاس، المغرب",
      },
      footer: {
        description: "الفن الأصيل للمغرب، منقول بشغف",
        rights: "© 2025 أرض الفخار. جميع الحقوق محفوظة.",
      },
    },
  }

  const currentContent = content[language]

  return (
    <div className="min-h-screen bg-[#F3F3F0] overflow-x-hidden" dir={language === "ar" ? "rtl" : "ltr"}>
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-32 h-32 bg-[#804F2A]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-48 h-48 bg-[#804F2A]/3 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-[#804F2A]/8 rounded-full blur-2xl"></div>
      </div>

      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-white/90 backdrop-blur-lg shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-10 max-w-6xl py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-[#804F2A] tracking-wide"
            >
             <img src="11_ARD EL FAKHAR_Export_couleur_horiz.png" alt="" className="w-28 h-10"/>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-10">
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="flex space-x-10"
              >
                {Object.entries(currentContent.nav).map(([key, value]) => (
                  <motion.a
                    key={key}
                    variants={item}
                    href={`#${key}`}
                    className="text-[#804F2A] hover:text-[#804F2A]/70 transition-all duration-300 font-medium relative group"
                  >
                    {value}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#804F2A] transition-all duration-300 group-hover:w-full"></span>
                  </motion.a>
                ))}
              </motion.div>
            </nav>

            <div className="flex items-center space-x-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleLanguage}
                  className="text-[#804F2A] hover:bg-[#804F2A]/10 font-medium"
                >
                  <Languages className="w-4 h-4 mr-2" />
                  {language === "fr" ? "عربي" : "FR"}
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className="md:hidden text-[#804F2A]"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Mobile Navigation */}
      {isMenuOpen && (
  <>
    {/* Overlay with smooth fade */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-black/50 z-40 md:hidden"
      onClick={() => setIsMenuOpen(false)}
    />
    
    {/* Sidebar Menu with smooth slide-out */}
    <motion.nav
      initial={{ 
        x: language === "ar" ? "-100%" : "100%",
        opacity: 0 
      }}
      animate={{ 
        x: 0, 
        opacity: 1 
      }}
      exit={{ 
        x: language === "ar" ? "-100%" : "100%",
        opacity: 0,
        transition: { duration: 0.3, ease: "easeInOut" } // Smoother exit
      }}
      transition={{ 
        duration: 0.3, 
        ease: "easeOut",
        when: "beforeChildren" // Animates parent before children
      }}
      className={`
        fixed top-0 h-full w-64 z-50 bg-white shadow-xl
        ${language === "ar" ? "left-0" : "right-0"}
      `}
    >
      {/* Close button with smooth interaction */}
      <motion.div 
        className={`p-4 flex ${language === "ar" ? "justify-start" : "justify-end"}`}
        whileTap={{ scale: 0.9 }} // Subtle click effect
      >
        <Button
          variant="ghost"
          size="sm"
          className="text-[#804F2A] hover:bg-[#804F2A]/10"
          onClick={() => {
            // Trigger the exit animation before closing
            setIsMenuOpen(false);
          }}
        >
          <X className="w-5 h-5" />
        </Button>
      </motion.div>
      
      {/* Menu items with staggered animation */}
      <motion.div
        className="flex flex-col space-y-2 px-6 py-4"
        variants={{
          open: {
            transition: { staggerChildren: 0.07, delayChildren: 0.2 }
          },
          closed: {
            transition: { staggerChildren: 0.05, staggerDirection: -1 }
          }
        }}
      >
        {Object.entries(currentContent.nav).map(([key, value], index) => (
          <motion.a
            key={key}
            variants={{
              open: {
                x: 0,
                opacity: 1,
                transition: {
                  x: { stiffness: 1000, velocity: -100 }
                }
              },
              closed: {
                x: language === "ar" ? -50 : 50,
                opacity: 0,
                transition: {
                  x: { stiffness: 1000 }
                }
              }
            }}
            href={`#${key}`}
            className="text-[#804F2A] hover:text-[#804F2A]/70 transition-colors py-3 px-4 font-medium rounded-lg hover:bg-[#804F2A]/5"
            onClick={() => setIsMenuOpen(false)}
          >
            {value}
          </motion.a>
        ))}
      </motion.div>
    </motion.nav>
  </>
)}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20 pb-10 px-6 relative">
        <div className="container mx-auto px-16 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
              className="space-y-8"
            >
              <div className="space-y-6">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Badge className="bg-[#804F2A]/10 text-[#804F2A] border-[#804F2A]/20 px-4 py-2 text-sm font-medium">
                    {currentContent.hero.badge}
                  </Badge>
                </motion.div>

                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-6xl lg:text-7xl font-bold text-[#804F2A] leading-tight"
                >
                  {currentContent.hero.title}
                  <motion.span 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="block text-4xl lg:text-5xl text-[#804F2A]/70 font-light mt-2"
                  >
                    {currentContent.hero.subtitle}
                  </motion.span>
                </motion.h1>

                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-xl text-[#804F2A]/80 leading-relaxed max-w-lg"
                >
                  {currentContent.hero.description}
                </motion.p>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
              <a href="#products">
  <AnimatedButton
    size="lg"
    className="bg-[#804F2A] hover:bg-[#804F2A]/90 text-white px-8 py-4 text-lg font-medium group"
  >
    {currentContent.hero.cta}
  </AnimatedButton>
</a>

               
              </motion.div>

              {/* Stats */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex gap-8 pt-4"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#804F2A]">25+</div>
                  <div className="text-sm text-[#804F2A]/70">{currentContent.hero.years}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#804F2A]">50+</div>
                  <div className="text-sm text-[#804F2A]/70">{currentContent.hero.artisansText}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#804F2A]">1000+</div>
                  <div className="text-sm text-[#804F2A]/70">{currentContent.hero.creations}</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
              className="relative"
            >
              <div className="relative">
                {/* Main Image */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10 rounded-3xl overflow-hidden shadow-2xl"
                >
                  <Image
                    src="/IMG_2065.JPG"
                    alt="Artisan marocain créant un tajine"
                    width={500}
                    height={600}
                    className="w-full h-[600px] object-cover"
                  />
                </motion.div>

                {/* Floating Elements */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 0.2, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute -top-6 -right-6 w-24 h-24 bg-[#804F2A] rounded-2xl rotate-12 z-0"
                ></motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="absolute -bottom-8 -left-8 w-32 h-32 bg-white rounded-full shadow-lg z-20 flex items-center justify-center"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#804F2A]">100%</div>
                    <div className="text-xs text-[#804F2A]/70">{currentContent.hero.authentic}</div>
                  </div>
                </motion.div>

                {/* Decorative Pattern */}
                <motion.div 
                  initial={{ opacity: 0, rotate: 0 }}
                  animate={{ opacity: 0.1, rotate: 360 }}
                  transition={{ delay: 0.7, duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute top-1/2 -right-12 w-20 h-20"
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full fill-[#804F2A]">
                    <pattern id="moroccan" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <polygon points="10,0 20,10 10,20 0,10" />
                    </pattern>
                    <rect width="100" height="100" fill="url(#moroccan)" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section - Updated with better spacing */}
      <section className="py-32 relative overflow-hidden container mx-auto px-16 max-w-6xl">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-[#804F2A]/10 rounded-full"
            style={{
              animation: "rotate 30s linear infinite",
            }}
          ></motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-[#804F2A]/5 rounded-full"
            style={{ 
              animation: "rotate 30s linear infinite reverse",
            }}
          ></motion.div>
        </div>

        <div className="container mx-auto relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInDown}
            className="text-center mb-20"
          >
            <div className="inline-block relative">
              <h2 className="text-6xl font-bold text-[#804F2A] mb-4 relative z-10">
                {currentContent.valuesSection.title}
              </h2>
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute -top-4 -left-4 w-16 h-16 bg-[#804F2A]/10 rounded-full blur-xl"
              ></motion.div>
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-2 -right-6 w-12 h-12 bg-[#804F2A]/20 rounded-full blur-lg"
              ></motion.div>
            </div>
            <p className="text-xl text-[#804F2A]/70">{currentContent.valuesSection.subtitle}</p>
          </motion.div>

          {/* Creative Radial Layout */}
          <div className="relative max-w-6xl mx-auto">
            {/* Center Piece */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[999]"
            >
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="w-32 h-32 bg-gradient-to-br from-[#804F2A] to-[#804F2A]/80 rounded-full flex items-center justify-center shadow-2xl"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="text-center text-white">
                  <div className="text-2xl font-bold">ARD</div>
                  <div className="text-sm opacity-90">EL FAKHAR</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Values arranged in creative positions */}
            <div className="relative h-[800px] md:h-[900px]">
              {currentContent.values.map((value, index) => {
                const positions = [
                  { top: "10%", left: "5%", rotate: "-15deg" },    // Top Left
                  { top: "10%", right: "5%", rotate: "12deg" },     // Top Right
                  { bottom: "15%", left: "5%", rotate: "8deg" },    // Bottom Left
                  { bottom: "15%", right: "5%", rotate: "-10deg" }, // Bottom Right
                ]

                const position = positions[index]

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.3, duration: 0.8 }}
                    className="absolute group cursor-pointer z-20 hover:z-30 transition-all duration-300 w-60"
                    style={{
                      ...position,
                    }}
                  >
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="relative"
                      style={{ transform: `rotate(${position.rotate})` }}
                    >
                      {/* Connecting Line to Center */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute w-0.5 bg-gradient-to-r from-[#804F2A]/30 to-transparent z-10"
                        style={{
                          height: "200px",
                          top: "50%",
                          left: "50%",
                          transformOrigin: "top",
                          transform: `rotate(${
                            index === 0 ? "45deg" : index === 1 ? "135deg" : index === 2 ? "-45deg" : "-135deg"
                          }deg)`,
                        }}
                      ></motion.div>

                      {/* Value Card */}
                      <Card className="bg-white/95 backdrop-blur-sm border-none shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:-rotate-2 w-full relative overflow-hidden">
                        <CardContent className="p-6 text-center relative z-10">
                          {/* Decorative corner */}
                          <motion.div 
                            whileHover={{ scale: 1.2 }}
                            className="absolute top-0 right-0 w-8 h-8 bg-[#804F2A]/10 rounded-bl-2xl"
                          ></motion.div>

                          {/* Icon with creative background */}
                          <div className="relative mb-4 mx-auto w-16 h-16">
                            <motion.div 
                              whileHover={{ rotate: 90 }}
                              className="absolute inset-0 bg-[#804F2A]/10 rounded-2xl rotate-45 transition-transform duration-500"
                            ></motion.div>
                            <div className="relative z-10 w-full h-full flex items-center justify-center">
                              <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ duration: 0.3 }}
                              >
                                <value.icon className="w-8 h-8 text-[#804F2A]" />
                              </motion.div>
                            </div>
                          </div>

                          <h3 className="text-lg font-bold text-[#804F2A] mb-2 group-hover:text-[#804F2A]/80 transition-colors">
                            {value.title}
                          </h3>
                          <p className="text-[#804F2A]/70 text-sm leading-relaxed">{value.desc}</p>

                          {/* Decorative dots */}
                          <motion.div 
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            className="flex justify-center space-x-1 mt-4 transition-opacity duration-300"
                          >
                            <div className="w-1 h-1 bg-[#804F2A]/40 rounded-full"></div>
                            <div className="w-1 h-1 bg-[#804F2A]/60 rounded-full"></div>
                            <div className="w-1 h-1 bg-[#804F2A]/40 rounded-full"></div>
                          </motion.div>
                        </CardContent>

                        {/* Hover overlay effect */}
                        <motion.div 
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          className="absolute inset-0 bg-gradient-to-br from-[#804F2A]/5 to-transparent transition-opacity duration-500 rounded-lg"
                        ></motion.div>
                      </Card>

                      {/* Floating decorative elements */}
                      <motion.div 
                        whileHover={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        className="absolute -top-2 -right-2 w-4 h-4 bg-[#804F2A]/20 rounded-full transition-all duration-500"
                        style={{ 
                          animation: "bounce 2s infinite",
                          animationDelay: `${index * 0.1}s`
                        }}
                      ></motion.div>
                      <motion.div 
                        whileHover={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        className="absolute -bottom-3 -left-3 w-3 h-3 bg-[#804F2A]/30 rounded-full transition-all duration-700"
                        style={{ 
                          animation: "bounce 2s infinite",
                          animationDelay: `${index * 0.15}s`
                        }}
                      ></motion.div>
                    </motion.div>
                  </motion.div>
                )
              })}
            </div>

            {/* Decorative Moroccan Pattern Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.05 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="absolute inset-0 pointer-events-none z-0"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <pattern id="moroccan-values" x="0" y="0" width="15" height="15" patternUnits="userSpaceOnUse">
                    <path d="M7.5,0 L15,7.5 L7.5,15 L0,7.5 Z" fill="#804F2A" opacity="0.3" />
                    <circle cx="7.5" cy="7.5" r="2" fill="#804F2A" opacity="0.2" />
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#moroccan-values)" />
              </svg>
            </motion.div>
          </div>

          {/* Bottom decorative text */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.5 }}
            className="text-center mt-16"
          >
            <p className="text-[#804F2A]/60 italic text-lg">{currentContent.valuesSection.quote}</p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white relative overflow-hidden">
        <motion.div 
          initial={{ x: "100%" }}
          whileInView={{ x: "25%" }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute top-0 right-0 w-1/3 h-full bg-[#F3F3F0] transform skew-x-12"
        ></motion.div>

        <div className="container mx-auto px-16 max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
              className="space-y-8"
            >
              <div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                >
                  <Badge className="bg-[#804F2A]/10 text-[#804F2A] border-[#804F2A]/20 mb-4">
                    {currentContent.about.badge}
                  </Badge>
                </motion.div>
                <h2 className="text-5xl font-bold text-[#804F2A] mb-6 leading-tight">
                  {currentContent.about.threeGenerations}
                  <span className="block text-3xl text-[#804F2A]/70 font-light">{currentContent.about.ofKnowHow}</span>
                </h2>
              </div>

              <motion.p 
                whileHover={{ x: language === "ar" ? -5 : 5 }}
                transition={{ duration: 0.3 }}
                className="text-lg text-[#804F2A]/80 leading-relaxed"
              >
                {currentContent.about.description}
              </motion.p>

              <motion.div 
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-6"
              >
                <motion.div 
                  variants={item}
                  whileHover={{ y: -5 }}
                  className="text-center p-6 bg-[#F3F3F0] rounded-2xl"
                >
                  <div className="text-3xl font-bold text-[#804F2A] mb-2">1998</div>
                  <div className="text-sm text-[#804F2A]/70">{currentContent.about.foundation}</div>
                </motion.div>
                <motion.div 
                  variants={item}
                  whileHover={{ y: -5 }}
                  className="text-center p-6 bg-[#F3F3F0] rounded-2xl"
                >
                  <div className="text-3xl font-bold text-[#804F2A] mb-2">5000+</div>
                  <div className="text-sm text-[#804F2A]/70">{currentContent.about.satisfiedClients}</div>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <motion.div 
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <motion.div variants={item}>
                    <Image
                      src="/IMG_2057.JPG"
                      alt="Atelier traditionnel"
                      width={200}
                      height={250}
                      className="rounded-2xl shadow-lg w-full object-cover"
                    />
                  </motion.div>
                  <motion.div variants={item}>
                    <Image
                      src="/IMG_2059.JPG"
                      alt="Motifs berbères"
                      width={200}
                      height={200}
                      className="rounded-2xl shadow-lg w-full object-cover"
                    />
                  </motion.div>
                </motion.div>
                <motion.div 
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                  className="space-y-4 pt-8"
                >
                  <motion.div variants={item}>
                    <Image
                      src="/IMG_2060.JPG"
                      alt="Argile naturelle"
                      width={200}
                      height={200}
                      className="rounded-2xl shadow-lg w-full object-cover"
                    />
                  </motion.div>
                  <motion.div variants={item}>
                    <Image
                      src="/IMG_2064.JPG"
                      alt="Cuisson traditionnelle"
                      width={200}
                      height={250}
                      className="rounded-2xl shadow-lg w-full object-cover"
                    />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-6 relative">
        <div className="container mx-auto px-16 max-w-6xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInDown}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-[#804F2A] mb-4">{currentContent.products.title}</h2>
            <p className="text-xl text-[#804F2A]/70">{currentContent.products.subtitle}</p>
          </motion.div>

          <div className="space-y-16">
            {currentContent.products.items.map((product, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
                transition={{ delay: index * 0.3 }}
              >
                <div className={`relative ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <motion.div 
                    whileHover={{ scale: 1.03 }}
                    className="relative group"
                  >
                  <Image
  src={productImages[language][product.name]}
  alt={product.name}
  width={500}
  height={400}
  className="rounded-3xl shadow-2xl w-full object-cover"
/>
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-t from-[#804F2A]/20 to-transparent rounded-3xl transition-opacity duration-500"
                    ></motion.div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-lg"
                  >
                    <Badge className="bg-[#804F2A] text-white">{product.category}</Badge>
                  </motion.div>
                </div>

                <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <div>
                    <motion.h3 
                      whileHover={{ x: language === "ar" ? -5 : 5 }}
                      transition={{ duration: 0.3 }}
                      className="text-4xl font-bold text-[#804F2A] mb-4"
                    >
                      {product.name}
                    </motion.h3>
                    <p className="text-lg text-[#804F2A]/80 leading-relaxed mb-6">{product.description}</p>
                   
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                   
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-white relative overflow-hidden">
        <motion.div 
          initial={{ x: "-100%" }}
          whileInView={{ x: "-25%" }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute top-0 left-0 w-1/3 h-full bg-[#F3F3F0] transform -skew-x-12"
        ></motion.div>

        <div className="container mx-auto relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInDown}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-[#804F2A] mb-4">{currentContent.testimonials.title}</h2>
            <p className="text-xl text-[#804F2A]/70">{currentContent.testimonials.subtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {currentContent.testimonials.items.map((testimonial, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                transition={{ delay: index * 0.3 }}
              >
                <Card
                  className={`bg-white border-none shadow-2xl relative overflow-hidden ${
                    index % 2 === 0 ? "md:translate-y-8" : "md:-translate-y-8"
                  }`}
                >
                  <CardContent className="p-8">
                    <motion.div 
                      whileHover={{ rotate: 90 }}
                      className="absolute top-0 right-0 w-20 h-20 bg-[#804F2A]/5 rounded-bl-3xl transition-transform duration-500"
                    ></motion.div>

                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ scale: 1.2 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Star className="w-5 h-5 fill-[#804F2A] text-[#804F2A]" />
                        </motion.div>
                      ))}
                    </div>

                    <p className="text-[#804F2A]/80 mb-6 text-lg italic leading-relaxed">"{testimonial.text}"</p>

                    <div className="flex items-center">
                      <motion.div 
                        whileHover={{ scale: 1.1 }}
                        className="w-12 h-12 bg-[#804F2A]/10 rounded-full flex items-center justify-center mr-4"
                      >
                        <span className="text-[#804F2A] font-bold text-lg">{testimonial.name.charAt(0)}</span>
                      </motion.div>
                      <div>
                        <div className="font-semibold text-[#804F2A]">{testimonial.name}</div>
                        <div className="text-[#804F2A]/60 text-sm">{testimonial.location}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative">
        <div className="container mx-auto px-16 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
              className="space-y-8"
            >
              <div>
                <h2 className="text-5xl font-bold text-[#804F2A] mb-4">{currentContent.contact.title}</h2>
                <p className="text-xl text-[#804F2A]/70 mb-8">{currentContent.contact.subtitle}</p>
              </div>

              <motion.div 
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-6"
              >
                <motion.div 
                  variants={item}
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 p-4 bg-white rounded-2xl shadow-lg"
                >
                  <div className="w-12 h-12 bg-[#804F2A]/10 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[#804F2A]" />
                  </div>
                  <span className="text-[#804F2A] font-medium">{currentContent.contact.email}</span>
                </motion.div>

                <motion.div 
                  variants={item}
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 p-4 bg-white rounded-2xl shadow-lg"
                >
                  <div className="w-12 h-12 bg-[#804F2A]/10 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[#804F2A]" />
                  </div>
                  <span className="text-[#804F2A] font-medium">{currentContent.contact.phone}</span>
                </motion.div>

                <motion.div 
                  variants={item}
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 p-4 bg-white rounded-2xl shadow-lg"
                >
                  <div className="w-12 h-12 bg-[#804F2A]/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[#804F2A]" />
                  </div>
                  <span className="text-[#804F2A] font-medium">{currentContent.contact.address}</span>
                </motion.div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <AnimatedButton  className="bg-[#804F2A] hover:bg-[#804F2A]/90 text-white px-8 py-4 w-full group">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  {currentContent.contact.orderNow}
                 <Link
      href="https://wa.me/212691832300" // WhatsApp link with your number
      target="_blank"
      
    
      aria-label="Chat on WhatsApp"
    ></Link>
                </AnimatedButton>
              </motion.div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
              className="relative"
            >
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-3xl shadow-2xl p-8 relative overflow-hidden"
              >
                <motion.div 
                  whileHover={{ rotate: 90 }}
                  className="absolute top-0 right-0 w-32 h-32 bg-[#804F2A]/5 rounded-bl-3xl transition-transform duration-500"
                ></motion.div>

                <Image
                  src="/IMG_2067.JPG"
                  alt="Atelier Ard El Fakhar"
                  width={400}
                  height={400}
                  className="rounded-2xl w-full object-cover"
                />

                <motion.div 
                  whileHover={{ y: -5 }}
                  className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm rounded-2xl p-4"
                >
                  <div className="text-center">
                    <div className="text-lg font-bold text-[#804F2A] mb-1">{currentContent.contact.visitWorkshop}</div>
                    <div className="text-sm text-[#804F2A]/70">{currentContent.contact.workshopLocation}</div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#804F2A] text-white py-16 px-6 relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute top-0 left-0 w-full h-full"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <pattern id="moroccan-footer" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <polygon points="10,0 20,10 10,20 0,10" fill="white" opacity="0.1" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#moroccan-footer)" />
          </svg>
        </motion.div>

        <div className="container mx-auto relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleUp}
            className="text-center"
          >
            <div className="text-4xl font-bold mb-4">{currentContent.hero.title}</div>
            <p className="text-white/80 text-lg mb-8">{currentContent.footer.description}</p>
            <div className="text-white/60">{currentContent.footer.rights}</div>
          </motion.div>
        </div>
      </footer>
      <WhatsAppButton/>

      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  )
}