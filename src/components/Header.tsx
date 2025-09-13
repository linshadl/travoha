import { Search } from "lucide-react";

interface HeaderProps {
  searchTerm: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Header = ({ searchTerm, onSearchChange }: HeaderProps) => {
  return (
    <header className="flex items-center justify-between p-4 bg-white border-b space-x-4">
      <h1 className="text-xl font-bold text-blue-600 shrink-0">Travoha</h1>
      <div className="relative flex-grow max-w-xl">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search destination"
          className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={onSearchChange}
        />
      </div>
    </header>
  );
};