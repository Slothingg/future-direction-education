"use client";

import { FormEvent, useState } from "react";

const categories = ["課程", "企業培訓", "院校合作", "其他"];

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (!name || !phone || !email || !message) {
      setError("請填寫所有必填欄位。");
      return;
    }
    setError("");
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-2xl bg-white p-8 shadow-sm">
        <h3 className="text-xl font-semibold text-navy">已收到你的查詢</h3>
        <p className="mt-3 leading-7 text-muted">
          這是前端示範提交。正式聯絡方式待中心公布後，我們會按你留下的電話或電郵回覆。
        </p>
      </div>
    );
  }

  return (
            <form onSubmit={onSubmit} className="tech-card rounded-2xl p-6 md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block">
          <span className="label">姓名 *</span>
          <input name="name" className="input" required />
        </label>
        <label className="block">
          <span className="label">公司／機構</span>
          <input name="company" className="input" />
        </label>
        <label className="block">
          <span className="label">電話 / WhatsApp *</span>
          <input name="phone" className="input" required />
        </label>
        <label className="block">
          <span className="label">電郵 *</span>
          <input name="email" type="email" className="input" required />
        </label>
        <label className="block md:col-span-2">
          <span className="label">查詢類別 *</span>
          <select name="category" className="input" defaultValue="課程">
            {categories.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </label>
        <label className="block md:col-span-2">
          <span className="label">留言 *</span>
          <textarea name="message" rows={5} className="input" required />
        </label>
      </div>
      {error ? <p className="mt-4 text-sm text-red-600">{error}</p> : null}
      <button type="submit" className="btn-primary mt-6">
        送出查詢
      </button>
    </form>
  );
}
