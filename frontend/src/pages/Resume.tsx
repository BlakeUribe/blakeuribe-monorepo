import { Button } from "../components/ui/button"
import { ArrowLeft, Download, Mail, MapPin, ShieldCheck, Zap } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function ResumePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#050505] text-slate-950 dark:text-white font-sans selection:bg-emerald-500/30">
      {/* Top Utility Bar */}
      <nav className="border-b border-slate-200 dark:border-slate-900 bg-white/50 dark:bg-black/50 backdrop-blur-md sticky top-0 z-50 print:hidden">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest hover:text-emerald-500 transition-colors"
          >
            <ArrowLeft size={14} /> Return Home
          </button>
          <Button variant="outline" size="sm" onClick={() => window.print()} className="rounded-none border-emerald-500/50 text-emerald-500">
            <Download size={14} className="mr-2" /> PDF Export
          </Button>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        {/* Header Section */}
        <header className="mb-16 border-b border-slate-100 dark:border-slate-900 pb-12">
          <h1 className="text-6xl font-black tracking-tighter uppercase mb-6">Blake Uribe</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono text-slate-500 uppercase tracking-widest">
            <div className="space-y-2">
              <div className="flex items-center gap-2"><MapPin size={14} className="text-emerald-500" /> Seattle, WA</div>
              <div className="flex items-center gap-2"><Mail size={14} className="text-emerald-500" /> buribe@seattleu.edu</div>
              <div className="flex items-center gap-2"><Mail size={14} className="text-emerald-500" /> buribe.jobs@gmail.com</div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold">
                <ShieldCheck size={14} /> GPA: 3.98 // Finance & Data Science
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="md:col-span-8 space-y-16">
            
            {/* Experience Section */}
            <section>
              <h2 className="text-xs font-mono text-emerald-500 uppercase tracking-[0.3em] mb-10 border-l-2 border-emerald-500 pl-4">Work Experience</h2>
              <div className="space-y-12">
                <ExperienceEntry 
                  title="AWS Risk Analyst"
                  company="Amazon Web Services (AWS)"
                  location="Seattle, WA"
                  date="June 2025 – Sept. 2025"
                  bullets={[
                    "Automated KPI reporting and data pipelines using Python, reducing manual effort by ~70%.",
                    "Designed and maintained a DynamoDB database of 1,200+ internal controls for enhanced audit traceability.",
                    "Built AWS Lambda-based pipelines for ticket ingestion and risk classification, scaling for 100+ users.",
                    "Implemented Infrastructure-as-Code (IaC) for internal control systems, streamlining access to 1,000+ controls."
                  ]}
                />
                <ExperienceEntry 
                  title="Enterprise Risk Analyst (Hybrid)"
                  company="DaVita Healthcare"
                  location="Federal Way, WA"
                  date="June 2024 – Sept. 2024"
                  bullets={[
                    "Analyzed 350,000+ row datasets to detect anomalies and quantify risk exposure.",
                    "Developed automated Power BI dashboards integrating Python and Excel to monitor 20+ risk indicators.",
                    "Built a predictive machine learning model to classify risk events, reducing manual review time by ~60%.",
                    "Provided actionable recommendations to business units, enhancing governance frameworks."
                  ]}
                />
                <ExperienceEntry 
                  title="Infantry Team Leader"
                  company="U.S. Army"
                  location="J.B.L.M., WA"
                  date="Sept. 2019 – Nov. 2022"
                  bullets={[
                    "Managed $750,000+ in government assets with zero loss incidents.",
                    "Oversaw operational readiness of $24M+ in armored assets across multiple vehicles.",
                    "Led a team of 10+ in high-pressure environments, maintaining performance under extreme stress.",
                    "Applied data organization techniques in Excel for personnel records, ensuring 100% accuracy."
                  ]}
                />
              </div>
            </section>

            {/* Education Section */}
            <section>
              <h2 className="text-xs font-mono text-emerald-500 uppercase tracking-[0.3em] mb-10 border-l-2 border-emerald-500 pl-4">Education</h2>
              <div className="group">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-xl font-bold">Seattle University</h3>
                  <span className="text-[10px] font-mono text-slate-400 tracking-tighter">Graduation: June 2026</span>
                </div>
                <div className="text-sm font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide">
                  B.A. Finance and Business <span className="text-slate-300 dark:text-slate-800 mx-2">|</span> Minor: Data Science
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-4 space-y-12">
             {/* Technical Stack */}
             <div>
                <h3 className="text-[10px] font-mono text-slate-400 uppercase tracking-[0.2em] mb-4 italic">Technical Matrix</h3>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'R', 'TypeScript', 'C++', 'SQL', 'AWS', 'Power BI', 'Scikit-learn'].map(s => (
                    <span key={s} className="px-2 py-1 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[10px] font-bold uppercase tracking-tight">{s}</span>
                  ))}
                </div>
             </div>

             {/* Interests */}
             <div>
                <h3 className="text-[10px] font-mono text-slate-400 uppercase tracking-[0.2em] mb-4 italic">Analysis Focus</h3>
                <div className="space-y-2 text-[11px] font-medium text-slate-600 dark:text-slate-400 uppercase tracking-tighter">
                   <p className="flex justify-between border-b border-slate-100 dark:border-slate-900 pb-1"><span>Econometrics</span> <Zap size={10} className="text-emerald-500"/></p>
                   <p className="flex justify-between border-b border-slate-100 dark:border-slate-900 pb-1"><span>Financial Modeling</span> <Zap size={10} className="text-emerald-500"/></p>
                   <p className="flex justify-between border-b border-slate-100 dark:border-slate-900 pb-1"><span>Statistical Analysis</span> <Zap size={10} className="text-emerald-500"/></p>
                </div>
             </div>

             {/* Organizations */}
             <div className="p-6 border border-emerald-500/20 bg-emerald-500/5">
                <h3 className="text-[10px] font-mono text-emerald-500 uppercase tracking-[0.2em] mb-4">Affiliations</h3>
                <ul className="text-[11px] font-bold space-y-3 uppercase leading-tight">
                  <li>S.U. Albers Investment Club</li>
                  <li>S.U. Applied Analytics</li>
                  <li>Veterans Social</li>
                </ul>
             </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function ExperienceEntry({ title, company, location, date, bullets }: any) {
  return (
    <div className="group">
      <div className="flex justify-between items-baseline mb-2">
        <h3 className="text-xl font-bold tracking-tight">{title}</h3>
        <span className="text-[10px] font-mono text-slate-400 tracking-tighter">{date}</span>
      </div>
      <div className="text-sm font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide mb-4 flex items-center gap-2">
        {company} <span className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-700" /> {location}
      </div>
      <ul className="space-y-3">
        {bullets.map((b: string, i: number) => (
          <li key={i} className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed flex gap-3">
            <span className="text-emerald-500 mt-1.5 opacity-50 text-xs">0{i+1}</span> {b}
          </li>
        ))}
      </ul>
    </div>
  )
}