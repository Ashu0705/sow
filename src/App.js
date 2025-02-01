import './App.css';
import ImageGallery from './components/ImageGallery';
import FeaturedCommunities from './components/FeaturedCommunities';

function App() {
  const images =  [
    {
      src: "/images/arabian-ranches-ii.jpg",
      alt: "Arabian Ranches",
      title: "Arabian Ranches",
      description: "Arabian Ranches offers a modern interpretation of the soothing charm of the surrounding desertscape. The development features a number of residential communities that draw inspiration from Spanish and..."
    },
    {
      src: "/images/arabian-ranches.jpg",
      alt: "Arabian Ranches II",
      title: "Arabian Ranches II",
      description: "Arabian Ranches offers a modern interpretation of the soothing charm of the surrounding desertscape. The development features a number of residential communities that draw inspiration from Spanish and..."
    },
    {
      src: "/images/downtown-dubai.jpg",
      alt: "Downtown Dubai",
      title: "Downtown Dubai",
      description: "The Centre of Now. The most prestigious square kilometre in the world. Downtown Dubai is no stranger to such accolades, and yet it's hard to overstate the prominence of this community..."
    },
    {
      src: "/images/dubai-hills-estate.jpg",
      alt: "Dubai Hills Estate",
      title: "Dubai Hills Estate",
      description: "Sustainably designed, Dubai Hills Estate is a first of its kind destination. This masterfully planned 2,700-acre multi-purpose development will form an integral part of the Mohammed Bin Rashid City..."
    },
    {
      src: "/images/dubai-marina.png",
      alt: "Dubai Marina",
      title: "Dubai Marina",
      description: "Dubai Marina is one of the world's largest, most meticulously planned waterfront developments and offers the exhilaration and vibrancy of a chic, urban lifestyle together with all the advantages of living on the water..."
    },
    {
      src: "/images/emirates-living.jpg",
      alt: "Emirates Living",
      title: "Emirates Living",
      description: "Launched in 2008, Emirates Living is a modern lifestyle community focused on outdoor leisure. Emirates Living offers a serene nature-filled sanctuary, with 8,659 premium villas nestled within 52.2 million..."
    },
  ];
  
  
  return (
   <div>
    <ImageGallery images={images} />
    <FeaturedCommunities images={images} />
   </div>
  );
}

export default App;
