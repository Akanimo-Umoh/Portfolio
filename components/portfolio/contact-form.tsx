"use client"

import { useState } from "react"
import emailjs from "@emailjs/browser"

type FormState = {
  name: string
  email: string
  subject: string
  message: string
}

type Status = "idle" | "sending" | "success" | "error"

export function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState<Status>("idle")

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    const { name, email, subject, message } = form
    if (!name || !email || !message) return

    setStatus("sending")

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: name,
          from_email: email,
          subject: subject || "No subject",
          message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      setStatus("success")
      setForm({ name: "", email: "", subject: "", message: "" })
    } catch {
      setStatus("error")
    }
  }

  const inputClass = `
    w-full rounded-xl border bg-transparent px-4 py-3
    font-sans text-sm text-stone-800 dark:text-stone-100
    placeholder:text-stone-400 dark:placeholder:text-stone-600
    border-stone-200 dark:border-white/[0.08]
    focus:border-amber-500 dark:focus:border-amber-500
    focus:outline-none focus:ring-0
    transition-colors duration-200
  `

  return (
    <div className="flex w-full flex-col gap-4">
      {/* Name + Email row */}
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="flex flex-1 flex-col gap-1.5">
          <label className="font-mono text-[11px] tracking-widest text-stone-400 uppercase dark:text-stone-500">
            Name <span className="text-amber-500">*</span>
          </label>
          <input
            name="name"
            type="text"
            placeholder="John Doe"
            value={form.name}
            onChange={handleChange}
            disabled={status === "sending"}
            className={inputClass}
          />
        </div>

        <div className="flex flex-1 flex-col gap-1.5">
          <label className="font-mono text-[11px] tracking-widest text-stone-400 uppercase dark:text-stone-500">
            Email <span className="text-amber-500">*</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="john@company.com"
            value={form.email}
            onChange={handleChange}
            disabled={status === "sending"}
            className={inputClass}
          />
        </div>
      </div>

      {/* Subject */}
      <div className="flex flex-col gap-1.5">
        <label className="font-mono text-[11px] tracking-widest text-stone-400 uppercase dark:text-stone-500">
          Subject
        </label>
        <input
          name="subject"
          type="text"
          placeholder="Frontend role / Collaboration / Just saying hi"
          value={form.subject}
          onChange={handleChange}
          disabled={status === "sending"}
          className={inputClass}
        />
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label className="font-mono text-[11px] tracking-widest text-stone-400 uppercase dark:text-stone-500">
          Message <span className="text-amber-500">*</span>
        </label>
        <textarea
          name="message"
          rows={5}
          placeholder="Tell me about the role, project, or just say hello..."
          value={form.message}
          onChange={handleChange}
          disabled={status === "sending"}
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Success / Error feedback */}
      {status === "success" && (
        <div className="rounded-xl bg-green-50 px-4 py-3 dark:bg-green-900/20">
          <p className="font-sans text-sm text-green-700 dark:text-green-400">
            ✓ Message sent — I&apos;ll get back to you within 24 hours.
          </p>
        </div>
      )}

      {status === "error" && (
        <div className="rounded-xl bg-red-50 px-4 py-3 dark:bg-red-900/20">
          <p className="font-sans text-sm text-red-600 dark:text-red-400">
            Something went wrong. Try emailing me directly at{" "}
            <a
              href="mailto:ak.dev003@gmail.com"
              className="underline underline-offset-2"
            >
              ak.dev003@gmail.com
            </a>
          </p>
        </div>
      )}

      {/* Submit */}
      <button
        onClick={handleSubmit}
        disabled={
          status === "sending" || !form.name || !form.email || !form.message
        }
        className={`mt-1 w-full rounded-xl px-8 py-3.5 font-mono text-xs tracking-widest uppercase transition-all duration-200 ${
          status === "sending" || !form.name || !form.email || !form.message
            ? "cursor-not-allowed bg-stone-200 text-stone-400 dark:bg-stone-800 dark:text-stone-600"
            : "cursor-pointer bg-amber-600 text-white hover:opacity-85 dark:bg-amber-500"
        } `}
      >
        {status === "sending" ? "Sending..." : "Send Message →"}
      </button>
    </div>
  )
}
