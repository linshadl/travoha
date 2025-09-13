import { Button } from '@/components/ui/button';
import { Waves, Users, Heart, Sailboat, Utensils, Moon, Palette, Filter } from 'lucide-react';

const categories = [
  { name: 'Trending', icon: <Waves className="h-5 w-5 mr-2" /> },
  { name: 'On the Water', icon: <Sailboat className="h-5 w-5 mr-2" /> },
  { name: 'Families', icon: <Users className="h-5 w-5 mr-2" /> },
  { name: 'Dates', icon: <Heart className="h-5 w-5 mr-2" /> },
  { name: 'Tours', icon: <Sailboat className="h-5 w-5 mr-2" /> },
  { name: 'Food & Drink', icon: <Utensils className="h-5 w-5 mr-2" /> },
  { name: 'Night Owls', icon: <Moon className="h-5 w-5 mr-2" /> },
  { name: 'Art & Culture', icon: <Palette className="h-5 w-5 mr-2" /> },
];

export const CategoryFilters = () => {
  return (
    <div className="py-4 border-b">
      <div className="flex items-center justify-between gap-4">
        <div className="flex-grow space-x-2 overflow-x-auto pb-2 -mb-2 no-scrollbar snap-x snap-mandatory">
          {categories.map((category, index) => (
            <Button key={category.name} variant={index === 0 ? 'secondary' : 'ghost'} className="flex-shrink-0 snap-start">
              {category.icon}
              {category.name}
            </Button>
          ))}
        </div>
        <Button variant="outline" className="flex-shrink-0">
          <Filter className="h-5 w-5 md:mr-2" />
          <span className="hidden md:inline">Filter</span>
        </Button>
      </div>
    </div>
  );
};