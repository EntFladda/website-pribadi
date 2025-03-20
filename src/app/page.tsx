import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Saya",
  description: "Halaman Tentang Saya.",
  openGraph: {
    title: "Tentang Saya",
    description: "Halaman Tentang Saya.",
  },
};

export default function Home() {
  return (
    <div className="mt-16 px-8">
      <header className="text-center">
        <h1 className="font-bold text-4xl text-zinc-800">Tentang Saya</h1>
      </header>
      <div className="mt-8 max-w-3xl mx-auto">
        <p className="text-lg text-zinc-600 leading-relaxed">
          Halo, saya adalah seorang pengembang web dengan pengalaman dalam
          membangun aplikasi web modern. Saya memiliki minat dalam teknologi
          dan selalu berusaha untuk belajar hal baru.
        </p>
        <div className="mt-8 flex justify-center">
          <img
            src="/path/to/your/profile-picture.jpg"
            alt="Profile Picture"
            className="w-32 h-32 rounded-full shadow-lg"
          />
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-zinc-800">Keahlian</h2>
          <ul className="list-disc list-inside mt-4 text-zinc-600">
            <li>Pengembangan Frontend dengan React dan Next.js</li>
            <li>Pengembangan Backend dengan Node.js dan Express</li>
            <li>Desain UI/UX dengan Tailwind CSS</li>
            <li>Manajemen Basis Data dengan MongoDB dan MySQL</li>
          </ul>
        </div>
      </div>
    </div>
  );
}