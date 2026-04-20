import React, { useEffect, useRef, useState } from "react";

const WHATSAPP_URL = "https://wa.me/919970622941";
const PHONE = "tel:+919970622941 ";

const faqs = [
{
  q: "How much does a website cost?",
  a: "Every project is different, so pricing depends on your specific goals and requirements. Once we understand what you need, we’ll give you a clear and honest quote — no hidden costs.",
},
  {
    q: "Will I be able to update it myself?",
    a: "Yes. We build on platforms you can manage yourself, and we train you personally before handover. Most clients update their own content within an hour of launch.",
  },
  {
    q: "What if I don't like the design?",
    a: "We include up to 3 revision rounds. In practice, our clients rarely use more than one — because we listen before we design.",
  },
  {
    q: "Do you only work with businesses in Pune?",
    a: "No — we work with brands across India. All communication happens over WhatsApp and video call. Location has never been a barrier.",
  },

  // 🔥 NEW (high-impact ones)

  {
    q: "How long does the process take from start to finish?",
    a: "Most projects are completed within 7–10 days. We move fast, but we also keep you involved at every step so there are no surprises.",
  },
  {
    q: "Do you provide support after the website is live?",
    a: "Yes. We offer post-launch support to help you with updates, fixes, or guidance — you're not left on your own after delivery.",
  },
  {
    q: "What do you need from me to get started?",
    a: "Just a quick conversation about your business and goals. We’ll guide you on everything else — content, structure, and next steps.",
  },
];

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      setVisible(true);
      obs.disconnect();
    }
  },
  {
    threshold: 0.01,
    rootMargin: "0px 0px -80px 0px"
  }
);
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  const bodyRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (open && bodyRef.current) {
      setHeight(bodyRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [open]);

  return (
    <div className={`ws-faq__item${open ? " ws-faq__item--open" : ""}`}>
      <button
        className="ws-faq__trigger"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span className="ws-faq__q">{q}</span>
        <span className="ws-faq__icon">
          {open ? "−" : "+"}
        </span>
      </button>

      <div
        className="ws-faq__body"
        style={{ height: `${height}px`, overflow: "hidden", transition: "height 0.3s ease" }}
      >
        <div ref={bodyRef} className="ws-faq__body-inner">
          {a}
        </div>
      </div>
    </div>
  );
}

export default function ContactWarmSignal() {
const [heroRef, heroVisible] = useInView(0.05);
const [founderRef, founderVisible] = useInView(0.05);
const [cardsRef, cardsVisible] = useInView(0.03);
const [faqRef, faqVisible] = useInView(0.03);
const [finalRef, finalVisible] = useInView(0.03);

  return (
    <div className="ws-root">
      {/* Background texture */}
      <div className="ws-bg-texture" aria-hidden="true" />

      {/* ─────────────── HERO ─────────────── */}
      <section
        className={`ws-hero${heroVisible ? " ws-hero--visible" : ""}`}
        ref={heroRef}
      >
        <h1 className="ws-headline" style={{ "--delay": "0.1s" }}>
         We make 
          <br />
          <em>your business the obvious choice.</em>
        </h1>

        <p className="ws-subtext" style={{ "--delay": "0.22s" }}>
          We design and build websites for Indian brands that want to look
          credible, convert better, and stop losing clients to competitors with
          fancier sites.
        </p>

        <div className="ws-hero__actions" style={{ "--delay": "0.34s" }}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="ws-btn ws-btn--whatsapp"
          >
            <WhatsAppIcon />
            Chat on WhatsApp
          </a>
          <a href={PHONE} className="ws-btn ws-btn--call">
            <PhoneIcon />
            Quick Call
          </a>
        </div>

        <p className="ws-hero__reassurance" style={{ "--delay": "0.44s" }}>
          No forms. No pitch decks. Just a real conversation.
        </p>
      </section>

      {/* ─────────────── FOUNDER BLOCK ─────────────── */}
      <section
        className={`ws-founder${founderVisible ? " ws-founder--visible" : ""}`}
        ref={founderRef}
      >
        <div className="ws-founder__card">
          <div className="ws-founder__avatar">
            <div className="ws-founder__avatar-initials">m</div>
          </div>
          <div className="ws-founder__text">
    
            <p className="ws-founder__promise">
              "When you message us, you talk directly to me — not an account
              manager, not a junior, not a bot. I personally oversee every
              project we take on."
            </p>
            <p className="ws-founder__name">Zain</p>
            <p className="ws-founder__role">( Founder ) </p>
          </div>
        </div>
      </section>


      {/* ─────────────── VALUE CARDS ─────────────── */}
      <section
        className={`ws-faq${faqVisible ? " ws-faq--visible" : ""}`}
        ref={faqRef}
      >
        <h2 className="ws-section-title"> What makes us different</h2>

  <div className="ws-strip">
    
    <span>✦ No templates</span>
    <span>◎ Delivered in 7–10 days</span>
    <span>◇ You own everything</span>
    <span>↗ Built to convert</span>
    <span>✉ Direct communication</span>
  </div>

</section>

      {/* ─────────────── FAQ ─────────────── */}
      <section
        className={`ws-faq${faqVisible ? " ws-faq--visible" : ""}`}
        ref={faqRef}
      >
        <h2 className="ws-section-title">Questions you might have</h2>
        <div className="ws-faq__list">
          {faqs.map((f) => (
            <FAQItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </section>

      {/* ─────────────── FINAL CTA ─────────────── */}
      <section
        className={`ws-final${finalVisible ? " ws-final--visible" : ""}`}
        ref={finalRef} > 
          <h2 className="ws-section-title"> Still unsure?</h2>
        <div className="ws-final__inner">

          <h2 className="ws-final__heading">
            Just message us — 
            <br />
             No pressure. No obligation. Just a conversation.
          </h2>
          <p className="ws-final__sub">
  we’ll walk you through everything, step by step.
</p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="ws-btn ws-btn--whatsapp ws-btn--large"
          >
            <WhatsAppIcon />
            Start the conversation
          </a>
          <p>or</p>
          <a
  href={PHONE}
  className="ws-btn ws-btn--call ws-btn--large"
>
  <PhoneIcon />
  Quick Call
</a>
        </div>

        {/* Decorative corner marks */}
        <span className="ws-corner ws-corner--tl" aria-hidden="true" />
        <span className="ws-corner ws-corner--tr" aria-hidden="true" />
        <span className="ws-corner ws-corner--bl" aria-hidden="true" />
        <span className="ws-corner ws-corner--br" aria-hidden="true" />
      </section>

    </div>
  );
}

/* ── Inline SVG icons ── */
function WhatsAppIcon() {
  return (
    <svg
      className="ws-icon"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.091.537 4.058 1.475 5.773L.057 23.386a.5.5 0 00.611.61l5.579-1.407A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.87 9.87 0 01-5.031-1.371l-.36-.214-3.731.941.97-3.64-.235-.373A9.867 9.867 0 012.118 12C2.118 6.533 6.533 2.118 12 2.118S21.882 6.533 21.882 12 17.467 21.882 12 21.882z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      className="ws-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z"
      />
    </svg>
  );
}