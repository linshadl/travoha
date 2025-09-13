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
      <div className="flex items-center justify-between">
        <div className="flex space-x-2 overflow-x-auto pb-2 -mb-2">
          {categories.map((category, index) => (
            <Button key={category.name} variant={index === 0 ? 'secondary' : 'ghost'} className="flex-shrink-0">
              {category.icon}
              {category.name}
            </Button>
          ))}
        </div>
        <Button variant="outline" className="hidden md:inline-flex ml-4">
          <Filter className="h-5 w-5 mr-2" />
          Filter
        </Button>
      </div>
    </div>
  );
};