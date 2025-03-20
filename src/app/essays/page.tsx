import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Esai",
  description: "Halaman Esai.",
  openGraph: {
    title: "Esai",
    description: "Halaman Esai.",
  },
};

type EssayItemProps = {
  title: string;
  description: string;
  url: string;
};

function EssayItem({ title, description, url }: EssayItemProps) {
  return (
    <li className="border rounded-lg p-4 shadow-md">
      <a href={url} className="block hover:bg-gray-100 p-4 rounded-lg">
        <h2 className="font-bold text-xl mb-2">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </a>
    </li>
  );
}

export default function Essays() {
  const essays = [
    { title: "Esai 1", description: "Deskripsi esai 1", url: "/essays/1" },
    { title: "Esai 2", description: "Deskripsi esai 2", url: "/essays/2" },
    // Tambahkan lebih banyak esai di sini
  ];

  return (
    <div className="mt-16 px-8">
      <header>
        <h1 className="font-bold text-4xl text-zinc-800">Esai</h1>
      </header>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {essays.map((essay, index) => (
          <EssayItem
            key={index}
            title={essay.title}
            description={essay.description}
            url={essay.url}
          />
        ))}
      </ul>
    </div>
  );
}