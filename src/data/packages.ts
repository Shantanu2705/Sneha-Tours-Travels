export interface TourPackage {
  id: string;
  title: string;
  duration: string;
  location: string;
  image: string;
  description: string;
  longDescription?: string;
  highlights: string[];
  itinerary?: { day: number; title: string; description: string }[];
  category: 'Sikkim' | 'Darjeeling' | 'Dooars';
}

export const packages: TourPackage[] = [
  {
    id: 'north-sikkim-4n5d',
    title: 'North Sikkim Adventure',
    duration: '4 Nights / 5 Days',
    location: 'Gangtok • Lachung • Yumthang Valley',
    image: '/images/pkg_sikkim.png',
    description: 'Experience the breathtaking beauty of North Sikkim — from Gangtok to the serene landscapes of Lachung and Yumthang Valley.',
    longDescription: 'Experience the breathtaking beauty of North Sikkim with Sneha Tours & Travels — from the vibrant mountain town of Gangtok to the serene landscapes of Lachung and the stunning Yumthang Valley. A perfect Himalayan escape filled with snow-capped mountains, scenic valleys, winding roads and unforgettable mountain experiences. \n\nPackage Cost (Per Head):\n8 Persons – ₹9,500\n6 Persons – ₹9,999\n4 Persons – ₹12,500\n\nImportant Note: Zero Point is available at an additional cost and is subject to weather conditions, permit availability and applicable local regulations.',
    highlights: ['Gangtok', 'Lachung', 'Yumthang Valley Excursion'],
    itinerary: [
      {
        day: 1,
        title: 'NJP / Bagdogra Airport to Gangtok',
        description: 'Pickup from NJP Railway Station / Bagdogra Airport and proceed towards the beautiful Himalayan town of Gangtok. Upon arrival, check in to your hotel and relax after the journey. Spend the evening at leisure and enjoy the pleasant mountain atmosphere.'
      },
      {
        day: 2,
        title: 'Gangtok to Lachung – Scenic Mountain Journey',
        description: 'After breakfast, check out from Gangtok and proceed towards the picturesque mountain village of Lachung. Enjoy the scenic Himalayan landscapes and beautiful on-road sightseeing along the way. Upon arrival at Lachung, check in to your hotel/homestay and relax amidst the peaceful mountain surroundings.'
      },
      {
        day: 3,
        title: 'Yumthang Valley Excursion – Valley of Flowers',
        description: 'After breakfast, proceed for an exciting excursion to the spectacular Yumthang Valley, popularly known as the “Valley of Flowers.” Surrounded by majestic Himalayan peaks, flowing rivers and beautiful mountain landscapes. Zero Point is optional. Return to Lachung after sightseeing.'
      },
      {
        day: 4,
        title: 'Lachung to Gangtok',
        description: 'After breakfast, check out from Lachung and drive back towards Gangtok, enjoying the scenic mountain landscapes along the way. Upon arrival in Gangtok, check in to your hotel and spend the rest of the day at leisure.'
      },
      {
        day: 5,
        title: 'Gangtok to NJP / Bagdogra – Farewell to Sikkim',
        description: 'After breakfast, check out from the hotel and proceed towards NJP Railway Station / Bagdogra Airport for your onward journey.'
      }
    ],
    category: 'Sikkim'
  },
  {
    id: 'darjeeling-gangtok-escape',
    title: 'Darjeeling & Gangtok Escape',
    duration: '4 Nights / 5 Days',
    location: 'Gangtok • Darjeeling',
    image: '/images/pkg_darjeeling.png',
    description: 'Experience the best of Gangtok and Darjeeling in one unforgettable Himalayan getaway.',
    longDescription: 'Experience the best of Gangtok and Darjeeling in one unforgettable Himalayan getaway with Sneha Tours & Travels. From the serene waters of Tsomgo Lake and the majestic Baba Mandir to the breathtaking sunrise at Tiger Hill and the charming streets of Darjeeling, this journey brings together mountains, monasteries, lakes, forests and vibrant hill-town experiences.\n\nPackage Cost (Per Head):\n8 Persons – ₹9,250\n6 Persons – ₹9,900\n4 Persons – ₹12,250',
    highlights: ['Tsomgo Lake', 'Tiger Hill Sunrise', 'Baba Mandir'],
    itinerary: [
      {
        day: 1,
        title: 'NJP / Bagdogra to Gangtok – Welcome to the Hills',
        description: 'Arrive at NJP Railway Station / Bagdogra Airport, where you will be picked up and transferred to the beautiful Himalayan capital of Gangtok. Upon arrival, check in to the hotel and relax.'
      },
      {
        day: 2,
        title: 'Tsomgo Lake & Baba Mandir – Himalayan Excursion',
        description: 'After breakfast, proceed for an exciting excursion to Tsomgo Lake (Changu Lake), a magnificent high-altitude glacial lake surrounded by breathtaking Himalayan landscapes. Continue to Baba Mandir. Nathula Pass is optional.'
      },
      {
        day: 3,
        title: 'Gangtok to Darjeeling – Lamahata • Ghoom • Mall Road',
        description: 'After breakfast, check out and proceed towards Darjeeling. En route, visit Lamahata and Ghoom railway station. In the evening, visit the famous Mall Road.'
      },
      {
        day: 4,
        title: 'Tiger Hill Sunrise & Darjeeling Local Sightseeing',
        description: 'Start your morning with an early visit to Tiger Hill to witness the sunrise over Mt. Kanchenjunga. Return to visit Batasia Loop and Ghoom Monastery. Later, continue with Darjeeling local sightseeing covering HMI and Zoo.'
      },
      {
        day: 5,
        title: 'Darjeeling to NJP / Bagdogra – Optional Mirik Route',
        description: 'After breakfast, check out from the hotel and proceed towards NJP / Bagdogra. Optional route via Mirik is available.'
      }
    ],
    category: 'Darjeeling'
  },
  {
    id: 'north-sikkim-5n6d',
    title: 'North Sikkim Adventure',
    duration: '5 Nights / 6 Days',
    location: 'Gangtok • Lachung • Tsomgo Lake',
    image: '/images/dest_gangtok.png',
    description: 'A perfect Himalayan escape filled with snow-capped mountains, scenic valleys, and unforgettable experiences.',
    longDescription: 'Experience the breathtaking beauty of North Sikkim — from the vibrant mountain town of Gangtok to the serene landscapes of Lachung, the stunning Yumthang Valley, and the iconic Tsomgo Lake & Baba Mandir.\n\nPackage Cost (Per Head):\n8 Persons – ₹12,000\n6 Persons – ₹13,500\n4 Persons – ₹15,500',
    highlights: ['Gangtok', 'Lachung', 'Yumthang Valley', 'Tsomgo Lake'],
    itinerary: [
      {
        day: 1,
        title: 'NJP / Bagdogra Airport to Gangtok',
        description: 'Pickup and proceed towards Gangtok. Check in to your hotel and relax.'
      },
      {
        day: 2,
        title: 'Gangtok to Lachung – On-Road Sightseeing',
        description: 'After breakfast, check out and proceed towards the picturesque mountain village of Lachung. Enjoy scenic Himalayan landscapes along the way.'
      },
      {
        day: 3,
        title: 'Yumthang Valley Excursion',
        description: 'Proceed for an exciting excursion to Yumthang Valley, the “Valley of Flowers.” Zero Point is optional.'
      },
      {
        day: 4,
        title: 'Lachung to Gangtok',
        description: 'Drive back towards Gangtok, enjoying the scenic mountain landscapes. Rest of the day at leisure.'
      },
      {
        day: 5,
        title: 'Tsomgo Lake – Baba Mandir',
        description: 'Proceed for an excursion to Tsomgo Lake and Baba Mandir. Nathula Pass is optional.'
      },
      {
        day: 6,
        title: 'Gangtok to NJP / Bagdogra Drop',
        description: 'Check out and proceed towards NJP / Bagdogra Airport for your onward journey.'
      }
    ],
    category: 'Sikkim'
  },
  {
    id: 'darjeeling-offbeat-3n4d',
    title: 'Darjeeling & Off-Beat Tour Package',
    duration: '3 Nights / 4 Days',
    location: 'Sittong • Tinchuley • Darjeeling',
    image: '/images/dest_darjeeling.png',
    description: 'Explore the Hills Beyond Darjeeling. Experience the perfect blend of iconic attractions and peaceful off-beat Himalayan villages.',
    longDescription: 'Experience the perfect blend of Darjeeling’s iconic attractions and peaceful off-beat Himalayan villages. From lush orange orchards and scenic viewpoints to charming monasteries and the timeless beauty of the Queen of Hills, this journey is designed for an unforgettable mountain escape.\n\nPackage Cost (Per Head):\n2 Guests – ₹12,500\n4 Guests – ₹9,600\n6 Guests – ₹8,500\n8 Guests – ₹7,900',
    highlights: ['Sittong', 'Tinchuley', 'Lamahata Eco Park', 'Mirik Lake'],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Transfer to Sittong',
        description: 'Pickup from NJP and transfer to Sittong. Enjoy the lush orange orchards and peaceful surroundings.'
      },
      {
        day: 2,
        title: 'Sittong to Tinchuley',
        description: 'Transfer to Tinchuley. Visit Namthing Lake, Ahaldara View Point, and Tinchuley Monastery.'
      },
      {
        day: 3,
        title: 'Tinchuley to Darjeeling',
        description: 'Transfer to Darjeeling. En route visit Lamahata Eco Park. Enjoy Darjeeling local sightseeing including Batasia Loop and Ghum Monastery.'
      },
      {
        day: 4,
        title: 'Darjeeling to NJP via Mirik',
        description: 'Check out and proceed to NJP, optionally visiting Pashupati Market and Mirik Lake on the way.'
      }
    ],
    category: 'Darjeeling'
  },
  {
    id: 'dooars-explorer-4n5d',
    title: 'Dooars Explorer Package',
    duration: '4 Nights / 5 Days',
    location: 'Lataguri • Chilapata',
    image: '/images/pkg_dooars_forest.jpg',
    description: 'Forests, Hills, Rivers, and Wildlife. Experience the diverse beauty of Dooars.',
    longDescription: 'Experience the diverse beauty of Dooars with Sneha Tours & Travels. From the lush forests of Gorumara and Chilapata to scenic rivers, tea gardens and Himalayan foothills, this itinerary combines nature, adventure and cultural exploration into one memorable getaway.\n\nPackage Cost (Per Head):\n8 Persons – ₹9,000\n6 Persons – ₹10,300\n4 Persons – ₹11,500',
    highlights: ['Gorumara National Park', 'Chilapata Forest', 'Jaldhaka & Bindu'],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Dooars | NJP/Bagdogra to Lataguri',
        description: 'Pickup and proceed towards Lataguri. Optional Jungle Safari at Gorumara National Park.'
      },
      {
        day: 2,
        title: 'The Best of Dooars | Samsing to Bindu',
        description: 'Full-day sightseeing excursion through Samsing, Suntalekhola, Rocky Island, Jhalong, Jaldhaka, and Bindu.'
      },
      {
        day: 3,
        title: 'Hills & Forests | Lava & Rishop OR Buxa & Jayanti',
        description: 'Choose between a day trip to the Himalayan destinations of Lava & Rishop OR the forested landscapes of Buxa, Jayanti & Rajabhatkhawa.'
      },
      {
        day: 4,
        title: 'Lataguri to Chilapata | Jungle Experience',
        description: 'Transfer to Chilapata. Enjoy the peaceful forest surroundings with an optional Jungle Safari.'
      },
      {
        day: 5,
        title: 'Chilapata to Alipurduar via Cooch Behar',
        description: 'Check out and visit the historic Cooch Behar Rajbari and Madan Mohan Temple before dropping at Alipurduar Railway Station.'
      }
    ],
    category: 'Dooars'
  },
  {
    id: 'dooars-tour-3n4d',
    title: 'Dooars Tour Package',
    duration: '3 Nights / 4 Days',
    location: 'Lataguri • Dooars',
    image: '/images/pkg_dooars_tea.jpg',
    description: 'Experience the untouched beauty of Dooars, where dense forests and flowing rivers create the perfect nature getaway.',
    longDescription: 'Experience the untouched beauty of Dooars, where dense forests, flowing rivers, rolling tea gardens and picturesque hill landscapes come together to create the perfect nature getaway.\n\nPackage Cost (Per Head):\n8 Persons – ₹6,900\n6 Persons – ₹7,800\n4 Persons – ₹8,600',
    highlights: ['Lataguri', 'Samsing & Suntalekhola', 'Buxa & Jayanti (Optional)'],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Dooars – Lataguri',
        description: 'Pickup and proceed towards Lataguri. Relax amidst the peaceful surroundings. Optional jungle safari available.'
      },
      {
        day: 2,
        title: 'Exploring the Seven Wonders of Dooars',
        description: 'Full-day sightseeing tour exploring Samsing, Suntalekhola, Rocky Island, Murti River, Jhalong, Jaldhaka, and Bindu.'
      },
      {
        day: 3,
        title: 'Hills & Forests – Lava/Rishop OR Buxa/Jayanti',
        description: 'Day excursion to either Lava & Rishop for hill views, OR Buxa & Jayanti for wildlife and forests.'
      },
      {
        day: 4,
        title: 'Farewell to Dooars',
        description: 'Check out from the resort and proceed to NJP / Bagdogra Airport for your onward journey.'
      }
    ],
    category: 'Dooars'
  },
  {
    id: 'darjeeling-hidden-3n4d',
    title: 'Darjeeling Off-Beat Tour Package',
    duration: '3 Nights / 4 Days',
    location: 'Sittong • Tinchuley • Dawaipani',
    image: '/images/home_cinematic.png',
    description: 'Explore the Hidden Side of Darjeeling. Escape the crowded tourist trails and discover peaceful, scenic villages.',
    longDescription: 'Escape the crowded tourist trails and discover the peaceful, scenic and unexplored side of the Eastern Himalayas. Explore charming mountain villages, lush forests, panoramic viewpoints and serene landscapes while enjoying warm local hospitality.\n\nPackage Cost (Per Head):\n4 Guests – ₹7,900\n6 Guests – ₹7,500\n8 Guests – ₹6,750',
    highlights: ['Sittong', 'Tinchuley', 'Lamahata', 'Dawaipani'],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Transfer to Sittong',
        description: 'Pickup from NJP and transfer to Sittong. Wake up to breathtaking Himalayan sunrises and peaceful village life.'
      },
      {
        day: 2,
        title: 'Sittong to Tinchuley',
        description: 'Transfer to Tinchuley. Enjoy scenic viewpoints and immerse yourself in the natural beauty.'
      },
      {
        day: 3,
        title: 'Tinchuley to Dawaipani',
        description: 'Transfer to Dawaipani, exploring Tagda and Lamahata on the way. Reconnect with nature in this mountain retreat.'
      },
      {
        day: 4,
        title: 'Departure',
        description: 'Check out and proceed to NJP Railway Station.'
      }
    ],
    category: 'Darjeeling'
  }
];
