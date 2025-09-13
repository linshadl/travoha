import { useState } from 'react';
import { Header } from '@/components/Header';
import { CategoryFilters } from '@/components/CategoryFilters';
import { ExperienceCard } from '@/components/ExperienceCard';
import { MadeWithDyad } from "@/components/made-with-dyad";
import { BottomNavbar } from '@/components/BottomNavbar';

const mockExperiences = [
  {
    id: 1,
    image: '/exp1.svg',
    title: 'Alleppey Food Walk: 2 Hours Guided Local Food Tasting...',
    price: 18,
    rating: 4.7,
    reviews: 29,
    category: 'Food & Drink',
  },
  {
    id: 2,
    image: '/exp2.svg',
    title: 'Houseboat Tour: Aleppey\'s Best Canals',
    price: 159,
    rating: 4.8,
    reviews: 33,
    category: 'On the Water',
  },
  {
    id: 3,
    image: '/exp3.svg',
    title: 'Alleppey Backwater Village Exploration Kayaking through...',
    price: 29,
    rating: 5.0,
    reviews: 27,
    category: 'On the Water',
  },
  {
    id: 4,
    image: '/exp4.svg',
    title: 'Private Luxury Houseboat Journey: Alleppey Backwaters...',
    price: 256,
    rating: 4.7,
    reviews: 27,
    category: 'Dates',
  },
  {
    id: 5,
    image: '/exp5.svg',
    title: 'Sunrise Kayaking in the Backwaters',
    price: 35,
    rating: 4.9,
    reviews: 45,
    category: 'Day Trips',
  },
  {
    id: 6,
    image: '/exp6.svg',
    title: 'Kerala Sadya Cooking Class',
    price: 40,
    rating: 4.8,
    reviews: 18,
    category: 'Food & Drink',
  },
  {
    id: 7,
    image: '/exp7.svg',
    title: 'Village Life Experience Tour',
    price: 25,
    rating: 4.6,
    reviews: 52,
    category: 'Tours',
  },
  {
    id: 8,
    image: '/exp8.svg',
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
  const [wishlist, setWishlist] = useState<number[]>([]);

  const handleToggleWishlist = (experienceId: number) => {
    setWishlist((prevWishlist) =>
      prevWishlist.includes(experienceId)
        ? prevWishlist.filter((id) => id !== experienceId)
        : [...prevWishlist, experienceId]
    );
  };

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
            <ExperienceCard 
              key={exp.id} 
              experience={exp}
              isWishlisted={wishlist.includes(exp.id)}
              onToggleWishlist={() => handleToggleWishlist(exp.id)}
            />
          ))}
        </div>
      </main>
      <MadeWithDyad />
      <BottomNavbar />
    </div>
  );
};

export default Index;