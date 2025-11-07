"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface Python {
  id: number;
  name: string;
  color: string;
  image_url: string;
  description: string;
}

export default function BallPythonDetail() {
  const { id } = useParams();
  const [python, setPython] = useState<Python | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/ballpython/${id}`)
      .then(res => res.json())
      .then(data => {
        setPython(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-2xl text-gray-600">กำลังโหลด...</div>
      </main>
    );
  }

  if (!python) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">ไม่พบข้อมูล</h1>
          <a href="/ballpython" className="text-blue-500 hover:underline text-lg">
            ← กลับไปหน้ารายการ
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-6">
          <a 
            href="/ballpython" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-lg"
          >
            ← กลับไปหน้ารายการ
          </a>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img 
                src={python.image_url} 
                alt={python.name} 
                className="w-full h-full object-cover min-h-96"
              />
            </div>
            
            <div className="md:w-1/2 p-8">
              <h1 className="text-4xl font-bold mb-4 text-gray-800">
                {python.name}
              </h1>
              
              <div className="mb-6">
                <span className="inline-block bg-gradient-to-r from-green-400 to-green-600 text-white px-5 py-2 rounded-full font-semibold text-lg">
                  🎨 {python.color}
                </span>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                  📝 รายละเอียด
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line">
                  {python.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="text-sm text-gray-500">
                  <p><strong>ID:</strong> #{python.id}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <a 
            href="/ballpython" 
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-lg"
          >
            กลับไปหน้ารายการทั้งหมด
          </a>
        </div>
      </div>
    </main>
  );
}
