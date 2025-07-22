"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Menu,
  X,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  User,
  Building,
  MessageSquare,
  Calendar,
  CheckCircle,
  Star,
} from "lucide-react"
import Link from "next/link"

const contactMethods = [
  {
    id: 1,
    icon: Phone,
    title: "お電話でのお問い合わせ",
    description: "平日9:00-18:00まで専門スタッフが対応いたします",
    contact: "03-1234-5678",
    action: "今すぐ電話する",
    color: "from-[#00bcd4] to-[#0099aa]",
    available: true,
  },
  {
    id: 2,
    icon: Mail,
    title: "メールでのお問い合わせ",
    description: "24時間受付、1営業日以内にご返信いたします",
    contact: "info@aegis-llp.com",
    action: "メールを送る",
    color: "from-slate-500 to-slate-600",
    available: true,
  },
  {
    id: 3,
    icon: Calendar,
    title: "オンライン相談予約",
    description: "Web会議システムを使用した無料相談",
    contact: "30分〜60分",
    action: "相談を予約する",
    color: "from-[#00bcd4] to-slate-500",
    available: true,
  },
  {
    id: 4,
    icon: MapPin,
    title: "訪問相談・打ち合わせ",
    description: "貴自治体への直接訪問による詳細相談",
    contact: "要予約",
    action: "訪問を依頼する",
    color: "from-slate-600 to-[#00bcd4]",
    available: true,
  },
]

const offices = [
  {
    id: 1,
    name: "本社",
    address: "〒100-0001 東京都千代田区千代田1-1-1",
    building: "○○ビル 10F",
    phone: "03-1234-5678",
    fax: "03-1234-5679",
    email: "tokyo@aegis-llp.com",
    hours: "平日 9:00-18:00",
    image: "/placeholder.svg?height=300&width=400&text=Tokyo+Office",
    mapUrl: "#",
    isMain: true,
  },
  {
    id: 2,
    name: "関西支社",
    nameEn: "Kansai Branch",
    address: "〒530-0001 大阪府大阪市北区梅田1-1-1",
    building: "○○タワー 15F",
    phone: "06-1234-5678",
    fax: "06-1234-5679",
    email: "osaka@aegis-llp.com",
    hours: "平日 9:00-18:00",
    image: "/placeholder.svg?height=300&width=400&text=Osaka+Office",
    mapUrl: "#",
    isMain: false,
  },
  {
    id: 3,
    name: "コンサルティング事業部",
    nameEn: "Consulting Division",
    address: "〒220-0001 神奈川県横浜市西区みなとみらい1-1-1",
    building: "○○センター 8F",
    phone: "045-1234-5678",
    fax: "045-1234-5679",
    email: "consulting@aegis-llp.com",
    hours: "平日 9:00-18:00",
    image: "/placeholder.svg?height=300&width=400&text=Yokohama+Office",
    mapUrl: "#",
    isMain: false,
  },
  {
    id: 4,
    name: "デジタルソリューション事業部",
    nameEn: "Digital Solutions Division",
    address: "〒460-0001 愛知県名古屋市中区錦1-1-1",
    building: "○○プラザ 12F",
    phone: "052-1234-5678",
    fax: "052-1234-5679",
    email: "digital@aegis-llp.com",
    hours: "平日 9:00-18:00",
    image: "/placeholder.svg?height=300&width=400&text=Nagoya+Office",
    mapUrl: "#",
    isMain: false,
  },
]

const inquiryTypes = [
  "サービス内容について",
  "料金・見積もりについて",
  "導入事例について",
  "技術的な質問",
  "パートナーシップについて",
  "採用について",
  "その他",
]

const faqs = [
  {
    question: "相談は無料ですか？",
    answer: "はい、初回相談は無料です。お客様の課題をお聞きし、最適なソリューションをご提案いたします。",
  },
  {
    question: "対応可能な地域はどこまでですか？",
    answer: "全国対応可能です。各地域に拠点を設けており、お客様のもとへ直接伺うことも可能です。",
  },
  {
    question: "プロジェクトの期間はどのくらいですか？",
    answer: "プロジェクトの規模により異なりますが、小規模なものは3ヶ月、大規模なものは12-18ヶ月程度です。",
  },
  {
    question: "導入後のサポートはありますか？",
    answer: "はい、導入後も継続的なサポートを提供いたします。運用保守から改善提案まで幅広く対応します。",
  },
]

const contactCategories = [
  {
    id: 1,
    title: "電話相談",
    subtitle: "Phone Support",
    description: "専門スタッフが対応"
  },
  {
    id: 2,
    title: "メール相談", 
    subtitle: "Email Support",
    description: "24時間受付対応"
  },
  {
    id: 3,
    title: "オンライン相談",
    subtitle: "Online Meeting",
    description: "Web会議で詳細相談"
  },
  {
    id: 4,
    title: "訪問相談",
    subtitle: "On-site Visit",
    description: "現地での打ち合わせ"
  }
]

export default function ContactPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    organization: "",
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    subject: "",
    message: "",
    preferredContact: "email",
    urgency: "normal",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [visibleElements, setVisibleElements] = useState<number[]>([])
  const [activeOffice, setActiveOffice] = useState(1)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elementId = Number.parseInt(entry.target.getAttribute("data-element-id") || "0")
            setVisibleElements((prev) => [...prev, elementId])
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll("[data-element-id]")
    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        organization: "",
        name: "",
        email: "",
        phone: "",
        inquiryType: "",
        subject: "",
        message: "",
        preferredContact: "email",
        urgency: "normal",
      })
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
        <header
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
            isScrolled ? "bg-white shadow-lg py-6" : "bg-transparent py-8"
          }`}
        >
          <div className="w-full px-12">
            <div className="flex items-center justify-between">
              {/* Logo Section - Far Left */}
              <div className="flex items-center space-x-4">
                <div
                  className={`w-12 h-12 transition-all duration-300 ${
                    isScrolled ? "bg-[#004080]" : "bg-white/20 backdrop-blur-sm"
                  }`}
                >
                  <span className="w-full h-full flex items-center justify-center text-white font-bold text-xl">A</span>
                </div>
                <div>
                  <span
                    className={`text-xl font-bold transition-all duration-300 ${
                      isScrolled ? "text-[#004080]" : "text-white"
                    }`}
                  >
                    AEGIS
                  </span>
                </div>
                <div>
                  <span
                    className={`text-xl font-medium transition-all duration-300 ${
                      isScrolled ? "text-[#333333]" : "text-white"
                    }`}
                  >
                    エイジス有限責任事業組合
                  </span>
                </div>
              </div>

              {/* Navigation - Far Right with Better Spacing */}
              <nav className="hidden lg:flex items-center">
                <div className="flex items-center space-x-10">
                  <Link href="#partnership" className="group flex flex-col items-center text-center">
                    <span
                      className={`text-sm font-medium mb-2 transition-all duration-300 ${
                        isScrolled
                          ? "text-[#333333] group-hover:text-[#004080]"
                          : "text-white group-hover:text-[#00bcd4]"
                      }`}
                    >
                      パートナーシップ
                    </span>
                    <span
                      className={`text-xs font-light transition-all duration-300 ${
                        isScrolled ? "text-[#00bcd4]" : "text-white/70"
                      }`}
                    >
                      Partnership
                    </span>
                  </Link>

                  <Link href="/services" className="group flex flex-col items-center text-center">
                    <span
                      className={`text-sm font-medium mb-2 transition-all duration-300 ${
                        isScrolled
                          ? "text-[#333333] group-hover:text-[#004080]"
                          : "text-white group-hover:text-[#00bcd4]"
                      }`}
                    >
                      サービス内容
                    </span>
                    <span
                      className={`text-xs font-light transition-all duration-300 ${
                        isScrolled ? "text-[#00bcd4]" : "text-white/70"
                      }`}
                    >
                      Services
                    </span>
                  </Link>

                  <Link href="/projects" className="group flex flex-col items-center text-center">
                    <span
                      className={`text-sm font-medium mb-2 transition-all duration-300 ${
                        isScrolled
                          ? "text-[#333333] group-hover:text-[#004080]"
                          : "text-white group-hover:text-[#00bcd4]"
                      }`}
                    >
                      実績紹介
                    </span>
                    <span
                      className={`text-xs font-light transition-all duration-300 ${
                        isScrolled ? "text-[#00bcd4]" : "text-white/70"
                      }`}
                    >
                      Projects
                    </span>
                  </Link>

                  <Link href="/careers" className="group flex flex-col items-center text-center">
                    <span
                      className={`text-sm font-medium mb-2 transition-all duration-300 ${
                        isScrolled
                          ? "text-[#333333] group-hover:text-[#004080]"
                          : "text-white group-hover:text-[#00bcd4]"
                      }`}
                    >
                      キャリア
                    </span>
                    <span
                      className={`text-xs font-light transition-all duration-300 ${
                        isScrolled ? "text-[#00bcd4]" : "text-white/70"
                      }`}
                    >
                      Careers
                    </span>
                  </Link>

                  <Link href="/about" className="group flex flex-col items-center text-center">
                    <span
                      className={`text-sm font-medium mb-2 transition-all duration-300 ${
                        isScrolled
                          ? "text-[#333333] group-hover:text-[#004080]"
                          : "text-white group-hover:text-[#00bcd4]"
                      }`}
                    >
                      会社概要
                    </span>
                    <span
                      className={`text-xs font-light transition-all duration-300 ${
                        isScrolled ? "text-[#00bcd4]" : "text-white/70"
                      }`}
                    >
                      About
                    </span>
                  </Link>

                  <Link href="/contact" className="group flex flex-col items-center text-center">
                    <span
                      className={`text-sm font-medium mb-2 transition-all duration-300 ${
                        isScrolled
                          ? "text-[#333333] group-hover:text-[#004080]"
                          : "text-white group-hover:text-[#00bcd4]"
                      }`}
                    >
                      お問い合わせ
                    </span>
                    <span
                      className={`text-xs font-light transition-all duration-300 ${
                        isScrolled ? "text-[#00bcd4]" : "text-white/70"
                      }`}
                    >
                      Contact
                    </span>
                  </Link>
                </div>
              </nav>

              {/* Mobile Menu Button */}
              <button className="lg:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? (
                  <X className={`w-6 h-6 ${isScrolled ? "text-[#333333]" : "text-white"}`} />
                ) : (
                  <Menu className={`w-6 h-6 ${isScrolled ? "text-[#333333]" : "text-white"}`} />
                )}
              </button>
            </div>

            {/* Subtle line under navigation items only */}
            <div className="flex justify-end">
              <div className="flex-1 max-w-lg">
                <div
                  className={`mt-6 h-px transition-all duration-300 ${isScrolled ? "bg-gray-200" : "bg-white/20"}`}
                ></div>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200/50">
              <div className="px-12 py-8 space-y-6">
                <Link href="#partnership" className="block py-3 text-[#333333] hover:text-[#004080]">
                  <div className="text-sm font-medium mb-1">パートナーシップ</div>
                  <div className="text-xs text-[#00bcd4]">Partnership</div>
                </Link>
                <Link href="#services" className="block py-3 text-[#333333] hover:text-[#004080]">
                  <div className="text-sm font-medium mb-1">サービス内容</div>
                  <div className="text-xs text-[#00bcd4]">Services</div>
                </Link>
                <Link href="#projects" className="block py-3 text-[#333333] hover:text-[#004080]">
                  <div className="text-sm font-medium mb-1">実績紹介</div>
                  <div className="text-xs text-[#00bcd4]">Projects</div>
                </Link>
                <Link href="#solutions" className="block py-3 text-[#333333] hover:text-[#004080]">
                  <div className="text-sm font-medium mb-1">ソリューション</div>
                  <div className="text-xs text-[#00bcd4]">Solutions</div>
                </Link>
                <Link href="#about" className="block py-3 text-[#333333] hover:text-[#004080]">
                  <div className="text-sm font-medium mb-1">会社概要</div>
                  <div className="text-xs text-[#00bcd4]">About</div>
                </Link>
                <Link href="#contact" className="block py-3 text-[#333333] hover:text-[#004080]">
                  <div className="text-sm font-medium mb-1">お問い合わせ</div>
                  <div className="text-xs text-[#00bcd4]">Contact</div>
                </Link>
              </div>
            </div>
          )}
        </header>

      {/* Hero Section - Consistent with Other Pages, Background Animations Removed */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-12 relative z-10">
          <div className="text-center text-white">
            {/* Animated title entrance */}
            <div className="inline-flex items-center space-x-4 mb-8 animate-fade-in-up">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <div className="text-left">
                <h1 className="text-5xl md:text-6xl font-bold mb-2 animate-slide-in-right">お問い合わせ</h1>
                <p className="text-xl text-[#00bcd4] animate-slide-in-left">専門スタッフがサポート</p>
              </div>
            </div>

            <p className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed max-w-4xl mx-auto animate-fade-in-up animation-delay-300">
              地方自治体の課題解決に向けて、専門スタッフがお客様のご相談にお応えします。
              <br />
              お気軽にお問い合わせください。
            </p>

            {/* Interactive Contact Categories with hover animations */}
            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {contactCategories.map((category, index) => (
                <div
                  key={category.id}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-500 cursor-pointer transform hover:scale-105 hover:rotate-1 animate-fade-in-up group"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <h3 className="text-lg font-bold mb-2 group-hover:text-[#00bcd4] transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-sm opacity-80 group-hover:opacity-100 transition-opacity duration-300 mb-2">
                    {category.subtitle}
                  </p>
                  <p className="text-xs text-white/70 font-medium">
                    {category.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Contact stats */}
            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 animate-fade-in-up animation-delay-400">
                <div className="text-3xl font-bold text-[#00bcd4] mb-2">24時間</div>
                <p className="text-sm">メール受付</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 animate-fade-in-up animation-delay-500">
                <div className="text-3xl font-bold text-[#00bcd4] mb-2">1営業日</div>
                <p className="text-sm">以内に返信</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 animate-fade-in-up animation-delay-600">
                <div className="text-3xl font-bold text-[#00bcd4] mb-2">無料</div>
                <p className="text-sm">初回相談</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 animate-fade-in-up animation-delay-700">
                <div className="text-3xl font-bold text-[#00bcd4] mb-2">全国</div>
                <p className="text-sm">対応可能</p>
              </div>
            </div>

            {/* Animated CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 animate-fade-in-up animation-delay-600">
              <Button className="bg-[#00bcd4] hover:bg-[#0099aa] text-white px-8 py-4 text-lg font-medium rounded-none transition-all duration-300 hover:shadow-xl hover:scale-105 transform">
                今すぐ相談する
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-700 px-8 py-4 text-lg font-medium rounded-none bg-transparent transition-all duration-300 hover:scale-105 transform"
              >
                資料をダウンロード
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-12">
          {/* Section Header - Consistent with Other Pages */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="w-24 h-1 bg-[#00bcd4] mx-auto mb-8 animate-expand"></div>
            <h2 className="text-4xl font-bold text-[#333333] mb-4">お問い合わせ方法</h2>
            <p className="text-lg text-[#666666]">お客様のご都合に合わせて最適な方法をお選びください</p>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon
              const isVisible = visibleElements.includes(method.id)

              return (
                <div
                  key={method.id}
                  data-element-id={method.id}
                  className={`transform transition-all duration-1000 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 0.2}s` }}
                >
                  <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 group cursor-pointer transform hover:scale-105">
                    {/* Header with gradient */}
                    <div className={`bg-gradient-to-r ${method.color} p-6 text-white relative overflow-hidden`}>
                      <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/10 rounded-full"></div>
                      <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white/10 rounded-full"></div>

                      <div className="relative z-10">
                        <IconComponent className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <p className="text-[#666666] text-sm leading-relaxed mb-4">{method.description}</p>

                      <div className="mb-4">
                        <div className="text-lg font-bold text-[#333333] mb-1">{method.contact}</div>
                        {method.available && (
                          <div className="flex items-center text-green-500 text-sm">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                            対応可能
                          </div>
                        )}
                      </div>

                      <Button className="w-full bg-[#00bcd4] hover:bg-[#0099aa] text-white text-sm font-medium rounded-lg transition-all duration-300 group-hover:shadow-lg">
                        {method.action}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-12">
          {/* Section Header - Consistent with Other Pages */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="w-24 h-1 bg-[#00bcd4] mx-auto mb-8 animate-expand"></div>
            <h2 className="text-4xl font-bold text-[#333333] mb-4">お問い合わせフォーム</h2>
            <p className="text-lg text-[#666666]">以下のフォームからお気軽にお問い合わせください</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 animate-fade-in-up animation-delay-300">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Organization and Name */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-medium text-[#333333] mb-2">
                      組織名 <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#666666] group-focus-within:text-[#00bcd4] transition-colors duration-300" />
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00bcd4] focus:border-transparent transition-all duration-300"
                        placeholder="○○市役所"
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium text-[#333333] mb-2">
                      お名前 <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#666666] group-focus-within:text-[#00bcd4] transition-colors duration-300" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00bcd4] focus:border-transparent transition-all duration-300"
                        placeholder="田中 太郎"
                      />
                    </div>
                  </div>
                </div>

                {/* Email and Phone */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-medium text-[#333333] mb-2">
                      メールアドレス <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#666666] group-focus-within:text-[#00bcd4] transition-colors duration-300" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00bcd4] focus:border-transparent transition-all duration-300"
                        placeholder="tanaka@city.example.jp"
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium text-[#333333] mb-2">電話番号</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#666666] group-focus-within:text-[#00bcd4] transition-colors duration-300" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00bcd4] focus:border-transparent transition-all duration-300"
                        placeholder="03-1234-5678"
                      />
                    </div>
                  </div>
                </div>

                {/* Inquiry Type and Subject */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#333333] mb-2">
                      お問い合わせ種別 <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00bcd4] focus:border-transparent transition-all duration-300"
                    >
                      <option value="">選択してください</option>
                      {inquiryTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#333333] mb-2">件名</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00bcd4] focus:border-transparent transition-all duration-300"
                      placeholder="デジタル化についてのご相談"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="group">
                  <label className="block text-sm font-medium text-[#333333] mb-2">
                    お問い合わせ内容 <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-[#666666] group-focus-within:text-[#00bcd4] transition-colors duration-300" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00bcd4] focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="お問い合わせ内容を詳しくお聞かせください..."
                    />
                  </div>
                </div>

                {/* Preferences */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#333333] mb-2">希望連絡方法</label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="email"
                          checked={formData.preferredContact === "email"}
                          onChange={handleInputChange}
                          className="mr-2 text-[#00bcd4] focus:ring-[#00bcd4]"
                        />
                        メール
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="phone"
                          checked={formData.preferredContact === "phone"}
                          onChange={handleInputChange}
                          className="mr-2 text-[#00bcd4] focus:ring-[#00bcd4]"
                        />
                        電話
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#333333] mb-2">緊急度</label>
                    <select
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00bcd4] focus:border-transparent transition-all duration-300"
                    >
                      <option value="low">低（1週間以内）</option>
                      <option value="normal">普通（3日以内）</option>
                      <option value="high">高（1日以内）</option>
                      <option value="urgent">緊急（即日）</option>
                    </select>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center pt-6">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#00bcd4] hover:bg-[#0099aa] text-white px-12 py-4 text-lg font-medium rounded-lg transition-all duration-300 hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        送信中...
                      </>
                    ) : (
                      <>
                        送信する
                        <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            ) : (
              <div className="text-center py-12 animate-fade-in">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-[#333333] mb-4">送信完了</h3>
                <p className="text-[#666666] mb-6">
                  お問い合わせありがとうございます。
                  <br />
                  1営業日以内にご返信いたします。
                </p>
                <div className="flex items-center justify-center text-[#00bcd4]">
                  <Star className="w-5 h-5 mr-2" />
                  <span className="font-medium">お問い合わせID: #AEG-{Date.now().toString().slice(-6)}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Office Locations Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-12">
          {/* Section Header - Consistent with Other Pages */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="w-24 h-1 bg-[#00bcd4] mx-auto mb-8 animate-expand"></div>
            <h2 className="text-4xl font-bold text-[#333333] mb-4">オフィス所在地</h2>
            <p className="text-lg text-[#666666]">全国4拠点でお客様をサポート</p>
          </div>

          {/* Office Tabs */}
          <div className="flex flex-wrap justify-center mb-12">
            {offices.map((office) => (
              <button
                key={office.id}
                onClick={() => setActiveOffice(office.id)}
                className={`px-6 py-3 mx-2 mb-2 rounded-lg font-medium transition-all duration-300 ${
                  activeOffice === office.id
                    ? "bg-[#00bcd4] text-white shadow-lg"
                    : "bg-gray-100 text-[#666666] hover:bg-gray-200"
                }`}
              >
                {office.name}
              </button>
            ))}
          </div>

          {/* Active Office Details */}
          {offices.map((office) => (
            <div
              key={office.id}
              className={`transition-all duration-500 ${
                activeOffice === office.id ? "opacity-100 block" : "opacity-0 hidden"
              }`}
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Office Image */}
                <div className="relative group">
                  <div className="overflow-hidden rounded-xl shadow-2xl">
                    <img
                      src={office.image || "/placeholder.svg"}
                      alt={`${office.name} office`}
                      className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                    {office.isMain && (
                      <div className="absolute top-4 left-4">
                        <div className="bg-[#00bcd4] text-white px-3 py-1 rounded-full text-sm font-medium">本社</div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Office Information */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-[#333333] mb-2">{office.name}</h3>
                    <p className="text-[#00bcd4] font-medium text-lg">{office.nameEn}</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-[#00bcd4] mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-[#333333] font-medium">{office.address}</p>
                        <p className="text-[#666666] text-sm">{office.building}</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-[#00bcd4] mr-3 flex-shrink-0" />
                      <div>
                        <p className="text-[#333333] font-medium">TEL: {office.phone}</p>
                        <p className="text-[#666666] text-sm">FAX: {office.fax}</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-[#00bcd4] mr-3 flex-shrink-0" />
                      <p className="text-[#333333] font-medium">{office.email}</p>
                    </div>

                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-[#00bcd4] mr-3 flex-shrink-0" />
                      <p className="text-[#333333] font-medium">{office.hours}</p>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <Button className="bg-[#00bcd4] hover:bg-[#0099aa] text-white px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105">
                      地図を見る
                      <MapPin className="w-4 h-4 ml-2" />
                    </Button>
                    <Button
                      variant="outline"
                      className="border-2 border-[#00bcd4] text-[#00bcd4] hover:bg-[#00bcd4] hover:text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 bg-transparent"
                    >
                      お電話する
                      <Phone className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-12">
          {/* Section Header - Consistent with Other Pages */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="w-24 h-1 bg-[#00bcd4] mx-auto mb-8 animate-expand"></div>
            <h2 className="text-4xl font-bold text-[#333333] mb-4">よくあるご質問</h2>
            <p className="text-lg text-[#666666]">お問い合わせの前にご確認ください</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                >
                  <span className="font-medium text-[#333333]">{faq.question}</span>
                  <div
                    className={`transform transition-transform duration-300 ${
                      expandedFaq === index ? "rotate-180" : ""
                    }`}
                  >
                    <ArrowRight className="w-5 h-5 text-[#666666] transform rotate-90" />
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedFaq === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-4">
                    <p className="text-[#666666] leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#00bcd4] to-slate-500 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-12 text-center relative z-10">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-in-up">
            まずはお気軽にご相談ください
          </h3>
          <p className="text-xl text-white/90 mb-8 leading-relaxed animate-fade-in-up animation-delay-300">
            専門スタッフがお客様の課題をお聞きし、最適なソリューションをご提案いたします。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
            <Button className="bg-white text-[#00bcd4] hover:bg-gray-100 px-8 py-4 text-lg font-medium rounded-none transition-all duration-300 hover:shadow-xl transform hover:scale-105">
              今すぐ電話する
              <Phone className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#00bcd4] px-8 py-4 text-lg font-medium rounded-none bg-transparent transition-all duration-300 transform hover:scale-105"
            >
              メールで相談
              <Mail className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800 text-white py-32">
        <div className="max-w-7xl mx-auto px-12">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Logo Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">A</span>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-1">AEGIS</div>
                </div>
              </div>
              <div className="text-lg font-medium text-white/90">エイジス有限責任事業組合</div>
            </div>

            {/* Navigation Links */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">会社概要</h4>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">サービス紹介</h4>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">ソリューション</h4>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">パートナーシップ</h4>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">お問い合わせ</h4>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">サイトマップ</h4>
                </div>
              </div>
            </div>

            {/* Office Locations */}
            <div className="lg:col-span-2">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Main Office */}
                <div>
                  <h4 className="text-lg font-medium text-white mb-4">本社</h4>
                  <div className="space-y-2 text-white/90">
                    <p>〒100-0001 東京都千代田区千代田1-1-1</p>
                    <p>TEL.03-1234-5678</p>
                    <p>FAX.03-1234-5679</p>
                  </div>
                </div>
                {/* Regional Office */}
                <div>
                  <h4 className="text-lg font-medium text-white mb-4">関西支社</h4>
                  <div className="space-y-2 text-white/90">
                    <p>〒530-0001 大阪府大阪市北区梅田1-1-1</p>
                    <p>TEL.06-1234-5678</p>
                    <p>FAX.06-1234-5679</p>
                  </div>
                </div>
                {/* Consultation Office */}
                <div>
                  <h4 className="text-lg font-medium text-white mb-4">コンサルティング事業部</h4>
                  <div className="space-y-2 text-white/90">
                    <p>〒220-0001 神奈川県横浜市西区みなとみらい1-1-1</p>
                    <p>TEL.045-1234-5678</p>
                    <p>FAX.045-1234-5679</p>
                  </div>
                </div>
                {/* Digital Solutions Office */}
                <div>
                  <h4 className="text-lg font-medium text-white mb-4">デジタルソリューション事業部</h4>
                  <div className="space-y-2 text-white/90">
                    <p>〒460-0001 愛知県名古屋市中区錦1-1-1</p>
                    <p>TEL.052-1234-5678</p>
                    <p>FAX.052-1234-5679</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/80 text-sm">©2024 AEGIS有限責任事業組合.</div>
            <div className="text-[#00bcd4]/80 text-sm mt-4 md:mt-0">PRODUCED BY AEGIS LLP</div>
          </div>
        </div>
      </footer>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes expand {
          from { width: 0; }
          to { width: 100%; }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out forwards;
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
        }
        
        .animate-expand {
          animation: expand 1s ease-out forwards;
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
        
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        
        .animation-delay-700 {
          animation-delay: 0.7s;
        }
      `}</style>
    </div>
  )
}