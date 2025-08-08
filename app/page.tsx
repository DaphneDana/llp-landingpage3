
"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    id: 1,
    title: "デジタル変革支援",
    description: "地方自治体のデジタル化を支援し、効率的な業務運営を実現します。",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "AI・IoT技術導入",
    description: "最新のAI・IoT技術を活用し、地方自治体の課題解決に貢献します。",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "システム開発・運用保守",
    description: "地方自治体に最適なシステムを提供し、安定した運用をサポートします。",
    image: "/placeholder.svg?height=400&width=600",
  },
]

const projects = [
  {
    id: 1,
    title: "スマートシティ推進プロジェクト",
    client: "A市役所",
    category: "デジタル変革",
    description:
      "IoT技術を活用した交通渋滞解消と環境モニタリングシステムの構築により、市民の生活の質を大幅に向上させました。",
    image: "/placeholder.svg?height=400&width=600",
    metrics: [
      { label: "交通渋滞", value: "30%削減" },
      { label: "CO2排出量", value: "25%削減" },
      { label: "市民満足度", value: "85%向上" },
    ],
    duration: "12ヶ月",
    budget: "2.5億円",
  },
  {
    id: 2,
    title: "AI活用住民サービス最適化",
    client: "B県庁",
    category: "AI・IoT導入",
    description:
      "AIチャットボットと予測分析システムの導入により、住民サービスの効率化と職員の業務負担軽減を実現しました。",
    image: "/placeholder.svg?height=400&width=600",
    metrics: [
      { label: "問い合わせ対応", value: "60%自動化" },
      { label: "処理時間", value: "40%短縮" },
      { label: "職員満足度", value: "90%向上" },
    ],
    duration: "8ヶ月",
    budget: "1.8億円",
  },
  {
    id: 3,
    title: "統合型行政システム構築",
    client: "C市役所",
    category: "システム開発",
    description: "複数の部署にまたがる業務システムを統合し、データ連携の効率化と住民サービスの向上を実現しました。",
    image: "/placeholder.svg?height=400&width=600",
    metrics: [
      { label: "業務効率", value: "50%向上" },
      { label: "データ処理", value: "70%高速化" },
      { label: "運用コスト", value: "35%削減" },
    ],
    duration: "15ヶ月",
    budget: "3.2億円",
  },
  {
    id: 4,
    title: "デジタル防災システム導入",
    client: "D町役場",
    category: "防災・安全",
    description: "リアルタイム災害情報システムと避難誘導アプリの開発により、地域の防災力を大幅に強化しました。",
    image: "/placeholder.svg?height=400&width=600",
    metrics: [
      { label: "情報伝達", value: "95%迅速化" },
      { label: "避難効率", value: "80%向上" },
      { label: "安全性", value: "大幅向上" },
    ],
    duration: "10ヶ月",
    budget: "1.5億円",
  },
]

export default function AegisLanding() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [footerOffset, setFooterOffset] = useState(0)
  const [currentService, setCurrentService] = useState(0)
  const [currentAbout, setCurrentAbout] = useState(0)
  const [currentProject, setCurrentProject] = useState(0)

  const aboutContent = [
    {
      id: 1,
      title: "私たちの使命",
      subtitle: "専門性で地域社会に貢献",
      description: "専門性を活かし、地方自治体の皆様と共に持続可能な未来を創造します。",
      image: "/placeholder.svg?height=600&width=1200",
      gradient: "bg-gradient-to-r from-black/60 via-black/40 to-transparent",
      bgText: "使命",
      bgTextPosition: "left-8",
      cardPosition: "left-12",
      buttonText: "詳細を見る",
      features: (
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-[#00bcd4] rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm">信</span>
            </div>
            <span className="text-[#333333] font-medium">信頼関係の構築</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-[#00bcd4] rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm">革</span>
            </div>
            <span className="text-[#333333] font-medium">革新的ソリューション</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-[#00bcd4] rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm">貢</span>
            </div>
            <span className="text-[#333333] font-medium">社会貢献</span>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "4つの専門部門で",
      subtitle: "トータルサポート",
      description: "各分野の専門家が連携し、包括的なサービスを提供します。",
      image: "/placeholder.svg?height=600&width=1200",
      gradient: "bg-gradient-to-l from-black/60 via-black/40 to-transparent",
      bgText: "組織",
      bgTextPosition: "right-8",
      cardPosition: "right-12",
      buttonText: "組織体制を見る",
      features: (
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="w-12 h-12 bg-[#004080] text-white rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="font-bold text-sm">代表</span>
            </div>
            <p className="text-xs text-[#333333] font-medium">代表理事</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-[#00bcd4] text-white rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="font-bold text-sm">技術</span>
            </div>
            <p className="text-xs text-[#333333] font-medium">技術統括</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-[#00bcd4] text-white rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="font-bold text-sm">営業</span>
            </div>
            <p className="text-xs text-[#333333] font-medium">営業統括</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-[#00bcd4] text-white rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="font-bold text-sm">管理</span>
            </div>
            <p className="text-xs text-[#333333] font-medium">管理部門</p>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "9社の連携で",
      subtitle: "トータルサポート",
      description: "企画から運用まで一貫したサービス提供を実現します。",
      image: "/placeholder.svg?height=600&width=1200",
      gradient: "bg-gradient-to-r from-black/60 via-black/40 to-transparent",
      bgText: "信頼",
      bgTextPosition: "left-8",
      cardPosition: "left-12",
      buttonText: "連携体制を見る",
      features: (
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-[#00bcd4] rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm">9</span>
            </div>
            <span className="text-[#333333] font-medium">パートナー企業との連携</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-[#00bcd4] rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm">全</span>
            </div>
            <span className="text-[#333333] font-medium">全国対応可能</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-[#00bcd4] rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm">一</span>
            </div>
            <span className="text-[#333333] font-medium">一貫したサービス提供</span>
          </div>
        </div>
      ),
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      // Header scroll effect
      setIsScrolled(scrollY > 10)

      // Footer reveal effect - only activate when very close to bottom
      const scrollFromBottom = documentHeight - scrollY - windowHeight
      const revealThreshold = 200 // Start revealing when 200px from absolute bottom

      if (scrollFromBottom <= revealThreshold && scrollFromBottom >= 0) {
        const revealProgress = Math.max(0, Math.min(1, (revealThreshold - scrollFromBottom) / revealThreshold))
        setFooterOffset(revealProgress * 100) // Move footer up by up to 100% of its height
      } else {
        setFooterOffset(0)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length)
    }, 5000) // Change every 5 seconds

    return () => clearInterval(interval)
  }, [services.length])

  // Auto-advance about carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAbout((prev) => (prev + 1) % aboutContent.length)
    }, 6000) // Change every 6 seconds

    return () => clearInterval(interval)
  }, [aboutContent.length])

  // Auto-advance project carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length)
    }, 7000) // Change every 7 seconds

    return () => clearInterval(interval)
  }, [projects.length])

  const nextService = () => {
    setCurrentService((prev) => (prev + 1) % services.length)
  }

  const prevService = () => {
    setCurrentService((prev) => (prev - 1 + services.length) % services.length)
  }

  const nextAbout = () => {
    setCurrentAbout((prev) => (prev + 1) % aboutContent.length)
  }

  const prevAbout = () => {
    setCurrentAbout((prev) => (prev - 1 + aboutContent.length) % aboutContent.length)
  }

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Integrated Header - FIXED */}
      <section className="relative min-h-screen flex flex-col overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800">
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Header - Always Fixed, Changes Appearance - OPTIMIZED */}
        <header
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
            isScrolled ? "bg-white shadow-lg py-4" : "bg-transparent py-6"
          }`}
        >
          <div className="w-full px-8">
            <div className="flex items-center justify-between">
              {/* Logo Section - Far Left */}
              <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-300 cursor-pointer">
                <div
                  className={`w-10 h-10 transition-all duration-300 ${
                    isScrolled ? "bg-[#004080]" : "bg-white/20 backdrop-blur-sm"
                  }`}
                >
                  <span className="w-full h-full flex items-center justify-center text-white font-bold text-lg">A</span>
                </div>
                <div>
                  <span
                    className={`text-lg font-bold transition-all duration-300 ${
                      isScrolled ? "text-[#004080]" : "text-white"
                    }`}
                  >
                    AEGIS
                  </span>
                </div>
                <div>
                  <span
                    className={`text-lg font-medium transition-all duration-300 ${
                      isScrolled ? "text-[#333333]" : "text-white"
                    }`}
                  >
                    エイジス有限責任事業組合
                  </span>
                </div>
              </Link>

              {/* Navigation - Far Right with Better Spacing */}
              <nav className="hidden lg:flex items-center">
                <div className="flex items-center space-x-8">
                  {/* <Link href="#partnership" className="group flex flex-col items-center text-center">
                    <span
                      className={`text-sm font-medium mb-1 transition-all duration-300 ${
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
                  </Link> */}

                  <Link href="/about" className="group flex flex-col items-center text-center">
                    <span
                      className={`text-sm font-medium mb-1 transition-all duration-300 ${
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

                  <Link href="/projects" className="group flex flex-col items-center text-center">
                    <span
                      className={`text-sm font-medium mb-1 transition-all duration-300 ${
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

                  <Link href="/services" className="group flex flex-col items-center text-center">
                    <span
                      className={`text-sm font-medium mb-1 transition-all duration-300 ${
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

                  <Link href="/careers" className="group flex flex-col items-center text-center">
                    <span
                      className={`text-sm font-medium mb-1 transition-all duration-300 ${
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

                  <Link href="/contact" className="group flex flex-col items-center text-center">
                    <span
                      className={`text-sm font-medium mb-1 transition-all duration-300 ${
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
                  className={`mt-4 h-px transition-all duration-300 ${isScrolled ? "bg-gray-200" : "bg-white/20"}`}
                ></div>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200/50">
              <div className="px-8 py-6 space-y-4">
                <Link href="#partnership" className="block py-2 text-[#333333] hover:text-[#004080]">
                  <div className="text-sm font-medium mb-1">パートナーシップ</div>
                  <div className="text-xs text-[#00bcd4]">Partnership</div>
                </Link>
                <Link href="#services" className="block py-2 text-[#333333] hover:text-[#004080]">
                  <div className="text-sm font-medium mb-1">サービス内容</div>
                  <div className="text-xs text-[#00bcd4]">Services</div>
                </Link>
                <Link href="#projects" className="block py-2 text-[#333333] hover:text-[#004080]">
                  <div className="text-sm font-medium mb-1">実績紹介</div>
                  <div className="text-xs text-[#00bcd4]">Projects</div>
                </Link>
                <Link href="#solutions" className="block py-2 text-[#333333] hover:text-[#004080]">
                  <div className="text-sm font-medium mb-1">ソリューション</div>
                  <div className="text-xs text-[#00bcd4]">Solutions</div>
                </Link>
                <Link href="#about" className="block py-2 text-[#333333] hover:text-[#004080]">
                  <div className="text-sm font-medium mb-1">会社概要</div>
                  <div className="text-xs text-[#00bcd4]">About</div>
                </Link>
                <Link href="#contact" className="block py-2 text-[#333333] hover:text-[#004080]">
                  <div className="text-sm font-medium mb-1">お問い合わせ</div>
                  <div className="text-xs text-[#00bcd4]">Contact</div>
                </Link>
              </div>
            </div>
          )}
        </header>

        {/* Hero Content - FIXED for proper button visibility */}
        <div className="flex-1 flex items-center justify-center relative z-10 px-8 pt-24 pb-16">
          <div className="text-center text-white max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block mb-4">専門性を以て地域社会に貢献する。</span>
              <span className="block text-[#00bcd4]">常にパートナーシップを大切にする。</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 opacity-90 leading-relaxed">
              AEGIS有限責任事業組合は、地方自治体の皆様と共に
              <br />
              持続可能な未来を創造するパートナーです。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="bg-[#004080] hover:bg-[#003366] text-white px-8 py-3 text-lg font-medium rounded-none transition-all duration-300 hover:shadow-xl">
                サービス詳細
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#004080] px-8 py-3 text-lg font-medium rounded-none bg-transparent transition-all duration-300"
              >
                資料請求
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Greeting Section - Expanded */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-12">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="w-24 h-1 bg-[#004080] mx-auto mb-8"></div>
            <h2 className="text-6xl font-bold text-[#00bcd4] mb-4">Greeting</h2>
            <p className="text-lg text-[#333333] font-medium">代表挨拶</p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-16">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="代表理事 田中 太郎"
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
                {/* Professional overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-lg"></div>

                {/* Name plate */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                  <h4 className="font-bold text-[#333333] text-lg">田中 太郎</h4>
                  <p className="text-sm text-[#00bcd4] font-medium">代表理事 / Representative Director</p>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="order-1 lg:order-2">
              <div className="space-y-6 text-[#333333] leading-relaxed">
                <p className="text-lg font-medium">
                  日頃よりAEGIS有限責任事業組合をご愛顧いただき誠にありがとうございます。
                </p>
                <p>
                  弊組合は2024年の設立以来、地方自治体との連携を通じて培った経験を生かしつつ、「社会と共に歩み、社会に必要とされる価値を創出する」という考えにもとづき幅広く事業を展開するとともに、全国各地を拠点にお客様からの信頼と実績を築いてまいりました。
                </p>
                <p>
                  私たちは、地方自治体が直面する様々な課題に対して、最新のテクノロジーと豊富な経験を組み合わせた革新的なソリューションを提供しています。デジタル化の推進、業務効率化、住民サービスの向上など、多岐にわたる分野でお客様のパートナーとして貢献させていただいております。
                </p>
                <p>
                  これもひとえにお取引いただいた皆様をはじめ、関係者様のご愛顧とご支援のおかげと心より厚く御礼申し上げます。今後とも、地域社会の発展と住民の皆様の幸福実現に向けて、より一層の努力を重ねてまいります。
                </p>
                <p className="font-medium">今後とも変わらぬご支援を賜りますよう、よろしくお願い申し上げます。</p>
                <div className="pt-4">
                  <p className="text-right font-medium">AEGIS有限責任事業組合</p>
                  <p className="text-right font-bold text-lg">代表理事　田中 太郎</p>
                </div>
              </div>
            </div>
          </div>

          {/* About Us Section - Combined Mission & Organization with Carousel */}
          {/* CTA Section 1 - After Greeting */}
          <section className="py-20 bg-gradient-to-r from-[#004080] to-[#00bcd4]">
            <div className="max-w-4xl mx-auto px-12 text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">地方自治体の課題解決をお手伝いします</h3>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                専門性を活かした最適なソリューションで、地域社会の発展に貢献いたします。 まずはお気軽にご相談ください。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-[#004080] hover:bg-gray-100 px-8 py-4 text-lg font-medium rounded-none transition-all duration-300 hover:shadow-xl">
                  無料相談を申し込む
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#004080] px-8 py-4 text-lg font-medium rounded-none bg-transparent transition-all duration-300"
                >
                  サービス資料をダウンロード
                </Button>
              </div>
            </div>
          </section>

          <section className="py-32 bg-gray-50">
            <div className="max-w-7xl mx-auto px-12">
              {/* Section Header */}
              <div className="text-center mb-20">
                <div className="w-24 h-1 bg-[#004080] mx-auto mb-8"></div>
                <h2 className="text-6xl font-bold text-[#00bcd4] mb-4">About Us</h2>
                <p className="text-lg text-[#333333] font-medium">私たちについて</p>
              </div>

              {/* Carousel Container */}
              <div className="relative">
                <div className="overflow-hidden">
                  <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentAbout * 100}%)` }}
                  >
                    {aboutContent.map((content, index) => (
                      <div key={content.id} className="w-full flex-shrink-0">
                        <div className="relative h-[600px] rounded-lg overflow-hidden shadow-2xl">
                          {/* Background Image */}
                          <div className="absolute inset-0">
                            <img
                              src={content.image || "/placeholder.svg"}
                              alt={content.title}
                              className="w-full h-full object-cover"
                            />
                            <div className={`absolute inset-0 ${content.gradient}`}></div>
                          </div>

                          {/* Large Background Text */}
                          <div className={`absolute ${content.bgTextPosition} top-1/2 -translate-y-1/2`}>
                            <h2 className="text-9xl font-black text-white/10 leading-none">{content.bgText}</h2>
                          </div>

                          {/* Content Card */}
                          <div
                            className={`absolute ${content.cardPosition} top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm rounded-lg p-8 max-w-lg shadow-xl`}
                          >
                            <h3 className="text-3xl font-bold text-[#004080] mb-4">{content.title}</h3>
                            <h4 className="text-2xl font-bold text-[#333333] mb-6">{content.subtitle}</h4>
                            <p className="text-lg text-[#333333] leading-relaxed mb-6">{content.description}</p>

                            {/* Dynamic Content */}
                            <div className="mb-6">{content.features}</div>

                            <Button className="bg-[#004080] hover:bg-[#003366] text-white px-6 py-3 text-sm font-medium rounded-none transition-all duration-300 hover:shadow-xl w-fit">
                              {content.buttonText}
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevAbout}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
                >
                  <ChevronLeft className="w-6 h-6 text-[#004080]" />
                </button>
                <button
                  onClick={nextAbout}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
                >
                  <ChevronRight className="w-6 h-6 text-[#004080]" />
                </button>

                {/* Dots Indicator */}
                <div className="flex justify-center mt-8 space-x-3">
                  {aboutContent.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentAbout(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentAbout ? "bg-[#00bcd4] scale-125" : "bg-gray-300 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Philosophy Section - Updated with Timeline Format */}
          <section className="py-32 bg-gray-50">
            <div className="max-w-7xl mx-auto px-12">
              {/* Section Header */}
              <div className="text-center mb-20">
                <div className="w-24 h-1 bg-[#004080] mx-auto mb-8"></div>
                <h2 className="text-6xl font-bold text-[#00bcd4] mb-4">Philosophy</h2>
                <p className="text-lg text-[#333333] font-medium">企業理念</p>
              </div>

              {/* Main Philosophy */}
              <div className="text-center mb-20">
                <h3 className="text-4xl font-bold text-[#004080] mb-8">社会と共に歩み価値を創出する</h3>
                <p className="text-lg text-[#333333] max-w-4xl mx-auto leading-relaxed">
                  私たちは、地方自治体の皆様と共に歩み、社会に真に必要とされる価値を創出することを使命としています。
                  技術革新と人間性を両立させ、持続可能な社会の実現に向けて貢献してまいります。
                </p>
              </div>

              {/* Philosophy Timeline */}
              <div className="max-w-5xl mx-auto space-y-8">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div className="text-right">
                    <h4 className="text-xl font-bold text-[#333333]">経営理念</h4>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-full h-px bg-[#004080]"></div>
                  </div>
                  <div>
                    <p className="text-lg text-[#333333] font-medium mb-2">
                      全従業員が企業理念の基に団結し、顧客・協力会社・取引先と誠心誠意をもって寄り添う
                    </p>
                    <p className="text-[#333333]">「物心両面での幸福」を目指します</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div className="text-right">
                    <h4 className="text-xl font-bold text-[#333333]">行動規範</h4>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-full h-px bg-[#004080]"></div>
                  </div>
                  <div>
                    <p className="text-lg text-[#333333] font-medium mb-2">最善を最速で</p>
                    <p className="text-[#333333]">常に最高品質のサービスを迅速に提供します</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div className="text-right">
                    <h4 className="text-xl font-bold text-[#333333]">コミュニケーション</h4>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-full h-px bg-[#004080]"></div>
                  </div>
                  <div>
                    <p className="text-lg text-[#333333] font-medium mb-2">コミュニケーションを重ね、信頼関係構築</p>
                    <p className="text-[#333333]">透明性のある対話を通じて強固な信頼関係を築きます</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div className="text-right">
                    <h4 className="text-xl font-bold text-[#333333]">品質向上</h4>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-full h-px bg-[#004080]"></div>
                  </div>
                  <div>
                    <p className="text-lg text-[#333333] font-medium mb-2">期待値を超えていく</p>
                    <p className="text-[#333333]">お客様の期待を上回る価値提供を追求します</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div className="text-right">
                    <h4 className="text-xl font-bold text-[#333333]">継続的改善</h4>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-full h-px bg-[#004080]"></div>
                  </div>
                  <div>
                    <p className="text-lg text-[#333333] font-medium mb-2">学習と成長を継続する</p>
                    <p className="text-[#333333]">常に学び続け、組織として成長し続けます</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div className="text-right">
                    <h4 className="text-xl font-bold text-[#333333]">社会責任</h4>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-full h-px bg-[#004080]"></div>
                  </div>
                  <div>
                    <p className="text-lg text-[#333333] font-medium mb-2">地域社会への貢献</p>
                    <p className="text-[#333333]">地域の発展と住民の幸福実現に積極的に貢献します</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section - Carousel Design */}
          <section id="services" className="py-32 bg-white">
            <div className="max-w-7xl mx-auto px-12">
              {/* Section Header */}
              <div className="text-center mb-20">
                <div className="w-24 h-1 bg-[#004080] mx-auto mb-8"></div>
                <h2 className="text-6xl font-bold text-[#00bcd4] mb-4">Services</h2>
                <p className="text-lg text-[#333333] font-medium">サービス内容</p>
              </div>

              {/* Carousel Container */}
              <div className="relative max-w-6xl mx-auto">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentService * 100}%)` }}
                  >
                    {services.map((service, index) => (
                      <div key={service.id} className="w-full flex-shrink-0">
                        <div className="bg-white">
                          <div className="grid lg:grid-cols-2 gap-0">
                            {/* Image */}
                            <div className="relative h-96 lg:h-auto">
                              <img
                                src={service.image || "/placeholder.svg"}
                                alt={service.title}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>

                              {/* Service Number Badge */}
                              <div className="absolute top-6 left-6">
                                <div className="w-16 h-16 bg-[#00bcd4] rounded-full flex items-center justify-center">
                                  <span className="text-white font-bold text-xl">{service.id}</span>
                                </div>
                              </div>
                            </div>

                            {/* Content */}
                            <div className="p-12 flex flex-col justify-center">
                              <h3 className="text-3xl font-bold text-[#004080] mb-6">{service.title}</h3>
                              <p className="text-lg text-[#333333] leading-relaxed mb-8">{service.description}</p>
                              <Button className="bg-[#004080] hover:bg-[#003366] text-white px-8 py-3 text-lg font-medium rounded-none transition-all duration-300 hover:shadow-xl w-fit">
                                詳細を見る
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevService}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <ChevronLeft className="w-6 h-6 text-[#004080]" />
                </button>
                <button
                  onClick={nextService}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <ChevronRight className="w-6 h-6 text-[#004080]" />
                </button>

                {/* Dots Indicator */}
                <div className="flex justify-center mt-8 space-x-3">
                  {services.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentService(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentService ? "bg-[#00bcd4] scale-125" : "bg-gray-300 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section - Showcase */}
          <section id="projects" className="py-32 bg-gray-50">
            <div className="max-w-7xl mx-auto px-12">
              {/* Section Header */}
              <div className="text-center mb-20">
                <div className="w-24 h-1 bg-[#004080] mx-auto mb-8"></div>
                <h2 className="text-6xl font-bold text-[#00bcd4] mb-4">Projects</h2>
                <p className="text-lg text-[#333333] font-medium">実績紹介</p>
              </div>

              {/* Projects Carousel */}
              <div className="relative max-w-6xl mx-auto">
                <div className="overflow-hidden rounded-lg shadow-2xl">
                  <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentProject * 100}%)` }}
                  >
                    {projects.map((project, index) => (
                      <div key={project.id} className="w-full flex-shrink-0">
                        <div className="bg-white">
                          <div className="grid lg:grid-cols-5 gap-0">
                            {/* Image */}
                            <div className="lg:col-span-2 relative h-96 lg:h-auto">
                              <img
                                src={project.image || "/placeholder.svg"}
                                alt={project.title}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>

                              {/* Category Badge */}
                              <div className="absolute top-6 left-6">
                                <div className="bg-[#00bcd4] text-white px-4 py-2 text-sm font-medium">
                                  {project.category}
                                </div>
                              </div>

                              {/* Project Number */}
                              <div className="absolute bottom-6 right-6">
                                <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                                  <span className="text-[#004080] font-bold text-xl">{project.id}</span>
                                </div>
                              </div>
                            </div>

                            {/* Content */}
                            <div className="lg:col-span-3 p-12 flex flex-col justify-center">
                              <div className="mb-4">
                                <span className="text-[#00bcd4] font-medium text-sm">{project.client}</span>
                              </div>
                              <h3 className="text-3xl font-bold text-[#004080] mb-6">{project.title}</h3>
                              <p className="text-lg text-[#333333] leading-relaxed mb-8">{project.description}</p>

                              {/* Metrics Grid */}
                              <div className="grid grid-cols-3 gap-6 mb-8">
                                {project.metrics.map((metric, idx) => (
                                  <div key={idx} className="text-center">
                                    <div className="text-2xl font-bold text-[#00bcd4] mb-1">{metric.value}</div>
                                    <div className="text-sm text-[#333333] font-medium">{metric.label}</div>
                                  </div>
                                ))}
                              </div>

                              {/* Project Details */}
                              <div className="flex items-center space-x-8 mb-8 text-sm text-[#666666]">
                                <div>
                                  <span className="font-medium">期間: </span>
                                  <span>{project.duration}</span>
                                </div>
                                <div>
                                  <span className="font-medium">予算: </span>
                                  <span>{project.budget}</span>
                                </div>
                              </div>

                              <Button className="bg-[#004080] hover:bg-[#003366] text-white px-8 py-3 text-lg font-medium rounded-none transition-all duration-300 hover:shadow-xl w-fit">
                                詳細事例を見る
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevProject}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
                >
                  <ChevronLeft className="w-6 h-6 text-[#004080]" />
                </button>
                <button
                  onClick={nextProject}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
                >
                  <ChevronRight className="w-6 h-6 text-[#004080]" />
                </button>

                {/* Dots Indicator */}
                <div className="flex justify-center mt-8 space-x-3">
                  {projects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentProject(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentProject ? "bg-[#00bcd4] scale-125" : "bg-gray-300 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* History Section */}
          <section className="py-32 bg-white">
            <div className="max-w-7xl mx-auto px-12">
              {/* Section Header */}
              <div className="text-center mb-20">
                <div className="w-24 h-1 bg-[#004080] mx-auto mb-8"></div>
                <h2 className="text-6xl font-bold text-[#00bcd4] mb-4">History</h2>
                <p className="text-lg text-[#333333] font-medium">沿革</p>
              </div>

              {/* History Grid Table */}
              <div className="max-w-5xl mx-auto">
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                  <div className="grid grid-cols-1">
                    <div className="grid grid-cols-3">
                      <div className="bg-slate-600 text-white p-6 font-medium">2024年4月</div>
                      <div className="col-span-2 p-6 text-[#333333] border-b border-gray-200">
                        AEGIS有限責任事業組合設立
                      </div>
                    </div>
                    <div className="grid grid-cols-3">
                      <div className="bg-slate-600 text-white p-6 font-medium">2024年5月</div>
                      <div className="col-span-2 p-6 text-[#333333] border-b border-gray-200">
                        地方自治体向けサービス開始
                      </div>
                    </div>
                    <div className="grid grid-cols-3">
                      <div className="bg-slate-600 text-white p-6 font-medium">2024年6月</div>
                      <div className="col-span-2 p-6 text-[#333333] border-b border-gray-200">関西支社を大阪に開設</div>
                    </div>
                    <div className="grid grid-cols-3">
                      <div className="bg-slate-600 text-white p-6 font-medium">2024年7月</div>
                      <div className="col-span-2 p-6 text-[#333333] border-b border-gray-200">
                        出資金を1,000万円とし、デジタル変革コンサルティング事業開始
                      </div>
                    </div>
                    <div className="grid grid-cols-3">
                      <div className="bg-slate-600 text-white p-6 font-medium">2024年8月</div>
                      <div className="col-span-2 p-6 text-[#333333] border-b border-gray-200">
                        コンサルティング事業部を横浜に開設
                      </div>
                    </div>
                    <div className="grid grid-cols-3">
                      <div className="bg-slate-600 text-white p-6 font-medium">2024年9月</div>
                      <div className="col-span-2 p-6 text-[#333333] border-b border-gray-200">
                        AI・IoT技術導入支援サービス開始
                      </div>
                    </div>
                    <div className="grid grid-cols-3">
                      <div className="bg-slate-600 text-white p-6 font-medium">2024年10月</div>
                      <div className="col-span-2 p-6 text-[#333333] border-b border-gray-200">
                        出資金を2,000万円に増資
                      </div>
                    </div>
                    <div className="grid grid-cols-3">
                      <div className="bg-slate-600 text-white p-6 font-medium">2024年11月</div>
                      <div className="col-span-2 p-6 text-[#333333]">デジタルソリューション事業部を名古屋に開設</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Company Profile Section - Paper Style Design */}
          <section className="py-32 bg-white">
            <div className="max-w-7xl mx-auto px-12">
              {/* Section Header */}
              <div className="text-center mb-20">
                <div className="w-24 h-1 bg-[#004080] mx-auto mb-8"></div>
                <h2 className="text-6xl font-bold text-[#00bcd4] mb-4">Company Profile</h2>
                <p className="text-lg text-[#333333] font-medium">会社概要</p>
              </div>
              {/* Paper-style Company Info with restored borders */}
              <div className="max-w-5xl mx-auto mb-16">
                <div className="relative">
                  {/* Paper background with zigzag edges */}
                  <div
                    className="bg-white shadow-2xl relative overflow-hidden"
                    style={{
                      clipPath:
                        "polygon(0% 3%, 2% 0%, 4% 2%, 6% 0%, 8% 3%, 10% 1%, 12% 4%, 14% 0%, 16% 2%, 18% 0%, 20% 3%, 22% 1%, 24% 4%, 26% 0%, 28% 2%, 30% 0%, 32% 3%, 34% 1%, 36% 4%, 38% 0%, 40% 2%, 42% 0%, 44% 3%, 46% 1%, 48% 4%, 50% 0%, 52% 2%, 54% 0%, 56% 3%, 58% 1%, 60% 4%, 62% 0%, 64% 2%, 66% 0%, 68% 3%, 70% 1%, 72% 4%, 74% 0%, 76% 2%, 78% 0%, 80% 3%, 82% 1%, 84% 4%, 86% 0%, 88% 2%, 90% 0%, 92% 3%, 94% 1%, 96% 4%, 98% 0%, 100% 2%, 100% 97%, 98% 100%, 96% 98%, 94% 100%, 92% 97%, 90% 100%, 88% 98%, 86% 100%, 84% 97%, 82% 100%, 80% 98%, 78% 100%, 76% 97%, 74% 100%, 72% 98%, 70% 100%, 68% 97%, 66% 100%, 64% 98%, 62% 100%, 60% 97%, 58% 100%, 56% 98%, 54% 100%, 52% 97%, 50% 100%, 48% 98%, 46% 100%, 44% 97%, 42% 100%, 40% 98%, 38% 100%, 36% 97%, 34% 100%, 32% 98%, 30% 100%, 28% 97%, 26% 100%, 24% 98%, 22% 100%, 20% 97%, 18% 100%, 16% 98%, 14% 100%, 12% 97%, 10% 100%, 8% 98%, 6% 100%, 4% 97%, 2% 100%, 0% 98%)",
                    }}
                  >
                    {/* Content inside the paper */}
                    <div className="p-16">
                      {/* Company Title */}
                      <div className="text-center mb-12">
                        <h3 className="text-4xl font-bold text-[#333333] mb-4">AEGIS有限責任事業組合</h3>
                        <p className="text-lg text-[#666666] font-medium">エイジス - 地方自治体のパートナー</p>
                      </div>
                      {/* Company Info Grid */}
                      <div className="grid md:grid-cols-2 gap-12 text-[#333333]">
                        {/* Left Column */}
                        <div className="space-y-8">
                          <div>
                            <h4 className="font-bold text-[#333333] mb-3 text-lg border-b border-gray-300 pb-2">
                              組合名
                            </h4>
                            <p className="leading-relaxed">AEGIS有限責任事業組合（エイジス）</p>
                          </div>
                          <div>
                            <h4 className="font-bold text-[#333333] mb-3 text-lg border-b border-gray-300 pb-2">
                              設立
                            </h4>
                            <p className="leading-relaxed">
                              2024年4月 有限責任事業組合として設立
                              <br />
                              2024年6月 事業開始
                            </p>
                          </div>
                          <div>
                            <h4 className="font-bold text-[#333333] mb-3 text-lg border-b border-gray-300 pb-2">
                              出資金
                            </h4>
                            <p className="leading-relaxed">2,000万円</p>
                          </div>
                        </div>
                        {/* Right Column */}
                        <div className="space-y-8">
                          <div>
                            <h4 className="font-bold text-[#333333] mb-3 text-lg border-b border-gray-300 pb-2">
                              代表者
                            </h4>
                            <p className="leading-relaxed">代表理事　田中 太郎</p>
                          </div>
                          <div>
                            <h4 className="font-bold text-[#333333] mb-3 text-lg border-b border-gray-300 pb-2">
                              事業内容
                            </h4>
                            <div className="leading-relaxed space-y-2">
                              <p>• 地方自治体向けデジタル変革支援</p>
                              <p>• AI・IoT技術導入コンサルティング</p>
                              <p>• システム開発・運用保守</p>
                              <p>• 職員研修・教育プログラム提供</p>
                            </div>
                          </div>
                          <div>
                            <h4 className="font-bold text-[#333333] mb-3 text-lg border-b border-gray-300 pb-2">
                              従業員数
                            </h4>
                            <p className="leading-relaxed">25名（2024年12月現在）</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </section>
          {/* Footer Section - Normal Layout */}
     

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
    </div>
  )
}
