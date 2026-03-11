import { Button } from "./components/ui/button"
import { Card } from "./components/ui/card"
import { TrendingUp, ExternalLink, Zap, ShieldCheck, Mail, Linkedin, Github, MapPin, Activity } from "lucide-react"

const UPTICK_URL = "https://uptick-analytics.com"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#050505] text-slate-950 dark:text-white selection:bg-emerald-500/30">

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-900">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="font-bold tracking-tighter text-lg uppercase">Blake Uribe</span>
          <div className="flex gap-8 items-center text-[10px] font-mono uppercase tracking-[0.2em]">
            <a href="#projects" className="hover:text-emerald-500 transition-colors">Portfolio</a>
            <a href="/resume" className="hover:text-emerald-500 transition-colors">Resume</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
          Architecting <span className="text-emerald-500">Financial</span> Systems with Modern Engineering.
        </h1>

        <p className="text-lg text-slate-500 dark:text-slate-400 mb-12 leading-relaxed max-w-2xl font-medium">
          Bridging the gap between complex financial modeling and scalable cloud architecture. Specializing in high-frequency data pipelines and secure fintech interfaces.
        </p>

        {/* Contact Bar - Refined Spacing */}
        <div className="flex flex-wrap gap-x-12 gap-y-6 pb-12 border-b border-slate-100 dark:border-slate-900">
          <ContactItem
            label="Communication"
            value="buribe.jobs@gmail.com"
            href="mailto:buribe.jobs@gmail.com"
            icon={<Mail size={12} />}
          />

          <ContactItem
            label="Professional"
            value="in/blake-uribe"
            href="https://www.linkedin.com/in/blake-uribe-57420a234"
            isExternal
            icon={<Linkedin size={12} />}
          />

          <ContactItem
            label="Source Code"
            value="github.com/BlakeUribe"
            href="https://github.com/BlakeUribe"
            isExternal
            icon={<Github size={12} />}
          />

          <ContactItem
            label="Location"
            value="Seattle, WA"
            icon={<MapPin size={12} />}
          />
        </div>

        {/* Skills Metadata Grid - Spaced below contact bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-16">
          {/* Quant & Methodologies - The "Brain" */}
          <SkillGroup
            title="Quantitative Analysis"
            skills={[
              'Econometrics',
              'Stochastic Modeling',
              'Machine Learning',
              'Risk Management',
              'Statistical Inference'
            ]}
          />

          {/* Technical Stack - The "Tools" */}
          <SkillGroup
            title="Systems & Engineering"
            skills={[
              'Python',
              'R',
              'SQL',
              'C++',
              'TypeScript / React',
              'AWS Engineering',
            ]}
          />
          <SkillGroup title="Domain Expertise" skills={['Finance', 'Risk Management', 'Portfolio Management', 'Tech']} />
        </div>
      </section>

      {/* Projects Section - Removed the nested section tag for cleaner padding */}
      <main id="projects" className="max-w-7xl mx-auto px-6 py-24 border-t border-slate-200 dark:border-slate-900">
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[10px] font-mono text-emerald-500 font-bold tracking-[0.3em] uppercase">
              Project Registry
            </span>
            <div className="h-[1px] w-12 bg-emerald-500/30"></div>
          </div>
          <h2 className="text-4xl font-black tracking-tighter uppercase italic">
            Active <span className="text-emerald-500">Deployments</span>
          </h2>
          <p className="text-slate-500 text-sm mt-2 max-w-sm font-medium">
            A collection of quantitative tools and cloud-native financial architectures.
          </p>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
          {/* Left Column: Project Identity */}
          <div className="lg:col-span-4 flex flex-col justify-between py-2 lg:sticky lg:top-10 lg:h-fit ">
            <div>
              <div className="flex items-center gap-2 mb-4">
              </div>
              
              <h3 className="text-5xl font-black tracking-tighter mb-6 italic uppercase leading-none">
                Uptick<br />Finance
              </h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-8">
                A high-performance analytics engine bridging the gap between institutional-grade optimization and the retail market.
                Democratizing portfolio construction through advanced mean-variance engines.
              </p>

              <ul className="space-y-4 mb-10">
                {['Tracking on 500+ Assets', 'Modern Portfolio Theory Engine', 'Automated Risk/Return Tradeoff'].map((feature) => (
                  <li key={feature} className="flex items-center text-sm font-medium text-slate-700 dark:text-slate-300">
                    <Zap size={14} className="mr-3 text-emerald-500" /> {feature}
                  </li>
                ))}
              </ul>
            </div>

            <Button variant="outline" href={UPTICK_URL} className="w-fit group rounded-none border-slate-300 dark:border-slate-700">
              View Live Terminal <ExternalLink size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right Column: Feature Bento Grid */}
          <div className="lg:col-start-6 lg:col-span-7 flex flex-col gap-12">

            {[
          {
    src: "/uptick_demo_1.png",
    label: "Backtesting Engine",
    stat: "100k+ Simulations",
    desc: "Comprehensive historical stress-testing and performance validation.",
    icon: <TrendingUp size={20} className="text-emerald-500" />,
    color: "bg-emerald-500/10"
  },
  {
    src: "/uptick_demo_2.png",
    label: "Asset Intelligence",
    stat: "500+ Deep-Data Assets",
    desc: "Quantitative pricing history and KPIs with expanding coverage.",
    icon: <ShieldCheck size={20} className="text-blue-500" />,
    color: "bg-blue-500/10"
  },
  {
    src: "/uptick_demo_3.png",
    label: "Efficient Frontier",
    stat: "Risk-Reward Optimization",
    desc: "Mathematically derived optimal tradeoffs for any asset allocation.",
    icon: <Activity size={20} className="text-purple-500" />,
    color: "bg-purple-500/10"
  }
            ].map((item, idx) => (
              <Card key={idx} className="flex flex-col bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-lg overflow-hidden border-t-4 border-t-slate-100 dark:border-t-slate-800">
                {/* Header / Tab Style */}
                <div className="px-4 py-2 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 flex justify-between items-center">
                  <span className="text-[9px] font-mono text-slate-400 uppercase tracking-tighter">{item.label}</span>
                </div>

                {/* Scaled Image Section */}
                <div className="relative aspect-video bg-slate-100 dark:bg-black p-2">
                  <div className="w-full h-full overflow-hidden rounded-sm border border-slate-200/50 dark:border-slate-700/50">
                    <img
                      src={item.src}
                      alt={item.label}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Stats/Details Section */}
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div className="flex items-start gap-4">
                    <div className={`p-2.5 rounded-xl ${item.color}`}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
                        {item.stat}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

{/* Helper Components for Spacing & Clarity */ }
function ContactItem({ label, value, href, isExternal, icon }: any) {
  return (
    <div className="flex flex-col gap-1.5 group">
      <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-400 group-hover:text-emerald-500 transition-colors">
        {label}
      </span>
      {href ? (
        <a
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="text-sm font-semibold hover:text-emerald-500 transition-colors flex items-center gap-2"
        >
          <span className="text-emerald-500/50 group-hover:text-emerald-500 transition-colors">
            {icon}
          </span>
          {value}
        </a>
      ) : (
        <span className="text-sm font-semibold flex items-center gap-2">
          <span className="text-emerald-500/50">{icon}</span>
          {value}
        </span>
      )}
    </div>
  )
}

function SkillGroup({ title, skills, accent }: any) {
  return (
    <div>
      <h4 className={`text-[10px] font-mono uppercase tracking-[0.2em] mb-6 ${accent ? 'text-emerald-500' : 'text-slate-400'}`}>
        {title}
      </h4>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill: string) => (
          <span key={skill} className={`px-2.5 py-1 border rounded-sm text-[11px] font-bold uppercase tracking-tight ${accent ? 'bg-emerald-500/5 border-emerald-500/20 text-emerald-600 dark:text-emerald-400' : 'bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-slate-800'}`}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}