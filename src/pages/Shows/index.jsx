
import { fetchShows } from "@/api";
import { useState, useEffect } from "react";

export default function Shows() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    async function loadShows() {
      const data = await fetchShows();
      setShows(data);
    }
    loadShows();
  }, []);

  return (
    <div className="dark bg-black text-white min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-6">Line-Up</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {shows.map((show, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <img src={show.imgUrl} alt={show.name} className="w-full h-60 object-cover rounded-md" />
            <h2 className="text-2xl font-semibold mt-4">{show.name}</h2>
            <p className="text-gray-400">{show.description}</p>
            <p className="text-sm mt-2">
              <strong>Local:</strong> {show.location}
            </p>
            <p className="text-sm">
              <strong>Data:</strong> {new Date(show.startDate).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
