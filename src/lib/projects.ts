import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export type Project = {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  video: string;
  problem: string;
  idea: string;
  execution: string;
  result: string;
};

export const fetchProjects = async (): Promise<Project[]> => {
  try {
    const snapshot = await getDocs(collection(db, "projects"));
    const data = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as Project));
    return data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    // Return fallback data if Firebase fails
    return getFallbackProjects();
  }
};

// Fallback projects for when Firebase is not configured
const getFallbackProjects = (): Project[] => [
  {
    id: "nike-campaign",
    title: "Nike Campaign",
    category: "Ad Film",
    thumbnail: "/images/nike.png",
    video: "/videos/showreel.mp4",
    problem: "Nike wanted to connect emotionally with Gen Z audience who were becoming disconnected from traditional sports marketing.",
    idea: "A story-driven campaign showing authentic athlete journeys - struggle → growth → victory, featuring real stories instead of celebrity endorsements.",
    execution: "Shot in urban locations with cinematic lighting, slow motion, and documentary-style interviews. Used emerging creators and real athletes.",
    result: "3M+ views, 45% increase in engagement, and strong brand sentiment among 18-24 demographic.",
  },
  {
    id: "apple-product",
    title: "Apple Product Reel",
    category: "Product Ad",
    thumbnail: "/images/apple.png",
    video: "/videos/showreel.mp4",
    problem: "Apple needed to showcase their new product's innovative features while maintaining their premium brand aesthetic.",
    idea: "Create a visually stunning product reveal that emphasizes human connection and everyday moments enhanced by technology.",
    execution: "Macro photography, clean lighting, and seamless transitions. Focused on user stories rather than technical specifications.",
    result: "5M+ views, 30% lift in pre-orders, and featured in Apple's official marketing materials.",
  },
  {
    id: "bmw-launch",
    title: "BMW Launch Film",
    category: "Automotive",
    thumbnail: "/images/bmw.png",
    video: "/videos/showreel.mp4",
    problem: "BMW wanted to launch their new electric vehicle while maintaining their performance heritage and attracting younger buyers.",
    idea: "Blend the future of electric driving with BMW's racing legacy through a narrative that bridges generations.",
    execution: "High-speed cinematography, drone shots, and cutting-edge VFX. Combined classic BMW elements with futuristic visuals.",
    result: "8M+ views, 25% increase in test drive bookings, and won automotive advertising awards.",
  },
  {
    id: "channel-fashion",
    title: "Chanel Fashion Week",
    category: "Fashion",
    thumbnail: "/images/channel.png",
    video: "/videos/showreel.mp4",
    problem: "Chanel needed to create buzz for Fashion Week while making haute couture feel accessible to modern audiences.",
    idea: "Behind-the-scenes narrative showing the craftsmanship and artistry behind the collection, humanizing the luxury brand.",
    execution: "Elegant camera movements, natural lighting, and intimate interviews with designers and models. Captured the creative process.",
    result: "2M+ views, trended on social media, and increased brand engagement by 60%.",
  },
  {
    id: "google-pixel",
    title: "Google Pixel Launch",
    category: "Tech",
    thumbnail: "/images/google%20pixel.png",
    video: "/videos/showreel.mp4",
    problem: "Google Pixel needed to differentiate in a crowded smartphone market and highlight unique AI photography features.",
    idea: "Showcase real people capturing real moments with Pixel's AI capabilities, emphasizing authentic photography over technical specs.",
    execution: "User-generated content style with professional polish. Real stories, real people, real moments enhanced by Pixel technology.",
    result: "4M+ views, 35% increase in consideration, and became Google's most successful product launch video.",
  },
  {
    id: "luxury-brand",
    title: "Luxury Brand Story",
    category: "Brand Film",
    thumbnail: "/images/luxury.png",
    video: "/videos/showreel.mp4",
    problem: "A luxury heritage brand needed to modernize their image while maintaining their legacy and exclusivity.",
    idea: "Create a cinematic journey through time showing how tradition and innovation coexist in modern luxury.",
    execution: "Period-accurate recreations mixed with contemporary scenes. Used archival footage and modern cinematography.",
    result: "1.5M+ views, increased brand value perception, and attracted younger luxury consumers.",
  },
  {
    id: "michelin-restaurant",
    title: "Michelin Star Restaurant",
    category: "Food & Beverage",
    thumbnail: "/images/michelin.png",
    video: "/videos/showreel.mp4",
    problem: "A Michelin-starred restaurant wanted to showcase their culinary artistry to attract international clientele.",
    idea: "Tell the story of ingredients from farm to table, highlighting the chef's philosophy and culinary journey.",
    execution: "Macro food photography, kitchen documentary style, and interviews with local producers. Captured the artistry.",
    result: "500K+ views, fully booked for 3 months, and featured in international food publications.",
  },
  {
    id: "spotify-music",
    title: "Spotify Music Video",
    category: "Music Video",
    thumbnail: "/images/spotify.png",
    video: "/videos/showreel.mp4",
    problem: "An emerging artist needed a music video that would stand out on Spotify and social media platforms.",
    idea: "Create a visual narrative that mirrors the song's emotional journey with innovative visual effects and storytelling.",
    execution: "Mixed media approach combining live performance, abstract visuals, and narrative sequences. Used cutting-edge VFX.",
    result: "10M+ streams, viral on TikTok, and launched the artist's career to international recognition.",
  },
];
