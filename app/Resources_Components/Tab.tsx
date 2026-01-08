
export default function Tab({ label, value, activeTab, setActiveTab }) {
  const isActive = activeTab === value;

  return (
    <button
  	onClick={() => setActiveTab(value)}
  	className={`!px-4 !py-2 text-lg font-medium rounded-xl transition
    		${isActive ? "border-2 border-red-500 text-red-500": "border-2 border-transparent text-gray-500 hover:border-black hover:text-black"}`}>
  	{label}
    </button>
  );
}
