import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useSpring } from "motion/react";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Siva K — IT Fresher | Java, SQL & Automation Testing" },
      {
        name: "description",
        content:
          "Portfolio of Siva K, B.Tech IT graduate from Chennai. Java, SQL, Selenium automation testing, manual QA and web development projects.",
      },
      { property: "og:title", content: "Siva K — IT Fresher Portfolio" },
      {
        property: "og:description",
        content:
          "Java, SQL, Selenium and QA-focused portfolio of Siva K, IT graduate based in Chennai, India.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const projects = [
  {
    id: "01",
    title: "Quiz Application",
    tag: "Web Development",
    body: "Web-based quiz platform with interactive questions, answer validation and a clean navigation flow.",
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: "02",
    title: "Sports Event Organizer",
    tag: "Systems",
    body: "Event scheduling and participant management system for coordinating multi-sport tournaments.",
    stack: ["Java", "SQL"],
  },
  {
    id: "03",
    title: "Student Engagement Prediction",
    tag: "Machine Learning",
    body: "Predictive model analysing participation signals to surface engagement patterns in online classes.",
    stack: ["Python", "Data Processing"],
  },
  {
    id: "04",
    title: "Preventing Water Contamination",
    tag: "Monitoring",
    body: "Monitoring solution that identifies potential contamination sources to support safer water management.",
    stack: ["Python", "Analytics"],
  },
];

const experience = [
  {
    role: "Fintech Intern — M2P",
    place: "Perambalur Branch",
    when: "June 2026",
    points: [
      "Hands-on exposure to Lending LOS/LMS, prepaid, debit and forex card products.",
      "Contributed to a Gold Loan Lending LOS/LMS system: payment rewards, API workflows, transaction validation and QA.",
      "Built practical understanding of product design and workflow structuring.",
    ],
  },
  {
    role: "Python Intern — CSIR",
    place: "Madras",
    when: "Research",
    points: [
      "Practical experience in Python programming, data processing and automation.",
      "Supported research-oriented technical activities end to end.",
    ],
  },
];

const skills = [
  { label: "Programming", value: "Java" },
  { label: "Database", value: "SQL" },
  { label: "Testing", value: "Manual Testing" },
  { label: "Automation", value: "Selenium with Java" },
  { label: "Web", value: "HTML · CSS · JavaScript" },
];

const education = [
  {
    title: "B.Tech / B.E. Information Technology",
    org: "Karpagam College of Engineering",
    meta: "2025 · CGPA 7.7",
  },
  {
    title: "Higher Secondary Certificate",
    org: "Sri Ramakrishna Matric. Hr. Sec. School",
    meta: "2021 · 83%",
  },
  {
    title: "Secondary School Leaving Certificate",
    org: "St. Andrews Matric. Hr. Sec. School",
    meta: "2019 · 77%",
  },
];

const interests = ["Cricket — District", "Football — School Zonal", "Rifle Shooting", "Basketball"];

const marquee = [
  "Java",
  "SQL",
  "Selenium",
  "Manual Testing",
  "JavaScript",
  "Python",
  "QA Workflows",
  "Fintech",
];

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <div className="mb-10 flex items-baseline gap-4 border-b border-border pb-4">
      <span className="font-mono text-xs text-primary">{index}</span>
      <h2 className="text-4xl leading-none text-foreground md:text-5xl">{children}</h2>
    </div>
  );
}

function Portfolio() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.3 });
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () =>
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Asia/Kolkata",
        }).format(new Date()),
      );
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background">
      <motion.div
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-primary"
      />

      {/* Hero */}
      <section className="relative flex min-h-screen flex-col justify-between px-6 py-10 md:px-14">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 top-10 h-[36rem] w-[36rem] rounded-full opacity-25 blur-3xl"
          style={{ background: "var(--gradient-ember)" }}
        />
        <header className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
          <span>Siva K</span>
          <span>Chennai, IN {time && `· ${time} IST`}</span>
        </header>

        <div className="relative">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 font-mono text-xs uppercase tracking-[0.4em] text-accent"
          >
            IT Fresher · QA &amp; Development
          </motion.p>

          <h1 className="text-[18vw] leading-[0.82] tracking-tight md:text-[13vw]">
            {"SIVA".split("").map((c, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: "0.4em", rotate: -4 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block"
              >
                {c}
              </motion.span>
            ))}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.8 }}
              className="text-ember inline-block"
            >
              &nbsp;K
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="mt-8 max-w-xl text-lg font-light leading-relaxed text-muted-foreground"
          >
            Motivated and detail-oriented IT graduate seeking an entry-level role where technical
            knowledge, problem-solving and a genuine curiosity for building software turn into real
            contribution.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.7 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <a
              href="mailto:sivak@example.com"
              className="rounded-sm bg-primary px-6 py-3 font-mono text-xs uppercase tracking-widest text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Email me
            </a>
            <a
              href="tel:+917904504418"
              className="rounded-sm border border-border px-6 py-3 font-mono text-xs uppercase tracking-widest text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              +91 79045 04418
            </a>
          </motion.div>
        </div>

        <div className="relative overflow-hidden border-y border-border py-4">
          <div className="marquee-track flex w-max gap-10 whitespace-nowrap font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            {[...marquee, ...marquee].map((m, i) => (
              <span key={i} className="flex items-center gap-10">
                {m}
                <span className="text-primary">◆</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="px-6 py-24 md:px-14">
        <Reveal>
          <SectionLabel index="01 / Projects">Selected work</SectionLabel>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="grain-panel flex h-full flex-col rounded-sm p-7 transition-colors"
              >
                <div className="flex items-center justify-between font-mono text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
                  <span>{p.id}</span>
                  <span className="text-accent">{p.tag}</span>
                </div>
                <h3 className="mt-6 text-3xl leading-none text-foreground">{p.title}</h3>
                <p className="mt-4 flex-1 font-light leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border px-3 py-1 font-mono text-[0.65rem] text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="px-6 py-24 md:px-14">
        <Reveal>
          <SectionLabel index="02 / Internships">Experience</SectionLabel>
        </Reveal>
        <div className="space-y-px">
          {experience.map((e, i) => (
            <Reveal key={e.role} delay={i * 0.1}>
              <div className="grid gap-6 border-t border-border py-10 md:grid-cols-[1fr_2fr]">
                <div>
                  <h3 className="text-3xl leading-none text-foreground">{e.role}</h3>
                  <p className="mt-3 font-mono text-xs uppercase tracking-[0.25em] text-primary">
                    {e.place} · {e.when}
                  </p>
                </div>
                <ul className="space-y-3">
                  {e.points.map((pt) => (
                    <li key={pt} className="flex gap-4 font-light text-muted-foreground">
                      <span className="mt-2 h-px w-6 shrink-0 bg-primary" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Skills + Education */}
      <section className="grid gap-16 px-6 py-24 md:grid-cols-2 md:px-14">
        <div>
          <Reveal>
            <SectionLabel index="03 / Skills">Toolkit</SectionLabel>
          </Reveal>
          <div className="space-y-px">
            {skills.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06}>
                <div className="group flex items-baseline justify-between border-b border-border py-5">
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    {s.label}
                  </span>
                  <span className="text-xl text-foreground transition-colors group-hover:text-primary">
                    {s.value}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <Reveal>
            <SectionLabel index="04 / Education">Academics</SectionLabel>
          </Reveal>
          <div className="space-y-5">
            {education.map((e, i) => (
              <Reveal key={e.title} delay={i * 0.06}>
                <div className="grain-panel rounded-sm p-6 transition-colors">
                  <h3 className="text-2xl leading-none text-foreground">{e.title}</h3>
                  <p className="mt-3 font-light text-muted-foreground">{e.org}</p>
                  <p className="mt-1 font-mono text-xs tracking-widest text-accent">{e.meta}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Interests + Contact */}
      <section className="px-6 pb-20 pt-10 md:px-14">
        <Reveal>
          <SectionLabel index="05 / Beyond work">Off the clock</SectionLabel>
        </Reveal>
        <div className="flex flex-wrap gap-3">
          {interests.map((it, i) => (
            <Reveal key={it} delay={i * 0.05}>
              <span className="rounded-full border border-border px-5 py-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:border-accent hover:text-accent">
                {it}
              </span>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-24 border-t border-border pt-12">
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-accent">
              Open to opportunities
            </p>
            <h2 className="mt-6 text-[14vw] leading-[0.85] md:text-[9vw]">
              <span className="text-ember">Let&apos;s talk</span>
            </h2>
            <div className="mt-10 flex flex-wrap gap-x-12 gap-y-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span>Chrompet, Chennai, Tamil Nadu</span>
              <a className="hover:text-primary" href="tel:+917904504418">
                +91 79045 04418
              </a>
              <a className="hover:text-primary" href="mailto:sivak@example.com">
                Email
              </a>
              <a className="hover:text-primary" href="#">
                LinkedIn
              </a>
              <a className="hover:text-primary" href="#">
                GitHub
              </a>
            </div>
            <p className="mt-16 font-mono text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
              © {new Date().getFullYear()} Siva K
            </p>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
