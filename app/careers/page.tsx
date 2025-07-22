"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronLeft, ChevronRight, MapPin, Clock, Users, Briefcase, CheckCircle, Star, ArrowRight } from "lucide-react"
import Link from "next/link"

const jobOpenings = [
  {
    id: 1,
    title: "シニアシステムエンジニア",
    department: "技術統括部",
    location: "東京本社",
    type: "正社員",
    experience: "5年以上",
    description: "地方自治体向けシステム開発のリードエンジニアとして、要件定義から運用まで一貫してプロジェクトを推進していただきます。",
    requirements: [
      "システム開発経験5年以上",
      "Java、Python、SQLの実務経験",
      "チームリーダー経験",
      "地方自治体業務の理解（優遇）"
    ],
    salary: "年収 600万円〜900万円"
  },
  {
    id: 2,
    title: "AI・IoTコンサルタント",
    department: "コンサルティング事業部",
    location: "横浜事業所",
    type: "正社員",
    experience: "3年以上",
    description: "最新のAI・IoT技術を活用した地方自治体の課題解決を担当。技術提案から導入支援まで幅広く携わります。",
    requirements: [
      "AI・IoT分野での実務経験3年以上",
      "Python、機械学習フレームワークの経験",
      "顧客折衝経験",
      "英語での技術文書読解能力"
    ],
    salary: "年収 550万円〜800万円"
  },
  {
    id: 3,
    title: "営業企画スペシャリスト",
    department: "営業統括部",
    location: "大阪関西支社",
    type: "正社員",
    experience: "3年以上",
    description: "地方自治体への営業戦略立案と実行を担当。新規開拓から既存顧客のフォローまで幅広く活動いただきます。",
    requirements: [
      "法人営業経験3年以上",
      "提案書作成・プレゼンテーション能力",
      "官公庁との取引経験（優遇）",
      "普通自動車免許"
    ],
    salary: "年収 500万円〜750万円"
  },
  {
    id: 4,
    title: "デジタル変革コンサルタント",
    department: "デジタルソリューション事業部",
    location: "名古屋事業所",
    type: "正社員",
    experience: "4年以上",
    description: "地方自治体のDX推進をリードし、業務プロセスの最適化とデジタル化を支援します。",
    requirements: [
      "DX・業務改革コンサルティング経験4年以上",
      "プロジェクトマネジメント経験",
      "行政業務の理解",
      "変革マインドセット"
    ],
    salary: "年収 580万円〜850万円"
  },
  {
    id: 5,
    title: "UI/UXデザイナー",
    department: "技術統括部",
    location: "東京本社・リモート可",
    type: "正社員",
    experience: "2年以上",
    description: "地方自治体向けシステムのユーザビリティ向上を担当。住民に優しいインターフェース設計を行います。",
    requirements: [
      "UI/UXデザイン実務経験2年以上",
      "Figma、Adobe Creative Suiteの使用経験",
      "アクセシビリティへの理解",
      "ユーザビリティテスト経験"
    ],
    salary: "年収 450万円〜650万円"
  },
  {
    id: 6,
    title: "新卒採用（総合職）",
    department: "全部門",
    location: "全拠点",
    type: "新卒正社員",
    experience: "新卒",
    description: "地方自治体の課題解決に情熱を持つ新卒の方を募集。技術系・営業系問わず、幅広い分野で活躍できます。",
    requirements: [
      "2025年3月大学・大学院卒業予定者",
      "地域社会への貢献意欲",
      "チームワークを重視する姿勢",
      "継続的な学習意欲"
    ],
    salary: "年収 350万円〜（経験・スキルに応じて決定）"
  }
]

const benefits = [
  {
    title: "競争力のある給与体系",
    description: "業界水準を上回る給与と充実した賞与制度"
  },
  {
    title: "教育・研修制度",
    description: "技術研修、資格取得支援、外部セミナー参加費用補助"
  },
  {
    title: "充実した福利厚生",
    description: "健康保険、厚生年金、雇用保険、労災保険完備"
  },
  {
    title: "ワークライフバランス",
    description: "年間休日125日、有給取得率85%以上"
  },
  {
    title: "リモートワーク対応",
    description: "職種に応じたフレキシブルな働き方を支援"
  },
  {
    title: "キャリア成長支援",
    description: "明確なキャリアパスと昇進制度"
  }
]

const applicationProcess = [
  {
    step: 1,
    title: "応募",
    description: "応募フォームまたはメールにて履歴書・職務経歴書をご提出ください"
  },
  {
    step: 2,
    title: "書類選考",
    description: "1週間以内に書類選考結果をご連絡いたします"
  },
  {
    step: 3,
    title: "一次面接",
    description: "人事担当者との面接（オンライン可能）"
  },
  {
    step: 4,
    title: "二次面接",
    description: "配属予定部署責任者との面接"
  },
  {
    step: 5,
    title: "最終面接",
    description: "代表理事との面接"
  },
  {
    step: 6,
    title: "内定",
    description: "面接から1週間以内に結果をご連絡いたします"
  }
]

const careerCategories = [
  {
    id: 1,
    title: "技術系職種",
    subtitle: "Engineering",
    icon: Briefcase,
    count: "3職種募集中"
  },
  {
    id: 2,
    title: "コンサルティング",
    subtitle: "Consulting",
    icon: Users,
    count: "2職種募集中"
  },
  {
    id: 3,
    title: "営業・企画",
    subtitle: "Sales & Planning",
    icon: Star,
    count: "1職種募集中"
  },
  {
    id: 4,
    title: "新卒採用",
    subtitle: "New Graduate",
    icon: CheckCircle,
    count: "通年募集"
  }
]

type Job = {
  id: number
  title: string
  department: string
  location: string
  type: string
  experience: string
  description: string
  requirements: string[]
  salary: string
}

export default function AegisCareersPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [selectedJob, setSelectedJob] = useState<Job | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    motivation: "",
    resume: null
  })

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

interface FormData {
    name: string
    email: string
    phone: string
    position: string
    experience: string
    motivation: string
    resume: File | null
}

interface InputChangeEvent extends React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> {}

const handleInputChange = (e: InputChangeEvent) => {
    const { name, value, type, files } = e.target as HTMLInputElement
    setFormData(prev => ({
        ...prev,
        [name]: type === "file" ? (files && files[0] ? files[0] : null) : value
    }))
}

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    alert("応募ありがとうございます。追って担当者よりご連絡いたします。")
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

      {/* Hero Section - Consistent with Services Page */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-12 relative z-10">
          <div className="text-center text-white">
            {/* Animated title entrance */}
            <div className="inline-flex items-center space-x-4 mb-8 animate-fade-in-up">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-left">
                <h1 className="text-5xl md:text-6xl font-bold mb-2 animate-slide-in-right">キャリア</h1>
                <p className="text-xl text-[#00bcd4] animate-slide-in-left">共に未来を創る仲間を募集</p>
              </div>
            </div>

            <p className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed max-w-4xl mx-auto animate-fade-in-up animation-delay-300">
              地方自治体の課題解決に情熱を持つ仲間と一緒に
              <br />
              社会に価値を創出しませんか
            </p>

            {/* Interactive Career Categories with hover animations */}
            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {careerCategories.map((category, index) => {
                const IconComponent = category.icon
                return (
                  <div
                    key={category.id}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-500 cursor-pointer transform hover:scale-105 hover:rotate-1 animate-fade-in-up group"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="relative">
                      <IconComponent className="w-8 h-8 text-[#00bcd4] mx-auto mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                      <div className="absolute -inset-2 bg-[#00bcd4]/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping"></div>
                    </div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-[#00bcd4] transition-colors duration-300">
                      {category.title}
                    </h3>
                    <p className="text-sm opacity-80 group-hover:opacity-100 transition-opacity duration-300 mb-2">
                      {category.subtitle}
                    </p>
                    <p className="text-xs text-[#00bcd4] font-medium">
                      {category.count}
                    </p>
                  </div>
                )
              })}
            </div>

            {/* Animated CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 animate-fade-in-up animation-delay-600">
              <Button className="bg-[#00bcd4] hover:bg-[#0099aa] text-white px-8 py-4 text-lg font-medium rounded-none transition-all duration-300 hover:shadow-xl hover:scale-105 transform">
                募集職種を見る
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-700 px-8 py-4 text-lg font-medium rounded-none bg-transparent transition-all duration-300 hover:scale-105 transform"
              >
                今すぐ応募する
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Message from Leader */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-12">
          {/* Section Header - Consistent with Services Page */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="w-24 h-1 bg-[#00bcd4] mx-auto mb-8 animate-expand"></div>
            <h2 className="text-4xl font-bold text-[#333333] mb-4">代表からのメッセージ</h2>
            <p className="text-lg text-[#666666]">一緒に社会を変えていきませんか</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="代表理事 田中 太郎"
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-lg"></div>
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                  <h4 className="font-bold text-[#333333] text-lg">田中 太郎</h4>
                  <p className="text-sm text-[#00bcd4] font-medium">代表理事</p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="space-y-6 text-[#333333] leading-relaxed">
                <h3 className="text-3xl font-bold text-[#004080] mb-6">一緒に社会を変えていきませんか</h3>
                <p className="text-lg font-medium">
                  私たちと一緒に働いてくださる仲間を心よりお待ちしております。
                </p>
                <p>
                  AEGIS有限責任事業組合では、地方自治体が抱える課題を最新の技術と創意工夫で解決する、やりがいのある仕事をしています。私たちが目指すのは、単なる技術提供ではなく、地域社会の発展と住民の皆様の幸福実現です。
                </p>
                <p>
                  ここでは、一人ひとりが専門性を発揮し、チーム一丸となって価値創造に取り組んでいます。失敗を恐れず挑戦する文化、学び続ける姿勢、そして何より「社会の役に立ちたい」という想いを大切にしています。
                </p>
                <p>
                  経験の有無は問いません。地域社会に貢献したい、新しい技術で課題を解決したい、成長し続けたいという方を求めています。私たちと一緒に、持続可能な未来を創造していきましょう。
                </p>
                <div className="pt-4">
                  <p className="font-medium text-[#004080]">皆様のご応募を心よりお待ちしております。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section id="jobs" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-12">
          {/* Section Header - Consistent with Services Page */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="w-24 h-1 bg-[#00bcd4] mx-auto mb-8 animate-expand"></div>
            <h2 className="text-4xl font-bold text-[#333333] mb-4">募集職種</h2>
            <p className="text-lg text-[#666666]">あなたに最適なポジションを見つけてください</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {jobOpenings.map((job) => (
              <div key={job.id} className="bg-gray-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-[#004080] mb-2">{job.title}</h3>
                    <p className="text-[#00bcd4] font-medium">{job.department}</p>
                  </div>
                  <div className="text-right text-sm text-[#666666]">
                    <div className="flex items-center mb-1">
                      <MapPin className="w-4 h-4 mr-1" />
                      {job.location}
                    </div>
                    <div className="flex items-center mb-1">
                      <Clock className="w-4 h-4 mr-1" />
                      {job.type}
                    </div>
                    <div className="flex items-center">
                      <Briefcase className="w-4 h-4 mr-1" />
                      {job.experience}
                    </div>
                  </div>
                </div>
                
                <p className="text-[#333333] mb-4 leading-relaxed">{job.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-bold text-[#333333] mb-2">求める経験・スキル：</h4>
                  <ul className="space-y-1">
                    {job.requirements.slice(0, 2).map((req, index) => (
                      <li key={index} className="text-sm text-[#666666] flex items-start">
                        <CheckCircle className="w-4 h-4 text-[#00bcd4] mr-2 mt-0.5 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                  {job.requirements.length > 2 && (
                    <p className="text-sm text-[#00bcd4] mt-2">他{job.requirements.length - 2}項目</p>
                  )}
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="text-[#004080] font-bold">{job.salary}</div>
                  <Button 
                    className="bg-[#004080] hover:bg-[#003366] text-white px-6 py-2 text-sm font-medium rounded-none transition-all duration-300"
                    onClick={() => setSelectedJob(job)}
                  >
                    詳細を見る
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-12">
          {/* Section Header - Consistent with Services Page */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="w-24 h-1 bg-[#00bcd4] mx-auto mb-8 animate-expand"></div>
            <h2 className="text-4xl font-bold text-[#333333] mb-4">福利厚生・待遇</h2>
            <p className="text-lg text-[#666666]">働きやすい環境と充実したサポート</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-[#004080] mb-4">{benefit.title}</h3>
                <p className="text-[#333333] leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Additional Benefits Details */}
          <div className="mt-16 bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-[#004080] mb-6 text-center">その他の制度・福利厚生</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-[#333333] mb-4">休暇制度</h4>
                <ul className="space-y-2 text-[#333333]">
                  <li>• 年間休日125日</li>
                  <li>• 有給休暇（初年度10日、最大20日）</li>
                  <li>• 夏季休暇（5日）</li>
                  <li>• 年末年始休暇（6日）</li>
                  <li>• 慶弔休暇</li>
                  <li>• 育児・介護休暇</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[#333333] mb-4">各種手当</h4>
                <ul className="space-y-2 text-[#333333]">
                  <li>• 交通費全額支給</li>
                  <li>• 住宅手当（月額3万円まで）</li>
                  <li>• 家族手当</li>
                  <li>• 資格手当</li>
                  <li>• 出張手当</li>
                  <li>• 残業手当（全額支給）</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-12">
          {/* Section Header - Consistent with Services Page */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="w-24 h-1 bg-[#00bcd4] mx-auto mb-8 animate-expand"></div>
            <h2 className="text-4xl font-bold text-[#333333] mb-4">選考プロセス</h2>
            <p className="text-lg text-[#666666]">応募から内定までの流れ</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Connection Line */}
              <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-[#00bcd4] hidden md:block"></div>
              
              <div className="space-y-12">
                {applicationProcess.map((step, index) => (
                  <div key={step.step} className="relative flex items-start md:items-center">
                    {/* Step Number */}
                    <div className="w-16 h-16 bg-[#004080] text-white rounded-full flex items-center justify-center font-bold text-xl mr-6 relative z-10">
                      {step.step}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[#004080] mb-2">{step.title}</h3>
                      <p className="text-[#333333] leading-relaxed">{step.description}</p>
                    </div>
                    
                    {/* Arrow for larger screens */}
                    {index < applicationProcess.length - 1 && (
                      <ArrowRight className="w-6 h-6 text-[#00bcd4] ml-6 hidden lg:block" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-12">
          {/* Section Header - Consistent with Services Page */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="w-24 h-1 bg-[#00bcd4] mx-auto mb-8 animate-expand"></div>
            <h2 className="text-4xl font-bold text-[#333333] mb-4">応募フォーム</h2>
            <p className="text-lg text-[#666666]">ご応募はこちらから</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#333333] font-medium mb-2">お名前 *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-[#00bcd4]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[#333333] font-medium mb-2">メールアドレス *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-[#00bcd4]"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#333333] font-medium mb-2">電話番号 *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-[#00bcd4]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[#333333] font-medium mb-2">希望職種 *</label>
                  <select
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-[#00bcd4]"
                    required
                  >
                    <option value="">選択してください</option>
                    {jobOpenings.map((job) => (
                      <option key={job.id} value={job.title}>{job.title}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[#333333] font-medium mb-2">経験・スキル *</label>
                <textarea
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-[#00bcd4]"
                  placeholder="関連する経験やスキルについて具体的にご記入ください"
                  required
                />
              </div>

              <div>
                <label className="block text-[#333333] font-medium mb-2">志望動機 *</label>
                <textarea
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-[#00bcd4]"
                  placeholder="当組合を志望する理由や、実現したいことについてお聞かせください"
                  required
                />
              </div>

              <div>
                <label className="block text-[#333333] font-medium mb-2">履歴書・職務経歴書</label>
                <input
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-[#00bcd4]"
                />
                <p className="text-sm text-[#666666] mt-1">PDF、Word形式のファイルをアップロードしてください（最大5MB）</p>
              </div>

              <div className="bg-gray-50 p-4 rounded">
                <p className="text-sm text-[#666666] leading-relaxed">
                  ご提供いただいた個人情報は、採用選考の目的のみに使用し、適切に管理いたします。
                  採用選考終了後、不採用となった場合は責任をもって破棄いたします。
                </p>
              </div>

              <div className="text-center">
                <Button 
                  type="submit"
                  className="bg-[#004080] hover:bg-[#003366] text-white px-12 py-4 text-lg font-medium rounded-none transition-all duration-300 hover:shadow-xl"
                >
                  応募する
                </Button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-[#004080] mb-6">採用に関するお問い合わせ</h3>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-[#333333] mb-4">人事部 採用担当</h4>
                  <div className="space-y-2 text-[#333333]">
                    <p>〒100-0001 東京都千代田区千代田1-1-1</p>
                    <p>TEL: 03-1234-5678</p>
                    <p>Email: careers@aegis-llp.co.jp</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-[#333333] mb-4">受付時間</h4>
                  <div className="space-y-2 text-[#333333]">
                    <p>平日 9:00〜18:00</p>
                    <p>土日祝日は休業</p>
                    <p>※メールでのお問い合わせは24時間受付</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#00bcd4] to-slate-500 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-12 text-center relative z-10">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            地域社会の未来を一緒に創造しませんか
          </h3>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            私たちと共に、専門性を活かして社会に価値を創出しましょう。
            あなたの挑戦をお待ちしています。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-[#00bcd4] hover:bg-gray-100 px-8 py-4 text-lg font-medium rounded-none transition-all duration-300 hover:shadow-xl transform hover:scale-105">
              今すぐ応募する
              <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#00bcd4] px-8 py-4 text-lg font-medium rounded-none bg-transparent transition-all duration-300 transform hover:scale-105"
            >
              会社説明資料をダウンロード
            </Button>
          </div>
        </div>
      </section>

      {/* Job Detail Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-[#004080] mb-2">{selectedJob.title}</h2>
                  <p className="text-[#00bcd4] font-medium text-lg">{selectedJob.department}</p>
                </div>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center text-[#666666]">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>{selectedJob.location}</span>
                </div>
                <div className="flex items-center text-[#666666]">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>{selectedJob.type}</span>
                </div>
                <div className="flex items-center text-[#666666]">
                  <Briefcase className="w-5 h-5 mr-2" />
                  <span>{selectedJob.experience}</span>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-[#333333] mb-4">職務内容</h3>
                  <p className="text-[#333333] leading-relaxed">{selectedJob.description}</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#333333] mb-4">求める経験・スキル</h3>
                  <ul className="space-y-2">
                    {selectedJob.requirements.map((req, index) => (
                      <li key={index} className="text-[#333333] flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#00bcd4] mr-3 mt-0.5 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#333333] mb-4">給与・待遇</h3>
                  <p className="text-[#004080] font-bold text-lg mb-2">{selectedJob.salary}</p>
                  <p className="text-[#333333]">※経験・能力に応じて決定いたします</p>
                </div>

                <div className="flex justify-center pt-6">
                  <Button 
                    className="bg-[#004080] hover:bg-[#003366] text-white px-8 py-3 text-lg font-medium rounded-none transition-all duration-300"
                    onClick={() => {
                      setSelectedJob(null)
                      const appSection = document.getElementById('application')
                      if (appSection) {
                        appSection.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                  >
                    この職種に応募する
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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
                  <h4 className="text-lg font-medium text-white mb-2">キャリア採用</h4>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">新卒採用</h4>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">インターンシップ</h4>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">会社説明会</h4>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">採用FAQ</h4>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-2">
              <div className="grid md:grid-cols-2 gap-8">
                {/* HR Department */}
                <div>
                  <h4 className="text-lg font-medium text-white mb-4">人事部</h4>
                  <div className="space-y-2 text-white/90">
                    <p>〒100-0001 東京都千代田区千代田1-1-1</p>
                    <p>TEL.03-1234-5678</p>
                    <p>Email: careers@aegis-llp.co.jp</p>
                  </div>
                </div>
                {/* Office Hours */}
                <div>
                  <h4 className="text-lg font-medium text-white mb-4">受付時間</h4>
                  <div className="space-y-2 text-white/90">
                    <p>平日 9:00〜18:00</p>
                    <p>土日祝日休業</p>
                    <p>メール: 24時間受付</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/80 text-sm">©2024 AEGIS有限責任事業組合. All rights reserved.</div>
            <div className="text-[#00bcd4]/80 text-sm mt-4 md:mt-0">CAREERS PAGE BY AEGIS LLP</div>
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