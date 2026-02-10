import { useState } from "react";

const C = {
  navy: "#1a1f3a", navyL: "#252b4d", cream: "#faf7f2", gold: "#c9a84c",
  goldL: "#e8d5a0", rose: "#d4736e", white: "#fff", gray: "#8a8578",
  dark: "#1a1f3a", light: "#6b6560",
};

const schools = [
  { n: "Harvard T.H. Chan", r: "#2", e: "🏛️" }, { n: "Columbia Mailman", r: "#5", e: "🗽" },
  { n: "Yale SPH", r: "#10", e: "📚" }, { n: "Brown SPH", r: "Top 15", e: "🐻" },
  { n: "Johns Hopkins Bloomberg", r: "#1", e: "🔬" }, { n: "UNC Gillings", r: "#2", e: "🌲" },
  { n: "Emory Rollins", r: "#2", e: "⚕️" }, { n: "Michigan SPH", r: "#2", e: "〽️" },
  { n: "UC Berkeley PH", r: "Top 10", e: "🌉" }, { n: "UW SPH", r: "Top 5", e: "🌧️" },
];

const svcs = [
  { t: "Fit Call", p: "Free", u: "10 min", d: "See if we're the right match. No pressure — just an honest assessment of where you stand.", f: ["Quick profile review", "Candid competitiveness read", "Recommended next steps"], a: C.gray, pop: false },
  { t: "Strategy Session", p: "$125", u: "per hour", d: "A focused hour for applicants who need targeted guidance on a specific part of their application.", f: ["60-min deep-dive on one focus area", "School list review OR essay feedback OR interview prep", "Written follow-up summary within 48 hrs", "Book as many as you need"], a: C.gold, pop: false },
  { t: "Application Architect", p: "$2,250", u: "up to 5 schools", d: "End-to-end application support with strategy, essays, and interview prep.", f: ["Comprehensive profile audit & school selection", "Personal statement (unlimited drafts)", "Resume/CV overhaul for SOPHAS", "5 school-specific supplemental essays", "Recommendation letter strategy & coaching", "2 mock interview sessions", "SOPHAS optimization & timeline management", "Async support via Slack or email"], a: C.rose, pop: true },
  { t: "Full Admission Suite", p: "$3,750", u: "up to 10 schools", d: "White-glove, all-in support for applicants targeting only the top tier.", f: ["Everything in Application Architect", "Up to 10 school applications", "Scholarship & fellowship application strategy", "Faculty outreach coaching", "Waitlist & deferral negotiation", "Post-admission offer comparison & negotiation", "6 months of async mentorship", "Priority scheduling & 24-hr turnaround on drafts"], a: C.navy, pop: false },
];

const dm = "'DM Sans', sans-serif";
const cr = "'Crimson Pro', serif";

const GCAL_URL = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Free+MPH+Admissions+Workshop+%E2%80%94+Yes+Admissions+Studio&dates=20260228T180000Z/20260228T193000Z&details=Free+live+workshop+hosted+by+Sarah+J.M.+Wang%2C+MPH+%28Harvard+Chan+%2725%29%0A%0AJoin+via+Google+Meet%3A+https%3A%2F%2Fmeet.google.com%2Fkmp-gytu-wuw%0A%0AWhat+we%27ll+cover%3A%0A%E2%80%A2+How+to+build+a+competitive+MPH+application%0A%E2%80%A2+School+selection+strategy+for+top+programs%0A%E2%80%A2+Personal+statement+frameworks%0A%E2%80%A2+SOPHAS+optimization+%26+timeline+management%0A%E2%80%A2+What+admissions+committees+look+for%0A%E2%80%A2+Live+Q%26A%0A%0Asarahwangmph.com&location=Google+Meet";

export default function App() {
  const [tab, setTab] = useState(() => {
    if (typeof window !== "undefined" && window.location.search.includes("registered=true")) return "confirmed";
    return "home";
  });

  const Nav = () => (
    <nav style={{ position: "sticky", top: 0, zIndex: 100, background: C.navy, padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: `2px solid ${C.gold}`, boxShadow: "0 4px 20px rgba(0,0,0,.15)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "14px 0" }}>
        <span style={{ fontSize: 28, color: C.gold, fontWeight: 700, fontFamily: cr }}>Yes</span>
        <span style={{ fontSize: 14, color: C.goldL, fontFamily: dm, letterSpacing: "2px", textTransform: "uppercase" }}>Admissions Studio</span>
      </div>
      <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
        {[["home","Home"],["services","Services & Pricing"],["event","Free Workshop"]].map(([id,label]) => (
          <button key={id} onClick={() => setTab(id)} style={{ background: tab === id ? C.gold : "transparent", color: tab === id ? C.navy : C.goldL, border: "none", padding: "10px 16px", borderRadius: 6, fontFamily: dm, fontSize: 13, fontWeight: 600, cursor: "pointer" }}>{label}</button>
        ))}
      </div>
    </nav>
  );

  const Home = () => (
    <div>
      <div style={{ background: `linear-gradient(135deg, ${C.navy}, ${C.navyL})`, padding: "80px 32px 60px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -60, right: -60, width: 300, height: 300, borderRadius: "50%", background: `${C.gold}10` }} />
        <p style={{ fontFamily: dm, color: C.gold, fontSize: 13, letterSpacing: "3px", textTransform: "uppercase", marginBottom: 16, fontWeight: 600 }}>For High-Achieving MPH Applicants</p>
        <h1 style={{ color: C.white, fontSize: "clamp(36px,5vw,56px)", fontWeight: 300, lineHeight: 1.15, maxWidth: 700, margin: "0 auto 24px" }}>Get into the MPH program <br /><span style={{ color: C.gold, fontWeight: 600 }}>you actually want.</span></h1>
        <p style={{ color: C.goldL, fontSize: 18, maxWidth: 560, margin: "0 auto 40px", fontFamily: cr, lineHeight: 1.6, fontWeight: 300 }}>Strategy-first admissions consulting from someone who applied to four Ivy-league MPH programs — and got into all four.</p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <button onClick={() => setTab("services")} style={{ background: C.gold, color: C.navy, border: "none", padding: "14px 36px", borderRadius: 8, fontWeight: 700, fontFamily: dm, fontSize: 15, cursor: "pointer" }}>View Services</button>
          <button onClick={() => setTab("event")} style={{ background: "transparent", color: C.gold, border: `1.5px solid ${C.gold}`, padding: "14px 36px", borderRadius: 8, fontWeight: 600, fontFamily: dm, fontSize: 15, cursor: "pointer" }}>Free Workshop — Feb 28</button>
        </div>
      </div>
      <div style={{ padding: "60px 32px", maxWidth: 900, margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: 28, fontWeight: 300, marginBottom: 8 }}>Meet <span style={{ fontWeight: 600 }}>Sarah Wang</span></h2>
        <p style={{ textAlign: "center", fontFamily: dm, color: C.light, fontSize: 14, marginBottom: 40, letterSpacing: "1px", textTransform: "uppercase" }}>MPH, Harvard T.H. Chan School of Public Health</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 20, marginBottom: 40 }}>
          {[{ n: "4/4", l: "Ivy admits (Columbia, Harvard, Yale, Brown)" }, { n: "8+", l: "Years in global health & operations" }, { n: "Top 1%", l: "Rose Fellow Scholar at Harvard" }, { n: "6", l: "Countries of field research" }].map((s, i) => (
            <div key={i} style={{ background: C.white, borderRadius: 12, padding: "28px 20px", textAlign: "center", boxShadow: "0 2px 12px rgba(0,0,0,.04)", border: "1px solid #eee" }}>
              <div style={{ fontSize: 32, fontWeight: 700, color: C.navy, marginBottom: 6 }}>{s.n}</div>
              <div style={{ fontFamily: dm, fontSize: 13, color: C.light, lineHeight: 1.4 }}>{s.l}</div>
            </div>
          ))}
        </div>
        <div style={{ background: C.white, borderRadius: 16, padding: 32, border: "1px solid #eee" }}>
          <p style={{ fontSize: 17, lineHeight: 1.8, fontWeight: 300 }}>Sarah is CEO of BioKite Health Infrastructure, working to close the diagnostics gap for communities worldwide. Her background spans field research across Chile, Taiwan, Japan, Kenya, and Malaysia — plus policy work at Harvard Law School, MIT, and the NIH All of Us Research Program. She's published in the <em>International Journal of Infectious Diseases</em>, written policy briefs for the FDA and EU policymakers, and has worked with teams ranging from 5 to 70 members. She holds certifications in Applied Data Science & AI from MIT (Top 1%) and speaks Mandarin fluently.</p>
        </div>
      </div>
      <div style={{ background: C.navy, padding: "48px 32px" }}>
        <p style={{ textAlign: "center", fontFamily: dm, color: C.goldL, fontSize: 12, letterSpacing: "3px", textTransform: "uppercase", marginBottom: 28 }}>Schools We Help You Target</p>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16, maxWidth: 800, margin: "0 auto" }}>
          {schools.map((s, i) => (
            <div key={i} style={{ background: C.navyL, borderRadius: 10, padding: "12px 20px", display: "flex", alignItems: "center", gap: 10, border: `1px solid ${C.gold}20` }}>
              <span style={{ fontSize: 20 }}>{s.e}</span>
              <div>
                <div style={{ color: C.white, fontFamily: dm, fontSize: 13, fontWeight: 600 }}>{s.n}</div>
                <div style={{ color: C.goldL, fontFamily: dm, fontSize: 11 }}>Ranked {s.r}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ padding: "60px 32px", maxWidth: 800, margin: "0 auto" }}>
        <h2 style={{ fontSize: 28, fontWeight: 300, textAlign: "center", marginBottom: 40 }}>A <span style={{ fontWeight: 600 }}>strategy-first</span> approach</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 24 }}>
          {[{ s: "01", t: "Audit", d: "Deep assessment of your academic profile, research, work experience, and narrative gaps." }, { s: "02", t: "Architect", d: "Custom school list, timeline, essay themes, and recommender strategy designed for your profile." }, { s: "03", t: "Execute", d: "Draft-by-draft refinement of every application component with unlimited iteration." }, { s: "04", t: "Launch", d: "Interview prep, post-submission follow-up, waitlist strategy, and enrollment negotiation." }].map((x, i) => (
            <div key={i} style={{ background: C.white, borderRadius: 14, padding: "28px 24px", border: "1px solid #eee" }}>
              <div style={{ fontFamily: dm, fontSize: 11, color: C.gold, fontWeight: 700, letterSpacing: "2px", marginBottom: 10 }}>STEP {x.s}</div>
              <div style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>{x.t}</div>
              <p style={{ fontFamily: dm, fontSize: 14, color: C.light, lineHeight: 1.6, margin: 0 }}>{x.d}</p>
            </div>
          ))}
        </div>
      </div>
      <div style={{ background: `linear-gradient(135deg, ${C.navy}, ${C.navyL})`, padding: "48px 32px", textAlign: "center" }}>
        <h3 style={{ color: C.white, fontSize: 24, fontWeight: 300, marginBottom: 8 }}>Ready to build your application strategy?</h3>
        <a href="https://calendly.com/sarahwangmph/10-minute-meeting" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: C.gold, color: C.navy, fontFamily: dm, fontSize: 15, fontWeight: 700, padding: "14px 36px", borderRadius: 8, textDecoration: "none", marginBottom: 24, cursor: "pointer" }}>Book a 10-Minute Fit Call</a>
        <div style={{ fontFamily: dm, fontSize: 13, color: C.goldL }}>✉️ <a href="mailto:sarahwangmph@gmail.com" style={{ color: C.goldL, textDecoration: "none" }}>sarahwangmph@gmail.com</a>  |  🔗 <a href="https://linkedin.com/in/sarahjmwang" target="_blank" rel="noopener noreferrer" style={{ color: C.goldL, textDecoration: "none" }}>linkedin.com/in/sarahjmwang</a></div>
      </div>
    </div>
  );

  const Services = () => (
    <div style={{ padding: "48px 24px", maxWidth: 1100, margin: "0 auto" }}>
      <h2 style={{ fontSize: 32, fontWeight: 300, textAlign: "center", marginBottom: 8 }}>Services & <span style={{ fontWeight: 600 }}>Pricing</span></h2>
      <p style={{ textAlign: "center", fontFamily: dm, color: C.light, fontSize: 15, maxWidth: 600, margin: "0 auto 12px" }}>Designed for graduate-level applicants targeting professional programs — MPH, MHA, DrPH, PhD in public health, and dual degrees.</p>
      <p style={{ textAlign: "center", fontFamily: dm, color: C.gray, fontSize: 13, marginBottom: 48, fontStyle: "italic" }}>Market range: $150–$500/hr or $1,500–$7,400+ per cycle. Packages below include more hands-on support than most competitors at comparable price points.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 20, marginBottom: 60 }}>
        {svcs.map((s, i) => (
          <div key={i} style={{ background: C.white, borderRadius: 16, padding: "28px 24px", border: s.pop ? `2px solid ${s.a}` : "1px solid #eee", boxShadow: s.pop ? `0 8px 32px ${s.a}20` : "0 2px 12px rgba(0,0,0,.04)", position: "relative", display: "flex", flexDirection: "column" }}>
            {s.pop && <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: s.a, color: C.white, fontFamily: dm, fontSize: 11, fontWeight: 700, padding: "4px 16px", borderRadius: 20, letterSpacing: "1px", textTransform: "uppercase" }}>Most Popular</div>}
            <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 4 }}>{s.t}</h3>
            <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 12 }}>
              <span style={{ fontSize: 32, fontWeight: 700, color: s.a }}>{s.p}</span>
              {s.u && <span style={{ fontFamily: dm, fontSize: 12, color: C.light }}>{s.u}</span>}
            </div>
            <p style={{ fontFamily: dm, fontSize: 13.5, color: C.light, lineHeight: 1.5, marginBottom: 18 }}>{s.d}</p>
            <div style={{ flex: 1 }}>
              {s.f.map((feat, fi) => (
                <div key={fi} style={{ display: "flex", gap: 8, marginBottom: 9 }}>
                  <span style={{ color: s.a, fontSize: 13, marginTop: 2 }}>✓</span>
                  <span style={{ fontFamily: dm, fontSize: 13, color: C.dark, lineHeight: 1.4 }}>{feat}</span>
                </div>
              ))}
            </div>
            <a href="https://calendly.com/sarahwangmph/10-minute-meeting" target="_blank" rel="noopener noreferrer" style={{ display: "block", marginTop: 16, width: "100%", padding: "11px", background: s.pop ? s.a : "transparent", color: s.pop ? C.white : s.a, border: `1.5px solid ${s.a}`, borderRadius: 8, fontFamily: dm, fontWeight: 700, fontSize: 13, cursor: "pointer", textDecoration: "none", textAlign: "center", boxSizing: "border-box" }}>{s.p === "Free" ? "Book a 10-Minute Fit Call" : "Get Started"}</a>
          </div>
        ))}
      </div>
      <div style={{ background: C.white, borderRadius: 16, padding: 32, border: "1px solid #eee", marginBottom: 40 }}>
        <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 20, textAlign: "center" }}>How this compares</h3>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: dm, fontSize: 13.5 }}>
            <thead><tr style={{ borderBottom: `2px solid ${C.navy}` }}>
              {["", "Yes Admissions", "Leland / Accepted", "AdmissionsConsultants", "Large firms"].map((h, i) => (
                <th key={i} style={{ padding: "10px 14px", textAlign: i ? "center" : "left", fontWeight: i === 1 ? 700 : 600, color: i === 1 ? C.rose : C.navy }}>{h}</th>
              ))}
            </tr></thead>
            <tbody>
              {[["Hourly rate","$125/hr","$150–$350/hr","$150–$350/hr","$200–$500/hr"],["Full cycle (5 schools)","$2,250","$2,500–$5,000","$4,000–$5,500","$5,000–$7,400"],["Full cycle (10 schools)","$3,750","$4,000–$7,000+","$5,500–$7,400","$7,000–$10,000+"],["Background","4/4 Ivy MPH admits","Varies widely","Former adcom","Varies"],["Unlimited essay drafts","✓","Often capped","Extra fee","Often capped"],["Async Slack support","✓","Sometimes","Email only","Email only"],["MPH-specific expertise","Deep","Generalist","Generalist","Generalist"]].map((row, ri) => (
                <tr key={ri} style={{ borderBottom: "1px solid #f0ede8" }}>
                  {row.map((cell, ci) => (<td key={ci} style={{ padding: "10px 14px", textAlign: ci ? "center" : "left", fontWeight: ci === 0 ? 600 : 400, color: ci === 1 ? C.rose : C.dark, background: ci === 1 ? `${C.rose}06` : "transparent" }}>{cell}</td>))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div style={{ background: C.navy, borderRadius: 16, padding: "36px 32px", color: C.white }}>
        <h3 style={{ fontSize: 20, fontWeight: 300, marginBottom: 20, color: C.goldL }}>What MPH graduates <span style={{ fontWeight: 600, color: C.white }}>actually earn</span></h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 16 }}>
          {[["Epidemiologist","$60K–$95K"],["Health Policy Analyst","$65K–$100K"],["Program Manager (NGO)","$55K–$85K"],["Biostatistician","$75K–$120K"],["Health Consultant","$80K–$130K"],["Global Health Director","$90K–$150K+"]].map(([role,range], i) => (
            <div key={i} style={{ background: C.navyL, borderRadius: 10, padding: "16px 18px", border: `1px solid ${C.gold}15` }}>
              <div style={{ fontFamily: dm, fontSize: 13, color: C.goldL, marginBottom: 4 }}>{role}</div>
              <div style={{ fontSize: 20, fontWeight: 600, color: C.gold }}>{range}</div>
            </div>
          ))}
        </div>
        <p style={{ fontFamily: dm, fontSize: 12, color: C.gray, marginTop: 16, fontStyle: "italic" }}>Source: BLS, Glassdoor, program outcome reports (2024–2025). Varies by employer, location, specialization.</p>
      </div>
    </div>
  );

  const Event = () => (
    <div style={{ padding: "48px 24px", maxWidth: 800, margin: "0 auto" }}>
      <div style={{ background: `linear-gradient(135deg, ${C.navy}, #2a3158)`, borderRadius: 20, overflow: "hidden", boxShadow: "0 12px 40px rgba(26,31,58,.3)", border: `1.5px solid ${C.gold}30` }}>
        <div style={{ padding: "48px 40px 0", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: `${C.gold}15`, borderRadius: 24, padding: "8px 20px", marginBottom: 20 }}>
            <span style={{ fontSize: 12, color: C.gold }}>✦</span>
            <span style={{ fontFamily: dm, fontSize: 12, color: C.goldL, letterSpacing: "2px", textTransform: "uppercase", fontWeight: 600 }}>Free Live Event</span>
            <span style={{ fontSize: 12, color: C.gold }}>✦</span>
          </div>
          <h1 style={{ color: C.white, fontSize: "clamp(32px,5vw,44px)", fontWeight: 300, lineHeight: 1.15, marginBottom: 12 }}>Yes <span style={{ color: C.gold, fontWeight: 600 }}>Admissions</span> Studio</h1>
          <p style={{ fontFamily: dm, color: C.goldL, fontSize: 16, marginBottom: 32 }}>For high-achieving MPH applicants</p>
        </div>
        <div style={{ margin: "0 40px", borderRadius: 14, height: 200, display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid ${C.gold}20` }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ width: 80, height: 80, borderRadius: "50%", background: `linear-gradient(135deg, ${C.gold}, ${C.rose})`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px", fontSize: 36 }}>👩‍🎓</div>
            <p style={{ color: C.white, fontFamily: dm, fontSize: 15, fontWeight: 600 }}>Sarah J.M. Wang, MPH</p>
            <p style={{ color: C.goldL, fontFamily: dm, fontSize: 12 }}>Harvard Chan '25 · 4/4 Ivy Admits · CEO, BioKite</p>
          </div>
        </div>
        <div style={{ padding: "32px 40px 40px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 16, marginBottom: 28 }}>
            {[["📅","Saturday, February 28, 2026"],["🕐","1:00 PM EST"],["💰","Free — No cost"],["🎯","Live Q&A included"]].map(([icon,label], i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, background: C.navyL, borderRadius: 10, padding: "14px 16px" }}>
                <span style={{ fontSize: 20 }}>{icon}</span>
                <span style={{ fontFamily: dm, fontSize: 14, color: C.white }}>{label}</span>
              </div>
            ))}
          </div>
          <h3 style={{ color: C.goldL, fontSize: 16, fontWeight: 300, marginBottom: 16 }}>What you'll learn:</h3>
          <div style={{ marginBottom: 28 }}>
            {["How to build a competitive MPH application from scratch","School selection strategy for top programs","Personal statement frameworks that work","SOPHAS optimization and timeline management","What admissions committees actually look for"].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 10, marginBottom: 10 }}>
                <span style={{ color: C.gold }}>→</span>
                <span style={{ fontFamily: dm, fontSize: 14, color: C.white, lineHeight: 1.5 }}>{item}</span>
              </div>
            ))}
          </div>
          <div style={{ background: C.navyL, borderRadius: 14, padding: "28px 32px", border: `1px solid ${C.gold}20` }}>
            <h3 style={{ color: C.white, fontSize: 18, fontWeight: 600, textAlign: "center", marginBottom: 20 }}>Register for the Free Workshop</h3>
            <form action="https://formsubmit.co/sarahwangmph@gmail.com" method="POST" style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <input type="hidden" name="_subject" value="New Workshop Registration – Feb 28" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_next" value="https://sarahwangmph.com?registered=true" />
              <input type="hidden" name="_autoresponse" value="Thanks for registering for the Free MPH Admissions Workshop on Saturday, Feb 28 at 1:00 PM EST! Join via Google Meet: https://meet.google.com/kmp-gytu-wuw — Download your workshop workbook: https://sarahwangmph.com/workbook.pdf — Questions? Reply to this email or reach out at sarahwangmph@gmail.com. See you there! – Sarah" />
              <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
                <input name="First Name" placeholder="First name" required style={{ flex: "1 1 140px", minWidth: 0, padding: "12px 16px", borderRadius: 8, border: `1px solid ${C.gold}30`, background: C.navy, color: C.white, fontFamily: dm, fontSize: 14, outline: "none", boxSizing: "border-box" }} />
                <input name="Last Name" placeholder="Last name" required style={{ flex: "1 1 140px", minWidth: 0, padding: "12px 16px", borderRadius: 8, border: `1px solid ${C.gold}30`, background: C.navy, color: C.white, fontFamily: dm, fontSize: 14, outline: "none", boxSizing: "border-box" }} />
              </div>
              <input name="email" type="email" placeholder="Email address" required style={{ padding: "12px 16px", borderRadius: 8, border: `1px solid ${C.gold}30`, background: C.navy, color: C.white, fontFamily: dm, fontSize: 14, outline: "none" }} />
              <select name="MPH Interest" defaultValue="" required style={{ padding: "12px 16px", borderRadius: 8, border: `1px solid ${C.gold}30`, background: C.navy, color: C.white, fontFamily: dm, fontSize: 14, outline: "none", appearance: "auto" }}>
                <option value="" disabled>Where are you in the process?</option>
                <option value="Researching programs">Researching programs</option>
                <option value="Planning to apply this cycle">Planning to apply this cycle</option>
                <option value="Currently applying">Currently applying</option>
                <option value="Just exploring">Just exploring</option>
              </select>
              <button type="submit" style={{ background: C.gold, color: C.navy, border: "none", padding: "14px", borderRadius: 8, fontWeight: 700, fontFamily: dm, fontSize: 15, cursor: "pointer", marginTop: 4 }}>Register Free</button>
            </form>
            <p style={{ textAlign: "center", fontFamily: dm, fontSize: 12, color: C.gray, marginTop: 14 }}>You'll receive a confirmation email with the workshop link.</p>
          </div>
        </div>
      </div>
    </div>
  );

  const Confirmed = () => (
    <div style={{ padding: "48px 24px", maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
      <div style={{ background: `linear-gradient(135deg, ${C.navy}, #2a3158)`, borderRadius: 20, padding: "60px 40px", boxShadow: "0 12px 40px rgba(26,31,58,.3)", border: `1.5px solid ${C.gold}30` }}>
        <div style={{ width: 80, height: 80, borderRadius: "50%", background: `linear-gradient(135deg, ${C.gold}, ${C.rose})`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px", fontSize: 40 }}>✓</div>
        <h1 style={{ color: C.white, fontSize: 32, fontWeight: 300, marginBottom: 8 }}>You're <span style={{ color: C.gold, fontWeight: 600 }}>registered!</span></h1>
        <p style={{ fontFamily: dm, color: C.goldL, fontSize: 16, marginBottom: 32, lineHeight: 1.6 }}>You'll receive a confirmation email at the address you provided.<br />Add the event to your calendar so you don't miss it.</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "center", marginBottom: 32 }}>
          <a href={GCAL_URL} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: C.gold, color: C.navy, border: "none", padding: "16px 36px", borderRadius: 10, fontWeight: 700, fontFamily: dm, fontSize: 16, cursor: "pointer", textDecoration: "none" }}>📅 Add to Google Calendar</a>
          <a href="/workbook.pdf" download style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "transparent", color: C.gold, border: `1.5px solid ${C.gold}`, padding: "16px 36px", borderRadius: 10, fontWeight: 700, fontFamily: dm, fontSize: 16, cursor: "pointer", textDecoration: "none" }}>📓 Download Workshop Workbook</a>
        </div>
        <div style={{ background: C.navyL, borderRadius: 12, padding: "20px 24px", marginBottom: 24, border: `1px solid ${C.gold}15` }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, textAlign: "center" }}>
            <div><div style={{ fontFamily: dm, fontSize: 12, color: C.gray, marginBottom: 4 }}>DATE</div><div style={{ fontFamily: dm, fontSize: 15, color: C.white, fontWeight: 600 }}>Saturday, Feb 28, 2026</div></div>
            <div><div style={{ fontFamily: dm, fontSize: 12, color: C.gray, marginBottom: 4 }}>TIME</div><div style={{ fontFamily: dm, fontSize: 15, color: C.white, fontWeight: 600 }}>1:00 PM EST</div></div>
          </div>
        </div>
        <p style={{ fontFamily: dm, fontSize: 13, color: C.gray }}>Questions? Reach out at sarahwangmph@gmail.com</p>
        <button onClick={() => { window.history.replaceState({}, "", "/"); setTab("home"); }} style={{ marginTop: 20, background: "transparent", color: C.goldL, border: `1px solid ${C.gold}40`, padding: "10px 24px", borderRadius: 8, fontFamily: dm, fontSize: 13, cursor: "pointer" }}>← Back to Home</button>
      </div>
    </div>
  );

  return (
    <div style={{ fontFamily: `${cr}`, background: C.cream, minHeight: "100vh", color: C.dark }}>
      <link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@300;400;500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <Nav />
      {tab === "home" && <Home />}
      {tab === "services" && <Services />}
      {tab === "event" && <Event />}
      {tab === "confirmed" && <Confirmed />}
      <footer style={{ background: C.navy, padding: "24px 32px", textAlign: "center", borderTop: `1px solid ${C.gold}20` }}>
        <p style={{ fontFamily: dm, fontSize: 12, color: C.gray, margin: 0 }}>© 2026 Yes Admissions Studio — Sarah J.M. Wang, MPH · sarahwangmph@gmail.com</p>
      </footer>
    </div>
  );
}
