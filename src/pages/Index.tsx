import { useState } from 'react';
import { Header } from '@/components/Header';
import { CategoryFilters } from '@/components/CategoryFilters';
import { ExperienceCard } from '@/components/ExperienceCard';
import { MadeWithDyad } from "@/components/made-with-dyad";
import { BottomNavbar } from '@/components/BottomNavbar';

const mockExperiences = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1593693397638-79b1a1a4b3a9?q=80&w=800&auto=format&fit=crop',
    title: 'Alleppey Food Walk: 2 Hours Guided Local Food Tasting...',
    price: 18,
    rating: 4.7,
    reviews: 29,
    category: 'Food & Drink',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1589921324993-e4785d3a7564?q=80&w=800&auto=format&fit=crop',
    title: 'Houseboat Tour: Aleppey\'s Best Canals',
    price: 159,
    rating: 4.8,
    reviews: 33,
    category: 'On the Water',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1619450528393-63b3633359a2?q=80&w=800&auto=format&fit=crop',
    title: 'Alleppey Backwater Village Exploration Kayaking through...',
    price: 29,
    rating: 5.0,
    reviews: 27,
    category: 'On the Water',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1542296332-935532a24b22?q=80&w=800&auto=format&fit=crop',
    title: 'Private Luxury Houseboat Journey: Alleppey Backwaters...',
    price: 256,
    rating: 4.7,
    reviews: 27,
    category: 'Dates',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1603834359334-26a769b7a1f4?q=80&w=800&auto=format&fit=crop',
    title: 'Sunrise Kayaking in the Backwaters',
    price: 35,
    rating: 4.9,
    reviews: 45,
    category: 'Day Trips',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1613779351882-382c18388392?q=80&w=800&auto=format&fit=crop',
    title: 'Kerala Sadya Cooking Class',
    price: 40,
    rating: 4.8,
    reviews: 18,
    category: 'Food & Drink',
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1580489232382-49123940598a?q=80&w=800&auto=format&fit=crop',
    title: 'Village Life Experience Tour',
    price: 25,
    rating: 4.6,
    reviews: 52,
    category: 'Tours',
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1566489344919-a68a78a3c0f4?q=80&w=800&auto=format&fit=crop',
    title: 'Overnight Stay in a Premium Houseboat',
    price: 300,
    rating: 4.9,
    reviews: 60,
    category: 'On the Water',
  },
];

const Index = () => {
  const [activeCategory, setActiveCategory] = useState('Trending');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredExperiences = mockExperiences
    .filter(exp => 
      activeCategory === 'Trending' || exp.category === activeCategory
    )
    .filter(exp =>
      exp.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header 
        searchTerm={searchTerm} 
        onSearchChange={(e) => setSearchTerm(e.target.value)} 
      />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <CategoryFilters activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 mt-8">
          {filteredExperiences.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
      </main>
      <MadeWithDyad />
      <BottomNavbar />
    </div>
  );
};

export default Index;