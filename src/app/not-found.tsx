import Link from "next/link";

export default function NotFound() {
  return (
    <section className="px-4 py-24 text-center">
      <h1 className="font-display text-4xl font-semibold text-navy">找不到頁面</h1>
      <p className="mt-4 text-muted">請返回首頁或瀏覽課程。</p>
      <Link href="/" className="btn-primary mt-6 inline-flex">
        回到首頁
      </Link>
    </section>
  );
}
