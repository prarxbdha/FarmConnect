  import { useEffect, useState } from "react";

function App() {
  const [farmers, setFarmers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/farmers")
      .then((res) => res.json())
      .then((data) => {
        setFarmers(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-green-700 text-white py-4 shadow">
        <div className="max-w-5xl mx-auto px-4 flex items-center justify-between">
          <h1 className="text-xl md:text-2xl font-semibold">
            FarmConnect · Bangalore
          </h1>
          <span className="text-sm md:text-base opacity-90">
            Farmers → Consumers, directly
          </span>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-6">
        {loading ? (
          <p className="text-slate-600">Loading farmers...</p>
        ) : farmers.length === 0 ? (
          <p className="text-slate-600">
            No farmers listed yet. Seed some data in the backend.
          </p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {farmers.map((farmer) => (
              <article
                key={farmer._id || farmer.id}
                className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 flex flex-col justify-between"
              >
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">
                    {farmer.name}
                  </h2>
                  <p className="text-sm text-slate-600 mt-1">
                    {farmer.location || "Bangalore region"}
                  </p>
                  <p className="mt-2 text-sm">
                    <span className="font-medium text-slate-800">Produce:</span>{" "}
                    {farmer.produce || "Fresh vegetables"}
                  </p>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span className="inline-flex items-center rounded-full bg-green-100 text-green-800 text-xs font-medium px-3 py-1">
                    Local farmer
                  </span>
                  <button className="text-xs font-medium text-green-700 hover:text-green-800">
                    View details
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
