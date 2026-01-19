export default function Card({ title, children }) {
  return (
    <div className="max-w-sm p-6 bg-white border rounded-xl shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        {title}
      </h2>
      <div className="text-gray-600">
        {children}
      </div>
    </div>
  );
}
