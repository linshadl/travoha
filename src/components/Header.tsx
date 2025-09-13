import { Menu } from "lucide-react";

export const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white border-b">
      <div className="flex items-center space-x-4">
        <button className="md:hidden">
          <Menu />
        </button>
        <h1 className="text-xl font-bold text-blue-600 shrink-0">Travoha</h1>
      </div>
    </header>
  );
};