import { useState } from "react";

function ToggleMessage() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-100">
      <button
        onClick={() => setVisible(!visible)}
        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500"
      >
        Toggle Message
      </button>

      {visible && (
        <p className="mt-4 text-lg text-green-700 font-semibold">
          Hello from React Testing Library!
        </p>
      )}
    </div>
  );
}

export default ToggleMessage;
