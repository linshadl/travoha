import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

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
}

export const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <Card className="overflow-hidden border-none shadow-none rounded-lg">
      <CardContent className="p-0">
        <img src={experience.image} alt={experience.title} className="w-full h-48 object-cover rounded-lg" />
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