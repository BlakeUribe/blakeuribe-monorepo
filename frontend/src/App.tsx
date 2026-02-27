import { Button } from "./components/ui/button"
import { Card } from "./components/ui/card"
import { TrendingUp, ExternalLink, Zap, ShieldCheck, Mail, Linkedin, Github, MapPin } from "lucide-react"

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
        01 // Project Registry
      </span>
      <div className="h-[1px] w-12 bg-emerald-500/30"></div>
    </div>
    <h2 className="text-4xl font-black tracking-tighter uppercase italic">
      Selected <span className="text-emerald-500">Deployments</span>
    </h2>
    <p className="text-slate-500 text-sm mt-2 max-w-sm font-medium">
      A collection of quantitative tools and cloud-native financial architectures.
    </p>
  </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Left Column: Project Identity */}
          <div className="lg:col-span-4 flex flex-col justify-between py-2">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="px-2 py-1 rounded bg-emerald-500/10 text-emerald-500 text-[10px] font-mono font-bold uppercase tracking-widest">
                  Active Project
                </span>
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
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="md:col-span-2 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 overflow-hidden group shadow-xl">
              <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/50">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-slate-300" />
                  <div className="w-2 h-2 rounded-full bg-slate-300" />
                  <div className="w-2 h-2 rounded-full bg-slate-300" />
                </div>
                <span className="text-[10px] font-mono text-slate-400">uptick-analytics.com</span>
              </div>
              <div className="relative h-[350px] overflow-hidden bg-slate-100 dark:bg-black">
                <img src="/uptick_demo.png" alt="Uptick Dashboard" className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </Card>

            <Card className="bg-emerald-600 p-8 flex flex-col justify-between text-white border-none shadow-lg shadow-emerald-500/20">
              <TrendingUp size={32} className="text-emerald-200" />
              <div>
                <h4 className="text-3xl font-bold mb-1">100,000+</h4>
                <p className="text-emerald-100 text-[10px] uppercase tracking-widest font-bold">Simulations</p>
              </div>
            </Card>

            <Card className="bg-slate-950 p-8 flex flex-col justify-between text-white border-none">
              <ShieldCheck size={32} className="text-emerald-500" />
              <div>
                <h4 className="text-2xl font-bold mb-1">Optimizer</h4>
                <p className="text-slate-400 text-xs">Quadratic programming for asset allocation.</p>
              </div>
            </Card>
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