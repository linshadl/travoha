import { Bell, Menu, Search } from "lucide-react";

export const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white border-b">
      <div className="flex items-center space-x-4">
        <button className="md:hidden">
          <Menu />
        </button>
        <h1 className="text-xl font-bold text-blue-600 shrink-0">Travoha</h1>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button className="relative">
          <Bell />
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
        </button>
        <img
          src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          alt="User avatar"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </header>
  );
};