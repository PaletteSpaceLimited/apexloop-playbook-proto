import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Brain,
  Target,
  TrendingUp,
  Users,
  Zap,
  PlayCircle,
  MessageSquare,
  Award,
  BarChart3,
  Sparkles,
  Clock,
  Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";
import MegaMenuNavigation from "@/components/navigation/MegaMenuNavigation";

const features = [
  {
    icon: Brain,
    title: "智能分析引擎",
    description: "AI 自动分析通话录音，识别关键话术模式和改进机会"
  },
  {
    icon: Target,
    title: "个性化辅导计划",
    description: "根据每位销售的弱点生成定制化提升路径"
  },
  {
    icon: MessageSquare,
    title: "实时反馈",
    description: "通话后即时获得详细评分和改进建议"
  },
  {
    icon: TrendingUp,
    title: "进步追踪",
    description: "可视化追踪每位销售的成长曲线和关键指标变化"
  },
  {
    icon: Award,
    title: "游戏化学习",
    description: "徽章、排行榜和挑战赛让学习更有动力"
  },
  {
    icon: Users,
    title: "团队管理看板",
    description: "管理者一目了然掌握团队整体表现和辅导重点"
  }
];

const benefits = [
  "50% 更快的新人上手时间",
  "35% 平均销售技能提升",
  "2x 更多的练习机会",
  "实时 AI 辅导反馈"
];

const testimonials = [
  {
    quote: "ApexLoop 的 AI Coaching 让我们的新人培训时间缩短了一半，而且效果更好。",
    author: "张明",
    role: "销售总监",
    company: "云端科技"
  },
  {
    quote: "现在每个销售都有自己的 AI 教练，24/7 随时可以练习和获得反馈。",
    author: "李华",
    role: "VP of Sales",
    company: "智联软件"
  }
];

export default function AICoaching() {
  return (
    <div className="min-h-screen bg-background">
      <MegaMenuNavigation />

      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-primary/5 via-background to-cyan-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                <Brain className="w-4 h-4" />
                <span className="text-sm font-medium">AI Coaching</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                智能销售辅导
                <span className="bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent block">
                  规模化提升团队
                </span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                AI 自动分析每通电话，为每位销售生成个性化辅导计划，让管理者从繁琐的一对一辅导中解放出来。
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
                <a href="https://app.apexloopai.com/dashboard">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    立即体验
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
                <Button variant="outline" size="lg">
                  <PlayCircle className="w-4 h-4 mr-2" />
                  观看演示
                </Button>
              </div>

              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>免费试用</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>无需信用卡</span>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-6 border border-border shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">AI 辅导报告</p>
                    <p className="text-sm text-muted-foreground">实时分析结果</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-green-50 border border-green-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-green-800">开场白</span>
                      <span className="text-sm font-bold text-green-600">92/100</span>
                    </div>
                    <div className="h-2 bg-green-200 rounded-full">
                      <div className="h-full w-[92%] bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-yellow-50 border border-yellow-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-yellow-800">需求挖掘</span>
                      <span className="text-sm font-bold text-yellow-600">68/100</span>
                    </div>
                    <div className="h-2 bg-yellow-200 rounded-full">
                      <div className="h-full w-[68%] bg-yellow-500 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-blue-800">异议处理</span>
                      <span className="text-sm font-bold text-blue-600">85/100</span>
                    </div>
                    <div className="h-2 bg-blue-200 rounded-full">
                      <div className="h-full w-[85%] bg-blue-500 rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">AI 建议</p>
                      <p className="text-sm text-muted-foreground">在需求挖掘阶段，尝试使用更多开放性问题来深入了解客户痛点。</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl p-3 shadow-lg border border-border">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-semibold text-green-600">+35%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              强大的 AI 辅导功能
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              从通话分析到个性化建议，全方位提升销售技能
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 rounded-2xl bg-white border border-border hover:border-primary/30 hover:shadow-lg transition-all group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-cyan-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              简单三步，开始 AI 辅导
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              无需复杂设置，快速上手使用
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">上传通话</h3>
              <p className="text-slate-300">将销售通话录音上传至平台，支持多种格式</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">AI 分析</h3>
              <p className="text-slate-300">AI 自动转写、评分并生成详细的辅导建议</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">持续提升</h3>
              <p className="text-slate-300">按照个性化计划练习，追踪进步曲线</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Clock className="w-6 h-6 text-primary" />
                <p className="text-4xl font-bold text-primary">50%</p>
              </div>
              <p className="text-muted-foreground">更快上手时间</p>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-center gap-2 mb-2">
                <TrendingUp className="w-6 h-6 text-primary" />
                <p className="text-4xl font-bold text-primary">35%</p>
              </div>
              <p className="text-muted-foreground">技能提升幅度</p>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-center gap-2 mb-2">
                <BarChart3 className="w-6 h-6 text-primary" />
                <p className="text-4xl font-bold text-primary">10K+</p>
              </div>
              <p className="text-muted-foreground">已分析通话</p>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Shield className="w-6 h-6 text-primary" />
                <p className="text-4xl font-bold text-primary">99%</p>
              </div>
              <p className="text-muted-foreground">客户满意度</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              客户好评
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border border-border shadow-sm">
                <p className="text-lg text-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center">
                    <span className="text-white font-semibold">{testimonial.author.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role} · {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary to-cyan-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            准备好提升您的销售团队了吗？
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            立即开始免费试用，体验 AI 辅导的强大力量
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://app.apexloopai.com/dashboard">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                免费开始
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              预约演示
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-white">ApexLoop</span>
          </div>
          <p className="text-sm text-slate-400">
            © 2025 Palette Space. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Terms</a>
            <a href="https://palettespace.org" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-white transition-colors">palettespace.org</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
