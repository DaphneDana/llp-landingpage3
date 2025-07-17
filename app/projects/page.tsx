"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ArrowRight, Calendar, MapPin, Users, TrendingUp, Award, CheckCircle } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "スマートシティ推進プロジェクト",
    client: "A市役所",
    category: "デジタル変革",
    status: "完了",
    description:
      "IoT技術を活用した交通渋滞解消と環境モニタリングシステムの構築により、市民の生活の質を大幅に向上させました。リアルタイムデータ分析による効率的な都市運営を実現し、持続可能なスマートシティの基盤を構築しました。",
    image: "/placeholder.svg?height=400&width=600",
    metrics: [
      { label: "交通渋滞", value: "30%削減" },
      { label: "CO2排出量", value: "25%削減" },
      { label: "市民満足度", value: "85%向上" },
      { label: "エネルギー効率", value: "40%改善" },
    ],
    duration: "12ヶ月",
    budget: "2.5億円",
    teamSize: "15名",
    location: "A市全域",
    technologies: ["IoT", "AI分析", "クラウド", "モバイルアプリ"],
    challenges: ["既存インフラとの統合", "市民プライバシーの保護", "リアルタイムデータ処理", "多部署間の連携調整"],
    solutions: ["段階的システム移行", "匿名化技術の導入", "高性能クラウド基盤", "専用プロジェクト管理体制"],
    results: ["交通流量の最適化実現", "環境負荷大幅削減", "市民サービス向上", "運営コスト削減"],
  },
  {
    id: 2,
    title: "AI活用住民サービス最適化",
    client: "B県庁",
    category: "AI・IoT導入",
    status: "完了",
    description:
      "AIチャットボットと予測分析システムの導入により、住民サービスの効率化と職員の業務負担軽減を実現しました。24時間対応可能な自動応答システムと、データ分析による業務予測機能を構築し、県民サービスの質を大幅に向上させました。",
    image: "/placeholder.svg?height=400&width=600",
    metrics: [
      { label: "問い合わせ対応", value: "60%自動化" },
      { label: "処理時間", value: "40%短縮" },
      { label: "職員満足度", value: "90%向上" },
      { label: "コスト削減", value: "35%削減" },
    ],
    duration: "8ヶ月",
    budget: "1.8億円",
    teamSize: "12名",
    location: "B県全域",
    technologies: ["AI", "機械学習", "自然言語処理", "データ分析"],
    challenges: ["多様な問い合わせ対応", "既存システムとの連携", "職員の技術習得", "セキュリティ確保"],
    solutions: ["高度なAI学習モデル", "API連携基盤構築", "段階的研修プログラム", "多層セキュリティ対策"],
    results: ["住民満足度大幅向上", "職員業務効率化", "24時間サービス提供", "運営費用削減"],
  },
  {
    id: 3,
    title: "統合型行政システム構築",
    client: "C市役所",
    category: "システム開発",
    status: "完了",
    description:
      "複数の部署にまたがる業務システムを統合し、データ連携の効率化と住民サービスの向上を実現しました。従来の縦割り型システムを横断的に統合することで、ワンストップサービスを提供し、市民の利便性を大幅に向上させました。",
    image: "/placeholder.svg?height=400&width=600",
    metrics: [
      { label: "業務効率", value: "50%向上" },
      { label: "データ処理", value: "70%高速化" },
      { label: "運用コスト", value: "35%削減" },
      { label: "手続き時間", value: "60%短縮" },
    ],
    duration: "15ヶ月",
    budget: "3.2億円",
    teamSize: "20名",
    location: "C市役所",
    technologies: ["クラウド", "API", "データベース", "セキュリティ"],
    challenges: ["レガシーシステム統合", "データ標準化", "部署間調整", "移行期間の業務継続"],
    solutions: ["段階的移行戦略", "データ変換ツール開発", "横断的プロジェクト体制", "並行運用期間設定"],
    results: ["ワンストップサービス実現", "業務プロセス最適化", "データ活用促進", "市民満足度向上"],
  },
  {
    id: 4,
    title: "デジタル防災システム導入",
    client: "D町役場",
    category: "防災・安全",
    status: "進行中",
    description:
      "リアルタイム災害情報システムと避難誘導アプリの開発により、地域の防災力を大幅に強化しました。気象データと連携した早期警報システム、住民向け避難誘導アプリ、災害対策本部支援システムを統合的に構築し、地域防災の新しいモデルを確立しました。",
    image: "/placeholder.svg?height=400&width=600",
    metrics: [
      { label: "情報伝達", value: "95%迅速化" },
      { label: "避難効率", value: "80%向上" },
      { label: "安全性", value: "大幅向上" },
      { label: "対応時間", value: "50%短縮" },
    ],
    duration: "10ヶ月",
    budget: "1.5億円",
    teamSize: "10名",
    location: "D町全域",
    technologies: ["GPS", "プッシュ通知", "GIS", "気象API"],
    challenges: ["リアルタイム情報処理", "高齢者への配慮", "通信インフラ整備", "緊急時の安定性確保"],
    solutions: ["冗長化システム構築", "多様な通知手段提供", "地域Wi-Fi整備", "定期的な訓練実施"],
    results: ["災害対応力強化", "住民安心感向上", "情報伝達効率化", "地域防災モデル確立"],
  },
  {
    id: 5,
    title: "教育DXプラットフォーム構築",
    client: "E市教育委員会",
    category: "教育・DX",
    status: "進行中",
    description:
      "市内全小中学校を対象とした統合教育プラットフォームの構築により、デジタル教育環境の整備と学習効果の向上を実現しています。オンライン学習システム、成績管理システム、保護者連携システムを統合し、教育現場のDXを推進しています。",
    image: "/placeholder.svg?height=400&width=600",
    metrics: [
      { label: "学習効率", value: "45%向上" },
      { label: "教員負担", value: "30%軽減" },
      { label: "保護者満足度", value: "88%向上" },
      { label: "デジタル活用", value: "90%普及" },
    ],
    duration: "18ヶ月",
    budget: "2.8億円",
    teamSize: "18名",
    location: "E市内全校",
    technologies: ["LMS", "クラウド", "タブレット", "AI学習支援"],
    challenges: ["教員のITスキル格差", "既存システムとの統合", "セキュリティ対策", "保護者への普及"],
    solutions: ["段階的研修プログラム", "API連携基盤構築", "多層セキュリティ実装", "保護者向け説明会開催"],
    results: ["デジタル教育環境整備", "学習成果向上", "教育業務効率化", "家庭との連携強化"],
  },
  {
    id: 6,
    title: "観光DXプロモーション",
    client: "F県観光局",
    category: "観光・地域活性化",
    status: "計画中",
    description:
      "AI技術を活用した観光情報プラットフォームと多言語対応システムの構築により、インバウンド観光の促進と地域経済の活性化を目指します。個人の嗜好に合わせた観光ルート提案、リアルタイム混雑情報、多言語音声ガイドシステムを統合的に提供します。",
    image: "/placeholder.svg?height=400&width=600",
    metrics: [
      { label: "観光客数", value: "目標50%増" },
      { label: "滞在時間", value: "目標40%延長" },
      { label: "満足度", value: "目標90%以上" },
      { label: "経済効果", value: "目標30億円" },
    ],
    duration: "24ヶ月",
    budget: "4.2億円",
    teamSize: "25名",
    location: "F県全域",
    technologies: ["AI推薦", "多言語処理", "AR/VR", "位置情報"],
    challenges: ["多様な観光資源の統合", "多言語対応の精度", "リアルタイム情報更新", "地域事業者との連携"],
    solutions: ["統合データベース構築", "高精度翻訳AI導入", "IoTセンサー活用", "地域連携プラットフォーム"],
    results: ["観光体験の個別最適化", "インバウンド促進", "地域経済活性化", "観光資源の効果的活用"],
  },
]

const categories = ["全て", "デジタル変革", "AI・IoT導入", "システム開発", "防災・安全", "教育・DX", "観光・地域活性化"]
const statuses = ["全て", "完了", "進行中", "計画中"]

export default function ProjectsPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("全て")
  const [selectedStatus, setSelectedStatus] = useState("全て")
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const filteredProjects = projects.filter((project) => {
    const categoryMatch = selectedCategory === "全て" || project.category === selectedCategory
    const statusMatch = selectedStatus === "全て" || project.status === selectedStatus
    return categoryMatch && statusMatch
  })

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
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#00bcd4]/10 rounded-full"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gray-400/10 transform rotate-45"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-[#00bcd4]/10 transform rotate-12"></div>
          <div className="absolute bottom-40 right-1/3 w-20 h-20 bg-gray-400/10 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-12 relative z-10">
          <div className="text-center text-white">
            <div className="inline-flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-left">
                <h1 className="text-5xl md:text-6xl font-bold mb-2">実績紹介</h1>
                <p className="text-xl text-[#00bcd4]">プロジェクト事例</p>
              </div>
            </div>
            <p className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed max-w-4xl mx-auto">
              地方自治体との協働により実現した革新的なプロジェクトの数々をご紹介します。
              <br />
              デジタル変革から地域活性化まで、幅広い分野での成果をご覧ください。
            </p>

            {/* Stats */}
            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-[#00bcd4] mb-2">50+</div>
                <p className="text-sm">完了プロジェクト</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-[#00bcd4] mb-2">25+</div>
                <p className="text-sm">自治体パートナー</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-[#00bcd4] mb-2">98%</div>
                <p className="text-sm">顧客満足度</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-[#00bcd4] mb-2">100億円+</div>
                <p className="text-sm">総プロジェクト規模</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-[#333333] mr-4">分野:</span>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-[#00bcd4] text-white"
                      : "bg-white text-[#333333] hover:bg-[#00bcd4] hover:text-white border border-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Status Filter */}
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-[#333333] mr-4">状況:</span>
              {statuses.map((status) => (
                <button
                  key={status}
                  onClick={() => setSelectedStatus(status)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    selectedStatus === status
                      ? "bg-slate-600 text-white"
                      : "bg-white text-[#333333] hover:bg-slate-600 hover:text-white border border-gray-200"
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-12">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 cursor-pointer"
                onClick={() => setSelectedProject(project.id)}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        project.status === "完了"
                          ? "bg-green-500 text-white"
                          : project.status === "進行中"
                            ? "bg-[#00bcd4] text-white"
                            : "bg-slate-500 text-white"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 text-xs font-medium bg-white/90 text-[#333333] rounded-full">
                      {project.category}
                    </span>
                  </div>

                  {/* Project Number */}
                  <div className="absolute bottom-4 right-4">
                    <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <span className="text-[#00bcd4] font-bold text-sm">{project.id}</span>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="text-[#00bcd4] font-medium text-sm">{project.client}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#333333] mb-3 line-clamp-2">{project.title}</h3>
                  <p className="text-[#666666] text-sm leading-relaxed mb-4 line-clamp-3">{project.description}</p>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {project.metrics.slice(0, 2).map((metric, idx) => (
                      <div key={idx} className="text-center bg-gray-50 rounded-lg p-3">
                        <div className="text-sm font-bold text-[#00bcd4]">{metric.value}</div>
                        <div className="text-xs text-[#666666]">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Project Details */}
                  <div className="flex items-center justify-between text-xs text-[#666666] mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-3 h-3 mr-1" />
                      <span>{project.teamSize}</span>
                    </div>
                  </div>

                  <Button className="w-full bg-[#00bcd4] hover:bg-[#0099aa] text-white text-sm font-medium rounded-lg transition-all duration-300">
                    詳細を見る
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {(() => {
              const project = projects.find((p) => p.id === selectedProject)!
              return (
                <div>
                  {/* Modal Header */}
                  <div className="relative h-64 overflow-hidden rounded-t-xl">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
                    >
                      <X className="w-5 h-5" />
                    </button>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[#00bcd4] font-medium">{project.client}</span>
                        <span
                          className={`px-3 py-1 text-sm font-medium rounded-full ${
                            project.status === "完了"
                              ? "bg-green-500 text-white"
                              : project.status === "進行中"
                                ? "bg-[#00bcd4] text-white"
                                : "bg-slate-500 text-white"
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>
                      <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
                      <span className="text-white/80 text-sm">{project.category}</span>
                    </div>
                  </div>

                  {/* Modal Content */}
                  <div className="p-8">
                    {/* Project Overview */}
                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-[#333333] mb-4">プロジェクト概要</h3>
                      <p className="text-[#666666] leading-relaxed">{project.description}</p>
                    </div>

                    {/* Project Details Grid */}
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h4 className="text-lg font-bold text-[#333333] mb-4">プロジェクト詳細</h4>
                        <div className="space-y-3">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 text-[#00bcd4] mr-3" />
                            <span className="text-sm text-[#666666]">期間: {project.duration}</span>
                          </div>
                          <div className="flex items-center">
                            <TrendingUp className="w-4 h-4 text-[#00bcd4] mr-3" />
                            <span className="text-sm text-[#666666]">予算: {project.budget}</span>
                          </div>
                          <div className="flex items-center">
                            <Users className="w-4 h-4 text-[#00bcd4] mr-3" />
                            <span className="text-sm text-[#666666]">チーム規模: {project.teamSize}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 text-[#00bcd4] mr-3" />
                            <span className="text-sm text-[#666666]">対象地域: {project.location}</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold text-[#333333] mb-4">使用技術</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-[#00bcd4]/10 text-[#00bcd4] text-sm font-medium rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Key Metrics */}
                    <div className="mb-8">
                      <h4 className="text-lg font-bold text-[#333333] mb-4">主要成果</h4>
                      <div className="grid md:grid-cols-4 gap-4">
                        {project.metrics.map((metric, idx) => (
                          <div key={idx} className="text-center bg-gray-50 rounded-lg p-4">
                            <div className="text-lg font-bold text-[#00bcd4] mb-1">{metric.value}</div>
                            <div className="text-sm text-[#666666]">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Challenges & Solutions */}
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h4 className="text-lg font-bold text-[#333333] mb-4">課題</h4>
                        <div className="space-y-2">
                          {project.challenges.map((challenge, idx) => (
                            <div key={idx} className="flex items-start">
                              <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-sm text-[#666666]">{challenge}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold text-[#333333] mb-4">解決策</h4>
                        <div className="space-y-2">
                          {project.solutions.map((solution, idx) => (
                            <div key={idx} className="flex items-start">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                              <span className="text-sm text-[#666666]">{solution}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Results */}
                    <div>
                      <h4 className="text-lg font-bold text-[#333333] mb-4">プロジェクト成果</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {project.results.map((result, idx) => (
                          <div key={idx} className="flex items-center bg-green-50 rounded-lg p-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                            <span className="text-sm text-[#333333] font-medium">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })()}
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#00bcd4] to-slate-500">
        <div className="max-w-4xl mx-auto px-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">あなたの自治体でも革新を始めませんか？</h3>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            私たちの豊富な経験と実績を活かし、貴自治体の課題解決をサポートいたします。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <Button className="bg-white text-[#00bcd4] hover:bg-gray-100 px-8 py-4 text-lg font-medium rounded-none transition-all duration-300 hover:shadow-xl">
                プロジェクト相談
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
