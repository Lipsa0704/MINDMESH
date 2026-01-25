const Card = ({ title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 w-full">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Card;
