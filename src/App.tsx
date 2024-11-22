import React, { useEffect, useState } from "react";
import { getPoems } from "./services/poetry";
import Dashboard from "./screens/Dashboard/Dashboard";

const App: React.FC = () => {
  const [poems, setPoems] = useState<{ id: string; title: string; excerpt: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const poemsData = await getPoems("poems");
      setPoems(poemsData);
      setLoading(false);
    };

    fetchData();
  }, []);

  const handleViewPoem = (id: string) => {
    console.log(`View poem with ID: ${id}`);
  };

  if (loading) return <p>Loading...</p>;
  if (poems.length === 0) return <p>No poems found.</p>;

  return <Dashboard poems={poems} onViewPoem={handleViewPoem} />;
};

export default App;
