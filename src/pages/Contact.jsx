import React, { useState } from "react";
import { CheckCircle2, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const CONTACT_EMAIL = "theunseenprojectofficial@gmail.com";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "general", message: "" });
  const [sent, setSent] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`[${form.subject}] Message from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
    toast({ title: "Opening your email app", description: "Send the prepared message there and our team will receive it." });
  };

  return (
    <div>
      <section className="page-intro">
        <div className="site-container grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div><p className="eyebrow">Contact</p><h1 className="page-title mt-6">Let’s make something useful happen.</h1></div>
          <p className="max-w-xl text-lg leading-8 text-muted-foreground">Ask about hosting a box, starting a collection drive, volunteering, or working together on distribution.</p>
        </div>
      </section>

      <section className="pb-20 lg:pb-32">
        <div className="site-container grid gap-14 border-t border-foreground/15 pt-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24 lg:pt-16">
          <aside>
            <p className="eyebrow">Direct email</p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="mt-5 flex items-start gap-3 break-all text-base font-semibold text-primary hover:underline">
              <Mail className="mt-0.5 h-5 w-5 shrink-0" />{CONTACT_EMAIL}
            </a>
            <p className="mt-10 text-sm leading-6 text-muted-foreground">Based in the Philadelphia area and building a growing collection network with local schools, businesses, and community organizations.</p>
            <img src="/images/community/collection-box-school.jpg" alt="The Unseen Project collection box" loading="lazy" className="mt-10 h-80 w-full object-cover" />
          </aside>

          <div>
            {sent ? (
              <div className="flex min-h-[480px] flex-col items-start justify-center border-y border-foreground/15 py-16">
                <CheckCircle2 className="h-12 w-12 text-primary" />
                <h2 className="mt-6 font-serif text-5xl">Your email app should be open.</h2>
                <p className="mt-4 max-w-xl leading-7 text-muted-foreground">Review the prepared message and press send there. We look forward to hearing from you.</p>
                <Button variant="outline" className="mt-8 rounded-none" onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "general", message: "" }); }}>Write another message</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7" aria-label="Contact form">
                <div className="grid gap-7 sm:grid-cols-2">
                  <div className="space-y-2"><Label htmlFor="name">Full name</Label><Input id="name" autoComplete="name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="h-12 rounded-none bg-white" /></div>
                  <div className="space-y-2"><Label htmlFor="email">Email address</Label><Input id="email" type="email" autoComplete="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="h-12 rounded-none bg-white" /></div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">What would you like to discuss?</Label>
                  <Select value={form.subject} onValueChange={(value) => setForm({ ...form, subject: value })}>
                    <SelectTrigger id="subject" className="h-12 rounded-none bg-white"><SelectValue /></SelectTrigger>
                    <SelectContent><SelectItem value="general">General inquiry</SelectItem><SelectItem value="host_box">Host a collection box</SelectItem><SelectItem value="donate">Donate eyewear</SelectItem><SelectItem value="partner">Partnership opportunity</SelectItem></SelectContent>
                  </Select>
                </div>
                <div className="space-y-2"><Label htmlFor="message">Message</Label><Textarea id="message" required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="min-h-48 rounded-none bg-white" /></div>
                <Button type="submit" className="brand-button rounded-none"><Send className="h-4 w-4" /> Prepare email</Button>
                <p className="text-xs text-muted-foreground">Submitting opens your default email app. No form data is stored on this website.</p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
