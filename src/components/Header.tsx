import { Search, User, Menu } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  searchTerm: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Header = ({ searchTerm, onSearchChange }: HeaderProps) => {
  return (
    <header className="flex items-center justify-between p-4 border-b bg-white sticky top-0 z-10">
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-bold text-blue-600">Travoha</h1>
        <div className="hidden md:flex items-center space-x-2 text-sm text-gray-500">
          <span>India</span>
          <span>&gt;</span>
          <span>Kerala</span>
          <span>&gt;</span>
          <span className="font-semibold text-black">Alappuzha</span>
        </div>
      </div>
      <div className="flex-1 max-w-md mx-4 hidden sm:block">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input 
            placeholder="Search for experiences" 
            className="pl-10"
            value={searchTerm}
            onChange={onSearchChange}
          />
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Button variant="ghost" className="hidden md:inline-flex">PRO</Button>
        <Button variant="ghost" className="hidden lg:inline-flex">Peek Pro for Business</Button>
        <Button variant="ghost" size="icon">
          <User className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
};