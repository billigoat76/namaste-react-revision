import { useState } from "react";
import ItemsList from "./ItemsList";

export default function CategoryAccordion({ title, items }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-xl shadow-md mb-6 overflow-hidden border border-gray-200 bg-white">
      <div
        className="flex justify-between items-center px-6 py-4 bg-white hover:bg-gray-50 cursor-pointer transition duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <span className="text-gray-500 text-lg">{isOpen ? "−" : "+"}</span>
      </div>
      <div className={`transition-all duration-300 ${isOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
        <ItemsList items={items} />
      </div>
    </div>
  );
}
