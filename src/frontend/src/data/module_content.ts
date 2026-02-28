
export interface ModuleStage {
    stage: number;
    title: string;
    duration: string;
    topics: {
        title: string;
        content: string;
    }[];
}

export const riceSyllabus: ModuleStage[] = [
    {
        stage: 1,
        title: "Planning & Field Selection",
        duration: "1-2 Weeks Before Sowing",
        topics: [
            {
                title: "Season & Varieties (Karnataka)",
                content: "**Season:** Kharif (June-Nov) is the main season. Sowing starts with the onset of Monsoon (June).\n**Suitable Varieties:**\n*   **Coastal/Hilly:** Intan, Abhilash, Jaya.\n*   **Irrigated Maidan:** Mandya Vijaya (135-140 days), Jaya, Rasi, Tanu (KMP-101), BR-2655.\n*   **Drill Sown:** Rasi, Tellahamsa."
            },
            {
                title: "Field Selection",
                content: "Select a field with **clayey or clay-loam soil** that retains water well. Avoid sandy soils for transplanted rice. Ensure the field is leveled and has proper bunds (holus) to hold water."
            }
        ]
    },
    {
        stage: 2,
        title: "Land Preparation",
        duration: "2-3 Weeks",
        topics: [
            {
                title: "Primary Tillage",
                content: "Plough the land immediately after the previous harvest or summer showers (April-May). This helps kill weed seeds and exposes soil-borne pests to the sun."
            },
            {
                title: "Puddling & Leveling",
                content: "1.  **Puddling:** 2 weeks before transplanting, flood the field and plough with a cage wheel/puddler. This destroys soil structure to reduce water percolation.\n2.  **Leveling:** Use a leveling board to ensure uniform water depth. Uneven fields lead to uneven crop growth."
            },
            {
                title: "Green Manuring",
                content: "Apply organic manure (FYM) @ 10 tonnes/ha or incorporate green manure crops like Dhaincha or Sunhemp during puddling."
            }
        ]
    },
    {
        stage: 3,
        title: "Seed Selection & Treatment",
        duration: "2-3 Days",
        topics: [
            {
                title: "Seed Selection",
                content: "**Seed Rate:** 20-25 kg per acre for transplanting.\n**Quality Check:** Dissolve common salt in water. Put seeds in it. Floating seeds are chaffy (discard them); heavy seeds that sink are good for sowing. Wash sinking seeds with fresh water immediately."
            },
            {
                title: "Seed Treatment",
                content: "Soak seeds in water with **Bavistin (Carbendazim)** @ 2g/kg of seed for 24 hours. Drain water and keep seeds in a gunny bag for sprouting (incubation) for 24-48 hours until tiny white sprouts appear."
            }
        ]
    },
    {
        stage: 4,
        title: "Nursery Preparation",
        duration: "20-30 Days",
        topics: [
            {
                title: "Raising Seedlings",
                content: "Prepare raised beds (1m wide) in a wet nursery. Broadcast sprouted seeds evenly. Keep the beds moist but do not flood them initially. Apply a small dose of Urea (1-2 kg) if seedlings look yellow."
            },
            {
                title: "Weed & Pest Check",
                content: "Manually remove weed grasses. If blast disease spots appear (spindle shape), spray Carbendazim. Maintain water level at 2-3 cm once seedlings are 15 days old."
            }
        ]
    },
    {
        stage: 5,
        title: "Transplanting to Main Field",
        duration: "2-3 Days",
        topics: [
            {
                title: "Ideal Timing",
                content: "Transplant when seedlings are **21-25 days old** (4-5 leaf stage). delayed transplanting reduces yield."
            },
            {
                title: "Method",
                content: "**Spacing:** 20x10 cm or 15x10 cm depending on variety duration.\n**Depth:** Plant shallow (2-3 cm deep). Deep planting inhibits tillering.\n**Density:** 2-3 seedlings per hill. Maintain a thin film of water during transplanting."
            }
        ]
    },
    {
        stage: 6,
        title: "Vegetative Growth (Tillering)",
        duration: "30-40 Days",
        topics: [
            {
                title: "Water Management",
                content: "Keep water level at **2-5 cm**. Do not let the field dry out completely, but 'Alternate Wetting and Drying' can be practiced to save water and reduce pests."
            },
            {
                title: "Fertilizer (Top Dressing)",
                content: "Apply 50% of Nitrogen (Urea) at tillering stage (approx. 30 days after transplanting). Ensure no standing water while applying urea, then re-flood after 24 hours."
            },
            {
                title: "Weeding",
                content: "Critical period! Weeds compete for nutrients. Remove weeds manually or use a cono-weeder (which also aerates soil)."
            }
        ]
    },
    {
        stage: 7,
        title: "Reproductive Stage",
        duration: "25-30 Days",
        topics: [
            {
                title: "Panicle Initiation to Flowering",
                content: "The plant stops producing tillers and starts growing the grain head (panicle). This is the **most sensitive stage** to water stress. Keep field flooded (5 cm)."
            },
            {
                title: "Disease Alert",
                content: "**Blast & Sheath Blight:** Watch for lesions. Spray Tricyclazole if blast is severe.\n**Stem Borer:** Watch for 'Dead Hearts'. Apply Cartap if needed."
            }
        ]
    },
    {
        stage: 8,
        title: "Grain Filling & Maturity",
        duration: "20-25 Days",
        topics: [
            {
                title: "Milking to Dough Stage",
                content: "Grains fill with starch. Initially milky, then turning hard (dough). Maintain moisture but stop standing water.\n**Pest Watch:** Gundhi Bug attacks at milking stage (sucks sap, empty grains). Dust Malathion if bugs exceed economic threshold."
            },
            {
                title: "Water Drain",
                content: "**Crucial:** Drain out all water from the field **10-15 days before harvest**. This hastens maturity and hardens the soil for harvesting machines."
            }
        ]
    },
    {
        stage: 9,
        title: "Harvesting",
        duration: "7-10 Days",
        topics: [
            {
                title: "Signs of Maturity",
                content: "Harvest when 80-85% of grains are golden yellow. Stem may still be slightly green. Grain moisture should be 20-24%."
            },
            {
                title: "Procedure",
                content: "Cut the crop close to the ground. Thresh immediately or dry in the field for 1-2 days if using manual threshing. Combine harvesters do both simultaneously."
            }
        ]
    },
    {
        stage: 10,
        title: "Post-Harvest Management",
        duration: "1-2 Weeks",
        topics: [
            {
                title: "Drying",
                content: "Sun dry the grains on a concrete floor or tarpaulin. Stir frequently. Bring moisture content down to **12-13%** for storage. High moisture leads to fungal, discoloration, and pest attack."
            },
            {
                title: "Storage",
                content: "Store in gunny bags (stacked on wooden pallets, not floor) or metal bins. Use Neem leaves or chemical fumigants for long-term storage protection."
            }
        ]
    }
];

export const wheatSyllabus: ModuleStage[] = [
    {
        stage: 1,
        title: "Planning & Crop Selection",
        duration: "1-2 Weeks Before Sowing",
        topics: [
            {
                title: "Season & Climate",
                content: "**Season:** Rabi (Winter). Sowing in Oct-Nov. Wheat requires cool nights (20-25°C germination, 14-15°C tillering).\n**Karnataka Varieties (Irrigated):**\n*   **UAS 304:** High yielding bread wheat for Peninsular Zone.\n*   **DDK 1025/1029:** Khapli (Dicoccum) wheat, good for diabetes management.\n*   **MACS 6222:** Rust resistant, high yield (45-50 qtl/ha)."
            },
            {
                title: "Field Selection",
                content: "Choose **loamy or clay loam soil** with good drainage. Wheat is sensitive to waterlogging. pH 6.0-7.5 is ideal."
            }
        ]
    },
    {
        stage: 2,
        title: "Land Preparation",
        duration: "2-3 Weeks",
        topics: [
            {
                title: "Tillage",
                content: "Plough the land with a disc plough to a depth of 15-20 cm. Follow with 2-3 harrowings and planking to break clods and level the field."
            },
            {
                title: "Pre-Sowing Irrigation (Palewa)",
                content: "Apply heavy irritation 4-5 days before sowing. Plough again when soil is at 'Wapsa' (optimal moisture) condition. This ensures uniform germination."
            }
        ]
    },
    {
        stage: 3,
        title: "Seed Selection & Treatment",
        duration: "2-3 Days",
        topics: [
            {
                title: "Seed Rate & Quality",
                content: "**Rate:** 40-50 kg/acre (100-125 kg/ha). Use 25% higher rate for late sowing.\n**Quality:** Use certified seeds with >85% germination rate."
            },
            {
                title: "Treatment",
                content: "Treat seeds with **Carbendazim (Bavistin)** @ 2g/kg or Trichoderma viride @ 4g/kg to prevent Loose Smut and root rots. Termite prone areas: Treat with Chlorpyriphos 20EC @ 4ml/kg."
            }
        ]
    },
    {
        stage: 4,
        title: "Sowing Stage",
        duration: "1 Week (Nov 1 - 15)",
        topics: [
            {
                title: "Method & Spacing",
                content: "**Drilling:** Use a seed-cum-fertilizer drill. Best method.\n**Spacing:** 20-22.5 cm between rows.\n**Depth:** 4-5 cm. Deep sowing delays emergence."
            }
        ]
    },
    {
        stage: 5,
        title: "Germination & Early Growth",
        duration: "10-15 Days",
        topics: [
            {
                title: "Emergence",
                content: "Coleoptile emerges in 5-7 days. Roots start developing. Protect seedlings from birds."
            },
            {
                title: "First Care",
                content: "Monitor for termite attack (patches of drying seedlings). No irrigation usually needed yet if pre-sowing moisture was good."
            }
        ]
    },
    {
        stage: 6,
        title: "Vegetative Growth (CRI & Tillering)",
        duration: "30-40 Days",
        topics: [
            {
                title: "CRI Irrigation (Critical)",
                content: "**Day 21:** Crown Root Initiation. Irrigate NOW. Delay reduces yield drastically."
            },
            {
                title: "Fertilizer & Weeding",
                content: "**Nitrogen:** Apply 1/2 of Urea dose as top dressing just before first irrigation.\n**Weeding:** Spray Clodinafop or Sulfosulfuron for grassy weeds at 30-35 days."
            }
        ]
    },
    {
        stage: 7,
        title: "Reproductive Stage",
        duration: "25-30 Days",
        topics: [
            {
                title: "Flowering",
                content: "Heads (spikes) emerge. Pollination occurs. Avoid water stress now. Irrigate at late jointing (45-50 days) and flowering (80-85 days)."
            },
            {
                title: "Protection",
                content: "Watch for **Rusts** (Yellow/Brown stripes). Spray Propiconazole if noticed. Warm/humid weather favors rust."
            }
        ]
    },
    {
        stage: 8,
        title: "Grain Filling & Maturity",
        duration: "25-30 Days",
        topics: [
            {
                title: "Milking to Dough",
                content: "Grain fills with starch. Irrigate at Milking stage (100 days). Stop irrigation when grains reach 'Hard Dough' stage (yellowing starts)."
            },
            {
                title: "Pest Watch",
                content: "Aphids may attack spikes. If severe, spray Imidacloprid. Birds can also damage ripening ears."
            }
        ]
    },
    {
        stage: 9,
        title: "Harvesting",
        duration: "7-10 Days",
        topics: [
            {
                title: "Signs",
                content: "Grains are hard (cut with teeth = sharp click). Moisture < 20%. Straw is dry and golden."
            },
            {
                title: "Method",
                content: "Manual sickle harvesting or Combine Harvester. Harvest during the cooler part of the day to reduce shattering."
            }
        ]
    },
    {
        stage: 10,
        title: "Post-Harvest Management",
        duration: "1-2 Weeks",
        topics: [
            {
                title: "Threshing & Drying",
                content: "Thresh immediately if manual. Dry grains in sun for 3-4 days to bring moisture to **10-12%**."
            },
            {
                title: "Storage",
                content: "Clean bins. Use new gunny bags. Place 'Pusa Bin' or use EDB ampoules for protection against weevils."
            }
        ]
    }
];

export const garlicSyllabus: ModuleStage[] = [
    {
        stage: 1,
        title: "Clove Selection",
        duration: "1 Week Before Planting",
        topics: [
            {
                title: "Variety Consideration",
                content: "For Karnataka/Maharashtra region, choose varieties like **Bhima Purple** (high yield), **Yamuna Safed-3 (G282)**, or **Gadag Local**. Avoid bulbs from cold regions if growing in warmer zones."
            },
            {
                title: "Selection Criteria",
                content: "Select healthy, large bulbs with >25 cloves. Separate cloves just before planting (do not peel). **Discard small/diseased cloves.** Use only outer, plump cloves for best yield."
            }
        ]
    },
    {
        stage: 2,
        title: "Land Preparation",
        duration: "2 Weeks",
        topics: [
            {
                title: "Soil Requirement",
                content: "Garlic loves **well-drained, loose organic soil**. Avoid heavy clays (causes misshapen bulbs). pH 6.0-7.5."
            },
            {
                title: "Preparation",
                content: "Deep ploughing followed by harrowing. Incorporate 10-15 tons of FYM/acre. Prepare flat beds or ridges/furrows (ridges are better for drainage)."
            }
        ]
    },
    {
        stage: 3,
        title: "Planting",
        duration: "1 Week (Oct-Nov)",
        topics: [
            {
                title: "Sowing Time",
                content: "**Rabi (Oct-Nov)** is best in India. Can also be grown in Kharif (June-July) in hills."
            },
            {
                title: "Method",
                content: "**Dibbling:** Plant cloves upright (tip up). Depth: 3-5 cm.\n**Spacing:** 15cm x 10cm.\n**Seed Rate:** 200-250 kg cloves/acre."
            }
        ]
    },
    {
        stage: 4,
        title: "Vegetative Growth",
        duration: "45-60 Days",
        topics: [
            {
                title: "Irrigation & Weeding",
                content: "Irrigate every 10-12 days. **Critical:** Keep field weed-free initially as garlic competes poorly. Use Pendimethalin (pre-emergence) if labor is scarce."
            },
            {
                title: "Fertilization",
                content: "Apply Nitrogen (Urea) in splits: 30 days and 45 days after planting. Sulphur is useful for pungency."
            }
        ]
    },
    {
        stage: 5,
        title: "Bulb Development",
        duration: "30-40 Days",
        topics: [
            {
                title: "Bulbing Initiation",
                content: "Occurs when days are longer and temp rises slightly. Roots cease growth. **Do not disturb roots** by deep hoeing now."
            }
        ]
    },
    {
        stage: 6,
        title: "Maturity",
        duration: "10-15 Days",
        topics: [
            {
                title: "Signs",
                content: "Leaves start turning yellow/brown from the top. The neck (stem above bulb) softens and bends. About 50% leaves should be brown."
            },
            {
                title: "Stop Irrigation",
                content: "Stop watering **2 weeks before harvest** to allow bulbs to firm up and skin to cure."
            }
        ]
    },
    {
        stage: 7,
        title: "Harvesting & Curing",
        duration: "1-2 Weeks",
        topics: [
            {
                title: "Harvest",
                content: "Pull out bulbs manually or use a digger. Do not bruise them."
            },
            {
                title: "Curing (Crucial)",
                content: "Dry bulbs in shade (with leaves attached) for 7-10 days. This seals the neck and increases shelf life. Cut tops 1 inch above bulb after curing."
            }
        ]
    }
];

export const lettuceSyllabus: ModuleStage[] = [
    {
        stage: 1,
        title: "Land Preparation",
        duration: "1 Week",
        topics: [
            {
                title: "Soil & Location",
                content: "Lettuce needs **fertile, humus-rich soil**. It likes cool weather. In Karnataka, best grown in winter or under shade nets. pH 6.0-7.0."
            },
            {
                title: "Bed Prep",
                content: "Add plenty of compost/vermicompost. Prepare raised beds to ensure good drainage."
            }
        ]
    },
    {
        stage: 2,
        title: "Direct Sowing",
        duration: "1-2 Days",
        topics: [
            {
                title: "Sowing",
                content: "Seeds are tiny. Mix with sand for even distribution. Sow in lines or broadcast. **Depth:** Very shallow (0.5 cm) - they need light to germinate."
            },
            {
                title: "Spacing",
                content: "Thin plants later to 20-30 cm apart (Head types) or 10-15 cm (Leaf types)."
            }
        ]
    },
    {
        stage: 3,
        title: "Germination",
        duration: "4-7 Days",
        topics: [
            {
                title: "Care",
                content: "Keep soil consistently moist but not soggy. Germination occurs in 4-10 days depending on temp (ideal 15-20°C)."
            }
        ]
    },
    {
        stage: 4,
        title: "Leaf Development",
        duration: "20-30 Days",
        topics: [
            {
                title: "Watering",
                content: "**Frequent & Shallow watering.** Lettuce has shallow roots. Stress causes bitter leaves."
            },
            {
                title: "Feeding",
                content: "Apply liquid organic fertilizer (Seaweed extract/Panchagavya) every 10 days for lush green growth."
            }
        ]
    },
    {
        stage: 5,
        title: "Harvesting",
        duration: "Ongoing",
        topics: [
            {
                title: "Methods",
                content: "**Leaf Lettuce:** 'Cut and Come Again' - harvest outer leaves, let center grow.\n**Head Lettuce:** Cut the whole head at base when solid."
            },
            {
                title: "Timing",
                content: "Harvest in **early morning** for maximum crispness."
            }
        ]
    }
];

// ... (previous syllabi)

export const maizeSyllabus: ModuleStage[] = [
    {
        stage: 1, title: "Planning & Hybrid Selection", duration: "2 Weeks Before Sowing", topics: [
            { title: "Season & Climate", content: "**Kharif (June-July)** is the main season for rainfed maize. **Rabi (Oct-Nov)** is possible under irrigated conditions. Maize requires warm temperatures (20-30°C) during growth and cannot tolerate frost. It is the 3rd most important cereal in India after rice and wheat (ICAR), grown across 9.2 million hectares." },
            { title: "Hybrid Selection (TNAU/ICAR)", content: "**Single Cross Hybrids (highest yield):** DKC 9089 (fast maturity, 95-100 days), DK 777, NK 6240, Pioneer 3522. **Composites:** Navjot, Prabhat (open pollinated, farmers can save seeds). **Speciality:** African Tall (fodder), Sweet Corn (Sugar 75), Baby Corn (VL Baby Corn 2). **QPM (Quality Protein Maize):** Shaktiman varieties — biofortified with higher lysine and tryptophan for better nutrition." },
            { title: "Seed Treatment", content: "Treat seeds with **Thiram + Carbendazim** (2g each per kg seed) to prevent seedling diseases (Downy Mildew, root rot). For termite-prone areas, add Imidacloprid 600 FS @ 6ml/kg seed. Seed treatment increases germination by 10-15%." }
        ]
    },
    {
        stage: 2, title: "Land Preparation", duration: "1-2 Weeks", topics: [
            { title: "Tillage & Soil", content: "Plough 2-3 times to achieve fine tilth. Maize thrives in **well-drained loamy soils** with pH 6.5-7.5. It is highly sensitive to waterlogging — even 24 hours of standing water can kill young plants. Make ridges and furrows for drainage in heavy rainfall areas." },
            { title: "Organic Manure & Basal Dose", content: "Apply **10 tons FYM or compost per hectare** during last ploughing. **Basal fertilizer:** Apply full dose of Phosphorus (60 kg DAP/ha) and Potash (40 kg MOP/ha) in furrows at sowing time. Half of Nitrogen applied as basal, rest as top dressing. TNAU recommends 135:62:50 kg NPK/ha for irrigated hybrid maize." }
        ]
    },
    {
        stage: 3, title: "Sowing", duration: "2-3 Days", topics: [
            { title: "Method & Spacing", content: "**Dibbling** on ridges is the most common method — drop 1-2 seeds per hill at 4-5 cm depth. For large farms, use a seed-cum-fertilizer drill or pneumatic planter. **Spacing:** 60×20 cm for grain purpose (83,333 plants/ha), 45×20 cm for Baby Corn (1,11,111 plants/ha). **Seed Rate:** 8-10 kg/acre for hybrids, 15-20 kg/acre for composites." },
            { title: "Sowing Tips", content: "Sow with the onset of monsoon showers (soil moisture is adequate). For Rabi season, sow immediately after kharif rice harvest. Avoid sowing too deep (>6 cm) — it delays emergence and weakens seedlings. Treat seeds before sowing and plant on the same day." }
        ]
    },
    {
        stage: 4, title: "Germination & Emergence", duration: "7-10 Days", topics: [
            { title: "Emergence", content: "Coleoptile pierces the soil surface in 5-7 days under warm, moist conditions. The first leaf unfurls by day 7-10. Ensure field is free of crusting (break soil crust gently if it forms after rain, as it prevents emergence)." },
            { title: "Gap Filling & Thinning", content: "**Gap filling** must be done within 7-10 DAS (Days After Sowing) using pre-soaked seeds — delays beyond this result in uneven growth and smaller cobs. **Thinning:** If >1 seed germinates per hill, remove the weaker seedling at 15 DAS, keeping only 1 healthy plant per hill. Bird damage is common at this stage — use scare devices." }
        ]
    },
    {
        stage: 5, title: "Vegetative Growth", duration: "30-40 Days", topics: [
            { title: "Knee-High Stage & Top Dressing", content: "At 30 DAS (knee-high stage, V6-V8), the plant transitions from root development to rapid stem elongation. **Apply 1st top dressing of Urea** (1/4 of total N) at this stage. Apply remaining 1/4 Urea at tasseling stage. Always apply Urea into moist soil, followed by earthing up." },
            { title: "Earthing Up & Weeding", content: "**Earthing up (mounding soil around the base)** at 30-35 DAS supports the adventitious root system and prevents lodging (falling over in wind). This is critical for tall hybrids. **Weeding:** The first 30 days is the critical weed competition period — yield loss can reach 30-40% if unweeded. Use Atrazine (pre-emergence) @ 1.5 kg/ha or hand weed twice (15 and 30 DAS)." },
            { title: "Irrigation", content: "If rainfall is insufficient, irrigate at 15-day intervals during vegetative stage. Maize needs 500-800 mm total water. Furrow irrigation is preferred over flood irrigation to prevent waterlogging. Drip irrigation can save 40% water and increase yield by 15-20% (TNAU research)." }
        ]
    },
    {
        stage: 6, title: "Tasseling & Silking", duration: "10-15 Days", topics: [
            { title: "Pollination (Critical Stage)", content: "**Tassel (male flower)** emerges at the top of the plant and sheds pollen for 5-8 days. **Silk (female flower)** emerges from the ear — each silk must be pollinated for a kernel to develop. The lag between tassel and silk should be < 3 days for good seed set. **This is the single most water-sensitive stage** — moisture stress now causes 40-50% yield loss." },
            { title: "Management at Flowering", content: "**Irrigation is absolutely critical.** Ensure the field has adequate moisture throughout tasseling-silking (7-10 days). Do not apply any herbicide or insecticide during pollination (it can kill pollinators and damage silk). Monitor for **shoot fly** and **stem borer** — if >10% dead hearts, apply Carbofuran granules in the leaf whorl." }
        ]
    },
    {
        stage: 7, title: "Grain Development", duration: "25-30 Days", topics: [
            { title: "Grain Filling", content: "After pollination, kernels pass through: **Blister stage** (watery, clear fluid) → **Milk stage** (white milky liquid) → **Dough stage** (pasty, thickening starch) → **Dent stage** (hard starch dent on top). The grain filling period determines final grain weight and yield. Ensure continued moisture and no nutrient stress." },
            { title: "Fall Armyworm (FAW) Management", content: "**Spodoptera frugiperda** is the most devastating maize pest in India (ICAR alert). Larvae feed inside the leaf whorl producing characteristic 'window-pane' and 'shot-hole' damage. **IPM approach:** 1) Scout fields weekly from 10 DAS. 2) Apply Neem oil (1500 ppm) in whorl at early infestation. 3) Spray **Emamectin Benzoate 5 SG** @ 0.4g/L or Spinetoram for heavy attack. 4) Use Trichogramma egg parasitoids (biological control). Do not delay spray once >10% plants are affected." }
        ]
    },
    {
        stage: 8, title: "Harvesting & Post-Harvest", duration: "1-2 Weeks", topics: [
            { title: "Maturity Signs", content: "Harvest when: 1) Husk turns yellow/brown and dries. 2) Grains are hard and dented (dent at the top of kernel). 3) **Black layer** forms at the base of the grain (visible if you peel a kernel — dark line where grain attaches to cob). 4) Grain moisture is 20-25%. Delayed harvest causes field losses to birds and grain deterioration." },
            { title: "Threshing & Storage", content: "**Manual:** Break cobs, dry on clean floor for 3-4 days, then shell by beating or using a manual sheller. **Mechanical:** Combine harvester with maize header does harvesting + shelling in one pass. Dry grains to **12-13% moisture** before storage. Store in jute bags in cool, dry place. For longer storage, fumigate with Aluminium Phosphide. **Yield potential:** 60-80 qtl/ha for hybrids, 35-45 qtl/ha for composites under good management." }
        ]
    }
];

export const soybeanSyllabus: ModuleStage[] = [
    {
        stage: 1, title: "Planning & Soil Preparation", duration: "2 Weeks", topics: [
            { title: "Season & Climate", content: "Soybean is exclusively a **Kharif crop** sown with the onset of monsoon (June-July). It requires warm, moist conditions (26-30°C) during growth. India's leading oilseed crop with **38-42% protein** and 18-20% oil content (ICAR). Major producing states: Madhya Pradesh, Maharashtra, Rajasthan, Karnataka." },
            { title: "Variety Selection (TNAU/ICAR)", content: "**Early maturing (85-90 days):** JS 9560, MAUS 71 — escape end-season drought. **Medium (95-100 days):** JS 335 (most popular in India), DSb 21 (Karnataka), KDS 344. **Late (110+ days):** Only for assured rainfall/irrigated areas. Choose varieties resistant to Yellow Mosaic Virus (YMV) — JS 335 is moderately resistant." },
            { title: "Land Preparation", content: "Deep plough once in 3 years to break hard pans. Soybean thrives in **Vertisols (Black Soil)** and well-drained red soils with pH 6.0-7.5. Apply **5 tons FYM/ha** during last ploughing. Make raised broad-bed furrows (BBF) in heavy rainfall areas for better drainage — soybean is extremely sensitive to waterlogging." }
        ]
    },
    {
        stage: 2, title: "Seed Treatment & Sowing", duration: "June-July", topics: [
            { title: "Seed Treatment (Critical Step)", content: "**Triple treatment is recommended (ICAR):** 1) **Fungicide:** Thiram + Carbendazim (1.5g + 1.5g per kg seed) — prevents Rhizoctonia root rot. 2) **Insecticide:** Thiamethoxam 30 FS @ 10ml/kg — protects from stem fly for 30 days. 3) **Rhizobium culture:** 250g per 10 kg seed — fixes atmospheric nitrogen, saving 25-30 kg Urea/ha. Apply fungicide first, dry, then Rhizobium (never mix both together — fungicide kills bacteria)." },
            { title: "Sowing Method", content: "**Seed Rate:** 25-30 kg/acre (75-80 kg/ha). **Spacing:** 30×10 cm (row × plant) for medium varieties; 45×5 cm for early types. Sow at 3-4 cm depth using seed drill or ridge planter. **Timing is critical:** Sow within 7-10 days of good monsoon rain. Late sowing (after July 15) reduces yield by 25-30% per week of delay." }
        ]
    },
    {
        stage: 3, title: "Germination & Emergence", duration: "7-10 Days", topics: [
            { title: "Emergence", content: "Soybean has **epigeal germination** — cotyledons emerge above ground. Large, fleshy cotyledons are very attractive to birds (pigeons, crows). Use bird scare devices and reflective tape. Cotyledons provide nutrition to the seedling for the first 7-10 days." },
            { title: "Stand Establishment", content: "Target plant population: 4-4.5 lakh plants/ha. If emergence is below 75%, consider **gap filling within 10 DAS** using pre-soaked seeds. Soil crusting after heavy rain is the biggest cause of poor emergence — break crust gently with a light harrow or manually." }
        ]
    },
    {
        stage: 4, title: "Vegetative Growth", duration: "30-35 Days", topics: [
            { title: "Weed Management (Critical Period)", content: "**The first 30-35 days is the critical weed-free period** — yield loss can reach 40-80% if not weeded (ICAR data). **Herbicide approach:** Pre-emergence Pendimethalin @ 1.0 kg/ha (spray within 3 DAS on moist soil). Post-emergence Imazethapyr @ 75g/ha at 20 DAS for broadleaf weeds. Supplement with one hand weeding at 30 DAS." },
            { title: "Intercultural Operations", content: "Earthing up at 30 DAS supports root nodulation and prevents toppling. Check root nodules by uprooting a plant — healthy nodules are **pink/red inside** (active nitrogen fixation). White or green nodules are inactive. If nodulation is poor, top-dress with 20 kg Urea/ha as backup." }
        ]
    },
    {
        stage: 5, title: "Flowering & Pollination", duration: "10-15 Days", topics: [
            { title: "Flowering Pattern", content: "Small pink/purple/white flowers appear in leaf axils from 35-45 DAS. Soybean is **self-pollinating** — each flower fertilizes itself before opening. Flowering continues for 2-3 weeks. **Flower drop** of 50-75% is normal in soybean — only 25-50% of flowers set pods." },
            { title: "Stress Management", content: "**Moisture stress during flowering causes severe yield loss** (up to 50%). If dry spell exceeds 15 days, provide life-saving irrigation. High temperature (>35°C) combined with low humidity causes excessive flower abortion. Foliar spray of 2% DAP solution during flowering improves pod set by 10-15% (TNAU recommendation)." }
        ]
    },
    {
        stage: 6, title: "Pod Formation & Filling", duration: "20-25 Days", topics: [
            { title: "Pod Development", content: "Pods develop from fertilized flowers. Each pod contains 2-3 seeds. Seeds go through R5 (beginning seed) → R6 (full seed) stages. This is the period of maximum nutrient uptake — ensure no deficiency. Foliar spray of 0.5% Zinc Sulphate and 0.3% Borax improves seed quality." },
            { title: "Pest Management", content: "**Key pests at pod stage:** 1) **Stem Fly (Melanagromyza):** Maggot tunnels inside stem causing wilting — early seed treatment is only control. 2) **Pod Borer (Helicoverpa/Spodoptera):** Monitor with pheromone traps. Spray Chlorantraniliprole 18.5 SC @ 0.3ml/L when ETL exceeds 2 larvae per meter row. 3) **Green Stink Bug:** Pierces pods and damages seeds — spray Lambda Cyhalothrin if >1 bug per plant." }
        ]
    },
    {
        stage: 7, title: "Maturity & Harvest", duration: "85-110 Days", topics: [
            { title: "Maturity Signs", content: "Leaves turn **yellow and drop** (95% defoliation). Pods turn brown/black and dry. Seeds rattle inside pods when shaken. Stem turns brown. **Harvest at 15% seed moisture** — use moisture meter if available. **Do not delay harvest** — pods shatter (split open) in field causing 10-25% yield loss, especially in varieties like JS 335." },
            { title: "Harvesting & Storage", content: "**Manual:** Cut plants at base, stack in bundles, dry for 3-4 days, thresh by beating on hard surface. **Mechanical:** Combine harvester with soybean header (set cylinder speed to 400-500 RPM to avoid seed cracking). Dry seeds to **10-12% moisture** for safe storage. Store in jute bags in cool, dry place. **Yield potential:** 15-25 qtl/ha under good management. **Bonus:** Soybean enriches soil with 30-40 kg Nitrogen/ha for the next crop (wheat, chickpea)." }
        ]
    }
];

export const chickpeaSyllabus: ModuleStage[] = [
    {
        stage: 1, title: "Planning & Variety Selection (Rabi)", duration: "Sep-Oct", topics: [
            { title: "Season & Climate", content: "Chickpea (Gram/Chana) is India's most important **Rabi pulse** crop, sown in October-November after kharif harvest. India produces **70% of the world's chickpea** (ICAR). It grows best in cool, dry conditions (20-25°C day, 10-15°C night) and is highly drought-tolerant — needing only 60-90 cm total rainfall/irrigation." },
            { title: "Variety Selection (TNAU/ICAR)", content: "**Desi types (brown, rough seed coat — 85% of India's production):** JG-11 (wilt resistant, 110 days), JAKI-9218, Vijay (Phule G-12), GBM-2. **Kabuli types (large, cream, smooth seed coat — premium price):** MNK-1, KAK-2, ICCV-2. **Wilt-resistant varieties are essential** — Fusarium wilt is the #1 chickpea killer. Always verify variety resistance before purchase." },
            { title: "Seed Treatment", content: "**Bio-agent treatment:** Trichoderma viride @ 4g/kg seed (controls Fusarium wilt). **Rhizobium culture:** 200g per 10kg seed (nitrogen fixation — saves 20 kg Urea/ha). Apply Trichoderma first, dry in shade, then apply Rhizobium. TNAU also recommends pelleting seeds with micronutrients (Zinc 2g + Molybdenum 1g per kg seed)." }
        ]
    },
    {
        stage: 2, title: "Land Preparation", duration: "1 Week", topics: [
            { title: "Soil & Tillage", content: "Chickpea prefers **light, well-drained sandy loam to loam soils** with pH 6.0-8.0. It cannot tolerate waterlogging or heavy clay soils (causes root rot). Plough once, then 2 harrowings for a **rough seedbed** (chickpea doesn't need fine tilth — rough surface reduces moisture loss). Apply 2-3 tons FYM/ha during ploughing." },
            { title: "Fertilizer (Basal)", content: "Chickpea has **low fertilizer needs** due to nitrogen fixation. Apply only **20 kg Nitrogen + 40 kg Phosphorus + 20 kg Potash per hectare** as basal. Apply full dose at sowing. Single Super Phosphate (SSP) is preferred over DAP because it also supplies Sulphur (essential for protein synthesis in pulses). Avoid excess Nitrogen — it promotes vegetative growth at the expense of pods." }
        ]
    },
    {
        stage: 3, title: "Sowing", duration: "Oct-Nov", topics: [
            { title: "Timing & Depth", content: "**Optimal sowing window:** October 15 - November 15 in peninsular India. Late sowing (after Nov 30) exposes flowering to high temperatures, causing severe yield loss. Sow at **7-10 cm depth** to access residual soil moisture from the kharif season. Deeper sowing is critical in rainfed conditions." },
            { title: "Method & Spacing", content: "**Seed rate:** 75-80 kg/ha (Desi), 100-120 kg/ha (Kabuli — larger seed size). **Spacing:** 30×10 cm (row × plant). Use seed drill or plough furrow method. For rainfed conditions, wider spacing of 45×10 cm conserves moisture. In Madhya Pradesh/Rajasthan, 'utera' method is practiced — broadcasting chickpea seed into standing rice crop before harvest." }
        ]
    },
    {
        stage: 4, title: "Vegetative Growth & Nipping", duration: "30-40 Days", topics: [
            { title: "Nipping (Topping)", content: "**Nipping is a unique chickpea practice** — remove (pluck) the apical growing tip at 25-30 DAS when the plant is 15-20 cm tall. This breaks apical dominance and forces the plant to produce more **lateral branches** (4-6 extra branches per plant), resulting in 15-20% more pods. In large fields, **sheep/goat grazing** at 25-30 DAS achieves the same effect (traditional practice in Karnataka/AP)." },
            { title: "Weed Management", content: "Chickpea is a **poor competitor against weeds** due to slow initial growth. **Pre-emergence:** Pendimethalin @ 1.0 kg/ha within 3 DAS. **Post-emergence:** One hand weeding at 30-35 DAS. **Irrigation:** Chickpea is mostly rainfed. If available, give only 1-2 light irrigations at branching (30 DAS) and pod-filling (60 DAS). Excess water promotes Ascochyta blight." }
        ]
    },
    {
        stage: 5, title: "Flowering & Pod Borer Management", duration: "15-20 Days", topics: [
            { title: "Flowering", content: "Small white/pink/purple flowers appear from 40-50 DAS. Chickpea is **self-pollinated**. Flowering continues for 2-3 weeks. Cool nights (10-15°C) are essential for good pod set. **Heat stress (>30°C) during flowering causes abortion** — this is why late sowing is harmful." },
            { title: "Helicoverpa Pod Borer (Most Devastating Pest)", content: "**Helicoverpa armigera** is the single biggest threat to chickpea yield in India, causing 30-40% losses (ICAR). The larva bores into pods and feeds on developing seeds. **IPM Strategy:** 1) Install **Pheromone traps** @ 5/ha from flowering onset — monitor moth catch. 2) **Bird perches** (T-shaped sticks) @ 10/ha attract insect-eating birds. 3) **NSKE 5%** (Neem Seed Kernel Extract) spray at 50% flowering. 4) **Chlorantraniliprole 18.5 SC** @ 0.3ml/L if larval count exceeds 1-2 per meter row. 5) **HaNPV** (Helicoverpa Nuclear Polyhedrosis Virus) @ 250 LE/ha — biological option." }
        ]
    },
    {
        stage: 6, title: "Pod Development & Filling", duration: "25-30 Days", topics: [
            { title: "Grain Filling", content: "Pods develop from fertilized flowers (1-2 seeds per pod). During grain filling, the plant mobilizes nutrients from leaves and stems to the seeds — this is why leaves start yellowing from the bottom. **Foliar spray of 2% Urea + 1% KCl** during early pod filling can boost yield by 8-12% in moisture-stressed conditions (TNAU)." },
            { title: "Disease Management", content: "**Fusarium Wilt:** Plants suddenly wilt and die — roots show internal browning. Use resistant varieties. **Dry Root Rot:** Common in drought + high temperature — plants dry from the top. No chemical cure — only prevention through seed treatment with Trichoderma. **Ascochyta Blight:** Brown spots on leaves and pods during wet/foggy weather — spray Mancozeb @ 2.5g/L." }
        ]
    },
    {
        stage: 7, title: "Harvest & Post-Harvest", duration: "Feb-March", topics: [
            { title: "Maturity Signs", content: "Plants turn **completely brown/dry**. Leaves drop. Pods rattle when shaken. Harvest when seed moisture is **12-14%**. Harvest the entire plant by uprooting or cutting at ground level. In India, most chickpea is harvested manually by pulling plants. Machine harvesting (combine + chickpea header) is expanding in MP and Rajasthan." },
            { title: "Threshing & Storage", content: "Stack harvested plants in open for 3-5 days to sun-dry. Thresh by **beating bundles with sticks on a threshing floor** or by trampling (traditional method). Mechanical threshers are now common. Dry seeds to **10% moisture** for safe storage. Chickpea is prone to **Pulse Beetle (Bruchid)** damage in storage — mix Neem leaves or apply Deltamethrin dust on bag surface. **Yield potential:** 12-20 qtl/ha. Chickpea fixes 40-50 kg Nitrogen/ha in soil for the next crop." }
        ]
    }
];

export const cottonSyllabus: ModuleStage[] = [
    {
        stage: 1, title: "Planning & Hybrid Selection", duration: "May", topics: [
            { title: "India's Cotton Landscape", content: "India is the **world's largest cotton producer** (ICAR), with 12+ million hectares under cultivation. Cotton is called **'White Gold'** — it is a key cash crop providing livelihood to 60+ million farmers. Karnataka ranks 5th in cotton production. Two species are grown: **G. hirsutum** (American cotton, long staple — 90% area) and **G. arboreum** (Desi cotton, short staple)." },
            { title: "Hybrid Selection (TNAU/ICAR)", content: "**Bt Cotton hybrids** dominate: DCH-32 (Karnataka's star hybrid), BGII hybrids (Bollgard II — dual Cry protein resistance). **Non-Bt options (HDPS):** Suraj, PKV 081 — High Density Planting System at 45×10 cm for short-duration, machine-picked cotton. Always buy **branded, certified Bt seed packets** from authorized dealers — avoid spurious seeds." },
            { title: "Refuge Crop (Mandatory for Bt Cotton)", content: "**ICAR mandates 20% refuge area** planted with non-Bt cotton around Bt fields. This delays Pink Bollworm resistance development against Bt toxin. Plant 5 rows of non-Bt cotton for every 20 rows of Bt. This is a legal requirement — failure can lead to resistance collapse and complete crop loss." }
        ]
    },
    {
        stage: 2, title: "Land Preparation", duration: "2 Weeks", topics: [
            { title: "Soil Requirements", content: "Cotton grows best in **Deep Black Cotton Soils (Vertisols/Regur)** with good water-holding capacity. Also grows in medium black and red soils. pH 6.5-8.0. Deep plough (30-45 cm) once in 3 years to break hard pans and improve root penetration. In heavy black soils, form ridges and furrows for drainage." },
            { title: "Fertilizer & Manure", content: "Apply **10 tons FYM/ha** during last ploughing. **Basal dose:** 50% of recommended Nitrogen + full Phosphorus + full Potash at sowing. TNAU recommends **120:60:60 kg NPK/ha** for irrigated hybrid cotton. Apply Zinc Sulphate @ 25 kg/ha if deficient (common in black soils). Sulphur application (20 kg/ha as Gypsum) improves fiber quality." }
        ]
    },
    {
        stage: 3, title: "Sowing", duration: "June-July", topics: [
            { title: "Method & Spacing", content: "**Dibble** 2 seeds per hill at 3-5 cm depth on the side of the ridge. **Spacing:** 90×60 cm (standard), 120×60 cm (for spreading hybrids). For HDPS (High Density Planting System): 45×10 cm. **Seed rate:** 1.0-1.5 kg/acre (Bt hybrid packets contain 450g, enough for 1 acre). Sowing is done with the onset of monsoon — dry sowing (before monsoon) in some black soil areas catches the first rains." },
            { title: "Seed Treatment", content: "Most Bt cotton seeds come **pre-treated** with fungicide + insecticide (pink/blue colored coating). If untreated, apply Imidacloprid 70 WS @ 7g/kg seed (protects from sucking pests for 30 days) + Trichoderma viride @ 4g/kg (prevents seedling root rot)." }
        ]
    },
    {
        stage: 4, title: "Vegetative Growth", duration: "40-50 Days", topics: [
            { title: "Establishment", content: "Cotton germinates in 5-7 days (epigeal emergence). **Gap filling:** Re-sow within 10 DAS using pre-soaked seeds. **Thinning:** Retain only 1 healthy plant per hill at 15-20 DAS — remove the weaker seedling. Target plant population: 18,500 plants/ha at 90×60 cm spacing." },
            { title: "Weeding & Intercultivation", content: "Cotton is a **wide-spaced, slow-growing crop** — very susceptible to weed competition. **Critical weed-free period: first 60 days.** Pre-emergence: Pendimethalin @ 1.0 kg/ha within 3 DAS. Two hand weedings at 20 and 40 DAS. Inter-row cultivation with blade harrow at 25 and 45 DAS. **Earthing up at 45 DAS** supports root system and prevents toppling." }
        ]
    },
    {
        stage: 5, title: "Square Formation", duration: "20-25 Days", topics: [
            { title: "Square (Bud) Stage", content: "**Squares** are the triangular flower buds that form at 40-50 DAS. Each square takes 21-25 days to develop into a flower. Monitor squares daily for **square shedding** — excessive shedding indicates pest damage or moisture stress. A healthy plant should retain 60-70% of its squares." },
            { title: "Sucking Pest Management", content: "This is the peak attack period for **sucking pests (ICAR):** 1) **Jassids (Leafhoppers):** Cause yellowing, curling leaf edges. Spray Flonicamid 50 WG @ 0.3g/L. 2) **Thrips:** Cause upward leaf curling with silvery patches. Spray Fipronil 5 SC @ 2ml/L. 3) **Whitefly:** Sticky honeydew on leaves, sooty mold. Spray Diafenthiuron 50 WP @ 1.2g/L. 4) **Aphids:** Colony on young shoots — spray Dimethoate. Use **Yellow sticky traps** (10/acre) for monitoring and mass trapping." }
        ]
    },
    {
        stage: 6, title: "Flowering", duration: "20-30 Days", topics: [
            { title: "Bloom Characteristics", content: "Creamy white flowers open in morning (Day 1) → turn **pink by evening** → turn **red/dark pink on Day 2** → fall off on Day 3. The flower is self-pollinating. After fertilization, the boll (fruit) starts developing at the base of the flower. **50-65% of flowers produce bolls** — the rest shed naturally." },
            { title: "Nutrient & Water Management", content: "**Flowering to boll development is the period of maximum nutrient demand.** Apply remaining 50% Nitrogen as top dressing (split into 2 doses at 60 and 90 DAS). Foliar spray of **2% DAP + 1% KCl** at flowering and boll development boosts yield by 10-15%. Irrigate at 15-day intervals if rain is inadequate — moisture stress during flowering reduces boll retention by 30-40%." }
        ]
    },
    {
        stage: 7, title: "Boll Development", duration: "40-50 Days", topics: [
            { title: "Boll Maturation", content: "Bolls take 45-65 days from flower to burst open. Green bolls grow for 25 days, then fiber elongation occurs (15-20 days), followed by fiber maturation/thickening. A single plant produces 30-60 bolls (hybrid cotton). Each boll has 3-5 locks containing lint and seeds." },
            { title: "Pink Bollworm (Critical Threat)", content: "**Pectinophora gossypiella** is now the **#1 threat to Bt cotton in India** due to resistance development. Larvae bore into bolls, feed on developing seeds, and cause 'rosette flowers' (flowers with fused petals). **Management (ICAR):** 1) **Pheromone traps** @ 5/ha — if moth catch >8/trap/night, take action. 2) Collect and destroy 'rosette flowers.' 3) Spray **Profenofos 50 EC** @ 2ml/L or Thiodicarb 75 WP @ 1g/L for heavy infestation. 4) **Early termination** — harvest by February and uproot plants immediately to break the pest cycle." }
        ]
    },
    {
        stage: 8, title: "Multiple Harvests (Picking)", duration: "Nov-Feb", topics: [
            { title: "Picking Method", content: "**3-4 pickings** are done at 10-15 day intervals as bolls burst progressively. Pick only **fully burst, fluffy white bolls** in the morning (moisture makes lint heavier = more weight). Avoid picking wet bolls (causes discoloration and grade loss). Keep seed cotton (kapas) free from dry leaves, bracts, and dirt — contamination reduces market grade and price significantly." },
            { title: "Grading & Storage", content: "Separate pickings into grades: **First picking** has the best quality fiber (longest staple, cleanest). Sun-dry kapas to **8-10% moisture** before storage or ginning. Store in clean jute bags in dry, ventilated rooms. **Yield potential:** 15-25 qtl lint/ha for irrigated Bt hybrids, 8-12 qtl/ha for rainfed. **Post-season:** Uproot plants immediately after last picking — destroy stalks to eliminate Pink Bollworm pupae (mandatory in many states)." }
        ]
    }
];

export const sugarcaneSyllabus: ModuleStage[] = [
    {
        stage: 1, title: "Planning & Variety Selection", duration: "Jan-Feb", topics: [
            { title: "India's Sugar Economy", content: "India is the **2nd largest sugar producer** globally (ICAR). Sugarcane is a 10-18 month commercial crop that forms the backbone of India's rural economy, supporting 50+ million farmers and 500+ sugar mills. **Karnataka:** 3rd largest producing state — Belgaum, Mandya, and Shimoga are key districts." },
            { title: "Variety Selection (TNAU/ICAR)", content: "**High sugar recovery (12-14%):** Co 86032 ('Wonder Cane' — most popular in peninsular India), CoC 671, SNK 814. **Early maturing (10-12 months):** Co 92005, CoC 24. **High yielding (but moderate sugar):** Co 0238 (UP), Co 86032 (Karnataka). Select disease-resistant varieties — **Red Rot and Smut** are the most damaging diseases." },
            { title: "Sett Preparation", content: "**Setts** are stem cuttings used for planting (sugarcane is vegetatively propagated — not grown from seed). Use **2-3 bud setts** from the top 2/3rd of a healthy, 10-12 month old cane (avoid the base — it has fewer viable buds). **Sett treatment:** Dip in Carbendazim 0.1% + Malathion 0.1% for 15 minutes to prevent sett-borne diseases and scale insects." }
        ]
    },
    {
        stage: 2, title: "Land Preparation", duration: "3 Weeks", topics: [
            { title: "Deep Tillage", content: "Sugarcane roots penetrate 45-60 cm — deep ploughing (45 cm) with chisel plough or disc plough is essential. Follow with 2-3 harrowings for fine tilth. Apply **25 tons FYM/ha** during last ploughing (sugarcane is a heavy feeder). Level the field for uniform irrigation. Soil type: **Deep, rich loamy soils** with pH 6.5-7.5 are ideal." },
            { title: "Furrow Preparation", content: "Open deep furrows (20-25 cm deep) at **90-120 cm spacing** (wider in irrigated conditions). For **Paired Row System:** Two rows 60 cm apart with 120 cm gap between pairs — allows easy intercultivation and sunlight penetration. Apply basal fertilizer in furrows before placing setts." }
        ]
    },
    {
        stage: 3, title: "Sett Planting", duration: "Planting Day", topics: [
            { title: "Planting Method", content: "Place setts **end-to-end** (flat method) or **overlapping by one bud** in the furrow. Cover with 5-7 cm soil. **Seed rate:** 35,000-40,000 three-bud setts per hectare (6-8 tons of seed cane). **Planting season:** Adsali (July-Aug, 18-month crop — highest yield), Suru/Pre-seasonal (Oct-Nov), and Late (Feb-March, 12-month crop)." },
            { title: "Treatments at Planting", content: "Apply **Carbofuran 3G @ 33 kg/ha** in furrows to control Early Shoot Borer and termites. Cover setts with soil and irrigate immediately ('soaking irrigation'). If termite-prone area, apply Chlorpyriphos 20 EC in irrigation water. **Trash mulching** (spreading dried sugarcane leaves) between rows conserves moisture and suppresses weeds." }
        ]
    },
    {
        stage: 4, title: "Germination & Establishment", duration: "30-40 Days", topics: [
            { title: "Sprouting", content: "Buds sprout in 10-15 days in warm conditions (>25°C). By 30 days, shoots are 15-20 cm tall. **Poor germination causes:** Planting too deep (>10 cm), waterlogged/cold conditions, diseased setts. Target: >70% bud germination." },
            { title: "Gap Filling", content: "Inspect at 30 DAS. Fill gaps using **pre-germinated setts** (setts kept in moist sand for 10-15 days until buds sprout, then transplanted). Gap filling after 45 DAS is futile — late-planted setts produce thin, unproductive canes. **Light irrigation** every 7-10 days during establishment." }
        ]
    },
    {
        stage: 5, title: "Tillering Phase", duration: "60-120 Days (3-4 Months)", topics: [
            { title: "Tiller Formation", content: "This is the **formative stage** — the plant produces multiple side shoots (tillers) from the base. A single primary shoot can produce 6-12 tillers. However, only 4-6 survive to form productive canes (natural thinning). Higher tiller survival = higher yield." },
            { title: "Nutrition & Intercultivation", content: "**Heaviest nutrient demand is during tillering.** Apply **275:62.5:112.5 kg NPK/ha** (TNAU recommendation for irrigated sugarcane). Split Nitrogen into 3 doses (planting, 45 DAS, 90 DAS). **Partial earthing up** at 60 DAS supports tillers. **Weeding:** 3 hand weedings or pre-emergence Atrazine @ 2 kg/ha + one inter-row cultivation at 45 DAS. Irrigate every 7-10 days." }
        ]
    },
    {
        stage: 6, title: "Grand Growth Phase", duration: "4-8 Months", topics: [
            { title: "Cane Elongation", content: "Canes grow rapidly — adding **3-5 cm per day** during peak growth. Internodes elongate and canes reach 2-4 meters height. This phase accounts for 70-80% of total cane weight. **Irrigation is critical** — moisture stress reduces cane weight and sugar content." },
            { title: "Detrashing & Propping", content: "**Detrashing:** Remove dry lower leaves every 30 days — they harbor pests (scale insects, mealy bugs) and block air circulation. Detrashed cane has higher sugar recovery and cleaner harvest. **Propping:** Tie 3-4 adjacent canes together with dried leaves or twine at 2-3 points to prevent **lodging** (falling over in wind). Lodged canes produce aerial roots and reduce sugar content by 1-2%." },
            { title: "Pest Management", content: "**Early Shoot Borer (critical at 60-90 DAS):** Larvae bore into shoot causing 'dead heart' (central shoot dries). Remove dead hearts manually and destroy. **Internode Borer:** Bore holes at internodes with frass (sawdust-like excreta). Release **Trichogramma** egg parasitoids @ 2.5 lakh/ha at 3 monthly intervals (biological control). **Top Borer:** Bunchy top with crown of side shoots — remove and destroy affected canes." }
        ]
    },
    {
        stage: 7, title: "Maturity & Ripening", duration: "10-18 Months", topics: [
            { title: "Sugar Accumulation", content: "Growth slows down and the plant redirects energy to **sucrose accumulation** in internodes. Sugar content increases from bottom to top of the cane. **Withhold irrigation 15-20 days before harvest** (water stress triggers sugar accumulation). **Chemical ripening:** Spray Ethephon @ 200 ppm 6-8 weeks before harvest to hasten maturity and increase sugar by 0.5-1.0 units (practiced in commercial farming)." },
            { title: "Maturity Test", content: "**Brix test (refractometer):** Take juice from top and bottom of cane. **Maturity ratio (Top Brix ÷ Bottom Brix) should be >0.85** — this indicates the cane is ripe for harvest. Commercially, sugar mills test CCS% (Commercial Cane Sugar). Aim for >10.5% CCS for best price." }
        ]
    },
    {
        stage: 8, title: "Harvesting & Ratoon Management", duration: "Harvest", topics: [
            { title: "Harvest Method", content: "**Cut cane at ground level** using a sharp billhook or machete — sugar concentration is highest at the base. Remove trash (leaves) and top using a single cut above the last mature internode. Do NOT uproot (roots are needed for ratoon crop). **Transport to mill within 24 hours** — sugarcane loses 0.03% sugar per hour after cutting due to inversion." },
            { title: "Ratoon Management", content: "After harvest, the **ratoon crop** (re-growth from stubble) can provide 2-3 additional harvests without replanting. **Immediately after harvest:** Clean field, level stubble at ground level, apply 25% extra Nitrogen, irrigate. Ratoon crop matures 1-2 months faster than plant crop but yields 15-20% less. Most profitable: Plant crop + 2 ratoons, then replant. **Yield potential:** Plant crop: 800-1200 qtl/ha; Ratoon: 600-900 qtl/ha." }
        ]
    }
];

// ... (previous field crops)

export const potatoSyllabus: ModuleStage[] = [
    {
        stage: 1, title: "Seed Tuber Selection", duration: "2 Weeks Before Planting", topics: [
            { title: "Variety Selection (TNAU/ICAR)", content: "**Hills/Plateau:** Kufri Jyoti (most popular in India — white skin, moderate yield), Kufri Himalini (Late Blight resistant). **Plains:** Kufri Pukhraj (early, highest yield — 350+ qtl/ha), Kufri Badshah, Kufri Chipsona-1 (for chip-making industry). **ICAR has released 75+ potato varieties** suited for diverse agro-climates across India." },
            { title: "Seed Tuber Quality", content: "Select **certified, disease-free seed tubers** weighing 40-50g each (egg-sized is ideal). Larger tubers can be **cut into pieces with at least 2-3 eyes (sprouts)** each — treat cut surfaces with Mancozeb powder to prevent rotting. Avoid tubers with brown vascular discoloration (bacterial wilt), deep eyes, or greenish skin (indicates solanine buildup)." },
            { title: "Pre-Sprouting (Chitting)", content: "**Break tuber dormancy** by exposing seed tubers to diffused light (not direct sunlight) at 15-20°C for 2-3 weeks. Short, sturdy, green/purple sprouts (1-2 cm) indicate readiness. Long, white, etiolated sprouts (grown in dark) are weak — avoid. Pre-sprouted tubers emerge 7-10 days faster in the field." }
        ]
    },
    {
        stage: 2, title: "Land Preparation", duration: "2 Weeks", topics: [
            { title: "Soil Requirements", content: "Potato requires **loose, friable, well-drained sandy loam to loam soil** with pH 5.5-6.5 (slightly acidic is ideal). Heavy clay or waterlogged soils cause misshapen tubers, rot, and scab. Plough 2-3 times to achieve deep, fine tilth (tubers need to expand freely underground). Apply **20-25 tons FYM/ha** during last ploughing." },
            { title: "Ridge & Furrow Preparation", content: "Make **ridges at 60 cm spacing** (row to row) and 20 cm height. Ridges provide loose soil for tuber expansion, facilitate earthing up, and prevent waterlogging. Apply basal fertilizer (NPK 120:80:100 kg/ha — TNAU recommendation) in the furrow before planting. Potash is critical — it builds tuber size and starch content." }
        ]
    },
    {
        stage: 3, title: "Planting", duration: "Rabi (Oct-Nov) / Kharif (Jun-Jul)", topics: [
            { title: "Planting Method", content: "Place seed tubers **5-7 cm deep** on the side of the ridge or in the furrow, **cut side down, sprout side up**. Spacing: **60×20 cm** (row × plant), giving 83,333 plants/ha. For early ('baby') potatoes: closer spacing of 60×15 cm. Cover with ridge soil immediately. **Seed rate:** 20-25 qtl/ha (roughly 2000-2500 kg of seed tubers)." },
            { title: "Seed Treatment", content: "Treat whole or cut tubers with **Mancozeb 75 WP** @ 2.5g/L for 10 minutes to control Late Blight and seed-borne diseases. For Scab-prone areas, also add Streptocycline (500 ppm). Alternatively, dust cut surfaces with wood ash (traditional practice — acts as fungicide and promotes healing). Always use **freshly treated** tubers — don't store treated tubers." }
        ]
    },
    {
        stage: 4, title: "Sprouting & Emergence", duration: "10-15 Days", topics: [
            { title: "Emergence", content: "Green shoots break through the soil in 10-15 days (faster with pre-sprouted tubers). Below ground, roots and stolons (horizontal underground stems) begin forming. Keep soil continuously moist but not waterlogged during this period. **Irrigate every 5-7 days** (sprinkler or furrow)." },
            { title: "Weed Control", content: "**Pre-emergence herbicide:** Metribuzin 70 WP @ 0.75 kg/ha — spray on moist soil within 3 DAS (before potato shoots emerge). This provides weed-free conditions for 30-35 days. Follow up with one inter-row cultivation at 25-30 DAS combined with earthing up. Avoid deep hoeing — it damages shallow stolons." }
        ]
    },
    {
        stage: 5, title: "Vegetative Growth & Earthing Up", duration: "30-45 Days", topics: [
            { title: "Earthing Up (Most Important Practice)", content: "**Earthing up = mounding soil around the base of the plant from furrows onto ridges.** Do this twice: at 25-30 DAS and 40-45 DAS. Purpose: 1) Covers developing tubers to prevent **greening** (exposure to light causes toxic solanine buildup — green potatoes are poisonous). 2) Provides loose soil for tuber expansion. 3) Controls weeds. 4) Improves drainage. This single practice can increase yield by 20-30%." },
            { title: "Top Dressing & Irrigation", content: "Apply **remaining 50% Nitrogen** as Urea during first earthing up (25-30 DAS). Foliar spray of 0.5% Zinc Sulphate + 0.2% Borax at 30-40 DAS improves tuber quality. **Irrigation:** Every 7-10 days. Irregular irrigation causes 'hollow heart' (cavity inside tuber) and 'growth cracks.' Drip irrigation saves 40% water and gives more uniform tuber size." }
        ]
    },
    {
        stage: 6, title: "Tuber Initiation", duration: "40-55 Days", topics: [
            { title: "Stolon Swelling", content: "At the tip of each stolon (underground lateral stem), cells begin dividing rapidly and **swelling into a young tuber**. Each plant produces 6-12 stolons, but typically 4-8 develop into harvestable tubers. Cool soil temperatures (15-18°C) promote tuber initiation — high temperatures (>25°C) delay or prevent it. This is why potato is primarily a Rabi (winter) crop in Indian plains." },
            { title: "Critical Water & Nutrient Period", content: "**Moisture stress during tuber initiation causes dramatic yield loss** (up to 60%). Maintain consistent soil moisture at 70-80% field capacity. Any water deficit now permanently reduces the number of tubers per plant. This is also the peak nutrient uptake period — ensure no Nitrogen or Potash deficiency." }
        ]
    },
    {
        stage: 7, title: "Tuber Bulking", duration: "55-90 Days", topics: [
            { title: "Rapid Tuber Growth", content: "Tubers grow rapidly, accumulating starch at 3-5% daily increase in weight. **This phase accounts for 75% of final tuber yield.** Maintain consistent irrigation — alternating wet-dry cycles cause **secondary growth** (knobs) and cracking. Cool night temperatures (10-15°C) favor starch accumulation. Day temperature >30°C halts enlargement." },
            { title: "Late Blight Disease (Critical Threat)", content: "**Phytophthora infestans** is the most devastating potato disease worldwide (it caused the Irish Famine). Appears as **brown/black lesions on leaves with white fungal growth on underside** during cool, wet, foggy weather. Spreads explosively — an entire field can be destroyed in 7-10 days. **Management:** 1) **Preventive sprays** of Mancozeb 75 WP @ 2.5g/L starting at 45 DAS, repeat every 7-10 days. 2) If disease appears, switch to **Cymoxanil + Mancozeb** or **Metalaxyl-M + Mancozeb** (systemic + contact). 3) Use **resistant varieties** (Kufri Himalini, Kufri Girdhari). 4) Avoid overhead irrigation during foggy weather." }
        ]
    },
    {
        stage: 8, title: "Harvest & Storage", duration: "90-120 Days", topics: [
            { title: "Dehaulming & Harvest", content: "**Dehaulm (cut the above-ground stems/haulms)** 10-15 days before harvest. Purpose: 1) Stops tuber growth, allowing **skin to harden** (necessary for handling and storage without damage). 2) Prevents Late Blight spores from washing down to tubers. After 10-15 days, dig tubers using a potato digger or manually with a spade. **Handle carefully** — bruised/cut tubers rot quickly. Avoid exposing harvested tubers to sunlight (>2 hours causes greening)." },
            { title: "Grading & Storage", content: "Grade tubers by size: **A grade (>75g):** Table/cooking. **B grade (40-75g):** Seed purpose. **C grade (<40g):** Chips/processing. **Cure** harvested tubers at 15-18°C and 85-90% humidity for 10-14 days — this heals skin wounds. **Cold storage** at 2-4°C and 90-95% humidity for up to 6-8 months. For chip-grade: store at 8-10°C (lower temperature converts starch to sugar, making dark-colored chips). **Yield potential:** 200-350 qtl/ha depending on variety and management." }
        ]
    }
];

export const onionSyllabus: ModuleStage[] = [
    {
        stage: 1, title: "Nursery Preparation", duration: "30-40 Days", topics: [
            { title: "Nursery Bed Setup", content: "Prepare **raised nursery beds** (1m wide × 15cm high × any convenient length) of fine, well-decomposed soil + compost (1:1). Treat bed soil with Trichoderma viride @ 2.5 kg/ha to prevent damping off. Make shallow lines 5 cm apart across the bed. Irrigate beds before sowing." },
            { title: "Variety Selection (TNAU/ICAR)", content: "**Red onion (Rabi/main season):** Arka Kalyan (IIHR — 130 days, high yield), Bhima Super (bold bulbs, 120 days), Agrifound Dark Red, N-53. **White onion:** Bhima Shubhra, Pusa White Flat. **Multiplier onion (small onion):** Co-4, CO(On)-5. **Bellary Red** is the most commercially important south Indian variety. Choose **Thrips-tolerant** varieties where available." },
            { title: "Sowing & Seedling Care", content: "**Seed rate:** 8-10 kg/ha (3-4 kg/acre) for transplanted onion. Treat seeds with Thiram @ 2g/kg before sowing. Sow in lines, cover lightly with fine soil and a thin layer of paddy straw mulch. Water with rose can daily. **Damping off prevention:** Drench beds with Copper Oxychloride (3g/L) if seedlings show base rotting. Seedlings are ready when **pencil-thick (6-8 mm diameter)** and 15-20 cm tall (about 6-8 weeks old)." }
        ]
    },
    {
        stage: 2, title: "Land Preparation & Transplanting", duration: "Day 0", topics: [
            { title: "Main Field Preparation", content: "Plough 2-3 times to fine tilth. Apply **25 tons FYM/ha** during last ploughing. Onion grows best in **well-drained sandy loam to loam soil** with pH 6.0-7.0. Prepare flat beds (1.2m wide) or ridges+furrows depending on irrigation system. Apply basal fertilizer: **TNAU recommends 40:40:60 kg NPK/ha** at transplanting." },
            { title: "Transplanting Method", content: "**Hardening:** Reduce nursery irrigation 3-4 days before transplanting to toughen seedlings. Uproot seedlings, **trim roots to 2 cm and leaf tips to 1/3rd** (reduces transplant shock and improves root-soil contact). **Dip roots in Carbendazim 0.1%** solution for 20 minutes. Plant at **15×10 cm spacing** (row × plant), 2-3 cm deep. Transplant in evening or on cloudy days. Irrigate immediately. **Avoid deep planting** — it delays bulb development." }
        ]
    },
    {
        stage: 3, title: "Vegetative Growth", duration: "30-50 Days After Transplanting", topics: [
            { title: "Weeding (Critical for Onion)", content: "Onion has a **very shallow, fibrous root system** with no competitive ability against weeds — yield loss can be 40-70% without weeding. **Pre-emergence:** Oxyfluorfen 23.5 EC @ 1.5ml/L at 2 DAT (Days After Transplanting). Follow with 2 hand weedings at 20 and 40 DAT. **Never use hoe/blade near plants** — shallow roots are easily damaged. Mulching with paddy straw suppresses weeds and conserves moisture." },
            { title: "Irrigation & Nutrition", content: "Irrigate every **4-5 days** in summer, 7-10 days in winter. Onion needs consistent moisture but **no waterlogging** (causes bulb rot). Apply **1st top dressing of Nitrogen** (20 kg N/ha as Urea) at 30 DAT. **Micronutrient foliar spray:** 0.5% Zinc Sulphate + 0.2% Boron at 30 and 45 DAT improves bulb size and quality." }
        ]
    },
    {
        stage: 4, title: "Bulb Initiation", duration: "50-70 Days AT", topics: [
            { title: "Bulbing Trigger", content: "Bulbing is triggered by **day length (photoperiod)** — short-day varieties (most Indian onions) begin bulbing when days are 11-12 hours. Temperature also plays a role: 15-25°C is optimal. The ratio of bulb diameter to neck diameter increases rapidly during this phase. **This is the point of no return** — management practices before this determine final yield." },
            { title: "Critical Rule: Stop Nitrogen", content: "**DO NOT apply any Nitrogen fertilizer after bulb initiation begins.** Excess Nitrogen at this stage promotes **thick-neck** (the neck remains fleshy and fails to seal), which reduces storage life dramatically. Thick-necked onions rot within 2-3 weeks of harvest. Only Potash (K) application is beneficial now — foliar spray of 1% KCl or Sulphate of Potash improves bulb firmness and storage quality." }
        ]
    },
    {
        stage: 5, title: "Bulb Enlargement", duration: "70-100 Days AT", topics: [
            { title: "Rapid Bulb Growth", content: "Bulbs expand rapidly, doubling in size every 10-14 days. This phase accounts for 60-70% of final bulb weight. **Consistent irrigation is critical** — irregular watering causes **splitting** (double/multiple bulbs) and reduces market value. However, do not overwater — excess moisture promotes Purple Blotch fungus." },
            { title: "Thrips Management (Major Pest)", content: "**Onion Thrips (Thrips tabaci)** is the single most damaging pest of onion. Tiny (1mm), yellow insects that rasp leaf surfaces causing **silvery-white streaks and patches**. Severe attack causes leaf curling, stunted growth, and up to 50% yield loss. **Management:** 1) **Blue/Yellow sticky traps** @ 12/acre for monitoring. 2) Spray NSKE 5% (Neem Seed Kernel Extract) at early infestation. 3) **Fipronil 5 SC @ 2ml/L** or Spinetoram 11.7 SC @ 0.5ml/L for heavy attack. 4) Alternate insecticides to prevent resistance. 5) Avoid broad-spectrum insecticides that kill natural predators." }
        ]
    },
    {
        stage: 6, title: "Maturity", duration: "100-130 Days AT", topics: [
            { title: "Neck Fall (Maturity Indicator)", content: "As bulbs mature, the **neck weakens and tops fall over naturally** — this is called 'neck fall' or 'top collapse.' When **50-75% of plants show neck fall**, the crop is ready for harvest. **Stop irrigation immediately** when 50% neck fall is observed — continued watering delays maturity, promotes neck rot, and reduces storage life significantly." },
            { title: "Disease Management", content: "**Purple Blotch (Alternaria):** Concentric purple lesions on leaves during humid weather. Spray Mancozeb @ 2.5g/L or Hexaconazole @ 1ml/L at 10-day intervals. **Stemphylium Blight:** Small yellow spots that enlarge to spindle-shaped lesions. Often occurs together with Purple Blotch. Both diseases reduce photosynthesis and thus bulb size. **Basal Rot (Fusarium):** Roots decay, bulbs soften from base — no chemical cure. Use resistant varieties and practice crop rotation." }
        ]
    },
    {
        stage: 7, title: "Harvesting & Curing", duration: "Harvest Day + 3-7 Days", topics: [
            { title: "Harvest Method", content: "**Pull or dig bulbs** in the morning. Lay uprooted plants in rows with **leaves covering the next row's bulbs** (prevents sunscald — exposed bulbs turn green and lose market value). **Do NOT cut leaves at harvest** — they help in curing. Avoid bruising and mechanical damage (bruised onions rot quickly in storage)." },
            { title: "Curing & Storage", content: "**Field curing:** Leave harvested onions in windrows for **3-4 days** (covered from direct sun) to dry the outer skin and neck. Then move to a **well-ventilated storage structure** (open-sided, bamboo/wire shelving, single layer depth). **Remove damaged/thick-necked/sprouted bulbs** before storage. Properly cured onions can be stored for **4-6 months** at room temperature. **Yield potential:** 200-350 qtl/ha for Rabi onion, 100-150 qtl/ha for Kharif." }
        ]
    }
];

export const tomatoSyllabus: ModuleStage[] = [
    {
        stage: 1, title: "Nursery Raising", duration: "25-30 Days", topics: [
            { title: "Variety Selection (TNAU/ICAR)", content: "**Determinate (bushy, no staking):** Arka Vikas, Pusa Ruby, PKM-1 (TNAU — most popular in South India). **Indeterminate (needs staking, higher yield):** Arka Rakshak (tri-disease resistant: ToLCV + Bacterial Wilt + Early Blight), Arka Samrat, NS 501 (private hybrid). **Cherry Tomato:** Arka Ashish, NS 585. For disease-prone areas, **Arka Rakshak is the gold standard** (IIHR development)." },
            { title: "Pro-Tray Nursery (Modern)", content: "Use **98-cell pro-trays** filled with Coco Peat + Vermiculite (3:1). Sow 1 seed per cell at 0.5 cm depth. Cover tray with newspaper and keep moist. Germination in 5-7 days. Keep in polyhouse/shade net nursery for 25 days. Pro-tray seedlings have intact root ball = zero transplant shock = 7-10 days head start. **Seed rate:** 150-200g/ha (for hybrid — seed is expensive, pro-tray saves 50% seed)." },
            { title: "Nursery Disease Prevention", content: "**Damping off** is the #1 nursery problem — seedlings collapse at the base. Prevent by: 1) Soil/media sterilization (sun solarization for 2 weeks). 2) Seed treatment with Thiram @ 2g/kg. 3) Do not overwater. 4) Drench with Copper Oxychloride 3g/L if symptoms appear. Harden seedlings by reducing irrigation 3-4 days before transplanting." }
        ]
    },
    {
        stage: 2, title: "Transplanting", duration: "Day 0", topics: [
            { title: "Main Field Setup", content: "Tomato needs **well-drained loam to clay loam soil** with pH 6.0-7.0 and good organic matter. Plough, apply **25 tons FYM/ha** + basal fertilizer (**TNAU: 75:100:50 kg NPK/ha** + 12.5 tons FYM). Form **raised beds** (90 cm wide, 15 cm high) for better drainage and root aeration. Mulching with black polyethylene mulch controls weeds and conserves moisture." },
            { title: "Transplanting Technique", content: "Transplant **25-30 day old seedlings** in the evening or on cloudy days. **Spacing:** 90×60 cm (indeterminate hybrids), 60×45 cm (determinate varieties). Plant slightly deeper than nursery depth (buries stem — tomato develops adventitious roots from buried stem for extra anchorage). Water immediately after transplanting. For indeterminate types, **install staking immediately** (bamboo stakes or trellis wire + twine)." }
        ]
    },
    {
        stage: 3, title: "Vegetative Growth & Training", duration: "15-40 Days AT", topics: [
            { title: "Pruning & Training (Indeterminate Types)", content: "**Remove side shoots (suckers)** that emerge in leaf axils regularly — retain only 2-3 main stems for 'multi-leader' system, or single stem for 'high wire' system. Pruning channels plant energy into fruit production instead of excessive vegetative growth. **Tie stems to stakes every 15-20 cm** using soft twine (figure-8 knot). Determinate varieties generally don't need pruning or staking." },
            { title: "Weeding & Mulching", content: "Keep field weed-free for the first 45 days (critical competition period). **Black polyethylene mulch** (25-30 micron) eliminates need for hand weeding, reduces soil-borne diseases (prevents soil splash), and increases yield by 20-30% (TNAU trials). Without mulch: 2 hand weedings at 20 and 40 DAT. **Drip irrigation** is ideal for tomato — saves 40% water and prevents foliar diseases (unlike sprinkler)." }
        ]
    },
    {
        stage: 4, title: "Flowering", duration: "30-50 Days AT", topics: [
            { title: "Flower Biology", content: "Small yellow flowers appear in clusters. Tomato is predominantly **self-pollinating** — flowers have both male and female parts. Light tapping of flower clusters or wind vibration aids pollination. **Bumblebees** are excellent pollinators in polyhouse conditions (buzz pollination)." },
            { title: "Flower Drop Management", content: "**50-70% flower drop is normal**, but excessive drop is caused by: 1) **High temperature (>35°C day / >25°C night)** — pollen becomes non-viable. 2) **Low humidity (<40%)** — pollen dries up. 3) **Nutrient deficiency** — especially Boron. 4) **Excess Nitrogen** — promotes vegetative growth over fruiting. **Management:** Spray **Planofix (NAA 4.5%)** @ 0.3ml/L or 2,4-D @ 2 ppm at flowering stage to reduce drop. Foliar spray of **Borax 0.2%** during flowering significantly improves fruit set." }
        ]
    },
    {
        stage: 5, title: "Fruit Setting & Development", duration: "45-70 Days AT", topics: [
            { title: "Fruit Growth", content: "Green fruits develop rapidly after pollination. Cell division occurs for 2-3 weeks, then cell enlargement takes over. Fruits reach full size in 40-50 days from flowering. Maintain consistent watering — **irregular irrigation causes Blossom End Rot** (dark brown, leathery patch on the bottom of fruit due to calcium deficiency/water stress)." },
            { title: "Pest & Disease Management", content: "**Fruit Borer (Helicoverpa):** Larvae bore into ripening fruits leaving round entry holes with frass. Spray **Chlorantraniliprole 18.5 SC** @ 0.3ml/L or install pheromone traps. **Leaf Curl Virus (ToLCV):** Transmitted by Whitefly — leaves curl upward, plants become stunted and bushy, no fruiting. **No cure** — remove infected plants. Prevention: Use resistant varieties (Arka Rakshak), control Whitefly with yellow sticky traps + Imidacloprid. **Early Blight (Alternaria):** Concentric ring lesions on older leaves — spray Mancozeb @ 2.5g/L or Azoxystrobin." }
        ]
    },
    {
        stage: 6, title: "Fruit Ripening", duration: "60-80 Days AT", topics: [
            { title: "Ripening Stages", content: "Tomato ripens in defined stages: **Green** (mature, firm) → **Breaker** (first blush of pink/red at blossom end) → **Turning** (10-30% color) → **Pink** (30-60% color) → **Light Red** (60-90%) → **Red** (>90% surface color). Ethylene gas triggers ripening — tomatoes naturally produce it, which is why ripe tomatoes accelerate ripening of nearby green ones." },
            { title: "Nutrition at Ripening", content: "**Stop Nitrogen application** after fruting begins — excess N causes excessive vegetative growth, delayed ripening, and poor fruit color. Apply **Sulphate of Potash (SOP)** @ 1% foliar spray during ripening — Potash improves fruit color (lycopene development), firmness, and TSS (sugar content). Calcium sprays (0.5% Calcium Chloride) during fruit development prevent Blossom End Rot and improve shelf life." }
        ]
    },
    {
        stage: 7, title: "Multiple Harvests", duration: "60-120+ Days AT", topics: [
            { title: "Harvest Strategy", content: "Tomato is harvested in **8-12 pickings** over 2-3 months. **For distant market/transport:** Harvest at **'Breaker' stage** (firm, just turning pink) — survives 3-5 days of handling/transport and ripens at destination. **For local market:** Harvest at **'Pink' to 'Light Red'** stage. **For processing (ketchup/sauce):** Harvest at **full 'Red'** stage (maximum lycopene and TSS). Pick every **3-5 days** to avoid over-ripening on plant." },
            { title: "Yield & Economics", content: "**Yield potential:** 400-600 qtl/ha for indeterminate hybrids (with staking + pruning), 250-350 qtl/ha for determinate varieties. Polyhouse cultivation can yield 1000-1500 qtl/ha with year-round production. **Post-harvest:** Pack in ventilated crates (avoid jute bags — causes crushing). Store at 12-15°C for 7-10 days. Use **Ethylene gas treatment** (100 ppm for 24 hours in a sealed room) to uniformly ripen green-harvested fruits within 3-5 days." }
        ]
    }
];

export const turmericSyllabus: ModuleStage[] = [
    {
        stage: 1, title: "Rhizome Selection & Seed Preparation", duration: "April-May", topics: [
            { title: "Variety Selection (TNAU/ICAR)", content: "**High curcumin varieties (>5%):** Pratibha (IISR — 7.4% curcumin, Kerala's best), IISR Alleppey Supreme, Suvarna. **High yield:** Erode Local (Tamil Nadu's commercial standard), Salem, Mysore. **Dual purpose (fresh + dried):** Rajendra Sonia, Pant Peetabh. Curcumin content determines market price — premium varieties command 20-30% higher rates." },
            { title: "Seed Rhizome Preparation", content: "Use **mother rhizomes (round, central)** or **finger rhizomes (elongated, lateral)** weighing 25-30g each as planting material. Mother rhizomes give better yield but are fewer in number. **Seed rate:** 2000-2500 kg/ha. **Treatment:** Dip rhizomes in Mancozeb 0.3% + Quinalphos 0.075% for 30 minutes to control **Rhizome Rot (Pythium)** and scale insects. Dry in shade before planting." }
        ]
    },
    {
        stage: 2, title: "Land Preparation & Bed Making", duration: "May", topics: [
            { title: "Soil & Climate", content: "Turmeric needs **well-drained sandy loam to clay loam soil** rich in organic matter, with pH 5.5-7.0. It grows best in **warm, humid tropical climate** with 1500-2000 mm rainfall. Major producing states: Telangana (Nizamabad), Tamil Nadu (Erode), Andhra Pradesh, Karnataka. It is a **shade-tolerant crop** and is often grown as an intercrop with coconut, areca nut, or mango." },
            { title: "Bed Preparation", content: "Prepare **raised beds** (1m wide × 25 cm high × convenient length) with 40-50 cm pathways. Raised beds are critical to prevent waterlogging and rhizome rot. Apply **huge quantities of organic manure:** 25-30 tons FYM/ha + 2 tons Neem Cake/ha during bed making (turmeric is one of the heaviest organic manure consumers). **Basal fertilizer:** TNAU recommends 30:30:60 kg NPK/ha at planting." }
        ]
    },
    {
        stage: 3, title: "Planting & Mulching", duration: "May-June", topics: [
            { title: "Planting Method", content: "Make small pits (5-7 cm deep) at **25×25 cm spacing** on raised beds. Place one seed rhizome per pit (bud pointing up) and cover with soil. **Yield improves significantly with closer spacing** in well-manured beds. Irrigate lightly after planting. Planting coincides with pre-monsoon showers for optimal germination." },
            { title: "Mulching (Essential Practice)", content: "**Mulch immediately after planting** with green leaves (Glyricidia, Wild Cassia, or paddy straw) @ **12-15 tons/ha**. Mulching serves multiple critical functions: 1) Conserves soil moisture. 2) Regulates soil temperature. 3) Prevents rhizome exposure and sun-scald. 4) Adds organic matter as it decomposes. 5) Suppresses weeds. **Second mulching** @ 7.5 tons/ha at 45-60 DAS after first weeding and top dressing." }
        ]
    },
    {
        stage: 4, title: "Sprouting & Early Growth", duration: "20-30 Days", topics: [
            { title: "Germination", content: "Sprouts emerge in 20-30 days, appearing as rolled, light-green pseudo-stems. Emergence is faster when pre-monsoon rains provide adequate moisture. **Target germination: >80%.** Replace failed rhizomes within 30 DAS using pre-sprouted pieces." },
            { title: "Early Pest Management", content: "**Shoot Borer (Conogesthes punctiferalis):** Larvae bore into pseudo-stem causing 'dead heart'. Spray Dimethoate 30 EC @ 2ml/L at first sign. **Rhizome Scale (Aspidiella):** Tiny scales on stored and planted rhizomes that suck sap — seed treatment prevents this. Keep field clean and weed-free during establishment." }
        ]
    },
    {
        stage: 5, title: "Vegetative Growth", duration: "3-5 Months (90-150 DAS)", topics: [
            { title: "Active Growth Phase", content: "Turmeric produces 6-10 leaves per tiller from the pseudo-stem. Each plant develops 1-3 tillers. The broad, aromatic leaves can reach 60-90 cm long. This is the **maximum nutrient uptake period.** Apply 2nd top dressing of Nitrogen (30 kg N/ha) at 60 DAS after weeding and earthing up." },
            { title: "Weeding & Intercultivation", content: "Hand weed at 30, 60, and 90 DAS. **Do not use deep hoeing** — rhizomes are shallow and easily damaged. **Earthing up** (mounding soil around the base) at 45 and 90 DAS promotes rhizome development. Apply second mulching after the first weeding. Turmeric under partial shade (coconut/areca gardens) needs less frequent weeding." }
        ]
    },
    {
        stage: 6, title: "Rhizome Development & Bulking", duration: "5-7 Months (150-210 DAS)", topics: [
            { title: "Underground Growth", content: "Rhizomes develop horizontally in the top 15-20 cm of soil. The central **mother rhizome** (round) produces **primary fingers** (first lateral branches), which in turn produce **secondary fingers**. Loose, well-aerated, organic-rich soil is critical for proper rhizome expansion — compacted soil produces thin, short fingers with lower market value." },
            { title: "Disease Management", content: "**Rhizome Rot (Pythium aphanidermatum):** The most devastating turmeric disease. Plants suddenly wilt, pseudo-stem base becomes soft and water-soaked, rhizomes turn mushy with foul smell. **Management:** 1) Use disease-free seed. 2) Raised beds with proper drainage (prevention). 3) Drench affected area with **Metalaxyl-M + Mancozeb** (3g/L). 4) Remove and destroy affected plants immediately. 5) Trichoderma viride soil application (2.5 kg/ha) at planting provides biological protection." }
        ]
    },
    {
        stage: 7, title: "Maturity & Senescence", duration: "8-9 Months (240-270 DAS)", topics: [
            { title: "Maturity Signs", content: "Leaves start **yellowing from the tips and edges**, then entire leaves dry progressively from bottom to top of the plant. When **90% of leaves are dry** and stems have collapsed, the crop is ready for harvest. Stop irrigation 15-20 days before harvest to harden rhizomes. Crop duration: 8-9 months for most varieties (7 months for early types like Suranjana)." },
            { title: "Pre-Harvest Considerations", content: "If rhizomes are needed for **seed purpose**, harvest slightly early (7-8 months) when some leaves are still green — these store better. For **dry turmeric (commercial)**, let the crop dry fully for maximum curcumin accumulation. Delay in harvest beyond full maturity doesn't improve yield but increases rhizome rot risk during the subsequent dry season." }
        ]
    },
    {
        stage: 8, title: "Harvest & Post-Harvest Processing", duration: "Jan-March", topics: [
            { title: "Harvesting", content: "**Dig rhizomes carefully** using a spade or digging fork — avoid cutting or bruising (damaged rhizomes fetch lower price). Separate mother rhizomes (save for seed) from finger rhizomes (for processing). Wash rhizomes thoroughly in running water to remove soil. **Fresh yield:** 200-300 qtl/ha. After processing, **dry turmeric yield** is about 20-25% of fresh weight (40-75 qtl/ha)." },
            { title: "Curing (Boiling) & Drying", content: "**Curing (essential step):** Boil fresh rhizomes in water for **45-60 minutes** until they become soft (a stick easily pierces through). This process gelatinizes the starch, distributes curcumin uniformly, and gives the characteristic yellow color. **Traditional:** Boil in earthen or copper vessels. **Improved:** Steam cooking for 1 hour. After boiling, **sun-dry for 10-15 days** on clean cement floor, turning daily. Well-dried turmeric has **8-10% moisture** and snaps clean when broken. Polish by tumbling in drums to remove rough outer skin." }
        ]
    }
];

export const gingerSyllabus: ModuleStage[] = [
    {
        stage: 1, title: "Rhizome Selection & Treatment", duration: "April", topics: [
            { title: "Variety Selection (TNAU/ICAR)", content: "**High oleoresin/dry ginger:** IISR Varada (IISR — high yield, moderate pungency), Himachal. **High fresh ginger yield:** IISR Mahima (bold rhizomes, 22+ tons/ha), IISR Rejatha. **High pungency/essential oil:** Maran, Nadia (highest gingerol). For **vegetable ginger market** (fresh sale), choose bold-rhizome, less fibrous varieties. For **dry ginger/powder industry**, choose high oleoresin varieties." },
            { title: "Seed Rhizome Preparation", content: "Select **plump, disease-free rhizomes** with 2-3 well-developed buds, weighing **20-25g per piece**. **Seed rate:** 1500-1800 kg/ha. **Seed treatment is critical (IISR protocol):** Dip in **Mancozeb 0.3% (3g/L) + Quinalphos 0.075% (1.5ml/L)** for 30 minutes to control Rhizome Rot (Pythium) and Rhizome Scale. Dry in shade for 3-4 days. Pre-sprouting: Store treated rhizomes in pit covered with leaves and sand for 15-20 days before planting." }
        ]
    },
    {
        stage: 2, title: "Land Preparation & Solarization", duration: "March-May", topics: [
            { title: "Soil Solarization (Game-Changer)", content: "**Soil solarization dramatically reduces Soft Rot disease** — the #1 killer of ginger. Method: After ploughing, irrigate the beds, cover tightly with **transparent polyethylene sheet (100-gauge)** for 30-40 days during hot summer (April-May). The trapped heat raises soil temperature to 50-60°C, killing Pythium, Fusarium, nematodes, and weed seeds. This single practice can eliminate 90% of soil-borne diseases (IISR data)." },
            { title: "Bed Preparation", content: "Prepare **raised beds** (1m wide × 25 cm high) with 40 cm pathways. Ginger is **extremely intolerant of waterlogging** — even 24 hours of standing water causes rhizome rot. Apply **25-30 tons FYM/ha** + 1 ton Neem Cake/ha. Ginger grows best in **well-drained, rich, friable loam** with pH 5.5-6.5 under **partial shade** (40-50% shade is optimal — commonly intercropped with coconut or areca nut)." }
        ]
    },
    {
        stage: 3, title: "Planting & Mulching", duration: "May (with pre-monsoon)", topics: [
            { title: "Planting Method", content: "Plant rhizome pieces 4-5 cm deep at **25×25 cm spacing** in shallow pits on raised beds. Place **buds facing upward**. Cover with soil and **mulch immediately** with green leaves (Glyricidia, dried grass, or paddy straw) @ 10-12 tons/ha. Irrigate if rainfall is insufficient. Planting coincides with pre-monsoon showers for best results." },
            { title: "Companion Practices", content: "**Intercropping:** Ginger under coconut/areca nut is the most profitable system in Kerala and Karnataka. The shade reduces heat stress and disease incidence. **Organic ginger** commands premium price — use only bio-inputs: Trichoderma (2.5 kg/ha), Pseudomonas fluorescens (2.5 kg/ha), and Neem Cake instead of chemical inputs." }
        ]
    },
    {
        stage: 4, title: "Sprouting & Establishment", duration: "20-25 Days", topics: [
            { title: "Emergence Care", content: "Sprouts emerge in 20-25 days as pointed, pale-green shoots. **Do not disturb the seed rhizome** during this period — rough handling breaks the fragile connection between sprout and stored food reserves. Remove weeds carefully by hand (not hoe). Maintain consistent moisture — neither too wet nor completely dry." },
            { title: "Gap Filling & Nursery Raising", content: "Check germination at 30 DAS. If gaps exceed 10%, fill with **pre-sprouted rhizomes** (kept in sand beds for 3-4 weeks). For large-scale planting, a **nursery technique** is useful: germinate rhizomes in sand beds under shade, transplant sprouted ones to the field — ensures 95%+ stand establishment and saves seed material." }
        ]
    },
    {
        stage: 5, title: "Vegetative Growth & Soft Rot Management", duration: "2-5 Months", topics: [
            { title: "Active Growth & Nutrition", content: "Ginger produces **8-12 leaves per tiller** on pseudo-stems. Active tillering occurs from 90-150 DAS. **Top dressing:** Apply Nitrogen in 2-3 split doses at 45, 90, and 120 DAS (total: 75 kg N/ha — TNAU recommendation). Apply **second mulching** @ 5 tons/ha after weeding at 45 DAS. **Earthing up** at 45 and 90 DAS covers developing rhizomes." },
            { title: "Soft Rot Disease (Pythium — Most Critical)", content: "**Symptoms:** Leaves turn **yellow from the lower ones**, pseudo-stem base becomes water-soaked and soft, **foul smell** from the collar region. Affected rhizomes turn mushy brown. Disease spreads rapidly in waterlogged and poorly drained soils during heavy monsoon. **Management:** 1) **Prevention is key** — raised beds + soil solarization + seed treatment. 2) At first symptom, **drench** affected area with **Copper Oxychloride (3g/L)** or Metalaxyl-M + Mancozeb. 3) **Remove and destroy** affected plants along with surrounding soil. 4) Do not replant ginger in the same bed for 3 years (crop rotation)." }
        ]
    },
    {
        stage: 6, title: "Rhizome Bulking", duration: "5-8 Months (150-240 DAS)", topics: [
            { title: "Rhizome Expansion", content: "Rhizomes expand horizontally, developing primary and secondary fingers. This is the **maximum growth phase** accounting for 60-70% of final rhizome weight. Apply **Potash** (50 kg K₂O/ha) at 120 DAS to improve rhizome firmness, pungency, and storage quality. Maintain regular irrigation (every 7-10 days if rains are inadequate)." },
            { title: "Leaf Spot & Other Issues", content: "**Leaf Spot (Phyllosticta):** White/grey spots with brown borders on leaves — reduces photosynthesis. Spray Mancozeb @ 2.5g/L at 15-day intervals during humid weather. **Shoot Borer:** Larvae bore into pseudo-stem causing central leaf to wilt. Spray Dimethoate 30 EC when damage is first noticed. **Nematodes (Meloidogyne):** Root-knot nematodes cause galls on roots, stunted growth. Prevent by applying Neem Cake and using Paecilomyces bioagent." }
        ]
    },
    {
        stage: 7, title: "Harvesting & Processing", duration: "8-9 Months", topics: [
            { title: "Harvest Timing", content: "**Vegetable/fresh ginger:** Harvest at **6 months** when rhizomes are tender, less fibrous, and light-colored (premium price for culinary use). **Dry ginger (Sonth):** Allow crop to **fully mature at 8-9 months** — leaves completely dry and collapse. Mature rhizomes have higher oleoresin, pungency, and dry recovery but are more fibrous. Dig carefully using a spade — avoid cutting rhizomes." },
            { title: "Post-Harvest Processing", content: "**Fresh ginger:** Wash, trim roots, grade by size, pack in perforated poly bags. Store at 12-15°C for up to 2-3 months. **Dry ginger (Sonth):** Soak fresh rhizomes in water overnight, scrape off skin with bamboo splints or peeling machine, then **sun-dry for 7-10 days** until moisture drops to 10%. Well-dried ginger is hard, breaks with a snap, and has a smooth, pale surface. **Yield:** Fresh: 150-250 qtl/ha. Dried: 25-40 qtl/ha (18-22% recovery). **Bleached ginger** (treated with lime water) is exported — commands higher international price." }
        ]
    }
];

export const chilliSyllabus: ModuleStage[] = [
    {
        stage: 1, title: "Nursery Raising", duration: "35-40 Days", topics: [
            { title: "Variety Selection (TNAU/ICAR)", content: "**For color (paprika/Byadgi type):** Byadgi Kaddi (thin-skinned, deep red, wrinkled — Karnataka's pride), KA-2 (Byadgi Dwarf). **For pungency (dried chilli):** Guntur Sannam (S4 grade — Andhra Pradesh), Teja (export quality, very hot). **Dual purpose:** Arka Lohit (IIHR — fresh green + dry red), Pusa Jwala. **High yielding hybrids:** VNR 332, HPH 5531. Each type has distinct end-use — Byadgi for color extraction (oleoresin), Guntur for heat, and fresh green varieties for vegetable market." },
            { title: "Nursery Management", content: "Prepare raised beds (1m wide × 15 cm high). Treat bed soil with Trichoderma viride (2.5 kg/ha). Sow seeds in lines 5 cm apart, cover lightly with sieved soil and paddy straw mulch. **Seed rate:** 1.0-1.5 kg/ha (hybrid — expensive), 2.0-2.5 kg/ha (open-pollinated). Irrigate with rose can daily. **Damping off prevention:** Drench beds with Copper Oxychloride (3g/L) at 10 and 20 DAS. Seedlings are ready at **35-40 days** when 10-12 cm tall with 4-6 true leaves." }
        ]
    },
    {
        stage: 2, title: "Transplanting & Establishment", duration: "Day 0 + 2 Weeks", topics: [
            { title: "Main Field & Transplanting", content: "Plough 2-3 times. Apply **25 tons FYM/ha** + basal NPK (**TNAU: 75:50:30 kg/ha** for irrigated chilli). Form raised beds or ridges at 60-75 cm spacing. Transplant **40-day old seedlings** in evening hours. Spacing: **75×45 cm** (irrigated) or **60×45 cm** (rainfed). **Dip seedling roots in Imidacloprid 0.05%** for 10 minutes before transplanting — protects from sucking pests for 15-20 days." },
            { title: "Early Care", content: "Irrigate immediately after transplanting. Provide **shade for 2-3 days** (banana leaves or shade net) if transplanting during hot weather. Mortality should be <5% — replace dead plants within 7-10 days. Apply **pre-emergence Pendimethalin** @ 1.0 kg/ha within 3 DAT for early weed control." }
        ]
    },
    {
        stage: 3, title: "Vegetative Growth & Virus Prevention", duration: "30-40 Days AT", topics: [
            { title: "Growth Phase", content: "Plants grow vigorously, developing 3-4 branches from the initial fork. Provide 2 hand weedings at 20 and 40 DAT. **Top dressing:** Apply 25 kg N/ha at 30 DAT and another 25 kg at 60 DAT. Earthing up at 40 DAT supports plant base and covers roots. Irrigate every 5-7 days — chilli needs consistent moisture but cannot tolerate waterlogging." },
            { title: "Leaf Curl Virus Complex (Major Threat)", content: "**Chilli Leaf Curl Virus (ChiLCV)** is transmitted by **Thrips and Mites** — the most devastating disease complex in Indian chilli cultivation. **Symptoms:** Leaves curl upward/downward, plants become bushy and stunted, no flowers or fruit. **No cure for infected plants.** **Prevention is the only strategy:** 1) **Thrips control:** Install Blue sticky traps (10/acre). Spray Fipronil 5 SC @ 2ml/L or Spinetoram. 2) **Mite control:** Spray Propargite 57 EC @ 2ml/L or Spiromesifen. 3) Apply **Neem oil (Azadirachtin 1%)** @ 3ml/L every 15 days as preventive. 4) Use tolerant varieties. 5) Remove and destroy infected plants immediately to prevent spread." }
        ]
    },
    {
        stage: 4, title: "Flowering & Fruit Setting", duration: "40-60 Days AT", topics: [
            { title: "Flowering Pattern", content: "Small **white flowers** appear at branch forks and leaf axils from 40-50 DAT. Chilli is predominantly **self-pollinating**. A single chilli plant can produce 200-400 flowers over its life cycle, but only 30-50% set fruit. **Flower drop** is a major issue during hot weather (>35°C), water stress, or excess nitrogen." },
            { title: "Reducing Flower Drop", content: "**Management strategies:** 1) Spray **Planofix (NAA 4.5%)** @ 0.3ml/L at flowering initiation and again at peak flowering — reduces flower drop by 15-20%. 2) Foliar spray of **Borax 0.2% + Calcium Chloride 0.5%** improves pollen viability and fruit retention. 3) Maintain consistent irrigation — even 2-3 days of water stress during flowering causes massive drop. 4) Avoid excess Nitrogen — apply Potash (SOP 1% foliar) to promote fruiting over vegetative growth." }
        ]
    },
    {
        stage: 5, title: "Fruit Development & Color Change", duration: "50-80 Days AT", topics: [
            { title: "Green to Red Transition", content: "Small green fruits develop and elongate. Fruit size depends on variety — Byadgi types produce 8-12 cm long, thin, wrinkled pods; Guntur types are 5-8 cm, smooth, thick-fleshed. Fruits take **30-40 days from flowering to full maturity**. Color change: **Green → Light green → Orange → Bright red (fully ripe)**. Capsaicin (pungency compound) increases progressively, peaking at the red ripe stage." },
            { title: "Pest & Disease Management", content: "**Fruit Borer (Helicoverpa/Spodoptera):** Larvae bore into developing fruits, feeding inside — entry holes with frass visible. Spray **Chlorantraniliprole 18.5 SC** @ 0.3ml/L or Emamectin Benzoate 5 SG @ 0.4g/L. **Powdery Mildew:** White powdery coating on leaves during dry, cool weather — spray Hexaconazole 5 EC @ 2ml/L or Wettable Sulphur. **Anthracnose/Die-Back:** Dark, sunken lesions on fruits and drying of branch tips — spray Propiconazole 25 EC @ 1ml/L. **Bacterial Wilt (Ralstonia):** Plants suddenly wilt — no cure, practice 3-year crop rotation." }
        ]
    },
    {
        stage: 6, title: "Multiple Pickings & Post-Harvest", duration: "75-150+ Days AT", topics: [
            { title: "Harvest Strategy", content: "**Green chilli (vegetable market):** Start picking at 60-75 DAT when fruits are fully developed but still green. Pick every **5-7 days**. **Red chilli (dried):** Allow fruits to turn fully red on the plant. **Partially dry on plant:** Wait until fruits start wrinkling, then harvest the entire plant or pick individual red fruits. **Number of pickings:** 8-12 pickings for green chilli over 3-4 months; 3-5 pickings for red chilli." },
            { title: "Drying & Quality", content: "Spread harvested red chillies on clean, **elevated drying yards** (black tarpaulin in sun) in single layer. Dry for **5-8 days**, turning twice daily. Well-dried chilli has **10-12% moisture** and snaps cleanly when bent. **Quality parameters:** Color (ASTA value for Byadgi types — higher = more valuable), Capsaicin content (Scoville Heat Units for pungent types), and moisture. **Yield:** Green chilli: 100-200 qtl/ha. Dry red chilli: 15-30 qtl/ha. **Storage:** In gunny bags in cool, dry, dark rooms. Fumigate with Aluminium Phosphide for long-term storage." }
        ]
    }
];


export const terraceSyllabus: ModuleStage[] = [
    {
        stage: 1, title: "Site Analysis & Planning", duration: "1 Week", topics: [
            { title: "Sunlight Mapping", content: "Most vegetables need **6-8 hours of direct sun** daily. Map your terrace throughout a day: note which areas get morning sun (east), afternoon sun (west), and full day sun (south-facing is best in Northern hemisphere). **Full sun zones:** Tomato, Chilli, Brinjal, Okra, Gourds. **Partial shade (3-4 hours):** Leafy greens (Spinach, Methi, Coriander), Mint, Curry leaf. **Deep shade:** Mushrooms, some Microgreens." },
            { title: "Load Bearing & Waterproofing", content: "A typical terrace can support **300-500 kg/m²** — more than enough for container gardening. However, **concentrate heavy pots (large drums, grow bags with wet soil) near pillars, beams, and wall edges** where structural support is strongest. Avoid placing heavy loads in the center of unsupported slabs. **Waterproofing is crucial:** Apply a bitumen or polymer waterproofing layer before starting. Use pot saucers (trays) to collect drainage and prevent water from seeping into the ceiling below." },
            { title: "Layout Design", content: "Plan your garden in **zones:** 1) **Railing zone** — hang pots for trailing plants (money plant, cherry tomato). 2) **Perimeter zone** — place large containers for fruit trees (Papaya, Guava) and tall vegetables near walls. 3) **Central zone** — arrange smaller pots on tiered stands for herbs and greens. Leave **pathways (45 cm wide)** between rows for easy access to water and harvest. Consider a **drip irrigation setup with timer** for consistent watering when you're away." }
        ]
    },
    {
        stage: 2, title: "Potting Mix & Container Selection", duration: "3-5 Days", topics: [
            { title: "The Perfect Potting Mix", content: "**Never use garden soil alone** — it's too heavy, compacts easily, and doesn't drain well in containers. **The Magic Mix (TNAU terrace garden recommendation):** 1 part Red Soil + 1 part Coco Peat (retains moisture) + 1 part Vermicompost (nutrition). Mix in **Neem Cake (50g per bag)** to repel soil pests. For acid-loving plants (Blueberry, Strawberry): add extra Peat Moss. For drainage-loving plants (Herbs, Succulents): add Perlite or Sand." },
            { title: "Container Types & Sizes", content: "**Size guide by crop:** — Leafy greens (Methi, Spinach, Coriander): **6-8 inch depth, any width** — compact, wide trays work well. — Herbs (Mint, Basil, Curry Leaf): **8-10 inch pots.** — Tomato, Chilli, Brinjal: **12 inch deep pots** (minimum 10 liters). — Gourds, Beans (climbers): **15-18 inch drums** with trellis support. — Fruit trees (Papaya, Dwarf Guava, Lemon): **18-24 inch drums** (50-100 liters). **Materials:** Grow Bags (fabric) are cheapest and best for root health — air-pruning prevents root circling. Terracotta (beautiful but heavy and breaks). Plastic pots (lightweight, inexpensive). **Critical:** Ensure every container has **drainage holes** — waterlogged roots = dead plant." },
            { title: "Recycled Containers", content: "**Upcycle these items:** Old paint buckets (drill holes), damaged tubs, used rice/flour bags (HDPE woven bags — poke holes at bottom), PVC pipe halves (for lettuce walls), discarded tyres (stack for potato towers), old cooler body. The container material matters less than size and drainage — use what you have and save money!" }
        ]
    },
    {
        stage: 3, title: "Seed Selection & Sowing", duration: "Day 0", topics: [
            { title: "Beginner-Friendly Crops", content: "Start with easy, fast-growing crops to build confidence: **10-day harvest:** Microgreens (Radish, Mustard, Fenugreek). **25-30 days:** Coriander, Spinach, Methi, Lettuce. **45-60 days:** Radish (root), Spring Onion. **75-90 days:** Tomato, Chilli, Brinjal, Okra. **Perennials (plant once):** Curry Leaf, Mint, Lemongrass, Drumstick, Aloe Vera. **Avoid as first crop:** Cauliflower, Cabbage, Watermelon — these need more space and expertise." },
            { title: "Seeds vs Saplings", content: "**Direct sowing (faster, cheaper):** Radish, Carrot, Beans, Coriander, Methi, Spinach — sow seeds directly in the final container. **Transplanting (better for fruiting crops):** Buy or raise seedlings of Tomato, Chilli, Brinjal, Capsicum in a small nursery tray, then transplant at 25-30 days to the final container. **Buying healthy saplings** from a nursery saves 3-4 weeks for beginners. **Seed source:** Buy from reliable brands (Namdhari, Rasi, Indo-American) or local agricultural offices." }
        ]
    },
    {
        stage: 4, title: "Growing & Nutrition", duration: "Ongoing (Week 1-8)", topics: [
            { title: "Watering Wisdom", content: "**Check soil moisture with your finger** — push 1 inch into the soil. If dry, water. If moist, skip. **Morning watering is best** (gives plants a full day of hydration). Avoid evening watering in winter (promotes fungal growth). **Signs of overwatering:** Yellowing leaves, soft stem base, soil always wet, fungus gnats (tiny flies). **Signs of underwatering:** Wilting, crispy leaf edges, soil pulling away from pot sides. In summer, large pots may need watering twice daily." },
            { title: "Organic Nutrition", content: "**Feed every 2 weeks** with liquid organic fertilizers: 1) **Jeevamrut:** The gold standard of organic farming — Cow dung (1 kg) + Cow urine (1 L) + Jaggery (200g) + Pulse flour (200g) + Handful of soil from under a tree → mix in 20L water → ferment 4-5 days → dilute 1:10 and drench soil. Builds soil microbiology. 2) **Panchagavya:** 5 cow-based products mixed and fermented — spray on leaves. 3) **Banana peel tea:** Soak peels in water for 48 hours — potassium-rich liquid for flowering plants. 4) **Egg shell powder:** Calcium source — prevents Blossom End Rot in tomato." }
        ]
    },
    {
        stage: 5, title: "Pest Control & Harvest", duration: "Ongoing", topics: [
            { title: "Organic Pest Control", content: "**Avoid chemical pesticides on terrace — you eat what you grow!** 1) **Neem oil spray:** 5ml Neem oil + 1ml liquid soap in 1L water — effective against aphids, whitefly, mealybug. Spray in evening (Neem degrades in sunlight). 2) **Yellow sticky traps:** Hang near plants to trap whiteflies and aphids. Buy from garden stores or DIY with yellow chart paper + castor oil. 3) **Companion planting:** Marigold repels whitefly, Basil repels mosquitoes and aphids, Lemongrass deters many pests. 4) **Manual removal:** Pick caterpillars, squash mealybugs with cotton dipped in rubbing alcohol." },
            { title: "Harvest Tips", content: "**'Cut-and-come-again' method for leafy greens:** Cut outer leaves of Spinach, Lettuce, and Coriander using scissors — leave the central growing point intact. Plants will regrow and give 3-5 harvests from a single sowing. **Tomato/Chilli:** Pick when mature — frequent picking encourages more fruiting. **Herbs (Mint, Basil):** Pinch off growing tips regularly to promote bushy growth. **Document your garden!** Take photos, note what worked, and plan next season's crops. A terrace garden is a continuous learning journey." }
        ]
    }
];

export const hydroponicsSyllabus: ModuleStage[] = [
    {
        stage: 1, title: "System Types & Setup", duration: "1 Week", topics: [
            { title: "Hydroponic Systems Compared", content: "**1) DWC (Deep Water Culture):** Roots submerged in aerated nutrient water. **Simplest system for beginners.** Use a bucket/storage box + air pump + net pot. Best for: Lettuce, Basil, Spinach. **2) NFT (Nutrient Film Technique):** Thin film of nutrient water flows over roots in slanted channels/pipes. Best for: Lettuce, Herbs (commercial farms). **3) Kratky (Passive — No pump!):** Fill container with nutrient water, place net pot on top. Roots grow into water as level drops. **Ideal for absolute beginners and small spaces.** **4) Drip System:** Nutrient solution drips onto growing media (Coco Peat, Perlite). Best for: Tomato, Cucumber, Capsicum (large fruiting crops)." },
            { title: "DIY Starter Setup (Kratky/DWC)", content: "**Materials needed (under ₹500):** 1) Opaque container (10-20L bucket or storage box — opaque prevents algae). 2) Net pots (2-3 inch, or make from plastic cups with holes). 3) Growing media: LECA (clay pebbles) or Perlite. 4) Hydroponic AB nutrient solution (₹200 for 1L concentrate — makes 500L). 5) pH testing kit or strips (₹100). 6) Air pump + air stone (₹200-300 — for DWC only, not needed for Kratky). **Cut holes in the container lid** to fit net pots snugly — roots should just touch the water surface." }
        ]
    },
    {
        stage: 2, title: "Nutrient Solution & Water Quality", duration: "Ongoing", topics: [
            { title: "Preparing Nutrient Solution", content: "Hydroponic plants get **ALL their nutrition from the water** — there's no soil to provide minerals. Use a **complete hydroponic AB nutrient** (two-part formula: Part A has Calcium + Nitrogen; Part B has Phosphorus + Potassium + Micronutrients). **Never premix A and B concentrates** — they react and form precipitates. Add Part A first to water, stir, then add Part B. Typical dose: 5ml A + 5ml B per liter of water (follow brand instructions)." },
            { title: "pH & EC Management (Critical Skills)", content: "**pH (Acidity/Alkalinity):** Plants can only absorb nutrients within a specific pH range. **Target: pH 5.5-6.5.** Below 5.0: Iron and Manganese become toxic. Above 7.0: Iron, Phosphorus become unavailable (causes yellowing). Adjust with **pH Down (Phosphoric acid)** or **pH Up (Potassium Hydroxide)**. Check pH every 2-3 days. **EC (Electrical Conductivity):** Measures total dissolved nutrient concentration. **Seedlings: EC 0.8-1.2.** **Leafy greens: EC 1.0-1.6.** **Fruiting (Tomato/Pepper): EC 2.0-3.0.** Too high EC = nutrient burn (brown leaf tips). Too low EC = nutrient deficiency (pale leaves)." }
        ]
    },
    {
        stage: 3, title: "Seed Starting & Germination", duration: "7-10 Days", topics: [
            { title: "Germination Media", content: "**Don't use soil — it clogs hydro systems.** Use inert media: 1) **Coco Coir coins/discs:** Expand in water, sow seed in center — most popular and affordable. 2) **Rockwool cubes:** Soak in pH 5.5 water for 1 hour before use — excellent water/air balance. 3) **Oasis cubes (phenolic foam):** Pre-made for seedlings — just place seed and keep moist. 4) **Sponge cubes:** DIY option — cut kitchen sponge into 2cm cubes, make a slit, insert seed. Keep media moist but not dripping." },
            { title: "Germination Process", content: "1) Sow 2-3 seeds per cell/cube (thin to strongest seedling later). 2) Keep in **dark for 2-3 days** (cover with another tray). 3) Move to **indirect light** once sprouts appear. 4) Water with **plain pH-adjusted water only** (no nutrients until first true leaves appear). 5) At 10-14 days, when roots are visible through the bottom of the cube and 2-3 true leaves are present, the seedling is ready for transplanting into the hydro system." }
        ]
    },
    {
        stage: 4, title: "Transplanting & System Operation", duration: "Day 0", topics: [
            { title: "Transplanting to System", content: "Place the rooted seedling (with its germination cube intact) into a **net pot**. Fill around it with **LECA (expanded clay pebbles)** or Perlite for support. Position the net pot in the system so that **roots just touch the nutrient solution** (for DWC/Kratky) or are within the nutrient flow (for NFT). In Kratky, as the plant drinks water, an **air gap** develops between the water surface and the net pot — this gap provides oxygen to upper roots. **Never refill to the original level** — maintain the air gap." },
            { title: "Light Requirements", content: "Plants need light for photosynthesis — 12-16 hours daily. **Natural sunlight (outdoor/balcony/terrace):** Best and free — but ensure plants get adequate light even on cloudy days. **Grow lights (indoor):** LED grow lights (full spectrum) are most energy-efficient. Place 15-30 cm above plants. **Light intensity:** Leafy greens need moderate light (6000-10000 lux); Fruiting crops need high light (15000-25000+ lux). Use a **timer** to automate light cycles." }
        ]
    },
    {
        stage: 5, title: "Maintenance, Troubleshooting & Harvest", duration: "30-60 Days", topics: [
            { title: "Daily/Weekly Maintenance", content: "**Daily:** Check water level and top up if needed (with plain pH-adjusted water between full nutrient changes). Check for pest/disease signs (look under leaves). **Weekly:** Measure pH and EC — adjust as needed. Check air pump operation (DWC). Prune yellow/dead leaves. **Bi-weekly (every 2 weeks):** **Complete nutrient change** — drain old solution completely, clean reservoir, refill with fresh nutrient solution. Old solution accumulates salt imbalances and pathogen buildup." },
            { title: "Common Problems & Solutions", content: "**Algae (green slime):** Caused by light reaching nutrient solution — ensure container is **opaque** and cover all openings. **Root rot (brown, slimy roots):** Caused by low dissolved oxygen — ensure air pump is working (DWC), maintain air gap (Kratky), and keep solution below 25°C. Add Hydrogen Peroxide (3%) @ 3ml/L as emergency treatment. **Nutrient burn (brown crispy leaf tips):** EC too high — dilute solution with plain water. **Yellowing older leaves:** Usually Nitrogen or Iron deficiency — check pH first (may be lockout), then increase nutrient concentration." },
            { title: "Harvest & Productivity", content: "**Lettuce/Leafy greens (Kratky/DWC):** Ready in 30-40 days from transplant. Harvest outer leaves or entire plant. Succession sow every 2 weeks for continuous supply. **Herbs (Basil, Mint):** Pinch tips regularly — promotes bushy growth and extends harvest to 3-4 months. **Hydroponic yield advantage:** Plants grow **30-50% faster** than soil because roots have direct, unrestricted access to nutrients and oxygen. Water usage is **90% less** than conventional soil farming. With practice, a small 10-plant system can supply a family's daily greens." }
        ]
    }
];

export const microgreensSyllabus: ModuleStage[] = [
    {
        stage: 1, title: "Preparation & Sowing", duration: "Day 1", topics: [
            { title: "Seed Selection & Soaking", content: "**Best microgreen varieties for beginners:** 1) **Radish:** Fastest (5-7 days), spicy, vibrant green+purple. 2) **Sunflower (Black oil seed):** Crunchy, nutty flavor — the king of microgreens. 3) **Pea (Green Pea/Snow Pea):** Sweet, thick shoots — most versatile. 4) **Mustard/Fenugreek (Methi):** Aromatic, grow in any season. 5) **Wheatgrass:** For juicing. **Soaking:** Large seeds (Sunflower, Peas, Beans) **must soak in water for 8-12 hours** to activate germination. Small seeds (Mustard, Basil, Fenugreek, Broccoli) do NOT need soaking — they become slimy. **Seed source:** Use organic, untreated seeds. Buy microgreen-specific seeds from online suppliers (usually cheaper in bulk)." },
            { title: "Tray Setup & Sowing", content: "**Materials:** Shallow trays (10×20 inch nursery trays work best, 2-3 inch deep), growing medium (Coco Peat is ideal — sterile, pH neutral, retains moisture), spray bottle. **Method:** 1) Fill tray with 1-1.5 inches of moist Coco Peat (squeeze out excess water — medium should feel like a wrung-out sponge). 2) Level the surface and press down gently. 3) **Spread pre-soaked seeds densely** in a single layer, almost touching (microgreens are meant to be grown thick). 4) Press seeds gently into the surface. 5) Mist with water using spray bottle. **Density:** Use roughly **30g of small seeds or 100g of large seeds per 10×20 tray**." }
        ]
    },
    {
        stage: 2, title: "Blackout Period (Root Development)", duration: "Days 2-4", topics: [
            { title: "Darkness & Weight", content: "**Cover the sown tray with another inverted tray** (same size — this blocks all light). Place a **weight on top** (1-2 kg — a book, brick, or water-filled jar). This serves two purposes: 1) **Darkness forces the seedlings to push hard** — developing strong, thick stems instead of weak, leggy ones. 2) **Weight provides resistance** — roots push down firmly into the medium for strong anchorage. Keep covered for **2-4 days** depending on the crop (Radish: 2 days, Sunflower: 3-4 days, Pea: 3 days)." },
            { title: "Moisture Management", content: "**Lift the cover tray once daily** to check moisture. The Coco Peat should remain evenly moist — not soggy, not dry. If dry, mist lightly with spray bottle and re-cover. If too wet (puddles forming), reduce watering — excess moisture causes **mold (fuzzy white growth at base)**, which is the #1 problem in microgreen growing. **Mold vs roots:** Tiny white fuzz directly on the stem base is often **root hairs** (harmless), not mold. True mold is cobweb-like and appears on the media surface and smells musty." }
        ]
    },
    {
        stage: 3, title: "Greening Phase (Photosynthesis)", duration: "Days 5-7", topics: [
            { title: "Light Exposure", content: "**Remove the cover tray on Day 3-5** (when shoots are 2-3 cm tall and pushing up against the weight). Move the tray to **bright indirect sunlight** (east-facing window is perfect) or under LED grow lights (12-16 hours/day). Seedlings will be pale yellow/white from the blackout — within **24-48 hours of light exposure, they turn vibrant green** (chlorophyll production). This color change is visible and satisfying! Rotate the tray 180° daily so seedlings grow straight." },
            { title: "Bottom Watering", content: "**Switch to bottom watering** — pour water into a solid tray underneath and let the growing tray sit in it for 5-10 minutes. The Coco Peat wicks up moisture from below. Remove excess water after soaking. **Never water from top during greening phase** — wet leaves invite mold and damping off. Water once daily (morning). If growing without a bottom tray, use a spray bottle to mist the media surface only, avoiding the leaves." }
        ]
    },
    {
        stage: 4, title: "Harvest & Consumption", duration: "Day 7-14", topics: [
            { title: "When & How to Harvest", content: "Microgreens are ready when **first true leaves** (the second set of leaves, different shaped from the initial cotyledons) begin to appear. Typical harvest time: **Radish: 5-7 days. Mustard/Fenugreek: 7-8 days. Sunflower: 8-10 days. Pea: 8-12 days. Wheatgrass: 7-9 days.** **Harvest method:** Use sharp scissors or a clean knife. Cut just above the soil/media line in one clean sweep. Harvest the entire tray at once for uniform size. **Do not pull** — cutting prevents media from mixing with greens." },
            { title: "Nutritional Value & Storage", content: "Microgreens contain **4-40x more nutrients** than their mature counterparts (Johns Hopkins research). Broccoli microgreens have 10-100x more sulforaphane (anti-cancer compound) than mature broccoli. **Eat fresh immediately** for maximum nutrition and flavor. **Storage:** Wrap loosely in paper towel, place in a container, and refrigerate — lasts 3-5 days. Do not wash before storing (moisture promotes decay) — wash just before eating. **The tray cannot regrow** — discard spent Coco Peat into compost, clean tray, and start a new batch. With practice, start **2 trays per week** on a staggered schedule for continuous supply." }
        ]
    }
];

export const mushroomSyllabus: ModuleStage[] = [
    {
        stage: 1, title: "Substrate Preparation & Pasteurization", duration: "1 Day", topics: [
            { title: "Substrate Selection", content: "**Oyster Mushroom (Pleurotus)** is the best species for beginners — grows on many cheap substrates, tolerates warm climates (20-30°C), and needs minimal infrastructure. **Substrate options:** 1) **Paddy/Wheat Straw:** Most common in India — cheap, widely available. 2) **Sawdust (hardwood):** Good for Shiitake. 3) **Cotton waste/Sugarcane Bagasse:** Excellent nutrient content. 4) **Banana Pseudostem:** Available free in South India. **Avoid:** Treated/painted wood, pine sawdust (toxic to mushrooms), old/moldy straw." },
            { title: "Pasteurization Process", content: "**Purpose:** Kill competing bacteria, mold, and insects in the substrate without sterilizing it completely (some beneficial bacteria help defend against contaminants). **Hot Water Method (simplest):** 1) Chop straw into 2-3 inch pieces. 2) Soak in hot water (70-80°C) for **60-90 minutes** — maintain temperature throughout. 3) Drain in a clean, sterile basket until no dripping (squeeze a handful — only 1-2 drops should fall = ~65% moisture). 4) Spread on clean surface to cool to room temperature (~25°C). **Alternative:** Chemical treatment with Formalin (2%) + Bavistin (7.5g/100L) — soak straw for 18 hours, drain, and use. Chemical method is less labor-intensive for large-scale growers." }
        ]
    },
    {
        stage: 2, title: "Spawning (Inoculation)", duration: "Day 0", topics: [
            { title: "Spawn Selection & Quality", content: "**Spawn = mushroom 'seed'** — it's grain (sorghum/wheat) fully colonized by mushroom mycelium. **Buy fresh spawn** from certified labs — check that grains are fully covered by white mycelium with no green/black/yellow contamination spots. **Spawn rate:** 5-8% of wet substrate weight (e.g., 50-80g spawn per 1 kg substrate). Use spawn within 2-3 weeks of purchase — old spawn loses vigor. Store at 4-8°C (refrigerator) if not using immediately. **Source:** State Agricultural Universities, ICAR-DMR (Directorate of Mushroom Research), or certified private labs." },
            { title: "Bag Filling (Layering Method)", content: "Use **polypropylene (PP) bags** (60×30 cm, 100-gauge thickness). **Layering technique:** 1) Place a 4-5 inch layer of cooled, pasteurized substrate in the bag. 2) Sprinkle spawn along the edges (outer 2 inches) — NOT in the center (mushrooms fruit from sides/top). 3) Add another substrate layer. 4) Repeat for 3-4 layers. 5) Tie the bag top with a rubber band or string. 6) Poke **10-12 small holes** (pen-tip sized) evenly around the bag for gas exchange. **Each bag should weigh 2-3 kg.** Clean hands and workspace with sanitizer — contamination at this stage ruins the crop." }
        ]
    },
    {
        stage: 3, title: "Incubation (Mycelium Colonization)", duration: "15-25 Days", topics: [
            { title: "Conditions for Mycelium Growth", content: "Place bags in a **dark, warm room (24-28°C)** with minimal air movement. Stack on shelves or hang from ceiling rods (not directly on floor — exposes to floor contaminants). **Mycelium (white thread-like network) will spread through the substrate** over 15-25 days. The bag should turn completely white — this indicates full colonization. Check bags every 3-4 days for signs of contamination." },
            { title: "Contamination Detection", content: "**Green mold (Trichoderma):** Most common contaminant — appears as green patches on the substrate. Cause: insufficient pasteurization, dirty hands/workspace, old spawn. **Action:** Remove the entire bag immediately — do NOT open it indoors (spores spread). **Black mold (Aspergillus):** Black/dark green spots — usually from substrate that was too wet. **Bacterial blotch:** Slimy, foul-smelling patches — caused by excess moisture and poor ventilation. **Prevention > Cure:** Proper pasteurization temperature (70-80°C for 60 min), fresh spawn, clean workspace, and correct substrate moisture (65%) prevent 90% of contamination issues." }
        ]
    },
    {
        stage: 4, title: "Fruiting (Mushroom Development)", duration: "7-15 Days", topics: [
            { title: "Initiating Fruiting", content: "Once bags are **fully white** (completely colonized), initiate fruiting by: 1) **Making 3-4 large slits** (3-4 cm, X-shaped) on the bag with a clean blade — mushrooms emerge from these slits. 2) Move bags to a **well-ventilated area with indirect light** (NOT direct sunlight). 3) Maintain **temperature 20-28°C** and **humidity 80-90%**. 4) Spray water on bag surface and surrounding walls **3-4 times daily** (mushrooms are 90% water — they need humid air). A simple **humidifier or misting fan** helps in dry climates. Pin-heads (tiny mushroom bumps) appear within 3-5 days of slitting." },
            { title: "Growing Conditions", content: "**Light:** Mushrooms need some light to develop proper cap shape and color (indirect natural light or fluorescent/LED lights for 8-12 hours). Complete darkness produces long stems with tiny caps (undesirable). **Ventilation:** Fresh air exchange is CRITICAL — mushrooms release CO₂ during growth. High CO₂ causes long, thin stems with small caps. Open windows or use a fan with timer (15 min every 2 hours). Balance: high humidity but with air circulation (this is the trickiest part of mushroom cultivation). **Temperature:** Oyster mushroom: 20-28°C. Button mushroom: 14-18°C (needs AC in Indian climate — not recommended for beginners)." }
        ]
    },
    {
        stage: 5, title: "Harvesting & Multiple Flushes", duration: "3-4 Flushes Over 30-45 Days", topics: [
            { title: "Harvest Technique", content: "Harvest when **cap edges are still slightly curled inward** (not fully flat or turned upward). At this stage, mushrooms have the best texture, flavor, and longest shelf life. **Twist and pull** the cluster gently at the base — do not cut (the remaining stub can rot and attract contaminants). Harvest the **entire cluster at once** even if some are smaller — partial harvest damages the mycelium. **Timing:** Morning harvest is best — mushrooms lose moisture rapidly during the day." },
            { title: "Multiple Flushes & Yield", content: "After the first harvest (Flush 1), **soak the bag in clean water for 2-4 hours** to rehydrate the substrate, then drain. Resume misting. **Flush 2** appears in 7-10 days, **Flush 3** in another 7-10 days. Each successive flush produces fewer and smaller mushrooms. Most bags give **3-4 productive flushes** before exhaustion. Total **yield per 2 kg bag: 600-800g fresh mushrooms** (30-40% biological efficiency for Oyster on straw). After all flushes, the spent substrate is excellent **compost/vermicompost feedstock** — rich in nutrients and already broken down by fungal enzymes." },
            { title: "Storage & Sales", content: "**Fresh mushrooms are highly perishable** — shelf life is only 1-2 days at room temperature. **Refrigerate (4°C) in paper bags** (not plastic — mushrooms need to breathe) for 5-7 days. For longer storage: **Air drying** (slice and sun-dry for 6-8 hours) or **Dehydrator** (50°C for 4-6 hours) — dried mushrooms last 6+ months. **Market potential:** Oyster mushrooms sell at ₹200-400/kg in urban markets — a small setup (100 bags) can generate ₹15,000-25,000/month with very low input cost." }
        ]
    }
];

export const verticalTowerSyllabus: ModuleStage[] = [
    {
        stage: 1, title: "Tower Design & Materials", duration: "1 Week", topics: [
            { title: "Structure Planning", content: "Choose between PVC pipe towers (4-6 inch diameter, 4-5 ft tall) or commercial tower garden kits. Mark planting holes every 6-8 inches at 45° angles alternating sides for maximum light exposure." },
            { title: "Components", content: "**Required:** PVC tower pipes, net cups (2 inch), submersible pump (1000 L/hr), reservoir tank (20-50L), timer, nutrient solution (AB formula). Optional: pH/EC meter, grow lights for indoor setups." }
        ]
    },
    {
        stage: 2, title: "Assembly & Setup", duration: "2-3 Days", topics: [
            { title: "Tower Assembly", content: "Stack tower sections, seal joints with PVC cement. Install drip ring at top connected to pump via tubing. Place reservoir at base. Test water flow — it should cascade evenly through all planting holes (TNAU vertical farming guide)." },
            { title: "Location", content: "Place on a load-bearing surface (balcony near pillar, terrace). Needs 4-6 hours direct sunlight. Protect from strong winds that can topple the tower." }
        ]
    },
    {
        stage: 3, title: "Planting & Nutrient Setup", duration: "Day 0", topics: [
            { title: "Crop Selection", content: "**Top tiers (most light):** Lettuce, Basil, Spinach, Mint. **Middle tiers:** Strawberries, Bok Choy, Coriander. **Bottom tiers:** Compact peppers, Cherry tomato (with support). Avoid heavy root crops." },
            { title: "Nutrient Solution", content: "Mix Hydroponic AB nutrients at EC 1.2-1.8. pH 5.8-6.5. Change solution every 2 weeks. Top up water daily in hot weather." }
        ]
    },
    {
        stage: 4, title: "Growth Management", duration: "2-6 Weeks", topics: [
            { title: "Pump Schedule", content: "Timer: 15 mins ON, 45 mins OFF during day. OFF at night. Ensure all holes receive water — unclog any blockages immediately." },
            { title: "Monitoring", content: "Check pH/EC twice weekly. Watch for algae growth (cover reservoir to block light). Prune overgrown plants to prevent shading lower tiers. Rotate tower 90° weekly for even light distribution." }
        ]
    },
    {
        stage: 5, title: "Harvesting & Rotation", duration: "Ongoing", topics: [
            { title: "Harvest", content: "Harvest outer leaves of leafy greens (cut-and-come-again). Replace fully harvested plants with new seedlings immediately to maintain continuous production." },
            { title: "Seasonal Rotation", content: "Summer: Heat-tolerant herbs (Basil, Mint). Winter: Lettuce, Spinach, Kale. A single tower can produce 20-30 kg of greens per month — 5-8x more productive per sq ft than ground farming (TNAU research)." }
        ]
    }
];

export const containerFruitSyllabus: ModuleStage[] = [
    {
        stage: 1, title: "Fruit Tree Selection", duration: "Week 1", topics: [
            { title: "Dwarf Varieties (TNAU Recommended)", content: "**Mango:** Amrapali (self-fertile, fruits in 2-3 years), Mallika. **Guava:** Allahabad Safeda, Arka Mridula. **Lemon:** Kagzi Lime (year-round fruiting). **Pomegranate:** Bhagwa (ruby red arils). **Papaya:** Dwarf varieties like Pusa Nanha." },
            { title: "Grafted vs Seedling", content: "Always buy **grafted plants** from certified nurseries. Grafted trees fruit 2-3 years earlier than seedlings and maintain parent variety quality. Look for a visible graft union (swelling) near the base." }
        ]
    },
    {
        stage: 2, title: "Container & Soil Preparation", duration: "Day 0", topics: [
            { title: "Pot Size & Material", content: "Start with 14-16 inch pot, repot to 20-24 inch after 1 year. Use cement pots or heavy plastic grow bags (stability for tall plants). Ensure 3-4 drainage holes at the bottom." },
            { title: "Soil Mix", content: "**Heavy Mix (for stability):** 2 parts Garden Soil + 1 part Compost + 1 part Sand + handful of Neem Cake. Add 50g Bone Meal for phosphorus (root & fruit development). Place broken pot pieces over drainage holes." }
        ]
    },
    {
        stage: 3, title: "Planting & Establishment", duration: "2-4 Weeks", topics: [
            { title: "Transplanting", content: "Water the nursery plant thoroughly before transplanting. Place at the same depth as in the nursery bag — never bury the graft union. Water deeply after planting. Keep in partial shade for 1 week, then move to full sun." },
            { title: "Staking", content: "Stake young plants with bamboo to prevent wind damage. Tie loosely with jute rope in figure-8 pattern." }
        ]
    },
    {
        stage: 4, title: "Care & Pollination", duration: "Ongoing", topics: [
            { title: "Feeding Schedule (ICAR Guidelines)", content: "Apply organic fertilizer (Vermicompost + Bone Meal) every 2 months during growing season (March-October). Spray micronutrient mix (Zinc, Boron) during flowering. Reduce feeding in winter." },
            { title: "Pollination", content: "**Urban areas often lack pollinators.** Hand pollinate by gently brushing a soft paintbrush from flower to flower (especially for Pomegranate, Guava). Morning hours (7-10 AM) are best for pollination." }
        ]
    },
    {
        stage: 5, title: "Pruning & Harvest", duration: "Seasonal", topics: [
            { title: "Pruning (Annual)", content: "Prune after harvest season to maintain compact shape. Remove crossing branches, dead wood, and water suckers. Tip pruning encourages branching and more fruiting points." },
            { title: "Harvest", content: "**Mango:** Pick when shoulder rises above stem end. **Guava:** Harvest when skin turns light green/yellow and fruit gives slightly on pressing. **Lemon:** Pick when fully yellow. Expect 15-50 fruits per container tree per season depending on variety." }
        ]
    }
];

export const aquaponicsSyllabus: ModuleStage[] = [
    {
        stage: 1, title: "Understanding the Nitrogen Cycle", duration: "Week 1", topics: [
            { title: "The Living Cycle", content: "Fish excrete Ammonia (NH₃) → Nitrosomonas bacteria convert it to Nitrite (NO₂) → Nitrobacter bacteria convert it to Nitrate (NO₃) → Plants absorb Nitrates as fertilizer → Clean water returns to fish tank. This cycle takes 4-6 weeks to establish ('cycling')." },
            { title: "System Types (TNAU)", content: "**Media Bed:** Gravel/clay pebble filled beds (best for beginners). **NFT:** Nutrient film channels (commercial scale). **DWC/Raft:** Floating polystyrene rafts (best for leafy greens). Media bed is recommended for home setups." }
        ]
    },
    {
        stage: 2, title: "System Design & Setup", duration: "1-2 Weeks", topics: [
            { title: "Components", content: "**Fish tank:** 200-500L (IBC tank or drums). **Grow bed:** Shallow trays (30cm deep) filled with clay pebbles (LECA). **Pump:** Submersible pump to move water from fish tank to grow bed. **Bell Siphon:** Auto-drains grow bed back to fish tank (flood-and-drain cycles)." },
            { title: "Location", content: "Outdoor with partial shade (protect fish from direct afternoon sun). Needs electricity for pump (consider solar backup). Structural support for the weight of water (1L = 1kg)." }
        ]
    },
    {
        stage: 3, title: "Cycling & Stocking", duration: "4-6 Weeks", topics: [
            { title: "Fishless Cycling", content: "Add liquid Ammonia to the system to establish beneficial bacteria colonies before adding fish. Monitor: Ammonia spike → Nitrite spike → Nitrate rises → System is cycled when Ammonia & Nitrite are near zero." },
            { title: "Fish & Plant Selection (ICAR)", content: "**Hardy fish:** Tilapia (tropical, fast-growing), Koi/Goldfish (ornamental, cold-tolerant), Catfish (Magur). **Best plants:** Lettuce, Basil, Mint, Spinach, Bok Choy, Tomatoes (once system matures). Stock ratio: ~20 fish per 1000L of water." }
        ]
    },
    {
        stage: 4, title: "Daily Management", duration: "Ongoing", topics: [
            { title: "Feeding Fish", content: "Feed 2-3 times daily. Only what they consume in 5 minutes — uneaten food rots and spikes Ammonia. Use commercial fish feed pellets (30-40% protein for Tilapia)." },
            { title: "Water Quality Testing", content: "**Test weekly:** pH (6.8-7.2 is ideal compromise for fish and plants), Ammonia (<0.5 ppm), Nitrite (<1 ppm), Nitrate (20-80 ppm is good). Top up evaporated water with dechlorinated water only." }
        ]
    },
    {
        stage: 5, title: "Harvesting & Troubleshooting", duration: "Ongoing", topics: [
            { title: "Harvest", content: "Harvest leafy greens at full size (30-45 days). Replace immediately with new seedlings. Fish can be harvested at 6-9 months (Tilapia reaches 250-500g). A balanced system can produce 20-30 kg greens + 10-15 kg fish per year from a 500L setup." },
            { title: "Common Issues", content: "**Cloudy water:** Overfeeding — reduce feed. **Yellowing plants:** Low iron — add chelated iron. **Fish gasping:** Low oxygen — add air stone/increase aeration. **Algae bloom:** Too much light on water — cover fish tank sides." }
        ]
    }
];

export const rooftopBeesSyllabus: ModuleStage[] = [
    {
        stage: 1, title: "Preparation & Legalities", duration: "2-4 Weeks", topics: [
            { title: "Local Regulations", content: "Check municipal rules for urban beekeeping (some cities require registration with the Agricultural department). Inform neighbors — most objections arise from fear, not actual risk. Keep hive entrances facing away from walkways." },
            { title: "Species Selection (ICAR)", content: "**Apis cerana indica (Indian Honeybee):** Gentle, adapted to Indian climate, needs smaller hive. **Apis mellifera (Italian Bee):** Higher honey yield (15-25 kg/year vs 5-8 kg), but needs more management. Beginners should start with A. cerana in a Langstroth or ISI bee box." }
        ]
    },
    {
        stage: 2, title: "Hive Setup & Colony Installation", duration: "Week 1", topics: [
            { title: "Hive Placement", content: "Place on a sturdy stand (18 inches high) on the terrace. Face entrance East/Southeast to catch morning sun. Provide shade from afternoon heat using a thatched cover. Keep a shallow water tray with pebbles (landing pads) nearby for bee drinking water." },
            { title: "Colony Installation", content: "Purchase a 'Nucleus colony' (5-frame nuc with queen, brood, honey, and workers) from a certified apiary. Transfer frames gently into your hive box at dusk (bees are calmer). Wear protective suit, gloves, and use a smoker. Close entrance partially for 2-3 days until bees orient to new location." }
        ]
    },
    {
        stage: 3, title: "Regular Inspection", duration: "Weekly (10-15 min)", topics: [
            { title: "What to Check", content: "**Queen presence:** Look for eggs (tiny grains of rice in cells) — eggs mean queen is alive and laying. **Brood pattern:** Compact, solid brood (healthy). Patchy or missing brood indicates problems. **Honey & Pollen stores:** Colored pollen cells and capped honey cells (white wax caps)." },
            { title: "Protective Practices", content: "Inspect during warm, sunny mid-day (most foragers are out). Use cool smoke from one side (calms bees). Never crush bees when replacing frames — crushed bees release alarm pheromone that triggers stinging. Work from the sides, not directly over the hive." }
        ]
    },
    {
        stage: 4, title: "Seasonal Management", duration: "Year-Round", topics: [
            { title: "Monsoon Care", content: "Protect hives from rain using sloped covers. Reduce entrance to prevent robber bees. Check for pests: Wax Moth larvae (destroy combs) and Varroa mites. Feed sugar syrup (1:1 sugar:water) if honey stores are low during extended rain." },
            { title: "Flowering Calendar", content: "Plant bee-friendly flowers nearby: Sunflower, Mustard, Coriander, Moringa, Tulsi, Marigold. Different flowers bloom in different seasons — ensure year-round forage within 2 km radius. Urban gardens, parks, and roadside trees provide surprisingly good forage." }
        ]
    },
    {
        stage: 5, title: "Honey Harvest & Products", duration: "After 3-6 Months", topics: [
            { title: "When to Harvest", content: "Harvest only when bees have surplus (at least 2 full supers of capped honey). Never harvest all honey — leave minimum 5 kg for the colony's needs. Best time: After major flowering season (post-monsoon in most Indian regions)." },
            { title: "Extraction", content: "Remove frames with 80%+ capped cells. Uncap with hot knife. Spin in honey extractor (centrifugal force). Filter through muslin cloth. Store in glass jars. Expected yield: 5-8 kg/hive (A. cerana) or 15-25 kg/hive (A. mellifera) per year. **Bonus products:** Beeswax candles, propolis tincture, royal jelly." }
        ]
    }
];

export const aeroponicsSyllabus: ModuleStage[] = [
    {
        stage: 1, title: "Understanding Aeroponics", duration: "1 Week", topics: [
            { title: "How It Works (TNAU)", content: "Plant roots hang suspended in air inside a dark, enclosed chamber. A timer-controlled misting system sprays fine nutrient solution onto roots at intervals (5 seconds ON, 3-5 minutes OFF). Roots absorb maximum oxygen from air between misting cycles, producing 30-50% faster growth than hydroponics and 3x faster than soil." },
            { title: "System Types", content: "**Low-Pressure Aeroponics (LPA):** Uses standard pumps and misters — cheaper, good for beginners. **High-Pressure Aeroponics (HPA):** Uses 80+ PSI pumps to create ultra-fine mist (50 micron droplets) — professional grade, best results but expensive. Start with LPA." }
        ]
    },
    {
        stage: 2, title: "Building the Chamber", duration: "3-5 Days", topics: [
            { title: "Chamber Construction", content: "Use opaque PVC pipes (4-6 inch), storage bins, or custom boxes. **Light must NOT enter** — it causes algae on roots. Drill holes on top for net cups (2 inch diameter, 6-8 inch spacing). Seal all joints to prevent leaks." },
            { title: "Misting System", content: "**Components:** Submersible pump (or pressure pump for HPA) → distribution tubing → 360° misting nozzles inside chamber → timer relay. Install 1 mister per 12-18 inches of chamber. Use a cycle timer: 5 sec spray every 3-5 minutes." }
        ]
    },
    {
        stage: 3, title: "Planting & Nutrient Management", duration: "Day 0", topics: [
            { title: "Germination", content: "Germinate seeds in moistened Oasis cubes, Rockwool, or Coco plugs. Once roots emerge (5-10 days), transplant into net cups with neoprene collars to hold the stem. Roots dangle freely inside the dark chamber." },
            { title: "Nutrient Solution", content: "Use complete hydroponic nutrients (AB formula). **EC:** 1.0-1.5 for seedlings, 1.5-2.2 for mature plants. **pH:** 5.5-6.5. Change reservoir every 7-10 days. Aeroponics uses 60% less fertilizer than field farming due to direct root absorption." }
        ]
    },
    {
        stage: 4, title: "Growth & Monitoring", duration: "3-6 Weeks", topics: [
            { title: "Daily Checks", content: "**Critical:** Check misters daily — a single clogged nozzle can kill roots within hours (no soil moisture buffer!). Monitor pH and EC. Watch root color: healthy roots are white and fluffy. Brown/slimy roots indicate root rot (add Hydrogen Peroxide 3% at 3ml/L)." },
            { title: "Best Crops (TNAU Research)", content: "**Excellent:** Lettuce, Basil, Spinach, Coriander, Mint, Strawberry. **Good:** Tomato, Pepper, Cucumber (need larger chambers). **Avoid:** Root crops (carrot, potato), heavy crops (melon). Leafy greens mature in 25-35 days — significantly faster than soil or hydroponics." }
        ]
    },
    {
        stage: 5, title: "Harvesting & Optimization", duration: "Ongoing", topics: [
            { title: "Harvest", content: "Harvest entire plant or use cut-and-come-again for leafy greens. Net cups can be immediately replanted for continuous production. One aeroponic tower can produce 10-15 kg of greens per month." },
            { title: "Troubleshooting", content: "**Wilting plants:** First check misters — blockage is the #1 cause. **Slow growth:** Check EC (too low = starving) and pH. **Root rot:** Increase air circulation, reduce water temperature below 22°C, add beneficial bacteria (Trichoderma). **Power outage plan:** Keep a battery backup or manual spray bottle — roots die in 30-60 minutes without moisture." }
        ]
    }
];

export const verticalGardenSyllabus: ModuleStage[] = [
    {
        stage: 1, title: "Planning Your Vertical Garden", duration: "1 Week", topics: [
            { title: "Wall Assessment", content: "Choose a wall that receives 4-6 hours of sunlight (South or East-facing in India). Assess structural strength — a full vertical garden can weigh 30-70 kg/sq meter. Install waterproof membrane (thick plastic sheet) behind the garden to protect the wall from moisture damage." },
            { title: "System Types (TNAU)", content: "**Pocket planters:** Felt/fabric pockets attached to a frame — cheapest, DIY-friendly. **Trellis/Frame gardens:** Wire mesh or bamboo frame with hanging pots — great for climbers. **Modular panels:** Stackable plastic modules with built-in irrigation — professional look. **Pallet gardens:** Recycled wooden pallets filled with soil — rustic urban style." }
        ]
    },
    {
        stage: 2, title: "Frame & Irrigation Setup", duration: "2-3 Days", topics: [
            { title: "Frame Construction", content: "Build or buy a sturdy frame (treated wood, metal, or PVC). Attach to wall using heavy-duty brackets (not adhesive). For felt pocket systems: staple landscape fabric to a rigid backing board. Ensure frame tilts 10-15° from the wall for drainage." },
            { title: "Drip Irrigation", content: "Install a drip line across the top — water trickles down through all layers by gravity. Use a timer (twice daily in summer, once in winter). Catch tray at the bottom to collect excess water. For small setups, manual watering with a long-spout can works fine." }
        ]
    },
    {
        stage: 3, title: "Plant Selection & Arrangement", duration: "Day 0", topics: [
            { title: "Crop Layout", content: "**Top (most sun):** Herbs (Basil, Rosemary, Thyme), Strawberry. **Middle:** Lettuce, Spinach, Coriander, Mint. **Bottom (least sun):** Shade-tolerant ferns, Money plant, Pothos. **Climbing support:** Attach trellis for Beans, Peas, Cucumbers, Passion fruit." },
            { title: "Soil Mix", content: "Use lightweight mix: 1 part Coco Peat + 1 part Perlite + 1 part Vermicompost. Avoid heavy garden soil (causes waterlogging and adds weight). Add slow-release fertilizer granules at planting." }
        ]
    },
    {
        stage: 4, title: "Growth & Maintenance", duration: "Ongoing", topics: [
            { title: "Watering & Feeding", content: "Vertical gardens dry faster than ground beds — check moisture daily. Top pockets dry fastest (gravity pulls water down). Apply liquid organic fertilizer (Panchagavya or Seaweed extract) every 2 weeks by spraying on foliage and roots." },
            { title: "Pest Control", content: "Common urban pests: Aphids, Mealybugs, Whitefly. Use Neem oil spray (5ml/L) weekly as preventive. Yellow sticky traps near the garden catch flying pests. Inspect undersides of leaves regularly. Good air circulation between plants reduces fungal issues." }
        ]
    },
    {
        stage: 5, title: "Harvesting & Seasonal Refresh", duration: "Ongoing", topics: [
            { title: "Harvest Strategy", content: "Harvest herbs and greens by pinching/cutting outer leaves — promotes bushy regrowth. Replace spent plants immediately to avoid bare patches. A 1 sq meter vertical garden can produce 3-5 kg greens per month — using 80% less ground space than horizontal farming (TNAU)." },
            { title: "Seasonal Refresh", content: "**Summer:** Heat-tolerant herbs (Basil, Curry Leaf), Purslane. **Monsoon:** Mint, Money Plant, creepers. **Winter:** Lettuce, Spinach, Peas, Strawberry. Replace soil mix every 6 months to prevent nutrient depletion and root disease buildup." }
        ]
    }
];

export const containerGardenSyllabus: ModuleStage[] = [
    {
        stage: 1, title: "Container & Location Selection", duration: "1 Week", topics: [
            { title: "Container Types", content: "**Clay pots:** Good aeration, heavy (stable), but dry out fast. **Plastic grow bags:** Cheap, lightweight, good drainage — most popular in urban India. **Cement pots:** Durable, retains moisture, heavy. **Recycled containers:** Buckets, paint cans, oil drums (drill drainage holes). Always ensure 3-4 drainage holes at the bottom." },
            { title: "Size Guide (TNAU)", content: "**6-8 inch pots:** Leafy greens (Spinach, Lettuce, Coriander, Methi), Herbs (Basil, Mint). **10-12 inch pots:** Chilli, Tomato, Brinjal, Capsicum, Beans. **14-16 inch pots:** Cucumber, Cauliflower, Cabbage. **18-24 inch drums:** Dwarf fruit trees (Lemon, Guava), large vegetables. Bigger is always better for root space." }
        ]
    },
    {
        stage: 2, title: "Potting Mix Preparation", duration: "1-2 Days", topics: [
            { title: "The Universal Mix", content: "**Recipe:** 1 part Red/Garden Soil + 1 part Coco Peat (moisture retention) + 1 part Vermicompost (nutrition). Add per 10L of mix: 1 handful Neem Cake (pest prevention), 1 tbsp Bone Meal (phosphorus for flowering/fruiting). Never use only garden soil — it compacts and suffocates roots in containers." },
            { title: "Drainage Layer", content: "Place 1-2 inches of broken terracotta pieces, gravel, or perlite at the bottom of each pot to prevent waterlogging. Cover with a thin layer of coco peat before adding soil mix." }
        ]
    },
    {
        stage: 3, title: "Sowing & Transplanting", duration: "Day 0", topics: [
            { title: "Direct Sowing Crops", content: "Sow directly into pots: Radish, Coriander, Methi (Fenugreek), Palak (Spinach), Beans, Beetroot. Sprinkle seeds on moist soil, cover lightly (2-3x seed diameter), water gently with a fine spray." },
            { title: "Transplant Crops", content: "Buy saplings or raise seedlings in seed trays first: Tomato, Chilli, Brinjal, Capsicum, Cauliflower. Transplant when seedlings have 4-6 true leaves. Water deeply after transplanting and keep in partial shade for 2-3 days." }
        ]
    },
    {
        stage: 4, title: "Care & Feeding", duration: "Ongoing", topics: [
            { title: "Watering Schedule", content: "**Finger test:** Push finger 1 inch into soil — water only if dry. **Summer:** Water twice daily (morning + evening). **Winter:** Once daily or every 2 days. **Monsoon:** Only when soil dries. Overwatering kills more container plants than underwatering! Use mulch (dry leaves/coco peat) to retain moisture." },
            { title: "Organic Feeding (ICAR Guidelines)", content: "**Every 15 days:** Liquid Vermicompost tea (dilute 1:10) or Panchagavya or Jeevamrutha. **Monthly:** Top-dress with 1 inch fresh Vermicompost. **During flowering:** Spray Seaweed extract (growth promoter). **Never use excess Urea** in containers (burns roots and attracts pests)." }
        ]
    },
    {
        stage: 5, title: "Crop Rotation & Year-Round Planning", duration: "Seasonal", topics: [
            { title: "Seasonal Crop Calendar", content: "**Summer (Mar-Jun):** Chilli, Tomato, Brinjal, Okra, Bottle Gourd (with trellis). **Monsoon (Jul-Sep):** Leafy greens (Amaranthus, Palak), Turmeric, Ginger in deep pots. **Winter (Oct-Feb):** Peas, Beans, Cabbage, Cauliflower, Lettuce, Carrot, Radish. Rotate crops in each pot every season." },
            { title: "Soil Rejuvenation", content: "After each crop: Remove old roots, add fresh Vermicompost (25% of pot volume), mix in Neem Cake and Trichoderma powder (prevents soil-borne diseases). Solarize older soil by spreading in sun for 2-3 days before reuse. Never plant the same crop family in the same pot consecutively — rotate Solanaceae (Tomato/Chilli/Brinjal) with Legumes (Beans/Peas) to prevent disease buildup." }
        ]
    }
];

export const getModuleSyllabus = (id: string): ModuleStage[] => {
    const map: Record<string, ModuleStage[]> = {
        rice: riceSyllabus,
        wheat: wheatSyllabus,
        garlic: garlicSyllabus,
        lettuce: lettuceSyllabus,
        maize: maizeSyllabus,
        soya: soybeanSyllabus,
        chickpea: chickpeaSyllabus,
        cotton: cottonSyllabus,
        sugarcane: sugarcaneSyllabus,
        potato: potatoSyllabus,
        onion: onionSyllabus,
        tomato: tomatoSyllabus,
        turmeric: turmericSyllabus,
        ginger: gingerSyllabus,
        chilli: chilliSyllabus,
        'terrace-kitchen': terraceSyllabus,
        'hydroponics': hydroponicsSyllabus,
        'microgreens': microgreensSyllabus,
        'mushroom': mushroomSyllabus,
        'vertical-tower': verticalTowerSyllabus,
        'container-fruit': containerFruitSyllabus,
        'aquaponics': aquaponicsSyllabus,
        'rooftop-bees': rooftopBeesSyllabus,
        'vertical-garden': verticalGardenSyllabus,
        'container-garden': containerGardenSyllabus,
        'aeroponics': aeroponicsSyllabus
    };
    return map[id] || [];
};

export const getModuleContent = (id: string, stage: number) => {
    const syllabus = getModuleSyllabus(id);
    return syllabus.find(s => s.stage === stage) || null;
};
