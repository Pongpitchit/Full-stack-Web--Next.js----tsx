"use client";
import { useEffect, useState } from "react";

interface Python {
  id: number;
  name: string;
  color: string;
  image_url: string;
  description: string;
}

export default function BallPythonPage() {
  const [data, setData] = useState<Python[]>([]);

  useEffect(() => {
    fetch("/api/ballpython")
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <main className="p-8 text-center">
      <div className="flex justify-between items-center mb-6 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold">Ball Python Gallery 🐍</h1>
        <a 
          href="/" 
          className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-lg"
        >
          ← Back to Dashboard
        </a>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {data.map((b) => (
          <a 
            key={b.id}
            href={`/ballpython/${b.id}`}
            className="bg-white p-4 rounded-xl shadow-lg w-60 hover:shadow-xl transition-all hover:scale-105 block"
          >
            <img src={b.image_url} alt={b.name} className="w-full h-40 object-cover rounded-lg" />
            <h2 className="text-lg font-semibold mt-2">{b.name}</h2>
            <p className="text-sm text-gray-500">{b.color}</p>
            <button className="mt-3 text-sm text-blue-500 hover:text-blue-700 font-medium">
              ดูรายละเอียด →
            </button>
          </a>
        ))}
      </div>
    </main>
  );
}
