import React from 'react';
import HowItWorks from './HowItWorks';
import { useEffect } from 'react';
const collectionsData = [
    {
      id: 1,
      image: 'https://i.pinimg.com/236x/1c/c3/28/1cc3283fac169667c198c84291141109.jpg',
      title: '13 Unmissable Gujarati Delicacies',
      places: '11 Places',
    },
    {
      id: 2,
      image: 'https://i.pinimg.com/236x/33/9b/b9/339bb9d3758a6078c7f8a7db996b0854.jpg',
      title: '11 Great Cafes',
      places: '15 Places',
    },
    {
      id: 3,
      image: 'https://i.pinimg.com/236x/16/92/b3/1692b3193ce168983c05e8f42b2997c6.jpg',
      title: '9 Local Favourite Places',
      places: '8 Places',
    },
    {
      id: 4,
      image: 'https://i.pinimg.com/236x/62/30/67/62306739ed186731b1f646029335e853.jpg',
      title: '7 Serene Rooftop Places',
      places: '5 Places',
    },
  ];
  
const MainContent = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

      
return (
    <main className="main-content">
      
    <section>
    <div className="collections">
      <h2>Collections</h2>
      <p>Explore curated lists of top restaurants, cafes, pubs, and bars in Surat, based on trends</p>
      <div className="collections-grid">
        {collectionsData.map((collection) => (
          <div key={collection.id} className="collection-card">
            <img src={collection.image} alt={collection.title} />
            <div className="collection-info">
              <h3>{collection.title}</h3>
              <p>{collection.places}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    
    </section>
    <HowItWorks />

    
    </main>
);
};
export default MainContent;
