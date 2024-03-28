import React, { useState, useMemo } from "react";

function App2() {
  const [items, setItems] = useState([
    { id: 1, name: "Apple", category: "fruits" },
    { id: 2, name: "Banana", category: "fruits" },
    { id: 3, name: "Carrot", category: "vegetables" },
    { id: 4, name: "Broccoli", category: "vegetables" },
    { id: 5, name: "Chicken", category: "meat" },
    { id: 6, name: "Beef", category: "meat" },
  ]);
  const [filter, setFilter] = useState("");

  const filteredItems = useMemo(() => {
    return items.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [items, filter]);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Search..."
      />
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App2;
