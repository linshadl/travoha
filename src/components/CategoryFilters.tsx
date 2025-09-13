import { Waves, Users, Heart, Sailboat, Utensils, Moon, Palette, Sun } from 'lucide-react';

const categories = [
  { name: 'Trending', icon: <Waves className="h-6 w-6" /> },
  { name: 'On the Water', icon: <Sailboat className="h-6 w-6" /> },
  { name: 'Day Trips', icon: <Sun className="h-6 w-6" /> },
  { name: 'Families', icon: <Users className="h-6 w-6" /> },
  { name: 'Dates', icon: <Heart className="h-6 w-6" /> },
  { name: 'Tours', icon: <Sailboat className="h-6 w-6" /> },
  { name: 'Food & Drink', icon: <Utensils className="h-6 w-6" /> },
  { name: 'Night Owls', icon: <Moon className="h-6 w-6" /> },
  { name: 'Art & Culture', icon: <Palette className="h-6 w-6" /> },
];

interface CategoryFiltersProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

export const CategoryFilters = ({ activeCategory, setActiveCategory }: CategoryFiltersProps) => {
  return (
    <div className="py-2 border-b">
      <div className="flex space-x-2 md:space-x-4 overflow-x-auto pb-3 no-scrollbar snap-x snap-mandatory">
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => setActiveCategory(category.name)}
            className={`flex flex-col items-center justify-start pt-2 space-y-1 flex-shrink-0 w-24 h-20 snap-start focus:outline-none transition-colors duration-200 ${
              activeCategory === category.name
                ? 'text-primary border-b-2 border-primary'
                : 'text-muted-foreground hover:text-primary'
            }`}
          >
            {category.icon}
            <span className="text-xs text-center font-medium">{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};