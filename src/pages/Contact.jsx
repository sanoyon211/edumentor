import { useState } from "react";

const contactMethods = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" />
        <polyline points="22,6 12,13 2,6" strokeLinecap="round" />
      </svg>
    ),
    label: "Email Us",
    value: "hello@edumentor.dev",
    sub: "We reply within 24 hours",
    color: "var(--color-ember)",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "Discord Community",
    value: "discord.gg/edumentor",
    sub: "18,000+ members online",
    color: "#5865F2",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "Support Line",
    value: "+1 (555) 234-5678",
    sub: "Mon–Fri, 9am–6pm EST",
    color: "var(--color-sage)",
  },
];

const faqs = [
  { q: "How long do I have access to a course?", a: "Lifetime access. Once you enroll, the course is yours forever — including any future updates we make to the content." },
  { q: "Do you offer refunds?", a: "Yes! We offer a full 30-day money-back guarantee with no questions asked. Just contact us within 30 days of purchase." },
  { q: "Are the courses beginner-friendly?", a: "Most of our courses start from scratch. Each course clearly states its prerequisites so you know exactly what's needed before you begin." },
  { q: "Do I get a certificate after completing a course?", a: "Yes, you receive a verifiable certificate of completion. However, we focus more on your portfolio projects — employers care far more about what you can build." },
  { q: "Can I download course videos for offline viewing?", a: "Yes, Pro subscribers can download any video for offline viewing on our mobile app (iOS and Android)." },
  { q: "Do you offer team or group discounts?", a: "Absolutely. We offer special pricing for teams of 5 or more. Reach out via the contact form and we'll set you up." },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1500);
  };

  return (
    <>
      {/* Header */}
      <div className="grain-overlay" style={{ background: "var(--color-dark-bg)", paddingTop: "130px", paddingBottom: "5rem", paddingLeft: "1.5rem", paddingRight: "1.5rem", textAlign: "center" }}>
        <p style={{ fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--color-ember)", marginBottom: "0.6rem" }}>GET IN TOUCH</p>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 700, color: "white", letterSpacing: "-0.03em", marginBottom: "1rem" }}>
          We'd love to hear <br />
          <span style={{ color: "var(--color-ember)", fontStyle: "italic" }}>from you.</span>
        </h1>
        <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "1.05rem", maxWidth: "480px", margin: "0 auto", lineHeight: 1.65 }}>
          Questions, feedback, partnership ideas, or just want to say hi — our team is here and happy to help.
        </p>
      </div>

      {/* Contact Method Cards */}
      <section style={{ padding: "4rem 1.5rem 0", background: "var(--color-cream)" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem", transform: "translateY(-2rem)" }} className="contact-methods-grid">
            {contactMethods.map((method, i) => (
              <div key={i}
                style={{ background: "white", borderRadius: "16px", padding: "1.75rem", boxShadow: "var(--shadow-card)", display: "flex", gap: "1rem", alignItems: "flex-start", border: "1px solid var(--color-cream-darker)", transition: "transform 0.2s, box-shadow 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "var(--shadow-hover)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "var(--shadow-card)"; }}
              >
                <div style={{ width: "46px", height: "46px", borderRadius: "12px", background: `${method.color}18`, color: method.color, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  {method.icon}
                </div>
                <div>
                  <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--color-muted)", marginBottom: "0.2rem" }}>{method.label}</div>
                  <div style={{ fontSize: "0.92rem", fontWeight: 600, color: "var(--color-ink)", marginBottom: "0.2rem" }}>{method.value}</div>
                  <div style={{ fontSize: "0.78rem", color: "var(--color-muted-light)" }}>{method.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + FAQ */}
      <section style={{ padding: "2rem 1.5rem 6rem", background: "var(--color-cream)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }} className="contact-layout">

          {/* Form */}
          <div style={{ background: "white", borderRadius: "20px", padding: "2.5rem", boxShadow: "var(--shadow-card)", border: "1px solid var(--color-cream-darker)" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.75rem", fontWeight: 700, color: "var(--color-ink)", letterSpacing: "-0.02em", marginBottom: "0.4rem" }}>Send us a message</h2>
            <p style={{ fontSize: "0.88rem", color: "var(--color-muted)", marginBottom: "2rem" }}>We typically respond within one business day.</p>

            {submitted ? (
              <div className="animate-fade-up" style={{ background: "rgba(78,115,82,0.08)", border: "1.5px solid var(--color-sage)", borderRadius: "14px", padding: "2rem", textAlign: "center" }}>
                <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "var(--color-sage)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1rem" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><polyline points="20,6 9,17 4,12" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", color: "var(--color-sage)", marginBottom: "0.5rem" }}>Message sent!</h3>
                <p style={{ fontSize: "0.88rem", color: "var(--color-muted)" }}>Thanks for reaching out, {form.name}. We'll be in touch at <strong>{form.email}</strong> within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="form-row">
                  <div>
                    <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "var(--color-ink-muted)", marginBottom: "0.4rem" }}>Your Name *</label>
                    <input className="input-custom" type="text" name="name" placeholder="James Chen" value={form.name} onChange={handleChange} required />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "var(--color-ink-muted)", marginBottom: "0.4rem" }}>Email Address *</label>
                    <input className="input-custom" type="email" name="email" placeholder="you@example.com" value={form.email} onChange={handleChange} required />
                  </div>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "var(--color-ink-muted)", marginBottom: "0.4rem" }}>Subject *</label>
                  <select className="input-custom" name="subject" value={form.subject} onChange={handleChange} required style={{ cursor: "pointer" }}>
                    <option value="">Select a subject...</option>
                    <option>General Question</option>
                    <option>Course Support</option>
                    <option>Billing & Refunds</option>
                    <option>Partnership / Business</option>
                    <option>Technical Issue</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "var(--color-ink-muted)", marginBottom: "0.4rem" }}>Message *</label>
                  <textarea className="input-custom" name="message" placeholder="Tell us how we can help..." value={form.message} onChange={handleChange} required rows={5} style={{ resize: "vertical", fontFamily: "var(--font-body)" }} />
                </div>
                <button type="submit" className="btn-primary" disabled={loading} style={{ justifyContent: "center", opacity: loading ? 0.75 : 1, cursor: loading ? "not-allowed" : "pointer" }}>
                  {loading ? (
                    <><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ animation: "spin 1s linear infinite" }}><path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0" strokeLinecap="round" strokeDasharray="60" strokeDashoffset="20" /></svg>Sending...</>
                  ) : (
                    <>Send Message <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="22" y1="2" x2="11" y2="13" strokeLinecap="round" /><polygon points="22,2 15,22 11,13 2,9" /></svg></>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* FAQ */}
          <div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.75rem", fontWeight: 700, color: "var(--color-ink)", letterSpacing: "-0.02em", marginBottom: "0.4rem" }}>Frequently Asked Questions</h2>
            <p style={{ fontSize: "0.88rem", color: "var(--color-muted)", marginBottom: "2rem" }}>Can't find what you're looking for? Send us a message.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{ background: "white", borderRadius: "12px", border: "1px solid", borderColor: openFaq === i ? "var(--color-ember)" : "var(--color-cream-darker)", overflow: "hidden", transition: "border-color 0.2s" }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.1rem 1.25rem", background: "none", border: "none", cursor: "pointer", textAlign: "left", gap: "1rem" }}>
                    <span style={{ fontWeight: 600, fontSize: "0.92rem", color: "var(--color-ink)", lineHeight: 1.4 }}>{faq.q}</span>
                    <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: openFaq === i ? "var(--color-ember)" : "var(--color-cream-dark)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "background 0.2s, transform 0.3s", transform: openFaq === i ? "rotate(45deg)" : "none", color: openFaq === i ? "white" : "var(--color-muted)" }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19" strokeLinecap="round" /><line x1="5" y1="12" x2="19" y2="12" strokeLinecap="round" /></svg>
                    </div>
                  </button>
                  <div style={{ maxHeight: openFaq === i ? "200px" : "0", overflow: "hidden", transition: "max-height 0.35s ease" }}>
                    <p style={{ padding: "0 1.25rem 1.1rem", fontSize: "0.88rem", color: "var(--color-ink-muted)", lineHeight: 1.65 }}>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @media (max-width: 900px) {
          .contact-layout { grid-template-columns: 1fr !important; }
          .contact-methods-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
