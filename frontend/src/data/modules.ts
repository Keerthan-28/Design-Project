export interface Module {
    id: string;
    title: string;
    category: 'short-term' | 'mid-term' | 'long-term';
    duration: string;
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
    description: string;
    image: string;
    scientificName?: string;
    soilType?: string;
    waterRequirements?: string;
    harvestTime?: string;
}

export const cropModules: Module[] = [
    // CEREALS & GRAINS
    {
        id: 'rice',
        title: 'Rice Cultivation',
        category: 'mid-term',
        duration: '105-150 Days',
        difficulty: 'Advanced',
        description: 'Master the art of paddy farming. Requires wetland conditions and precise water management.',
        image: '/images/crop_rice_harvest.png',
        scientificName: 'Oryza sativa',
        soilType: 'Clay or Clay Loam',
        waterRequirements: 'High (Submerged)',
        harvestTime: 'When 80% grains turn golden'
    },
    {
        id: 'wheat',
        title: 'Wheat Farming',
        category: 'mid-term',
        duration: '100-120 Days',
        difficulty: 'Intermediate',
        description: 'A staple winter crop. Learn about temperature sensitivity and harvesting perfection.',
        image: '/images/crop_wheat.jpg',
        scientificName: 'Triticum aestivum',
        soilType: 'Loam or Clay Loam',
        waterRequirements: 'Moderate',
        harvestTime: 'Spring / Early Summer'
    },
    {
        id: 'maize',
        title: 'Maize (Corn)',
        category: 'mid-term',
        duration: '60-100 Days',
        difficulty: 'Beginner',
        description: 'Versatile crop for food and fodder. fast growing and high yield potential.',
        image: '/images/crop_maize.jpg',
        scientificName: 'Zea mays',
        soilType: 'Well-drained Loam',
        waterRequirements: 'Moderate',
        harvestTime: 'Late Summer'
    },

    // PULSES & LEGUMES
    {
        id: 'soya',
        title: 'Soybean',
        category: 'short-term',
        duration: '85-110 Days',
        difficulty: 'Intermediate',
        description: 'Protein-rich legume that improves soil health via nitrogen fixation.',
        image: '/images/crop_soya_1770352786703.png',
        scientificName: 'Glycine max',
        soilType: 'Loose, well-drained loam',
        waterRequirements: 'Moderate',
        harvestTime: 'Autumn'
    },
    {
        id: 'chickpea',
        title: 'Chickpea (Gram)',
        category: 'mid-term',
        duration: '90-110 Days',
        difficulty: 'Beginner',
        description: 'Drought-tolerant pulse crop ideal for dry seasons.',
        image: '/images/crop_chickpea.png',
        scientificName: 'Cicer arietinum',
        soilType: 'Sandy Loam',
        waterRequirements: 'Low',
        harvestTime: 'Late Winter'
    },

    // CASH CROPS
    {
        id: 'cotton',
        title: 'Cotton',
        category: 'long-term',
        duration: '150-180 Days',
        difficulty: 'Advanced',
        description: 'The white gold. Requires careful pest management (bollworm) and dry harvesting weather.',
        image: '/images/crop_cotton.png',
        scientificName: 'Gossypium',
        soilType: 'Black Soil (Regur)',
        waterRequirements: 'Moderate',
        harvestTime: 'Late Autumn'
    },
    {
        id: 'sugarcane',
        title: 'Sugarcane',
        category: 'long-term',
        duration: '10-18 Months',
        difficulty: 'Intermediate',
        description: 'Long duration commercial crop. High water and nutrient input required.',
        image: '/images/crop_sugarcane_harvest.png',
        scientificName: 'Saccharum officinarum',
        soilType: 'Deep rich loamy soil',
        waterRequirements: 'Very High',
        harvestTime: 'Winter'
    },

    // VEGETABLES & TUBERS
    {
        id: 'potato',
        title: 'Potato',
        category: 'short-term',
        duration: '90-110 Days',
        difficulty: 'Beginner',
        description: 'World\'s favorite tuber. Needs loose soil for tuber expansion.',
        image: '/images/crop_potato.png',
        scientificName: 'Solanum tuberosum',
        soilType: 'Loose Sandy Loam',
        waterRequirements: 'Moderate',
        harvestTime: 'Cycle dependent'
    },
    {
        id: 'onion',
        title: 'Onion',
        category: 'mid-term',
        duration: '100-140 Days',
        difficulty: 'Intermediate',
        description: 'High value crop but sensitive to storage conditions and moisture.',
        image: '/images/crop_onion.jpg',
        scientificName: 'Allium cepa',
        soilType: 'Sandy Loam',
        waterRequirements: 'Frequent',
        harvestTime: 'Late Spring'
    },
    {
        id: 'tomato',
        title: 'Tomato',
        category: 'mid-term',
        duration: '60-80 Days',
        difficulty: 'Intermediate',
        description: 'Grow juicy, flavorful tomatoes. Covers staking, pruning, and pest management.',
        image: '/images/crop_tomato.png',
        scientificName: 'Solanum lycopersicum',
        soilType: 'Loam',
        waterRequirements: 'Regular',
        harvestTime: 'Continuous'
    },

    // SPICES
    {
        id: 'turmeric',
        title: 'Turmeric',
        category: 'long-term',
        duration: '7-9 Months',
        difficulty: 'Beginner',
        description: 'Hardy spice crop with medicinal value. Low maintenance but long gestation.',
        image: '/images/crop_turmeric.png',
        scientificName: 'Curcuma longa',
        soilType: 'Red Loamy Soil',
        waterRequirements: 'Moderate',
        harvestTime: 'Winter'
    },
    {
        id: 'ginger',
        title: 'Ginger',
        category: 'long-term',
        duration: '8-10 Months',
        difficulty: 'Intermediate',
        description: 'Shade-loving spice crop. Great for intercropping in orchards.',
        image: '/images/crop_ginger.png',
        scientificName: 'Zingiber officinale',
        soilType: 'Sandy Loamy',
        waterRequirements: 'High Humidity',
        harvestTime: 'Winter'
    },
    {
        id: 'chilli',
        title: 'Chilli Pepper',
        category: 'short-term',
        duration: '90-120 Days',
        difficulty: 'Intermediate',
        description: 'Spicy cash crop. Prone to leaf curl virus, requires vigilance.',
        image: '/images/crop_chilli.png',
        scientificName: 'Capsicum annuum',
        soilType: 'Black or Loamy',
        waterRequirements: 'Moderate',
        harvestTime: 'Summer/Autumn'
    },
    {
        id: 'garlic',
        title: 'Garlic',
        category: 'long-term',
        duration: '4-5 Months',
        difficulty: 'Beginner',
        description: 'Plant cloves in fall for a summer harvest. Very low maintenance.',
        image: '/images/crop_garlic.jpg',
        scientificName: 'Allium sativum',
        soilType: 'Well drained',
        waterRequirements: 'Low',
        harvestTime: 'Summer'
    },
    {
        id: 'lettuce',
        title: 'Lettuce & Greens',
        category: 'short-term',
        duration: '30-45 Days',
        difficulty: 'Beginner',
        description: 'Perfect for quick harvests. Learn to grow crisp lettuce, spinach, and kale.',
        image: '/images/crop_lettuce.jpg',
        scientificName: 'Lactuca sativa',
        soilType: 'Humus rich',
        waterRequirements: 'Regular',
        harvestTime: 'All season'
    },
    {
        id: 'hydroponics',
        title: 'Hydroponics',
        category: 'short-term',
        duration: '45-60 Days',
        difficulty: 'Intermediate',
        description: 'Soil-less farming for apartments. Save 90% water and grow fresh greens year-round.',
        image: '/images/tech_hydroponics_1770352803412.png',
        scientificName: 'Soil-less Culture',
        soilType: 'Inert Media (Coco peat)',
        waterRequirements: 'Recirculating',
        harvestTime: 'Cycle dependent'
    },
    {
        id: 'aeroponics',
        title: 'Aeroponics',
        category: 'short-term',
        duration: '30-50 Days',
        difficulty: 'Advanced',
        description: 'Mist-based nutrition for rapid growth and maximum oxygen to roots.',
        image: '/images/tech_aeroponics_1770352820128.png',
        scientificName: 'Air Culture',
        soilType: 'None (Mist)',
        waterRequirements: 'Low (Misting)',
        harvestTime: 'Cycle dependent'
    },
    {
        id: 'mushroom',
        title: 'Mushroom Cultivation',
        category: 'short-term',
        duration: '30-45 Days',
        difficulty: 'Intermediate',
        description: 'Profit from dark spaces. High-yield indoor farming of Oyster and Button mushrooms.',
        image: '/images/crop_mushroom.png',
        scientificName: 'Pleurotus / Agaricus',
        soilType: 'Sterilized Substrate',
        waterRequirements: 'High Humidity',
        harvestTime: 'Flush dependent'
    },
    {
        id: 'microgreens',
        title: 'Microgreens',
        category: 'short-term',
        duration: '7-14 Days',
        difficulty: 'Beginner',
        description: 'Superfoods in a week. Grow nutrient-dense tiny greens on your windowsill.',
        image: '/images/crop_microgreens.jpg', // Placeholder suffix
        scientificName: 'Young Greens',
        soilType: 'Coco peat / Mat',
        waterRequirements: 'Light Mist',
        harvestTime: '1-2 Weeks'
    },
    {
        id: 'vertical-garden',
        title: 'Vertical Gardening',
        category: 'long-term',
        duration: 'Continuous',
        difficulty: 'Beginner',
        description: 'Maximize small spaces by growing upwards. Ideal for balconies and innovative walls.',
        image: '/images/tech_vertical.jpg', // Placeholder suffix
        scientificName: 'Vertical Culture',
        soilType: 'Potting Mix',
        waterRequirements: 'Drip System',
        harvestTime: 'Continuous'
    },
    {
        id: 'container-garden',
        title: 'Container Gardening',
        category: 'mid-term',
        duration: 'Seasonal',
        difficulty: 'Beginner',
        description: 'Grow vegetables and herbs in pots. Perfect for rooftops and patios.',
        image: '/images/tech_container.jpg', // Placeholder suffix
        scientificName: 'Pot Culture',
        soilType: 'Potting Mix',
        waterRequirements: 'Manual',
        harvestTime: 'Seasonal'
    },

    // NEW URBAN FARMING
    {
        id: 'terrace-kitchen',
        title: 'Terrace Kitchen Garden',
        category: 'short-term',
        duration: 'Continuous',
        difficulty: 'Beginner',
        description: 'Grow fresh herbs and vegetables on your rooftop or balcony all year round.',
        image: '/images/crop_lettuce.jpg',
        scientificName: 'Mixed Herbs & Greens',
        soilType: 'Potting Mix',
        waterRequirements: 'Regular',
        harvestTime: 'Continuous'
    },
    {
        id: 'aquaponics',
        title: 'Aquaponics System',
        category: 'mid-term',
        duration: '60-90 Days',
        difficulty: 'Advanced',
        description: 'Combine fish farming with plant growing in a self-sustaining ecosystem.',
        image: '/images/tech_hydroponics_1770352803412.png',
        scientificName: 'Aqua-Plant Symbiosis',
        soilType: 'None (Water)',
        waterRequirements: 'Recirculating',
        harvestTime: 'Cycle dependent'
    },
    {
        id: 'container-fruit',
        title: 'Container Fruit Farming',
        category: 'long-term',
        duration: '6-12 Months',
        difficulty: 'Intermediate',
        description: 'Grow dwarf fruit trees in pots — perfect for patios and balconies.',
        image: '/images/crop_tomato.png',
        scientificName: 'Dwarf Fruit Varieties',
        soilType: 'Rich Potting Mix',
        waterRequirements: 'Moderate',
        harvestTime: 'Seasonal'
    },
    {
        id: 'vertical-tower',
        title: 'Vertical Tower Garden',
        category: 'mid-term',
        duration: 'Continuous',
        difficulty: 'Intermediate',
        description: 'Stack plants vertically using PVC towers to grow 50+ plants in 4 sq ft.',
        image: '/images/tech_vertical.jpg',
        scientificName: 'Vertical Culture',
        soilType: 'Potting Mix / Hydroponics',
        waterRequirements: 'Drip System',
        harvestTime: 'Continuous'
    },
    {
        id: 'rooftop-bees',
        title: 'Rooftop Bee Keeping',
        category: 'long-term',
        duration: '12+ Months',
        difficulty: 'Advanced',
        description: 'Support pollination and harvest fresh honey from urban beehives.',
        image: '/images/crop_ginger.png',
        scientificName: 'Apis mellifera',
        soilType: 'N/A',
        waterRequirements: 'Minimal',
        harvestTime: 'Summer'
    }
];


export const urbanModuleIds = [
    'hydroponics',
    'aeroponics',
    'mushroom',
    'microgreens',
    'vertical-garden',
    'container-garden',
    'terrace-kitchen',
    'aquaponics',
    'container-fruit',
    'rooftop-bees',
    'vertical-tower',
];

export interface UrbanModule {
    id: string;
    title: string;
    description: string;
    image: string;
    steps: string[];
    pace: string;
}

export const urbanModules: UrbanModule[] = [
    {
        id: 'terrace-kitchen',
        title: 'Terrace Kitchen Garden',
        description: 'Grow fresh herbs and vegetables on your rooftop or balcony all year round.',
        image: '/images/crop_lettuce.jpg',
        steps: ['Plan your terrace layout and containers', 'Choose seasonal herbs and vegetables', 'Set up drip irrigation and soil mix', 'Maintain, harvest, and replant'],
        pace: 'Self-paced'
    },
    {
        id: 'aquaponics',
        title: 'Aquaponics System',
        description: 'Combine fish farming with plant growing in a self-sustaining ecosystem.',
        image: '/images/tech_hydroponics_1770352803412.png',
        steps: ['Understand aquaponics cycle — fish + plants', 'Build or buy a starter aquaponics kit', 'Stock fish and transplant seedlings', 'Monitor water quality and harvest'],
        pace: 'Self-paced'
    },
    {
        id: 'container-fruit',
        title: 'Container Fruit Farming',
        description: 'Grow dwarf fruit trees in pots — perfect for patios and balconies.',
        image: '/images/crop_tomato.png',
        steps: ['Select dwarf fruit varieties for containers', 'Prepare pots with proper drainage and soil', 'Fertilize and manage pollination', 'Prune, support branches, and harvest'],
        pace: 'Self-paced'
    },
    {
        id: 'microgreens',
        title: 'Microgreens & Sprouts',
        description: 'Harvest nutrient-dense greens in just 7-14 days from your kitchen counter.',
        image: '/images/crop_microgreens.jpg',
        steps: ['Choose seeds — sunflower, radish, pea shoots', 'Soak and spread seeds on growing medium', 'Maintain moisture and light for 7-14 days', 'Harvest at cotyledon stage and enjoy'],
        pace: 'Self-paced'
    },
    {
        id: 'vertical-tower',
        title: 'Vertical Tower Garden',
        description: 'Stack plants vertically using PVC towers to grow 50+ plants in 4 sq ft.',
        image: '/images/tech_vertical.jpg',
        steps: ['Design and build PVC tower frame', 'Install net cups and nutrient reservoir', 'Plant seedlings and set up water pump', 'Monitor growth and rotate crops'],
        pace: 'Self-paced'
    },
    {
        id: 'rooftop-bees',
        title: 'Rooftop Bee Keeping',
        description: 'Support pollination and harvest fresh honey from urban beehives.',
        image: '/images/crop_ginger.png',
        steps: ['Learn local beekeeping regulations', 'Set up hive boxes on your rooftop', 'Introduce a bee colony and feed', 'Inspect hives regularly and harvest honey'],
        pace: 'Self-paced'
    },
    {
        id: 'hydroponics',
        title: 'Hydroponics Mastery',
        description: 'Soil-less farming for apartments. Save 90% water.',
        image: '/images/tech_hydroponics_1770352803412.png',
        steps: ['Choose a hydroponic system type (DWC, NFT, Ebb & Flow)', 'Assemble reservoir, pumps, and grow trays', 'Mix nutrient solution and transplant seedlings', 'Monitor pH/EC levels and harvest'],
        pace: 'Self-paced'
    },
    {
        id: 'aeroponics',
        title: 'Aeroponics Professional',
        description: 'Mist-based nutrition for rapid growth and maximum oxygen.',
        image: '/images/tech_aeroponics_1770352820128.png',
        steps: ['Build an aeroponic chamber with misters', 'Install timer-controlled misting system', 'Plant cuttings in net pots', 'Adjust mist intervals and harvest'],
        pace: 'Self-paced'
    },
    {
        id: 'mushroom',
        title: 'Vertical Mushroom Farming',
        description: 'High-yield fungi cultivation in dark, small spaces.',
        image: '/images/crop_mushroom.png',
        steps: ['Prepare sterilized substrate (straw or sawdust)', 'Inoculate with mushroom spawn', 'Maintain humidity and darkness', 'Harvest flushes every 7-10 days'],
        pace: 'Self-paced'
    }
];
