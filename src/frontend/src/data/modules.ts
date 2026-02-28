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
        description: 'India is the 2nd largest rice producer globally (ICAR). Rice thrives in warm, humid climates (20-37°C) with 150+ cm rainfall. Key varieties include Swarna, IR-64, and Basmati types (TNAU recommends Jaya, Rasi for irrigated plains). Major diseases: Blast (Pyricularia), Sheath Blight, BPH. Requires puddled fields with 2-5 cm standing water. Yield potential: 40-60 qtl/ha under good management.',
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
        description: 'India\'s second most important cereal (ICAR has released 127+ wheat varieties since 2014). Grown as a Rabi crop (Oct-Mar) requiring cool temperatures (14-15°C for tillering). TNAU recommends UAS 304, MACS 6222 for peninsular zones. Major threats: Yellow Rust, Brown Rust, Karnal Bunt. Needs 4-6 irrigations at critical stages (CRI, flowering). Yield potential: 40-50 qtl/ha with improved varieties.',
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
        description: 'The "Queen of Cereals" — a versatile Kharif crop used for food, fodder, and industrial purposes (ICAR). Grows in 20-30°C with 60-110 cm rainfall. TNAU recommends hybrids DKC 9089, DK 777 for Karnataka. Major pest: Fall Armyworm (Spodoptera). Sensitive to waterlogging. Rich in Vitamin A (yellow maize). Yield potential: 60-80 qtl/ha for hybrids.',
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
        description: 'India\'s leading oilseed crop with 38-42% protein content (ICAR). Fixes atmospheric nitrogen via Rhizobium bacteria, enriching soil for subsequent crops. Best grown in Kharif (June-July) in black soils. Varieties: JS 335, DSb 21 (Karnataka). Major diseases: Yellow Mosaic Virus, Rust. Seed treatment with Rhizobium culture is essential. Yield potential: 15-25 qtl/ha.',
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
        description: 'India produces 70% of the world\'s chickpea (ICAR). A Rabi pulse crop highly drought-tolerant, requiring only 60-90 cm rainfall. Varieties: JG-11, JAKI-9218 (Desi), MNK-1 (Kabuli). Major pest: Helicoverpa Pod Borer — use pheromone traps. Nipping at 30 days encourages branching. Excellent for crop rotation as it fixes nitrogen. Yield potential: 12-20 qtl/ha.',
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
        description: 'Known as "White Gold" — India is the largest cotton producer globally (ICAR). Bt Cotton hybrids (DCH-32) dominate Karnataka. Grown in Kharif on deep black soils (Regur). Major pests: Pink Bollworm, Jassids, Thrips, Whitefly. Requires 150-180 frost-free days. TNAU recommends integrated pest management with pheromone traps. Multiple pickings (3-4) from Nov-Feb. Yield potential: 15-25 qtl lint/ha.',
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
        description: 'India is the 2nd largest sugar producer (ICAR). Sugarcane is a 10-18 month commercial crop needing tropical climate (21-27°C) and 150+ cm water. TNAU recommends Co 86032 ("Wonder Cane"), CoC 671 for high sugar recovery (12-14%). Propagated through 2-3 bud setts. Key practices: Detrashing, Propping, and Earthing up. Major pest: Early Shoot Borer. Yield: 800-1200 qtl cane/ha.',
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
        description: 'The world\'s 4th most important food crop (ICAR). Potato needs cool climate (15-25°C) and loose, well-drained sandy loam soil for tuber expansion. TNAU varieties: Kufri Jyoti (Hills), Kufri Pukhraj. Major disease: Late Blight (Phytophthora) — spray Mancozeb preventively. Earthing up prevents greening (solanine toxin). Dehaulm 10 days before harvest to harden skin. Yield: 200-300 qtl/ha.',
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
        description: 'India is the 2nd largest onion producer globally. A high-value Rabi crop sensitive to day-length for bulbing. TNAU recommends Arka Kalyan, Bhima Super varieties. Major pest: Thrips (causes silvery leaf patches). Nitrogen must stop after bulb initiation to prevent thick necks. Neck-fall indicates harvest readiness. Proper curing (3-4 days in field) is critical for shelf life. Yield: 200-300 qtl/ha.',
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
        description: 'India\'s most widely grown vegetable crop. Tomato is a warm-season crop (20-25°C) grown year-round in many regions. TNAU recommends Arka Rakshak (tri-disease resistant), Arka Samrat hybrids. Major issues: Fruit Borer, Leaf Curl Virus, Blossom End Rot (calcium deficiency). Staking and pruning of suckers improves yield in indeterminate types. Harvest at "Breaker" stage for long transport. Yield: 400-600 qtl/ha.',
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
        description: 'India produces 80% of the world\'s turmeric (ICAR). A 7-9 month spice crop with potent medicinal properties (curcumin). TNAU recommends Pratibha, IISR Alleppey Supreme varieties. Planted using mother rhizomes in May-June. Requires heavy mulching (15 tons/ha green leaves) and organic manure (25 tons FYM/ha). Post-harvest: Boil rhizomes for 45 mins (curing) then sun-dry 10-15 days. Yield: 200-250 qtl fresh rhizomes/ha.',
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
        description: 'India is the largest ginger producer and exporter (ICAR). Ginger is an 8-10 month shade-loving spice crop ideal for intercropping in coconut/arecanut orchards. TNAU varieties: IISR Varada, Mahima. Major disease: Soft Rot (Pythium) — soil solarization is critical prevention. Requires well-drained soil (waterlogging is fatal). Mulching is essential at planting. Green ginger harvested at 6 months; dry ginger at 8-9 months. Yield: 150-200 qtl/ha.',
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
        description: 'India is the world\'s largest producer, consumer, and exporter of chillies. A high-value spice crop grown in Kharif and Rabi. TNAU recommends Byadgi (for color), Guntur (for pungency), Arka Lohit. Major threats: Leaf Curl Virus (transmitted by Thrips/Mites — use sticky traps and Neem oil), Fruit Borer. Planofix spray reduces flower drop. Multiple pickings from 75+ days. Yield: 15-25 qtl dry chilli/ha.',
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
        description: 'India is the 2nd largest garlic producer. A Rabi crop (Oct-Nov) requiring cool temperatures for bulbing. TNAU recommends Bhima Purple, Yamuna Safed-3, Gadag Local varieties. Only outer plump cloves should be planted (tip up, 3-5 cm deep). Sulphur application improves pungency. Major pest: Thrips. Stop irrigation 2 weeks before harvest for proper curing. Curing in shade for 7-10 days increases shelf life. Yield: 60-80 qtl/ha.',
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
        description: 'A fast-growing cool-season leafy vegetable ideal for beginners. Best grown in winter or under shade nets in warm regions (15-20°C). Requires fertile, humus-rich soil with pH 6.0-7.0. Shallow-rooted — needs frequent, light watering (stress causes bitter leaves). Two types: Leaf lettuce (cut-and-come-again harvest) and Head lettuce (full head harvest). Can also be grown hydroponically. Harvest in early morning for maximum crispness. Cycle: 30-45 days seed to plate.',
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
        description: 'A revolutionary soil-less cultivation technique that saves up to 90% water compared to traditional farming (TNAU). Plants grow in nutrient-rich water solutions using systems like NFT (Nutrient Film Technique), DWC (Deep Water Culture), or Ebb & Flow. Ideal for apartments and urban spaces. Key parameters: pH 5.5-6.5, EC 1.0-2.0. Best crops: Lettuce, Basil, Spinach, Strawberry. Year-round production possible with controlled environment. Yields 3-10x higher per sq ft than soil farming.',
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
        description: 'An advanced soil-less technique where plant roots hang in air and are periodically misted with nutrient solution (TNAU). Provides maximum oxygen to roots, resulting in 30-50% faster growth than hydroponics. Uses 95% less water and 60% less fertilizer than field farming. Ideal for leafy greens, herbs, and strawberries. Timer-controlled misting cycles (5 sec ON, 3-5 min OFF). Requires careful monitoring but offers highest yields per unit area of any growing method.',
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
        description: 'A profitable indoor farming enterprise requiring minimal space and investment (ICAR). Oyster mushroom (Pleurotus) grows on paddy straw substrate at 24-28°C; Button mushroom (Agaricus) needs composted substrate at 14-18°C. Substrate must be pasteurized to kill contaminants. Spawn run takes 15-20 days in dark, followed by fruiting with fresh air, light, and 80-90% humidity. Multiple flushes (3-4 harvests) from one bag. Rich in protein, Vitamin D, and antioxidants. ROI: 50-100% in first cycle.',
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
        description: 'Nutritional powerhouses — microgreens contain 4-40x more nutrients than mature plants (ICAR research). Grow on your windowsill in just 7-14 days. Popular varieties: Sunflower, Radish, Pea Shoots, Mustard, Broccoli. Sow densely on moist coco peat, blackout for 2-4 days, then expose to light. No soil or fertilizer needed. Harvest at cotyledon stage with scissors. Excellent source of Vitamins C, E, K and beta-carotene. High market value: ₹500-1500/kg.',
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
        description: 'A space-efficient technique to grow food on walls, trellises, and vertical frames — ideal for urban balconies (TNAU). Supports climbing crops (beans, cucumbers, peas) and wall-mounted pocket gardens (herbs, strawberries, lettuce). Uses 80% less ground space than horizontal gardening. Can be soil-based or hydroponic. Key components: vertical frame, drip irrigation, and good potting mix. Green walls also improve air quality and reduce building heat by 5-7°C.',
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
        description: 'The most accessible form of urban farming — grow vegetables, herbs, and flowers in pots, grow bags, or recycled containers on any surface. TNAU recommends potting mix of Red Soil + Coco Peat + Vermicompost (1:1:1). Suitable for rooftops, patios, and window ledges. Drainage holes are essential. Best crops: Chilli, Tomato, Brinjal, Mint, Coriander. Seasonal crop rotation keeps soil healthy. Container size: 6" for greens, 12" for fruiting vegetables, 20" for dwarf fruit trees.',
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
        description: 'Transform your terrace into a productive kitchen garden producing fresh herbs and vegetables year-round (TNAU). South-facing terraces with 6-8 hours sunlight are ideal. Waterproof your roof before starting. Place heavy pots near pillars/beams. Use the magic mix: Red Soil + Coco Peat + Vermicompost + Neem Cake. Best crops: Leafy greens, Tomato, Chilli, Brinjal, Herbs (Basil, Mint, Coriander). Install drip irrigation for water efficiency. Average family can save ₹2000-3000/month on vegetables.',
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
        description: 'A sustainable closed-loop system combining fish farming (aquaculture) with soil-less plant growing (hydroponics). Fish waste provides natural fertilizer (Ammonia → Nitrates via beneficial bacteria) for plants, which in turn filter and clean the water for fish. TNAU recommends Tilapia/Koi fish with Lettuce/Basil/Spinach. Uses 90% less water than traditional farming. Weekly testing of Ammonia, Nitrite, and Nitrate levels is essential. Perfect for urban rooftops and educational institutions.',
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
        description: 'Grow grafted dwarf fruit trees in large containers on patios and balconies. TNAU recommends dwarf varieties of Mango (Amrapali), Guava (Allahabad Safeda), Lemon (Kagzi), Pomegranate (Bhagwa). Use 14-20 inch pots with heavy soil mix for stability. Grafted plants fruit 2-3 years earlier than seedlings. Regular pruning maintains compact shape. Hand pollinate if bees are scarce in urban areas. Feed with organic fertilizers every 2 months during growing season.',
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
        description: 'An innovative vertical growing system using PVC pipe towers with net cups — grow 50+ plants in just 4 sq ft of floor space (TNAU research). A submersible pump recirculates nutrient solution from a base reservoir through the tower. Timer-controlled: 15 min ON, 45 min OFF. Best crops: Leafy greens on top tiers, compact fruiting plants (cherry tomato, strawberry) at bottom. Perfect for balconies, terraces, and commercial urban farms. 5-8x more productive per sq ft than ground farming.',
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
        description: 'Urban beekeeping boosts pollination of nearby gardens by 30-50% while producing fresh honey (ICAR). Indian Honey Bee (Apis cerana indica) or Italian Bee (Apis mellifera) can be kept on rooftops. Place hives away from foot traffic with nearby water source. Purchase a nucleus colony and transfer to Langstroth hive boxes. Weekly inspections for queen health, brood, and honey stores. Harvest 10-15 kg honey per hive per season. Also produces beeswax, propolis, and royal jelly.',
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
