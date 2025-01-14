export const navlinks =[
    {href:"/" ,text:"home"},
    //{href:"/work" ,text:"work"},
    {href:"/about_us" ,text:"about us"},
    //{href:"/contactus" ,text:"contact us"}
]

export const banners =[
    {
        id: "c1",
        title: "Architecture",
        description: "Winter has so much to offer - creative activities",
        image: "/images/img1.jpg", // Update with your actual image path
      },
      {
        id: "c2",
        title: "Interior Designing",
        description: "Gets better every day - stay tuned",
        image: "/images/img2.jpg",
      },
      {
        id: "c3",
        title: "Civil Contracts",
        description: "Help people all over the world",
        image: "/images/img3.jpg",
      },
      {
        id: "c4",
        title: "Project management consultant",
        description: "Space engineering becomes more advanced",
        image: "/images/img4.jpg",
      },
]

export const cardsData = [
    {
      id: "c1",
      title: "Architecture",
      description: "Transforming spaces into iconic structures with innovative designs and sustainable solutions.",
      image: "/images/img1.jpg", // Update with your actual image path
    },
    {
      id: "c2",
      title: "Interior Designing",
      description: "Crafting elegant and functional interiors that reflect your personality and enhance your lifestyle.",
      image: "/images/img2.jpg",
    },
    {
      id: "c3",
      title: "Civil Contracts",
      description: "Delivering reliable civil engineering solutions to bring your vision to life with precision and efficiency.",
      image: "/images/img3.jpg",
    },
    {
      id: "c4",
      title: "Project management consultant",
      description: "Ensuring seamless project execution with expert planning, coordination, and management services.",
      image: "/images/img4.jpg",
    },
  ];

  export const homework=[
    {
      slug:"project_name",
      title:"Project name",
      description:"this is the description of the product",
      image:"/images/img4.jpg",

    }
  ]

  export interface Project {
    id: number;
    title: string;
    slug: string;
    image: string;
    category: string;
    aspectRatio: string;
    description: string;
    shortDescription: string;
    year: number;
    client: string;
    location: string;
    area: string;
    services: string[];
    team: string[];
    awards?: string[];
    gallery: string[];
    challenge: string;
    solution: string;
    status: 'Completed' | 'In Progress' | 'Planning Phase';
    sustainability?: string[];
    technologies?: string[];
  }
  
  export const projects: Project[] = [
    {
      id: 1,
      title: "Luxury Commercial Space",
      slug: "luxury-commercial-space",
      image: "/images/img1.jpg",
      category: "Commercial",
      aspectRatio: "4/3",
      description: "A state-of-the-art commercial complex featuring modern architecture and sustainable design principles. The project seamlessly integrates work and leisure spaces, creating a dynamic environment for businesses and their employees.",
      shortDescription: "Modern commercial complex with sustainable design features",
      year: 2023,
      client: "Metropolitan Developers Ltd.",
      location: "Downtown Business District, New York",
      area: "25,000 sq ft",
      services: ["Architectural Design", "Interior Planning", "Sustainability Consulting"],
      team: ["John Smith - Lead Architect", "Sarah Johnson - Interior Designer"],
      awards: ["Best Commercial Design 2023 - NYC Architecture Awards"],
      gallery: ["/images/img1/detail1.jpg", "/images/img1/detail2.jpg", "/images/img1/detail3.jpg"],
      challenge: "Creating a sustainable commercial space that maximizes natural light while maintaining energy efficiency.",
      solution: "Implemented a double-skin facade system and smart building technologies.",
      status: "Completed",
      sustainability: ["LEED Platinum Certified", "40% reduced energy consumption"]
    },
    {
      id: 2,
      title: "Modern Hotel Lobby",
      slug: "modern-hotel-lobby",
      image: "/images/img2.jpg",
      category: "Hotel",
      aspectRatio: "3/4",
      description: "An elegant hotel lobby that balances luxury with functionality, featuring smart space planning and high-end finishes.",
      shortDescription: "Luxurious hotel lobby with modern amenities",
      year: 2024,
      client: "Grand Plaza Hotels",
      location: "Miami, Florida",
      area: "8,000 sq ft",
      services: ["Interior Design", "Lighting Design", "Custom Furniture"],
      team: ["Emily Chen - Lead Designer", "Mark Wilson - Lighting Specialist"],
      gallery: ["/images/img2/detail1.jpg", "/images/img2/detail2.jpg"],
      challenge: "Balancing luxury aesthetics with practical guest flow management.",
      solution: "Created distinct zones while maintaining visual continuity.",
      status: "Completed"
    },
    {
      id: 3,
      title: "Institute Auditorium",
      slug: "institute-auditorium",
      image: "/images/img3.jpg",
      category: "Institutes",
      aspectRatio: "1/1",
      description: "A modern educational auditorium designed for optimal acoustics and flexible usage patterns.",
      shortDescription: "State-of-the-art educational auditorium",
      year: 2023,
      client: "State University",
      location: "Boston, Massachusetts",
      area: "15,000 sq ft",
      services: ["Acoustic Design", "Architectural Planning", "AV Integration"],
      team: ["David Park - Acoustic Engineer", "Lisa Brown - Project Architect"],
      gallery: ["/images/img3/detail1.jpg", "/images/img3/detail2.jpg"],
      challenge: "Creating perfect acoustics while maintaining flexibility for different events.",
      solution: "Implemented modular acoustic panels and advanced sound systems.",
      status: "Completed"
    },
    {
      id: 4,
      title: "Contemporary Residential Design",
      slug: "contemporary-residential-design",
      image: "/images/img4.jpg",
      category: "Residential",
      aspectRatio: "16/9",
      description: "A modern residential project that pushes the boundaries of contemporary living spaces.",
      shortDescription: "Modern family home with innovative design",
      year: 2024,
      client: "Private Client",
      location: "Seattle, Washington",
      area: "4,500 sq ft",
      services: ["Residential Architecture", "Interior Design", "Landscape Planning"],
      team: ["Maria Garcia - Lead Architect", "Tom Wilson - Landscape Designer"],
      gallery: ["/images/img4/detail1.jpg", "/images/img4/detail2.jpg"],
      challenge: "Integrating modern design while maintaining warmth and livability.",
      solution: "Used natural materials and created flowing indoor-outdoor spaces.",
      status: "Completed"
    },
    {
      id: 5,
      title: "Boutique Hotel Suite",
      slug: "boutique-hotel-suite",
      image: "/images/img5.jpg",
      category: "Hotel",
      aspectRatio: "9/16",
      description: "Luxurious boutique hotel suites that offer unique experiences through design.",
      shortDescription: "Unique boutique hotel experience",
      year: 2023,
      client: "Boutique Stays Inc.",
      location: "Portland, Oregon",
      area: "12,000 sq ft",
      services: ["Hotel Design", "Interior Styling", "Custom Furniture"],
      team: ["Sophie Wright - Interior Designer", "James Lee - Furniture Designer"],
      gallery: ["/images/img5/detail1.jpg", "/images/img5/detail2.jpg"],
      challenge: "Creating unique identities for each suite while maintaining brand coherence.",
      solution: "Developed a modular design system with customizable elements.",
      status: "Completed"
    },
    {
      id: 6,
      title: "Corporate Office Design",
      slug: "corporate-office-design",
      image: "/images/img6.jpg",
      category: "Commercial",
      aspectRatio: "4/5",
      description: "A forward-thinking corporate office space that promotes collaboration and productivity.",
      shortDescription: "Modern corporate office with collaborative spaces",
      year: 2024,
      client: "Tech Innovations Corp",
      location: "San Francisco, California",
      area: "30,000 sq ft",
      services: ["Office Planning", "Interior Design", "Workplace Strategy"],
      team: ["Robert Chang - Lead Designer", "Anna Kim - Workplace Strategist"],
      gallery: ["/images/img6/detail1.jpg", "/images/img6/detail2.jpg"],
      challenge: "Balancing open collaboration spaces with focused work areas.",
      solution: "Created flexible zones with acoustic treatments and mobile furniture.",
      status: "Completed"
    },
    {
      id: 7,
      title: "Campus Library",
      slug: "campus-library",
      image: "/images/img7.jpg",
      category: "Institutes",
      aspectRatio: "3/4",
      description: "A modern library that combines traditional learning spaces with digital integration.",
      shortDescription: "Modern campus library with integrated technology",
      year: 2023,
      client: "City University",
      location: "Chicago, Illinois",
      area: "40,000 sq ft",
      services: ["Educational Design", "Digital Integration", "Interior Planning"],
      team: ["Michael Brown - Education Specialist", "Sarah Lee - Technology Integration"],
      gallery: ["/images/img7/detail1.jpg", "/images/img7/detail2.jpg"],
      challenge: "Integrating modern technology while preserving traditional library functions.",
      solution: "Created flexible learning spaces with integrated digital resources.",
      status: "Completed"
    },
    {
      id: 8,
      title: "Suburban Family Home",
      slug: "suburban-family-home",
      image: "/images/img8.jpg",
      category: "Residential",
      aspectRatio: "1/1",
      description: "A family-oriented suburban home that combines comfort with modern design principles.",
      shortDescription: "Contemporary suburban family residence",
      year: 2024,
      client: "Private Client",
      location: "Austin, Texas",
      area: "3,800 sq ft",
      services: ["Residential Architecture", "Interior Design", "Landscape Design"],
      team: ["Jennifer White - Residential Architect", "Paul Green - Landscape Architect"],
      gallery: ["/images/img8/detail1.jpg", "/images/img8/detail2.jpg"],
      challenge: "Creating a modern family home that maintains warmth and functionality.",
      solution: "Implemented open-plan living with defined private spaces.",
      status: "Completed"
    },
    {
      id: 9,
      title: "Luxury Spa Hotel",
      slug: "luxury-spa-hotel",
      image: "/images/img9.jpg",
      category: "Hotel",
      aspectRatio: "16/9",
      description: "A luxury spa hotel that creates an immersive wellness experience through design.",
      shortDescription: "Luxury wellness hotel and spa",
      year: 2023,
      client: "Wellness Resorts International",
      location: "Scottsdale, Arizona",
      area: "45,000 sq ft",
      services: ["Hotel Architecture", "Spa Design", "Wellness Planning"],
      team: ["Diana Martinez - Wellness Designer", "John Baker - Hotel Specialist"],
      gallery: ["/images/img9/detail1.jpg", "/images/img9/detail2.jpg"],
      challenge: "Creating a serene environment while maintaining operational efficiency.",
      solution: "Designed flowing spaces with hidden service areas.",
      status: "Completed"
    },
    {
      id: 10,
      title: "Downtown Commercial Plaza",
      slug: "downtown-commercial-plaza",
      image: "/images/img10.jpg",
      category: "Commercial",
      aspectRatio: "9/16",
      description: "A mixed-use commercial plaza that revitalizes downtown urban space.",
      shortDescription: "Urban mixed-use commercial development",
      year: 2024,
      client: "Urban Development Corp",
      location: "Denver, Colorado",
      area: "80,000 sq ft",
      services: ["Urban Planning", "Commercial Architecture", "Landscape Design"],
      team: ["Carlos Rodriguez - Urban Planner", "Emma Thompson - Commercial Architect"],
      gallery: ["/images/img10/detail1.jpg", "/images/img10/detail2.jpg"],
      challenge: "Integrating multiple uses while maintaining urban context.",
      solution: "Created distinct zones connected by public spaces.",
      status: "In Progress"
    },
    {
      id: 11,
      title: "Residential Villa",
      slug: "residential-villa",
      image: "/images/img11.jpg",
      category: "Residential",
      aspectRatio: "4/5",
      description: "A luxury residential villa that combines traditional elements with modern living.",
      shortDescription: "Luxury villa with modern amenities",
      year: 2023,
      client: "Private Client",
      location: "Palm Beach, Florida",
      area: "6,500 sq ft",
      services: ["Luxury Residential", "Interior Design", "Landscape Architecture"],
      team: ["Alexandra Foster - Villa Specialist", "Richard Gray - Landscape Designer"],
      gallery: ["/images/img11/detail1.jpg", "/images/img11/detail2.jpg"],
      challenge: "Balancing luxury with practical family living spaces.",
      solution: "Created distinct private and entertainment zones.",
      status: "Completed"
    },
    {
      id: 12,
      title: "University Science Wing",
      slug: "university-science-wing",
      image: "/images/img12.jpg",
      category: "Institutes",
      aspectRatio: "3/4",
      description: "A state-of-the-art science facility designed for modern research and education.",
      shortDescription: "Modern university research facility",
      year: 2024,
      client: "State University System",
      location: "Ann Arbor, Michigan",
      area: "60,000 sq ft",
      services: ["Educational Architecture", "Laboratory Design", "Sustainability"],
      team: ["Dr. William Chen - Lab Specialist", "Laura Martinez - Education Architect"],
      gallery: ["/images/img12/detail1.jpg", "/images/img12/detail2.jpg"],
      challenge: "Creating flexible research spaces with advanced safety features.",
      solution: "Implemented modular lab designs with smart safety systems.",
      status: "Completed"
    },
    {
      id: 13,
      title: "Luxury Resort Hotel",
      slug: "luxury-resort-hotel",
      image: "/images/img13.jpg",
      category: "Hotel",
      aspectRatio: "1/1",
      description: "An exclusive resort hotel that creates unique guest experiences through architecture.",
      shortDescription: "Exclusive luxury resort destination",
      year: 2023,
      client: "Global Resorts Ltd",
      location: "Maui, Hawaii",
      area: "120,000 sq ft",
      services: ["Resort Architecture", "Interior Design", "Landscape Planning"],
      team: ["Michelle Wong - Resort Specialist", "David Turner - Landscape Architect"],
      gallery: ["/images/img13/detail1.jpg", "/images/img13/detail2.jpg"],
      challenge: "Integrating luxury amenities while preserving natural environment.",
      solution: "Created eco-friendly design with minimal environmental impact.",
      status: "Completed"
    },
    {
      id: 14,
      title: "High-End Commercial Complex",
      slug: "high-end-commercial-complex",
      image: "/images/img14.jpg",
      category: "Commercial",
      aspectRatio: "16/9",
      description: "A premium commercial complex that sets new standards in retail architecture.",
      shortDescription: "Premium retail and office complex",
      year: 2024,
      client: "Luxury Retail Developments",
      location: "Las Vegas, Nevada",
      area: "90,000 sq ft",
      services: ["Retail Architecture", "Commercial Planning", "Lighting Design"],
      team: ["Kevin Park - Retail Specialist", "Rachel Adams - Lighting Designer"],
      gallery: ["/images/img14/detail1.jpg", "/images/img14/detail2.jpg"],
      challenge: "Creating distinctive retail spaces while maintaining flow.",
      solution: "Developed unique storefronts with cohesive public areas.",
      status: "In Progress"
    },
    {
      id: 15,
      title: "Modern Apartment Complex",
      slug: "modern-apartment-complex",
      image: "/images/img15.jpg",
      category: "Residential",
      aspectRatio: "9/16",
      description: "A contemporary apartment complex that redefines urban living standards.",
      shortDescription: "Contemporary urban living spaces",
      year: 2023,
      client: "Urban Living Developers",
      location: "Nashville, Tennessee",
      area: "150,000 sq ft",
      services: ["Multi-family Architecture", "Urban Planning", "Interior Design"],
      team: ["Steven Lee - Housing Specialist", "Amanda White - Urban Designer"],
      gallery: ["/images/img15/detail1.jpg", "/images/img15/detail2.jpg"],
      challenge: "Maximizing living space while creating community areas.",
      solution: "Designed efficient units with shared amenities.",
      status: "Completed"
    },
    {
      id: 16,
      title: "Community College Campus",
      slug: "community-college-campus",
      image: "/images/img16.jpg",
      category: "Institutes",
      aspectRatio: "4/5",
      description: "A modern community college campus designed to foster learning and community engagement.",
      shortDescription: "Modern educational campus design",
      year: 2024,
      client: "State Community College",
      location: "Sacramento, California",
      area: "200,000 sq ft",
      services: ["Campus Planning", "Educational Architecture", "Landscape Design"],
      team: ["Steven Lee - Housing Specialist", "Amanda White - Urban Designer"],
      gallery: ["/images/img15/detail1.jpg", "/images/img15/detail2.jpg"],
      challenge: "Maximizing living space while creating community areas.",
      solution: "Designed efficient units with shared amenities.",
      status: "Completed"
    },
  ]