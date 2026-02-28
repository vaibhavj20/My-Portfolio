"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Reveal } from "./Reveal";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus(null);

    const formData = new FormData(form.current);
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    const name_initial = name ? name.charAt(0).toUpperCase() : "?";
    const time = new Date().toLocaleString("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
    });

    const templateParams = {
      name,
      email,
      subject,
      message,
      name_initial,
      time,
    };

    const serviceId = "service_rt7i3f4";
    const templateId = "template_mluk9lx";
    const publicKey = "W-0WaggQjS7eIil78";

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(
        (result) => {
          setStatus("success");
          form.current.reset();
        },
        (error) => {
          setStatus("error");
          console.error("EmailJS Error:", error);
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section id="contact" className="pt-4 pb-8 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-sora relative overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-16 items-start">

        {/* Left Side: Career-Focused Messaging */}
        <div className="lg:w-1/2 space-y-8 sticky top-32">
          <div className="relative">
            {/* Precision Blur Circle - matching Projects section exactly */}
            <div className="absolute top-6 left-10 w-20 h-20 bg-maincolor opacity-20 rounded-full blur-[35px] z-0" />

            <Reveal width="100%">
              <h3 className="relative z-10 text-xs text-white/50 uppercase tracking-[0.2em] mb-5">
                HIRE ME
              </h3>
            </Reveal>
            <Reveal width="100%">
              <div className="relative z-10 text-2xl lg:text-4xl font-medium leading-tight text-white mb-6">
                <span className="mb-2 block">Ready for the</span>
                <span className="text-maincolor">next challenge.</span>
              </div>
            </Reveal>
          </div>

          <Reveal width="100%">
            <p className="text-white/60 text-sm sm:text-base font-normal max-w-lg leading-relaxed">
              I&apos;m currently actively looking for <span className="text-white">DevOps Engineering</span> roles
              and <span className="text-white">Internships</span>. If you&apos;re looking for a dedicated
              engineer to join your team or have a <span className="text-white">Freelance</span> project,
              let&apos;s connect.
            </p>
          </Reveal>

          <Reveal width="100%">
            <div className="pt-4 flex items-center gap-4">
              <div className="w-12 h-[1px] bg-maincolor/30" />
              <span className="text-xs uppercase tracking-widest text-white/30 font-bold italic">
                Actively seeking DevOps opportunities
              </span>
            </div>
          </Reveal>
        </div>

        {/* Right Side: Contact Form with Uniform Corner Dots */}
        <div className="lg:w-1/2 w-full">
          <Reveal width="100%" delay={0.4}>
            <div className="relative bg-[#1d1d1d] p-10 md:p-14 border border-white/5 rounded-sm">

              <form ref={form} onSubmit={sendEmail} className="space-y-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                  {/* Name */}
                  <div className="space-y-2.5">
                    <label htmlFor="name" className="text-[10px] uppercase tracking-widest text-white/40 font-bold block ml-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Your Name"
                      className="w-full bg-white/[0.03] border border-white/5 px-5 py-3.5 text-white text-[14px] focus:outline-none focus:border-maincolor/30 transition-all rounded-sm placeholder:text-white/10"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2.5">
                    <label htmlFor="email" className="text-[10px] uppercase tracking-widest text-white/40 font-bold block ml-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="name@example.com"
                      className="w-full bg-white/[0.03] border border-white/5 px-5 py-3.5 text-white text-[14px] focus:outline-none focus:border-maincolor/30 transition-all rounded-sm placeholder:text-white/10"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2.5">
                  <label htmlFor="subject" className="text-[10px] uppercase tracking-widest text-white/40 font-bold block ml-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    placeholder="Internship / Job Opportunity"
                    className="w-full bg-white/[0.03] border border-white/5 px-4 py-3.5 text-white text-[14px] focus:outline-none focus:border-maincolor/30 transition-all rounded-sm placeholder:text-white/10"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2.5">
                  <label htmlFor="message" className="text-[10px] uppercase tracking-widest text-white/40 font-bold block ml-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    placeholder="I'd love to hear from you."
                    className="w-full bg-white/[0.03] border border-white/5 px-4 py-3.5 text-white text-[14px] focus:outline-none focus:border-maincolor/30 transition-all rounded-sm resize-none placeholder:text-white/10"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="pt-4 flex flex-col sm:flex-row items-center gap-6">
                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full sm:w-auto px-10 py-4 bg-maincolor text-black font-bold uppercase tracking-widest text-[11px] hover:bg-opacity-90 disabled:opacity-50 transition-all duration-300 flex items-center justify-center gap-3 active:scale-[0.98]"
                  >
                    {isSending ? "Sending..." : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  {/* Status Messages */}
                  {status === "success" && (
                    <div className="flex items-center gap-2 text-maincolor">
                      <CheckCircle2 className="w-4 h-4" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">Message Sent!</span>
                    </div>
                  )}
                  {status === "error" && (
                    <div className="flex items-center gap-2 text-red-500">
                      <AlertCircle className="w-4 h-4" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">Failed to send.</span>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
