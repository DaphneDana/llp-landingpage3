"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ArrowRight, Building, Users, Target, Award } from "lucide-react"
import Link from "next/link"

const aboutCategories = [
  {
    id: 1,
    title: "企業理念",
    subtitle: "Philosophy",
    description: "経営方針と基本理念"
  },
  {
    id: 2,
    title: "会社概要", 
    subtitle: "Company Profile",
    description: "組合情報と基本データ"
  },
  {
    id: 3,
    title: "沿革",
    subtitle: "History", 
    description: "設立からの歩み"
  },
  {
    id: 4,
    title: "組織体制",
    subtitle: "Organization",
    description: "事業部門構成"
  }
]

export default function AboutPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Header - Same as landing page */}
        <header
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
            isScrolled ? "bg-white shadow-lg py-6" : "bg-transparent py-8"
          }`}
        >
          <div className="w-full px-12">
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

      {/* Hero Section - Consistent with Services Page */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-12 relative z-10">
          <div className="text-center text-white">
            {/* Animated title entrance */}
            <div className="inline-flex items-center space-x-4 mb-8 animate-fade-in-up">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Building className="w-8 h-8 text-white" />
              </div>
              <div className="text-left">
                <h1 className="text-5xl md:text-6xl font-bold mb-2 animate-slide-in-right">会社概要</h1>
                <p className="text-xl text-[#00bcd4] animate-slide-in-left">私たちについて</p>
              </div>
            </div>

            <p className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed max-w-4xl mx-auto animate-fade-in-up animation-delay-300">
              AEGIS有限責任事業組合の理念、歴史、そして私たちが目指す未来について
              <br />
              詳しくご紹介いたします。
            </p>

            {/* Interactive About Categories with hover animations */}
            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {aboutCategories.map((category, index) => (
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

            {/* Animated CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 animate-fade-in-up animation-delay-600">
              <Button className="bg-[#00bcd4] hover:bg-[#0099aa] text-white px-8 py-4 text-lg font-medium rounded-none transition-all duration-300 hover:shadow-xl hover:scale-105 transform">
                詳細を見る
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-700 px-8 py-4 text-lg font-medium rounded-none bg-transparent transition-all duration-300 hover:scale-105 transform"
              >
                お問い合わせ
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section - Enhanced Design */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-12 relative z-10">
          {/* Section Header - Consistent with Services Page */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="w-24 h-1 bg-[#00bcd4] mx-auto mb-8 animate-expand"></div>
            <h2 className="text-4xl font-bold text-[#333333] mb-4">企業理念</h2>
            <p className="text-lg text-[#666666]">経営方針と基本理念</p>
          </div>

          {/* Main Philosophy Card */}
          <div className="relative mb-20">
            <div className="bg-gradient-to-r from-[#00bcd4] to-[#0099aa] rounded-2xl p-12 text-white text-center shadow-2xl">
              <h3 className="text-4xl md:text-5xl font-bold mb-8">社会と共に歩み価値を創出する</h3>
              <p className="text-xl leading-relaxed max-w-4xl mx-auto">
                私たちは、地方自治体の皆様と共に歩み、社会に真に必要とされる価値を創出することを使命としています。
                技術革新と人間性を両立させ、持続可能な社会の実現に向けて貢献してまいります。
              </p>
            </div>
          </div>

          {/* Philosophy Grid - Icons Removed */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "経営理念",
                subtitle: "基本方針",
                content:
                  "全従業員が企業理念の基に団結し、顧客・協力会社・取引先と誠心誠意をもって寄り添う「物心両面での幸福」を目指します",
                color: "from-[#00bcd4] to-[#0099aa]",
              },
              {
                title: "行動規範",
                subtitle: "実践指針",
                content: "最善を最速で。常に最高品質のサービスを迅速に提供し、お客様の期待を上回る価値を創造します",
                color: "from-slate-500 to-slate-600",
              },
              {
                title: "コミュニケーション",
                subtitle: "対話重視",
                content: "コミュニケーションを重ね、信頼関係を構築。透明性のある対話を通じて強固な信頼関係を築きます",
                color: "from-[#00bcd4] to-slate-500",
              },
              {
                title: "品質向上",
                subtitle: "継続改善",
                content: "期待値を超えていく。お客様の期待を上回る価値提供を追求し、継続的な改善を実践します",
                color: "from-slate-600 to-[#00bcd4]",
              },
              {
                title: "継続的改善",
                subtitle: "成長志向",
                content: "学習と成長を継続する。常に学び続け、組織として成長し続けることで価値を向上させます",
                color: "from-gray-500 to-slate-500",
              },
              {
                title: "社会責任",
                subtitle: "地域貢献",
                content: "地域社会への貢献。地域の発展と住民の皆様の幸福実現に積極的に貢献します",
                color: "from-[#0099aa] to-[#00bcd4]",
              },
            ].map((item, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                  <div className={`bg-gradient-to-r ${item.color} p-6 text-white`}>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-sm opacity-90">{item.subtitle}</p>
                  </div>
                  <div className="p-6">
                    <p className="text-[#333333] leading-relaxed">{item.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Profile Section - Paper Style */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-12">
          {/* Section Header - Consistent with Services Page */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="w-24 h-1 bg-[#00bcd4] mx-auto mb-8 animate-expand"></div>
            <h2 className="text-4xl font-bold text-[#333333] mb-4">組合情報</h2>
            <p className="text-lg text-[#666666]">基本的な組合データ</p>
          </div>

          {/* Paper-style Company Info */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="relative">
              <div
                className="bg-white shadow-2xl relative overflow-hidden"
                style={{
                  clipPath:
                    "polygon(0% 3%, 2% 0%, 4% 2%, 6% 0%, 8% 3%, 10% 1%, 12% 4%, 14% 0%, 16% 2%, 18% 0%, 20% 3%, 22% 1%, 24% 4%, 26% 0%, 28% 2%, 30% 0%, 32% 3%, 34% 1%, 36% 4%, 38% 0%, 40% 2%, 42% 0%, 44% 3%, 46% 1%, 48% 4%, 50% 0%, 52% 2%, 54% 0%, 56% 3%, 58% 1%, 60% 4%, 62% 0%, 64% 2%, 66% 0%, 68% 3%, 70% 1%, 72% 4%, 74% 0%, 76% 2%, 78% 0%, 80% 3%, 82% 1%, 84% 4%, 86% 0%, 88% 2%, 90% 0%, 92% 3%, 94% 1%, 96% 4%, 98% 0%, 100% 2%, 100% 97%, 98% 100%, 96% 98%, 94% 100%, 92% 97%, 90% 100%, 88% 98%, 86% 100%, 84% 97%, 82% 100%, 80% 98%, 78% 100%, 76% 97%, 74% 100%, 72% 98%, 70% 100%, 68% 97%, 66% 100%, 64% 98%, 62% 100%, 60% 97%, 58% 100%, 56% 98%, 54% 100%, 52% 97%, 50% 100%, 48% 98%, 46% 100%, 44% 97%, 42% 100%, 40% 98%, 38% 100%, 36% 97%, 34% 100%, 32% 98%, 30% 100%, 28% 97%, 26% 100%, 24% 98%, 22% 100%, 20% 97%, 18% 100%, 16% 98%, 14% 100%, 12% 97%, 10% 100%, 8% 98%, 6% 100%, 4% 97%, 2% 100%, 0% 98%)",
                }}
              >
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
                        <h4 className="font-bold text-[#333333] mb-3 text-lg border-b border-gray-300 pb-2">組合名</h4>
                        <p className="leading-relaxed">AEGIS有限責任事業組合（エイジス）</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#333333] mb-3 text-lg border-b border-gray-300 pb-2">設立</h4>
                        <p className="leading-relaxed">
                          2024年4月 有限責任事業組合として設立
                          <br />
                          2024年6月 事業開始
                        </p>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#333333] mb-3 text-lg border-b border-gray-300 pb-2">出資金</h4>
                        <p className="leading-relaxed">2,000万円</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#333333] mb-3 text-lg border-b border-gray-300 pb-2">所在地</h4>
                        <p className="leading-relaxed">
                          〒100-0001 東京都千代田区千代田1-1-1
                          <br />
                          〇〇ビル 10F
                        </p>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-8">
                      <div>
                        <h4 className="font-bold text-[#333333] mb-3 text-lg border-b border-gray-300 pb-2">代表者</h4>
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
                      <div>
                        <h4 className="font-bold text-[#333333] mb-3 text-lg border-b border-gray-300 pb-2">連絡先</h4>
                        <p className="leading-relaxed">
                          TEL: 03-1234-5678
                          <br />
                          Email: info@aegis.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section - Timeline Design */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-12 relative z-10">
          {/* Section Header - Consistent with Services Page */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="w-24 h-1 bg-[#00bcd4] mx-auto mb-8 animate-expand"></div>
            <h2 className="text-4xl font-bold text-[#333333] mb-4">沿革</h2>
            <p className="text-lg text-[#666666]">設立からの歩み</p>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Central Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#00bcd4] to-slate-500"></div>

              {/* Timeline Items */}
              <div className="space-y-12">
                {[
                  {
                    date: "2024年4月",
                    title: "AEGIS有限責任事業組合設立",
                    description: "地方自治体向けサービス提供を目的として設立",
                    side: "left",
                  },
                  {
                    date: "2024年5月",
                    title: "地方自治体向けサービス開始",
                    description: "デジタル変革支援サービスの提供を開始",
                    side: "right",
                  },
                  {
                    date: "2024年6月",
                    title: "関西支社を大阪に開設",
                    description: "関西地域でのサービス展開を本格化",
                    side: "left",
                  },
                  {
                    date: "2024年7月",
                    title: "出資金を1,000万円とし、デジタル変革コンサルティング事業開始",
                    description: "コンサルティング事業の本格展開",
                    side: "right",
                  },
                  {
                    date: "2024年8月",
                    title: "コンサルティング事業部を横浜に開設",
                    description: "首都圏でのコンサルティング体制を強化",
                    side: "left",
                  },
                  {
                    date: "2024年9月",
                    title: "AI・IoT技術導入支援サービス開始",
                    description: "最新技術を活用したサービスの提供開始",
                    side: "right",
                  },
                  {
                    date: "2024年10月",
                    title: "出資金を2,000万円に増資",
                    description: "事業拡大に向けた資本強化",
                    side: "left",
                  },
                  {
                    date: "2024年11月",
                    title: "デジタルソリューション事業部を名古屋に開設",
                    description: "中部地域での事業展開を開始",
                    side: "right",
                  },
                ].map((item, index) => (
                  <div key={index} className={`flex items-center ${item.side === "right" ? "flex-row-reverse" : ""}`}>
                    {/* Content */}
                    <div className={`w-5/12 ${item.side === "right" ? "text-right" : "text-left"}`}>
                      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
                        <div className="text-[#00bcd4] font-bold text-lg mb-2">{item.date}</div>
                        <h4 className="text-[#333333] font-bold text-xl mb-3">{item.title}</h4>
                        <p className="text-[#666666] leading-relaxed">{item.description}</p>
                      </div>
                    </div>

                    {/* Center Point */}
                    <div className="w-2/12 flex justify-center">
                      <div className="w-4 h-4 bg-[#00bcd4] rounded-full border-4 border-white shadow-lg"></div>
                    </div>

                    {/* Empty Space */}
                    <div className="w-5/12"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organization Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-12">
          {/* Section Header - Consistent with Services Page */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="w-24 h-1 bg-[#00bcd4] mx-auto mb-8 animate-expand"></div>
            <h2 className="text-4xl font-bold text-[#333333] mb-4">組織体制</h2>
            <p className="text-lg text-[#666666]">事業部門とオフィス構成</p>
          </div>

          {/* Organization Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                title: "本社",
                location: "東京都千代田区",
                description: "経営管理・営業統括"
              },
              {
                title: "関西支社", 
                location: "大阪府大阪市",
                description: "関西地域営業・サポート"
              },
              {
                title: "コンサルティング事業部",
                location: "神奈川県横浜市",
                description: "DX・AI・IoTコンサルティング"
              },
              {
                title: "デジタルソリューション事業部",
                location: "愛知県名古屋市", 
                description: "システム開発・運用保守"
              }
            ].map((office, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-[#004080] mb-3">{office.title}</h3>
                <p className="text-[#00bcd4] font-medium mb-3">{office.location}</p>
                <p className="text-[#333333] leading-relaxed">{office.description}</p>
              </div>
            ))}
          </div>

          {/* Department Structure */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-[#004080] mb-6 text-center">事業部門構成</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-bold text-[#333333] mb-4 text-lg">技術統括部</h4>
                <ul className="space-y-2 text-[#333333]">
                  <li>• システム開発チーム</li>
                  <li>• UI/UXデザインチーム</li>
                  <li>• インフラ・運用チーム</li>
                  <li>• 品質保証チーム</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[#333333] mb-4 text-lg">コンサルティング事業部</h4>
                <ul className="space-y-2 text-[#333333]">
                  <li>• DXコンサルティングチーム</li>
                  <li>• AI・IoTソリューションチーム</li>
                  <li>• 業務改革支援チーム</li>
                  <li>• 研修・教育チーム</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[#333333] mb-4 text-lg">営業統括部</h4>
                <ul className="space-y-2 text-[#333333]">
                  <li>• 営業企画チーム</li>
                  <li>• 地域営業チーム</li>
                  <li>• カスタマーサクセスチーム</li>
                  <li>• マーケティングチーム</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#00bcd4] to-slate-500 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-12 text-center relative z-10">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">私たちと一緒に未来を創造しませんか？</h3>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            地方自治体の課題解決に向けて、専門性を活かしたソリューションを提供いたします。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <Button className="bg-white text-[#00bcd4] hover:bg-gray-100 px-8 py-4 text-lg font-medium rounded-none transition-all duration-300 hover:shadow-xl transform hover:scale-105">
                お問い合わせ
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/services">
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#00bcd4] px-8 py-4 text-lg font-medium rounded-none bg-transparent transition-all duration-300 transform hover:scale-105"
              >
                サービス詳細
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer - Same as landing page */}
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
        
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </div>
  )
}