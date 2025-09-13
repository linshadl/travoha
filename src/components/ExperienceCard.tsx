import { Card, CardContent } from '@/components/ui/card';
import { Star, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Experience {
  id: number;
  image: string;
  title: string;
  price: number;
  rating: number;
  reviews: number;
}

interface ExperienceCardProps {
  experience: Experience;
  isWishlisted: boolean;
  onToggleWishlist: () => void;
}

export const ExperienceCard = ({ experience, isWishlisted, onToggleWishlist }: ExperienceCardProps) => {
  return (
    <Card className="overflow-hidden border-none shadow-none rounded-lg">
      <CardContent className="p-0 relative">
        <img src={experience.image} alt={experience.title} className="w-full h-48 object-cover rounded-lg" />
        <button
          onClick={(e) => {
            e.preventDefault();
            onToggleWishlist();
          }}
          className="absolute top-3 right-3 bg-white/70 backdrop-blur-sm p-1.5 rounded-full text-gray-700 hover:text-red-500 transition-colors z-10"
          aria-label="Toggle Wishlist"
        >
          <Heart className={cn("h-5 w-5 transition-all", isWishlisted ? "text-red-500 fill-red-500" : "text-gray-700")} />
        </button>
        <div className="pt-2">
          <p className="text-sm text-gray-600">From ${experience.price}</p>
          <h3 className="font-semibold mt-1 text-left">{experience.title}</h3>
          <div className="flex items-center text-sm mt-2">
            <Star className="h-4 w-4 text-yellow-500 fill-current mr-1" />
            <span className="font-bold">{experience.rating}</span>
            <span className="text-gray-500 ml-1">({experience.reviews} reviews)</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};