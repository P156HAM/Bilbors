// NotFoundPage.tsx
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800">
        Den här sidan har blivit omodern
      </h1>
      <p className="text-xl font-semibold text-gray-700 mt-4">
        Sidan existerar inte. Dubbelkolla länken eller använd
      </p>
      <p className="text-xl text-gray-600 mt-2">
        sökfunktionen ovan för att hitta det du söker.
      </p>
      <Link
        to="/"
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Tillbaka till startsidan
      </Link>
    </div>
  );
}

export default NotFoundPage;
