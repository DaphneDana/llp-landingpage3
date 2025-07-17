"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ArrowRight, Building, Users, Target, Award } from "lucide-react"
import Link from "next/link"

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
            {/* Logo Section */}
            <Link href="/" className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-[#00bcd4]">
                <span className="w-full h-full flex items-center justify-center text-white font-bold text-xl">A</span>
              </div>
              <div>
                <span className="text-xl font-bold text-[#00bcd4]">AEGIS</span>
              </div>
              <div>
                <span className="text-xl font-medium text-[#333333]">エイジス有限責任事業組合</span>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center">
              <div className="flex items-center space-x-10">
                <Link href="/#partnership" className="group flex flex-col items-center text-center">
                  <span
                    className={`text-sm font-medium mb-2 transition-all duration-300 ${
                      isScrolled ? "text-[#333333] group-hover:text-[#00bcd4]" : "text-white group-hover:text-[#00bcd4]"
                    }`}
                  >
                    パートナーシップ
                  </span>
                </Link>

                <Link href="/#services" className="group flex flex-col items-center text-center">
                  <span
                    className={`text-sm font-medium mb-2 transition-all duration-300 ${
                      isScrolled ? "text-[#333333] group-hover:text-[#00bcd4]" : "text-white group-hover:text-[#00bcd4]"
                    }`}
                  >
                    サービス内容
                  </span>
                </Link>

                <Link href="/projects" className="group flex flex-col items-center text-center">
                  <span className="text-sm font-medium mb-2 text-[#00bcd4] transition-all duration-300">実績紹介</span>
                </Link>

                <Link href="/#solutions" className="group flex flex-col items-center text-center">
                  <span
                    className={`text-sm font-medium mb-2 transition-all duration-300 ${
                      isScrolled ? "text-[#333333] group-hover:text-[#00bcd4]" : "text-white group-hover:text-[#00bcd4]"
                    }`}
                  >
                    ソリューション
                  </span>
                </Link>

                <Link href="/about" className="group flex flex-col items-center text-center">
                  <span
                    className={`text-sm font-medium mb-2 transition-all duration-300 ${
                      isScrolled ? "text-[#333333] group-hover:text-[#00bcd4]" : "text-white group-hover:text-[#00bcd4]"
                    }`}
                  >
                    会社概要
                  </span>
                </Link>

                <Link href="/#contact" className="group flex flex-col items-center text-center">
                  <span
                    className={`text-sm font-medium mb-2 transition-all duration-300 ${
                      isScrolled ? "text-[#333333] group-hover:text-[#00bcd4]" : "text-white group-hover:text-[#00bcd4]"
                    }`}
                  >
                    お問い合わせ
                  </span>
                </Link>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button className="lg:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-[#333333]" />
              ) : (
                <Menu className="w-6 h-6 text-[#333333]" />
              )}
            </button>
          </div>

          {/* Subtle line under navigation */}
          <div className="flex justify-end">
            <div className="flex-1 max-w-lg">
              <div className="mt-6 h-px bg-gray-200"></div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200/50">
            <div className="px-12 py-8 space-y-6">
              <Link href="/#partnership" className="block py-3 text-[#333333] hover:text-[#00bcd4]">
                <div className="text-sm font-medium mb-1">パートナーシップ</div>
              </Link>
              <Link href="/#services" className="block py-3 text-[#333333] hover:text-[#00bcd4]">
                <div className="text-sm font-medium mb-1">サービス内容</div>
              </Link>
              <Link href="/projects" className="block py-3 text-[#00bcd4]">
                <div className="text-sm font-medium mb-1">実績紹介</div>
              </Link>
              <Link href="/#solutions" className="block py-3 text-[#333333] hover:text-[#00bcd4]">
                <div className="text-sm font-medium mb-1">ソリューション</div>
              </Link>
              <Link href="/about" className="block py-3 text-[#333333] hover:text-[#00bcd4]">
                <div className="text-sm font-medium mb-1">会社概要</div>
              </Link>
              <Link href="/#contact" className="block py-3 text-[#333333] hover:text-[#00bcd4]">
                <div className="text-sm font-medium mb-1">お問い合わせ</div>
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800 overflow-hidden">
        {/* Geometric Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#00bcd4]/10 rounded-full"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gray-400/10 transform rotate-45"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-[#00bcd4]/10 transform rotate-12"></div>
          <div className="absolute bottom-40 right-1/3 w-20 h-20 bg-gray-400/10 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-12 relative z-10">
          <div className="text-center text-white">
            <div className="inline-flex items-center space-x-4 mb-8">
              {/* <div className="w-16 h-16 bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Building className="w-8 h-8 text-white" />
              </div> */}
              <div className="text-left">
                <h1 className="text-5xl md:text-6xl font-bold mb-2">私たちについて</h1>
                <p className="text-xl text-[#00bcd4]">会社概要</p>
              </div>
            </div>
            <p className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed max-w-4xl mx-auto">
              AEGIS有限責任事業組合の理念、歴史、そして私たちが目指す未来について
              <br />
              詳しくご紹介いたします。
            </p>

            {/* Navigation Cards */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cursor-pointer">
                <Target className="w-8 h-8 text-[#00bcd4] mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">企業理念</h3>
                <p className="text-sm opacity-80">経営方針</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cursor-pointer">
                <Users className="w-8 h-8 text-[#00bcd4] mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">会社概要</h3>
                <p className="text-sm opacity-80">組合情報</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cursor-pointer">
                <Award className="w-8 h-8 text-[#00bcd4] mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">沿革</h3>
                <p className="text-sm opacity-80">歴史</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section - Enhanced Design */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="grid grid-cols-12 gap-4 h-full">
              {Array.from({ length: 48 }).map((_, i) => (
                <div key={i} className="bg-[#00bcd4] rounded-full w-2 h-2"></div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-12 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-4 mb-8">
              {/* <div className="w-2 h-16 bg-[#00bcd4]"></div> */}
              <div>
                <h2 className="text-6xl font-bold text-[#00bcd4] mb-2">企業理念</h2>
                <p className="text-lg text-[#333333] font-medium">経営方針</p>
              </div>
              {/* <div className="w-2 h-16 bg-gray-400"></div> */}
            </div>
          </div>

          {/* Main Philosophy Card */}
          <div className="relative mb-20">
            <div className="bg-gradient-to-r from-[#00bcd4] to-[#0099aa] rounded-2xl p-12 text-white text-center shadow-2xl">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <Target className="w-6 h-6 text-[#00bcd4]" />
              </div>
              <h3 className="text-4xl md:text-5xl font-bold mb-8">社会と共に歩み価値を創出する</h3>
              <p className="text-xl leading-relaxed max-w-4xl mx-auto">
                私たちは、地方自治体の皆様と共に歩み、社会に真に必要とされる価値を創出することを使命としています。
                技術革新と人間性を両立させ、持続可能な社会の実現に向けて貢献してまいります。
              </p>
            </div>
          </div>

          {/* Philosophy Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "経営理念",
                subtitle: "基本方針",
                content:
                  "全従業員が企業理念の基に団結し、顧客・協力会社・取引先と誠心誠意をもって寄り添う「物心両面での幸福」を目指します",
                icon: "🎯",
                color: "from-[#00bcd4] to-[#0099aa]",
              },
              {
                title: "行動規範",
                subtitle: "実践指針",
                content: "最善を最速で。常に最高品質のサービスを迅速に提供し、お客様の期待を上回る価値を創造します",
                icon: "⚡",
                color: "from-slate-500 to-slate-600",
              },
              {
                title: "コミュニケーション",
                subtitle: "対話重視",
                content: "コミュニケーションを重ね、信頼関係を構築。透明性のある対話を通じて強固な信頼関係を築きます",
                icon: "💬",
                color: "from-[#00bcd4] to-slate-500",
              },
              {
                title: "品質向上",
                subtitle: "継続改善",
                content: "期待値を超えていく。お客様の期待を上回る価値提供を追求し、継続的な改善を実践します",
                icon: "📈",
                color: "from-slate-600 to-[#00bcd4]",
              },
              {
                title: "継続的改善",
                subtitle: "成長志向",
                content: "学習と成長を継続する。常に学び続け、組織として成長し続けることで価値を向上させます",
                icon: "🔄",
                color: "from-gray-500 to-slate-500",
              },
              {
                title: "社会責任",
                subtitle: "地域貢献",
                content: "地域社会への貢献。地域の発展と住民の皆様の幸福実現に積極的に貢献します",
                icon: "🌍",
                color: "from-[#0099aa] to-[#00bcd4]",
              },
            ].map((item, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                  <div className={`bg-gradient-to-r ${item.color} p-6 text-white`}>
                    <div className="text-3xl mb-4">{item.icon}</div>
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
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-12">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-4 mb-8">
              {/* <div className="w-2 h-16 bg-[#00bcd4]"></div> */}
              <div>
                <h2 className="text-6xl font-bold text-[#00bcd4] mb-2">会社概要</h2>
                <p className="text-lg text-[#333333] font-medium">組合情報</p>
              </div>
              {/* <div className="w-2 h-16 bg-gray-400"></div> */}
            </div>
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
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-40 h-40 bg-[#00bcd4]/5 rounded-full"></div>
          <div className="absolute bottom-20 left-10 w-32 h-32 bg-gray-400/5 transform rotate-45"></div>
        </div>

        <div className="max-w-7xl mx-auto px-12 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-4 mb-8">
              {/* <div className="w-2 h-16 bg-[#00bcd4]"></div> */}
              <div>
                <h2 className="text-6xl font-bold text-[#00bcd4] mb-2">沿革</h2>
                <p className="text-lg text-[#333333] font-medium">歴史</p>
              </div>
              {/* <div className="w-2 h-16 bg-gray-400"></div> */}
            </div>
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#00bcd4] to-slate-500">
        <div className="max-w-4xl mx-auto px-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">私たちと一緒に未来を創造しませんか？</h3>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            地方自治体の課題解決に向けて、専門性を活かしたソリューションを提供いたします。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <Button className="bg-white text-[#00bcd4] hover:bg-gray-100 px-8 py-4 text-lg font-medium rounded-none transition-all duration-300 hover:shadow-xl">
                お問い合わせ
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/#services">
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#00bcd4] px-8 py-4 text-lg font-medium rounded-none bg-transparent transition-all duration-300"
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
    </div>
  )
}
