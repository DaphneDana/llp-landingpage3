"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ArrowRight, Settings, Zap, Shield, Users, CheckCircle, Star, Play } from "lucide-react"
import Link from "next/link"

const services = [
  {
    id: 1,
    title: "デジタル変革支援",
    subtitle: "Digital Transformation",
    description: "地方自治体のデジタル化を包括的に支援し、効率的な業務運営と住民サービスの向上を実現します。",
    detailedDescription:
      "従来の紙ベースの業務プロセスをデジタル化し、職員の業務効率向上と住民の利便性向上を同時に実現します。既存システムとの統合を考慮した段階的な移行により、業務継続性を保ちながらスムーズなデジタル化を支援いたします。",
    image: "/placeholder.svg?height=400&width=600",
    videoThumbnail: "/placeholder.svg?height=300&width=400&text=Digital+Transformation+Video",
    icon: Settings,
    color: "from-[#00bcd4] to-[#0099aa]",
    features: [
      "業務プロセスのデジタル化",
      "既存システムとの統合",
      "職員向け研修・サポート",
      "段階的移行計画の策定",
      "効果測定・改善提案",
    ],
    benefits: ["業務効率50%向上", "処理時間60%短縮", "ペーパーレス化推進", "コスト削減30%", "住民満足度向上"],
    process: [
      "現状分析・課題抽出",
      "デジタル化計画策定",
      "システム設計・開発",
      "段階的導入・移行",
      "運用サポート・改善",
    ],
    caseStudies: [
      {
        client: "A市役所",
        title: "窓口業務デジタル化",
        result: "待ち時間50%削減、職員負担30%軽減",
      },
      {
        client: "B県庁",
        title: "文書管理システム導入",
        result: "検索時間90%短縮、保管コスト40%削減",
      },
    ],
  },
  {
    id: 2,
    title: "AI・IoT技術導入",
    subtitle: "AI & IoT Implementation",
    description: "最新のAI・IoT技術を活用し、地方自治体の課題解決と業務効率化を実現します。",
    detailedDescription:
      "人工知能とIoTセンサーを組み合わせたスマートな自治体運営を支援します。データ収集から分析、予測まで一貫したソリューションにより、先進的な行政サービスの提供を可能にします。",
    image: "/placeholder.svg?height=400&width=600",
    videoThumbnail: "/placeholder.svg?height=300&width=400&text=AI+IoT+Implementation+Video",
    icon: Zap,
    color: "from-slate-500 to-slate-600",
    features: [
      "AIチャットボット導入",
      "IoTセンサーネットワーク構築",
      "予測分析システム開発",
      "自動化ワークフロー構築",
      "データ活用基盤整備",
    ],
    benefits: ["24時間自動対応", "予測精度95%以上", "人的コスト40%削減", "リアルタイム監視", "データドリブン意思決定"],
    process: ["技術要件定義", "AI・IoTシステム設計", "プロトタイプ開発", "本格導入・調整", "継続的学習・改善"],
    caseStudies: [
      {
        client: "C市役所",
        title: "AIチャットボット導入",
        result: "問い合わせ対応60%自動化、満足度85%向上",
      },
      {
        client: "D町役場",
        title: "IoT防災システム",
        result: "災害対応時間50%短縮、住民安全性向上",
      },
    ],
  },
  {
    id: 3,
    title: "システム開発・運用保守",
    subtitle: "System Development & Maintenance",
    description: "地方自治体に最適なシステムを設計・開発し、安定した運用をサポートします。",
    detailedDescription:
      "自治体の特性と要件に合わせたカスタムシステムの開発から、既存システムの改修、24時間365日の運用保守まで、システムライフサイクル全体をサポートします。",
    image: "/placeholder.svg?height=400&width=600",
    videoThumbnail: "/placeholder.svg?height=300&width=400&text=System+Development+Video",
    icon: Shield,
    color: "from-[#00bcd4] to-slate-500",
    features: [
      "カスタムシステム開発",
      "既存システム改修・統合",
      "24時間運用監視",
      "定期メンテナンス",
      "セキュリティ対策強化",
    ],
    benefits: ["システム稼働率99.9%", "セキュリティ強化", "運用コスト最適化", "迅速な障害対応", "継続的改善"],
    process: ["要件定義・設計", "開発・テスト", "導入・移行支援", "運用開始・監視", "保守・改善対応"],
    caseStudies: [
      {
        client: "E市役所",
        title: "統合基幹システム開発",
        result: "業務効率50%向上、データ連携100%実現",
      },
      {
        client: "F県庁",
        title: "システム運用保守",
        result: "稼働率99.9%維持、障害対応時間80%短縮",
      },
    ],
  },
  {
    id: 4,
    title: "コンサルティング・研修",
    subtitle: "Consulting & Training",
    description: "専門知識を活かしたコンサルティングと職員研修により、組織全体のデジタル化を支援します。",
    detailedDescription:
      "デジタル変革の戦略策定から実行まで、経験豊富なコンサルタントがサポート。また、職員のITスキル向上のための体系的な研修プログラムを提供し、組織全体のデジタルリテラシー向上を図ります。",
    image: "/placeholder.svg?height=400&width=600",
    videoThumbnail: "/placeholder.svg?height=300&width=400&text=Consulting+Training+Video",
    icon: Users,
    color: "from-slate-600 to-[#00bcd4]",
    features: [
      "デジタル戦略策定支援",
      "業務改善コンサルティング",
      "職員向けIT研修",
      "変革管理サポート",
      "成果測定・評価",
    ],
    benefits: ["戦略的デジタル化", "職員スキル向上", "組織変革促進", "継続的改善文化", "ROI最大化"],
    process: ["現状診断・課題分析", "戦略・計画策定", "研修プログラム実施", "変革実行支援", "効果測定・改善"],
    caseStudies: [
      {
        client: "G市役所",
        title: "デジタル戦略策定",
        result: "3年計画で業務効率40%向上目標達成",
      },
      {
        client: "H県庁",
        title: "職員IT研修",
        result: "ITスキル平均60%向上、業務効率25%改善",
      },
    ],
  },
]

const processSteps = [
  {
    step: "01",
    title: "ヒアリング・現状分析",
    description: "お客様の現状と課題を詳しくお聞きし、最適なソリューションを検討します。",
  },
  {
    step: "02",
    title: "提案・計画策定",
    description: "分析結果をもとに、具体的な解決策と実行計画をご提案いたします。",
  },
  {
    step: "03",
    title: "開発・導入",
    description: "承認いただいた計画に基づき、システム開発・導入を実施します。",
  },
  {
    step: "04",
    title: "運用・サポート",
    description: "導入後も継続的なサポートと改善提案で、長期的な成功を支援します。",
  },
]

export default function ServicesPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState<"overview" | "features" | "process" | "cases">("overview")
  const [visibleCards, setVisibleCards] = useState<number[]>([])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Intersection Observer for card animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = Number.parseInt(entry.target.getAttribute("data-card-id") || "0")
            setVisibleCards((prev) => [...prev, cardId])
          }
        })
      },
      { threshold: 0.1 },
    )

    const cards = document.querySelectorAll("[data-card-id]")
    cards.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

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

      {/* Creative Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Floating geometric shapes */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#00bcd4]/10 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gray-400/10 transform rotate-45 animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-[#00bcd4]/10 transform rotate-12 animate-spin"></div>
          <div className="absolute bottom-40 right-1/3 w-20 h-20 bg-gray-400/10 rounded-full animate-pulse"></div>

          {/* Animated grid pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="grid grid-cols-12 gap-4 h-full animate-pulse">
              {Array.from({ length: 48 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-[#00bcd4] rounded-full w-2 h-2"
                  style={{
                    animationDelay: `${i * 0.1}s`,
                    animation: `pulse 2s infinite ${i * 0.1}s`,
                  }}
                ></div>
              ))}
            </div>
          </div>

          {/* Floating particles */}
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#00bcd4]/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-12 relative z-10">
          <div className="text-center text-white">
            {/* Animated title entrance */}
            <div className="inline-flex items-center space-x-4 mb-8 animate-fade-in-up">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm flex items-center justify-center animate-spin-slow">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <div className="text-left">
                <h1 className="text-5xl md:text-6xl font-bold mb-2 animate-slide-in-right">サービス内容</h1>
                <p className="text-xl text-[#00bcd4] animate-slide-in-left">専門的なソリューション</p>
              </div>
            </div>

            <p className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed max-w-4xl mx-auto animate-fade-in-up animation-delay-300">
              地方自治体の課題解決に特化した4つの専門サービスで
              <br />
              デジタル変革と業務効率化を包括的にサポートします。
            </p>

            {/* Interactive Service Categories with hover animations */}
            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {services.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <div
                    key={service.id}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-500 cursor-pointer transform hover:scale-105 hover:rotate-1 animate-fade-in-up group"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="relative">
                      <IconComponent className="w-8 h-8 text-[#00bcd4] mx-auto mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                      <div className="absolute -inset-2 bg-[#00bcd4]/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping"></div>
                    </div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-[#00bcd4] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                      {service.subtitle}
                    </p>
                  </div>
                )
              })}
            </div>

            {/* Animated CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 animate-fade-in-up animation-delay-600">
              <Button className="bg-[#00bcd4] hover:bg-[#0099aa] text-white px-8 py-4 text-lg font-medium rounded-none transition-all duration-300 hover:shadow-xl hover:scale-105 transform">
                サービス詳細を見る
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-700 px-8 py-4 text-lg font-medium rounded-none bg-transparent transition-all duration-300 hover:scale-105 transform"
              >
                無料相談を申し込む
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services with Video Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-12">
          <div className="space-y-16">
            {services.map((service, index) => {
              const IconComponent = service.icon
              const isVisible = visibleCards.includes(service.id)
              const isEven = index % 2 === 0

              return (
                <div
                  key={service.id}
                  data-card-id={service.id}
                  className={`transform transition-all duration-1000 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 0.2}s` }}
                >
                  <div className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? "" : "lg:grid-flow-col-dense"}`}>
                    {/* Video/Image Section */}
                    <div className={`${isEven ? "lg:order-1" : "lg:order-2"} relative group`}>
                      <div className="relative overflow-hidden rounded-xl shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-1">
                        <img
                          src={service.videoThumbnail || "/placeholder.svg"}
                          alt={`${service.title} video`}
                          className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                        {/* Play button overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer transform transition-all duration-300 hover:scale-110 hover:bg-white/30 group-hover:animate-pulse">
                            <Play className="w-8 h-8 text-white ml-1" />
                          </div>
                        </div>

                        {/* Service number badge */}
                        <div className="absolute top-4 right-4">
                          <div className="w-12 h-12 bg-[#00bcd4] rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:rotate-180">
                            <span className="text-white font-bold text-lg">{String(service.id).padStart(2, "0")}</span>
                          </div>
                        </div>

                        {/* Animated border */}
                        <div className="absolute inset-0 border-4 border-transparent group-hover:border-[#00bcd4] transition-all duration-500 rounded-xl"></div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className={`${isEven ? "lg:order-2" : "lg:order-1"} space-y-6`}>
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-12 h-12 bg-[#00bcd4]/10 rounded-full flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-[#00bcd4]" />
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-[#333333] mb-1">{service.title}</h3>
                          <p className="text-[#00bcd4] font-medium">{service.subtitle}</p>
                        </div>
                      </div>

                      <p className="text-lg text-[#666666] leading-relaxed">{service.description}</p>

                      {/* Key Features with animations */}
                      <div className="space-y-3">
                        <h4 className="text-lg font-bold text-[#333333]">主要機能</h4>
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center transform transition-all duration-300 hover:translate-x-2"
                            style={{ animationDelay: `${idx * 0.1}s` }}
                          >
                            <div className="w-2 h-2 bg-[#00bcd4] rounded-full mr-4 animate-pulse"></div>
                            <span className="text-[#666666] hover:text-[#333333] transition-colors duration-300">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Benefits with hover effects */}
                      <div className="grid grid-cols-2 gap-3">
                        {service.benefits.slice(0, 4).map((benefit, idx) => (
                          <div
                            key={idx}
                            className="text-center bg-gray-50 rounded-lg p-3 hover:bg-[#00bcd4]/10 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                          >
                            <div className="text-sm font-bold text-[#00bcd4]">{benefit}</div>
                          </div>
                        ))}
                      </div>

                      <div className="flex space-x-4">
                        <Button
                          onClick={() => setSelectedService(service.id)}
                          className="bg-[#00bcd4] hover:bg-[#0099aa] text-white px-6 py-3 text-sm font-medium rounded-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                        >
                          詳細を見る
                          <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                        </Button>
                        <Button
                          variant="outline"
                          className="border-2 border-[#00bcd4] text-[#00bcd4] hover:bg-[#00bcd4] hover:text-white px-6 py-3 text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105 bg-transparent"
                        >
                          動画を見る
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Animated Service Process */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Background animation */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-4 h-4 bg-[#00bcd4] rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `float ${4 + Math.random() * 3}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              ></div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-12 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="w-24 h-1 bg-[#00bcd4] mx-auto mb-8 animate-expand"></div>
            <h2 className="text-4xl font-bold text-[#333333] mb-4">サービス提供プロセス</h2>
            <p className="text-lg text-[#666666]">お客様との協働による確実な成果創出</p>
          </div>

          {/* Animated Process Steps */}
          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="text-center transform transition-all duration-700 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-[#00bcd4] rounded-full flex items-center justify-center mx-auto mb-4 transform transition-all duration-500 hover:rotate-360 hover:bg-[#0099aa] group">
                    <span className="text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                      {step.step}
                    </span>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gray-300 -translate-x-1/2">
                      <div className="h-full bg-[#00bcd4] animate-expand-width"></div>
                    </div>
                  )}
                </div>
                <h3 className="text-lg font-bold text-[#333333] mb-3 hover:text-[#00bcd4] transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-sm text-[#666666] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Modal (same as before but with enhanced animations) */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto animate-slide-in-up">
            {(() => {
              const service = services.find((s) => s.id === selectedService)!
              const IconComponent = service.icon
              return (
                <div>
                  {/* Modal Header */}
                  <div className={`bg-gradient-to-r ${service.color} p-8 text-white relative`}>
                    <button
                      onClick={() => setSelectedService(null)}
                      className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:rotate-90"
                    >
                      <X className="w-5 h-5" />
                    </button>
                    <div className="flex items-center justify-between mb-6">
                      <IconComponent className="w-16 h-16 animate-pulse" />
                      <span className="text-8xl font-black opacity-20">{String(service.id).padStart(2, "0")}</span>
                    </div>
                    <h2 className="text-4xl font-bold mb-2">{service.title}</h2>
                    <p className="text-xl opacity-90">{service.subtitle}</p>
                  </div>

                  {/* Tab Navigation */}
                  <div className="border-b border-gray-200">
                    <div className="flex">
                      {[
                        { key: "overview", label: "概要" },
                        { key: "features", label: "機能・特徴" },
                        { key: "process", label: "プロセス" },
                        { key: "cases", label: "事例" },
                      ].map((tab) => (
                        <button
                          key={tab.key}
                          onClick={() => setActiveTab(tab.key as any)}
                          className={`px-6 py-4 text-sm font-medium transition-all duration-300 hover:scale-105 ${
                            activeTab === tab.key
                              ? "text-[#00bcd4] border-b-2 border-[#00bcd4]"
                              : "text-[#666666] hover:text-[#00bcd4]"
                          }`}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Tab Content with animations */}
                  <div className="p-8">
                    {activeTab === "overview" && (
                      <div className="animate-fade-in">
                        <h3 className="text-2xl font-bold text-[#333333] mb-6">サービス概要</h3>
                        <p className="text-[#666666] leading-relaxed mb-8 text-lg">{service.detailedDescription}</p>

                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <h4 className="text-lg font-bold text-[#333333] mb-4">期待される効果</h4>
                            <div className="space-y-3">
                              {service.benefits.map((benefit, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-center bg-green-50 rounded-lg p-3 transform transition-all duration-300 hover:scale-105 animate-slide-in-left"
                                  style={{ animationDelay: `${idx * 0.1}s` }}
                                >
                                  <Star className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 animate-pulse" />
                                  <span className="text-sm text-[#333333] font-medium">{benefit}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="animate-slide-in-right">
                            <img
                              src={service.image || "/placeholder.svg"}
                              alt={service.title}
                              className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === "features" && (
                      <div className="animate-fade-in">
                        <h3 className="text-2xl font-bold text-[#333333] mb-6">主要機能・特徴</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          {service.features.map((feature, idx) => (
                            <div
                              key={idx}
                              className="bg-gray-50 rounded-lg p-6 hover:bg-[#00bcd4]/5 transition-all duration-300 transform hover:scale-105 animate-slide-in-up"
                              style={{ animationDelay: `${idx * 0.1}s` }}
                            >
                              <div className="flex items-center mb-3">
                                <CheckCircle className="w-6 h-6 text-[#00bcd4] mr-3 animate-pulse" />
                                <h4 className="text-lg font-bold text-[#333333]">{feature}</h4>
                              </div>
                              <p className="text-sm text-[#666666]">
                                {feature}に関する詳細な説明とメリットをここに記載します。
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeTab === "process" && (
                      <div className="animate-fade-in">
                        <h3 className="text-2xl font-bold text-[#333333] mb-6">実施プロセス</h3>
                        <div className="space-y-6">
                          {service.process.map((step, idx) => (
                            <div
                              key={idx}
                              className="flex items-start animate-slide-in-left"
                              style={{ animationDelay: `${idx * 0.2}s` }}
                            >
                              <div className="w-12 h-12 bg-[#00bcd4] rounded-full flex items-center justify-center mr-6 flex-shrink-0 hover:rotate-180 transition-transform duration-500">
                                <span className="text-white font-bold">{idx + 1}</span>
                              </div>
                              <div className="flex-1">
                                <h4 className="text-lg font-bold text-[#333333] mb-2 hover:text-[#00bcd4] transition-colors duration-300">
                                  {step}
                                </h4>
                                <p className="text-[#666666]">{step}の詳細な内容と実施方法について説明します。</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeTab === "cases" && (
                      <div className="animate-fade-in">
                        <h3 className="text-2xl font-bold text-[#333333] mb-6">導入事例</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          {service.caseStudies.map((caseStudy, idx) => (
                            <div
                              key={idx}
                              className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-slide-in-up"
                              style={{ animationDelay: `${idx * 0.2}s` }}
                            >
                              <div className="mb-4">
                                <span className="text-[#00bcd4] font-medium text-sm">{caseStudy.client}</span>
                              </div>
                              <h4 className="text-lg font-bold text-[#333333] mb-3">{caseStudy.title}</h4>
                              <div className="bg-green-50 rounded-lg p-4 hover:bg-green-100 transition-colors duration-300">
                                <h5 className="text-sm font-bold text-green-700 mb-2">成果</h5>
                                <p className="text-sm text-green-600">{caseStudy.result}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )
            })()}
          </div>
        </div>
      )}

      {/* CTA Section with animations */}
      <section className="py-20 bg-gradient-to-r from-[#00bcd4] to-slate-500 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto px-12 text-center relative z-10">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-in-up">
            最適なソリューションをご提案します
          </h3>
          <p className="text-xl text-white/90 mb-8 leading-relaxed animate-fade-in-up animation-delay-300">
            貴自治体の課題に合わせて、最適なサービスの組み合わせをご提案いたします。 まずはお気軽にご相談ください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
            <Link href="/#contact">
              <Button className="bg-white text-[#00bcd4] hover:bg-gray-100 px-8 py-4 text-lg font-medium rounded-none transition-all duration-300 hover:shadow-xl transform hover:scale-105">
                無料相談を申し込む
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/projects">
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#00bcd4] px-8 py-4 text-lg font-medium rounded-none bg-transparent transition-all duration-300 transform hover:scale-105"
              >
                導入事例を見る
              </Button>
            </Link>
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
        
        @keyframes slide-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes expand {
          from { width: 0; }
          to { width: 100%; }
        }
        
        @keyframes expand-width {
          from { width: 0; }
          to { width: 100%; }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes rotate-360 {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
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
        
        .animate-slide-in-up {
          animation: slide-in-up 0.8s ease-out forwards;
        }
        
        .animate-expand {
          animation: expand 1s ease-out forwards;
        }
        
        .animate-expand-width {
          animation: expand-width 2s ease-out forwards;
        }
        
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
        
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        
        .hover\\:rotate-360:hover {
          animation: rotate-360 0.5s ease-in-out;
        }
      `}</style>
    </div>
  )
}
