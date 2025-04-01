config = {
	//User Settings
	blacklist: [ //Banned users go here
	],
	inactive_turns: 5, //How many turns of inactivity should it take for a user to be considered inactive?
	
	//Map Settings
	min_provinces: 0,
	max_provinces: 4155,
	map_background: "background.png",
	map_definition: "provinces.svg",
	map_overlay: "province_ids.png",
	map_resolution: [12018, 6150],
	map_compress_size: [6009, 3075], //Compressed map size
	map_label_coords: [31, 1798],
	map_label_placement: [20, 20, 20, 20, 10000],
	map_type: "age_of_colonisation",
	
	starting_year: 1500,
	
	//Resources
	materials: ["aluminium","ammunition","artillery","bauxite","coal","concrete","cotton","copper","fertiliser","food","gold","iron","knowledge","lead","lumber","machine_parts","meat","petroil","refined_petroil","silver","small_arms","steel","stone","sulphur","uniforms","wheat","wood"],
	raw_resources: ["bauxite","coal","cotton","copper","gold","iron","lead","meat","silver","stone","sulphur","petroil","wheat","wood"],
	processed_resources: ["aluminium","ammunition","artillery","concrete","fertiliser","food","lumber","machine_parts","refined_petroil","small_arms","steel","uniforms"],
	mineable_materials: ["bauxite","bauxite","bauxite","bauxite","bauxite","bauxite","bauxite","bauxite","bauxite","bauxite","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","copper","copper","copper","copper","copper","copper","copper","copper","copper","copper","gold","gold","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","lead","lead","lead","lead","lead","lead","lead","lead","lead","lead","lead","lead","lead","lead","lead","lead","lead","lead","lead","lead","silver","silver","silver","silver","silver","silver","silver","silver","sulphur","sulphur","sulphur","sulphur","sulphur"], //100 elements, each element represents a 1% chance
	
	//Buildings
	building_categories: ["agriculture","resource_extraction","mines","industry","processing_facilities","petrochemicals","military_buildings","research_buildings","housing","infrastructure"],
	
	agriculture: ["farms","centralised_farms","modern_farms","industrial_farms","vertical_farms","pastures","fisheries","plantations"],
	resource_extraction: ["quarries","lumberjacks"],
	mines: ["bauxite_mines","coal_mines","copper_mines","gold_mines","iron_mines","lead_mines","silver_mines","sulphur_mines"],
	industry: ["guilds","workshops","watermills","manufactories","mills","factories","arsenals","assembly_plants","industrial_complexes", "civilian_industries","wartime_industries","production_facilities","modern_financial_centres","ai_hubs"],
	processing_facilities: ["aluminium_factories","ammunition_factories","artillery_factories","concrete_factories","fertiliser_factories","forgeries","food_processing_facilities","machine_parts_factories","sawmills","small_arms_factories","steelworks","textile_mills"],
	petrochemicals: ["derricks","refineries"],
	military_buildings: ["ack_ack_guns","air_bases","artillery_encampments","auto_plants","barracks","dockyards"],
	research_buildings: ["schools","libraries","universities","research_labs","research_complexes"],
	housing: ["neighbourhoods","suburbs","flats","districts","cbds"],
	housing_disable_slots: true,
	housing_always_display: true,
	infrastructure: ["canals","ports","railways","motorways","aeroports"],
	infrastructure_disable_slots: true,
	
	building_stats: { //WIP - Remember to reclassify categories!
		//Action Buildings (Industry)
		guilds: {
			name: "Guilds",
			singular: "Guild",
			icon: "<:workers:732730754735276124>",
			category: "industry",
			
			construction_turns: 2,
			costs: [[2, "iron"], [2, "wood"], [3, "stone"], [2500, "money"], [65000, "workers"]],
			produces: [[1, "actions"]]
		},
		workshops: {
			name: "Workshops",
			singular: "Workshop",
			aliases: ["shop"],
			icon: "<:trade:716828677115084812>",
			category: "industry",
			
			construction_turns: 3,
			costs: [[3, "iron"], [2, "wood"], [1, "lead"], [5, "stone"], [5000, "money"], [55000, "workers"]],
			produces: [[[2,3], "actions"]]
		},
		watermills: {
			name: "Watermills",
			singular: "Watermill",
			aliases: ["windmill"],
			icon: "<:paper:759161240987369522>",
			category: "industry",
			
			construction_turns: 3,
			costs: [[5, "stone"], [3, "wood"], [1, "lead"], [6500, "money"], [20000, "workers"]],
			produces: [[[3,5], "actions"]]
		},
		manufactories: {
			name: "Manufactories",
			singular: "Manufactory",
			aliases: ["manufact","manufacturing"],
			icon: "<:development:716811992421367869>",
			category: "industry",
			
			construction_turns: 5,
			costs: [[8, "stone"], [5, "iron"], [3, "wood"], [7500, "money"], [30000, "workers"]],
			produces: [[[4,6], "actions"]]
		},
		mills: {
			name: "Mills",
			singular: "Mill",
			icon: "<:government:716817688693047306>",
			category: "industry",
			
			construction_turns: 4,
			costs: [[12, "stone"], [5, "wood"], [3, "iron"], [2, "lead"], [8000, "money"], [30000, "workers"]],
			produces: [[[5,7], "actions"]]
		},
		factories: {
			name: "Factories",
			singular: "Factory",
			icon: "<:factory:759161240601493525>",
			category: "industry",
			
			construction_turns: 3,
			costs: [[5, "iron"], [10, "stone"], [5, "wood"], [5, "coal"], [10000, "money"], [50000, "workers"]],
			produces: [[[7,10], "actions"]]
		},
		arsenals: {
			name: "Arsenals",
			singular: "Arsenal",
			icon: "<:coal:716791408714973204>",
			category: "industry",
			
			construction_turns: 4,
			costs: [[3, "steel"], [5, "iron"], [15, "stone"], [7, "wood"], [5, "coal"], [10000, "money"], [50000, "workers"]],
			produces: [[[10,12], "actions"]]
		},
		assembly_plants: {
			name: "Assembly Plants",
			singular: "Assembly Plant",
			aliases: ["plant"],
			icon: "<:artillery_piece:759161240999952445>",
			category: "industry",
			
			construction_turns: 4,
			costs: [[10, "steel"], [10, "stone"], [5, "petroil"], [20000, "money"], [40000, "workers"]],
			produces: [[[12,15], "actions"]]
		},
		industrial_complexes: {
			name: "Industrial Complexes",
			singular: "Industrial Complex",
			aliases: ["industrial_facilities"],
			icon: "<:actions:716817688244256770>",
			category: "industry",
			
			construction_turns: 5,
			costs: [[20, "steel"], [10, "stone"], [15, "petroil"], [50000, "money"], [55000, "workers"]],
			produces: [[[12,18], "actions"]]
		},
		civilian_industries: {
			name: "Civilian Industries",
			singular: "Civilian Factory",
			aliases: ["civilian_industry"],
			icon: "<:government_scroll:716828975175041054>",
			category: "industry",
			
			construction_turns: 3,
			costs: [[25, "steel"], [15, "stone"], [5, "gold"], [10, "petroil"], [65000, "money"], [55000, "workers"]],
			produces: [[[15,20], "actions"]]
		},
		wartime_industries: {
			name: "Wartime Industries",
			singular: "Military Factory",
			aliases: ["wartime_industry"],
			icon: "<:land_vehicles:716821195215077406>",
			category: "industry",
			
			construction_turns: 2,
			costs: [[25, "steel"], [15, "stone"], [5, "gold"], [10, "petroil"], [70000, "money"], [60000, "workers"]],
			produces: [[20, "ground_units_cp"], [20, "ground_artillery_cp"], [20, "ground_vehicles_cp"], [20, "aeroplanes_cp"], [20, "naval_units_cp"]]
		},
		production_facilities: {
			name: "Production Facilities",
			singular: "Production Facility",
			icon: "<:building:716827579650408538>",
			category: "industry",
			
			construction_turns: 3,
			costs: [[15, "steel"], [5, "stone"], [5, "petroil"], [85000, "money"], [50000, "workers"]],
			produces: [[[20,25], "actions"]]
		},
		modern_financial_centres: {
			name: "Modern Financial Centres",
			singular: "Modern Financial Centre",
			icon: "<:taxes:716817688781127810>",
			category: "industry",
			
			construction_turns: 5,
			costs: [[25, "steel"], [30, "stone"], [15, "petroil"], [150000, "money"], [50000, "workers"]],
			produces: [[[25,30], "actions"]]
		},
		ai_hubs: {
			name: "AI Hubs",
			singular: "AI Hub",
			icon: "<:money:716817688718213192>",
			category: "industry",
			
			construction_turns: 7,
			costs: [[25, "steel"], [35, "gold"], [30, "stone"], [25, "petroil"], [200000, "money"], [35000, "workers"]],
			produces: [[[25,40], "actions"]]
		},
		//Agriculture
		farms: {
			name: "Farms",
			singular: "Farm",
			icon: "<:farms:772296532275757087>",
			category: "agriculture",
			
			construction_turns: 1,
			costs: [[15, "wood"], [5, "stone"], [2000, "money"], [50000, "workers"]],
			produces: [[2, "wheat"], [1, "meat"]]
		},
		centralised_farms: {
			name: "Centralised Farms",
			singular: "Centralised Farm",
			icon: "<:centralised_farms:773289015839162368>",
			category: "agriculture",
			
			construction_turns: 2,
			costs: [[10, "lumber"], [5, "iron"], [5, "sulphur"], [4000, "money"], [25000, "workers"]],
			produces: [[3, "wheat"], [2, "meat"]]
		},
		modern_farms: {
			name: "Modern Farms",
			singular: "Modern Farm",
			icon: "<:modern_farms:773289015415668746>",
			category: "agriculture",
			
			construction_turns: 2,
			costs: [[10, "steel"], [5, "machine_parts"], [5, "lumber"], [5, "stone"], [10000, "money"], [20000, "workers"]],
			produces: [[5, "wheat"], [3, "meat"]],
			cost_per_turn: [[2, "fertiliser"], [1, "refined_petroil"]]
		},
		industrial_farms: {
			name: "Industrial Farms",
			singular: "Industrial Farm",
			icon: "<:industrial_farms:773289015440834611>",
			category: "agriculture",
			
			construction_turns: 3,
			costs: [[15, "steel"], [10, "concrete"], [10, "machine_parts"], [5, "lumber"], [15000, "money"], [15000, "workers"]],
			produces: [[5, "wheat"], [5, "meat"]],
			cost_per_turn: [[3, "fertiliser"], [2, "refined_petroil"]]
		},
		vertical_farms: {
			name: "Vertical Farms",
			singular: "Vertical Farm",
			icon: "<:vertical_farms:773289015440572467>",
			category: "agriculture",
			
			construction_turns: 5,
			costs: [[20, "steel"], [10, "concrete"], [15, "machine_parts"], [3, "gold"], [20000, "money"], [10000, "workers"]],
			produces: [[10, "wheat"], [5, "meat"]],
			cost_per_turn: [[2, "machine_parts"]]
		},
		pastures: {
			name: "Pastures",
			singular: "Pasture",
			icon: "<:pastures:772296532648132638>",
			category: "agriculture",
			
			construction_turns: 1,
			costs: [[10, "wood"], [1200, "money"], [15000, "workers"]],
			produces: [[2, "meat"]]
		},
		fisheries: {
			name: "Fisheries",
			singular: "Fishery",
			icon: "<:fisheries:771983852373409793>",
			category: "agriculture",
			
			construction_turns: 1,
			costs: [[5, "wood"], [5, "iron"], [400, "money"], [35000, "workers"]],
			produces: [[3, "meat"]]
		},
		plantations: {
			name: "Plantations",
			singular: "Plantation",
			icon: "<:plantations:772296532883013643>",
			category: "agriculture",
			
			construction_turns: 2,
			costs: [[15, "wood"], [5, "stone"], [5000, "money"], [25000, "workers"]],
			produces: [[15, "cotton"]]
		},
		//Resource Extraction
		quarries: {
			name: "Quarries",
			singular: "Quarry",
			icon: "<:quarries:772296532606451724>",
			category: "resource_extraction",
			
			construction_turns: 2,
			costs: [[10, "wood"], [5, "iron"], [2500, "money"], [40000, "workers"]],
			produces: [[10, "stone"]]
		},
		lumberjacks: {
			name: "Lumberjacks",
			singular: "Lumberjack",
			icon: "<:wood:716791408928751636>",
			category: "resource_extraction",
			
			construction_turns: 2,
			costs: [[10, "wood"], [5, "stone"], [5, "iron"], [6000, "money"], [40000, "workers"]],
			produces: [[20, "wood"]]
		},
		//Mines
		bauxite_mines: {
			name: "Bauxite Mines",
			singular: "Bauxite Mine",
			icon: "<:bauxite_mines:772296532794933248>",
			category: "mines",
			
			construction_turns: 3,
			costs: [[20, "wood"], [10, "iron"], [5500, "money"], [25000, "workers"]],
			produces: [[10, "bauxite"]]
		},
		coal_mines: {
			name: "Coal Mines",
			singular: "Coal Mine",
			icon: "<:coal_mines:772296532795195395>",
			category: "mines",
			
			construction_turns: 2,
			costs: [[15, "wood"], [5, "iron"], [3500, "money"], [40000, "workers"]],
			produces: [[10, "coal"]]
		},
		copper_mines: {
			name: "Copper Mines",
			singular: "Copper Mine",
			icon: "<:copper_mines:772296532854571008>",
			category: "mines",
			
			construction_turns: 3,
			costs: [[20, "wood"], [10, "iron"], [5000, "money"], [40000, "workers"]],
			produces: [[5, "copper"]]
		},
		gold_mines: {
			name: "Gold Mines",
			singular: "Gold Mine",
			icon: "<:gold_mines:772296532930068540>",
			category: "mines",
			
			construction_turns: 4,
			costs: [[20, "wood"], [15, "iron"], [6500, "money"], [50000, "workers"]],
			produces: [[2, "gold"]]
		},
		iron_mines: {
			name: "Iron Mines",
			singular: "Iron Mine",
			icon: "<:iron_mines:772296533194440754>",
			category: "mines",
			
			construction_turns: 3,
			costs: [[20, "wood"], [10, "iron"], [3300, "money"], [50000, "workers"]],
			produces: [[20, "iron"]]
		},
		lead_mines: {
			name: "Lead Mines",
			singular: "Lead Mine",
			icon: "<:lead_mines:772296533533523988>",
			category: "mines",
			
			construction_turns: 2,
			costs: [[20, "wood"], [5, "iron"], [3000, "money"], [30000, "workers"]],
			produces: [[15, "lead"]]
		},
		silver_mines: {
			name: "Silver Mines",
			singular: "Silver Mine",
			icon: "<:silver_mines:772296533302968331>",
			category: "mines",
			
			construction_turns: 4,
			costs: [[20, "wood"], [10, "iron"], [5000, "money"], [25000, "workers"]],
			produces: [[5, "silver"]]
		},
		sulphur_mines: {
			name: "Sulphur Mines",
			singular: "Sulphur Mine",
			aliases: ["sulfur_mines", "sulfur_mine"],
			icon: "<:sulphur_mines:772296533277409311>",
			category: "mines",
			
			construction_turns: 4,
			costs: [[20, "wood"], [15, "iron"], [7000, "money"], [40000, "workers"]],
			produces: [[10, "sulphur"]]
		},
		//Processing Facilities
		aluminium_factories: {
			name: "Aluminium Factories",
			singular: "Aluminium Factory",
			aliases: ["aluminum_factories", "aluminum_factory", "aluminum_refinery","aluminium_factory"],
			icon: "<:aluminium_factories:772296532534755348>",
			category: "processing_facilities",
			
			costs: [[15, "steel"], [10, "concrete"], [10, "machine_parts"], [7500, "money"], [40000, "workers"]],
			produces: [[5, "aluminium"]],
			cost_per_turn: [[10, "bauxite"]]
		},
		ammunition_factories: {
			name: "Ammunition Factories",
			singular: "Ammunition Factory",
			aliases: ["ammunition_factory"],
			icon: "<:ammunition_factories:772296532358725673>",
			category: "processing_facilities",
			
			costs: [[10, "iron"], [10, "stone"], [5, "lumber"], [5, "machine_parts"], [5000, "money"], [50000, "workers"]],
			produces: [[50, "ammunition"]],
			cost_per_turn: [[2, "sulphur"], [2, "lead"], [1, "coal"], [1, "iron"]]
		},
		artillery_factories: {
			name: "Artillery Factories",
			singular: "Artillery Factory",
			aliases: ["artillery_factory"],
			icon: "<:artillery_factories:772296532601995285>",
			category: "processing_facilities",
			
			costs: [[20, "steel"], [10, "concrete"], [15, "machine_parts"], [5, "coal"], [6000, "money"], [35000, "workers"]],
			produces: [[3, "artillery"]],
			cost_per_turn: [[5, "steel"]]
		},
		concrete_factories: {
			name: "Concrete Factories",
			singular: "Concrete Factory",
			aliases: ["concrete_factory"],
			icon: "<:concrete_factories:772296532383891478>",
			category: "processing_facilities",
			
			costs: [[10, "steel"], [15, "stone"], [5, "machine_parts"], [3500, "money"], [20000, "workers"]],
			produces: [[5, "concrete"]],
			cost_per_turn: [[10, "stone"]]
		},
		fertiliser_factories: {
			name: "Fertiliser Factories",
			singular: "Fertiliser Factory",
			aliases: ["fertilizer_factories", "fertilizer_factory", "fertiliser_factory"],
			icon: "<:fertiliser_factories:772296533038858261>",
			category: "processing_facilities",
			
			costs: [[15, "stone"], [10, "lumber"], [5, "iron"], [5000, "money"], [20000, "workers"]],
			produces: [[5, "fertiliser"]],
			cost_per_turn: [[10, "sulphur"]]
		},
		forgeries: {
			name: "Forgeries",
			singular: "Forgery",
			icon: "<:forgeries:773334400506265641>",
			category: "processing_facilities",
			
			costs: [[5, "iron"], [5, "wood"], [10, "stone"], [10, "coal"], [6500, "money"], [35000, "workers"]],
			produces: [[1, "steel"]],
			cost_per_turn: [[1, "coal"], [1, "iron"]]
		},
		food_processing_facilities: {
			name: "Food Processing Facilities",
			singular: "Food Processing Facility",
			aliases: ["food_processing_facility"],
			icon: "<:food_processing_facilities:772296532900577281>",
			category: "processing_facilities",
			
			costs: [[5, "stone"], [5, "lumber"], [2, "iron"], [1000, "money"], [10000, "workers"]],
			produces: [[5, "food"]],
			cost_per_turn: [[2, "meat"], [1, "wheat"]]
		},
		machine_parts_factories: {
			name: "Machine Parts Factories",
			singular: "Machine Parts Factory",
			aliases: ["machine_parts_factory"],
			icon: "<:machine_parts_factories:772296532778811392>",
			category: "processing_facilities",
			
			costs: [[5, "steel"], [10, "iron"], [20, "stone"], [10000, "money"], [55000, "workers"]],
			produces: [[5, "machine_parts"]],
			cost_per_turn: [[1, "steel"], [2, "copper"]]
		},
		sawmills: {
			name: "Sawmills",
			singular: "Sawmill",
			icon: "<:sawmills:772296532539080714>",
			category: "processing_facilities",
			
			costs: [[10, "wood"], [5, "iron"], [3000, "money"], [40000, "workers"]],
			produces: [[5, "lumber"]],
			cost_per_turn: [[5, "wood"]]
		},
		small_arms_factories: {
			name: "Small Arms Factories",
			singular: "Small Arms Factory",
			aliases: ["small_arms_factory"],
			icon: "<:small_arms_factories:773339719093452810>",
			category: "processing_facilities",
			
			costs: [[15, "stone"], [5, "steel"], [10, "lumber"], [10000, "money"], [50000, "workers"]],
			produces: [[20, "small_arms"]],
			cost_per_turn: [[2, "lumber"], [3, "steel"]]
		},
		steelworks: {
			name: "Steelworks",
			singular: "Steelwork",
			icon: "<:steelworks:772296532941602847>",
			category: "processing_facilities",
			
			costs: [[20, "stone"], [15, "iron"], [15000, "money"], [60000, "workers"]],
			produces: [[5, "steel"]],
			cost_per_turn: [[5, "coal"], [5, "iron"]]
		},
		textile_mills: {
			name: "Textile Mills",
			singular: "Textile Mill",
			aliases: ["textile_mill"],
			icon: "<:textile_mills:772296532959166474>",
			category: "processing_facilities",
			
			costs: [[20, "iron"], [10, "machine_parts"], [7000, "money"], [40000, "workers"]],
			produces: [[10, "uniforms"]],
			cost_per_turn: [[2, "cotton"]]
		},
		//Petrochemicals
		derricks: {
			name: "Derricks",
			singular: "Derrick",
			icon: "<:derricks:772296533320007681>",
			category: "petrochemicals",
			
			construction_turns: 2,
			costs: [[5, "wood"], [3, "machine_parts"], [8000, "money"], [25000, "workers"]],
			produces: [[5, "petroil"]],
			cost_per_turn: [[1, "coal"]]
		},
		refineries: {
			name: "Refineries",
			singular: "Refinery",
			icon: "<:refinery:772296533152235580>",
			category: "petrochemicals",
			
			construction_turns: 4,
			costs: [[10, "steel"], [15, "iron"], [5, "coal"], [8800, "money"], [60000, "workers"]],
			produces: [[4, "refined_petroil"]],
			cost_per_turn: [[2, "petroil"]]
		},
		//Military Buildings
		ack_ack_guns: {
			name: "Ack-Ack Guns",
			singular: "Ack-Ack Gun",
			aliases: ["aa_guns", "anti_aircraft_guns", "anti_aircraft"],
			icon: "<:artillery_piece:759161240999952445>",
			category: "military_buildings",
			
			construction_turns: 1,
			costs: [[15, "steel"], [5, "artillery"], [20, "ammunition"], [15000, "money"], [5000, "soldiers"]]
		},
		air_bases: {
			name: "Air Bases",
			singular: "Air Base",
			icon: "<:aeroplanes:716821195407884358>",
			category: "military_buildings",
			
			construction_turns: 2,
			costs: [[20, "steel"], [15, "concrete"], [10, "refined_petroil"], [60000, "money"], [70000, "workers"]],
			produces: [[20, "aeroplanes_cp"]]
		},
		artillery_encampments: {
			name: "Artillery Encampments",
			singular: "Artillery Encampment",
			icon: "<:artillery:716821195055431681>",
			category: "military_buildings",
			
			construction_turns: 2,
			costs: [[5, "iron"], [10, "stone"], [5, "coal"], [25000, "money"], [50000, "workers"]],
			produces: [[20, "ground_artillery_cp"]]
		},
		auto_plants: {
			name: "Auto Plants",
			singular: "Auto Plant",
			icon: "<:land_vehicles:716821195215077406>",
			category: "military_buildings",
			
			construction_turns: 3,
			costs: [[15, "steel"], [10, "concrete"], [10, "refined_petroil"], [5, "coal"], [80000, "money"], [100000, "workers"]],
			produces: [[20, "ground_vehicles_cp"]]
		},
		barracks: {
			name: "Barracks",
			singular: "Barracks",
			icon: "<:manpower:716817688705499177>",
			category: "military_buildings",
			
			construction_turns: 2,
			costs: [[2, "wood"], [1, "iron"], [20000, "money"], [70000, "workers"]],
			produces: [[20, "ground_units_cp"]]
		},
		dockyards: {
			name: "Dockyards",
			singular: "Dockyard",
			icon: "<:naval_units:716821195277729832>",
			category: "military_buildings",
			
			construction_turns: 5,
			costs: [[10, "lumber"], [5, "iron"], [25000, "money"], [80000, "workers"]],
			produces: [[20, "naval_units_cp"]]
		},
		//Research Buildings
		schools: {
			name: "Schools",
			singular: "School",
			icon: "<:knowledge:716797747193446441>",
			category: "research_buildings",
			
			construction_turns: 2,
			costs: [[5, "wood"], [5, "stone"], [5000, "money"], [5000, "faculty"]],
			produces: [[10, "knowledge"]],
			cost_per_turn: [[500, "money"]]
		},
		libraries: {
			name: "Libraries",
			singular: "Library",
			icon: "<:old_scroll:716828676880334881>",
			category: "research_buildings",
			
			construction_turns: 4,
			costs: [[5, "lumber"], [10, "stone"], [7000, "money"], [10000, "faculty"]],
			produces: [[20, "knowledge"]],
			cost_per_turn: [[1500, "money"]]
		},
		universities: {
			name: "Universities",
			singular: "University",
			icon: "<:faculty:732730754911436830>",
			category: "research_buildings",
			
			construction_turns: 8,
			costs: [[10, "lumber"], [15, "stone"], [15000, "money"], [25000, "faculty"]],
			produces: [[50, "knowledge"]],
			cost_per_turn: [[5000, "money"]]
		},
		research_labs: {
			name: "Research Labs",
			singular: "Research Lab",
			icon: "<:government:716817688693047306>",
			category: "research_buildings",
			
			construction_turns: 10,
			costs: [[25, "steel"], [10, "concrete"], [5, "refined_petroil"], [5, "gold"], [5, "lead"], [15000, "faculty"]],
			produces: [[100, "knowledge"]],
			cost_per_turn: [[7500, "money"]]
		},
		research_complexes: {
			name: "Research Complexes",
			singular: "Research Complex",
			icon: "<:technology:716812861514711040>",
			category: "research_buildings",
			
			construction_turns: 10,
			costs: [[35, "steel"], [20, "concrete"], [15, "gold"], [10, "refined_petroil"], [5, "lead"], [35000, "faculty"]],
			produces: [[250, "knowledge"]],
			cost_per_turn: [[15000, "money"]]
		},
		//Housing
		neighbourhoods: {
			name: "Neighbourhoods",
			singular: "Neighbourhood",
			aliases: ["neighborhood", "neighborhoods"],
			icon: "<:neighbourhoods:772296532958642186>",
			category: "housing",
			description: "Houses 50.000 People",
			
			construction_turns: 5,
			costs: [[5, "lumber"], [3, "iron"], [1000, "money"]],
			houses: 50000,
			unlimited_slots: true
		},
		suburbs: {
			name: "Suburbs",
			singular: "Suburb",
			icon: "<:suburbs:772296532908310549>",
			category: "housing",
			description: "Houses 100.000 People",
			
			construction_turns: 4,
			costs: [[10, "lumber"], [6, "iron"], [2500, "money"]],
			houses: 100000,
			unlimited_slots: true
		},
		flats: {
			name: "Flats",
			singular: "Flat",
			aliases: ["apartment", "apartments"],
			icon: "<:flats:772296533004910622>",
			category: "housing",
			description: "Houses 500.000 People",
			
			construction_turns: 4,
			costs: [[20, "lumber"], [12, "iron"], [5000, "money"]],
			houses: 500000,
			unlimited_slots: true
		},
		districts: {
			name: "Districts",
			singular: "District",
			icon: "<:districts:772296533113700352>",
			category: "housing",
			description: "Houses 1.000.000 People",
			
			construction_turns: 8,
			costs: [[20, "steel"], [5, "iron"], [35, "concrete"], [10000, "money"]],
			houses: 1000000,
			unlimited_slots: true
		},
		cbds: {
			name: "CBDs",
			singular: "Central Business District",
			aliases: ["cbd", "downtown", "downtowns"],
			icon: "<:financial_districts:772296532492812298>",
			category: "housing",
			description: "Houses 500.000 People, Produces £3.000 per turn",
			
			construction_turns: 10,
			costs: [[15, "steel"], [5, "iron"], [20, "concrete"], [10000, "money"], [7500, "workers"]],
			produces: [[5000, "money"]],
			houses: 500000,
			unlimited_slots: true
		},
		//Infrastructure
		canals: {
			name: "Canals",
			singular: "Canal",
			icon: "<:canals:773451853786251274>",
			category: "infrastructure",
			description: "+1% RGO Throughput, +5 Shipment Capacity",
			separate_building_slots: true,
			
			maximum: 10,
			costs: [[15, "stone"], [5, "lumber"], [3, "steel"], [5000, "money"], [1000, "workers"]],
			supply_limit: 10,
			immediate_effect: function (usr) {
				usr.modifiers.rgo_throughput = usr.modifiers.rgo_throughput + 0.01;
				usr.modifiers.shipment_capacity = usr.modifiers.shipment_capacity + 5;
			},
			demolish_effect: function (usr) {
				usr.modifiers.rgo_throughput = usr.modifiers.rgo_throughput - 0.01;
				usr.modifiers.shipment_capacity = usr.modifiers.shipment_capacity - 5;
			}
		},
		ports: {
			name: "Ports",
			singular: "Port",
			icon: "<:ports:773451853933051904>",
			category: "infrastructure",
			description: "-5% Isolation, +50 Shipment Capacity",
			separate_building_slots: true,
			
			maximum: 5,
			costs: [[30, "stone"], [20, "lumber"], [15, "iron"], [10000, "money"], [5000, "workers"]],
			supply_limit: 100,
			immediate_effect: function (usr) {
				usr.modifiers.isolation = usr.modifiers.isolation - 0.05;
				usr.modifiers.shipment_capacity = usr.modifiers.shipment_capacity + 50;
			},
			demolish_effect: function (usr) {
				usr.modifiers.isolation = usr.modifiers.isolation + 0.05;
				usr.modifiers.shipment_capacity = usr.modifiers.shipment_capacity - 50;
			}
		},
		railways: {
			name: "Railways",
			singular: "Railway",
			aliases: ["railroad"],
			icon: "<:railways:773451853534986241>",
			category: "infrastructure",
			description: "+1% RGO Throughput, +20 Shipment Capacity",
			separate_building_slots: true,
			
			maximum: 10,
			costs: [[10, "steel"], [10, "lumber"], [5, "stone"], [5, "machine_parts"], [7500, "money"], [2000, "workers"]],
			supply_limit: 50,
			immediate_effect: function (usr) {
				usr.modifiers.isolation = usr.modifiers.isolation - 0.05;
				usr.modifiers.shipment_capacity = usr.modifiers.shipment_capacity + 50;
			},
			demolish_effect: function (usr) {
				usr.modifiers.isolation = usr.modifiers.isolation + 0.05;
				usr.modifiers.shipment_capacity = usr.modifiers.shipment_capacity - 50;
			}
		},
		motorways: {
			name: "Motorways",
			singular: "Motorway",
			aliases: ["highway", "interstate"],
			icon: "<:motorways:773451853408108545>",
			category: "infrastructure",
			description: "+10% Army Travel Speed, +10 Shipment Capacity",
			separate_building_slots: true,
			
			maximum: 10,
			costs: [[20, "concrete"], [10, "stone"], [5, "machine_parts"], [8000, "money"], [2000, "workers"]],
			supply_limit: 30,
			immediate_effect: function (usr) {
				usr.modifiers.army_travel_speed = usr.modifiers.army_travel_speed + 0.10;
				usr.modifiers.shipment_capacity = usr.modifiers.shipment_capacity + 10;
			},
			demolish_effect: function (usr) {
				usr.modifiers.army_travel_speed = usr.modifiers.army_travel_speed - 0.10;
				usr.modifiers.shipment_capacity = usr.modifiers.shipment_capacity - 10;
			}
		},
		aeroports: {
			name: "Aeroports",
			singular: "Aeroport",
			aliases: ["airport"],
			icon: "<:aeroports:773451853751910400>",
			category: "infrastructure",
			description: "+0,5% Population Growth Rate, +£3.000 per turn",
			separate_building_slots: true,
			
			construction_turns: 5,
			maximum: 5,
			costs: [[20, "concrete"], [20, "steel"], [15, "aluminium"], [10, "machine_parts"], [20000, "money"], [30000, "workers"]],
			supply_limit: 15,
			produces: [[3000, "money"]],
			immediate_effect: function (usr) {
				usr.pop_growth_modifier = usr.pop_growth_modifier + 0.005;
			},
			demolish_effect: function (usr) {
				usr.pop_growth_modifier = usr.pop_growth_modifier - 0.005;
			}
		}
	},
	
	//Units
	unit_categories: ["ground_units", "ground_artillery", "ground_vehicles", "aeroplanes", "naval_units", "colonists"],
	
	ground_units: ["skirmishers","spearmen","swordsmen","knights","archers","longbowmen","pike_and_square","tercio","pike_and_shot","arquebusiers","snaplock_infantry","snaphaunce_infantry","matchlock_infantry","wheellock_infantry","flintlock_infantry","musketeers","line_infantry","fusiliers","napoleonic_infantry","rangers","guards","riflemen","marines","breechloaded_infantry","franc_tireurs","bolt_action_infantry","mg_companies","great_war_infantry","shock_troops","freikorps","motorised_infantry","paratroopers","special_forces","modern_infantry","combined_arms_infantry","contemporary_infantry","augmented_infantry","condottieri","early_modern_mercenaries","landsknecht","swiss_guards","lance_cavalry","heavy_cavalry","light_cavalry","cuirassiers","hussars","dragoons","uhlans","mounted_rifles","modern_cavalry"],
	ground_artillery: ["bombard","hand_cannons","long_cannons","field_culverins","demi_cannon","field_cannon","demi_culverins","minions","siege_artillery","mysorean_rockets","carronades","congreve_rockets","smoothbores","rifled_cannons","railwayguns","field_artillery","artillery_howitzers","mobile_artillery","long_range_artillery","modern_howitzers","self_propelled_artillery","rocket_artillery","railguns","directed_heat_weapons"],
	ground_vehicles: ["armoured_cars","armoured_personnel_carriers","half_tracks","troop_carriers","modern_armoured_cars","modern_apcs","landship","light_tanks","interwar_tanks","medium_tanks","heavy_tanks","tank_destroyers","improved_medium_tanks","modern_tanks","main_battle_tanks","modern_mbts","multirole_mbts"],
	aeroplanes: ["reconaissance_balloons","dirigibles","zeppelins","biplanes","improved_biplanes","monoplane_fighters","propeller_fighters","fighters","advanced_fighters","rocket_interceptors","jet_fighters","multirole_fighters","drones","stealth_fighters","ai_multirole_fighters","early_bombers","monoplane_bombers","interwar_bombers","bombers","strategic_bombers","stealth_bombers","ai_bombers","scout_helicopters","multirole_helicopters","modern_helicopters","torpedo_bombers","naval_bombers"],
	naval_units: ["caravels","galleons","men_of_war","ships_of_the_line","first_rate","frigates","steamboats","clippers","gunboats","ironclads","breastwork_monitors","destroyers","cruisers","pre_dreadnoughts","dreadnoughts","torpedo_boats","battlecruisers","submarines","air_carriers","battleships","aircraft_carriers","nuclear_submarines","supercarriers","modern_cruisers","modern_frigates","railgun_cruisers"],
	colonists: ["conquistadors","settlers","magistrates","colonists","magnates","administrators","bureaucrats"],
	
	//Icons and GFX
	resource_icons: ["<:aluminium:771635236235640842>","<:ammunition:771635236118462465>","<:artillery:771635236127506453>","<:bauxite:771635236089102357>","<:coal:716791408714973204>","<:concrete:771635236197892126>","<:cotton:771635235896426498>","<:copper:771635236245078016>","<:fertiliser:771635236240752640>","<:food:716797746715033602>","<:gold:716798541028261927>","<:iron:716791408819961866>","<:knowledge:716797747193446441>","<:lead:716791408840671322>","<:lumber:771635237884264478>","<:machine_parts:771635236312186900>","<:meat:771635236332240946>","<:petroil:716791408748658739>","<:refined_petroil:771635236403806228>","<:silver:771635236417044480>","<:small_arms:771909826505605162>","<:steel:716791408828088420>","<:stone:716796878649426020>","<:sulphur:771635236432904202>","<:uniforms:771635236534222858>","<:wheat:771829710569078804>","<:wood:716791408928751636>"], //Resource Icons
	unit_category_icons: ["<:active_personnel:716820390474940426>","<:artillery:716821195055431681>","<:land_vehicles:716821195215077406>","<:aeroplanes:716821195407884358>","<:naval_units:716821195277729832>","<:colonisation:716821194891853826>"],
	
	unit_stats: {
		//Mediaeval Infantry Units and Pike and Shot
		skirmishers: {
			name: "Skirmishers",
			ap: 1,
			dp: 3,
			mp: 2,
			ip: 1,
			quantity: 10000,
			costs: [[1, "wood"], [1, "iron"], [2, "food"], [500, "money"], [5, "ground_units_cp"], [10000, "soldiers"]]
		},
		spearmen: {
			name: "Spearmen",
			ap: 2,
			dp: 1,
			mp: 1,
			ip: 2,
			quantity: 10000,
			costs: [[2, "wood"], [1, "iron"], [2, "food"], [700, "money"], [5, "ground_units_cp"], [10000, "soldiers"]]
		},
		swordsmen: {
			name: "Swordsmen",
			ap: 3,
			dp: 2,
			mp: 0,
			ip: 3,
			quantity: 10000,
			costs: [[1, "wood"], [2, "iron"], [3, "food"], [1000, "money"], [10, "ground_units_cp"], [10000, "soldiers"]]
		},
		knights: {
			name: "Knights",
			ap: 5,
			dp: 1,
			mp: 2,
			ip: 2,
			quantity: 10000,
			costs: [[3, "iron"], [5, "food"], [2500, "money"], [20, "ground_units_cp"], [10000, "soldiers"]]
		},
		archers: {
			name: "Archers",
			ap: 2,
			dp: 1,
			mp: 1,
			ip: 3,
			quantity: 10000,
			costs: [[2, "lumber"], [3, "food"], [1000, "money"], [10, "ground_units_cp"], [10000, "soldiers"]]
		},
		longbowmen: {
			name: "Longbowmen",
			ap: 3,
			dp: 1,
			mp: 1,
			ip: 2,
			quantity: 10000,
			costs: [[3, "lumber"], [4, "food"], [2000, "money"], [20, "ground_units_cp"], [10000, "soldiers"]]
		},
		pike_and_square: {
			name: "Pike and Square",
			ap: 1,
			dp: 3,
			mp: 1,
			ip: 2,
			quantity: 10000,
			costs: [[1, "wood"], [2, "iron"], [3, "food"], [850, "money"], [5, "ground_units_cp"], [10000, "soldiers"]]
		},
		tercio: {
			name: "Tercio",
			ap: 6,
			dp: 4,
			mp: 1,
			ip: 2,
			quantity: 10000,
			costs: [[1, "wood"], [5, "iron"], [2, "lead"], [3, "food"], [2500, "money"], [5, "ground_units_cp"], [10000, "soldiers"]]
		},
		pike_and_shot: {
			name: "Pike and Shot",
			ap: 8,
			dp: 2,
			mp: 1,
			ip: 2,
			quantity: 10000,
			costs: [[1, "lumber"], [2, "steel"], [3, "lead"], [5, "food"], [3000, "money"], [5, "ground_units_cp"], [10000, "soldiers"]]
		},
		//Early Modern Ranged Units
		arquebusiers: {
			name: "Arquebusiers",
			ap: 4,
			dp: 1,
			mp: 2,
			ip: 2,
			quantity: 10000,
			costs: [[3, "lumber"], [1, "iron"], [1, "lead"], [2, "food"], [1500, "money"], [10, "ground_units_cp"], [10000, "soldiers"]]
		},
		snaplock_infantry: {
			name: "Snaplock Infantry",
			ap: 5,
			dp: 1,
			mp: 2,
			ip: 2,
			quantity: 10000,
			costs: [[3, "lumber"], [2, "iron"], [3, "lead"], [2, "food"], [1500, "money"], [10, "ground_units_cp"], [10000, "soldiers"]]
		},
		snaphaunce_infantry: {
			name: "Snaphaunce Infantry",
			ap: 5,
			dp: 2,
			mp: 3,
			ip: 3,
			quantity: 10000,
			costs: [[4, "lumber"], [2, "iron"], [3, "lead"], [2, "food"], [1500, "money"], [10, "ground_units_cp"], [10000, "soldiers"]]
		},
		matchlock_infantry: {
			name: "Matchlock Infantry",
			ap: 6,
			dp: 2,
			mp: 2,
			ip: 3,
			quantity: 10000,
			costs: [[4, "lumber"], [2, "iron"], [5, "lead"], [3, "food"], [2000, "money"], [10, "ground_units_cp"], [10000, "soldiers"]]
		},
		wheellock_infantry: {
			name: "Wheellock Infantry",
			ap: 6,
			dp: 3,
			mp: 1,
			ip: 4,
			quantity: 10000,
			costs: [[5, "lumber"], [2, "iron"], [5, "lead"], [3, "food"], [2000, "money"], [10, "ground_units_cp"], [10000, "soldiers"]]
		},
		flintlock_infantry: {
			name: "Flintlock Infantry",
			ap: 10,
			dp: 2,
			mp: 1,
			ip: 5,
			quantity: 10000,
			costs: [[5, "lumber"], [3, "iron"], [5, "lead"], [3, "food"], [1500, "money"], [10, "ground_units_cp"], [10000, "soldiers"]]
		},
		musketeers: {
			name: "Musketeers",
			ap: 12,
			dp: 5,
			mp: 1,
			ip: 5,
			quantity: 10000,
			costs: [[5, "lumber"], [3, "iron"], [4, "lead"], [4, "food"], [1000, "money"], [10, "ground_units_cp"], [10000, "soldiers"]]
		},
		line_infantry: {
			name: "Line Infantry",
			ap: 15,
			dp: 4,
			mp: 0,
			ip: 5,
			quantity: 10000,
			costs: [[5, "lumber"], [5, "uniforms"], [3, "iron"], [5, "ammunition"], [2, "food"], [1000, "money"], [10, "ground_units_cp"], [10000, "soldiers"]]
		},
		fusiliers: {
			name: "Fusiliers",
			ap: 18,
			dp: 6,
			mp: 1,
			ip: 6,
			quantity: 10000,
			costs: [[5, "lumber"], [10, "uniforms"], [2, "iron"], [10, "ammunition"], [4, "food"], [3500, "money"], [20, "ground_units_cp"], [10000, "soldiers"]]
		},
		napoleonic_infantry: {
			name: "Napoleonic Infantry",
			ap: 10,
			dp: 3,
			mp: 3,
			ip: 4,
			quantity: 10000,
			costs: [[5, "lumber"], [5, "uniforms"], [1, "iron"], [5, "ammunition"], [2, "food"], [1000, "money"], [5, "ground_units_cp"], [10000, "soldiers"]]
		},
		rangers: {
			name: "Rangers",
			ap: 7,
			dp: 3,
			mp: 6,
			ip: 5,
			quantity: 10000,
			costs: [[10, "lumber"], [5, "ammunition"], [4, "food"], [1500, "money"], [10, "ground_units_cp"], [10000, "soldiers"]]
		},
		guards: {
			name: "Guards",
			ap: 20,
			dp: 5,
			mp: 2,
			ip: 4,
			quantity: 10000,
			costs: [[15, "lumber"], [10, "uniforms"], [2, "iron"], [10, "ammunition"], [5, "food"], [2500, "money"], [10, "ground_units_cp"], [10000, "soldiers"]]
		},
		riflemen: {
			name: "Riflemen",
			ap: 14,
			dp: 10,
			mp: 3,
			ip: 3,
			quantity: 10000,
			costs: [[10, "lumber"], [5, "uniforms"], [5, "iron"], [5, "ammunition"], [3, "food"], [2000, "money"], [10, "ground_units_cp"], [10000, "soldiers"]]
		},
		marines: {
			name: "Marines",
			ap: 20,
			dp: 3,
			mp: 5,
			ip: 1,
			quantity: 10000,
			costs: [[15, "lumber"], [10, "uniforms"], [5, "iron"], [5, "ammunition"], [5, "food"], [3000, "money"], [15, "ground_units_cp"], [10000, "soldiers"]]
		},
		breechloaded_infantry: {
			name: "Breechloaded Infantry",
			ap: 18,
			dp: 20,
			mp: 2,
			ip: 5,
			quantity: 10000,
			costs: [[5, "lumber"], [5, "uniforms"], [5, "steel"], [5, "ammunition"], [3, "food"], [3000, "money"], [10, "ground_units_cp"], [10000, "soldiers"]]
		},
		//Great War Ranged Infantry Units
		franc_tireurs: {
			name: "Franc-Tireurs",
			ap: 1,
			dp: 3,
			mp: 6,
			ip: 1,
			quantity: 10000,
			costs: [[1, "wood"], [10000, "soldiers"]]
		},
		bolt_action_infantry: {
			name: "Bolt-Action Infantry",
			ap: 12,
			dp: 20,
			mp: 7,
			ip: 4,
			quantity: 10000,
			costs: [[10, "small_arms"], [2, "steel"], [5, "ammunition"], [2, "food"], [2500, "money"], [10, "ground_units_cp"], [10000, "soldiers"]]
		},
		mg_companies: {
			name: "MG Companies",
			ap: 350,
			dp: 100,
			mp: 1,
			ip: 4,
			quantity: 200,
			costs: [[20, "small_arms"], [10, "ammunition"], [2, "lumber"], [5, "food"], [10000, "money"], [20, "ground_units_cp"], [10000, "soldiers"]]
		},
		great_war_infantry: {
			name: "Great War Infantry",
			ap: 10,
			dp: 25,
			mp: 5,
			ip: 5,
			quantity: 10000,
			costs: [[5, "small_arms"], [5, "ammunition"], [3, "food"], [2000, "money"], [5, "ground_units_cp"], [10000, "soldiers"]]
		},
		shock_troops: {
			name: "Shock Troops",
			ap: 20,
			dp: 5,
			mp: 6,
			ip: 6,
			quantity: 10000,
			costs: [[10, "small_arms"], [10, "lumber"], [5, "steel"], [10, "ammunition"], [6, "food"], [5000, "money"], [20, "ground_units_cp"], [10000, "soldiers"]]
		},
		//Modern Ranged Infantry Units
		freikorps: {
			name: "Freikorps",
			ap: 12,
			dp: 5,
			mp: 2,
			ip: 5,
			quantity: 10000,
			costs: [[5, "small_arms"], [5, "wood"], [2, "steel"], [1, "refined_petroil"], [2, "food"], [1500, "money"], [5, "ground_units_cp"], [10000, "soldiers"]]
		},
		motorised_infantry: {
			name: "Motorised Infantry",
			ap: 15,
			dp: 5,
			mp: 5,
			ip: 7,
			quantity: 10000,
			costs: [[10, "small_arms"], [10, "steel"], [5, "refined_petroil"], [4, "food"], [2500, "money"], [10, "ground_units_cp"], [10000, "soldiers"]]
		},
		paratroopers: {
			name: "Paratroopers",
			ap: 5,
			dp: 3,
			mp: 8,
			ip: 6,
			quantity: 10000,
			costs: [[5, "small_arms"], [1, "artillery"], [5, "lumber"], [5, "refined_petroil"], [5, "food"], [5000, "money"], [20, "ground_units_cp"], [10000, "soldiers"]]
		},
		special_forces: {
			name: "Special Forces",
			ap: 25,
			dp: 3,
			mp: 8,
			ip: 8,
			quantity: 10000,
			costs: [[10, "small_arms"], [1, "artillery"], [5, "steel"], [15, "ammunition"], [5, "refined_petroil"], [10, "food"], [20000, "money"], [40, "ground_units_cp"], [10000, "soldiers"]]
		},
		modern_infantry: {
			name: "Modern Infantry",
			ap: 20,
			dp: 35,
			mp: 4,
			ip: 5,
			quantity: 10000,
			costs: [[5, "small_arms"], [10, "ammunition"], [5, "uniforms"], [5, "steel"], [3, "food"], [3500, "money"], [5, "ground_units_cp"], [10000, "soldiers"]]
		},
		combined_arms_infantry: {
			name: "Combined Arms Infantry",
			ap: 25,
			dp: 50,
			mp: 3,
			ip: 5,
			quantity: 10000,
			costs: [[10, "small_arms"], [10, "ammunition"], [5, "uniforms"], [1, "artillery"], [8, "steel"], [5, "refined_petroil"], [3, "food"], [5000, "money"], [10, "ground_units_cp"], [10000, "soldiers"]]
		},
		contemporary_infantry: {
			name: "Contemporary Infantry",
			ap: 30,
			dp: 65,
			mp: 3,
			ip: 4,
			quantity: 10000,
			costs: [[15, "small_arms"], [10, "ammunition"], [10, "machine_parts"], [5, "uniforms"], [1, "gold"], [5, "food"], [5500, "money"], [20, "ground_units_cp"], [10000, "soldiers"]]
		},
		augmented_infantry: {
			name: "Augmented Infantry",
			ap: 40,
			dp: 15,
			mp: 1,
			ip: 9,
			quantity: 10000,
			costs: [[15, "small_arms"], [10, "ammunition"], [3, "artillery"], [15, "machine_parts"], [5, "gold"], [10, "food"], [7000, "money"], [40, "ground_units_cp"], [10000, "soldiers"]]
		},
		//Mercenaries
		condottieri: {
			name: "Condottieri",
			ap: 2,
			dp: 5,
			mp: 3,
			ip: 1,
			quantity: 10000,
			costs: [[4000, "money"], [10000, "soldiers"]]
		},
		early_modern_mercenaries: {
			name: "Early Modern Mercenaries",
			ap: 4,
			dp: 2,
			mp: 0,
			ip: 2,
			quantity: 10000,
			costs: [[6500, "money"], [10000, "soldiers"]]
		},
		landsknecht: {
			name: "Landsknecht",
			ap: 7,
			dp: 3,
			mp: 1,
			ip: 1,
			quantity: 10000,
			costs: [[7000, "money"], [10000, "soldiers"]]
		},
		swiss_guards: {
			name: "Swiss Guards",
			ap: 2,
			dp: 6,
			mp: 3,
			ip: 2,
			quantity: 10000,
			costs: [[7000, "money"], [10000, "soldiers"]]
		},
		//Cavalry Units
		lance_cavalry: {
			name: "Lance Cavalry",
			ap: 6,
			dp: 2,
			mp: 3,
			ip: 3,
			quantity: 10000,
			costs: [[1, "wood"], [3, "iron"], [3, "food"], [500, "money"], [10, "ground_units_cp"], [10000, "soldiers"]]
		},
		heavy_cavalry: {
			name: "Heavy Cavalry",
			ap: 5,
			dp: 3,
			mp: 1,
			ip: 4,
			quantity: 10000,
			costs: [[2, "lumber"], [2, "steel"], [4, "food"], [1000, "money"], [20, "ground_units_cp"], [10000, "soldiers"]]
		},
		light_cavalry: {
			name: "Light Cavalry",
			ap: 3,
			dp: 1,
			mp: 5,
			ip: 6,
			quantity: 10000,
			costs: [[1, "wood"], [1, "iron"], [2, "food"], [250, "money"], [10, "ground_units_cp"], [10000, "soldiers"]]
		},
		cuirassiers: {
			name: "Cuirassiers",
			ap: 5,
			dp: 2,
			mp: 2,
			ip: 5,
			quantity: 10000,
			costs: [[3, "wood"], [6, "iron"], [1, "lead"], [4, "food"], [1500, "money"], [10, "ground_units_cp"], [10000, "soldiers"]]
		},
		hussars: {
			name: "Hussars",
			ap: 10,
			dp: 3,
			mp: 1,
			ip: 6,
			quantity: 10000,
			costs: [[5, "lumber"], [2, "steel"], [3, "lead"], [7, "food"], [2000, "money"], [20, "ground_units_cp"], [10000, "soldiers"]]
		},
		dragoons: {
			name: "Dragoons",
			ap: 8,
			dp: 4,
			mp: 5,
			ip: 5,
			quantity: 10000,
			costs: [[1, "lumber"], [1, "iron"], [1, "lead"], [3, "food"], [1000, "money"], [15, "ground_units_cp"], [10000, "soldiers"]]
		},
		uhlans: {
			name: "Uhlans",
			ap: 6,
			dp: 3,
			mp: 6,
			ip: 4,
			quantity: 10000,
			costs: [[2, "lumber"], [5, "ammunition"], [1, "steel"], [3, "food"], [800, "money"], [5, "ground_units_cp"], [10000, "soldiers"]]
		},
		mounted_rifles: {
			name: "Mounted Rifles",
			ap: 10,
			dp: 5,
			mp: 5,
			ip: 2,
			quantity: 10000,
			costs: [[5, "small_arms"], [5, "uniforms"], [3, "ammunition"], [5, "food"], [2000, "money"], [10, "ground_units_cp"], [10000, "soldiers"]]
		},
		modern_cavalry: {
			name: "Modern Cavalry",
			ap: 8,
			dp: 3,
			mp: 6,
			ip: 1,
			quantity: 10000,
			costs: [[5, "steel"], [5, "artillery"], [10, "ammunition"], [2, "refined_petroil"], [7, "food"], [3000, "money"], [20, "ground_units_cp"], [10000, "soldiers"]]
		},
		//Artillery Units - Mediaeval to Early Modern
		bombard: {
			name: "Bombards",
			ap: 750,
			dp: 50,
			mp: 0,
			ip: 1,
			quantity: 100,
			costs: [[3, "iron"], [5, "lead"], [3, "food"], [1000, "money"], [5, "ground_artillery_cp"], [20000, "soldiers"]]
		},
		hand_cannons: {
			name: "Hand Cannons",
			ap: 350,
			dp: 100,
			mp: 3,
			ip: 3,
			quantity: 100,
			costs: [[2, "iron"], [1, "lead"], [5, "food"], [700, "money"], [10, "ground_artillery_cp"], [20000, "soldiers"]]
		},
		long_cannons: {
			name: "Long Cannons",
			ap: 1000,
			dp: 35,
			mp: 1,
			ip: 4,
			quantity: 100,
			costs: [[5, "iron"], [2, "lumber"], [3, "lead"], [3, "food"], [1500, "money"], [10, "ground_artillery_cp"], [20000, "soldiers"]]
		},
		field_culverins: {
			name: "Field Culverins",
			ap: 1200,
			dp: 40,
			mp: 1,
			ip: 5,
			quantity: 100,
			costs: [[4, "iron"], [3, "lumber"], [3, "lead"], [3, "food"], [2000, "money"], [15, "ground_artillery_cp"], [20000, "soldiers"]]
		},
		demi_cannon: {
			name: "Demi Cannon",
			ap: 1250,
			dp: 30,
			mp: 1,
			ip: 4,
			quantity: 100,
			costs: [[4, "iron"], [2, "lumber"], [2, "lead"], [3, "food"], [2000, "money"], [15, "ground_artillery_cp"], [20000, "soldiers"]]
		},
		field_cannon: {
			name: "Field Cannon",
			ap: 1500,
			dp: 50,
			mp: 2,
			ip: 5,
			quantity: 100,
			costs: [[5, "steel"], [3, "lead"], [5, "lead"], [5, "sulphur"], [5, "food"], [1500, "money"], [20, "ground_artillery_cp"], [20000, "soldiers"]]
		},
		demi_culverins: {
			name: "Demi Culverins",
			ap: 1300,
			dp: 100,
			mp: 3,
			ip: 4,
			quantity: 100,
			costs: [[5, "steel"], [3, "lumber"], [5, "lead"], [5, "sulphur"], [5, "food"], [2000, "money"], [15, "ground_artillery_cp"], [20000, "soldiers"]]
		},
		minions: {
			name: "Minions",
			ap: 500,
			dp: 600,
			mp: 5,
			ip: 5,
			quantity: 100,
			costs: [[2, "steel"], [2, "lumber"], [5, "lead"], [2, "sulphur"], [5, "food"], [1000, "money"], [5, "ground_artillery_cp"], [20000, "soldiers"]]
		},
		siege_artillery: {
			name: "Siege Artillery",
			ap: 2000,
			dp: 10,
			mp: 0,
			ip: 2,
			quantity: 100,
			costs: [[8, "steel"], [5, "lead"], [10, "sulphur"], [7, "food"], [3500, "money"], [20, "ground_artillery_cp"], [20000, "soldiers"]]
		},
		mysorean_rockets: {
			name: "Mysorean Rockets",
			ap: 450,
			dp: 20,
			mp: 8,
			ip: 2,
			quantity: 100,
			costs: [[2, "steel"], [1, "lead"], [1, "lumber"], [1, "food"], [3000, "money"], [20, "ground_artillery_cp"], [20000, "soldiers"]]
		},
		carronades: {
			name: "Carronades",
			ap: 500,
			dp: 200,
			mp: 2,
			ip: 5,
			quantity: 100,
			costs: [[2, "lumber"], [3, "iron"], [1, "lead"], [2, "food"], [1000, "money"], [5, "ground_artillery_cp"], [20000, "soldiers"]]
		},
		congreve_rockets: {
			name: "Congreve Rockets",
			ap: 600,
			dp: 20,
			mp: 8,
			ip: 3,
			quantity: 100,
			costs: [[2, "lumber"], [4, "steel"], [2, "lead"], [2, "food"], [3000, "money"], [20, "ground_artillery_cp"], [20000, "soldiers"]]
		},
		smoothbores: {
			name: "Smoothbores",
			ap: 1700,
			dp: 50,
			mp: 3,
			ip: 3,
			quantity: 100,
			costs: [[1, "artillery"], [3, "lumber"], [5, "ammunition"], [5, "food"], [2000, "money"], [15, "ground_artillery_cp"], [20000, "soldiers"]]
		},
		rifled_cannons: {
			name: "Rifled Cannons",
			ap: 2000,
			dp: 75,
			mp: 2,
			ip: 4,
			quantity: 100,
			costs: [[1, "artillery"], [2, "lumber"], [5, "ammunition"], [5, "machine_parts"], [5, "food"], [2500, "money"], [10, "ground_artillery_cp"], [20000, "soldiers"]]
		},
		railwayguns: {
			name: "Railwayguns",
			ap: 5000,
			dp: 1000,
			mp: 2,
			ip: 3,
			quantity: 100,
			costs: [[5, "artillery"], [10, "refined_petroil"], [20, "ammunition"], [5, "machine_parts"], [5, "iron"], [20, "food"], [15000, "money"], [40, "ground_artillery_cp"], [20000, "soldiers"]]
		},
		field_artillery: {
			name: "Field Artillery",
			ap: 2500,
			dp: 250,
			mp: 1,
			ip: 2,
			quantity: 100,
			costs: [[1, "artillery"], [10, "ammunition"], [5, "food"], [3000, "money"], [10, "ground_artillery_cp"], [20000, "soldiers"]]
		},
		artillery_howitzers: {
			name: "Artillery Howitzers",
			ap: 3500,
			dp: 300,
			mp: 0,
			ip: 3,
			quantity: 100,
			costs: [[2, "artillery"], [5, "ammunition"], [5, "machine_parts"], [3, "food"], [3000, "money"], [10, "ground_artillery_cp"], [20000, "soldiers"]]
		},
		mobile_artillery: {
			name: "Mobile Artillery",
			ap: 2000,
			dp: 50,
			mp: 5,
			ip: 4,
			quantity: 100,
			costs: [[3, "artillery"], [5, "refined_petroil"], [5, "ammunition"], [10, "machine_parts"], [3, "food"], [3500, "money"], [20, "ground_artillery_cp"], [20000, "soldiers"]]
		},
		//Modern Artillery Units
		long_range_artillery: {
			name: "Long Range Artillery",
			ap: 5000,
			dp: 50,
			mp: 0,
			ip: 2,
			quantity: 100,
			costs: [[4, "artillery"], [10, "ammunition"], [1, "gold"], [10, "machine_parts"], [3, "food"], [5000, "money"], [30, "ground_artillery_cp"], [20000, "soldiers"]]
		},
		modern_howitzers: {
			name: "Modern Howitzers",
			ap: 3500,
			dp: 500,
			mp: 1,
			ip: 4,
			quantity: 100,
			costs: [[2, "artillery"], [10, "ammunition"], [15, "machine_parts"], [5, "food"], [3500, "money"], [10, "ground_artillery_cp"], [20000, "soldiers"]]
		},
		self_propelled_artillery: {
			name: "SP Artillery",
			ap: 2500,
			dp: 100,
			mp: 2,
			ip: 1,
			quantity: 100,
			costs: [[5, "artillery"], [10, "refined_petroil"], [15, "ammunition"], [10, "machine_parts"], [10, "food"], [4000, "money"], [20, "ground_artillery_cp"], [20000, "soldiers"]]
		},
		rocket_artillery: {
			name: "Rocket Artillery",
			ap: 2700,
			dp: 500,
			mp: 4,
			ip: 2,
			quantity: 100,
			costs: [[3, "artillery"], [5, "refined_petroil"], [10, "ammunition"], [5, "food"], [4000, "money"], [20, "ground_artillery_cp"], [20000, "soldiers"]]
		},
		railguns: {
			name: "Railguns",
			ap: 5000,
			dp: 250,
			mp: 1,
			ip: 4,
			quantity: 100,
			costs: [[5, "artillery"], [20, "machine_parts"], [15, "ammunition"], [10, "refined_petroil"], [5, "food"], [7000, "money"], [40, "ground_artillery_cp"], [20000, "soldiers"]]
		},
		directed_heat_weapons: {
			name: "Directed Heat Weapons",
			ap: 5500,
			dp: 500,
			mp: 2,
			ip: 5,
			quantity: 100,
			costs: [[6, "artillery"], [25, "machine_parts"], [5, "ammunition"], [10, "steel"], [5, "refined_petroil"], [3, "food"], [10000, "money"], [40, "ground_artillery_cp"], [20000, "soldiers"]]
		},
		//Ground Vehicles - Armoured Cars
		armoured_cars: {
			name: "Armoured Cars",
			ap: 1200,
			dp: 2000,
			mp: 6,
			ip: 1,
			quantity: 50,
			costs: [[3, "steel"], [2, "iron"], [5, "refined_petroil"], [5, "small_arms"], [10, "ammunition"], [4, "food"], [2000, "money"], [5, "ground_vehicles_cp"], [35000, "soldiers"]]
		},
		armoured_personnel_carriers: {
			name: "Armoured Personnel Carriers",
			ap: 1500,
			dp: 2000,
			mp: 5,
			ip: 2,
			quantity: 50,
			costs: [[5, "steel"], [3, "refined_petroil"], [3, "small_arms"], [5, "ammunition"], [5, "food"], [1500, "money"], [5, "ground_vehicles_cp"], [35000, "soldiers"]]
		},
		half_tracks: {
			name: "Half-Tracks",
			ap: 1000,
			dp: 1500,
			mp: 3,
			ip: 3,
			quantity: 50,
			costs: [[4, "steel"], [2, "small_arms"], [3, "refined_petroil"], [5, "ammunition"], [5, "food"], [1000, "money"], [5, "ground_vehicles_cp"], [35000, "soldiers"]]
		},
		troop_carriers: {
			name: "Troop Carriers",
			ap: 500,
			dp: 1000,
			mp: 7,
			ip: 1,
			quantity: 50,
			costs: [[5, "steel"], [2, "small_arms"], [5, "ammunition"], [5, "refined_petroil"], [3, "food"], [1000, "money"], [5, "ground_vehicles_cp"], [35000, "soldiers"]]
		},
		modern_armoured_cars: {
			name: "Modern Armoured Cars",
			ap: 2000,
			dp: 3500,
			mp: 7,
			ip: 3,
			quantity: 50,
			costs: [[10, "steel"], [1, "artillery"], [3, "small_arms"], [5, "ammunition"], [5, "refined_petroil"], [5, "food"], [5000, "money"], [10, "ground_vehicles_cp"], [35000, "soldiers"]]
		},
		modern_apcs: {
			name: "Modern APCs",
			ap: 1500,
			dp: 4000,
			mp: 3,
			ip: 5,
			quantity: 50,
			costs: [[10, "steel"], [5, "machine_parts"], [2, "small_arms"], [5, "refined_petroil"], [5, "food"], [2500, "money"], [10, "ground_vehicles_cp"], [35000, "soldiers"]]
		},
		//Ground Vehicles - Tanks from WW1 to WW2
		landship: {
			name: "Landship",
			ap: 2500,
			dp: 700,
			mp: 1,
			ip: 1,
			quantity: 50,
			costs: [[7, "steel"], [1, "artillery"], [5, "small_arms"], [5, "machine_parts"], [10, "ammunition"], [5, "refined_petroil"], [5, "food"], [3000, "money"], [20, "ground_vehicles_cp"], [35000, "soldiers"]]
		},
		light_tanks: {
			name: "Light Tanks",
			ap: 1500,
			dp: 350,
			mp: 3,
			ip: 4,
			quantity: 50,
			costs: [[5, "steel"], [5, "small_arms"], [5, "ammunition"], [3, "machine_parts"], [3, "refined_petroil"], [4, "food"], [2500, "money"], [10, "ground_vehicles_cp"], [35000, "soldiers"]]
		},
		interwar_tanks: {
			name: "Interwar Tanks",
			ap: 1800,
			dp: 500,
			mp: 2,
			ip: 3,
			quantity: 50,
			costs: [[5, "steel"], [1, "artillery"], [5, "small_arms"], [5, "machine_parts"], [10, "ammunition"], [7, "refined_petroil"], [5, "food"], [3000, "money"], [10, "ground_vehicles_cp"], [35000, "soldiers"]]
		},
		medium_tanks: {
			name: "Medium Tanks",
			ap: 2000,
			dp: 1200,
			mp: 1,
			ip: 5,
			quantity: 50,
			costs: [[7, "steel"], [1, "artillery"], [2, "small_arms"], [10, "machine_parts"], [7, "ammunition"], [5, "refined_petroil"], [3, "food"], [5000, "money"], [15, "ground_vehicles_cp"], [35000, "soldiers"]]
		},
		heavy_tanks: {
			name: "Heavy Tanks",
			ap: 3000,
			dp: 1500,
			mp: 0,
			ip: 1,
			quantity: 50,
			costs: [[12, "steel"], [3, "artillery"], [5, "small_arms"], [12, "machine_parts"], [5, "ammunition"], [10, "refined_petroil"], [3, "food"], [8000, "money"], [20, "ground_vehicles_cp"], [35000, "soldiers"]]
		},
		tank_destroyers: {
			name: "Tank Destroyers",
			ap: 3500,
			dp: 300,
			mp: 5,
			ip: 2,
			quantity: 50,
			costs: [[5, "steel"], [1, "artillery"], [5, "machine_parts"], [5, "ammunition"], [3, "refined_petroil"], [1, "food"], [3000, "money"], [10, "ground_vehicles_cp"], [35000, "soldiers"]]
		},
		//Ground Vehicles - Modern Tanks
		improved_medium_tanks: {
			name: "Improved Medium Tanks",
			ap: 2500,
			dp: 1500,
			mp: 2,
			ip: 3,
			quantity: 50,
			costs: [[10, "steel"], [2, "artillery"], [10, "machine_parts"], [5, "small_arms"], [10, "ammunition"], [5, "refined_petroil"], [3, "food"], [4000, "money"], [15, "ground_vehicles_cp"], [35000, "soldiers"]]
		},
		modern_tanks: {
			name: "Modern Tanks",
			ap: 4000,
			dp: 1800,
			mp: 3,
			ip: 4,
			quantity: 50,
			costs: [[10, "steel"], [2, "artillery"], [5, "small_arms"], [12, "machine_parts"], [10, "ammunition"], [10, "refined_petroil"], [3, "food"], [6000, "money"], [20, "ground_vehicles_cp"], [35000, "soldiers"]]
		},
		main_battle_tanks: {
			name: "Main Battle Tanks",
			ap: 5000,
			dp: 2500,
			mp: 2,
			ip: 5,
			quantity: 50,
			costs: [[15, "steel"], [3, "artillery"], [5, "small_arms"], [15, "machine_parts"], [10, "ammunition"], [3, "gold"], [5, "refined_petroil"], [3, "food"], [8000, "money"], [20, "ground_vehicles_cp"], [35000, "soldiers"]]
		},
		modern_mbts: {
			name: "Modern MBTs",
			ap: 7000,
			dp: 3500,
			mp: 1,
			ip: 4,
			quantity: 50,
			costs: [[15, "steel"], [3, "artillery"], [5, "small_arms"], [15, "machine_parts"], [10, "ammunition"], [5, "gold"], [5, "refined_petroil"], [5, "food"], [10000, "money"], [20, "ground_vehicles_cp"], [35000, "soldiers"]]
		},
		multirole_mbts: {
			name: "Multirole MBTs",
			ap: 8500,
			dp: 4000,
			mp: 3,
			ip: 4,
			quantity: 50,
			costs: [[20, "steel"], [3, "artillery"], [10, "small_arms"], [10, "copper"], [25, "machine_parts"], [15, "ammunition"], [10, "gold"], [3, "iron"], [5, "lead"], [7, "refined_petroil"], [7, "food"], [12000, "money"], [40, "ground_vehicles_cp"], [35000, "soldiers"]]
		},
		//Naval Units
		caravels: {
			name: "Caravels",
			ap: 50,
			dp: 100,
			mp: 8,
			ip: 1,
			quantity: 5,
			costs: [[2, "lumber"], [1, "iron"], [5, "food"], [500, "money"], [5, "naval_units_cp"], [500, "soldiers"]]
		},
		galleons: {
			name: "Galleons",
			ap: 500,
			dp: 250,
			mp: 2,
			ip: 3,
			quantity: 1,
			costs: [[3, "lumber"], [2, "iron"], [2, "lead"], [7, "food"], [1000, "money"], [10, "naval_units_cp"], [400, "soldiers"]]
		},
		men_of_war: {
			name: "Men-of-War",
			ap: 650,
			dp: 300,
			mp: 2,
			ip: 4,
			quantity: 1,
			costs: [[5, "lumber"], [3, "iron"], [3, "lead"], [7, "food"], [1500, "money"], [15, "naval_units_cp"], [500, "soldiers"]]
		},
		ships_of_the_line: {
			name: "Ships-of-the-Line",
			ap: 600,
			dp: 400,
			mp: 3,
			ip: 4,
			quantity: 1,
			costs: [[5, "lumber"], [3, "iron"], [3, "lead"], [7, "food"], [2000, "money"], [15, "naval_units_cp"], [800, "soldiers"]]
		},
		first_rate: {
			name: "First Rates",
			ap: 850,
			dp: 350,
			mp: 3,
			ip: 5,
			quantity: 1,
			costs: [[7, "lumber"], [3, "iron"], [5, "lead"], [7, "food"], [2500, "money"], [20, "naval_units_cp"], [850, "soldiers"]]
		},
		frigates: {
			name: "Frigates",
			ap: 500,
			dp: 350,
			mp: 4,
			ip: 3,
			quantity: 1,
			costs: [[5, "lumber"], [2, "iron"], [3, "lead"], [4, "food"], [1500, "money"], [10, "naval_units_cp"], [600, "soldiers"]]
		},
		steamboats: {
			name: "Steamboats",
			ap: 350,
			dp: 600,
			mp: 6,
			ip: 1,
			quantity: 1,
			costs: [[2, "lumber"], [1, "artillery"], [5, "iron"], [2, "lead"], [5, "food"], [3000, "money"], [10, "naval_units_cp"], [100, "soldiers"]]
		},
		clippers: {
			name: "Clippers",
			ap: 150,
			dp: 300,
			mp: 8,
			ip: 3,
			quantity: 5,
			costs: [[3, "lumber"], [1, "iron"], [7, "food"], [1500, "money"], [5, "naval_units_cp"], [250, "soldiers"]]
		},
		gunboats: {
			name: "Gunboats",
			ap: 600,
			dp: 250,
			mp: 4,
			ip: 4,
			quantity: 5,
			costs: [[5, "iron"], [1, "artillery"], [5, "uniforms"], [2, "ammunition"], [6, "food"], [2000, "money"], [10, "naval_units_cp"], [125, "soldiers"]]
		},
		ironclads: {
			name: "Ironclads",
			ap: 1200,
			dp: 1800,
			mp: 3,
			ip: 5,
			quantity: 1,
			costs: [[10, "iron"], [3, "artillery"], [5, "uniforms"], [5, "ammunition"], [3, "coal"], [5, "food"], [5000, "money"], [20, "naval_units_cp"], [800, "soldiers"]]
		},
		breastwork_monitors: {
			name: "Breastwork Monitors",
			ap: 1500,
			dp: 2000,
			mp: 3,
			ip: 4,
			quantity: 1,
			cruiser: true,
			costs: [[12, "iron"], [4, "artillery"], [5, "uniforms"], [10, "ammunition"], [3, "coal"], [3, "food"], [5500, "money"], [30, "naval_units_cp"], [800, "soldiers"]]
		},
		destroyers: {
			name: "Destroyers",
			ap: 800,
			dp: 1200,
			mp: 5,
			ip: 4,
			quantity: 5,
			destroyer: true,
			costs: [[8, "steel"], [4, "artillery"], [10, "uniforms"], [10, "ammunition"], [3, "refined_petroil"], [5, "food"], [3000, "money"], [10, "naval_units_cp"], [525, "soldiers"]]
		},
		cruisers: {
			name: "Cruisers",
			ap: 2000,
			dp: 1500,
			mp: 4,
			ip: 5,
			quantity: 1,
			cruiser: true,
			costs: [[6, "steel"], [1, "artillery"], [10, "uniforms"], [15, "ammunition"], [5, "refined_petroil"], [7, "food"], [5000, "money"], [15, "naval_units_cp"], [500, "soldiers"]]
		},
		pre_dreadnoughts: {
			name: "Pre-Dreadoughts",
			ap: 2000,
			dp: 3500,
			mp: 2,
			ip: 6,
			quantity: 1,
			costs: [[15, "steel"], [5, "machine_parts"], [16, "ammunition"], [5, "refined_petroil"], [8, "food"], [7000, "money"], [20, "naval_units_cp"], [800, "soldiers"]]
		},
		dreadnoughts: {
			name: "Dreadnoughts",
			ap: 3500,
			dp: 4000,
			mp: 1,
			ip: 5,
			quantity: 1,
			costs: [[18, "steel"], [10, "machine_parts"], [20, "ammunition"], [5, "iron"], [5, "refined_petroil"], [9, "food"], [10000, "money"], [40, "naval_units_cp"], [800, "soldiers"]]
		},
		torpedo_boats: {
			name: "Torpedo Boats",
			ap: 2000,
			dp: 50,
			mp: 6,
			ip: 5,
			quantity: 5,
			costs: [[3, "steel"], [2, "iron"], [5, "ammunition"], [3, "refined_petroil"], [5, "food"], [1500, "money"], [5, "naval_units_cp"], [70, "soldiers"]]
		},
		battlecruisers: {
			name: "Battlecruisers",
			ap: 3500,
			dp: 2000,
			mp: 4,
			ip: 6,
			quantity: 1,
			cruiser: true,
			costs: [[5, "steel"], [5, "artillery"], [10, "machine_parts"], [10, "ammunition"], [4, "iron"], [3, "lead"], [7, "refined_petroil"], [7, "food"], [6500, "money"], [20, "naval_units_cp"], [1000, "soldiers"]]
		},
		submarines: {
			name: "Submarines",
			ap: 17500,
			dp: 500,
			mp: 8,
			ip: 4,
			quantity: 10,
			submarine: true,
			costs: [[3, "steel"], [5, "machine_parts"], [1, "artillery"], [2, "small_arms"], [5, "ammunition"], [3, "petroil"], [8, "food"], [2000, "money"], [10, "naval_units_cp"], [175, "soldiers"]]
		},
		air_carriers: {
			name: "Air Carriers",
			ap: 1500,
			dp: 2000,
			mp: 2,
			ip: 1,
			quantity: 1,
			carrier_capacity: 20,
			costs: [[12, "steel"], [5, "small_arms"], [10, "lumber"], [10, "ammunition"], [10, "refined_petroil"], [10, "food"], [9000, "money"], [40, "naval_units_cp"], [468, "soldiers"]]
		},
		battleships: {
			name: "Battleships",
			ap: 5000,
			dp: 7500,
			mp: 3,
			ip: 5,
			quantity: 5,
			costs: [[15, "steel"], [7, "machine_parts"], [8, "artillery"], [10, "small_arms"], [5, "lumber"], [5, "lead"], [7, "refined_petroil"], [12, "food"], [8000, "money"], [20, "naval_units_cp"], [2700, "soldiers"]]
		},
		aircraft_carriers: {
			name: "Aircraft Carriers",
			ap: 1200,
			dp: 2200,
			mp: 2,
			ip: 1,
			quantity: 1,
			carrier_capacity: 35,
			costs: [[20, "steel"], [15, "lumber"], [10, "machine_parts"], [5, "artillery"], [20, "small_arms"], [20, "ammunition"], [1, "gold"], [10, "refined_petroil"], [10, "food"], [10000, "money"], [40, "naval_units_cp"], [5828, "soldiers"]]
		},
		nuclear_submarines: {
			name: "Nuclear Submarines",
			ap: 22500,
			dp: 5500,
			mp: 6,
			ip: 2,
			quantity: 1,
			submarine: true,
			costs: [[15, "steel"], [5, "artillery"], [15, "machine_parts"], [10, "ammunition"], [3, "gold"], [7, "refined_petroil"], [10, "food"], [5000, "money"], [30, "naval_units_cp"], [134, "soldiers"]]
		},
		supercarriers: {
			name: "Supercarriers",
			ap: 2000,
			dp: 3500,
			mp: 1,
			ip: 1,
			quantity: 1,
			carrier_capacity: 50,
			costs: [[25, "steel"], [5, "artillery"], [10, "machine_parts"], [25, "ammunition"], [10, "gold"], [10, "refined_petroil"], [15, "food"], [15000, "money"], [40, "naval_units_cp"], [6012, "soldiers"]]
		},
		modern_cruisers: {
			name: "Modern Cruisers",
			ap: 3500,
			dp: 3000,
			mp: 4,
			ip: 5,
			quantity: 1,
			cruiser: true,
			costs: [[20, "steel"], [4, "artillery"], [10, "machine_parts"], [20, "ammunition"], [5, "gold"], [10, "copper"], [7, "refined_petroil"], [10, "food"], [5000, "money"], [15, "naval_units_cp"], [500, "soldiers"]]
		},
		modern_frigates: {
			name: "Modern Frigates",
			ap: 2500,
			dp: 3500,
			mp: 5,
			ip: 4,
			quantity: 1,
			destroyer: true,
			costs: [[15, "steel"], [15, "machine_parts"], [10, "ammunition"], [3, "gold"], [5, "lead"], [5, "refined_petroil"], [7, "food"], [3500, "money"], [10, "naval_units_cp"], [200, "soldiers"]]
		},
		railgun_cruisers: {
			name: "Railgun Cruisers",
			ap: 5500,
			dp: 2800,
			mp: 3,
			ip: 4,
			quantity: 1,
			cruiser: true,
			costs: [[25, "steel"], [25, "machine_parts"], [5, "ammunition"], [15, "gold"], [10, "copper"], [5, "lead"], [10, "refined_petroil"], [15, "food"], [15000, "money"], [20, "naval_units_cp"], [500, "soldiers"]]
		},
		//Air Units - Pre-WW1
		reconaissance_balloons: {
			name: "Reconaissance",
			ap: 20,
			dp: 200,
			mp: 8,
			ip: 1,
			quantity: 20,
			can_bomb_cities: false,
			costs: [[1, "lumber"], [1, "coal"], [500, "money"], [5, "aeroplanes_cp"], [25000, "soldiers"]]
		},
		dirigibles: {
			name: "Dirigibles",
			ap: 60,
			dp: 250,
			mp: 6,
			ip: 2,
			quantity: 20,
			costs: [[3, "lumber"], [1, "coal"], [1, "food"], [1000, "money"], [10, "aeroplanes_cp"], [25000, "soldiers"]]
		},
		zeppelins: {
			name: "Zeppelins",
			ap: 500,
			dp: 350,
			mp: 6,
			ip: 3,
			quantity: 20,
			costs: [[5, "steel"], [2, "lumber"], [3, "coal"], [3, "food"], [2500, "money"], [20, "aeroplanes_cp"], [25000, "soldiers"]]
		},
		//Air Units - WW1 and Interwar
		biplanes: {
			name: "Biplanes",
			ap: 500,
			dp: 900,
			mp: 2,
			ip: 2,
			quantity: 20,
			costs: [[5, "lumber"], [3, "steel"], [1, "small_arms"], [2, "machine_parts"], [2, "ammunition"], [1, "refined_petroil"], [1000, "money"], [10, "aeroplanes_cp"], [25000, "soldiers"]]
		},
		improved_biplanes: {
			name: "Improved Biplanes",
			ap: 550,
			dp: 1100,
			mp: 3,
			ip: 3,
			quantity: 20,
			costs: [[5, "lumber"], [5, "steel"], [2, "small_arms"], [2, "machine_parts"], [3, "ammunition"], [1, "refined_petroil"], [1250, "money"], [15, "aeroplanes_cp"], [25000, "soldiers"]]
		},
		monoplane_fighters: {
			name: "Monoplane Fighters",
			ap: 550,
			dp: 1100,
			mp: 4,
			ip: 3,
			quantity: 20,
			costs: [ [7, "steel"], [3, "lumber"], [3, "small_arms"], [4, "machine_parts"], [3, "ammunition"], [2, "refined_petroil"], [1500, "money"], [15, "aeroplanes_cp"], [25000, "soldiers"]]
		},
		propeller_fighters: {
			name: "Propeller Fighters",
			ap: 600,
			dp: 1500,
			mp: 5,
			ip: 3,
			quantity: 20,
			costs: [[5, "steel"], [2, "lumber"], [3, "small_arms"], [5, "machine_parts"], [3, "ammunition"], [3, "refined_petroil"], [1500, "money"], [20, "aeroplanes_cp"], [25000, "soldiers"]]
		},
		//Air Units - Fighter Aeroplanes
		fighters: {
			name: "Fighters",
			ap: 600,
			dp: 1800,
			mp: 5,
			ip: 3,
			quantity: 20,
			costs: [[5, "aluminium"], [3, "lumber"], [3, "small_arms"], [5, "machine_parts"], [5, "ammunition"], [3, "refined_petroil"], [2000, "money"], [20, "aeroplanes_cp"], [25000, "soldiers"]]
		},
		advanced_fighters: {
			name: "Advanced Fighters",
			ap: 700,
			dp: 2000,
			mp: 6,
			ip: 2,
			quantity: 20,
			costs: [[10, "aluminium"], [7, "machine_parts"], [5, "small_arms"], [3, "lumber"], [8, "ammunition"], [5, "refined_petroil"], [2500, "money"], [25, "aeroplanes_cp"], [25000, "soldiers"]]
		},
		rocket_interceptors: {
			name: "Rocket Interceptors",
			ap: 550,
			dp: 2200,
			mp: 7,
			ip: 1,
			quantity: 20,
			costs: [[6, "aluminium"], [10, "machine_parts"], [4, "small_arms"], [3, "iron"], [5, "ammunition"], [10, "refined_petroil"], [4000, "money"], [30, "aeroplanes_cp"], [25000, "soldiers"]]
		},
		jet_fighters: {
			name: "Jet Fighters",
			ap: 850,
			dp: 2500,
			mp: 6,
			ip: 5,
			quantity: 20,
			costs: [[10, "aluminium"], [8, "machine_parts"], [5, "small_arms"], [12, "ammunition"], [6, "copper"], [2, "gold"], [5, "iron"], [10, "ammunition"], [7, "refined_petroil"], [4000, "money"], [20, "aeroplanes_cp"], [25000, "soldiers"]]
		},
		multirole_fighters: {
			name: "Multirole Fighters",
			ap: 1000,
			dp: 3000,
			mp: 6,
			ip: 4,
			quantity: 20,
			costs: [[12, "aluminium"], [15, "machine_parts"], [10, "small_arms"], [15, "ammunition"], [8, "copper"], [3, "gold"], [5, "refined_petroil"], [5000, "money"], [20, "aeroplanes_cp"], [25000, "soldiers"]]
		},
		drones: {
			name: "Drones",
			ap: 1200,
			dp: 50,
			mp: 2,
			ip: 5,
			quantity: 20,
			costs: [[5, "aluminium"], [5, "steel"], [10, "ammunition"], [4, "gold"], [2, "refined_petroil"], [10000, "money"], [5, "aeroplanes_cp"], [25000, "soldiers"]]
		},
		stealth_fighters: {
			name: "Stealth Fighters",
			ap: 1100,
			dp: 3200,
			mp: 8,
			ip: 3,
			quantity: 20,
			costs: [[20, "aluminium"], [20, "machine_parts"], [10, "copper"], [15, "gold"], [20, "ammunition"], [4, "refined_petroil"], [8000, "money"], [30, "aeroplanes_cp"], [25000, "soldiers"]]
		},
		ai_multirole_fighters: {
			name: "AI Multirole Fighters",
			ap: 1500,
			dp: 3500,
			mp: 9,
			ip: 4,
			quantity: 20,
			costs: [[15, "aluminium"], [30, "machine_parts"], [15, "copper"], [20, "gold"], [15, "ammunition"], [9, "refined_petroil"], [12000, "money"], [50, "aeroplanes_cp"], [25000, "soldiers"]]
		},
		//Air Units - Bombers
		early_bombers: {
			name: "Early Bombers",
			ap: 900,
			dp: 50,
			mp: 1,
			ip: 2,
			quantity: 20,
			costs: [[7, "lumber"], [5, "steel"], [3, "small_arms"], [5, "machine_parts"], [5, "ammunition"], [3, "refined_petroil"], [2000, "money"], [20, "aeroplanes_cp"], [25000, "soldiers"]]
		},
		monoplane_bombers: {
			name: "Monoplane Bombers",
			ap: 1200,
			dp: 75,
			mp: 1,
			ip: 2,
			quantity: 20,
			costs: [[10, "steel"], [8, "lumber"], [3, "small_arms"], [6, "machine_parts"], [7, "ammunition"], [5, "refined_petroil"], [2500, "money"], [20, "aeroplanes_cp"], [25000, "soldiers"]]
		},
		interwar_bombers: {
			name: "Interwar Bombers",
			ap: 1250,
			dp: 150,
			mp: 2,
			ip: 3,
			quantity: 20,
			costs: [[12, "aluminium"], [2, "steel"], [6, "small_arms"], [8, "machine_parts"], [5, "lumber"], [10, "ammunition"], [5, "refined_petroil"], [3000, "money"], [25, "aeroplanes_cp"], [25000, "soldiers"]]
		},
		bombers: {
			name: "Bombers",
			ap: 1500,
			dp: 250,
			mp: 2,
			ip: 5,
			quantity: 20,
			costs: [[15, "aluminium"], [3, "steel"], [8, "small_arms"], [8, "machine_parts"], [15, "ammunition"], [7, "refined_petroil"], [5000, "money"], [25, "aeroplanes_cp"], [25000, "soldiers"]]
		},
		strategic_bombers: {
			name: "Strategic Bombers",
			ap: 1700,
			dp: 500,
			mp: 2,
			ip: 5,
			quantity: 20,
			costs: [[15, "aluminium"], [5, "steel"], [10, "small_arms"], [10, "machine_parts"], [5, "copper"], [3, "gold"], [20, "ammunition"], [7, "refined_petroil"], [6500, "money"], [30, "aeroplanes_cp"], [25000, "soldiers"]]
		},
		stealth_bombers: {
			name: "Stealth Bombers",
			ap: 2500,
			dp: 700,
			mp: 5,
			ip: 4,
			quantity: 20,
			costs: [[25, "aluminium"], [5, "steel"], [15, "machine_parts"], [10, "copper"], [10, "gold"], [15, "ammunition"], [10, "refined_petroil"], [12000, "money"], [50, "aeroplanes_cp"], [25000, "soldiers"]]
		},
		ai_bombers: {
			name: "AI Bombers",
			ap: 2800,
			dp: 1000,
			mp: 5,
			ip: 6,
			quantity: 20,
			costs: [[20, "aluminium"], [7, "steel"], [18, "machine_parts"], [12, "copper"], [5, "gold"], [10, "ammunition"], [5, "refined_petroil"], [10000, "money"], [50, "aeroplanes_cp"], [25000, "soldiers"]]
		},
		//Air Units - Helicopters
		scout_helicopters: {
			name: "Scout Helicopters",
			ap: 200,
			dp: 50,
			mp: 8,
			ip: 1,
			quantity: 20,
			helicopter: true,
			can_bomb_cities: false,
			costs: [[3, "aluminium"], [1, "steel"], [1, "small_arms"], [3, "machine_parts"], [1, "refined_petroil"], [1000, "money"], [5, "aeroplanes_cp"], [25000, "soldiers"]]
		},
		multirole_helicopters: {
			name: "Multirole Helicopters",
			ap: 1400,
			dp: 150,
			mp: 5,
			ip: 3,
			quantity: 20,
			helicopter: true,
			can_bomb_cities: false,
			costs: [[5, "aluminium"], [3, "steel"], [5, "small_arms"], [5, "machine_parts"], [8, "ammunition"], [2, "refined_petroil"], [3000, "money"], [10, "aeroplanes_cp"], [25000, "soldiers"]]
		},
		modern_helicopters: {
			name: "Modern Helicopters",
			ap: 1800,
			dp: 300,
			mp: 6,
			ip: 3,
			quantity: 20,
			helicopter: true,
			can_bomb_cities: false,
			costs: [[7, "aluminium"], [2, "steel"], [6, "small_arms"], [8, "machine_parts"], [8, "ammunition"], [3, "gold"], [2, "refined_petroil"], [3500, "money"], [10, "aeroplanes_cp"], [25000, "soldiers"]]
		},
		//Air Units - Other
		torpedo_bombers: {
			name: "Torpedo Bombers",
			ap: 2700,
			dp: 500,
			mp: 4,
			ip: 5,
			quantity: 20,
			can_bomb_cities: false,
			costs: [[5, "aluminium"], [5, "ammunition"], [3, "lumber"], [3, "refined_petroil"], [2500, "money"], [10, "aeroplanes_cp"], [25000, "soldiers"]]
		},
		naval_bombers: {
			name: "Naval Bombers",
			ap: 2000,
			dp: 550,
			mp: 7,
			ip: 3,
			quantity: 20,
			can_bomb_cities: false,
			costs: [[6, "aluminium"], [2, "lumber"], [3, "ammunition"], [3, "refined_petroil"], [1500, "money"], [10, "aeroplanes_cp"], [25000, "soldiers"]]
		},
		//Colonists
		conquistadors: {
			name: "Conquistadors",
			ap: 0,
			dp: 0,
			mp: 0,
			ip: 0,
			quantity: 1,
			colonise_provinces: 1,
			costs: [[1, "wood"], [2, "lead"], [3, "iron"], [5, "food"], [2500, "money"], [1000, "soldiers"]]
		},
		settlers: {
			name: "Settlers",
			ap: 0,
			dp: 0,
			mp: 0,
			ip: 0,
			quantity: 1,
			colonise_provinces: 3,
			costs: [[3, "wood"], [2, "lead"], [5, "iron"], [10, "food"], [5000, "money"], [2500, "soldiers"]]
		},
		magistrates: {
			name: "Magistrates",
			ap: 0,
			dp: 0,
			mp: 0,
			ip: 0,
			quantity: 1,
			colonise_provinces: 5,
			costs: [[10, "wood"], [5, "lead"], [5, "gold"], [10, "iron"], [20, "food"], [6500, "money"], [5000, "soldiers"]]
		},
		colonists: {
			name: "Colonists",
			ap: 0,
			dp: 0,
			mp: 0,
			ip: 0,
			quantity: 1,
			colonise_provinces: 7,
			costs: [[20, "wood"], [7, "lead"], [5, "gold"], [15, "iron"], [40, "food"], [7500, "money"], [4000, "soldiers"]]
		},
		magnates: {
			name: "Magnates",
			ap: 0,
			dp: 0,
			mp: 0,
			ip: 0,
			quantity: 1,
			colonise_provinces: 9,
			costs: [[25, "wood"], [10, "lead"], [5, "gold"], [10, "steel"], [50, "food"], [10000, "money"], [7000, "soldiers"]]
		},
		administrators: {
			name: "Administrators",
			ap: 0,
			dp: 0,
			mp: 0,
			ip: 0,
			quantity: 1,
			colonise_provinces: 12,
			costs: [[10, "wood"], [20, "lead"], [10, "gold"], [20, "steel"], [10, "petroil"], [100, "food"], [15000, "money"], [10000, "soldiers"]]
		},
		bureaucrats: {
			name: "Bureaucrats",
			ap: 0,
			dp: 0,
			mp: 0,
			ip: 0,
			quantity: 1,
			colonise_provinces: 15,
			costs: [[30, "wood"], [50, "lead"], [20, "gold"], [30, "steel"], [5, "iron"], [15, "petroil"], [150, "food"], [20000, "money"], [20000, "soldiers"]]
		}
	},
	
	tech_categories: ["military_technology", "naval_technology", "economic_technology", "administrative_technology"], //"cultural_technology", add later
	technology: {
		//Military Technology
		improved_metallurgy: {
			icon: "<:lead:716791408840671322>",
			description: "By increasing the purity and mixture of our compounds and alloys, our craftsmen will be able to forge more powerful weapons as the winds of the Gunpowder Age sweep our continent.",
			research_cost: 20,
			year: 1385,
			category: "military_technology",
			modifiers: [
				"Enables **Artillery Encampments**",
				"**+5%** Production Efficiency",
				"**+5%** Artillery AP"
			],
			unlocks: function (usr) {
				usr.available_buildings.push("artillery_encampments");
				usr.modifiers.production_efficiency = usr.modifiers.production_efficiency + 0.05;
				usr.modifiers.ground_artillery_ap = usr.modifiers.ground_artillery_ap + 0.05;
			}
		},
		standing_army: {
			icon: "<:manpower:716817688705499177>",
			description: "The days of calling upon a feudal levee are gone, we should seek to maintain a standing army for our burgeoning state.",
			research_cost: 20,
			year: 1430,
			category: "military_technology",
			modifiers: [
				"**+10%** National Manpower"
			],
			unlocks: function (usr) {
				usr.modifiers.national_manpower = usr.modifiers.national_manpower + 0.10;
			}
		},
		lance_cavalry: {
			icon: "<:soldiers:732730754592669702>",
			description: "By better equipping our knights with lances, we can wreak devastating havoc when smashing into enemy lines in mass cavalry formations.",
			research_cost: 20,
			year: 1380,
			category: "military_technology",
			modifiers: [
				"Enables **Lance Cavalry**",
				"**+2%** Training Cost",
				"Obsoletes **Knights**"
			],
			unlocks: function (usr) {
				usr.available_units.push("lance_cavalry");
				deleteElement(usr.available_units, "knights", [usr, "obsolete_units"]);
				usr.modifiers.training_cost = usr.modifiers.training_cost + 0.02;
			}
		},
		condottieri: {
			icon: "<:colonisation:716821194891853826>",
			description: "Condottieri, originating as mercenaries from the Latin Peninsulae, are mercenaries of great renown that can bolster our military quickly in times of war - for a price of course.",
			research_cost: 20,
			year: 1339,
			category: "military_technology",
			modifiers: [
				"Enables **Condottieri**",
				"**+5%** National Manpower"
			],
			unlocks: function (usr) {
				usr.available_units.push("condottieri");
				usr.modifiers.national_manpower = usr.modifiers.national_manpower + 0.05;
			}
		},
		the_bombard: {
			icon: "<:artillery:716821195055431681>",
			description: "A terrifying new gunpowder weapon, bombards allow us to tear holes in castles and besiege cities with ease.",
			prerequisite_techs: ["improved_metallurgy"],
			research_cost: 50,
			year: 1385,
			category: "military_technology",
			modifiers: [
				"Enables **Bombard**",
				"**+3%** Unit Cost"
			],
			unlocks: function (usr) {
				usr.available_units.push("bombard");
				usr.modifiers.unit_cost = usr.modifiers.unit_cost + 0.03;
			}
		},
		pike_and_square: {
			icon: "<:active_personnel:716820390474940426>",
			description: "Pikemen have proven to be our best defence from cavalry amongst our mercenaries -- we should look into new ways of arranging our troops.",
			prerequisite_techs: ["standing_army"],
			research_cost: 50,
			year: 1302,
			category: "military_technology",
			modifiers: [
				"Enables **Pike and Square**",
				"Obsoletes **Spearmen**"
			],
			unlocks: function (usr) {
				deleteElement(usr.available_units, "spearmen", [usr, "obsolete_units"]);
				usr.available_units.push("pike_and_square");
			}
		},
		heavy_cavalry: {
			icon: "<:soldiers:732730754592669702>",
			description: "Heavy cavalry are units with armoured horses capable of wielding even the heaviest of infantry weapons.",
			prerequisite_techs: ["lance_cavalry"],
			research_cost: 50,
			year: 1000,
			category: "military_technology",
			modifiers: [
				"Enables **Heavy Cavalry**"
			],
			unlocks: function (usr) {
				usr.available_units.push("heavy_cavalry");
			}
		},
		hand_cannons: {
			icon: "<:manpower:716817688705499177>",
			description: "Hand cannons were a primitive precursor to early modern firearms that had a devastating impact on enemies at the price of a brutally long reload speed.",
			prerequisite_techs: ["the_bombard"],
			research_cost: 75,
			year: 1326,
			category: "military_technology",
			modifiers: [
				"Enables **Hand Cannons**",
				"**-2%** Training Cost",
				"**+3%** Unit Cost"
			],
			unlocks: function (usr) {
				usr.modifiers.training_cost = usr.modifiers.training_cost - 0.02;
				usr.modifiers.unit_cost = usr.modifiers.unit_cost + 0.03;
				usr.available_units.push("hand_cannons");
			}
		},
		tercio: {
			icon: "<:colonisation:716821194891853826>",
			description: "The Tercio was a pike-and-shot unit highly known for its attacking effectiveness that sought to cover its firearm units with pikemen in order to maintain defensive cohesion.",
			prerequisite_techs: ["improved_metallurgy","pike_and_square","heavy_cavalry"],
			research_cost: 75,
			year: 1534,
			category: "military_technology",
			modifiers: [
				"Enables **Tercio**",
				"Obsoletes **Pike and Square**"
			],
			unlocks: function (usr) {
				usr.available_units.push("tercio");
				deleteElement(usr.available_units, "pike_and_square", [usr, "obsolete_units"]);
			}
		},
		early_modern_mercenaries: {
			icon: "<:infamy:716817688453709905>",
			description: "Early modern mercenaries, compared to mercenaries of previous eras, typically came from other nations renowned for their fighting skill and professionalism.",
			prerequisite_techs: ["condottieri"],
			research_cost: 75,
			year: 1400,
			category: "military_technology",
			modifiers: [
				"**+5%** National Manpower",
				"**+5%** Army Upkeep"
			],
			unlocks: function (usr) {
				usr.modifiers.national_manpower = usr.modifiers.national_manpower + 0.05;
				usr.modifiers.army_upkeep = usr.modifiers.army_upkeep + 0.05;
			}
		},
		moveable_field_works: {
			icon: "<:artillery_piece:759161240999952445>",
			description: "Moveable field works allow our arquebusiers on the front to quickly shield themselves from harm by tying their firearm to their shield.",
			prerequisite_techs: ["hand_cannons"],
			research_cost: 100,
			year: 1514,
			category: "military_technology",
			modifiers: [
				"**+3%** Infantry and Cavalry DP"
			],
			unlocks: function (usr) {
				usr.modifiers.ground_units_dp = usr.modifiers.ground_units_dp + 0.03;
			}
		},
		improved_firepower: {
			icon: "<:artillery:716821195055431681>",
			description: "Our military engineers have begun to realise that our artillery units can maximise their firepower by bombarding targets in coordinated strikes. Perhaps we should employ this method to great effect ...",
			prerequisite_techs: ["hand_cannons"],
			research_cost: 100,
			year: 1453,
			category: "military_technology",
			modifiers: [
				"**+5%** Artillery AP"
			],
			unlocks: function (usr) {
				usr.modifiers.ground_artillery_ap = usr.modifiers.ground_artillery_ap + 0.05;
			}
		},
		the_arquebus: {
			icon: "<:active_personnel:716820390474940426>",
			description: "The arquebus, the successor to the hand cannon, was an important milestone in gunpowder warfare, and the first miniaturised firearm that allowed for masses of soldiers to wield it to great effect with minimal training compared to archery.",
			prerequisite_techs: ["hand_cannons"],
			research_cost: 100,
			year: 1465,
			category: "military_technology",
			modifiers: [
				"Enables **Arquebusiers**",
				"**+5%** National Manpower",
				"Obsoletes **Archers**",
				"Obsoletes **Longbowmen**"
			],
			unlocks: function (usr) {
				usr.available_units.push("arquebusiers");
				usr.modifiers.national_manpower = usr.modifiers.national_manpower + 0.05;
				deleteElement(usr.available_units, "archers", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "longbowmen", [usr, "obsolete_units"]);
			}
		},
		light_cavalry: {
			icon: "<:soldiers:732730754592669702>",
			description: "Light cavalry, compared to heavier forms of mounted infantry, can perform shock attacks and flank enemies at high speed, although their piercing attack is not quite as effective.",
			prerequisite_techs: ["pike_and_square","heavy_cavalry"],
			research_cost: 100,
			year: 1300,
			category: "military_technology",
			modifiers: [
				"Enables **Light Cavalry**",
				"**+5%** Training Cost"
			],
			unlocks: function (usr) {
				usr.available_units.push("light_cavalry");
				usr.modifiers.training_cost = usr.modifiers.training_cost + 0.05;
			}
		},
		landsknecht: {
			icon: "<:colonisation:716821194891853826>",
			description: "Landsknecht, mercenaries originating from the German and Swiss lands, are well known for their brutality in attacking and so make for highly formidable foes in battle.",
			prerequisite_techs: ["early_modern_mercenaries"],
			research_cost: 100,
			year: 1470,
			category: "military_technology",
			modifiers: [
				"Enables **Landsknecht**",
				"**+10%** Army Upkeep"
			],
			unlocks: function (usr) {
				usr.available_units.push("landsknecht");
				usr.modifiers.army_upkeep = usr.modifiers.army_upkeep + 0.10;
			}
		},
		scorched_earth: {
			icon: "<:cb:716828676855169107>",
			description: "By embracing scorched earth tactics, we can improve the defensibility of our nation, especially in large, open tracts of land and help prepare for the eventuality when others will use it on our attacking troops.",
			prerequisite_techs: ["moveable_field_works"],
			research_cost: 150,
			year: 1346,
			category: "military_technology",
			modifiers: [
				"**+5%** Infantry DP",
				"**+2%** War Exhaustion Rate"
			],
			unlocks: function (usr) {
				usr.modifiers.ground_units_dp = usr.modifiers.ground_units_dp + 0.05;
				usr.modifiers.war_exhaustion_rate = usr.modifiers.war_exhaustion_rate + 0.02;
			}
		},
		long_cannon: {
			icon: "<:artillery:716821195055431681>",
			description: "The long gun, which could be used either on sea, or on land, became a devastating piece of artillery that could be transported around the battlefield with relative ease. Although lacking protection, it quickly became the mainstay of continental European armies.",
			prerequisite_techs: ["improved_firepower","moveable_field_works"],
			research_cost: 150,
			year: 1588,
			category: "military_technology",
			modifiers: [
				"Enables **Long Cannons**",
				"Obsoletes **Bombard**",
				"Obsoletes **Hand Cannons**",
				"**+5%** Artillery AP",
				"**+3%** Training Cost"
			],
			unlocks: function (usr) {
				usr.available_units.push("long_cannons");
				deleteElement(usr.available_units, "bombard", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "hand_cannons", [usr, "obsolete_units"]);
				usr.modifiers.ground_artillery_ap = usr.modifiers.ground_artillery_ap + 0.05;
				usr.modifiers.training_cost = usr.modifiers.training_cost + 0.03;
			}
		},
		snaplock_infantry: {
			icon: "<:active_personnel:716820390474940426>",
			description: "With the recent invention of the snaplock musket, allowing for the striking of gunpowder without external ignition, our troops can now fire at a moderately faster speed than previously, compared to the arquebus.",
			prerequisite_techs: ["the_arquebus"],
			research_cost: 150,
			year: 1540,
			category: "military_technology",
			modifiers: [
				"Enables **Snaplock Infantry**",
				"**+2%** Infantry AP"
			],
			unlocks: function (usr) {
				usr.available_units.push("snaplock_infantry");
				usr.modifiers.ground_units_ap = usr.modifiers.ground_units_ap + 0.02;
			}
		},
		cuirassiers: {
			icon: "<:soldiers:732730754592669702>",
			description: "Beginning in the 15th century, cuirassiers were mounted cavalry units that began adopting firearms as their primary weapon that were in service up until the beginning of the Great War.",
			prerequisite_techs: ["light_cavalry"],
			research_cost: 150,
			year: 1490,
			category: "military_technology",
			modifiers: [
				"Enables **Cuirassiers**"
			],
			unlocks: function (usr) {
				usr.available_units.push("cuirassiers");
			}
		},
		proliferation_of_firearms: {
			icon: "<:manpower:716817688705499177>",
			description: "The widespread proliferation of firearms amongst conventional armies during the 16th and 17th centuries eventually lead to the decline of other forms of combat, and the dominance of the gunpowder weapon.",
			prerequisite_techs: ["scorched_earth"],
			research_cost: 200,
			year: 1611,
			category: "military_technology",
			modifiers: [
				"**+10%** Infantry AP",
				"Obsoletes **Swordsmen**",
				"Obsoletes **Skirmishers**"
			],
			unlocks: function (usr) {
				deleteElement(usr.available_units, "swordsmen", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "skirmishers", [usr, "obsolete_units"]);
				usr.available_units.push("cuirassiers");
			}
		},
		field_culverins: {
			icon: "<:artillery:716821195055431681>",
			description: "Field culverins, used as artillery pieces on the battlefield, were highly mobile pieces of relatively small calibre that were valued for their accuracy and range.",
			prerequisite_techs: ["long_cannon"],
			research_cost: 200,
			year: 1590,
			category: "military_technology",
			modifiers: [
				"Enables **Field Culverins**",
				"**+5% Artillery AP**"
			],
			unlocks: function (usr) {
				usr.available_units.push("field_culverins");
				usr.modifiers.ground_artillery_ap = usr.modifiers.ground_artillery_ap + 0.05;
			}
		},
		snaphance_musket: {
			icon: "<:active_personnel:716820390474940426>",
			description: "The snaphance musket, or the snaphaunce rather, was a firing mechanism used for muskets similar to the snaplock that increased the reliability of firearms to prevent accidental discharge.",
			prerequisite_techs: ["snaplock_infantry"],
			research_cost: 200,
			year: 1558,
			category: "military_technology",
			modifiers: [
				"Enables **Snaphaunce Infantry**"
			],
			unlocks: function (usr) {
				usr.available_units.push("snaphaunce_infantry");
			}
		},
		hussars: {
			icon: "<:infamy:716817688453709905>",
			description: "Hussars were famed and well-trained light cavalry whose charges were known for their effectiveness in battle throughout the early modern period.",
			prerequisite_techs: ["cuirassiers"],
			research_cost: 200,
			year: 1485,
			category: "military_technology",
			modifiers: [
				"Enables **Hussars**",
				"**+5%** Training Cost"
			],
			unlocks: function (usr) {
				usr.modifiers.training_cost = usr.modifiers.training_cost + 0.05;
				usr.available_units.push("hussars");
			}
		},
		swiss_guards: {
			icon: "<:manpower:716817688705499177>",
			description: "Swiss Guards, famed for their loyalty and ability to serve as guards for various royal courts, (although later repurposed as regular infantry during the Napoleonic Wars) were some of the last mercenaries from foreign countries to be used.",
			prerequisite_techs: ["cuirassiers"],
			research_cost: 200,
			year: 1490,
			category: "military_technology",
			modifiers: [
				"Enables **Swiss Guards**",
				"**+3%** Upkeep Cost"
			],
			unlocks: function (usr) {
				usr.modifiers.army_upkeep = usr.modifiers.army_upkeep + 0.03;
				usr.available_units.push("swiss_guards");
			}
		},
		sustained_bombardment: {
			icon: "<:artillery_piece:759161240999952445>",
			description: "Sustained bombardment is a tactic used to suppress enemy forces by constant, round the clock firing of artillery that can be used to great effect, especially during sieges.",
			prerequisite_techs: ["proliferation_of_firearms", "field_culverins"],
			research_cost: 250,
			year: 1618,
			category: "military_technology",
			modifiers: [
				"**+10%** Artillery AP"
			],
			unlocks: function (usr) {
				usr.modifiers.ground_artillery_ap = usr.modifiers.ground_artillery_ap + 0.10;
			}
		},
		demi_cannon: {
			icon: "<:artillery:716821195055431681>",
			description: "The demi-cannon was a medium size cannon used primarily at sea, but also on land, that could fire projectiles weighing up to 32 pounds.",
			prerequisite_techs: ["proliferation_of_firearms", "field_culverins"],
			research_cost: 250,
			year: 1652,
			category: "military_technology",
			modifiers: [
				"Enables **Demi-Cannon**",
				"**+5%** Naval AP"
			],
			unlocks: function (usr) {
				usr.available_units.push("demi_cannon");
				usr.modifiers.naval_units_ap = usr.modifiers.naval_units_ap + 0.05;
			}
		},
		matchlock_infantry: {
			icon: "<:active_personnel:716820390474940426>",
			description: "Matchlock infantry debuted beginning in the 16th century that featured heavily during the Thirty Years' War, that no longer required an external source of ignition. Unfortunately, upkeep was high as matchlock infantry had to keep their matches constantly burning.",
			prerequisite_techs: ["snaphance_musket"],
			research_cost: 250,
			year: 1411,
			category: "military_technology",
			modifiers: [
				"Enables **Matchlock Infantry**",
				"**+10%** Army Upkeep"
			],
			unlocks: function (usr) {
				usr.available_units.push("matchlock_infantry");
				usr.modifiers.army_upkeep = usr.modifiers.army_upkeep + 0.05;
			}
		},
		pike_and_shot: {
			icon: "<:colonisation:716821194891853826>",
			description: "Pike and shot were mixed equipment units that sought to take advantage of the defensiveness of the pike coupled with the offensiveness of early modern firearms in order to maximise damage on the enemy. They were rendered obsolete with the advent of the bayonet.",
			prerequisite_techs: ["the_arquebus","tercio"],
			research_cost: 250,
			year: 1519,
			category: "military_technology",
			modifiers: [
				"Enables **Pike and Shot**"
			],
			unlocks: function (usr) {
				usr.available_units.push("pike_and_shot");
			}
		},
		professional_officers: {
			icon: "<:aristocrats:732730754643132457>",
			description: "By hiring professional officers instead of relying on aristocrats in the military, we can increase our military professionalism and the quality of our commanders on the field.",
			prerequisite_techs: ["sustained_bombardment"],
			research_cost: 350,
			year: 1610,
			category: "military_technology",
			modifiers: [
				"**+5%** Infantry AP",
				"**+5%** Infantry DP",
				"**+5%** Artillery AP",
				"**+5%** Artillery DP",
				"**+5%** Training Cost"
			],
			unlocks: function (usr) {
				usr.modifiers.ground_units_ap = usr.modifiers.ground_units_ap + 0.05;
				usr.modifiers.ground_units_dp = usr.modifiers.ground_units_dp + 0.05;
				usr.modifiers.ground_artillery_ap = usr.modifiers.ground_artillery_ap + 0.05;
				usr.modifiers.ground_artillery_dp = usr.modifiers.ground_artillery_dp + 0.05;
				usr.modifiers.training_cost = usr.modifiers.training_cost + 0.05;
			}
		},
		field_cannon: {
			icon: "<:artillery_piece:759161240999952445>",
			description: "Beginning in the Thirty Years' War, field cannon were mobile artillery pieces that began to be protected by a shield for the artillerymen, which decreased their vulnerabilities from attack significantly.",
			prerequisite_techs: ["demi_cannon"],
			research_cost: 350,
			year: 1600,
			category: "military_technology",
			modifiers: [
				"Enables **Field Cannon**",
				"**+5%** Artillery DP",
				"Obsoletes **Long Cannons**"
			],
			unlocks: function (usr) {
				usr.available_units.push("field_cannon");
				usr.modifiers.ground_artillery_dp = usr.modifiers.ground_artillery_dp + 0.05;
				deleteElement(usr.available_units, "long_cannons", [usr, "obsolete_units"]);
			}
		},
		wheellock_musket: {
			icon: "<:soldiers:732730754592669702>",
			description: "The wheellock was the first self-igniting mechanism for firearms, and reduced maintenance of troops wielding it significantly as the match no longer had to be kept burning 24/7, having been replaced by a friction ignition mechanism instead.",
			prerequisite_techs: ["matchlock_infantry"],
			research_cost: 350,
			year: 1500,
			category: "military_technology",
			modifiers: [
				"Enables **Wheellock Infantry**",
				"Obsoletes **Matchlock Infantry**",
				"Obsoletes **Snaphaunce Infantry**",
				"Obsoletes **Snaplock Infantry**",
				"Obsoletes **Arquebusiers**",
				"**-10%** Training Cost"
			],
			unlocks: function (usr) {
				usr.available_units.push("wheellock_infantry");
				deleteElement(usr.available_units, "matchlock_infantry", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "snaphaunce_infantry", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "snaplock_infantry", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "arquebusiers", [usr, "obsolete_units"]);
				usr.modifiers.training_cost = usr.modifiers.training_cost - 0.10;
			}
		},
		primitive_sidearms: {
			icon: "<:coal:716791408714973204>",
			description: "Primitive sidearms, such as blunderbusses or pistols, were often used as last resort weapons for close combat by early modern infantry troops, as their reliability long-range could not be counted on.",
			prerequisite_techs: ["matchlock_infantry"],
			research_cost: 350,
			year: 1540,
			category: "military_technology",
			modifiers: [
				"**+5%** Infantry DP"
			],
			unlocks: function (usr) {
				usr.modifiers.ground_units_dp = usr.modifiers.ground_units_dp + 0.05;
			}
		},
		dragoons: {
			icon: "<:active_personnel:716820390474940426>",
			description: "Dragoons were a type of light cavalry mounted unit that used infantry firearms, and often disembarked off their mounts in order to conduct combat. Later on, however, they were trained in swordsmanship and were widely used until the end of World War I.",
			prerequisite_techs: ["pike_and_shot","hussars"],
			research_cost: 350,
			year: 1620,
			category: "military_technology",
			modifiers: [
				"Enables **Dragoons**"
			],
			unlocks: function (usr) {
				usr.available_units.push("dragoons");
			}
		},
		foreign_legions: {
			icon: "<:government_scroll:716828975175041054>",
			description: "Gradually, foreign legions such as the Wild Geese of Ireland, volunteer regiments, and regiments granted to other countries that served underneath a different country other than their own gradually came to replace mercenaries and served as the main source of manpower in their stead.",
			prerequisite_techs: ["swiss_guards"],
			research_cost: 350,
			year: 1691,
			category: "military_technology",
			modifiers: [
				"**+10%** National Manpower",
				"**+5%** Non-Core Manpower",
				"Obsoletes **Condottieri**",
				"Obsoletes **Landsknecht**",
				"Obsoletes **Swiss Guards**"
			],
			unlocks: function (usr) {
				usr.modifiers.national_manpower = usr.modifiers.national_manpower + 0.10;
				usr.modifiers.non_core_manpower = usr.modifiers.non_core_manpower + 0.05;
				deleteElement(usr.available_units, "condottieri", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "landsknecht", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "swiss_guards", [usr, "obsolete_units"]);
			}
		},
		professional_army: {
			icon: "<:active_personnel:716820390474940426>",
			description: "Standing armies began to turn into professional armies, and whereas levies, and occassionally conscripts, had previously been used to fulfil the manpower prerequisites of most nations, the advent of the professional army further cemented the power of state over its vassals.",
			prerequisite_techs: ["professional_officers"],
			research_cost: 500,
			year: 1648,
			category: "military_technology",
			modifiers: [
				"**+1** Military Buildings per city",
				"**+5%** Infantry AP",
				"**+5%** Infantry DP",
				"**+5%** Artillery AP",
				"**+5%** Artillery DP",
				"**+10%** Army Upkeep",
				"**+10%** Training Cost"
			],
			unlocks: function (usr) {
				usr.modifiers.military_buildings_building_slots = usr.modifiers.military_buildings_building_slots + 1;
				usr.modifiers.ground_units_ap = usr.modifiers.ground_units_ap + 0.05;
				usr.modifiers.ground_units_dp = usr.modifiers.ground_units_dp + 0.05;
				usr.modifiers.ground_artillery_ap = usr.modifiers.ground_artillery_ap + 0.05;
				usr.modifiers.ground_artillery_dp = usr.modifiers.ground_artillery_dp + 0.05;
				usr.modifiers.army_upkeep = usr.modifiers.army_upkeep + 0.10;
				usr.modifiers.training_cost = usr.modifiers.training_cost + 0.10;
			}
		},
		demi_culverins: {
			icon: "<:artillery:716821195055431681>",
			description: "The demi-culverin, similar to the 'field culverin', was a mobile piece of artillery with improved effectiveness and range used in sieges.",
			prerequisite_techs: ["field_cannon"],
			research_cost: 500,
			year: 1590,
			category: "military_technology",
			modifiers: [
				"Enables **Demi-Culverin**"
			],
			unlocks: function (usr) {
				usr.available_units.push("demi_culverins");
			}
		},
		flintlock_infantry: {
			icon: "<:soldiers:732730754592669702>",
			description: "Flintlock weaponry was an umbrella term describing any firearm using flint as its primary striking mechanism. Due to its widespread accessibility and ease-of-use, it rapidly obsoleted earlier firearm ignition technologies.",
			prerequisite_techs: ["wheellock_musket","primitive_sidearms"],
			research_cost: 500,
			year: 1630,
			category: "military_technology",
			modifiers: [
				"Enables **Flintlock Infantry**",
				"Obsoletes **All Previous Ranged Infantry**"
			],
			unlocks: function (usr) {
				deleteElement(usr.available_units, "arquebusiers", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "snaplock_infantry", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "snaphaunce_infantry", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "matchlock_infantry", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "wheellock_infantry", [usr, "obsolete_units"]);
				usr.available_units.push("flintlock_infantry");
			}
		},
		the_bayonet: {
			icon: "<:iron:716791408819961866>",
			description: "The bayonet drastically improved the defensiveness of musketeers and firearm infantry, as the lack of a standard melee weapon could now be made up for. By affixing bayonets onto the end of their muskets, early modern troops now had the capability to resist cavalry charges.",
			prerequisite_techs: ["wheellock_musket","primitive_sidearms"],
			research_cost: 500,
			year: 1672,
			category: "military_technology",
			modifiers: [
				"**+10%** Infantry DP",
				"Obsoletes **Pike and Square**",
				"Obsoletes **Tercio**",
				"Obsoletes **Pike and Shot**"
			],
			unlocks: function (usr) {
				usr.modifiers.ground_units_dp = usr.modifiers.ground_units_dp + 0.10;
				deleteElement(usr.available_units, "pike_and_square", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "tercio", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "pike_and_shot", [usr, "obsolete_units"]);
			}
		},
		early_colonial_troops: {
			icon: "<:old_map:716821884867444746>",
			description: "Early colonial militia were typically tasked with guarding stockades, forts, and various frontier settlements from attack, and were often coupled with friendly natives for manpower support.",
			prerequisite_techs: ["foreign_legions"],
			research_cost: 500,
			year: 1700,
			category: "military_technology",
			modifiers: [
				"**+5%** Non-Core Manpower",
				"**+1** Maximum Expeditions"
			],
			unlocks: function (usr) {
				usr.modifiers.non_core_manpower = usr.modifiers.non_core_manpower + 0.05;
				usr.modifiers.maximum_expeditions = usr.modifiers.maximum_expeditions + 1;
			}
		},
		regular_conscription: {
			icon: "<:old_scroll:716828676880334881>",
			description: "Regular conscription, or the draft of available conscripts during times of war, was the predecessor to the levee en masse, and allowed early nation-states to rapidly mobilise military assets to use at their disposal.",
			prerequisite_techs: ["professional_army"],
			research_cost: 650,
			year: 1640,
			category: "military_technology",
			modifiers: [
				"**+10%** National Manpower"
			],
			unlocks: function (usr) {
				usr.modifiers.national_manpower = usr.modifiers.national_manpower + 0.10;
			}
		},
		minions: {
			icon: "<:artillery:716821195055431681>",
			description: "Minions were small cannons that typically armed merchant trade ships, allowing them to carry extra weight not related to armaments whilst keeping their cargo safe.",
			prerequisite_techs: ["demi_culverins"],
			research_cost: 650,
			year: 1642,
			category: "military_technology",
			modifiers: [
				"Enables **Minions**",
				"**-5%** Shipment Time"
			],
			unlocks: function (usr) {
				usr.available_units.push("minions");
				usr.modifiers.shipment_time = usr.modifiers.shipment_time - 0.05;
			}
		},
		musketeers: {
			icon: "<:active_personnel:716820390474940426>",
			description: "Musketeers, the mainstay of line infantry warfare, came about as a result of the advent of the bayonet, and the widescale availability of the flintlock firing mechanism. They boasted a good rate of fire (for the time), and had significant offensive advantages as they could engage enemy units at range, or opt for a bayonet charge.",
			prerequisite_techs: ["flintlock_infantry","the_bayonet"],
			research_cost: 650,
			year: 1745,
			category: "military_technology",
			modifiers: [
				"Enables **Musketeers**"
			],
			unlocks: function (usr) {
				usr.available_units.push("musketeers");
			}
		},
		improved_grenades: {
			icon: "<:coal:716791408714973204>",
			description: "Improved reliability for grenades help ensure the safety of the soldier and also unlock further offensive capabilities in which they can be used.",
			prerequisite_techs: ["demi_culverins"],
			research_cost: 650,
			year: 1723,
			category: "military_technology",
			modifiers: [
				"**+5%** Infantry AP"
			],
			unlocks: function (usr) {
				usr.modifiers.ground_units_ap = usr.modifiers.ground_units_ap + 0.05;
			}
		},
		trade_company_mercenaries: {
			icon: "<:trade:716828677115084812>",
			description: "Mercenaries hired by trade companies helped to protect their trading posts and valuable goods in exotic lands from being pillaged or stolen.",
			prerequisite_techs: ["early_colonial_troops"],
			research_cost: 650,
			year: 1700,
			category: "military_technology",
			modifiers: [
				"**+5%** Non-Core Manpower"
			],
			unlocks: function (usr) {
				usr.modifiers.non_core_manpower = usr.modifiers.non_core_manpower + 0.05;
			}
		},
		siege_artillery: {
			icon: "<:artillery_piece:759161240999952445>",
			description: "Siege artillery were large-calibre artillery pieces with low mobility designed specially for putting cities underneath siege.",
			prerequisite_techs: ["minions"],
			research_cost: 750,
			year: 1775,
			category: "military_technology",
			modifiers: [
				"Enables **Siege Artillery**"
			],
			unlocks: function (usr) {
				usr.available_units.push("siege_artillery");
			}
		},
		line_infantry: {
			icon: "<:manpower:716817688705499177>",
			description: "Line infantry became the mainstay formations of continental European armies at home and abroad throughout the 18th century as earlier melee infantry classes were quickly outpaced in development, and cavalry became increasingly obsolete.",
			prerequisite_techs: ["musketeers"],
			research_cost: 750,
			year: 1750,
			category: "military_technology",
			modifiers: [
				"Enables **Line Infantry**",
				"Obsoletes **Flintlock Infantry**"
			],
			unlocks: function (usr) {
				usr.available_units.push("line_infantry");
				deleteElement(usr.available_units, "flintlock_infantry", [usr, "obsolete_units"]);
			}
		},
		sepoys: {
			icon: "<:active_personnel:716820390474940426>",
			description: "Sepoys were soldiers of mainly Indian origin that were armed with muskets and helped to server in continental Indian armies and overseas European ones as well.",
			prerequisite_techs: ["trade_company_mercenaries"],
			research_cost: 750,
			year: 1750,
			category: "military_technology",
			modifiers: [
				"**+5%** Non-Core Manpower",
				"**-5%** Army Upkeep",
				"**+1** Maximum Expeditions"
			],
			unlocks: function (usr) {
				usr.modifiers.non_core_manpower = usr.modifiers.non_core_manpower + 0.05;
				usr.modifiers.army_upkeep = usr.modifiers.army_upkeep - 0.05;
				usr.modifiers.maximum_expeditions = usr.modifiers.maximum_expeditions + 1;
			}
		},
		mysorean_rocket: {
			icon: "<:coal:716791408714973204>",
			description: "The Mysorean rocket was a key asset of the Mysoreans during the Anglo-Mysore wars, with the weapon being so effective at causing panic amongst advancing infantry that it was later adopted by the British underneath the improved Congreve Rocket.",
			prerequisite_techs: ["siege_artillery"],
			research_cost: 900,
			year: 1780,
			category: "military_technology",
			modifiers: [
				"Enables **Mysorean Rocket**",
				"**+5%** Artillery AP"
			],
			unlocks: function (usr) {
				usr.available_units.push("mysorean_rocket");
				usr.modifiers.ground_artillery_ap = usr.modifiers.ground_artillery_ap + 0.05;
			}
		},
		grenadiers: {
			icon: "<:manpower:716817688705499177>",
			description: "Grenadiers, widely used during the Napoleonic Wars and late 18th century warfare, were soldiers that specialised in the throwing of grenades, alongside traditional musket warfare.",
			prerequisite_techs: ["improved_grenades","line_infantry"],
			research_cost: 900,
			year: 1740,
			category: "military_technology",
			modifiers: [
				"Enables **Grenadiers**"
			],
			unlocks: function (usr) {
				usr.available_units.push("grenadiers");
			}
		},
		early_trenches: {
			icon: "<:workers:732730754735276124>",
			description: "Trenches and related earthworks began to first take shape around the time of line battle warfare, with earthworks being able to cover the firing infantry as they were reloading.",
			prerequisite_techs: ["line_infantry"],
			research_cost: 900,
			year: 1754,
			category: "military_technology",
			modifiers: [
				"**+10%** Infantry DP"
			],
			unlocks: function (usr) {
				usr.modifiers.ground_units_dp = usr.modifiers.ground_units_dp + 0.10;
			}
		},
		uhlans: {
			icon: "<:soldiers:732730754592669702>",
			description: "Uhlans were general-purpose cavalry units originating in Poland that eventually saw widespread use by the end of the 19th century as fast, mobile cavalry units that could enforce occupation of a territory quickly.",
			prerequisite_techs: ["dragoons"],
			research_cost: 900,
			year: 1764,
			category: "military_technology",
			modifiers: [
				"Enables **Uhlans**"
			],
			unlocks: function (usr) {
				usr.available_units.push("uhlans");
			}
		},
		indigenous_troops: {
			icon: "<:trade:716828677115084812>",
			description: "Indigenous troops were native soldiers that often played key supporting roles in colonial conflicts and were recruited with the promise of steady pay and higher social status.",
			prerequisite_techs: ["sepoys"],
			research_cost: 900,
			year: 1710,
			category: "military_technology",
			modifiers: [
				"**+3%** Non-Core Manpower",
				"**+5%** Army Upkeep"
			],
			unlocks: function (usr) {
				usr.modifiers.non_core_manpower = usr.modifiers.non_core_manpower + 0.03;
				usr.modifiers.army_upkeep = usr.modifiers.army_upkeep + 0.05;
			}
		},
		dream_of_flight: {
			icon: "<:aeroplanes:716821195407884358>",
			description: "Since ancient times, man has dreamed of being able to fly. With modern advances and the discovery of lighter than air elements, the potential to fulfil this dream is more likely than ever ...",
			prerequisite_techs: ["regular_conscription","mysorean_rocket"],
			research_cost: 1000,
			year: 1753,
			category: "military_technology",
			modifiers: [
				"Enables **Aeroports**",
				"Enables **Air Bases**",
				"**+5%** Research Speed"
			],
			unlocks: function (usr) {
				usr.available_buildings.push("aeroports");
				usr.available_buildings.push("air_bases");
				usr.modifiers.research_efficiency = usr.modifiers.research_efficiency + 0.05;
			}
		},
		light_infantry: {
			icon: "<:manpower:716817688705499177>",
			description: "Light infantry are specialised units that enable fast infiltration behind enemy lines and flanking manoeuvres, despite their light armaments.",
			prerequisite_techs: ["grenadiers"],
			research_cost: 1000,
			year: 1740,
			category: "military_technology",
			modifiers: [
				"Enables **Light Infantry**"
			],
			unlocks: function (usr) {
				usr.available_units.push("light_infantry");
			}
		},
		colonial_garrisons: {
			icon: "<:old_map:716821884867444746>",
			description: "By relying on colonial and indigenous manpower to defend our outposts, we can lessen the burden and army upkeep of ourselves, and save our manpower for our own purposes.",
			prerequisite_techs: ["indigenous_troops"],
			research_cost: 1000,
			year: 1720,
			category: "military_technology",
			modifiers: [
				"**+5%** Non-Core Manpower",
				"**-8%** Army Upkeep"
			],
			unlocks: function (usr) {
				usr.modifiers.non_core_manpower = usr.modifiers.non_core_manpower + 0.05;
				usr.modifiers.army_upkeep = usr.modifiers.army_upkeep - 0.08;
			}
		},
		conscription_and_mobilisation: {
			icon: "<:building:716827579650408538>",
			description: "By conducting censuses of all able-bodied men in our country, we can begin to mobilise increasingly large numbers of troops in time of war.",
			prerequisite_techs: ["dream_of_flight"],
			research_cost: 1200,
			year: 1756,
			category: "military_technology",
			modifiers: [
				"Unlocks **Mobilisation - Line Infantry**",
				"**+10%** National Manpower",
				"**-5%** Tax Efficiency"
			],
			unlocks: function (usr) {
				usr.enable_mobilisation = true;
				setMobilisationUnit(usr.id, "line_infantry");
				usr.modifiers.national_manpower = usr.modifiers.national_manpower + 0.10;
				usr.modifiers.tax_efficiency = usr.modifiers.tax_efficiency - 0.05;
			}
		},
		carronade: {
			icon: "<:artillery_piece:759161240999952445>",
			description: "Beginning in the late 18th century, carronades were light cannons that helped protect trade shipments, and could also double as highly mobile artipllery on conventional battlefields.",
			prerequisite_techs: ["mysorean_rocket"],
			research_cost: 1200,
			year: 1770,
			category: "military_technology",
			modifiers: [
				"Enables **Carronades**",
				"**-5%** Shipment Time"
			],
			unlocks: function (usr) {
				usr.available_units.push("carronades");
				usr.modifiers.shipment_time = usr.modifiers.shipment_time - 0.05;
			}
		},
		fusiliers: {
			icon: "<:soldiers:732730754592669702>",
			description: "Fusiliers, typically armed with heavy infantry weapons that featured heavily during the Napoleonic Wars, typically referred to a type of elite infantry, and were originally used to guard artillery pieces.",
			prerequisite_techs: ["light_infantry"],
			research_cost: 1200,
			year: 1670,
			category: "military_technology",
			modifiers: [
				"Enables **Fusiliers**",
				"**+5%** Artillery DP"
			],
			unlocks: function (usr) {
				usr.available_units.push("fusiliers");
				usr.modifiers.ground_artillery_dp = usr.modifiers.ground_artillery_dp + 0.05;
			}
		},
		improved_bayonet: {
			icon: "<:lead:716791408840671322>",
			description: "The defensibility of line infantry improved drastically with the advent of the socket bayonet and improvements in metallurgy and steel refinement.",
			prerequisite_techs: ["early_trenches"],
			research_cost: 1200,
			year: 1715,
			category: "military_technology",
			modifiers: [
				"**+10%** Infantry DP"
			],
			unlocks: function (usr) {
				usr.modifiers.ground_units_dp = usr.modifiers.ground_units_dp + 0.10;
			}
		},
		levee_en_masse: {
			icon: "<:taxes:716817688781127810>",
			description: "The levee-en-masse, made possible by increasingly organised censuses, allowed entire countries to be mobilised in the span of only a few months, creating armies of unprecedented size.",
			prerequisite_techs: ["conscription_and_mobilisation"],
			research_cost: 1400,
			year: 1793,
			category: "military_technology",
			modifiers: [
				"Unlocks **Conscription** Reforms",
				"**+50%** Mobilisation Size",
				"**+5%** National Manpower",
				"**+5%** Mobilisation Speed"
			],
			unlocks: function (usr) {
				unlockReform(usr.id, "conscription");
				usr.modifiers.mobilisation_size = usr.modifiers.mobilisation_size + 0.50;
				usr.modifiers.national_manpower = usr.modifiers.national_manpower + 0.05;
				usr.modifiers.mobilisation_speed = usr.modifiers.mobilisation_speed - 0.05;
			}
		},
		congreve_rocket: {
			icon: "<:artillery_piece:759161240999952445>",
			description: "The Congreve Rocket, named after Sir William Congreve in classic 19th century style, was a British military weapon designed after the Mysorean rockets which contributed to the effective defeat of the British in India twice.",
			prerequisite_techs: ["carronade"],
			research_cost: 1400,
			year: 1804,
			category: "military_technology",
			modifiers: [
				"Enables **Congreve Rockets**",
				"Obsoletes **Mysorean Rockets**"
			],
			unlocks: function (usr) {
				usr.available_units.push("congreve_rockets");
				deleteElement(usr.available_units, "mysorean_rockets", [usr, "obsolete_units"]);
			}
		},
		napoleonic_arms: {
			icon: "<:active_personnel:716820390474940426>",
			description: "Napoleonic arms were improved infantry weapons developed during the French Revolutionary Wars and the Napoleonic Wars that allowed for large-scale production to fit and equip armies of millions of men.",
			prerequisite_techs: ["fusiliers","improved_bayonet"],
			research_cost: 1400,
			year: 1802,
			category: "military_technology",
			modifiers: [
				"Enables **Napoleonic Infantry**",
				"**+10%** Army Upkeep"
			],
			unlocks: function (usr) {
				usr.available_units.push("napoleonic_infantry");
				usr.modifiers.army_upkeep = usr.modifiers.army_upkeep + 0.10;
			}
		},
		rifled_barrels: {
			icon: "<:iron:716791408819961866>",
			description: "Beginning in the late 18th century, rifled barrels on muskets allowed infantrymen to shoot with improved accuracy, despite longer loading times as they now had to pound the musketball down the barrel instead of letting it slide.",
			prerequisite_techs: ["fusiliers","improved_bayonet"],
			research_cost: 1400,
			year: 1754,
			category: "military_technology",
			modifiers: [
				"**+5%** Infantry AP",
				"**+5%** Army Upkeep"
			],
			unlocks: function (usr) {
				usr.modifiers.ground_units_ap = usr.modifiers.ground_units_ap + 0.05;
				usr.modifiers.army_upkeep = usr.modifiers.army_upkeep + 0.10;
			}
		},
		nation_in_arms: {
			icon: "<:manpower:716817688705499177>",
			description: "With increased nationalism, and the advent of the concept of nations-in-arms, wars could now be fought on truly devastating scales, one that could require all men of fighting age to be drafted.",
			prerequisite_techs: ["levee_en_masse"],
			research_cost: 1600,
			year: 1815,
			category: "military_technology",
			modifiers: [
				"Unlocks **Mobilisation - Napoleonic Infantry**",
				"**+100%** Mobilisation Size",
				"**+10%** Mobilisation Speed",
				"**+5%** National Manpower",
				"**+1** Barracks per city"
			],
			unlocks: function (usr) {
				setMobilisationUnit(usr.id, "napoleonic_infantry");
				usr.modifiers.mobilisation_size = usr.modifiers.mobilisation_size + 1.00;
				usr.modifiers.national_manpower = usr.modifiers.national_manpower + 0.05;
				usr.modifiers.mobilisation_speed = usr.modifiers.mobilisation_speed - 0.1;
				usr.modifiers.barracks = usr.modifiers.barracks + 1;
			}
		},
		rangers: {
			icon: "<:provinces:716809229603700737>",
			description: "Rangers were a late early-modern unit that possessed the mobility of light infantry, and were tasked with hitting behind enemy lines, or manoeuvring through tightly wooded areas.",
			prerequisite_techs: ["napoleonic_arms"],
			research_cost: 1600,
			year: 1755,
			category: "military_technology",
			modifiers: [
				"Enables **Rangers**"
			],
			unlocks: function (usr) {
				usr.available_units.push("rangers");
			}
		},
		improved_fortifications: {
			icon: "<:stone:716796878649426020>",
			description: "With the advent of large-calibre cannon, fortifications now had to be improved and expertly designed by military engineers, and on the field, improvised to maximise the defensive potential of the local garrisons and infantry.",
			prerequisite_techs: ["napoleonic_arms"],
			research_cost: 1600,
			year: 1789,
			category: "military_technology",
			modifiers: [
				"**+5%** Infantry DP",
				"**+10%** Army Upkeep"
			],
			unlocks: function (usr) {
				usr.modifiers.ground_units_dp = usr.modifiers.ground_units_dp + 0.05;
				usr.modifiers.army_upkeep = usr.modifiers.army_upkeep + 0.10;
			}
		},
		early_balloons: {
			icon: "<:diplomacy:716827579323121666>",
			description: "The Montgolfier hot-air balloon quickly became a sensation in an era where man taking flight was still unthinkable, and many quickly realised the reconaissance potentials of such devices, as enemy troops could now be viewed from far up, and scientific instruments carried high into the air.",
			prerequisite_techs: ["dream_of_flight"],
			research_cost: 1800,
			year: 1783,
			category: "military_technology",
			modifiers: [
				"This will lead to further discoveries in the field of aviation ..."
			],
			unlocks: function (usr) {
			}
		},
		defeat_in_detail: {
			icon: "<:infamy:716817688453709905>",
			description: "By dispersing our forces unequally and pretending that one of them is comprised of more men and materiel than it really is, we can lure the enemy into distributing their forces equally before shattering them one by one in a tactic known as defeat-in-detail.",
			prerequisite_techs: ["nation_in_arms"],
			research_cost: 1800,
			year: 1796,
			category: "military_technology",
			modifiers: [
				"**+10%** Infantry AP"
			],
			unlocks: function (usr) {
				usr.modifiers.ground_units_ap = usr.modifiers.ground_units_ap + 0.10;
			}
		},
		smoothbores: {
			icon: "<:artillery:716821195055431681>",
			description: "Smoothbore artillery pieces were some of the first introduced, but saw increased usage during the early 19th century despite decreased accuracy compared to rifled cannons.",
			prerequisite_techs: ["congreve_rocket"],
			research_cost: 1800,
			year: 1836,
			category: "military_technology",
			modifiers: [
				"Enables **Smoothbores**",
				"**-5%** Artillery AP",
				"Obsoletes **Siege Artillery**",
				"Obsoletes **Congreve Rockets**"
			],
			unlocks: function (usr) {
				usr.available_units.push("smoothbores");
				usr.modifiers.ground_artillery_dp = usr.modifiers.ground_artillery_dp - 0.05;
				deleteElement(usr.available_units, "siege_artillery", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "congreve_rockets", [usr, "obsolete_units"]);
			}
		},
		guards: {
			icon: "<:manpower:716817688705499177>",
			description: "Guards were improved heavy infantry used for defensive purposes that eventually became incorporated into regular armies.",
			prerequisite_techs: ["rangers"],
			research_cost: 1800,
			year: 1850,
			category: "military_technology",
			modifiers: [
				"Enables **Guards**",
				"**+5%** Army Upkeep"
			],
			unlocks: function (usr) {
				usr.available_units.push("guards");
				usr.modifiers.army_upkeep = usr.modifiers.army_upkeep + 0.05;
			}
		},
		improved_logistics: {
			icon: "<:trade:716828677115084812>",
			description: "By establishing dedicated logistics teams for our armies, we can help ensure that our troops are as well-supplied and clothed as possible.",
			prerequisite_techs: ["rifled_barrels"],
			research_cost: 1800,
			year: 1793,
			category: "military_technology",
			modifiers: [
				"**-10%** Army Upkeep",
				"**-5%** Training Cost"
			],
			unlocks: function (usr) {
				usr.modifiers.army_upkeep = usr.modifiers.army_upkeep - 0.10;
				usr.modifiers.training_cost = usr.modifiers.training_cost - 0.05;
			}
		},
		mounted_rifles: {
			icon: "<:soldiers:732730754592669702>",
			description: "Mounted rifles are cavalry units that carry rifled weapons, similar to dragoons that were used up until World War I.",
			prerequisite_techs: ["rifled_barrels"],
			research_cost: 1800,
			year: 1880,
			category: "military_technology",
			modifiers: [
				"Enables **Mounted Rifles**",
				"Obsoletes **Cuirassiers**"
			],
			unlocks: function (usr) {
				usr.available_units.push("mounted_rifles");
				deleteElement(usr.available_units, "cuirassiers", [usr, "obsolete_units"]);
			}
		},
		gurkhas: {
			icon: "<:active_personnel:716820390474940426>",
			description: "Gurkhas were elite colonial troops from the Himalayas known for their determination and bravery in battle.",
			prerequisite_techs: ["improved_fortifications"],
			research_cost: 1800,
			year: 1816,
			category: "military_technology",
			modifiers: [
				"**+5%** Non-Core Manpower"
			],
			unlocks: function (usr) {
				usr.modifiers.non_core_manpower = usr.modifiers.non_core_manpower + 0.05;
			}
		},
		reconaissance_balloons: {
			icon: "<:aeroplanes:716821195407884358>",
			description: "One would only be wise to realise the potential hiding behind the invention of the hot air balloon, as it could be used for spotting enemy movements from far away, similar to lookout tower, but at a much greater altitude, and with minimal construction cost as it can be transported easily.",
			prerequisite_techs: ["early_balloons"],
			research_cost: 2000,
			year: 1870,
			category: "military_technology",
			modifiers: [
				"Enables **Reconnaisance Balloons**"
			],
			unlocks: function (usr) {
				usr.available_units.push("reconaissance_balloons");
			}
		},
		rapid_manoeuvre: {
			icon: "<:building:716827579650408538>",
			description: "By using forced march to its maximum extent and light infantry and cavalry, we can enable our units to manoeuvre rapidly in enemy battlefields and on the map, increasing overall manoeuvrability.",
			prerequisite_techs: ["defeat_in_detail"],
			research_cost: 2000,
			year: 1871,
			category: "military_technology",
			modifiers: [
				"**+50%** Army Travel Speed"
			],
			unlocks: function (usr) {
				usr.modifiers.army_travel_speed = usr.modifiers.army_travel_speed + 0.50;
			}
		},
		riflemen: {
			icon: "<:manpower:716817688705499177>",
			description: "With the advent of the rifle and the rifled barrel itself, our troops can now wield much more accurate weaponry by using rifles and cartridges that no longer require the time-consuming reload of the musket.",
			prerequisite_techs: ["guards"],
			research_cost: 2000,
			year: 1840,
			category: "military_technology",
			modifiers: [
				"Enables **Riflemen**",
				"Unlocks **Mobilisation - Riflemen**",
				"**+5%** Army Upkeep"
			],
			unlocks: function (usr) {
				usr.available_units.push("riflemen");
				setMobilisationUnit(usr.id, "riflemen");
				usr.modifiers.army_upkeep = usr.modifiers.army_upkeep + 0.05;
			}
		},
		cavalry_logistics: {
			icon: "<:trade:716828677115084812>",
			description: "As our armies now increasingly rely on weaponry and food supplied from home, it would only be wise to expand our cavalry operations to supply too, as horses can now transport goods in large numbers to our frontline troops.",
			prerequisite_techs: ["mounted_rifles"],
			research_cost: 2000,
			year: 1853,
			category: "military_technology",
			modifiers: [
				"**+35%** Army Travel Speed",
				"**-10%** Army Upkeep"
			],
			unlocks: function (usr) {
				usr.modifiers.army_travel_speed = usr.modifiers.army_travel_speed + 0.35;
				usr.modifiers.army_upkeep = usr.modifiers.army_upkeep - 0.10;
			}
		},
		colonial_elite_officers: {
			icon: "<:aristocrats:732730754643132457>",
			description: "By using home aristocrats to rule over foreign lands in 'compelementary service' to the native rulers, we can improve stability in our overseas provinces and areas that might not be so friendly to us otherwise.",
			prerequisite_techs: ["gurkhas"],
			research_cost: 2000,
			year: 1850,
			category: "military_technology",
			modifiers: [
				"**+5%** Stability",
				"**+3%** Tax Efficiency"
			],
			unlocks: function (usr) {
				usr.modifiers.stability_modifier = usr.modifiers.stability_modifier + 5;
				usr.modifiers.tax_efficiency = usr.modifiers.tax_efficiency + 0.03;
			}
		},
		rifled_cannons: {
			icon: "<:artillery_piece:759161240999952445>",
			description: "With improved accuracy and ease of loading, rifled cannons soon obsoleted most previous cannons, including smoothbores, which would not be reintroduced until the advent of the Main Battle Tank and fin stabilisers.",
			prerequisite_techs: ["smoothbores"],
			research_cost: 2500,
			year: 1861,
			category: "military_technology",
			modifiers: [
				"Enables **Rifled Cannons**",
				"Obsoletes **All Previous Artillery**"
			],
			unlocks: function (usr) {
				usr.available_units.push("rifled_cannons");
				deleteElement(usr.available_units, "smoothbores", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "congreve_rocket", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "carronades", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "mysorean_rockets", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "siege_artillery", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "minions", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "demi_culverins", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "field_cannon", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "demi_cannon", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "field_culverins", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "long_cannons", [usr, "obsolete_units"]);
			}
		},
		modern_marines: {
			icon: "<:active_personnel:716820390474940426>",
			description: "Modern marines, typically soldiers designed specifically for amphibious invasions, usually operate underneath an independent branch of a nation's military and are known for having undergone rigorous training.",
			prerequisite_techs: ["riflemen"],
			research_cost: 2500,
			year: 1880,
			category: "military_technology",
			modifiers: [
				"Enables **Marines**",
				"**+5%** Upkeep Cost"
			],
			unlocks: function (usr) {
				usr.available_units.push("marines");
				usr.modifiers.army_upkeep = usr.modifiers.army_upkeep + 0.05;
			}
		},
		dirigibles: {
			icon: "<:aeroplanes:716821195407884358>",
			description: "Dirigible balloons are lighter than air aircraft that possess the ability to navigate through the air via engines located onboard. The predecessor to zeppelins, they were some of the first aircraft used for military purposes aside from reconaissance.",
			prerequisite_techs: ["reconaissance_balloons"],
			research_cost: 3000,
			year: 1852,
			category: "military_technology",
			modifiers: [
				"Enables **Dirigibles**"
			],
			unlocks: function (usr) {
				usr.available_units.push("dirigibles");
			}
		},
		railwayguns: {
			icon: "<:artillery_piece:759161240999952445>",
			description: "With the improvement of railway technology, railwayguns began to appear throughout early 20th century Europe, and were artillery pieces of massive calibre that could only be moved by rail that possessed the capability to fire at targets over a hundred kilometres away.",
			prerequisite_techs: ["rifled_cannons"],
			research_cost: 3000,
			year: 1862,
			category: "military_technology",
			modifiers: [
				"Enables **Railwayguns**"
			],
			unlocks: function (usr) {
				usr.available_units.push("railwayguns");
			}
		},
		breechloaded_rifles: {
			icon: "<:manpower:716817688705499177>",
			description: "Breechloading rifles are firearms for which the user can simply insert a cartridge in order to reload, in comparison to earlier musket designs, which required a lengthy reloading process, and could only be reloaded as such standing up.",
			prerequisite_techs: ["rifled_cannons"],
			research_cost: 3000,
			year: 1842,
			category: "military_technology",
			modifiers: [
				"Enables **Breechloaded Infantry**",
				"Obsoletes **Guards**",
				"Obsoletes **Rangers**",
				"Obsoletes **Napoleonic Infantry**",
				"Obsoletes **Fusiliers**",
				"Obsoletes **Light Infantry**",
				"Obsoletes **Musketeers**",
				"Obsoletes **Flintlock Infantry**",
				"Obsoletes **Wheellock Infantry**"
			],
			unlocks: function (usr) {
				usr.available_units.push("breechloaded_infantry");
				deleteElement(usr.available_units, "guards", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "rangers", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "napoleonic_infantry", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "fusiliers", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "light_infantry", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "musketeers", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "flintlock_infantry", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "wheellock_infantry", [usr, "obsolete_units"]);
			}
		},
		railway_logistics: {
			icon: "<:coal:716791408714973204>",
			description: "By using railways to ship goods to our frontline troops, we can reduce expenditures on other slower forms of transport. However, Army Travel Speed will also slow down as railways, if sabotaged by the enemy, must be brought back up to pace and repaired in order to meet logistical needs.",
			prerequisite_techs: ["guards","improved_logistics"],
			research_cost: 3000,
			year: 1883,
			category: "military_technology",
			modifiers: [
				"**-25%** Army Travel Speed",
				"**-10%** Army Upkeep"
			],
			unlocks: function (usr) {
				usr.modifiers.army_travel_speed = usr.modifiers.army_travel_speed - 0.25;
				usr.modifiers.army_upkeep = usr.modifiers.army_upkeep - 0.10;
			}
		},
		modern_cavalry: {
			icon: "<:manpower:716817688705499177>",
			description: "By bringing our cavalry up to date, we can hopefully use it to exploit breakthroughs caused by the infantry and artillery and rapidly enforce occupation of selected territories.",
			prerequisite_techs: ["cavalry_logistics"],
			research_cost: 3000,
			year: 1905,
			category: "military_technology",
			modifiers: [
				"Enables **Modern Cavalry**",
				"**+20%** Army Travel Speed",
				"This will lead to new innovations in armoured warfare ..."
			],
			unlocks: function (usr) {
				usr.available_units.push("modern_cavalry");
				usr.modifiers.army_travel_speed = usr.modifiers.army_travel_speed + 0.20;
			}
		},
		colonial_mobilisation: {
			icon: "<:building:716827579650408538>",
			description: "By improving records not just at home, but overseas, we can bring a colonial army to bear to help its mother nation in times of need.",
			prerequisite_techs: ["colonial_elite_officers"],
			research_cost: 3000,
			year: 1914,
			category: "military_technology",
			modifiers: [
				"**+10%** Non-Core Manpower"
			],
			unlocks: function (usr) {
				usr.modifiers.non_core_manpower = usr.modifiers.non_core_manpower + 0.10;
			}
		},
		zeppelins: {
			icon: "<:aeroplanes:716821195407884358>",
			description: "The successor to dirigibles, zeppelins were solid-steel airships capable of bombing cities from great heights.",
			prerequisite_techs: ["dirigibles"],
			research_cost: 3500,
			year: 1893,
			category: "military_technology",
			modifiers: [
				"Enables **Zeppelins**"
			],
			unlocks: function (usr) {
				usr.available_units.push("zeppelins");
			}
		},
		early_railway_mobilisation: {
			icon: "<:coal:716791408714973204>",
			description: "By planning mobilisation manoeuvres and logistics around railway tracks, we can increase our mobilisation speed and quality of arms as logistical problems will be reduced.",
			prerequisite_techs: ["dirigibles"],
			research_cost: 3500,
			year: 1890,
			category: "military_technology",
			modifiers: [
				"Unlocks **Mobilisation - Breechloaded Infantry**",
				"**+1** Military Buildings per city",
				"**+5%** Mobilisation Speed",
				"**-5%** Army Upkeep",
				"**-5%** Training Cost"
			],
			unlocks: function (usr) {
				usr.modifiers.military_buildings_building_slots = usr.modifiers.military_buildings_building_slots + 1;
				setMobilisationUnit(usr.id, "breechloaded_infantry");
				usr.modifiers.army_upkeep = usr.modifiers.army_upkeep - 0.05;
				usr.modifiers.mobilisation_speed = usr.modifiers.mobilisation_speed - 0.05;
				usr.modifiers.training_cost = usr.modifiers.training_cost - 0.05;
			}
		},
		field_artillery: {
			icon: "<:artillery_piece:759161240999952445>",
			description: "Introducing new field artillery of better quality and larger quantity could have a great impact on the field, especially when manned by professional artillery crews in rear lines.",
			prerequisite_techs: ["railwayguns"],
			research_cost: 3500,
			year: 1897,
			category: "military_technology",
			modifiers: [
				"Enables **Field Artillery**",
				"**+5%** Army Upkeep",
				"Obsoletes **Rifled Cannons**"
			],
			unlocks: function (usr) {
				usr.available_units.push("field_artillery");
				usr.modifiers.army_upkeep = usr.modifiers.army_upkeep + 0.05;
				deleteElement(usr.available_units, "rifled_cannons", [usr, "obsolete_units"]);
			}
		},
		franc_tireurs: {
			icon: "<:artillery_piece:759161240999952445>",
			description: "Franc-Tireurs, or Francs-Tireurs in French, literally meaning 'free shooters' were guerrilla fighters that operated from the Franco-Prussian War until the end of World War II known for wreaking havoc behind enemy lines by acting as civilian combatants.",
			prerequisite_techs: ["breechloaded_rifles"],
			research_cost: 3500,
			year: 1870,
			category: "military_technology",
			modifiers: [
				"Enables **Franc-Tireurs**, a unit that requires virtually only manpower."
			],
			unlocks: function (usr) {
				usr.available_units.push("franc_tireurs");
			}
		},
		advanced_trenches: {
			icon: "<:colonisation:716821194891853826>",
			description: "By planning out our trenches rather than building them hastily on the spot, and reinforcing them with wooden support posts, and ensuring right angles to minimise the shock of an artillery explosion or shrapnel, we can maximise defensive effectiveness in battle, especially if trench warfare takes hold ...",
			prerequisite_techs: ["railway_logistics"],
			research_cost: 3500,
			year: 1913,
			category: "military_technology",
			modifiers: [
				"**+15%** Infantry DP"
			],
			unlocks: function (usr) {
				usr.modifiers.ground_units_dp = usr.modifiers.ground_units_dp + 0.15;
			}
		},
		military_garrison: {
			icon: "<:soldiers:732730754592669702>",
			description: "Utilising overseas military garrisons in order to suppress revolts and maintain public order during times that the native colonial army is serving abroad could have great benefits in the realm of improving stability ...",
			prerequisite_techs: ["railway_logistics"],
			research_cost: 3500,
			year: 1865,
			category: "military_technology",
			modifiers: [
				"**+10%** Stability",
				"**+1** Barracks per city"
			],
			unlocks: function (usr) {
				usr.modifiers.stability_modifier = usr.modifiers.stability_modifier + 10;
				usr.modifiers.barracks = usr.modifiers.barracks + 1;
			}
		},
		biplanes: {
			icon: "<:aeroplanes:716821195407884358>",
			description: "Biplanes, the first heavier than air aircraft to ever have been used was developed in the earlier half of the 20th century and was used en masse for the first time in the Great War for reconaissance, bombing, and dogfighting.",
			prerequisite_techs: ["zeppelins"],
			research_cost: 4000,
			year: 1913,
			category: "military_technology",
			modifiers: [
				"Enables **Biplanes**",
				"**+5%** Air DP"
			],
			unlocks: function (usr) {
				usr.available_units.push("biplanes");
				usr.modifiers.aeroplanes_dp = usr.modifiers.aeroplanes_dp + 0.05;
			}
		},
		great_war_ncos: {
			icon: "<:aristocrats:732730754643132457>",
			description: "NCOs, or non-commissioned officers are officers not commissioned (through military academies and the like), but rather promoted on up through the regular ranks that came to serve great importance in modern warfare.",
			prerequisite_techs: ["early_railway_mobilisation"],
			research_cost: 4000,
			year: 1914,
			category: "military_technology",
			modifiers: [
				"**+5%** Infantry DP",
				"**+5%** Artillery AP",
				"**-5%** Infantry AP",
				"**-5%** Army Upkeep"
			],
			unlocks: function (usr) {
				usr.modifiers.ground_units_ap = usr.modifiers.ground_units_ap + 0.05;
				usr.modifiers.ground_units_dp = usr.modifiers.ground_units_dp + 0.05;
				usr.modifiers.ground_artillery_ap = usr.modifiers.ground_artillery_ap + 0.05;
				usr.modifiers.army_upkeep = usr.modifiers.army_upkeep - 0.05;
			}
		},
		logistics_companies: {
			icon: "<:trade:716828677115084812>",
			description: "Logistics companies are detachments of regular divisions in charge of organising and handling the logistical backend needed to keep armies well-supplied and fed.",
			prerequisite_techs: ["advanced_trenches"],
			research_cost: 4000,
			year: 1866,
			category: "military_technology",
			modifiers: [
				"**-15%** Army Travel Speed",
				"**-10%** Army Upkeep"
			],
			unlocks: function (usr) {
				usr.modifiers.army_travel_speed = usr.modifiers.army_travel_speed - 0.15;
				usr.modifiers.army_upkeep = usr.modifiers.army_upkeep - 0.10;
			}
		},
		motor_war_cars: {
			icon: "<:government:716817688693047306>",
			description: "Motor War Cars were early experimental armoured cars that shielded the driver, and were often armed with machine guns. They were never used in combat.",
			prerequisite_techs: ["modern_cavalry"],
			research_cost: 4000,
			year: 1899,
			category: "military_technology",
			modifiers: [
				"Enables **Auto Plants**",
				"This will lead to further advancements in the field of armoured warfare ..."
			],
			unlocks: function (usr) {
				usr.available_buildings.push("auto_plants");
			}
		},
		incendiary_ammunition: {
			icon: "<:coal:716791408714973204>",
			description: "Incendiary ammunition allowed for improved defence of cities as zeppelin bombers no longer held the capability to bomb cities unimpeded.",
			prerequisite_techs: ["biplanes"],
			research_cost: 4500,
			year: 1916,
			category: "military_technology",
			modifiers: [
				"**+5%** Army Upkeep",
				"**+5%** Training Cost",
				"**-5%** Air AP",
				"**+10%** Air DP",
				"Obsoletes **Reconaissance Balloons**",
				"Obsoletes **Dirigibles**",
				"Obsoletes **Zeppelins**"
			],
			unlocks: function (usr) {
				usr.modifiers.army_upkeep = usr.modifiers.army_upkeep + 0.05;
				usr.modifiers.training_cost = usr.modifiers.training_cost + 0.05;
				usr.modifiers.aeroplanes_ap = usr.modifiers.aeroplanes_ap - 0.05;
				usr.modifiers.aeroplanes_dp = usr.modifiers.aeroplanes_dp + 0.10;
				deleteElement(usr.available_units, "reconaissance_balloons", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "dirigibles", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "zeppelins", [usr, "obsolete_units"]);
			}
		},
		early_bombers: {
			icon: "<:aeroplanes:716821195407884358>",
			description: "Early bombers were often large biplanes that could carry a few bombs in their bomb load, and flew relatively low over enemy targets, often without fighter escorts.",
			prerequisite_techs: ["biplanes"],
			research_cost: 4500,
			year: 1912,
			category: "military_technology",
			modifiers: [
				"Enables **Early Bombers**"
			],
			unlocks: function (usr) {
				usr.available_units.push("early_bombers");
			}
		},
		mobilisation_timetables: {
			icon: "<:building:716827579650408538>",
			description: "By planning mobilisations around strict timetables, general mobilisation of the population could now take place with rapidity, and with better arms as logistics had already been sorted out beforehand.",
			prerequisite_techs: ["great_war_ncos"],
			research_cost: 4500,
			year: 1908,
			category: "military_technology",
			modifiers: [
				"Unlocks **Mobilisation - Bolt Action Infantry**",
				"**+65%** Army Travel Speed",
				"**+50%** Mobilisation Size",
				"**+5%** Mobilisation Speed",
				"**-5%** Mobilisation Impact"
			],
			unlocks: function (usr) {
				setMobilisationUnit(usr.id, "bolt_action_infantry");
				usr.modifiers.mobilisation_size = usr.modifiers.mobilisation_size + 0.50;
				usr.modifiers.army_travel_speed = usr.modifiers.army_travel_speed + 0.65;
				usr.modifiers.mobilisation_speed = usr.modifiers.mobilisation_speed - 0.05;
				usr.modifiers.mobilisation_impact = usr.modifiers.mobilisation_impact - 0.05;
			}
		},
		artillery_howitzers: {
			icon: "<:artillery_piece:759161240999952445>",
			description: "Artillery howitzers were conventional artillery pieces used throughout the 20th century that shot projectiles over a long range, despite its short barrel.",
			prerequisite_techs: ["field_artillery"],
			research_cost: 4500,
			year: 1914,
			category: "military_technology",
			modifiers: [
				"Enables **Artillery Howitzers**"
			],
			unlocks: function (usr) {
				usr.available_units.push("artillery_howitzers");
			}
		},
		bolt_action_infantry: {
			icon: "<:active_personnel:716820390474940426>",
			description: "Bolt-action rifles, known for their ease of use, served as a primary infantry weapon across European Continental armies during the Great War, but are typically used nowadays for guns of larger calibre.",
			prerequisite_techs: ["franc_tireurs","logistics_companies"],
			research_cost: 4500,
			year: 1888,
			category: "military_technology",
			modifiers: [
				"Enables **Bolt-Action Infantry**"
			],
			unlocks: function (usr) {
				usr.available_units.push("bolt_action_infantry");
			}
		},
		flamethrower_units: {
			icon: "<:cb:716828676855169107>",
			description: "Flamethrower units, often used for clearing out enemy trenches and occassional partisans were an effective way to intimidate enemies, despite the danger posed by using one.",
			prerequisite_techs: ["franc_tireurs","logistics_companies"],
			research_cost: 4500,
			year: 1901,
			category: "military_technology",
			modifiers: [
				"**+10%** Infantry AP"
			],
			unlocks: function (usr) {
				usr.modifiers.ground_units_ap = usr.modifiers.ground_units_ap + 0.10;
			}
		},
		armoured_cars: {
			icon: "<:land_vehicles:716821195215077406>",
			description: "Armoured cars were land-based vehicles that often functioned as mobile strongpoints to protect infantry units and lead in charges, or in rather unsavoury circumstances, to serve as distraction for enemy artillery crews.",
			prerequisite_techs: ["motor_war_cars"],
			research_cost: 4500,
			year: 1914,
			category: "military_technology",
			modifiers: [
				"Enables **Armoured Cars**"
			],
			unlocks: function (usr) {
				usr.available_units.push("armoured_cars");
			}
		},
		improved_biplanes: {
			icon: "<:aeroplanes:716821195407884358>",
			description: "Later improvements in biplanes helped cement its dominance over the earlier observation balloons and dirigibles, eventually itself being replaced by monoplanes in the 1920s and 1930s.",
			prerequisite_techs: ["incendiary_ammunition"],
			research_cost: 5000,
			year: 1916,
			category: "military_technology",
			modifiers: [
				"Enables **Improved Biplanes**",
				"**+1** Air Interception Range"
			],
			unlocks: function (usr) {
				usr.available_units.push("improved_biplanes");
				usr.modifiers.air_interception_range += 1;
			}
		},
		trench_warfare: {
			icon: "<:soldiers:732730754592669702>",
			description: "As war increasingly became more total, and armies of millions attempted to outflank armies of millions, perhaps it was only inevitable that war would grind to a halt, and that both sides would be forced to win it only one way - last man standing.",
			prerequisite_techs: ["mobilisation_timetables","artillery_howitzers"],
			research_cost: 5000,
			year: 1915,
			category: "military_technology",
			modifiers: [
				"**+15%** Infantry DP"
			],
			unlocks: function (usr) {
				usr.modifiers.ground_units_dp = usr.modifiers.ground_units_dp + 0.15;
			}
		},
		creeping_barrage: {
			icon: "<:artillery_piece:759161240999952445>",
			description: "The creeping barrage is an artillery method that requires artillery pieces to be fired with great precision immediately in front of advancing troops so as to clear out enemy fortifications and defences. It was later improved using pre-sighting artillery.",
			prerequisite_techs: ["artillery_howitzers"],
			research_cost: 5000,
			year: 1917,
			category: "military_technology",
			modifiers: [
				"**+5%** Artillery AP",
				"**+10%** Training Cost",
				"**+5%** Army Upkeep"
			],
			unlocks: function (usr) {
				usr.modifiers.ground_artillery_ap = usr.modifiers.ground_artillery_ap + 0.05;
				usr.modifiers.training_cost = usr.modifiers.training_cost + 0.10;
				usr.modifiers.army_upkeep = usr.modifiers.army_upkeep + 0.05;
			}
		},
		mg_companies: {
			icon: "<:active_personnel:716820390474940426>",
			description: "Machine gun companies, or MG companies for short, were companies that were given the special task of operating machine guns in order to improve the defensive capabilities of ordinary infantry in trenches. Ah, old colonial maxim, 'we have got the Maxim gun, and they do not'. Now everyone has them.",
			prerequisite_techs: ["bolt_action_infantry"],
			research_cost: 5000,
			year: 1915,
			category: "military_technology",
			modifiers: [
				"Enables **MG Companies**",
				"**+10%** Infantry DP"
			],
			unlocks: function (usr) {
				usr.available_units.push("mg_companies");
				usr.modifiers.ground_units_dp = usr.modifiers.ground_units_dp + 0.10;
			}
		},
		defence_in_depth: {
			icon: "<:old_map:716821884867444746>",
			description: "Defence-in-depth is a military tactic that attempts to stall the attacker by laying out layers of fortifications with the end goal of causing massive amounts of casualties on the opposing end.",
			prerequisite_techs: ["flamethrower_units"],
			research_cost: 5000,
			year: 1916,
			category: "military_technology",
			modifiers: [
				"**+5%** Infantry DP",
				"**+5%** Artillery DP",
				"**+10%** Army Upkeep",
				"**-40%** Army Travel Speed"
			],
			unlocks: function (usr) {
				usr.modifiers.ground_units_dp = usr.modifiers.ground_units_dp + 0.05;
				usr.modifiers.ground_artillery_dp = usr.modifiers.ground_artillery_dp + 0.05;
				usr.modifiers.army_upkeep = usr.modifiers.army_upkeep + 0.10;
				usr.modifiers.army_travel_speed = usr.modifiers.army_travel_speed - 0.40;
			}
		},
		landship: {
			icon: "<:land_vehicles:716821195215077406>",
			description: "The landship was the name given to early tanks whose job was to roll over enemy trenches and smash holes in the lines for advancing infantry. They were often slow and cumbersome, and prone to malfunction.",
			prerequisite_techs: ["flamethrower_units"],
			research_cost: 5000,
			year: 1916,
			category: "military_technology",
			modifiers: [
				"Enables **Landships**"
			],
			unlocks: function (usr) {
				usr.available_units.push("landship");
			}
		},
		monoplane_fighters: {
			icon: "<:aeroplanes:716821195407884358>",
			description: "Monoplane fighters, lacking the fragility of earlier biplane fighters were first produced at the end of the First World War, but saw increased service throughout the 20s and 30s as they increasingly obsoleted earlier aircraft.",
			prerequisite_techs: ["improved_biplanes","early_bombers"],
			research_cost: 5500,
			year: 1915,
			category: "military_technology",
			modifiers: [
				"Enables **Monoplane Fighters**",
				"**+2** Air Interception Range"
			],
			unlocks: function (usr) {
				usr.available_units.push("monoplane_fighters");
				usr.modifiers.air_interception_range += 2;
			}
		},
		monoplane_bombers: {
			icon: "<:aeroplanes:716821195407884358>",
			description: "Monoplane bombers, with extended fuel capacity and an improved bomb bay that could now hold multiple bombs, were capable of flying longer distances, and were first used in combat in the famous German Gotha raids on London.",
			prerequisite_techs: ["improved_biplanes","early_bombers"],
			research_cost: 5500,
			year: 1917,
			category: "military_technology",
			modifiers: [
				"Enables **Monoplane Bombers**"
			],
			unlocks: function (usr) {
				usr.available_units.push("monoplane_bombers");
			}
		},
		modern_military_doctrine: {
			icon: "<:old_map:716821884867444746>",
			description: "Modern military doctrine, treating tactics and logistics as a science instead of an art, was borne out of the fire of the Great War, and eventually came to domineer the perspective on modern military thought.",
			prerequisite_techs: ["improved_biplanes","early_bombers","trench_warfare"],
			research_cost: 5500,
			year: 1918,
			category: "military_technology",
			modifiers: [
				"**+1** Military Buildings per city",
				"**+10%** Infantry AP",
				"**+5%** Artillery AP",
				"**+10%** Air AP",
				"**-5%** Army Upkeep",
				"**-10%** Infantry DP",
				"**-15%** Mobilisation Impact"
			],
			unlocks: function (usr) {
				usr.modifiers.military_buildings_building_slots = usr.modifiers.military_buildings_building_slots + 1;
				usr.modifiers.ground_units_ap = usr.modifiers.ground_units_ap + 0.10;
				usr.modifiers.ground_artillery_ap = usr.modifiers.ground_artillery_ap + 0.05;
				usr.modifiers.aeroplanes_ap = usr.modifiers.aeroplanes_ap + 0.10;
				usr.modifiers.army_upkeep = usr.modifiers.army_upkeep - 0.05;
				usr.modifiers.ground_units_dp = usr.modifiers.ground_units_dp - 0.10;
				usr.modifiers.mobilisation_impact = usr.modifiers.mobilisation_impact - 0.15;
			}
		},
		mobile_artillery: {
			icon: "<:artillery_piece:759161240999952445>",
			description: "Mobile artillery guns, often made mobile with the aid of a secondary motorised vehicle could be redeployed to needed sectors of the battlefield with relative speed, allowing for increased coverage with limited resources.",
			prerequisite_techs: ["creeping_barrage"],
			research_cost: 5500,
			year: 1919,
			category: "military_technology",
			modifiers: [
				"**+5%** Artillery AP",
				"**+35%** Army Travel Speed"
			],
			unlocks: function (usr) {
				usr.modifiers.ground_artillery_ap = usr.modifiers.ground_artillery_ap + 0.05;
				usr.modifiers.army_travel_speed = usr.modifiers.army_travel_speed + 0.35;
			}
		},
		great_war_infantry: {
			icon: "<:soldiers:732730754592669702>",
			description: "Infantrymen of the Great War were armed with a variety of different weapons, most of which were standard-issue and made by their respective countries. Over the course of the war, this equipment was adapted as new tactics and challenges became increasingly evident.",
			prerequisite_techs: ["mg_companies"],
			research_cost: 5500,
			year: 1915,
			category: "military_technology",
			modifiers: [
				"Enables **Great War Infantry**",
				"Obsoletes **Riflemen**",
				"Obsoletes **Breechloaded Infantry**"
			],
			unlocks: function (usr) {
				usr.available_units.push("great_war_infantry");
				deleteElement(usr.available_units, "riflemen", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "breechloaded_infantry", [usr, "obsolete_units"]);
			}
		},
		mobile_field_hospitals: {
			icon: "<:infamy:716817688453709905>",
			description: "During times of war, mobile field hospitals were often the only treatment that wounded soldiers could receive and served to treat serious injuries sustained on the battlefield in hopes of them making a speedy recovery and being able to return to the front.",
			prerequisite_techs: ["defence_in_depth"],
			research_cost: 5500,
			year: 1914,
			category: "military_technology",
			modifiers: [
				"**+2%** National Manpower",
				"**+5%** Army Upkeep"
			],
			unlocks: function (usr) {
				usr.modifiers.national_manpower = usr.modifiers.national_manpower + 0.02;
				usr.modifiers.army_upkeep = usr.modifiers.army_upkeep + 0.05;
			}
		},
		motorised_infantry: {
			icon: "<:land_vehicles:716821195215077406>",
			description: "Motorised infantry, or infantry travelling on motorised vehicles can help improve Army Travel Speed and keep pace with breakthroughs and advances made by armoured vehicles.",
			prerequisite_techs: ["armoured_cars"],
			research_cost: 5500,
			year: 1918,
			category: "military_technology",
			modifiers: [
				"**+50%** Army Travel Speed"
			],
			unlocks: function (usr) {
				usr.modifiers.army_travel_speed = usr.modifiers.army_travel_speed + 0.50;
			}
		},
		light_tank: {
			icon: "<:land_vehicles:716821195215077406>",
			description: "Light tanks, designed for speed and manoeuvrability, typically played supporting roles for the infantry.",
			prerequisite_techs: ["landship"],
			research_cost: 5500,
			year: 1917,
			category: "military_technology",
			modifiers: [
				"Enables **Light Tanks**"
			],
			unlocks: function (usr) {
				usr.available_units.push("light_tanks");
			}
		},
		superior_firepower: {
			icon: "<:artillery_piece:759161240999952445>",
			description: "Bullets are cheap, men are not. By overwhelming our enemy with artillery, we can ensure minimal casualties when our infantrymen do the mopping.",
			prerequisite_techs: ["modern_military_doctrine"],
			research_cost: 6000,
			year: 1916,
			category: "military_technology",
			modifiers: [
				"**+10%** Artillery AP"
			],
			unlocks: function (usr) {
				usr.modifiers.ground_artillery_ap = usr.modifiers.ground_artillery_ap + 0.10;
			}
		},
		ack_ack_guns: {
			icon: "<:artillery_piece:759161240999952445>",
			description: "Ack-ack guns, Archie, anti-aircraft guns, many words are used to describe the same weaponry necessary to shoot down aeroplanes. In order to avoid our civilian centres from being bombed, it is imperative that we manage to protect our cities properly.",
			prerequisite_techs: ["mobile_artillery"],
			research_cost: 6000,
			year: 1915,
			category: "military_technology",
			modifiers: [
				"Enables **Ack-Ack Guns** as a building in cities"
			],
			unlocks: function (usr) {
				usr.available_buildings.push("ack_ack_guns");
			}
		},
		shock_troops: {
			icon: "<:soldiers:732730754592669702>",
			description: "Shock troops, mobile, elite soldiers specialised in hitting enemy defensive lines hard and fast without fear and scrambling from mound to mound for cover could help revolutionise the war effort by introducing new infantry tactics.",
			prerequisite_techs: ["mobile_artillery"],
			research_cost: 6000,
			year: 1916,
			category: "military_technology",
			modifiers: [
				"Enables **Shock Troops**",
				"**+10%** Infantry AP"
			],
			unlocks: function (usr) {
				usr.available_units.push("shock_troops");
				usr.modifiers.ground_units_ap = usr.modifiers.ground_units_ap + 0.10;
			}
		},
		chemical_cannisters: {
			icon: "<:artillery_piece:759161240999952445>",
			description: "Chemical cannisters, either released on the ground when winds are favourable, or served up as ammunition for our artillery howitzers, is an effective method in getting enemy troops to panic before an advance is made.",
			prerequisite_techs: ["mobile_artillery"],
			research_cost: 6000,
			year: 1915,
			category: "military_technology",
			modifiers: [
				"**You will now roll first when defending, unless the other player has War of Movement researched.**",
				"",
				"**+5%** Infantry AP",
				"**+5%** Armoured AP"
			],
			unlocks: function (usr) {
				usr.modifiers.ground_units_ap = usr.modifiers.ground_units_ap + 0.05;
				usr.modifiers.ground_vehicles_ap = usr.modifiers.ground_vehicles_ap + 0.05;
			}
		},
		armoured_personnel_carriers: {
			icon: "<:land_vehicles:716821195215077406>",
			description: "Armoured personnel carriers are not only transports designed to carry infantry rapidly, but to carry them whilst being protected. In addition, they come with some light armaments themselves, allowing for a light response to any enemy fire.",
			prerequisite_techs: ["mobile_artillery"],
			research_cost: 6000,
			year: 1917,
			category: "military_technology",
			modifiers: [
				"Enables **Armoured Personnel Carriers**"
			],
			unlocks: function (usr) {
				usr.available_units.push("armoured_personnel_carriers");
			}
		},
		improved_tank_reliability: {
			icon: "<:land_vehicles:716821195215077406>",
			description: "Despite a majority of tanks breaking down on the battlefield each time they are used, they have already shown their worth in combat, and so extra attention to improving their reliability should be made in order to further future advances.",
			prerequisite_techs: ["light_tank"],
			research_cost: 6000,
			year: 1917,
			category: "military_technology",
			modifiers: [
				"**+5%** Armoured AP",
				"**+5%** Army Upkeep"
			],
			unlocks: function (usr) {
				usr.modifiers.ground_vehicles_ap = usr.modifiers.ground_vehicles_ap + 0.05;
				usr.modifiers.army_upkeep = usr.modifiers.army_upkeep + 0.05;
			}
		},
		propeller_fighters: {
			icon: "<:aeroplanes:716821195407884358>",
			description: "Propeller fighters, or fighters using the propeller as their main means of propulsion became increasingly common in the years leading up to the outbreak of the Second World War and came to be sme of the most widely recognised aircraft even today.",
			prerequisite_techs: ["monoplane_fighters"],
			research_cost: 6500,
			year: 1932,
			category: "military_technology",
			modifiers: [
				"Enables **Propeller Fighters**",
				"**+3** Air Interception Range"
			],
			unlocks: function (usr) {
				usr.available_units.push("propeller_fighters");
				usr.modifiers.air_interception_range += 3;
			}
		},
		interwar_bombers: {
			icon: "<:aeroplanes:716821195407884358>",
			description: "Interwar bombers, or bombers built during the two decades of peace, increasingly became dominated by monoplane type bombers that held increased cargo capacity for bombs, resulting in more effective air raids as evidenced by the destruction of Guernica.",
			prerequisite_techs: ["monoplane_bombers"],
			research_cost: 6500,
			year: 1935,
			category: "military_technology",
			modifiers: [
				"Enables **Interwar Bombers**",
				"**+5%** Air AP"
			],
			unlocks: function (usr) {
				usr.available_units.push("interwar_bombers");
				usr.modifiers.aeroplanes_ap = usr.modifiers.aeroplanes_ap + 0.05;
			}
		},
		war_of_movement: {
			icon: "<:old_map:716821884867444746>",
			description: "War of movement was the beginning of the doctrine known as manoeuvre warfare, and was first employed in the closing days of the First World War, in the Hundred Days' Offensive as the Allied armies sought to beat back the German army via shock and disruption.",
			prerequisite_techs: ["superior_firepower"],
			research_cost: 6500,
			year: 1918,
			category: "military_technology",
			modifiers: [
				"**You will always roll first when attacking.**",
				"",
				"**+10%** Infantry AP",
				"**+5%** Artillery AP",
				"**+10%** Armour AP",
				"**+10%** Army Upkeep"
			],
			unlocks: function (usr) {
				usr.modifiers.ground_units_ap = usr.modifiers.ground_units_ap + 0.10;
				usr.modifiers.ground_artillery_ap = usr.modifiers.ground_artillery_ap + 0.05;
				usr.modifiers.ground_vehicles_ap = usr.modifiers.ground_vehicles_ap + 0.10;
				usr.modifiers.army_upkeep = usr.modifiers.army_upkeep + 0.10;
			}
		},
		freikorps: {
			icon: "<:soldiers:732730754592669702>",
			description: "The German Freikorps were post-war volunteer troops often comprised of veterans of the Great War that were said to be the result of difficulty to readjust back to normal civilian life, and helped quash the German Revolution and the Spartacist Uprising. They were also known for their role in the Baltic conflicts.",
			prerequisite_techs: ["shock_troops"],
			research_cost: 6500,
			year: 1919,
			category: "military_technology",
			modifiers: [
				"Enables **Freikorps**"
			],
			unlocks: function (usr) {
				usr.available_units.push("freikorps");
			}
		},
		interwar_tanks: {
			icon: "<:land_vehicles:716821195215077406>",
			description: "With new experiments being conducted, and the agreement that tanks should be designed around a central turret, interwar tanks became some of the first truly recognisable tanks in service, but continued to face reliability issues.",
			prerequisite_techs: ["improved_tank_reliability"],
			research_cost: 6500,
			year: 1935,
			category: "military_technology",
			modifiers: [
				"Enables **Interwar Tanks**",
				"Obsoletes **Landship**"
			],
			unlocks: function (usr) {
				usr.available_units.push("interwar_tanks");
				deleteElement(usr.available_units, "landship", [usr, "obsolete_units"]);
			}
		},
		fighters: {
			icon: "<:aeroplanes:716821195407884358>",
			description: "At the outbreak of the Second World War, increasingly effective ways to intercept enemy bombers were developed, and the concept of bomber escorts were first suggested, leading to a competition between interception and escort range. The golden age of dogfighting begins ...",
			prerequisite_techs: ["improved_tank_reliability"],
			research_cost: 7000,
			year: 1939,
			category: "military_technology",
			modifiers: [
				"Enables **Fighters**",
				"**+2** Air Interception Range",
				"Obsoletes **Biplanes**",
				"Obsoletes **Improved Biplanes**"
			],
			unlocks: function (usr) {
				usr.available_units.push("fighters");
				usr.modifiers.air_interception_range += 2;
				deleteElement(usr.available_units, "biplanes", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "improved_biplanes", [usr, "obsolete_units"]);
			}
		},
		combined_arms_doctrine: {
			icon: "<:old_map:716821884867444746>",
			description: "Combined arms doctrine is a military theory in which all available assets of a diverse nature at the disposal of an attacking country are employed in mass formations in order to attempt a successful breakthrough.",
			prerequisite_techs: ["war_of_movement"],
			research_cost: 7000,
			year: 1936,
			category: "military_technology",
			modifiers: [
				"**+5%** Infantry DP",
				"**+5%** Armoured AP",
				"**+3%** Artillery AP",
				"**+100%** Army Travel Speed",
				"**+1** Aeroport per city",
				"**+1** Barracks per city",
				"**+1** Artillery Factory per city",
				"**+1** Auto Plant per city",
				"**+5%** Army Upkeep",
				"**+5%** Training Cost"
			],
			unlocks: function (usr) {
				usr.modifiers.ground_units_dp = usr.modifiers.ground_units_dp + 0.05;
				usr.modifiers.ground_vehicles_ap = usr.modifiers.ground_vehicles_ap + 0.05;
				usr.modifiers.ground_artillery_ap = usr.modifiers.ground_artillery_ap + 0.05;
				usr.modifiers.army_travel_speed = usr.modifiers.army_travel_speed + 1.00;
				usr.modifiers.army_upkeep = usr.modifiers.army_upkeep + 0.05;
				usr.modifiers.training_cost = usr.modifiers.training_cost + 0.05;
				usr.modifiers.air_bases = usr.modifiers.air_bases + 1;
				usr.modifiers.barracks = usr.modifiers.barracks + 1;
				usr.modifiers.artillery_factories = usr.modifiers.artillery_factories + 1;
				usr.modifiers.auto_plants = usr.modifiers.auto_plants + 1;
			}
		},
		long_range_artillery: {
			icon: "<:artillery_piece:759161240999952445>",
			description: "Long-range artillery, used exclusively for bombardment of distant targets, can prove to be a valuable tool when used en masse as a blunt instrument against enemy forces, a blunt instrument that does not require the expenditure of our own manpower.",
			prerequisite_techs: ["ack_ack_guns"],
			research_cost: 7000,
			year: 1938,
			category: "military_technology",
			modifiers: [
				"Enables **Long-Range Artillery**",
				"Obsoletes **Railwayguns**",
				"Obsoletes **Field Artillery**"
			],
			unlocks: function (usr) {
				usr.available_units.push("long_range_artillery");
				deleteElement(usr.available_units, "railwayguns", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "field_artillery", [usr, "obsolete_units"]);
			}
		},
		modern_military_engineering: {
			icon: "<:steel:716791408828088420>",
			description: "Modern military engineers should be a flexible and adapatable tool that are always needed, but also always reliable for overcoming adverse situations.",
			prerequisite_techs: ["shock_troops","chemical_cannisters"],
			research_cost: 7000,
			year: 1940,
			category: "military_technology",
			modifiers: [
				"**+10%** Infantry AP",
				"**+5%** Artillery AP"
			],
			unlocks: function (usr) {
				usr.modifiers.ground_units_ap = usr.modifiers.ground_units_ap + 0.10;
				usr.modifiers.ground_artillery_ap = usr.modifiers.ground_artillery_ap + 0.05;
			}
		},
		half_track: {
			icon: "<:land_vehicles:716821195215077406>",
			description: "Half-tracks are military vehicles that combine both regular tyred wheels at the front, and tracked wheels at the back for maximum manoeuvrability. They were typically armed with machine guns and carried on board various infantry soldiers.",
			prerequisite_techs: ["armoured_personnel_carriers"],
			research_cost: 7000,
			year: 1938,
			category: "military_technology",
			modifiers: [
				"Enables **Half Tracks**",
				"Obsoletes **All Previous Cavalry**"
			],
			unlocks: function (usr) {
				usr.available_units.push("half_tracks");
				deleteElement(usr.available_units, "lance_cavalry", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "heavy_cavalry", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "light_cavalry", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "cuirassiers", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "hussars", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "dragoons", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "uhlans", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "mounted_rifles", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "modern_cavalry", [usr, "obsolete_units"]);
			}
		},
		medium_tank: {
			icon: "<:land_vehicles:716821195215077406>",
			description: "The medium tank was the predecessor to the modern main battle tank that sought to keep the manoeuvrability and mobility of light tanks, and the armaments and armour of heavier ones. They tended to form the main bodies of armoured corps.",
			prerequisite_techs: ["interwar_tanks"],
			research_cost: 7000,
			year: 1938,
			category: "military_technology",
			modifiers: [
				"Enables **Medium Tanks**"
			],
			unlocks: function (usr) {
				usr.available_units.push("medium_tanks");
			}
		},
		advanced_fighters: {
			icon: "<:aeroplanes:716821195407884358>",
			description: "Advanced fighters were produced in the latter days of World War II and were primarily built to escort bombers instead of flying solo sorties over enemy airfields.",
			prerequisite_techs: ["fighters"],
			research_cost: 7500,
			year: 1940,
			category: "military_technology",
			modifiers: [
				"Enables **Advanced Fighters**",
				"**+2** Air Interception Range",
				"**+5%** Air DP"
			],
			unlocks: function (usr) {
				usr.available_units.push("advanced_fighters");
				usr.modifiers.aeroplanes_dp = usr.modifiers.aeroplanes_dp + 0.05;
				usr.modifiers.air_interception_range += 2;
			}
		},
		bombers: {
			icon: "<:aeroplanes:716821195407884358>",
			description: "Strategic bombers meant to target civilian and industrial targets became increasingly common in the Second World War, as warfare reached new heights of totality, and bombs often fell kilometres off-target.",
			prerequisite_techs: ["interwar_bombers"],
			research_cost: 7500,
			year: 1940,
			category: "military_technology",
			modifiers: [
				"Enables **Bombers**"
			],
			unlocks: function (usr) {
				usr.available_units.push("bombers");
			}
		},
		mobile_warfare_doctrine: {
			icon: "<:land_vehicles:716821195215077406>",
			description: "Mobile warfare, a variant of manoeuvre warfare, is a military school of thought that believes in the capability of armoured units and aeroplanes to act as the initial instruments on which to acheive a breakthrough of the enemy lines. Thereafter, in order to reduce logistical problems, motorised infantry should be used.",
			prerequisite_techs: ["combined_arms_doctrine"],
			research_cost: 7500,
			year: 1939,
			category: "military_technology",
			modifiers: [
				"**+10%** Armoured AP",
				"**+5%** Air AP"
			],
			unlocks: function (usr) {
				usr.modifiers.ground_vehicles_ap = usr.modifiers.ground_vehicles_ap + 0.10;
				usr.modifiers.aeroplanes_ap = usr.modifiers.aeroplanes_ap + 0.05;
			}
		},
		modern_howitzers: {
			icon: "<:artillery_piece:759161240999952445>",
			description: "Modern howitzers typically featured rifled barrels and improved sights as well as longer barrels and are meant to be used in conjunction with motorised units.",
			prerequisite_techs: ["long_range_artillery"],
			research_cost: 7500,
			year: 1938,
			category: "military_technology",
			modifiers: [
				"Enables **Modern Howitzers**"
			],
			unlocks: function (usr) {
				usr.available_units.push("modern_howitzers");
			}
		},
		paratroopers: {
			icon: "<:aeroplanes:716821195407884358>",
			description: "Paratroopers are light infantry units capable of infiltrating behind enemy lines to capture strategic targets, but do not come with much armament themselves, and cannot be used single-handedly to support offensives, as seen in Operation Market Garden.",
			prerequisite_techs: ["freikorps"],
			research_cost: 7500,
			year: 1940,
			category: "military_technology",
			modifiers: [
				"Enables **Paratroopers**",
				"**+5%** Infantry AP"
			],
			unlocks: function (usr) {
				usr.available_units.push("paratroopers");
				usr.modifiers.ground_units_ap = usr.modifiers.ground_units_ap + 0.05;
			}
		},
		support_companies: {
			icon: "<:trade:716828677115084812>",
			description: "Support companies are often used to supply modern armies, not just logistically, but with intelligence, anti-aircraft capabilities, and other secondary purposes.",
			prerequisite_techs: ["modern_military_engineering"],
			research_cost: 7500,
			year: 1935,
			category: "military_technology",
			modifiers: [
				"**-15%** Army Upkeep",
				"**+5%** Training Cost"
			],
			unlocks: function (usr) {
				usr.modifiers.army_upkeep = usr.modifiers.army_upkeep - 0.15;
				usr.modifiers.training_cost = usr.modifiers.training_cost + 0.05;
			}
		},
		heavy_tank: {
			icon: "<:land_vehicles:716821195215077406>",
			description: "The heavy tank is a slow, lumbering vehicle, but is heavily armoured and capable of punching through the armour of any lower tank. They were to be the emperors of the battlefield, the battleships on which generals have so often hinged their offensives in the 20th century.",
			prerequisite_techs: ["medium_tank"],
			research_cost: 7500,
			year: 1921,
			category: "military_technology",
			modifiers: [
				"Enables **Heavy Tank**",
				"**+5%** Armour AP"
			],
			unlocks: function (usr) {
				usr.available_units.push("heavy_tanks");
				usr.modifiers.ground_vehicles_ap = usr.modifiers.ground_vehicles_ap + 0.05;
			}
		},
		extended_air_range: {
			icon: "<:petroil:716791408748658739>",
			description: "With advancements in fuel efficiency, and engines of improved power, fighter escorts can now accompany bombers all the way to their target, resulting in further damages on enemy cities.",
			prerequisite_techs: ["advanced_fighters","bombers"],
			research_cost: 8000,
			year: 1943,
			category: "military_technology",
			modifiers: [
				"**+1** Military Building per city",
				"**+5** Air Interception Range",
				"**+25%** Army Travel Speed",
				"**+5%** Air AP"
			],
			unlocks: function (usr) {
				usr.modifiers.military_buildings_building_slots = usr.modifiers.military_buildings_building_slots + 1;
				usr.modifiers.army_travel_speed = usr.modifiers.army_travel_speed + 0.25;
				usr.modifiers.aeroplanes_ap = usr.modifiers.aeroplanes_ap + 0.05;
				usr.modifiers.air_interception_range += 5;
			}
		},
		mass_mobilisation: {
			icon: "<:old_map:716821884867444746>",
			description: "As new wars became wars of totality, it became imperative that the now cemented nation-state be able to mobilise its entire population in times of need, regardless of rank, race, or age. With modern military science and pre-prepared general mobilisation lists, larger populations than ever before could be drafted.",
			prerequisite_techs: ["mobile_warfare_doctrine"],
			research_cost: 8000,
			year: 1940,
			category: "military_technology",
			modifiers: [
				"**+100%** Mobilisation Size",
				"**+10%** Mobilisation Speed",
				"**+5%** National Manpower",
				"**+5%** Non-Core Manpower",
				"**-10%** Mobilisation Impact",
				"Unlocks **Mobilisation - Modern Infantry**"
			],
			unlocks: function (usr) {
				usr.modifiers.mobilisation_size = usr.modifiers.mobilisation_size + 1.00;
				usr.modifiers.national_manpower = usr.modifiers.national_manpower + 0.05;
				usr.modifiers.non_core_manpower = usr.modifiers.non_core_manpower + 0.05;
				usr.modifiers.mobilisation_speed = usr.modifiers.mobilisation_speed - 0.10;
				usr.modifiers.mobilisation_impact = usr.modifiers.mobilisation_impact - 0.10;
				setMobilisationUnit(usr.id, "modern_infantry");
			}
		},
		sp_artillery: {
			icon: "<:artillery_piece:759161240999952445>",
			description: "SP Artillery, or self-propelled artillery is a type of artillery gun that does not rely on the necessity of an external motorised unit to transport it in battle. These vehicles typically come with adequate protection for the driver, and are fully enclosed.",
			prerequisite_techs: ["modern_howitzers"],
			research_cost: 8000,
			year: 1942,
			category: "military_technology",
			modifiers: [
				"Enables **Self-Propelled Artillery**"
			],
			unlocks: function (usr) {
				usr.available_units.push("self_propelled_artillery");
			}
		},
		special_forces: {
			icon: "<:artillery_piece:759161240999952445>",
			description: "Special forces, in many ways, the successor to shock troops, were used to fulfil missions that required unconventional methods to acheive the intended objective.",
			prerequisite_techs: ["modern_howitzers"],
			research_cost: 8000,
			year: 1941,
			category: "military_technology",
			modifiers: [
				"Enables **Special Forces**",
				"**+5%** Infantry AP",
				"Obsoletes **Shock Troops**"
			],
			unlocks: function (usr) {
				usr.available_units.push("special_forces");
				usr.modifiers.ground_units_ap = usr.modifiers.ground_units_ap + 0.05;
				deleteElement(usr.available_units, "shock_troops", [usr, "obsolete_units"]);
			}
		},
		signal_companies: {
			icon: "<:checkmark:725550245051760671>",
			description: "Signal companies are support detachments that allow conventional regiments to communicate with each other more effectively, even without infrastructure, via wireless radio.",
			prerequisite_techs: ["support_companies"],
			research_cost: 8000,
			year: 1940,
			category: "military_technology",
			modifiers: [
				"**-10%** Army Upkeep",
				"**+40%** Army Travel Speed",
				"**+10%** Training Cost"
			],
			unlocks: function (usr) {
				usr.modifiers.army_upkeep = usr.modifiers.army_upkeep - 0.10;
				usr.modifiers.army_travel_speed = usr.modifiers.army_travel_speed + 0.40;
				usr.modifiers.training_cost = usr.modifiers.training_cost + 0.10;
			}
		},
		tank_destroyers: {
			icon: "<:land_vehicles:716821195215077406>",
			description: "Tank destroyers, based off of light tanks, often did not have full enclosure, but had the speed and armaments needed to counter even the heaviest of tanks, and served as mobile anti-tank units.",
			prerequisite_techs: ["heavy_tank"],
			research_cost: 8000,
			year: 1942,
			category: "military_technology",
			modifiers: [
				"Enables **Tank Destroyer**"
			],
			unlocks: function (usr) {
				usr.available_units.push("tank_destroyers");
			}
		},
		rocket_interceptor: {
			icon: "<:aeroplanes:716821195407884358>",
			description: "Rocket interceptors were the first jet-powered aircraft to be used in a military context and were used to shoot down bomber aeroplanes in the closing days of World War II.",
			prerequisite_techs: ["extended_air_range"],
			research_cost: 8500,
			year: 1944,
			category: "military_technology",
			modifiers: [
				"Enables **Rocket Interceptors**",
				"**+2** Air Interception Range"
			],
			unlocks: function (usr) {
				usr.available_units.push("rocket_interceptors");
				usr.modifiers.air_interception_range += 2;
			}
		},
		strategic_bombers: {
			icon: "<:aeroplanes:716821195407884358>",
			description: "Strategic bombers are aircraft capable of carrying massive payloads over long distances, typically to drop on civilian targets, but also on military.",
			prerequisite_techs: ["extended_air_range"],
			research_cost: 8500,
			year: 1943,
			category: "military_technology",
			modifiers: [
				"Enables **Strategic Bombers**"
			],
			unlocks: function (usr) {
				usr.available_units.push("strategic_bombers");
			}
		},
		rocket_artillery: {
			icon: "<:artillery_piece:759161240999952445>",
			description: "Rocket artillery are a type of motorised artillery capable of firing rockets, eventually being armed with guided missiles that were able to strike targets with increasing accuracy.",
			prerequisite_techs: ["sp_artillery"],
			research_cost: 8500,
			year: 1939,
			category: "military_technology",
			modifiers: [
				"Enables **Rocket Artillery**",
				"**+5%** Artillery AP",
				"**+10%** Army Upkeep"
			],
			unlocks: function (usr) {
				usr.available_units.push("rocket_artillery");
				usr.modifiers.ground_artillery_ap = usr.modifiers.ground_artillery_ap + 0.05;
				usr.modifiers.army_upkeep = usr.modifiers.army_upkeep + 0.10;
			}
		},
		modern_infantry: {
			icon: "<:soldiers:732730754592669702>",
			description: "Modern infantry are meant to serve in general-purpose environments and storm cities and other dense environments where defensability is more feasible.",
			prerequisite_techs: ["special_forces","signal_companies"],
			research_cost: 8500,
			year: 1939,
			category: "military_technology",
			modifiers: [
				"Enables **Modern Infantry**",
				"Obsoletes **Freikorps**",
				"Obsoletes **Bolt Action Infantry**",
				"Obsoletes **Great War Infantry**"
			],
			unlocks: function (usr) {
				usr.available_units.push("modern_infantry");
				deleteElement(usr.available_units, "freikorps", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "bolt_action_infantry", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "great_war_infantry", [usr, "obsolete_units"]);
			}
		},
		troop_carriers: {
			icon: "<:land_vehicles:716821195215077406>",
			description: "Troop carriers are motorised units specialising in rapid transport of infantry across vast swaths of terrain, allowing for improved mobility of armies.",
			prerequisite_techs: ["half_track"],
			research_cost: 8500,
			year: 1940,
			category: "military_technology",
			modifiers: [
				"Enables **Troop Carriers**",
				"**+35%** Army Travel Speed"
			],
			unlocks: function (usr) {
				usr.available_units.push("troop_carriers");
				usr.modifiers.army_travel_speed = usr.modifiers.army_travel_speed + 0.35;
			}
		},
		improved_medium_tank: {
			icon: "<:land_vehicles:716821195215077406>",
			description: "Improved medium tanks, the forerunner to modern tanks, were built with increased precision sighting and armament, such that they were capable of piercing enemy targets from long distances.",
			prerequisite_techs: ["tank_destroyers"],
			research_cost: 8500,
			year: 1942,
			category: "military_technology",
			modifiers: [
				"Enables **Improved Medium Tanks**"
			],
			unlocks: function (usr) {
				usr.available_units.push("improved_medium_tanks");
			}
		},
		scout_helicopters: {
			icon: "<:aeroplanes:716821195407884358>",
			description: "Scout helicopters, typically primtive helicopters with little to no protection, were low-flying vehicles capable of moving rapidly to scout out enemy positions.",
			prerequisite_techs: ["rocket_interceptor"],
			research_cost: 9000,
			year: 1946,
			category: "military_technology",
			modifiers: [
				"Enables **Scout Helicopters**"
			],
			unlocks: function (usr) {
				usr.available_units.push("scout_helicopters");
			}
		},
		jet_fighters: {
			icon: "<:aeroplanes:716821195407884358>",
			description: "Fighter jets are modern aeroplanes, are fixed-wing aircraft often capable of acheiving of immediate subsonic, or supersonic speed and are built to establish air superiority over a battlefield.",
			prerequisite_techs: ["rocket_interceptor"],
			research_cost: 9000,
			year: 1947,
			category: "military_technology",
			modifiers: [
				"Enables **Jet Fighters**",
				"**+5** Air Interception Range",
				"**+5%** Air AP"
			],
			unlocks: function (usr) {
				usr.available_units.push("jet_fighters");
				usr.modifiers.air_interception_range += 5;
				usr.modifiers.aeroplanes_ap = usr.modifiers.aeroplanes_ap + 0.05;
			}
		},
		counterterrorism: {
			icon: "<:cb:716828676855169107>",
			description: "With the rise of attacks on civilian targets during times of peace, efforts must be made to prevent and halt terrorists, especially in high-profile hostage situations, in order to reduce public fear.",
			prerequisite_techs: ["mass_mobilisation"],
			research_cost: 9000,
			year: 1972,
			category: "military_technology",
			modifiers: [
				"**+10%** Infantry DP"
			],
			unlocks: function (usr) {
				usr.modifiers.ground_units_dp = usr.modifiers.ground_units_dp + 0.10;
			}
		},
		precision_guidance_systems: {
			icon: "<:cb:716828676855169107>",
			description: "Through the creation of guided missile systems, artillery accuracy on the ground can be drastically improved, allowing for future extensions not just in range, but in the effectiveness of artillery as a whole.",
			prerequisite_techs: ["rocket_artillery"],
			research_cost: 9000,
			year: 1944,
			category: "military_technology",
			modifiers: [
				"**+50%** Ack-Ack Effectiveness",
				"**+10%** Artillery AP"
			],
			unlocks: function (usr) {
				usr.modifiers.ground_artillery_ap = usr.modifiers.ground_artillery_ap + 0.10;
				usr.modifiers.ack_ack_effectiveness += 0.50;
			}
		},
		modern_armoured_car: {
			icon: "<:land_vehicles:716821195215077406>",
			description: "The modern armoured car often has large armaments with only light armour, allowing them to penetrate heavy tanks. Unlike tank destroyers, however, the majority are fully enclosed and also built to carry personnel.",
			prerequisite_techs: ["troop_carriers"],
			research_cost: 9000,
			year: 1943,
			category: "military_technology",
			modifiers: [
				"Enables **Modern Armoured Cars**",
				"Obsoletes **Armoured Cars**"
			],
			unlocks: function (usr) {
				usr.available_units.push("modern_armoured_cars");
				deleteElement(usr.available_units, "armoured_cars", [usr, "obsolete_units"]);
			}
		},
		modern_tank: {
			icon: "<:land_vehicles:716821195215077406>",
			description: "The advent of the moern tank, the immediate forerunner to the MBT, quickly rendered previous tanks obsolete as they featured a direct compromise between armour, armaments, and speed and were able to balance all effectively.",
			prerequisite_techs: ["improved_medium_tank"],
			research_cost: 9000,
			year: 1945,
			category: "military_technology",
			modifiers: [
				"Enables **Modern Tanks**",
				"Obsoletes **All Previous Armoured Units**"
			],
			unlocks: function (usr) {
				usr.available_units.push("modern_tanks");
				deleteElement(usr.available_units, "improved_medium_tanks", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "tank_destroyers", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "heavy_tanks", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "medium_tanks", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "interwar_tanks", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "light_tanks", [usr, "obsolete_units"]);
			}
		},
		multirole_helicopters: {
			icon: "<:aeroplanes:716821195407884358>",
			description: "Multirole helicopters, first built during the Vietnam war, were helicopters designed for enemy suppression, airmobile tactics, and logistical purposes.",
			prerequisite_techs: ["scout_helicopters"],
			research_cost: 9500,
			year: 1958,
			category: "military_technology",
			modifiers: [
				"Enables **Multirole Helicopters**",
				"Obsoletes **Scout Helicopters**"
			],
			unlocks: function (usr) {
				usr.available_units.push("multirole_helicopters");
				deleteElement(usr.available_units, "scout_helicopters", [usr, "obsolete_units"]);
			}
		},
		multirole_fighters: {
			icon: "<:aeroplanes:716821195407884358>",
			description: "Multirole fighters, designed to handle a variety of tasks quickly came to replace earlier fighters as they could now be used for dogfighting purposes, as strike aircraft, or for payload delivery.",
			prerequisite_techs: ["jet_fighters"],
			research_cost: 9500,
			year: 1972,
			category: "military_technology",
			modifiers: [
				"Enables **Multirole Fighters**",
				"Obsoletes **All Previous Aeroplanes (Except for Jet Fighters and Strategic Bombers)**"
			],
			unlocks: function (usr) {
				usr.available_units.push("multirole_fighters");
				deleteElement(usr.available_units, "rocket_interceptors", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "advanced_fighters", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "fighters", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "propeller_fighters", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "monoplane_fighters", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "improved_biplanes", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "biplanes", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "early_bombers", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "monoplane_bombers", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "interwar_bombers", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "bombers", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "torpedo_bombers", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "naval_bombers", [usr, "obsolete_units"]);
			}
		},
		stealth_bombers: {
			icon: "<:aeroplanes:716821195407884358>",
			description: "Designed to carry massive payloads from high altitudes without fear of being detected, stealth bombers are able to fly over extended durations of time and inflict massive amounts of damage on opponents, despite their cost.",
			prerequisite_techs: ["strategic_bombers"],
			research_cost: 9500,
			year: 1989,
			category: "military_technology",
			modifiers: [
				"Enables **Stealth Bombers**",
				"**+5%** Air AP"
			],
			unlocks: function (usr) {
				usr.available_units.push("stealth_bombers");
				usr.modifiers.aeroplanes_ap = usr.modifiers.aeroplanes_ap + 0.05;
			}
		},
		asymmetric_land_warfare: {
			icon: "<:old_map:716821884867444746>",
			description: "Warfare is no longer confined to a singular dimension fought over land by conventional armies, but is now a matter of completely differing tactics and rules of war between different powers, often ending in unconventional warfare.",
			prerequisite_techs: ["counterterrorism"],
			research_cost: 9500,
			year: 1968,
			category: "military_technology",
			modifiers: [
				"**+10%** Infantry DP",
				"**+5%** Armour AP"
			],
			unlocks: function (usr) {
				usr.modifiers.ground_units_ap = usr.modifiers.ground_units_ap + 0.10;
				usr.modifiers.ground_vehicles_ap = usr.modifiers.ground_vehicles_ap + 0.05;
			}
		},
		combined_arms_infantry: {
			icon: "<:manpower:716817688705499177>",
			description: "By integrating anti-air and anti-tank capabilities into our soldiers, and combining them with other types of equipment such as IFVs and the capability to call in precision airstrikes, we can afford to adopt a combined arms mentality for them.",
			prerequisite_techs: ["modern_infantry"],
			research_cost: 9500,
			year: 1953,
			category: "military_technology",
			modifiers: [
				"Enables **Combined Arms Infantry**",
				"**+10%** Army Upkeep",
				"Obsoletes **Modern Infantry**"
			],
			unlocks: function (usr) {
				usr.available_units.push("combined_arms_infantry");
				usr.modifiers.army_upkeep = usr.modifiers.army_upkeep + 0.10;
				deleteElement(usr.available_units, "modern_infantry", [usr, "obsolete_units"]);
			}
		},
		modern_apc: {
			icon: "<:land_vehicles:716821195215077406>",
			description: "Modern Armoured Personnel Carriers are typically meant to transport infantry safely whilst providing some form of protective cover from mines and other hazards. This will help improve our army mobility as our fleet of APCs are becoming increasingly outdated and obsolete.",
			prerequisite_techs: ["modern_armoured_car"],
			research_cost: 9500,
			year: 1966,
			category: "military_technology",
			modifiers: [
				"Enables **Modern APCs**",
				"**+60%** Army Travel Speed",
				"**+5%** Army Upkeep",
				"Obsoletes **Armoured Personnel Carriers**",
				"Obsoletes **Troop Carriers**",
				"Obsoletes **Half-Tracks**"
			],
			unlocks: function (usr) {
				usr.available_units.push("modern_apcs");
				usr.modifiers.army_travel_speed = usr.modifiers.army_travel_speed + 0.60;
				usr.modifiers.army_upkeep = usr.modifiers.army_upkeep + 0.05;
				deleteElement(usr.available_units, "armoured_personnel_carriers", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "troop_carriers", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "half_tracks", [usr, "obsolete_units"]);
			}
		},
		main_battle_tank: {
			icon: "<:land_vehicles:716821195215077406>",
			description: "The Main Battle Tank (MBT) is a multipurpose unit designed for a variety of roles, including suppressive fire and offensive manoeuvres. Despite their fuel and production costs, they are typically robust units capable of attacking the enemy head-on.",
			prerequisite_techs: ["modern_tank"],
			research_cost: 9500,
			year: 1965,
			category: "military_technology",
			modifiers: [
				"Enables **MBTs**",
				"**+30%** Army Travel Speed",
				"**+10%** Army Upkeep",
				"**+5%** Unit Cost"
			],
			unlocks: function (usr) {
				usr.available_units.push("main_battle_tanks");
				usr.modifiers.army_travel_speed = usr.modifiers.army_travel_speed + 0.30;
				usr.modifiers.army_upkeep = usr.modifiers.army_upkeep + 0.10;
				usr.modifiers.unit_cost = usr.modifiers.unit_cost + 0.05;
			}
		},
		drones: {
			icon: "<:aeroplanes:716821195407884358>",
			description: "Drones, or UAV's, are unmanned aerial vehicles capable of striking deep into enemy territory whilst being remote-controlled from a distance.",
			prerequisite_techs: ["multirole_fighters"],
			research_cost: 10000,
			year: 2001,
			category: "military_technology",
			modifiers: [
				"Enables **Drones**"
			],
			unlocks: function (usr) {
				usr.available_units.push("drones");
			}
		},
		contemporary_armies: {
			icon: "<:artillery_piece:759161240999952445>",
			description: "The dawn of modern military thought has offered us new tactics regarding the role of infantry in warfare, and the various units appropriate for different types of terrain. By exploiting these advantages, we can gain a significant combat lead over our enemy. Unconventional warfare and hearts and minds are also being explored as well.",
			prerequisite_techs: ["stealth_bombers","asymmetric_land_warfare","precision_guidance_systems","combined_arms_infantry"],
			research_cost: 10000,
			year: 1990,
			category: "military_technology",
			modifiers: [
				"Unlocks **Mobilisation - Combined Arms Infantry**",
				"**+5%** Infantry DP",
				"**+20%** Army Travel Speed"
			],
			unlocks: function (usr) {
				setMobilisationUnit(usr.id, "combined_arms_infantry");
				usr.modifiers.ground_units_dp = usr.modifiers.ground_units_dp + 0.05;
				usr.modifiers.army_travel_speed = usr.modifiers.army_travel_speed + 0.20;
			}
		},
		contemporary_infantry: {
			icon: "<:manpower:716817688705499177>",
			description: "Modern infantry, borrowing from asymmetric warfare, must learn and adapt in order to suppress revolts and insurgencies often driven by unlawful combatants and terrorist organisations. As new threats to our renewed national security continue to present themselves, we must change our military doctrine accordingly.",
			prerequisite_techs: ["asymmetric_land_warfare","combined_arms_infantry"],
			research_cost: 10000,
			year: 1990,
			category: "military_technology",
			modifiers: [
				"Enables **Contemporary Infantry**"
			],
			unlocks: function (usr) {
				usr.available_units.push("contemporary_infantry");
			}
		},
		modern_support_companies: {
			icon: "<:active_personnel:716820390474940426>",
			description: "Modern support companies typically carry specialised equipment and are tasked with a wide range of roles in order to overcome any obstacles that a normal infantry battalion might face.",
			prerequisite_techs: ["signal_companies"],
			research_cost: 10000,
			year: 1960,
			category: "military_technology",
			modifiers: [
				"**+15%** Infantry AP",
				"**+5%** Artillery AP"
			],
			unlocks: function (usr) {
				usr.modifiers.ground_units_ap = usr.modifiers.ground_units_ap + 0.15;
				usr.modifiers.ground_artillery_ap = usr.modifiers.ground_artillery_ap + 0.05;
			}
		},
		chobham_armour: {
			icon: "<:steel:716791408828088420>",
			description: "Chobham Armour is a type of composite armour originating in the U.K. that took advantage of the sheer hardness of ceramics to shatter enemy projectiles upon impact. The exact nature of this armour remains classified.",
			prerequisite_techs: ["modern_apc"],
			research_cost: 10000,
			year: 1961,
			category: "military_technology",
			modifiers: [
				"**+5%** Armour DP"
			],
			unlocks: function (usr) {
				usr.modifiers.ground_vehicles_dp = usr.modifiers.ground_vehicles_dp + 0.05;
			}
		},
		improved_sights: {
			icon: "<:government:716817688693047306>",
			description: "By improving our sights and adding night vision and thermal cameras, we can ensure that our tank crews are adequately equipped to deal with any situation where conventional vision alone is not enough.",
			prerequisite_techs: ["main_battle_tank"],
			research_cost: 10000,
			year: 1980,
			category: "military_technology",
			modifiers: [
				"**+10%** Armour AP"
			],
			unlocks: function (usr) {
				usr.modifiers.ground_vehicles_ap = usr.modifiers.ground_vehicles_ap + 0.10;
			}
		},
		modern_helicopters: {
			icon: "<:aeroplanes:716821195407884358>",
			description: "Modern helicopters equipped with thermal sighting and missiles, are fast and quick aircraft meant for closer battlefield manoeuvres, although they remain distinctly vulnerable to infantry equipment such as MANPADS.",
			prerequisite_techs: ["multirole_helicopters"],
			research_cost: 10500,
			year: 1975,
			category: "military_technology",
			modifiers: [
				"Enables **Modern Helicopters**"
			],
			unlocks: function (usr) {
				usr.available_units.push("modern_helicopters");
			}
		},
		stealth_fighters: {
			icon: "<:aeroplanes:716821195407884358>",
			description: "Stealth fighters, designed to dodge radar and travel at supersonic speeds are fifth-generation jet fighters designed to establish aerial supremacy and drop ordnance on approaching targets.",
			prerequisite_techs: ["drones","stealth_bombers"],
			research_cost: 10500,
			year: 2005,
			category: "military_technology",
			modifiers: [
				"Enables **Stealth Fighters**",
				"**+5** Air Interception Range"
			],
			unlocks: function (usr) {
				usr.available_units.push("stealth_fighters");
				usr.modifiers.air_interception_range += 5;
			}
		},
		cyberwarfare: {
			icon: "<:building:716827579650408538>",
			description: "Cyberwarfare is the militarised use of digital infrastructure with the express purpose of incapacitating an enemy belligerent. Such attacks typically target both civilian and military sectors reliant on electronic mediums.",
			prerequisite_techs: ["contemporary_armies"],
			research_cost: 10500,
			year: 2008,
			category: "military_technology",
			modifiers: [
				"**+35%** Ack-Ack Effectiveness",
				"**+10%** Infantry AP",
				"**+10%** Armour AP",
				"**+10%** Air AP",
				"**-10%** Army Upkeep"
			],
			unlocks: function (usr) {
				usr.modifiers.ack_ack_effectiveness += 0.35;
				usr.modifiers.ground_units_ap = usr.modifiers.ground_units_ap + 0.10;
				usr.modifiers.ground_vehicles_ap = usr.modifiers.ground_vehicles_ap + 0.10;
				usr.modifiers.aeroplanes_ap = usr.modifiers.aeroplanes_ap + 0.10;
				usr.modifiers.army_upkeep = usr.modifiers.army_upkeep - 0.10;
			}
		},
		modern_mbt: {
			icon: "<:land_vehicles:716821195215077406>",
			description: "In order to ensure that our tanks are able to remain competitive on the battlefield, we should consider installing upgraded armaments and weaponry onto them to make sure that they retain their edge, lest it be overtaken by other forces.",
			prerequisite_techs: ["chobham_armour","improved_sights"],
			research_cost: 10500,
			year: 2009,
			category: "military_technology",
			modifiers: [
				"Enables **Modern MBT**",
				"Obsoletes **Modern Tanks**",
				"Obsoletes **Main Battle Tanks**"
			],
			unlocks: function (usr) {
				usr.available_units.push("modern_mbts");
				deleteElement(usr.available_units, "modern_tanks", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "main_battle_tanks", [usr, "obsolete_units"]);
			}
		},
		railguns: {
			icon: "<:artillery_piece:759161240999952445>",
			description: "Railguns are pieces of artillery that use electromagneticism to launch kinetic projectiles at speeds of more than 3 kilometres a second. The damage itself relies purely on the shape, velocity and mass of the projectile fired.",
			prerequisite_techs: ["contemporary_armies"],
			research_cost: 10500,
			year: 2020,
			category: "military_technology",
			modifiers: [
				"Enables **Railguns**",
				"**+25%** Ack-Ack Effectiveness",
				"**+5%** Artillery AP"
			],
			unlocks: function (usr) {
				usr.available_units.push("railguns");
				usr.modifiers.ack_ack_effectiveness += 0.25;
				usr.modifiers.ground_artillery_ap = usr.modifiers.ground_artillery_ap + 0.05;
			}
		},
		cyberwarfare_units: {
			icon: "<:manpower:716817688705499177>",
			description: "By creating entire battalions of organised cadres of hackers and cybersecurity experts, we can hope to inflict maximum damage upon our enemy's military and industrial capacity whilst preserving our own.",
			prerequisite_techs: ["modern_support_companies"],
			research_cost: 10500,
			year: 2010,
			category: "military_technology",
			modifiers: [
				"**-10%** Upkeep Cost",
				"**+2%** War Exhaustion Rate"
			],
			unlocks: function (usr) {
				usr.modifiers.army_upkeep = usr.modifiers.army_upkeep - 0.10;
				usr.modifiers.war_exhaustion_rate = usr.modifiers.war_exhaustion_rate + 0.02;
			}
		},
		ai_multirole_fighters: {
			icon: "<:aeroplanes:716821195407884358>",
			description: "AI Multirole Fighters are seventh-generational fighter jets capable of attacking targets completely autonomously without any human input whatsoever. As their target recognition systems are highly advanced, they cost significantly more to train and maintain than normal fighter jets.",
			prerequisite_techs: ["stealth_fighters"],
			research_cost: 11000,
			year: 2035,
			category: "military_technology",
			modifiers: [
				"Enables **AI Multirole Fighters**",
				"**+5** Air Interception Range",
				"**+5%** Upkeep Cost"
			],
			unlocks: function (usr) {
				usr.available_units.push("ai_multirole_fighters");
				usr.modifiers.air_interception_range += 5;
				usr.modifiers.army_upkeep = usr.modifiers.army_upkeep + 0.05;
			}
		},
		ai_bombers: {
			icon: "<:aeroplanes:716821195407884358>",
			description: "AI Stealth Bombers are able to identify and attack targets with lightning fast speed and precision, and unlike other earlier UAVs, do not require human control. Despite the innate dangers of using and fielding such weapons, they can give us an unprecedented edge on the battlefield.",
			prerequisite_techs: ["drones","stealth_bombers"],
			research_cost: 11000,
			year: 2035,
			category: "military_technology",
			modifiers: [
				"Enables **AI Bombers**",
				"**+10%** Air AP",
				"**+5%** Upkeep Cost"
			],
			unlocks: function (usr) {
				usr.available_units.push("ai_bombers");
				usr.modifiers.aeroplanes_ap = usr.modifiers.aeroplanes_ap + 0.10;
				usr.modifiers.army_upkeep = usr.modifiers.army_upkeep + 0.05;
			}
		},
		directed_heat_weaponry: {
			icon: "<:infamy:716817688453709905>",
			description: "Directed heat weaponry, long the realm of science fiction has become possible as a non-lethal alternative to conventional weapons, albeit immensely painful. It can be used for internal security purposes, or incapacitating enemy soldiers.",
			prerequisite_techs: ["railguns"],
			research_cost: 11000,
			year: 2019,
			category: "military_technology",
			modifiers: [
				"Enables **Directed Heat Weapons**",
				"**+50%** Ack-Ack Effectiveness",
				"**+5%** Stability"
			],
			unlocks: function (usr) {
				usr.available_units.push("directed_heat_weapons");
				usr.modifiers.ack_ack_effectiveness += 0.50;
				usr.modifiers.stability_modifier = usr.modifiers.stability_modifier + 5;
			}
		},
		augmented_infantry: {
			icon: "<:active_personnel:716820390474940426>",
			description: "Augmented infantry are units lent a helping hand by cutting edge robots and AI that enable them to conduct missions and possess capabilities that could otherwise have never been held by ordinary infantry units, allowing them to take the offensive.",
			prerequisite_techs: ["contemporary_infantry"],
			research_cost: 11000,
			year: 2040,
			category: "military_technology",
			modifiers: [
				"Enables **Augmented Infantry**"
			],
			unlocks: function (usr) {
				usr.available_units.push("augmented_infantry");
			}
		},
		multirole_mbt: {
			icon: "<:land_vehicles:716821195215077406>",
			description: "In response to the ever changing dynamics of the battlefield, our tankers should be given the finest weaponry and AI assistance that can be afforded. Our tanks shall now possess anti-aircraft capabilities, and function as mobile artillery when needed - a truly versatile material crucial to forge the victories of tomorrow.",
			prerequisite_techs: ["modern_mbt"],
			research_cost: 11000,
			year: 2030,
			category: "military_technology",
			modifiers: [
				"Enables **Multirole MBT**",
				"**+10%** Armour DP"
			],
			unlocks: function (usr) {
				usr.available_units.push("multirole_mbts");
				usr.modifiers.ground_vehicles_dp = usr.modifiers.ground_vehicles_dp + 0.10;
			}
		},
		//Naval Technology
		privateering: {
			icon: "<:taxes:716817688781127810>",
			description: "By subsidising our naval income with the loot managed to be scraped off of merchant ships via piracy, and the contracts of naval mercenaries, we can bolster our naval effectiveness ... at a price in infamy, of course.",
			research_cost: 20,
			year: 1533,
			category: "naval_technology",
			modifiers: [
				"**+2%** Tax Efficiency",
				"**+1%** Infamy Loss"
			],
			unlocks: function (usr) {
				usr.modifiers.tax_efficiency = usr.modifiers.tax_efficiency + 0.02;
				usr.modifiers.infamy_loss = usr.modifiers.infamy_loss + 0.01;
			}
		},
		the_caravel: {
			icon: "<:paper:759161240987369522>",
			description: "Through the development of the triangular sail, the Caravel was one of the first vessels capable of beating upwind, allowing it to travel against the currents of the air and increasingly long distances overseas.",
			research_cost: 20,
			year: 1451,
			category: "naval_technology",
			modifiers: [
				"Enables **Caravels**",
				"**+25%** Colonist Travel Speed"
			],
			unlocks: function (usr) {
				usr.available_units.push("caravels");
				usr.modifiers.colonist_travel_speed = usr.modifiers.colonist_travel_speed + 0.25;
			}
		},
		improved_astrolabe: {
			icon: "<:globe:716811246556545035>",
			description: "An improved astrolabe will allow our sailors to travel faster at sea and with more precision as improvements in cartography make life easier for mariners.",
			prerequisite_techs: ["the_caravel"],
			research_cost: 50,
			year: 1420,
			category: "naval_technology",
			modifiers: [
				"**+5%** Tax Efficiency",
				"**-5%** Shipment Time"
			],
			unlocks: function (usr) {
				usr.modifiers.tax_efficiency = usr.modifiers.tax_efficiency + 0.05;
				usr.modifiers.shipment_time = usr.modifiers.shipment_time - 0.05;
			}
		},
		maritime_cartography: {
			icon: "<:old_map:716821884867444746>",
			description: "By viewing maps less as pieces of art, and more as navigational instruments, we can help ensure that great care is taken in accurately portraying the discoveries of our explorers, leading to a more reliable voyage for both civilian and military naval traffic.",
			prerequisite_techs: ["the_caravel"],
			research_cost: 50,
			year: 1569,
			category: "naval_technology",
			modifiers: [
				"**+50%** Colonist Travel Speed",
				"**-5%** Shipment Time",
				"**+5%** Naval DP",
				"**+5%** Army Upkeep"
			],
			unlocks: function (usr) {
				usr.modifiers.colonist_travel_speed = usr.modifiers.colonist_travel_speed + 0.50;
				usr.modifiers.naval_units_dp = usr.modifiers.naval_units_dp + 0.05;
				usr.modifiers.shipment_time = usr.modifiers.shipment_time - 0.05;
			}
		},
		backstaff: {
			icon: "<:old_map:716821884867444746>",
			description: "The backstaff was a navigational instrument that allowed for more accurate observations of solar altitudes, enabling more accurate astrolabe readings.",
			prerequisite_techs: ["improved_astrolabe","maritime_cartography"],
			research_cost: 75,
			year: 1594,
			category: "naval_technology",
			modifiers: [
				"**+1** Maximum Expeditions"
			],
			unlocks: function (usr) {
				usr.modifiers.maximum_expeditions = usr.modifiers.maximum_expeditions + 1;
			}
		},
		the_galleon: {
			icon: "<:naval_units:716821195277729832>",
			description: "With multiple decks outfitted for cannons, and three or more masts being carried per ship, the galleon quickly became the mainstay of European continental navies, before purpose-built men-of-war were commissioned for European fleets.",
			prerequisite_techs: ["improved_astrolabe","maritime_cartography"],
			research_cost: 75,
			year: 1534,
			category: "naval_technology",
			modifiers: [
				"Enables **Galleons**",
				"**-5%** Shipment Time"
			],
			unlocks: function (usr) {
				usr.available_units.push("galleons");
				usr.modifiers.shipment_time = usr.modifiers.shipment_time - 0.05;
			}
		},
		trading_ports: {
			icon: "<:trade:716828677115084812>",
			description: "By establishing and securing ports of trade in foreign lands, we can ensure that our trade is regularly protected and that more shipments can flow between us and any potential colonies.",
			prerequisite_techs: ["improved_astrolabe","maritime_cartography"],
			research_cost: 100,
			year: 1505,
			category: "naval_technology",
			modifiers: [
				"**+5%** Tax Efficiency"
			],
			unlocks: function (usr) {
				usr.modifiers.tax_efficiency = usr.modifiers.tax_efficiency + 0.05;
			}
		},
		circumnavigation: {
			icon: "<:globe:716811246556545035>",
			description: "Circumnavigating the globe will not only help boost our national prestige, but will enable us to conduct studies of far-away lands and bring back exotic flora and fauna for research.",
			prerequisite_techs: ["the_galleon"],
			research_cost: 100,
			year: 1519,
			category: "naval_technology",
			modifiers: [
				"**+50%** Army Travel Speed",
				"**+25%** Colonist Travel Speed",
				"**+10%** Research Efficiency",
				"**-5%** Shipment Time"
			],
			unlocks: function (usr) {
				usr.modifiers.colonist_travel_speed = usr.modifiers.colonist_travel_speed + 0.25;
				usr.modifiers.army_travel_speed = usr.modifiers.army_travel_speed + 0.50;
				usr.modifiers.research_efficiency = usr.modifiers.research_efficiency + 0.10;
				usr.modifiers.shipment_time = usr.modifiers.shipment_time - 0.05;
			}
		},
		armed_merchants: {
			icon: "<:artillery:716821195055431681>",
			description: "Through arming our merchants to the teeth, we can protect our civilian traffic fleet from piracy attacks and privateering from foreign powers.",
			prerequisite_techs: ["trading_ports","circumnavigation"],
			research_cost: 150,
			year: 1600,
			category: "naval_technology",
			modifiers: [
				"**+5%** Tax Efficiency",
				"**+10%** Shipment Time"
			],
			unlocks: function (usr) {
				usr.modifiers.tax_efficiency = usr.modifiers.tax_efficiency + 0.05;
				usr.modifiers.shipment_time = usr.modifiers.shipment_time + 0.10;
			}
		},
		fleet_in_being: {
			icon: "<:artillery:716821195055431681>",
			description: "When put at a disadvantage, we should always afford ourselves the option to hole our fleet up in port so as to always be able to counter the enemy and present a constant threat by drawing their naval resources thin.",
			prerequisite_techs: ["trading_ports","circumnavigation"],
			research_cost: 200,
			year: 1690,
			category: "naval_technology",
			modifiers: [
				"**+10%** Naval AP"
			],
			unlocks: function (usr) {
				usr.modifiers.naval_units_ap = usr.modifiers.naval_units_ap + 0.10;
			}
		},
		impressment: {
			icon: "<:taxes:716817688781127810>",
			description: "By forcing sailors into our navy, we can bolster our manpower and reduce naval training costs, although it may come at a slight cost in stability.",
			prerequisite_techs: ["fleet_in_being"],
			research_cost: 250,
			year: 1664,
			category: "naval_technology",
			modifiers: [
				"**+2%** National Manpower",
				"**-10%** Unit Cost",
				"**-10%** Training Cost",
				"**-5%** Stability"
			],
			unlocks: function (usr) {
				usr.modifiers.national_manpower = usr.modifiers.national_manpower + 0.02;
				usr.modifiers.unit_cost = usr.modifiers.unit_cost - 0.10;
				usr.modifiers.training_cost = usr.modifiers.training_cost - 0.10;
				usr.modifiers.stability_modifier = usr.modifiers.stability_modifier - 0.05;
			}
		},
		men_of_war: {
			icon: "<:taxes:716817688781127810>",
			description: "Men-of-war, outfitted with square rigging and three decks of cannons have increasingly become the premier ships in naval warfare, capable of projecting power across the world. Although expensive, they wield a significant advantage in battle ...",
			prerequisite_techs: ["fleet_in_being"],
			research_cost: 250,
			year: 1580,
			category: "naval_technology",
			modifiers: [
				"Enables **Men-of-War**",
				"**-5%** Tax Efficiency"
			],
			unlocks: function (usr) {
				usr.available_units.push("men_of_war");
				usr.modifiers.tax_efficiency = usr.modifiers.tax_efficiency - 0.05;
			}
		},
		mercantile_fleet: {
			icon: "<:taxes:716817688781127810>",
			description: "Men-of-war, outfitted with square rigging and three decks of cannons have increasingly become the premier ships in naval warfare, capable of projecting power across the world. Although expensive, they wield a significant advantage in battle ...",
			prerequisite_techs: ["fleet_in_being"],
			research_cost: 250,
			year: 1600,
			category: "naval_technology",
			modifiers: [
				"**+5%** Tax Efficiency",
				"**-4%** Shipment Time"
			],
			unlocks: function (usr) {
				usr.modifiers.tax_efficiency = usr.modifiers.tax_efficiency + 0.05;
				usr.modifiers.shipment_time = usr.modifiers.shipment_time - 0.04;
			}
		},
		naval_administration: {
			icon: "<:development:716811992421367869>",
			description: "By affording ourselves increased anchorage capacity and dockyards, we can continue to produce ships at a faster rate, provided that the steady flow of resources continues trickling in ...",
			prerequisite_techs: ["impressment"],
			research_cost: 350,
			year: 1546,
			category: "naval_technology",
			modifiers: [
				"**+1** Maximum Dockyards per city"
			],
			unlocks: function (usr) {
				usr.modifiers.dockyards = usr.modifiers.dockyards + 1;
			}
		},
		naval_autonomy: {
			icon: "<:old_scroll:716828676880334881>",
			description: "To cement full control over the riches of the New World and Cathay will take a strong navy, one that must be separated from the army as its duties, disciplines and traditions grow ever more distant, allowing for more effective command and administration.",
			prerequisite_techs: ["naval_administration"],
			research_cost: 500,
			year: 1606,
			category: "naval_technology",
			modifiers: [
				"**+1** Military Building per city",
				"**+5%** Naval AP",
				"**+5%** Naval DP"
			],
			unlocks: function (usr) {
				usr.modifiers.military_buildings_building_slots = usr.modifiers.military_buildings_building_slots + 1;
				usr.modifiers.naval_units_ap = usr.modifiers.naval_units_ap + 0.05;
				usr.modifiers.naval_units_dp = usr.modifiers.naval_units_dp + 0.05;
			}
		},
		standards_of_ordnance: {
			icon: "<:coal:716791408714973204>",
			description: "Standardising the different weights and sizes of ordnance to be brought into cannons could have a huge impact on the battlefield as our cannons can now fire more reliably and safely than before. In addition, logistical burdens will be decreased as ironsmiths will have a more concrete idea of what types of projectiles to make.",
			prerequisite_techs: ["naval_administration"],
			research_cost: 500,
			year: 1540,
			category: "naval_technology",
			modifiers: [
				"**+10%** Naval AP",
				"**-5%** Unit Cost"
			],
			unlocks: function (usr) {
				usr.modifiers.naval_units_ap = usr.modifiers.naval_units_ap + 0.10;
				usr.modifiers.unit_cost = usr.modifiers.unit_cost - 0.05;
			}
		},
		reflecting_quadrant: {
			icon: "<:globe:716811246556545035>",
			description: "The reflecting quadrant was an important tool of navigation that enabled more effective starsighting, thereby enabling captains to jot down accurate measurements of their current latitude.",
			prerequisite_techs: ["mercantile_fleet"],
			research_cost: 500,
			year: 1618,
			category: "naval_technology",
			modifiers: [
				"**+50%** Colonist Travel Speed",
				"**-5%** Shipment Time"
			],
			unlocks: function (usr) {
				usr.modifiers.colonist_travel_speed = usr.modifiers.colonist_travel_speed + 0.50;
				usr.modifiers.shipment_time = usr.modifiers.shipment_time - 0.05;
			}
		},
		ships_of_the_line: {
			icon: "<:naval_units:716821195277729832>",
			description: "Ships of the line were diversified naval warships that formed the bulk of European continental navies, and were divided into class based on the number of decks each ship held.",
			prerequisite_techs: ["standards_of_ordnance","men_of_war"],
			research_cost: 650,
			year: 1650,
			category: "naval_technology",
			modifiers: [
				"Enables **Ships-of-the-Line**",
				"Obsoletes **Galleons**",
				"Obsoletes **Caravels**"
			],
			unlocks: function (usr) {
				usr.available_units.push("ships_of_the_line");
				deleteElement(usr.available_units, "galleons", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "caravels", [usr, "obsolete_units"]);
			}
		},
		naval_charting: {
			icon: "<:old_map:716821884867444746>",
			description: "Naval charts specialising in bathymetry will help merchants and captains alike to avoid the environmental dangers posed by certain areas.",
			prerequisite_techs: ["reflecting_quadrant"],
			research_cost: 650,
			year: 1665,
			category: "naval_technology",
			modifiers: [
				"**+75%** Colonist Travel Speed",
				"**-5%** Shipment Time"
			],
			unlocks: function (usr) {
				usr.modifiers.colonist_travel_speed = usr.modifiers.colonist_travel_speed + 0.75;
				usr.modifiers.shipment_time = usr.modifiers.shipment_time - 0.05;
			}
		},
		global_operations: {
			icon: "<:naval_units:716821195277729832>",
			description: "Ships of the line were diversified naval warships that formed the bulk of European continental navies, and were divided into class based on the number of decks each ship held.",
			prerequisite_techs: ["naval_autonomy"],
			research_cost: 750,
			year: 1701,
			category: "naval_technology",
			modifiers: [
				"**+1** Maximum Dockyards per city",
				"**+50%** Colonist Travel Speed"
			],
			unlocks: function (usr) {
				usr.modifiers.dockyards = usr.modifiers.dockyards + 1;
				usr.modifiers.colonist_travel_speed = usr.modifiers.colonist_travel_speed + 0.50;
			}
		},
		sextant: {
			icon: "<:steel:716791408828088420>",
			description: "The sextant, first invented in the early 18th century, was a reflective device purpose built for the measurement of angular distance between stellar objects. It can be used to estimate both latitude and longitude, albeit not precisely until the advent of the chronometer.",
			prerequisite_techs: ["ships_of_the_line","naval_charting"],
			research_cost: 750,
			year: 1731,
			category: "naval_technology",
			modifiers: [
				"**+25%** Colonist Travel Speed",
				"**-5%** Shipment Time"
			],
			unlocks: function (usr) {
				usr.modifiers.shipment_time = usr.modifiers.shipment_time - 0.05;
				usr.modifiers.colonist_travel_speed = usr.modifiers.colonist_travel_speed + 0.25;
			}
		},
		naval_blockades: {
			icon: "<:blockade:716817688592252979>",
			description: "Although we have not had the capability to enforce this on such a total scale until recently, a naval blockade in theory has existed for a long time, referring to the cutting off of an entire belligerent nation from sources of trade using a naval fleet. Although the logistical costs are immense, so too can the rewards ...",
			prerequisite_techs: ["global_operations"],
			research_cost: 900,
			year: 1754,
			category: "naval_technology",
			modifiers: [
				"Unlocks **Naval Blockades**",
				"**+2%** War Exhaustion Rate",
				"**-5%** Tax Efficiency"
			],
			unlocks: function (usr) {
				usr.enable_blockades = true;
				usr.modifiers.war_exhaustion_rate = usr.modifiers.war_exhaustion_rate + 0.02;
				usr.modifiers.tax_efficiency = usr.modifiers.tax_efficiency - 0.05;
			}
		},
		copper_plating: {
			icon: "<:blockade:716817688592252979>",
			description: "By both waterproofing our ships' hulls with tar, and plating them in copper, we can help prevent rotting wood whilst also obsoleting enemy ramming as they can no longer simply ram through metal as they could with wood. Although, unit cost will invariably rise ...",
			prerequisite_techs: ["sextant"],
			research_cost: 900,
			year: 1778,
			category: "naval_technology",
			modifiers: [
				"**+10%** Naval DP",
				"**+5%** Unit Cost"
			],
			unlocks: function (usr) {
				usr.modifiers.naval_units_dp = usr.modifiers.naval_units_dp + 0.10;
				usr.modifiers.unit_cost = usr.modifiers.unit_cost + 0.05;
			}
		},
		square_rigging: {
			icon: "<:paper:759161240987369522>",
			description: "Square rigging is a sailing configuration that seeks to maximise the surface area upon which the wind can push to improve travel speed. Although difficult to maintain, the boost in speed is surely worth it ...",
			prerequisite_techs: ["sextant"],
			research_cost: 900,
			year: 1750,
			category: "naval_technology",
			modifiers: [
				"**+75%** Colonist Travel Speed",
				"**-5%** Shipment Time",
				"**+5%** Training Cost"
			],
			unlocks: function (usr) {
				usr.modifiers.colonist_travel_speed = usr.modifiers.colonist_travel_speed + 0.75;
				usr.modifiers.shipment_time = usr.modifiers.shipment_time - 0.05;
				usr.modifiers.training_cost = usr.modifiers.training_cost + 0.05;
			}
		},
		amphibious_descent: {
			icon: "<:soldiers:732730754592669702>",
			description: "The purpose of the amphibious descent, or rather amphibious landing as it is in modern parlance, is to secure the enemy's port facilities in and around a concentrated area so as to be able to secure further shipments of troops.",
			prerequisite_techs: ["naval_blockades"],
			research_cost: 1000,
			year: 1754,
			category: "naval_technology",
			modifiers: [
				"**+10%** Naval AP"
			],
			unlocks: function (usr) {
				usr.modifiers.naval_units_ap = usr.modifiers.naval_units_ap + 0.10;
			}
		},
		naval_carronade: {
			icon: "<:artillery:716821195055431681>",
			description: "A naval carronade is a light artillery piece meant for transport aboard merchant ships that can be pulled out in times of battle. It became popular during the American War of Independence, and was used throughout the later part of 18th and early 19th centuries.",
			prerequisite_techs: ["standards_of_ordnance"],
			research_cost: 1000,
			year: 1759,
			category: "naval_technology",
			modifiers: [
				"**+5%** Naval DP"
			],
			unlocks: function (usr) {
				usr.modifiers.naval_units_dp = usr.modifiers.naval_units_dp + 0.05;
			}
		},
		first_rate: {
			icon: "<:naval_units:716821195277729832>",
			description: "A first-rate was the largest type of man-of-war available, capable of carrying up to a hundred guns. Although expensive, they revolutionised the naval battlefield when first launched.",
			prerequisite_techs: ["copper_plating"],
			research_cost: 1000,
			year: 1770,
			category: "naval_technology",
			modifiers: [
				"Enables **First-Rates**",
				"**+5%** Army Upkeep"
			],
			unlocks: function (usr) {
				usr.available_units.push("first_rate");
				usr.modifiers.army_upkeep = usr.modifiers.army_upkeep + 0.05;
			}
		},
		discovery_of_magnetic_variation: {
			icon: "<:old_scroll:716828676880334881>",
			description: "The discovery of magnetic variation enabled compass readings to be taken more accurately, with seafarers now realising a difference between true north and magnetic north.",
			prerequisite_techs: ["square_rigging"],
			research_cost: 1000,
			year: 1634,
			category: "naval_technology",
			modifiers: [
				"**-5%** Shipment Time"
			],
			unlocks: function (usr) {
				usr.modifiers.shipment_time = usr.modifiers.shipment_time - 0.05;
			}
		},
		thirtysix_pounder_long_gun: {
			icon: "<:artillery:716821195055431681>",
			description: "The 36-pounder long-gun was amongst the heaviest artillery pieces carried on seafaring vessels, capable of shore bombardment and naval support of amphibious landings.",
			prerequisite_techs: ["naval_carronade"],
			research_cost: 1200,
			year: 1702,
			category: "naval_technology",
			modifiers: [
				"**+5%** Naval AP"
			],
			unlocks: function (usr) {
				usr.modifiers.naval_units_ap = usr.modifiers.naval_units_ap + 0.05;
			}
		},
		frigates: {
			icon: "<:naval_units:716821195277729832>",
			description: "Frigates are lower-tier capital ships meant to protect oceangoing trade and military vessels from unconventional attacks. They can also be used in supporting roles.",
			prerequisite_techs: ["first_rate"],
			research_cost: 1200,
			year: 1740,
			category: "naval_technology",
			modifiers: [
				"Enables **Frigates**"
			],
			unlocks: function (usr) {
				usr.available_units.push("frigates");
			}
		},
		marine_chronometer: {
			icon: "<:government:716817688693047306>",
			description: "Marine chronometers are devices capable of accurately measuring time, and therefore capable of deducing longitudinal meridians necessary to navigation.",
			prerequisite_techs: ["discovery_of_magnetic_variation"],
			research_cost: 1200,
			year: 1761,
			category: "naval_technology",
			modifiers: [
				"**+25%** Colonist Travel Speed",
				"**-5%** Shipment Time"
			],
			unlocks: function (usr) {
				usr.modifiers.colonist_travel_speed = usr.modifiers.colonist_travel_speed + 0.25;
				usr.modifiers.shipment_time = usr.modifiers.shipment_time - 0.05;
			}
		},
		naval_doctrine: {
			icon: "<:naval_units:716821195277729832>",
			description: "By creating official protocols by which our navy should abide and adopting tactics into field manuals, our admirals can be better suited to naval warfare when encountering enemies.",
			prerequisite_techs: ["amphibious_descent"],
			research_cost: 1400,
			year: 1754,
			category: "naval_technology",
			modifiers: [
				"**-10%** Training Cost",
				"**-5%** Unit Cost"
			],
			unlocks: function (usr) {
				usr.modifiers.training_cost = usr.modifiers.training_cost - 0.10;
				usr.modifiers.unit_cost = usr.modifiers.unit_cost - 0.05;
			}
		},
		primitive_submarines: {
			icon: "<:naval_units:716821195277729832>",
			description: "Although no one sure likes being cooped up in a barrel of death that may or may not be rapidly running out of oxygen, submarines of the future may help provide new ways of transforming the naval arena ...",
			prerequisite_techs: ["thirtysix_pounder_long_gun","frigates"],
			research_cost: 1400,
			year: 1776,
			category: "naval_technology",
			modifiers: [
				"This will lead to further advances in naval technology ..."
			],
			unlocks: function (usr) {
			}
		},
		paddle_wheel: {
			icon: "<:steel:716791408828088420>",
			description: "The paddle wheel was a method of propulsion for steamers relying on rotational motion to push forwards a ship. Despite its inherent inefficiencies, it continued being used up until the invention of the propeller.",
			prerequisite_techs: ["marine_chronometer"],
			research_cost: 1400,
			year: 1810,
			category: "naval_technology",
			modifiers: [
				"**-5%** Shipment Time"
			],
			unlocks: function (usr) {
				usr.modifiers.shipment_time = usr.modifiers.shipment_time - 0.05;
			}
		},
		blockade_running: {
			icon: "<:infamy:716817688453709905>",
			description: "Although risky, during times of war, civilian merchant steamers could be used to run blockades, even under neutral banners. This way, we can ensure lower war exhaustion as food shipments, though minimal, may continue.",
			prerequisite_techs: ["naval_doctrine"],
			research_cost: 1600,
			year: 1812,
			category: "naval_technology",
			modifiers: [
				"**-4%** War Exhaustion Rate"
			],
			unlocks: function (usr) {
				usr.modifiers.war_exhaustion_rate = usr.modifiers.war_exhaustion_rate - 0.04;
			}
		},
		twentyfour_pounder_long_gun: {
			icon: "<:artillery:716821195055431681>",
			description: "The 24-pounder long gun was a piece of naval artillery of medium calibre, typically used for naval combat. It became a mainstay of lighter capital ships before the introduction of rotational turrets.",
			prerequisite_techs: ["primitive_submarines"],
			research_cost: 1600,
			year: 1772,
			category: "naval_technology",
			modifiers: [
				"**+5%** Naval AP"
			],
			unlocks: function (usr) {
				usr.modifiers.naval_units_ap = usr.modifiers.naval_units_ap + 0.05;
			}
		},
		steamboat: {
			icon: "<:naval_units:716821195277729832>",
			description: "The first ship to rely completely on steam power, the steamboat used coal as its main means of propulsion, and no longer relied on the wind. Although initially invented as a cviilian trade vessel, there is nothing preventing the nations of the world from militarising its use ...",
			prerequisite_techs: ["thirtysix_pounder_long_gun","frigates","paddle_wheel"],
			research_cost: 1600,
			year: 1803,
			category: "naval_technology",
			modifiers: [
				"**+100%** Colonist Travel Speed",
				"Enables **Steamboats**"
			],
			unlocks: function (usr) {
				usr.modifiers.colonist_travel_speed = usr.modifiers.colonist_travel_speed + 1.00;
				usr.available_units.push("steamboats");
			}
		},
		clipper_ship: {
			icon: "<:naval_units:716821195277729832>",
			description: "The last great ship of the Age of Sail, clipper ships were used as naval transports and carried several sails, sometimes in combination with a steam engine, in order to maximise speed.",
			prerequisite_techs: ["steamboat"],
			research_cost: 1800,
			year: 1843,
			category: "naval_technology",
			modifiers: [
				"Enables **Clippers**"
			],
			unlocks: function (usr) {
				usr.available_units.push("clippers");
			}
		},
		organised_salvo: {
			icon: "<:naval_units:716821195277729832>",
			description: "By bringing our naval guns to bear instead of firing ragged volleys, we can unleash a devastating salvo onto a still unsuspecting enemy, leading to the complete destruction of their ship. Although it may take a while to re-arm, it would surely be more effective than our current modus operandi.",
			prerequisite_techs: ["blockade_running","twentyfour_pounder_long_gun"],
			research_cost: 2000,
			year: 1861,
			category: "naval_technology",
			modifiers: [
				"**+5%** Naval AP",
				"**-2%** Naval DP"
			],
			unlocks: function (usr) {
				usr.modifiers.naval_units_ap = usr.modifiers.naval_units_ap + 0.05;
				usr.modifiers.naval_units_dp = usr.modifiers.naval_units_dp - 0.02;
			}
		},
		increased_firing_range: {
			icon: "<:artillery:716821195055431681>",
			description: "With the advent of large-calibre artillery being placed on ships, we can increase our firing range beyond what would normally be possible with broadsides from the Age of Sail.",
			prerequisite_techs: ["blockade_running","twentyfour_pounder_long_gun"],
			research_cost: 2000,
			year: 1862,
			category: "naval_technology",
			modifiers: [
				"**+5%** Naval AP"
			],
			unlocks: function (usr) {
				usr.modifiers.naval_units_ap = usr.modifiers.naval_units_ap + 0.05;
			}
		},
		precision_cartography: {
			icon: "<:old_map:716821884867444746>",
			description: "Applying surveying techniques to maritime cartography could result in unparallelled accuracy, even with the storms and waves of the high seas.",
			prerequisite_techs: ["frigates","paddle_wheel"],
			research_cost: 2000,
			year: 1766,
			category: "naval_technology",
			modifiers: [
				"**+3%** Research Efficiency",
				"**-5%** Shipment Time"
			],
			unlocks: function (usr) {
				usr.modifiers.research_efficiency = usr.modifiers.research_efficiency + 0.03;
				usr.modifiers.shipment_time = usr.modifiers.shipment_time - 0.05;
			}
		},
		gunboat: {
			icon: "<:naval_units:716821195277729832>",
			description: "The gunboat is a light ship capable of a high rate of travel, and the first real steamship used exclusively in a military context.",
			prerequisite_techs: ["organised_salvo","increased_firing_range","clipper_ship"],
			research_cost: 2500,
			year: 1844,
			category: "naval_technology",
			modifiers: [
				"Enables **Gunboat**"
			],
			unlocks: function (usr) {
				usr.available_units.push("gunboats");
			}
		},
		international_standard_of_maritime_flags: {
			icon: "<:infamy:716817688453709905>",
			description: "Through creating an international standard of maritime flags for communication, we can ensure that distress signals can be properly conveyed, and that accidental sinkings in times of war are reduced.",
			prerequisite_techs: ["precision_cartography"],
			research_cost: 2500,
			year: 1857,
			category: "naval_technology",
			modifiers: [
				"**+5%** Tax Efficiency"
			],
			unlocks: function (usr) {
				usr.modifiers.tax_efficiency = usr.modifiers.tax_efficiency + 0.05;
			}
		},
		crossing_the_t: {
			icon: "<:iron:716791408819961866>",
			description: "Crossing the T is a naval tactic that allows us to position a ship in favour to an enemy belligerent's, by exposing our entire side, whereas only the bow or the rear of the enemy is exposed. Thereby, we can fire an entire broadside, whereas the enemy is only capable of firing their frontal guns.",
			prerequisite_techs: ["organised_salvo","increased_firing_range"],
			research_cost: 3000,
			year: 1905,
			category: "naval_technology",
			modifiers: [
				"**+3%** Naval AP"
			],
			unlocks: function (usr) {
				usr.modifiers.naval_units_ap = usr.modifiers.naval_units_ap + 0.03;
			}
		},
		casemates: {
			icon: "<:artillery_piece:759161240999952445>",
			description: "Casemates are protective fortifications for artillery that lessen the vulnerabilities of the gunners inside.",
			prerequisite_techs: ["increased_firing_range"],
			research_cost: 3000,
			year: 1862,
			category: "naval_technology",
			modifiers: [
				"**+5%** Naval DP"
			],
			unlocks: function (usr) {
				usr.modifiers.naval_units_dp = usr.modifiers.naval_units_dp + 0.05;
			}
		},
		ironclads: {
			icon: "<:naval_units:716821195277729832>",
			description: "Ironclads are heavy ships-of-the-line that immediately obsoleted ships with wooden hulls, as they were impervious to traditional cannons with their sloped armour.",
			prerequisite_techs: ["gunboat"],
			research_cost: 3000,
			year: 1859,
			category: "naval_technology",
			modifiers: [
				"Enables **Ironclads**",
				"Obsoletes **Clippers**",
				"Obsoletes **Steamboats**",
				"Obsoletes **Frigates**",
				"Obsoletes **First Rates**",
				"Obsoletes **Ships-of-the-Line**",
				"Obsoletes **Men-of-War**"
			],
			unlocks: function (usr) {
				usr.available_units.push("ironclads");
				deleteElement(usr.available_units, "clippers", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "steamboats", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "frigates", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "first_rate", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "ships_of_the_line", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "men_of_war", [usr, "obsolete_units"]);
			}
		},
		rotational_turrets: {
			icon: "<:artillery_piece:759161240999952445>",
			description: "Rotational turrets, fitted into position by gravity, help to increase the various coverage provided by a single gun, allowing for guns of huge calibre as opposed to traditional cannons, which were locked into place.",
			prerequisite_techs: ["casemates"],
			research_cost: 3500,
			year: 1861,
			category: "naval_technology",
			modifiers: [
				"**+10%** Naval AP"
			],
			unlocks: function (usr) {
				usr.modifiers.naval_units_ap = usr.modifiers.naval_units_ap + 0.10;
			}
		},
		breastwork_monitor: {
			icon: "<:naval_units:716821195277729832>",
			description: "The breastwork monitor was an advanced ironclad fitted with rotational turrets. Although initial monitors benefitted from a low profile, as they could not easily be shot at, it also enabled ocean currents to sweep onto the ship and potentially find its way into the hull through openings on its deck. By adding a breastwork to ring the ship, these vulnerabilities can be reduced, as the water would have to splash over the breastworks instead.",
			prerequisite_techs: ["ironclads"],
			research_cost: 3500,
			year: 1861,
			category: "naval_technology",
			modifiers: [
				"Enables **Breastwork Monitors**"
			],
			unlocks: function (usr) {
				usr.available_units.push("breastwork_monitors");
			}
		},
		naval_mines: {
			icon: "<:coal:716791408714973204>",
			description: "Naval mines, in contrast to fire ships, are a safer way to keep our seas protected, as well as to lay down blockade zones as they can pose a constant hazard even without the active presence of other ships.",
			prerequisite_techs: ["rotational_turrets"],
			research_cost: 4000,
			year: 1854,
			category: "naval_technology",
			modifiers: [
				"**-5%** Army Upkeep",
				"**+1%** War Exhaustion Rate"
			],
			unlocks: function (usr) {
				usr.modifiers.army_upkeep = usr.modifiers.army_upkeep - 0.05;
				usr.modifiers.war_exhaustion_rate = usr.modifiers.war_exhaustion_rate + 0.01;
			}
		},
		cruisers: {
			icon: "<:naval_units:716821195277729832>",
			description: "Cruisers are large capital ships tasked with guarding the waters surrounding a primary ship, and sometimes operate independently as flagships on certain missions.",
			prerequisite_techs: ["crossing_the_t","breastwork_monitor"],
			research_cost: 4000,
			year: 1874,
			category: "naval_technology",
			modifiers: [
				"Enables **Cruisers**"
			],
			unlocks: function (usr) {
				usr.available_units.push("cruisers");
			}
		},
		destroyers: {
			icon: "<:naval_units:716821195277729832>",
			description: "Destroyers are light escort ships capable of conducting anti-submarine warfare and duties.",
			prerequisite_techs: ["rotational_turrets","breastwork_monitor"],
			research_cost: 4000,
			year: 1879,
			category: "naval_technology",
			modifiers: [
				"Enables **Destroyers**"
			],
			unlocks: function (usr) {
				usr.available_units.push("destroyers");
			}
		},
		torpedo: {
			icon: "<:coal:716791408714973204>",
			description: "Although the inaccuracies regarding the torpedo and its inherent disadvantages are many, by ironing out some of the more extreme ones (e.g. the circular torpedo), we can introduce it into service for certain naval craft.",
			prerequisite_techs: ["naval_mines"],
			research_cost: 4500,
			year: 1866,
			category: "naval_technology",
			modifiers: [
				"**+2%** Naval AP",
				"This will lead to further advances in the field of naval armaments ..."
			],
			unlocks: function (usr) {
				usr.modifiers.naval_units_ap = usr.modifiers.naval_units_ap + 0.02;
			}
		},
		pre_dreadnought: {
			icon: "<:naval_units:716821195277729832>",
			description: "Pre-dreadnoughts, the first true battleships of the modern age made up the capital ships of the premier powers of the world before the invention of the dreadnought, which immediately rendered it obsolete outside of secondary duties.",
			prerequisite_techs: ["cruisers"],
			research_cost: 4500,
			year: 1888,
			category: "naval_technology",
			modifiers: [
				"Enables **Pre-Dreadnoughts**"
			],
			unlocks: function (usr) {
				usr.available_units.push("pre_dreadnoughts");
			}
		},
		wireless_telegraphy: {
			icon: "<:building:716827579650408538>",
			description: "Wireless telegraphy allowed ships at sea to communicate instantaneously over radio for the first time, saving them from accidents, and helping to coordinate manoeuvres.",
			prerequisite_techs: ["international_standard_of_maritime_flags"],
			research_cost: 4500,
			year: 1910,
			category: "naval_technology",
			modifiers: [
				"**-10%** Colonist Travel Speed",
				"**-5%** Shipment Time"
			],
			unlocks: function (usr) {
				usr.modifiers.colonist_travel_speed = usr.modifiers.colonist_travel_speed - 0.10;
				usr.modifiers.shipment_time = usr.modifiers.shipment_time - 0.05;
			}
		},
		naval_bombardment: {
			icon: "<:infamy:716817688453709905>",
			description: "Naval bombardment, whilst expensive, can suppress an enemy on the coast if sustained, allowing us to take the area with minimal casualties, ideally.",
			prerequisite_techs: ["crossing_the_t","rotational_turrets"],
			research_cost: 5000,
			year: 1914,
			category: "naval_technology",
			modifiers: [
				"**+5%** Naval AP"
			],
			unlocks: function (usr) {
				usr.modifiers.naval_units_ap = usr.modifiers.naval_units_ap + 0.05;
			}
		},
		torpedo_boats: {
			icon: "<:naval_units:716821195277729832>",
			description: "Torpedo boats are fast and nimble ships capable of launching torpedoes at heavier armoured targets in the hopes of sinking them.",
			prerequisite_techs: ["torpedo"],
			research_cost: 5000,
			year: 1900,
			category: "naval_technology",
			modifiers: [
				"Enables **Torpedo Boats**"
			],
			unlocks: function (usr) {
				usr.available_units.push("torpedo_boats");
			}
		},
		dreadnought: {
			icon: "<:naval_units:716821195277729832>",
			description: "The Dreadnought, a true behemoth of the sea, immediately outclassed every other ship that came before it, similar to the ironclad. From that point on, they were relegated to secondary naval duties.",
			prerequisite_techs: ["pre_dreadnought","wireless_telegraphy"],
			research_cost: 5000,
			year: 1906,
			category: "naval_technology",
			modifiers: [
				"Enables **Dreadnoughts**",
				"Obsoletes **Breastwork-Monitors**",
				"Obsoletes **Ironclads**",
				"Obsoletes **Gunboats**",
				"Obsoletes **Clippers**",
				"Obsoletes **Steamboats**",
				"Obsoletes **Pre-Dreadnoughts**"
			],
			unlocks: function (usr) {
				usr.available_units.push("dreadnoughts");
				deleteElement(usr.available_units, "breastwork_monitors", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "ironclads", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "gunboats", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "clippers", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "steamboats", [usr, "obsolete_units"]);
				deleteElement(usr.available_units, "pre_dreadnoughts", [usr, "obsolete_units"]);
			}
		},
		convoy_interception: {
			icon: "<:trade:716828677115084812>",
			description: "By allowing for trade interdiction, we can intercept and sink merchant shipping from underneath the high seas, allowing for a decisive edge over our opponent, even if they hold a monopoly over the surface.",
			prerequisite_techs: ["naval_bombardment"],
			research_cost: 5500,
			year: 1914,
			category: "naval_technology",
			modifiers: [
				"**+5%** Naval AP"
			],
			unlocks: function (usr) {
				usr.modifiers.naval_units_ap = usr.modifiers.naval_units_ap + 0.05;
			}
		},
		torpedo_guidance_systems: {
			icon: "<:government:716817688693047306>",
			description: "Through improving the reliability of torpedoes and allowing an independent guidance system, we can ensure that they will remain steady on course to the target once launched from a submarine, before detonating beneath the ship. ",
			prerequisite_techs: ["torpedo_boats"],
			research_cost: 5500,
			year: 1915,
			category: "naval_technology",
			modifiers: [
				"This will lead to further advancements regarding submarine warfare ..."
			],
			unlocks: function (usr) {
			}
		},
		battlecruisers: {
			icon: "<:naval_units:716821195277729832>",
			description: "Battlecruisers, with the armament of a battleship, and the armour of a cruiser, are capital ships that attempt to both improve manoeuvrability and maintain speed.",
			prerequisite_techs: ["dreadnought"],
			research_cost: 5500,
			year: 1896,
			category: "naval_technology",
			modifiers: [
				"Enables **Battlecruisers**"
			],
			unlocks: function (usr) {
				usr.available_units.push("battlecruisers");
			}
		},
		wireless_radio: {
			icon: "<:old_scroll:716828676880334881>",
			description: "Wireless radio, a step forwards from mere telegraphy, will allow auditory messages to be sent to nearby ships in the vicinity, allowing for improved and faster communication.",
			prerequisite_techs: ["wireless_telegraphy"],
			research_cost: 5500,
			year: 1894,
			category: "naval_technology",
			modifiers: [
				"**-3%** Shipment Time"
			],
			unlocks: function (usr) {
				usr.modifiers.shipment_time = usr.modifiers.shipment_time - 0.03;
			}
		},
		naval_catapults: {
			icon: "<:aeroplanes:716821195407884358>",
			description: "Naval catapults are mechanisms that allow for the takeoff of aeroplanes from battleships, helping to improve air coverage.",
			prerequisite_techs: ["torpedo_guidance_systems","battlecruisers"],
			research_cost: 6000,
			year: 1912,
			category: "naval_technology",
			modifiers: [
				"This will lead to further developments for naval aeroplanes ..."
			],
			unlocks: function (usr) {
			}
		},
		submarines: {
			icon: "<:naval_units:716821195277729832>",
			description: "Submarines, ever present beneath the surface offer a completely new method of conducting naval warfare by starving out an opponent through sinking merchant shipping. Although sometimes frowned upon as not precisely ethical, its practical abilities are nearly limitless.",
			prerequisite_techs: ["torpedo_guidance_systems","battlecruisers"],
			research_cost: 6000,
			year: 1890,
			category: "naval_technology",
			modifiers: [
				"Enables **Submarines**",
				"Obsoletes **Torpedo Boats**"
			],
			unlocks: function (usr) {
				usr.available_units.push("submarines");
				deleteElement(usr.available_units, "torpedo_boats", [usr, "obsolete_units"]);
			}
		},
		electric_signalling: {
			icon: "<:technology:716812861514711040>",
			description: "Electric signalling, although initially conceived as a means of last resort, can help reduce the dangers faced by ships at night, and allow ships to see nearby vessels and emergencies.",
			prerequisite_techs: ["wireless_radio"],
			research_cost: 6000,
			year: 1918,
			category: "naval_technology",
			modifiers: [
				"**-3%** Shipment Time"
			],
			unlocks: function (usr) {
				usr.modifiers.shipment_time = usr.modifiers.shipment_time - 0.03;
			}
		},
		modern_arresting_gear: {
			icon: "<:aeroplanes:716821195407884358>",
			description: "By stopping aeroplanes with a strong steel cord, we can reduce the possibilities of pilots crashing overboard, and reduce aeroplane losses at sea, ultimately driving down unit and training costs.",
			prerequisite_techs: ["naval_catapults","electric_signalling"],
			research_cost: 6500,
			year: 1931,
			category: "naval_technology",
			modifiers: [
				"**-2%** Army Upkeep",
				"**-5%** Training Cost",
				"This will lead to further advances for naval aeroplanes ..."
			],
			unlocks: function (usr) {
				usr.modifiers.army_upkeep = usr.modifiers.army_upkeep - 0.02;
				usr.modifiers.training_cost = usr.modifiers.training_cost - 0.05;
			}
		},
		aircarrier: {
			icon: "<:naval_units:716821195277729832>",
			description: "The air carrier is a virtual hangar at sea that allows us to take off and land aeroplanes, allowing us to project the power of air into conflict zones by sea where it might not otherwise be possible.",
			prerequisite_techs: ["naval_catapults","submarines","electric_signalling"],
			research_cost: 6500,
			year: 1920,
			category: "naval_technology",
			modifiers: [
				"Enables **Air Carriers**"
			],
			unlocks: function (usr) {
				usr.available_units.push("air_carriers");
			}
		},
		naval_logistics: {
			icon: "<:trade:716828677115084812>",
			description: "Naval logistics is the concept by which certain storages of food and other provisions aboard ships should be taken into account, as well as facilities for repair.",
			prerequisite_techs: ["convoy_interception"],
			research_cost: 7000,
			year: 1930,
			category: "naval_technology",
			modifiers: [
				"**-10%** Army Upkeep",
				"**+1** Dockyards per city"
			],
			unlocks: function (usr) {
				usr.modifiers.army_upkeep = usr.modifiers.army_upkeep - 0.10;
				usr.modifiers.dockyards = usr.modifiers.dockyards + 1;
			}
		},
		battleship: {
			icon: "<:naval_units:716821195277729832>",
			description: "The battleship, the successor to the dreadnought, was by far the heaviest capital unit type to ever be created. They featured huge guns capable of shooting dozens of kilometres either inland or at other oceangoing targets. They died with the sinking of the Prince of Wales and Repulse, as well as Pearl Harbour. They were gradually phased out, and by the end of the Cold War, none remained in active service.",
			prerequisite_techs: ["aircarrier"],
			research_cost: 7000,
			year: 1936,
			category: "naval_technology",
			modifiers: [
				"Enables **Battleships**",
				"Obsoletes **Dreadnoughts**"
			],
			unlocks: function (usr) {
				usr.available_units.push("battleships");
				deleteElement(usr.available_units, "dreadnoughts", [usr, "obsolete_units"]);
			}
		},
		strike_force: {
			icon: "<:old_map:716821884867444746>",
			description: "By maintaining a concentrated mass of ships centred around a flagship, we can project naval power into any conflict zone, although it might take a matter of months before such a capability is possible.",
			prerequisite_techs: ["naval_logistics"],
			research_cost: 7500,
			year: 1941,
			category: "naval_technology",
			modifiers: [
				"**+5%** Naval AP"
			],
			unlocks: function (usr) {
				usr.modifiers.naval_units_ap = usr.modifiers.naval_units_ap + 0.05;
			}
		},
		torpedo_bombers: {
			icon: "<:aeroplanes:716821195407884358>",
			description: "Torpedo bombers are aeroplanes that maintain low altitude in order to drop a torpedo, which can then head towards a moving target. They are typically fast and nimble, but are liable to be shot down by ack-ack.",
			prerequisite_techs: ["modern_arresting_gear","battleship"],
			research_cost: 7500,
			year: 1915,
			category: "naval_technology",
			modifiers: [
				"Enables **Torpedo Bombers**"
			],
			unlocks: function (usr) {
				usr.available_units.push("torpedo_bombers");
			}
		},
		aircraft_carrier: {
			icon: "<:aeroplanes:716821195407884358>",
			description: "The aircraft carrier is quickly becoming the dominant ship on the high seas, and so our nation should take steps to, if not produce one, at least acknowledge the existence of them and attempt to develop tactics to counter their ascendant rise.",
			prerequisite_techs: ["modern_arresting_gear","battleship"],
			research_cost: 7500,
			year: 1927,
			category: "naval_technology",
			modifiers: [
				"Enables **Aircraft Carriers**",
				"Obsoletes **Air Carriers**"
			],
			unlocks: function (usr) {
				usr.available_units.push("aircraft_carriers");
				deleteElement(usr.available_units, "air_carriers", [usr, "obsolete_units"]);
			}
		},
		cavity_magnetron_radar: {
			icon: "<:government:716817688693047306>",
			description: "The Cavity Magnetron RADAR was a highly capable British radar that was produced in extremely compact sizes during the Second World War. They were put on board ships and aeroplanes, and helped detect incoming enemy aircraft earlier.",
			prerequisite_techs: ["modern_arresting_gear","battleship"],
			research_cost: 7500,
			year: 1940,
			category: "naval_technology",
			modifiers: [
				"**+5%** Naval DP"
			],
			unlocks: function (usr) {
				usr.modifiers.naval_units_dp = usr.modifiers.naval_units_dp + 0.05;
			}
		},
		island_hopping: {
			icon: "<:provinces:716809229603700737>",
			description: "Island hopping is the tactic of using each consecutive island as a staging ground for invading the next one, in such a manner that eventually whole island chains are taken by friendly forces, helping lower logistical burdens.",
			prerequisite_techs: ["strike_force"],
			research_cost: 8000,
			year: 1942,
			category: "naval_technology",
			modifiers: [
				"**+5%** Naval AP",
				"**-2%** Army Upkeep"
			],
			unlocks: function (usr) {
				usr.modifiers.naval_units_ap = usr.modifiers.naval_units_ap + 0.05;
				usr.modifiers.army_upkeep = usr.modifiers.army_upkeep - 0.02;
			}
		},
		naval_bombers: {
			icon: "<:aeroplanes:716821195407884358>",
			description: "Naval bombers are aircraft specifically designed for naval combat that are meant to take off of aircraft carriers and relatively short runways. As such, they do not carry large payloads, but are designed instead to drop them over enemy ships.",
			prerequisite_techs: ["strike_force"],
			research_cost: 8000,
			year: 1936,
			category: "naval_technology",
			modifiers: [
				"Enables **Naval Bombers**"
			],
			unlocks: function (usr) {
				usr.available_units.push("naval_bombers");
			}
		},
		sonar: {
			icon: "<:technology:716812861514711040>",
			description: "SONAR, a mirror of its above-surface counterpart RADAR, is meant to detect submarines and other threats lurking beneath the oceans. They are also used on submarines for both navigation purposes, and for targeting enemy ships and subs.",
			prerequisite_techs: ["cavity_magnetron_radar"],
			research_cost: 8000,
			year: 1918,
			category: "naval_technology",
			modifiers: [
				"**+5%** Naval DP"
			],
			unlocks: function (usr) {
				usr.modifiers.naval_units_dp = usr.modifiers.naval_units_dp + 0.05;
			}
		},
		aerial_supremacy: {
			icon: "<:aeroplanes:716821195407884358>",
			description: "Aerial supremacy, when ingrained as a naval doctrine, believes that aircraft carriers are the key ships around which naval battles pivot, and that aeroplanes should be used as the main weapons of waging naval warfare, and as a means to quickly project power into a conflict.",
			prerequisite_techs: ["island_hopping"],
			research_cost: 8500,
			year: 1942,
			category: "naval_technology",
			modifiers: [
				"**+5%** Naval AP"
			],
			unlocks: function (usr) {
				usr.modifiers.naval_units_ap = usr.modifiers.naval_units_ap + 0.05;
			}
		},
		slbms: {
			icon: "<:artillery_piece:759161240999952445>",
			description: "SLBMs, or Submarine Launched Ballistic Missiles in its expanded form, can be launched from underwater, making detection minimal, and allowing us to strike coastal cities within minutes.",
			prerequisite_techs: ["island_hopping"],
			research_cost: 8500,
			year: 1959,
			category: "naval_technology",
			modifiers: [
				"**+5%** Naval AP"
			],
			unlocks: function (usr) {
				usr.modifiers.naval_units_ap = usr.modifiers.naval_units_ap + 0.05;
			}
		},
		portable_nuclear_reactor: {
			icon: "<:coal:716791408714973204>",
			description: "Portable nuclear reactors are capable of generating tremendous amounts of power for sustained durations of time without the need to refuel, unlike conventional diesel generators.",
			prerequisite_techs: ["island_hopping"],
			research_cost: 8500,
			year: 1954,
			category: "naval_technology",
			modifiers: [
				"**+5%** Naval DP"
			],
			unlocks: function (usr) {
				usr.modifiers.naval_units_dp = usr.modifiers.naval_units_dp + 0.05;
			}
		},
		nuclear_triad: {
			icon: "<:infamy:716817688453709905>",
			description: "In order to maintain first-strike capability, our nation must first possess the nuclear triad - namely the ability to deliver nuclear warheads to a recipient nation via strategic bombers, nuclear missiles, and nuclear submarines. Of course, we will have to pay for the extra logistical capacity ...",
			prerequisite_techs: ["aerial_supremacy"],
			research_cost: 9000,
			year: 1960,
			category: "naval_technology",
			modifiers: [
				"**+1** Dockyards per city",
				"**+10%** Army Upkeep"
			],
			unlocks: function (usr) {
				usr.modifiers.dockyards = usr.modifiers.dockyards + 1;
				usr.modifiers.army_upkeep = usr.modifiers.army_upkeep + 0.10;
			}
		},
		nuclear_submarine: {
			icon: "<:naval_units:716821195277729832>",
			description: "The nuclear submarine is a submersible vehicle that can stay underwater on extended missions for months or potentially even years at a time without need to stop for refueling, as it relies completely on nuclear power.",
			prerequisite_techs: ["aerial_supremacy"],
			research_cost: 9000,
			year: 1955,
			category: "naval_technology",
			modifiers: [
				"Enables **Nuclear Submarines**"
			],
			unlocks: function (usr) {
				usr.available_units.push("nuclear_submarines");
			}
		},
		organised_taskforces: {
			icon: "<:naval_units:716821195277729832>",
			description: "By organising our naval strike groups into task forces centred around a single aircraft carrier, we can quickly move additional forces into a conflict zone in a matter of weeks.",
			prerequisite_techs: ["nuclear_triad"],
			research_cost: 9500,
			year: 1944,
			category: "naval_technology",
			modifiers: [
				"**+5%** Naval AP"
			],
			unlocks: function (usr) {
				usr.modifiers.naval_units_ap = usr.modifiers.naval_units_ap + 0.05;
			}
		},
		vtol_aircraft: {
			icon: "<:aeroplanes:716821195407884358>",
			description: "VTOL Aircraft, standing for Vertical Take-Off and Landing, are aeroplanes capable of taking off vertically from ship decks, specifically aircraft carriers, or lighter vehicles such as escort carriers or helicopter carriers.",
			prerequisite_techs: ["nuclear_triad"],
			research_cost: 9500,
			year: 1967,
			category: "naval_technology",
			modifiers: [
				"**+10%** Air AP"
			],
			unlocks: function (usr) {
				usr.modifiers.aeroplanes_ap = usr.modifiers.aeroplanes_ap + 0.10;
			}
		},
		supercarriers: {
			icon: "<:naval_units:716821195277729832>",
			description: "Supercarriers are classified as capital ships, although they should be completely distinct from them, as they are the central assets upon which entire countries depend, and have huge carrier capacities.",
			prerequisite_techs: ["slbms","portable_nuclear_reactor"],
			research_cost: 9500,
			year: 1955,
			category: "naval_technology",
			modifiers: [
				"Enables **Supercarriers**",
				"Obsoletes **Battleships**"
			],
			unlocks: function (usr) {
				usr.available_units.push("supercarriers");
				deleteElement(usr.available_units, "battleships", [usr, "obsolete_units"]);
			}
		},
		modern_cruisers_and_frigates: {
			icon: "<:naval_units:716821195277729832>",
			description: "By modernising the secondary capital ships of our nation, we will be able to bring them up to date to adapt to ever evolving threats posed by foreign nations.",
			prerequisite_techs: ["supercarriers"],
			research_cost: 10000,
			year: 1981,
			category: "naval_technology",
			modifiers: [
				"Enables **Modern Cruisers**",
				"Enables **Modern Frigates**",
				"Obsoletes **Cruisers**"
			],
			unlocks: function (usr) {
				usr.available_units.push("modern_cruisers");
				usr.available_units.push("modern_frigates");
				deleteElement(usr.available_units, "cruisers", [usr, "obsolete_units"]);
			}
		},
		electronic_guidance_systems: {
			icon: "<:technology:716812861514711040>",
			description: "Electronic guidance systems provide a path for naval ordnance and payloads to be delivered more effectively and in a more concise manner than currently possible with traditional rotational turrets.",
			prerequisite_techs: ["supercarriers"],
			research_cost: 10000,
			year: 1967,
			category: "naval_technology",
			modifiers: [
				"**+10%** Naval AP"
			],
			unlocks: function (usr) {
				usr.modifiers.naval_units_ap = usr.modifiers.naval_units_ap + 0.10;
			}
		},
		modern_naval_doctrine: {
			icon: "<:globe:716811246556545035>",
			description: "By focusing our navy either on protecting our shoreline, or projecting our power abroad, we can ensure that it remains a flexible force to be reckoned with far into the future.",
			prerequisite_techs: ["organised_taskforces", "modern_cruisers_and_frigates"],
			research_cost: 10500,
			year: 1980,
			category: "naval_technology",
			modifiers: [
				"**+5%** Naval AP"
			],
			unlocks: function (usr) {
				usr.modifiers.naval_units_ap = usr.modifiers.naval_units_ap + 0.05;
			}
		},
		rc_autocannon: {
			icon: "<:artillery_piece:759161240999952445>",
			description: "RC Autocannon are anti-aircraft chainguns controlled remotely that allow for improved defence against low-flying aircraft.",
			prerequisite_techs: ["modern_cruisers_and_frigates"],
			research_cost: 10500,
			year: 1976,
			category: "naval_technology",
			modifiers: [
				"**+5%** Naval DP"
			],
			unlocks: function (usr) {
				usr.modifiers.naval_units_dp = usr.modifiers.naval_units_dp + 0.05;
			}
		},
		asymmetric_naval_warfare: {
			icon: "<:back_button:716829986266546187>",
			description: "By learning to deal with enemies of a more unconventional nature on the high seas, we can protect our merchant fleet from resurgent threats and terrorism.",
			prerequisite_techs: ["modern_naval_doctrine"],
			research_cost: 11000,
			year: 2000,
			category: "naval_technology",
			modifiers: [
				"**+5%** Naval AP"
			],
			unlocks: function (usr) {
				usr.modifiers.naval_units_ap = usr.modifiers.naval_units_ap + 0.05;
			}
		},
		electromagnetic_propulsion: {
			icon: "<:artillery_piece:759161240999952445>",
			description: "Electromagnetic propulsion will allow for future naval units to feature experimental Gauss Guns, which are capable of accelerating kinetic projectiles to fantastic speeds without the need for a visible heat signature.",
			prerequisite_techs: ["rc_autocannon"],
			research_cost: 11000,
			year: 2030,
			category: "naval_technology",
			modifiers: [
				"**+15%** Naval AP"
			],
			unlocks: function (usr) {
				usr.modifiers.naval_units_ap = usr.modifiers.naval_units_ap + 0.15;
			}
		},
		railgun_cruisers: {
			icon: "<:naval_units:716821195277729832>",
			description: "Railgun cruisers are next-generation, state-of-the-art capital ships that can fire hypersonic projectiles capable of reaching speeds of over 3km/s.",
			prerequisite_techs: ["modern_cruisers_and_frigates","vtol_aircraft","organised_taskforces"],
			research_cost: 11000,
			year: 2025,
			category: "naval_technology",
			modifiers: [
				"Enables **Railgun Cruisers**"
			],
			unlocks: function (usr) {
				usr.available_units.push("railgun_cruisers");
			}
		},
		//Economic Technology
		cottage_industry: {
			icon: "<:factory:759161240601493525>",
			description: "The cottage industry, or putting-out system allowed workers to work from home, particularly in the industries of textiles, manufacturing, or agriculture.",
			research_cost: 20,
			year: 1500,
			category: "economic_technology",
			modifiers: [
				"**+5%** Production Efficiency"
			],
			unlocks: function (usr) {
				usr.modifiers.production_efficiency = usr.modifiers.production_efficiency + 0.05;
			}
		},
		the_workshop: {
			icon: "<:workers:732730754735276124>",
			description: "The workshop was a standing improvement over guilds that allowed individual tasks to be conducted more effectively.",
			prerequisite_techs: ["cottage_industry"],
			research_cost: 50,
			year: 1510,
			category: "economic_technology",
			modifiers: [
				"Enables **Workshop**",
				"**+1** Processing Facility per city"
			],
			unlocks: function (usr) {
				usr.available_buildings.push("workshops");
				usr.modifiers.processing_facilities_building_slots = usr.modifiers.processing_facilities_building_slots + 1;
			}
		},
		improved_mining_techniques: {
			icon: "<:lead:716791408840671322>",
			description: "By improving our mining techniques, we can afford to produce more and more from the bowels of the earth with less labour, improving overall efficiency.",
			prerequisite_techs: ["cottage_industry"],
			research_cost: 50,
			year: 1510,
			category: "economic_technology",
			modifiers: [
				"Enables **Copper Mines**",
				"Enables **Iron Mines**",
				"**+5%** RGO Throughput",
				"**+1** Resource Extraction Buildings per city"
			],
			unlocks: function (usr) {
				usr.available_buildings.push("copper_mines");
				usr.available_buildings.push("iron_mines");
				usr.modifiers.rgo_throughput = usr.modifiers.rgo_throughput + 0.05;
				usr.modifiers.resource_extraction_building_slots = usr.modifiers.resource_extraction_building_slots + 1;
			}
		},
		private_industry: {
			icon: "<:money:716817688718213192>",
			description: "By handing over both our financial and industrial potential to private industry, we can begin to develop a flourishing economy based on complex systems of trade and banking.",
			prerequisite_techs: ["cottage_industry"],
			research_cost: 50,
			year: 1520,
			category: "economic_technology",
			modifiers: [
				"**+5%** Tax Efficiency"
			],
			unlocks: function (usr) {
				usr.modifiers.tax_efficiency = usr.modifiers.tax_efficiency + 0.05;
			}
		},
		economic_mobility: {
			icon: "<:trade:716828677115084812>",
			description: "Through a primitive free market society, our craftsmen and peasantry will have the ability to slowly migrate between economic classes, forming a sort of new nobility, and spurring economic innovation.",
			prerequisite_techs: ["the_workshop"],
			research_cost: 75,
			year: 1520,
			category: "economic_technology",
			modifiers: [
				"**+1%** Population Growth Rate",
				"Obsoletes **Guilds**"
			],
			unlocks: function (usr) {
				deleteElement(usr.available_buildings, "guilds");
				usr.pop_growth_modifier = usr.pop_growth_modifier + 0.01;
			}
		},
		wood_beam_support: {
			icon: "<:wood:716791408928751636>",
			description: "By supporting the structural integrity of our mines with wooden beams, we can improve stability and reduce the occurrence of mine accidents or collapses.",
			prerequisite_techs: ["improved_mining_techniques"],
			research_cost: 75,
			year: 1530,
			category: "economic_technology",
			modifiers: [
				"Enables **Coal Mines**",
				"Enables **Lead Mines**",
				"**+2** Mines per city"
			],
			unlocks: function (usr) {
				usr.available_buildings.push("coal_mines");
				usr.available_buildings.push("lead_mines");
				usr.modifiers.mines_building_slots = usr.modifiers.mines_building_slots + 2;
			}
		},
		early_capitalism: {
			icon: "<:gold:716798541028261927>",
			description: "Early capitalism, often revolving around banking, created a new merchant class known as burghers who were primarily responsible for the disposition of capital in a country, and starting up new businesses, especially in trade.",
			prerequisite_techs: ["private_industry"],
			research_cost: 75,
			year: 1525,
			category: "economic_technology",
			modifiers: [
				"**+5%** Tax Efficiency"
			],
			unlocks: function (usr) {
				usr.modifiers.tax_efficiency = usr.modifiers.tax_efficiency + 0.05;
			}
		},
		improved_agriculture: {
			icon: "<:food:716797746715033602>",
			description: "By improving the quality and management of our irrigation systems, we can help ensure that farmers are receiving the water that they need to maintain crop growth, boosting yields.",
			prerequisite_techs: ["economic_mobility"],
			research_cost: 100,
			year: 1550,
			category: "economic_technology",
			modifiers: [
				"**+1** Agriculture per city",
				"**+1** Canal per city"
			],
			unlocks: function (usr) {
				usr.modifiers.agriculture_building_slots = usr.modifiers.agriculture_building_slots + 1;
				usr.modifiers.canals = usr.modifiers.canals + 1;
			}
		},
		wooden_rails: {
			icon: "<:paper:759161240987369522>",
			description: "Using wooden railway systems to cart out heavy loads of stone and ore could improve the efficiency of retrieval from mineral seams and quarries.",
			prerequisite_techs: ["wood_beam_support"],
			research_cost: 100,
			year: 1550,
			category: "economic_technology",
			modifiers: [
				"**+5%** RGO Throughput",
				"**+1** Mine per city",
				"**+1** Resource Extraction Building per city"
			],
			unlocks: function (usr) {
				usr.modifiers.rgo_throughput = usr.modifiers.rgo_throughput + 0.05;
				usr.modifiers.mines_building_slots = usr.modifiers.mines_building_slots + 1;
				usr.modifiers.resource_extraction_building_slots = usr.modifiers.resource_extraction_building_slots + 1;
			}
		},
		banking: {
			icon: "<:money:716817688718213192>",
			description: "The early concept of banking revolved not around safely storing money, but by lending money out to debtors who were then required to pay an interest on that loan, as usury slowly became to be seen as less of a social sin over time.",
			prerequisite_techs: ["early_capitalism"],
			research_cost: 100,
			year: 1397,
			category: "economic_technology",
			modifiers: [
				"**+3%** Tax Efficiency"
			],
			unlocks: function (usr) {
				usr.modifiers.tax_efficiency = usr.modifiers.tax_efficiency + 0.03;
			}
		},
		mercantilism: {
			icon: "<:trade:716828677115084812>",
			description: "Mercantilism was an economic theory that stipulated that the world only held finite sources of wealth, and that nations and empires must compete for them in order to become the most prosperous, thereby depriving their fellow nations of sources of wealth.",
			prerequisite_techs: ["early_capitalism"],
			research_cost: 100,
			year: 1620,
			category: "economic_technology",
			modifiers: [
				"**+5%** Production Efficiency",
				"**-2%** Tax Efficiency"
			],
			unlocks: function (usr) {
				usr.modifiers.production_efficiency = usr.modifiers.production_efficiency + 0.05;
				usr.modifiers.tax_efficiency = usr.modifiers.tax_efficiency - 0.02;
			}
		},
		the_scythe: {
			icon: "<:government:716817688693047306>",
			description: "The scythe is a tool for cutting crops that became developed more and more regularly as new farming techniques spread throughout the Continent in the 15th century.",
			prerequisite_techs: ["improved_agriculture"],
			research_cost: 150,
			year: 1580,
			category: "economic_technology",
			modifiers: [
				"**+1** Agriculture per city",
				"**+2%** Population Growth Rate"
			],
			unlocks: function (usr) {
				usr.modifiers.agriculture_building_slots = usr.modifiers.agriculture_building_slots + 1;
				usr.pop_growth_modifier = usr.pop_growth_modifier + 0.02;
			}
		},
		water_power: {
			icon: "<:factory:759161240601493525>",
			description: "By utilising the power of water to grind materials such as grain and for other usages such as sawing wood, we can improve production efficiency thoroughly and establish its value in providing rotational motion.",
			prerequisite_techs: ["economic_mobility"],
			research_cost: 150,
			year: 1556,
			category: "economic_technology",
			modifiers: [
				"**+2** Industrial Buildings per city",
				"**+2** Processing Facilities per city",
				"**+2** Canals per city"
			],
			unlocks: function (usr) {
				usr.modifiers.industry_building_slots = usr.modifiers.industry_building_slots + 2;
				usr.modifiers.processing_facilities_building_slots = usr.modifiers.processing_facilities_building_slots + 1;
				usr.modifiers.canals = usr.modifiers.canals + 2;
			}
		},
		paper_currency: {
			icon: "<:paper:759161240987369522>",
			description: "Although some may object to the usage of paper money as it carries no inert value, it becomes far easier to carry and print than normal coins, and provided that they are backed by something of monetary value, such as gold, there should be no reason why we should not use it.",
			prerequisite_techs: ["banking"],
			research_cost: 150,
			year: 1690,
			category: "economic_technology",
			modifiers: [
				"**+5%** Tax Efficiency"
			],
			unlocks: function (usr) {
				usr.modifiers.tax_efficiency = usr.modifiers.tax_efficiency + 0.05;
			}
		},
		stock_market: {
			icon: "<:trade:716828677115084812>",
			description: "By diversifying investor risk and providing capital for new businesses, we can speed up economic growth and efficiency in our country.",
			prerequisite_techs: ["mercantilism"],
			research_cost: 150,
			year: 1602,
			category: "economic_technology",
			modifiers: [
				"**+10%** Production Efficiency"
			],
			unlocks: function (usr) {
				usr.modifiers.production_efficiency = usr.modifiers.production_efficiency + 0.10;
			}
		},
		improved_irrigation: {
			icon: "<:food:716797746715033602>",
			description: "Improving our irrigation could mean that our nation has more expendable arable land that can be used for the production of food.",
			prerequisite_techs: ["the_scythe","water_power"],
			research_cost: 200,
			year: 1610,
			category: "economic_technology",
			modifiers: [
				"**+1** Agriculture per city"
			],
			unlocks: function (usr) {
				usr.modifiers.agriculture_building_slots = usr.modifiers.agriculture_building_slots + 1;
			}
		},
		the_watermill: {
			icon: "<:factory:759161240601493525>",
			description: "The watermill is a type of manufactory that is reliant on water to provide rotational motion, typically by sitting near a flowing source of water, such as a river.",
			prerequisite_techs: ["water_power"],
			research_cost: 200,
			year: 1643,
			category: "economic_technology",
			modifiers: [
				"Enables **Watermills**",
				"**+3** Canals per city"
			],
			unlocks: function (usr) {
				usr.available_buildings.push("watermills");
				usr.modifiers.canals = usr.modifiers.canals + 3;
			}
		},
		steel_tools: {
			icon: "<:steel:716791408828088420>",
			description: "Steel tools, through their merit as a harder and more durable material than iron, should become the main material upon which our new tools are based, allowing for more efficient mining of iron and harder metals.",
			prerequisite_techs: ["wooden_rails"],
			research_cost: 200,
			year: 1618,
			category: "economic_technology",
			modifiers: [
				"**+4** Resource Extraction Buildings per city",
				"**+1** Canal per city",
				"**-5%** Construction Time"
			],
			unlocks: function (usr) {
				usr.modifiers.resource_extraction_building_slots = usr.modifiers.resource_extraction_building_slots + 4;
				usr.modifiers.canals = usr.modifiers.canals + 1;
				usr.modifiers.construction_speed = usr.modifiers.construction_speed - 0.05;
			}
		},
		banknotes: {
			icon: "<:money:716817688718213192>",
			description: "Banknotes, initially starting out as I.O.U. scraps issued by more reputable entities, eventually came to be a currency in itself, often backed up by the local government in smaller city-states.",
			prerequisite_techs: ["paper_currency"],
			research_cost: 200,
			year: 1666,
			category: "economic_technology",
			modifiers: [
				"**+3%** Tax Efficiency"
			],
			unlocks: function (usr) {
				usr.modifiers.tax_efficiency = usr.modifiers.tax_efficiency + 0.03;
			}
		},
		four_field_crop_rotation: {
			icon: "<:provinces:716809229603700737>",
			description: "With the advent of the First Agricultural Revolution, our noblemen have made a discovery that the fertility of the soil can be maintained via crop rotation, in such a manner so that our fields do not have to go fallow in any year.",
			prerequisite_techs: ["improved_irrigation"],
			research_cost: 250,
			year: 1674,
			category: "economic_technology",
			modifiers: [
				"**+3%** Population Growth Rate",
				"**+2** Agriculture per city"
			],
			unlocks: function (usr) {
				usr.pop_growth_modifier = usr.pop_growth_modifier + 0.03;
				usr.modifiers.agriculture_building_slots = usr.modifiers.agriculture_building_slots + 2;
			}
		},
		manufactories: {
			icon: "<:factory:759161240601493525>",
			description: "Manufactories were organised places of work where valuable goods were assembled. The advent of this institution quickly obsoleted the guild.",
			prerequisite_techs: ["the_watermill","steel_tools"],
			research_cost: 250,
			year: 1630,
			category: "economic_technology",
			modifiers: [
				"Enables **Manufactories**",
				"Obsoletes **Workshops**"
			],
			unlocks: function (usr) {
				usr.available_buildings.push("manufactories");
				deleteElement(usr.available_buildings, "workshops");
			}
		},
		trading_companies: {
			icon: "<:trade:716828677115084812>",
			description: "Trading companies were typically private enterprises, often with limited state support, that were allowed to go to far off lands to claim them for their mother country, and bring back exotic goods for a profit.",
			prerequisite_techs: ["stock_market"],
			research_cost: 250,
			year: 1602,
			category: "economic_technology",
			modifiers: [
				"**+5%** Production Efficiency",
				"**-5%** Shipment Time"
			],
			unlocks: function (usr) {
				usr.modifiers.production_efficiency = usr.modifiers.production_efficiency + 0.05;
				usr.modifiers.shipment_time = usr.modifiers.shipment_time - 0.05;
			}
		},
		land_centralisation: {
			icon: "<:provinces:716809229603700737>",
			description: "Although unpopular amongst the peasantry for the sheer amount of land that land centralisation will take away, it will have a drastic effect on agricultural efficiency, and possibly even begin a population boom.",
			prerequisite_techs: ["four_field_crop_rotation"],
			research_cost: 350,
			year: 1650,
			category: "economic_technology",
			modifiers: [
				"Enables **Centralised Farms**",
				"**+5%** Population Growth Rate",
				"**-1** Agriculture per city",
				"**-10%** Stability"
			],
			unlocks: function (usr) {
				usr.available_buildings.push("centralised_farms");
				usr.pop_growth_modifier = usr.pop_growth_modifier + 0.05;
				usr.modifiers.agriculture_building_slots = usr.modifiers.agriculture_building_slots - 1;
				usr.modifiers.stability_modifier = usr.modifiers.stability_modifier - 10;
			}
		},
		ventilating_galleries: {
			icon: "<:stone:716796878649426020>",
			description: "The introduction of ventilating galleries to our mines will help provide much needed oxygen to our miners, allowing our mines to go deeper than ever before in search of valuable minerals ...",
			prerequisite_techs: ["the_watermill","steel_tools"],
			research_cost: 350,
			year: 1720,
			category: "economic_technology",
			modifiers: [
				"Enables **Gold Mines**",
				"Enables **Sulphur Mines**",
				"**+5%** Building Cost"
			],
			unlocks: function (usr) {
				usr.available_buildings.push("gold_mines");
				usr.available_buildings.push("sulphur_mines");
				usr.modifiers.building_cost = usr.modifiers.building_cost + 0.05;
			}
		},
		global_trading: {
			icon: "<:taxes:716817688781127810>",
			description: "As our network of trading ports begin to criss-cross the world, globalisation of trade is becoming increasingly common, and more and more exotic goods are beginning to reach our shores ... goods that our craftsmen could surely learn a lot from.",
			prerequisite_techs: ["banknotes","trading_companies"],
			research_cost: 350,
			year: 1701,
			category: "economic_technology",
			modifiers: [
				"Enables **Ports** (Level: 1)",
				"**+5%** Production Efficiency",
				"**-5%** Shipment Time"
			],
			unlocks: function (usr) {
				usr.available_buildings.push("ports");
				usr.modifiers.production_efficiency = usr.modifiers.production_efficiency + 0.05;
				usr.modifiers.shipment_time = usr.modifiers.shipment_time - 0.05;
			}
		},
		selective_breeding: {
			icon: "<:culture:758424912049864784>",
			description: "Through the usage of selective breeding to grow our livestock as fat as possible, we can improve farming efficiency and output higher meat yields per hectare than ever before.",
			prerequisite_techs: ["land_centralisation"],
			research_cost: 500,
			year: 1660,
			category: "economic_technology",
			modifiers: [
				"**+1** Agriculture per city"
			],
			unlocks: function (usr) {
				usr.modifiers.agriculture_building_slots = usr.modifiers.agriculture_building_slots + 1;
			}
		},
		putting_out_system: {
			icon: "<:development:716811992421367869>",
			description: "The putting-out system, similar in nature to the cottage industry, allowed centralised businesses to distribute production over a wide range of households, before turning them in. It was primarily used in the fields of manufacturing and textiles.",
			prerequisite_techs: ["manufactories"],
			research_cost: 500,
			year: 1750,
			category: "economic_technology",
			modifiers: [
				"**+10%** RGO Throughput"
			],
			unlocks: function (usr) {
				usr.modifiers.rgo_throughput = usr.modifiers.rgo_throughput + 0.10;
			}
		},
		centralised_banking: {
			icon: "<:money:716817688718213192>",
			description: "Via the establishment of a central bank, our national government will have more say over economic policy, and will be able to right the ship that is our nation, should the storms of a financial panic come.",
			prerequisite_techs: ["global_trading"],
			research_cost: 500,
			year: 1694,
			category: "economic_technology",
			modifiers: [
				"**+5%** Tax Efficiency"
			],
			unlocks: function (usr) {
				usr.modifiers.tax_efficiency = usr.modifiers.tax_efficiency + 0.05;
			}
		},
		megacorporations: {
			icon: "<:old_scroll:716828676880334881>",
			description: "By licensing monopolies to certain companies to dominate entire regions of trade, we can improve the trade efficiency of our nation and create loyal vassals subject only to us.",
			prerequisite_techs: ["global_trading"],
			research_cost: 500,
			year: 1740,
			category: "economic_technology",
			modifiers: [
				"**+1** Port per city",
				"**+5%** Production Efficiency"
			],
			unlocks: function (usr) {
				usr.modifiers.ports = usr.modifiers.ports + 1;
				usr.modifiers.production_efficiency = usr.modifiers.production_efficiency + 0.05;
			}
		},
		improved_transportation: {
			icon: "<:actions:716817688244256770>",
			description: "Improving the quality and quantity of roads in the countryside, as well as building new canals could go a long way in improving the amount of natural resources we gain.",
			prerequisite_techs: ["selective_breeding"],
			research_cost: 650,
			year: 1735,
			category: "economic_technology",
			modifiers: [
				"Enables **Plantations**",
				"**+5%** RGO Throughput",
				"**-5%** Construction Time"
			],
			unlocks: function (usr) {
				usr.available_buildings.push("plantations");
				usr.modifiers.rgo_throughput = usr.modifiers.rgo_throughput + 0.05;
				usr.modifiers.construction_speed = usr.modifiers.construction_speed - 0.05;
			}
		},
		mills: {
			icon: "<:factory:759161240601493525>",
			description: "Mills, similar to watermills, are used to described improved manufactories capable of translating waterpower into rotational motion for the manufacturing of various products.",
			prerequisite_techs: ["putting_out_system"],
			research_cost: 650,
			year: 1770,
			category: "economic_technology",
			modifiers: [
				"Enables **Ammunition Factories**",
				"Enables **Mills**",
				"Enables **Textile Mills**",
				"**+1** Industrial Buildings per city",
				"Obsoletes **Watermills**"
			],
			unlocks: function (usr) {
				usr.available_buildings.push("ammunition_factories");
				usr.available_buildings.push("mills");
				usr.available_buildings.push("textile_mills");
				usr.modifiers.industry_building_slots = usr.modifiers.industry_building_slots + 1;
				deleteElement(usr.available_buildings, "watermills");
			}
		},
		pig_iron_smelting: {
			icon: "<:factory:759161240601493525>",
			description: "Pig iron, also known as crude iron is the product obtained by smelteries from merely smelting raw iron without adding any carbon. It was used as a intermediary between raw iron and wrought iron, which was used in construction.",
			prerequisite_techs: ["ventilating_galleries"],
			research_cost: 650,
			year: 1783,
			category: "economic_technology",
			modifiers: [
				"**-5%** Building Cost",
				"**+1** Mine per city",
				"**+1** Processing Facility per city"
			],
			unlocks: function (usr) {
				usr.modifiers.building_cost = usr.modifiers.building_cost - 0.05;
				usr.modifiers.mines_building_slots = usr.modifiers.mines_building_slots + 1;
				usr.modifiers.processing_facilities_building_slots = usr.modifiers.processing_facilities_building_slots + 1;
			}
		},
		modern_loans_and_bonds: {
			icon: "<:money:716817688718213192>",
			description: "By keeping good track of the amount of debt that our clients owe us, we can ensure that debt is fairly collected, and that creditors do not take advantage of their position, giving investors and businesses more confidence in our nation's economy.",
			prerequisite_techs: ["centralised_banking"],
			research_cost: 650,
			year: 1711,
			category: "economic_technology",
			modifiers: [
				"**+5%** Tax Efficiency",
				"**-5%** Building Cost"
			],
			unlocks: function (usr) {
				usr.modifiers.tax_efficiency = usr.modifiers.tax_efficiency - 0.05;
				usr.modifiers.building_cost = usr.modifiers.building_cost - 0.05;
			}
		},
		monetary_exchange: {
			icon: "<:paper:759161240987369522>",
			description: "Through allowing foreign currencies to be traded between nations, we can raise capital, even from foreign lands to help support our businesses, whereas older means of monetary exchange were more inconvenient, and relied on the trust in the banker.",
			prerequisite_techs: ["megacorporations"],
			research_cost: 650,
			year: 1720,
			category: "economic_technology",
			modifiers: [
				"**+5%** Production Efficiency"
			],
			unlocks: function (usr) {
				usr.modifiers.production_efficiency = usr.modifiers.production_efficiency + 0.05;
			}
		},
		rotherham_plough: {
			icon: "<:iron:716791408819961866>",
			description: "The Rotherham Plough, one of the first great modern tools of agriculture, was used for tilling the soil prior to planting in order to expose the most nutrients for crops. It was typically driven by an ox, and was the first to be produced on a mass scale.",
			prerequisite_techs: ["improved_transportation"],
			research_cost: 750,
			year: 1730,
			category: "economic_technology",
			modifiers: [
				"**+2%** Population Growth Rate",
				"**+3** Agriculture per city"
			],
			unlocks: function (usr) {
				usr.pop_growth_modifier = usr.pop_growth_modifier + 0.02;
				usr.modifiers.agriculture_building_slots = usr.modifiers.agriculture_building_slots + 3;
			}
		},
		government_banknotes: {
			icon: "<:paper:759161240987369522>",
			description: "Through the issuing of banknotes ourselves rather than from other banks and private institutions, we can help improve investor confidence and the level of trust that the public holds in us regarding the subject of paper currency.",
			prerequisite_techs: ["modern_loans_and_bonds"],
			research_cost: 750,
			year: 1694,
			category: "economic_technology",
			modifiers: [
				"**+3%** Tax Efficiency",
				"**+5%** Stability"
			],
			unlocks: function (usr) {
				usr.modifiers.tax_efficiency = usr.modifiers.tax_efficiency + 0.03;
				usr.modifiers.stability_modifier = usr.modifiers.stability_modifier + 5;
			}
		},
		physiocracy: {
			icon: "<:knowledge:716797747193446441>",
			description: "Physiocracy, one of the first economic theories to emerge after mercantilism, was its direct opposite that believed that the wealth of nations derived not from overseas trade, but from the domestic economy, which was primarily agrarian in nature. They became popular during the later half of the 18th century, but never gained much traction outside of it, and is today considered the predecessor to classical economics.",
			prerequisite_techs: ["monetary_exchange"],
			research_cost: 750,
			year: 1727,
			category: "economic_technology",
			modifiers: [
				"**+2%** Production Efficiency"
			],
			unlocks: function (usr) {
				usr.modifiers.production_efficiency = usr.modifiers.production_efficiency + 0.02;
			}
		},
		early_steam_engine: {
			icon: "<:factory:759161240601493525>",
			description: "Although the early steam engine may not have been particularly efficient in deriving power on its own, it was often used to help ventilate mines, leading to miners being able to stay down for longer, and deeper, than ever before.",
			prerequisite_techs: ["mills"],
			research_cost: 900,
			year: 1763,
			category: "economic_technology",
			modifiers: [
				"**+5%** RGO Throughput"
			],
			unlocks: function (usr) {
				usr.modifiers.rgo_throughput = usr.modifiers.rgo_throughput + 0.05;
			}
		},
		deeper_mineshafts: {
			icon: "<:factory:759161240601493525>",
			description: "By drilling deeper mineshafts, and in some cases, simply vertical mineshafts into the face of the earth, we can expose new mineral seams that may not have been possible before, and with the emerging science of prospection, improve overall resource extraction efficiency.",
			prerequisite_techs: ["pig_iron_smelting"],
			research_cost: 900,
			year: 1765,
			category: "economic_technology",
			modifiers: [
				"Unlocks **Bauxite Mines**",
				"**+2** Mines per city",
				"**+2** Resource Extraction Buildings per city",
				"**+10%** RGO Throughput"
			],
			unlocks: function (usr) {
				usr.available_buildings.push("bauxite_mines");
				usr.modifiers.mines_building_slots = usr.modifiers.mines_building_slots + 2;
				usr.modifiers.resource_extraction_building_slots = usr.modifiers.resource_extraction_building_slots + 2;
				usr.modifiers.rgo_throughput = usr.modifiers.rgo_throughput + 0.10;
			}
		},
		bullionism: {
			icon: "<:gold:716798541028261927>",
			description: "Bullionism, the direct antecedent to the gold and silver standards, was an economic doctrine which held that the value of the currency relied on precious metals, particularly gold, and that nations should store as much of it as possible in order to guarantee the safety and stability of their currencies, although it will take some initial startup capital to secure our gold and silver reserves ...",
			prerequisite_techs: ["government_banknotes"],
			research_cost: 900,
			year: 1627,
			category: "economic_technology",
			modifiers: [
				"**-5%** Tax Efficiency",
				"**+5%** Stability"
			],
			unlocks: function (usr) {
				usr.modifiers.tax_efficiency = usr.modifiers.tax_efficiency - 0.05;
				usr.modifiers.stability_modifier = usr.modifiers.stability_modifier + 5;
			}
		},
		free_trade_doctrine: {
			icon: "<:trade:716828677115084812>",
			description: "One of the earliest schools of thought to come out of classical economics, the free trade doctrine posited that if all nations began lifting tariffs and severely limiting protectionism, the wealth of a country would benefit as a result, as trade with more nations would become possible.",
			prerequisite_techs: ["physiocracy"],
			research_cost: 900,
			year: 1800,
			category: "economic_technology",
			modifiers: [
				"**+1** Port per city",
				"**+5%** Production Efficiency"
			],
			unlocks: function (usr) {
				usr.modifiers.ports = usr.modifiers.ports + 1;
				usr.modifiers.production_efficiency = usr.modifiers.production_efficiency + 0.05;
			}
		},
		sodium_nitrate: {
			icon: "<:paper:759161240987369522>",
			description: "Sodium nitrate, similar to salt, was a preservative used to keep meats consumable for long periods of time. It was eventually superseded by refrigeration technologies.",
			prerequisite_techs: ["rotherham_plough"],
			research_cost: 1000,
			year: 1820,
			category: "economic_technology",
			modifiers: [
				"Enables **Fertiliser Factories**",
				"**+1%** Population Growth Rate",
				"Obsoletes **Farms**"
			],
			unlocks: function (usr) {
				usr.available_buildings.push("fertiliser_factories");
				usr.pop_growth_modifier = usr.pop_growth_modifier + 0.01;
				deleteElement(usr.available_buildings, "farms");
			}
		},
		factories: {
			icon: "<:factory:759161240601493525>",
			description: "With the advent of the economically viable steam engine, rotational motion no longer depended on a country's waterways, but on their coal reserves, as steam could now be easily and accessibly generated from any location, leading to the birth of huge industrial cities that became the forges and arsenals of entire nations.",
			prerequisite_techs: ["early_steam_engine"],
			research_cost: 1000,
			year: 1770,
			category: "economic_technology",
			modifiers: [
				"Enables **Artillery Factories**",
				"Enables **Concrete Factories**",
				"Enables **Factories**",
				"Enables **Machine Parts Factories**",
				"Unlocks **Minimum Wage** Reforms"
			],
			unlocks: function (usr) {
				usr.available_buildings.push("artillery_factories");
				usr.available_buildings.push("concrete_factories");
				usr.available_buildings.push("machine_parts_factories");
				unlockReform(usr.id, "minimum_wage");
			}
		},
		cast_iron_construction: {
			icon: "<:iron:716791408819961866>",
			description: "The development of cast iron has allowed structures to be built for cheaper than ever before, whilst maintaining structural integrity. Although relatively brittle, further developments in metallurgy could yield increasingly better results ...",
			prerequisite_techs: ["early_steam_engine"],
			research_cost: 1000,
			year: 1779,
			category: "economic_technology",
			modifiers: [
				"**+1** Processing Facility per city",
				"**-5%** Construction Time",
				"**-3%** Building Cost"
			],
			unlocks: function (usr) {
				usr.modifiers.processing_facilities_building_slots = usr.modifiers.processing_facilities_building_slots + 1;
				usr.modifiers.building_cost = usr.modifiers.building_cost - 0.03;
				usr.modifiers.construction_speed = usr.modifiers.construction_speed - 0.05;
			}
		},
		early_classical_theory: {
			icon: "<:paper:759161240987369522>",
			description: "An umbrella term for a variety of differing opinions on economic thought, early classical theory first proposed the concept of the 'invisible hand', by which markets would be able to regulate themselves, and soon became the prevailing form of economic thought throughout Western capitalist economies in the 19th century.",
			prerequisite_techs: ["free_trade_doctrine"],
			research_cost: 1000,
			year: 1776,
			category: "economic_technology",
			modifiers: [
				"**+5%** Production Efficiency"
			],
			unlocks: function (usr) {
				usr.modifiers.production_efficiency = usr.modifiers.production_efficiency + 0.05;
			}
		},
		improved_steam_engine: {
			icon: "<:technology:716812861514711040>",
			description: "By reducing the amount of energy lost from the usage of the steam engine, we can create a more efficient mechanism for translating coal and water into the machine needed to power today's factories.",
			prerequisite_techs: ["factories"],
			research_cost: 1200,
			year: 1775,
			category: "economic_technology",
			modifiers: [
				"**+2** Canals per city",
				"**+3%** RGO Throughput",
				"**+2%** Production Efficiency",
				"Obsoletes **Manufactories**"
			],
			unlocks: function (usr) {
				usr.modifiers.rgo_throughput = usr.modifiers.rgo_throughput + 0.03;
				usr.modifiers.production_efficiency = usr.modifiers.production_efficiency + 0.02;
				usr.modifiers.canals = usr.modifiers.canals + 2;
				deleteElement(usr.available_buildings, "manufactories");
			}
		},
		wrought_iron_construction: {
			icon: "<:iron:716791408819961866>",
			description: "Wrought iron, or pure iron, was a relatively malleable form of the metal that could be worked into various shapes relatively easily because of its low carbon content, with its main drawback being brittleness.",
			prerequisite_techs: ["cast_iron_construction"],
			research_cost: 1200,
			year: 1784,
			category: "economic_technology",
			modifiers: [
				"**+2** Processing Facilities",
				"**-10%** Construction Time",
				"**-3%** Building Cost"
			],
			unlocks: function (usr) {
				usr.modifiers.processing_facilities_building_slots = usr.modifiers.processing_facilities_building_slots + 2;
				usr.modifiers.construction_speed = usr.modifiers.construction_speed - 0.10;
				usr.modifiers.building_cost = usr.modifiers.building_cost - 0.03;
			}
		},
		gold_standard: {
			icon: "<:gold:716798541028261927>",
			description: "The gold standard, which swept the Continent and Great Britain during the 19th century, was an economic term used to describe the backing of paper currency by gold in order to protect the value of the currency from dangers such as debasing. It was largely abandoned after Bretton Woods.",
			prerequisite_techs: ["bullionism"],
			research_cost: 1200,
			year: 1790,
			category: "economic_technology",
			modifiers: [
				"**+5%** Tax Efficiency"
			],
			unlocks: function (usr) {
				usr.modifiers.tax_efficiency = usr.modifiers.tax_efficiency + 0.05;
			}
		},
		economic_unions: {
			icon: "<:trade:716828677115084812>",
			description: "In areas densely populated by sovereign units, such as Germany or Italy, trade/economic unions became increasingly common, allowing for no customs checks when crossing borders, and for facilitating well-rounded trade free of robber barons.",
			prerequisite_techs: ["early_classical_theory"],
			research_cost: 1200,
			year: 1815,
			category: "economic_technology",
			modifiers: [
				"**+5%** Production Efficiency"
			],
			unlocks: function (usr) {
				usr.modifiers.production_efficiency = usr.modifiers.production_efficiency + 0.05;
			}
		},
		guano: {
			icon: "<:paper:759161240987369522>",
			description: "Guano, the aggregate excrement accumulated from bird droppings is a valuable fertiliser, and can also be used in the manufacture of explosives and gunpowder.",
			prerequisite_techs: ["sodium_nitrate"],
			research_cost: 1400,
			year: 1802,
			category: "economic_technology",
			modifiers: [
				"**+2%** Population Growth Rate"
			],
			unlocks: function (usr) {
				usr.pop_growth_modifier = usr.pop_growth_modifier + 0.02;
			}
		},
		early_steel_factories: {
			icon: "<:steel:716791408828088420>",
			description: "Early steel factories used industrial blast furnaces in an attempt to produce more steel. But without the invention of the Bessemer Process, steel remained a relatively expensive material as impurities were still hard to remove.",
			prerequisite_techs: ["improved_steam_engine"],
			year: 1720,
			research_cost: 1400,
			category: "economic_technology",
			modifiers: [
				"**+1** Industrial Building per city"
			],
			unlocks: function (usr) {
				usr.modifiers.industry_building_slots = usr.modifiers.industry_building_slots + 1;
			}
		},
		silver_standard: {
			icon: "<:iron:716791408819961866>",
			description: "Although reserves of gold may not always be available, there remain other precious metals with which we can back up our currency, primarily silver, which economists have suggested may help to provide a more stable backing than mere gold alone.",
			prerequisite_techs: ["improved_steam_engine"],
			research_cost: 1400,
			year: 1848,
			category: "economic_technology",
			modifiers: [
				"**+3%** Tax Efficiency"
			],
			unlocks: function (usr) {
				usr.modifiers.tax_efficiency = usr.modifiers.tax_efficiency + 0.03;
			}
		},
		late_classical_theory: {
			icon: "<:money:716817688718213192>",
			description: "As the memories of feudalism begin to fade more and more into obscurity, economists are beginning to recognise the market potential held by industrial factories and enterprises, and are beginning to transform the field into a true science.",
			prerequisite_techs: ["economic_unions"],
			research_cost: 1400,
			year: 1830,
			category: "economic_technology",
			modifiers: [
				"**+5%** Production Efficiency"
			],
			unlocks: function (usr) {
				usr.modifiers.production_efficiency = usr.modifiers.production_efficiency + 0.05;
			}
		},
		experimental_railways: {
			icon: "<:steel:716791408828088420>",
			description: "Through the usage of railways, we can speed up transport around the country, unlocking potential in areas never quite developed before.",
			prerequisite_techs: ["early_steel_factories","wrought_iron_construction"],
			research_cost: 1600,
			year: 1829,
			category: "economic_technology",
			modifiers: [
				"Enables **Railways** (Level: 1)",
				"**+1** Extra Building Slots"
			],
			unlocks: function (usr) {
				usr.available_buildings.push("railways");
				usr.modifiers.extra_building_slots = usr.modifiers.extra_building_slots + 1;
			}
		},
		shaft_mining: {
			icon: "<:wood:716791408928751636>",
			description: "The development of shafts not only as ventilating galleries, but as the main conduit for the mine itself is changing the field of mining, allowing us to access deeper pockets of minerals than previously deemed possible.",
			prerequisite_techs: ["early_steel_factories","wrought_iron_construction"],
			research_cost: 1600,
			year: 1840,
			category: "economic_technology",
			modifiers: [
				"Enables **Silver Mines**",
				"**+3** Mines per city",
				"**+1** Resource Extraction Buildings per city"
			],
			unlocks: function (usr) {
				usr.available_buildings.push("silver_mines");
				usr.modifiers.mines_building_slots = usr.modifiers.mines_building_slots + 3;
				usr.modifiers.resource_extraction_building_slots = usr.modifiers.resource_extraction_building_slots + 1;
			}
		},
		bimetallism: {
			icon: "<:gold:716798541028261927>",
			description: "The introduction of bimetallism, an economic theory which postulates that fiscal currency can be backed most effectively through a combination of precious metals, particularly silver and gold, holds promise, and can be adopted as the official policy of our country.",
			prerequisite_techs: ["silver_standard"],
			research_cost: 1600,
			year: 1860,
			category: "economic_technology",
			modifiers: [
				"**+5%** Stability"
			],
			unlocks: function (usr) {
				usr.modifiers.stability_modifier = usr.modifiers.stability_modifier + 5;
			}
		},
		forced_trade_agreements: {
			icon: "<:trade:716828677115084812>",
			description: "With improvements in our military technology, we now possess the ability to force open the doors of some ... lesser nations, allowing us to sign treaties extremely favourable to ourselves, and allowing for our businesses to take advantage of their economy.",
			prerequisite_techs: ["late_classical_theory"],
			research_cost: 1600,
			year: 1839,
			category: "economic_technology",
			modifiers: [
				"**+1** Political Capital Gain"
			],
			unlocks: function (usr) {
				usr.modifiers.political_capital_gain = usr.modifiers.political_capital_gain + 1;
			}
		},
		fertiliser_development: {
			icon: "<:development:716811992421367869>",
			description: "Synthesising fertiliser from guano could yield a massive boost to agriculture and the more agrarian sectors of our society, as more land can now be turned into arable soil.",
			prerequisite_techs: ["guano"],
			research_cost: 1800,
			year: 1850,
			category: "economic_technology",
			modifiers: [
				"**+5** Agriculture per city",
				"**-4%** Population Growth Rate"
			],
			unlocks: function (usr) {
				usr.modifiers.agriculture_building_slots = usr.modifiers.agriculture_building_slots + 5;
				usr.pop_growth_modifier = usr.pop_growth_modifier - 0.04;
			}
		},
		iron_railways: {
			icon: "<:steel:716791408828088420>",
			description: "The construction of iron railways throughout our country will greatly speed up transport and improve the quality of infrastructure, allowing for more manufactured goods and raw resources to travel throughout.",
			prerequisite_techs: ["experimental_railways"],
			research_cost: 1800,
			year: 1850,
			category: "economic_technology",
			modifiers: [
				"**+2** Railways",
				"**+10%** RGO Throughput"
			],
			unlocks: function (usr) {
				usr.modifiers.railways = usr.modifiers.railways + 2;
				usr.modifiers.rgo_throughput = usr.modifiers.rgo_throughput + 0.10;
			}
		},
		unequal_treaties: {
			icon: "<:cb:716828676855169107>",
			description: "Although they may be unequal, by ensuring that they're unequal only for them, and not for us, we can extract more raw resources from our 'spheres of influence', even if those areas are not precisely ours.",
			prerequisite_techs: ["forced_trade_agreements"],
			research_cost: 1800,
			year: 1853,
			category: "economic_technology",
			modifiers: [
				"**+3%** Production Efficiency"
			],
			unlocks: function (usr) {
				usr.modifiers.production_efficiency = usr.modifiers.production_efficiency + 0.03;
			}
		},
		coprolite_fertiliser: {
			icon: "<:food:716797746715033602>",
			description: "Coprolite fertiliser, made from the fossilised excrement of dead animals, helps to enrich the soil on which it is applied, boosting crop yields over the selected area.",
			prerequisite_techs: ["fertiliser_development"],
			research_cost: 2000,
			year: 1850,
			category: "economic_technology",
			modifiers: [
				"**+1%** Population Growth Rate"
			],
			unlocks: function (usr) {
				usr.pop_growth_modifier = usr.pop_growth_modifier + 0.01;
			}
		},
		arsenals: {
			icon: "<:land_vehicles:716821195215077406>",
			description: "Arsenals are vast, sprawling military factories responsible for the production of arms and ammunition, as well as their maintenace and restoration.",
			prerequisite_techs: ["iron_railways"],
			research_cost: 2000,
			year: 1852,
			category: "economic_technology",
			modifiers: [
				"Enables **Arsenals**",
				"Enables **Small Arms Factories**"
			],
			unlocks: function (usr) {
				usr.available_buildings.push("arsenals");
				usr.available_buildings.push("small_arms_factories");
			}
		},
		global_finance: {
			icon: "<:money:716817688718213192>",
			description: "With the invention of the telegraph, financial transactions can now be made instantaneously, revolutionising the speed at which commerce and business can travel.",
			prerequisite_techs: ["bimetallism"],
			research_cost: 2000,
			year: 1851,
			category: "economic_technology",
			modifiers: [
				"**+5%** Tax Efficiency"
			],
			unlocks: function (usr) {
				usr.modifiers.tax_efficiency = usr.modifiers.tax_efficiency + 0.05;
			}
		},
		protectionism: {
			icon: "<:workers:732730754735276124>",
			description: "By protecting our companies from foreign competitors whilst still in their infancy, we can help nurture a growing domestic industry here at home. Free trade is not always right.",
			prerequisite_techs: ["iron_railways"],
			research_cost: 2000,
			year: 1812,
			category: "economic_technology",
			modifiers: [
				"**+5%** Production Efficiency"
			],
			unlocks: function (usr) {
				usr.modifiers.production_efficiency = usr.modifiers.production_efficiency + 0.05;
			}
		},
		seed_drill: {
			icon: "<:steel:716791408828088420>",
			description: "Seed drills, agricultural supplements that assist in the planting of seeds, can help boost agricultural efficiency, as up until now, seeds would often be scattered on tilled fields, instead of properly planted.",
			prerequisite_techs: ["coprolite_fertiliser"],
			research_cost: 2500,
			year: 1850,
			category: "economic_technology",
			modifiers: [
				"**+1** Agriculture per city"
			],
			unlocks: function (usr) {
				usr.modifiers.agriculture_building_slots = usr.modifiers.agriculture_building_slots + 1;
			}
		},
		shift_work: {
			icon: "<:building:716827579650408538>",
			description: "By making workers work in shifts, we can keep a business operating 24/7, regardless of worker tiredness, as workers can be cycled in and out.",
			prerequisite_techs: ["arsenals"],
			research_cost: 2500,
			year: 1850,
			category: "economic_technology",
			modifiers: [
				"**+5%** Production Efficiency",
				"**-10%** Construction Time",
				"Unlocks **Maximum Workhours** Reforms",
				"Obsoletes **Mills**"
			],
			unlocks: function (usr) {
				usr.modifiers.production_efficiency = usr.modifiers.production_efficiency + 0.05;
				usr.modifiers.construction_speed = usr.modifiers.construction_speed - 0.10;
				unlockReform(usr.id, "maximum_workhours");
				deleteElement(usr.available_buildings, "mills");
			}
		},
		bessemer_process: {
			icon: "<:steel:716791408828088420>",
			description: "The Bessemer Process was the first large-scale economical way of removing impurities from pig iron. Although largely superseded by modern steelmaking techniques, it played a pivotal role in transforming steel into a major industry and construction material.",
			prerequisite_techs: ["shaft_mining"],
			research_cost: 2500,
			year: 1856,
			category: "economic_technology",
			modifiers: [
				"Enables **Steelworks**",
				"Obsoletes **Forgeries**"
			],
			unlocks: function (usr) {
				usr.available_buildings.push("steelworks");
				deleteElement(usr.available_buildings, "forgeries");
			}
		},
		laissez_faire_doctrine: {
			icon: "<:trade:716828677115084812>",
			description: "French for 'let it be', proponents of laissez-faire believe that the government should interfere only minimally with the economy in order to let the market regulate themselves.",
			prerequisite_techs: ["protectionism"],
			research_cost: 2500,
			year: 1830,
			category: "economic_technology",
			modifiers: [
				"**+5%** Production Efficiency",
				"**-5%** Tax Efficiency"
			],
			unlocks: function (usr) {
				usr.modifiers.production_efficiency = usr.modifiers.production_efficiency + 0.05;
				usr.modifiers.tax_efficiency = usr.modifiers.tax_efficiency - 0.05;
			}
		},
		assembly_plants: {
			icon: "<:land_vehicles:716821195215077406>",
			description: "Assembly plants rely on assembly lines to speed up production and standardise parts and equipment, with work compartmentalised into a manner where each individual labourer has only one simple task to do.",
			prerequisite_techs: ["shift_work"],
			research_cost: 3000,
			year: 1885,
			category: "economic_technology",
			modifiers: [
				"Enables **Assembly Plants**",
				"**-5%** Construction Time",
				"Obsoletes **Factories**"
			],
			unlocks: function (usr) {
				usr.available_buildings.push("assembly_plants");
				usr.modifiers.construction_speed = usr.modifiers.construction_speed - 0.05;
				deleteElement(usr.available_buildings, "factories");
			}
		},
		steelworks: {
			icon: "<:steel:716791408828088420>",
			description: "By subsidising the steel industry, our nation can become self-sustaining in the industry, and perhaps even begin exporting to other nations.",
			prerequisite_techs: ["bessemer_process"],
			research_cost: 3000,
			year: 1861,
			category: "economic_technology",
			modifiers: [
				"**+2** Processing Facilities per city"
			],
			unlocks: function (usr) {
				usr.modifiers.processing_facilities_building_slots = usr.modifiers.processing_facilities_building_slots + 2;
			}
		},
		corporatism: {
			icon: "<:trade:716828677115084812>",
			description: "Through tolerating ... and supporting huge magnates of industry, we can improve industrial efficiency as the number of competitors, and thereby number of entities to placate becomes significantly lessened.",
			prerequisite_techs: ["laissez_faire_doctrine"],
			research_cost: 3000,
			year: 1850,
			category: "economic_technology",
			modifiers: [
				"Unlocks **Trade Union** Reforms",
				"**+5%** Tax Efficiency",
				"**+5%** Production Efficiency",
				"**-5%** Construction Time",
				"**-5%** Reform Gain"
			],
			unlocks: function (usr) {
				usr.modifiers.tax_efficiency = usr.modifiers.tax_efficiency + 0.05;
				usr.modifiers.production_efficiency = usr.modifiers.production_efficiency + 0.05;
				usr.modifiers.construction_speed = usr.modifiers.construction_speed - 0.05;
				unlockReform(usr.id, "trade_unions");
			}
		},
		crop_variation: {
			icon: "<:food:716797746715033602>",
			description: "By planting varied crops of the same species, we can improve agricultural and nutritional diversity amongst our population, as well as reduce the risk of a blight striking a staple crop.",
			prerequisite_techs: ["seed_drill"],
			research_cost: 3500,
			year: 1892,
			category: "economic_technology",
			modifiers: [
				"**+2** Agriculture per city"
			],
			unlocks: function (usr) {
				usr.modifiers.agriculture_building_slots = usr.modifiers.agriculture_building_slots + 2;
			}
		},
		refineries: {
			icon: "<:petroil:716791408748658739>",
			description: "The capability to refine petroleum could become extremely valuable in the future, as it is already widely used in terms of lighting, and is a material that promises to have additional uses in the future.",
			prerequisite_techs: ["assembly_plants"],
			research_cost: 3500,
			year: 1859,
			category: "economic_technology",
			modifiers: [
				"Enables **Derricks**",
				"Enables **Refineries**"
			],
			unlocks: function (usr) {
				usr.available_buildings.push("derricks");
				usr.available_buildings.push("refineries");
			}
		},
		cheap_coal: {
			icon: "<:coal:716791408714973204>",
			description: "With the advent of more modern resource extraction techniques, the age of cheap coal is upon us, promising a quick solution to our power needs, despite its polluting qualities.",
			prerequisite_techs: ["steelworks"],
			research_cost: 3500,
			year: 1860,
			category: "economic_technology",
			modifiers: [
				"**+3** Mines per city",
				"**+1** Railway per city"
			],
			unlocks: function (usr) {
				usr.modifiers.mines_building_slots = usr.modifiers.mines_building_slots + 3;
				usr.modifiers.railways = usr.modifiers.railways + 1;
			}
		},
		neoclassical_theory: {
			icon: "<:money:716817688718213192>",
			description: "Neoclassical theory was an economic school of thought that sought to focus on the supply and demand side of economics.",
			prerequisite_techs: ["laissez_faire_doctrine"],
			research_cost: 3500,
			year: 1900,
			category: "economic_technology",
			modifiers: [
				"**+3%** Tax Efficiency"
			],
			unlocks: function (usr) {
				usr.modifiers.tax_efficiency = usr.modifiers.tax_efficiency + 0.03;
			}
		},
		improved_machinery: {
			icon: "<:factory:759161240601493525>",
			description: "Using more advanced machinery will allow our farmers to farm greater amounts of land than typically possible by hand.",
			prerequisite_techs: ["crop_variation"],
			research_cost: 4000,
			year: 1890,
			category: "economic_technology",
			modifiers: [
				"**+1%** Population Growth Rate",
				"**+5%** National Manpower"
			],
			unlocks: function (usr) {
				usr.pop_growth_modifier = usr.pop_growth_modifier + 0.01;
				usr.modifiers.national_manpower = usr.modifiers.national_manpower + 0.05;
			}
		},
		petrol_pipelines: {
			icon: "<:petroil:716791408748658739>",
			description: "By relying on the usage of pipelines to transport petroleum instead of the railway companies, petroleum refineries can cut costs and have dedicated infrastructure for transport, reducing vulnerability.",
			prerequisite_techs: ["improved_machinery"],
			research_cost: 4000,
			year: 1870,
			category: "economic_technology",
			modifiers: [
				"**+2** Petrochemicals per city"
			],
			unlocks: function (usr) {
				usr.modifiers.petrochemicals_building_slots = usr.modifiers.petrochemicals_building_slots + 2;
			}
		},
		cheap_iron: {
			icon: "<:iron:716791408819961866>",
			description: "With dedicated infrastructure being devoted to the extraction of iron, our nation can now set up new iron mines in newly prospected locations, an emerging field of science that didn't exist mere decades ago.",
			prerequisite_techs: ["improved_machinery"],
			research_cost: 4000,
			year: 1870,
			category: "economic_technology",
			modifiers: [
				"**+3** Mines per city",
				"**+1** Railway per city",
				"**-5%** Construction Time"
			],
			unlocks: function (usr) {
				usr.modifiers.mines_building_slots = usr.modifiers.mines_building_slots + 3;
				usr.modifiers.railways = usr.modifiers.railways + 1;
				usr.modifiers.construction_speed = usr.modifiers.construction_speed - 0.05;
			}
		},
		state_regulation: {
			icon: "<:building:716827579650408538>",
			description: "Although a capitalist economy might be the best way forwards for our country, steps should be taken to form a comprehensive net to ensure that our workers don't fall through the cracks. By regulating some of its excesses, we can introduce a mixed economy that might lead to greater social stability.",
			prerequisite_techs: ["improved_machinery"],
			research_cost: 4000,
			year: 1896,
			category: "economic_technology",
			modifiers: [
				"Unlocks **Safety Regulations** Reforms",
				"Unlocks **Unemployment** Reforms"
			],
			unlocks: function (usr) {
				unlockReform(usr.id, "safety_regulations");
				unlockReform(usr.id, "unemployment");
			}
		},
		international_trade_agreements: {
			icon: "<:old_scroll:716828676880334881>",
			description: "The detailing of exact terms of trade might help lift some of the unease that falls upon our investors and corporations when trading with other countries.",
			prerequisite_techs: ["neoclassical_theory"],
			research_cost: 4000,
			year: 1905,
			category: "economic_technology",
			modifiers: [
				"**+1** Port per city",
				"**+5%** Production Efficiency"
			],
			unlocks: function (usr) {
				usr.modifiers.ports = usr.modifiers.ports + 1;
				usr.modifiers.production_efficiency = usr.modifiers.production_efficiency + 0.05;
			}
		},
		early_tractors: {
			icon: "<:food:716797746715033602>",
			description: "As mechanisation slowly takes over the business of agriculture, the amount of labour that needs to be devoted to it is beginning to decrease sharply. Paired with drastic urbanisation, the future of our country is set to be made in the cities.",
			prerequisite_techs: ["improved_machinery"],
			research_cost: 4000,
			year: 1892,
			category: "economic_technology",
			modifiers: [
				"Enables **Modern Farms**"
			],
			unlocks: function (usr) {
				usr.available_buildings.push("modern_farms");
			}
		},
		industrial_complexes: {
			icon: "<:factory:759161240601493525>",
			description: "Industrial complexes are sprawling behemoths of industry that oftentimes employ tens of thousands of workers. The industrial output generated from them can be deployed for a variety of uses.",
			prerequisite_techs: ["petrol_pipelines","cheap_iron"],
			research_cost: 4000,
			year: 1914,
			category: "economic_technology",
			modifiers: [
				"Enables **Industrial Complexes**",
				"Enables **Research Complexes**",
				"Obsoletes **Arsenals**"
			],
			unlocks: function (usr) {
				usr.available_buildings.push("industrial_complexes");
				usr.available_buildings.push("research_complexes");
				deleteElement(usr.available_buildings, "arsenals");
			}
		},
		bank_holidays: {
			icon: "<:money:716817688718213192>",
			description: "By utilising our governmental authority to prevent private citizens from withdrawing from their bank accounts during times of economic crisis, we can prevent the wholesale collapse of entire banks, and bank runs, with the result being increased economic resilience.",
			prerequisite_techs: ["state_regulation"],
			research_cost: 4000,
			year: 1914,
			category: "economic_technology",
			modifiers: [
				"**+3%** Tax Efficiency"
			],
			unlocks: function (usr) {
				usr.modifiers.tax_efficiency = usr.modifiers.tax_efficiency + 0.03;
			}
		},
		economic_responsibility: {
			icon: "<:old_scroll:716828676880334881>",
			description: "Although self-regulation of the markets seems to be a valid internal theory, it falls flat when put in practice, and there remain various shortfalls for which the public should hold certain entities accountable. By further developing this position, we can help to ensure that businesses in our country do not simply go unchecked by the general public.",
			prerequisite_techs: ["international_trade_agreements"],
			research_cost: 4000,
			year: 1929,
			category: "economic_technology",
			modifiers: [
				"**-2%** Tax Efficiency",
				"**+3%** Production Efficiency"
			],
			unlocks: function (usr) {
				usr.modifiers.tax_efficiency = usr.modifiers.tax_efficiency - 0.02;
				usr.modifiers.production_efficiency = usr.modifiers.production_efficiency + 0.03;
			}
		},
		mass_production: {
			icon: "<:government:716817688693047306>",
			description: "The improvement of metallurgical production methods in our nation could lead to the more efficient allocation of materials needed to form industrial construction materials.",
			prerequisite_techs: ["petrol_pipelines","cheap_iron"],
			research_cost: 5000,
			year: 1920,
			category: "economic_technology",
			modifiers: [
				"Enables **Flats**",
				"**+4** Industrial Buildings per city",
				"**+2** Processing Facilities per city",
				"**+2%** Production Efficiency",
				"**-5%** Construction Time"
			],
			unlocks: function (usr) {
				usr.available_buildings.push("flats");
				usr.modifiers.industry_building_slots = usr.modifiers.industry_building_slots + 4;
				usr.modifiers.processing_facilities_building_slots = usr.modifiers.processing_facilities_building_slots + 2;
				usr.modifiers.production_efficiency = usr.modifiers.production_efficiency + 0.02;
				usr.modifiers.construction_speed = usr.modifiers.construction_speed - 0.05;
			}
		},
		advanced_metallurgy: {
			icon: "<:government:716817688693047306>",
			description: "The improvement of metallurgical production methods in our nation could lead to the more efficient allocation of materials needed to form industrial construction materials.",
			prerequisite_techs: ["petrol_pipelines","cheap_iron"],
			research_cost: 5000,
			year: 1886,
			category: "economic_technology",
			modifiers: [
				"Enables **Aluminium Factories**",
				"**+1** Processing Facilities per city"
			],
			unlocks: function (usr) {
				usr.available_buildings.push("aluminium_factories");
				usr.modifiers.processing_facilities_building_slots = usr.modifiers.processing_facilities_building_slots + 1;
			}
		},
		investment_banks: {
			icon: "<:money:716817688718213192>",
			description: "Investment banks allow private citizens to hold money in banks that not only generate interest based on loans, but also offer reliable investment options going forwards, helping our citizens to safely invest in our economy.",
			prerequisite_techs: ["bank_holidays"],
			research_cost: 5000,
			year: 1929,
			category: "economic_technology",
			modifiers: [
				"Unlocks **Pension** Reforms"
			],
			unlocks: function (usr) {
				unlockReform(usr.id, "pensions");
			}
		},
		advanced_tractors: {
			icon: "<:factory:759161240601493525>",
			description: "The improved reliability of new tractors could go a long way in the mechanisation of our country's agricultural sectors, contributing to a boosted crop yield for our farmers.",
			prerequisite_techs: ["mass_production"],
			research_cost: 5500,
			year: 1935,
			category: "economic_technology",
			modifiers: [
				"**+1** Agriculture per city",
				"Obsoletes **Centralised Farms**"
			],
			unlocks: function (usr) {
				usr.modifiers.agriculture_building_slots = usr.modifiers.agriculture_building_slots + 1;
				deleteElement(usr.available_buildings, "centralised_farms");
			}
		},
		civilian_industry: {
			icon: "<:factory:759161240601493525>",
			description: "As consumer goods reach higher and higher levels of demand, entire factories and industrial complexes dedicated to their production are beginning to spring up around the country, leading to the growth of an organised consumer market.",
			prerequisite_techs: ["mass_production"],
			research_cost: 5500,
			year: 1920,
			category: "economic_technology",
			modifiers: [
				"Enables **Aeroports**",
				"Enables **Civilian Industries**",
				"**+1** Processing Facility per city",
				"**+10%** Construction Time",
				"Obsoletes **Assembly Plants**",
				"Obsoletes **Industrial Complexes**"
			],
			unlocks: function (usr) {
				usr.available_buildings.push("aeroports");
				usr.available_buildings.push("civilian_industries");
				usr.modifiers.processing_facilities_building_slots = usr.modifiers.processing_facilities_building_slots + 1;
				usr.modifiers.construction_speed = usr.modifiers.construction_speed - 0.10;
				deleteElement(usr.available_buildings, "assembly_plants");
				deleteElement(usr.available_buildings, "industrial_complexes");
			}
		},
		modern_mining_regulations: {
			icon: "<:government_scroll:716828975175041054>",
			description: "Mining may be a risky business, but the venture doesn't always need to cost miners their lives. By enforcing safety regulations, we can reduce the number of on-site accidents and maimings, and reduce dissatisfaction amongst our population.",
			prerequisite_techs: ["advanced_metallurgy"],
			research_cost: 5500,
			year: 1921,
			category: "economic_technology",
			modifiers: [
				"**-2%** Reform Desire Gain",
				"**-10%** Production Efficiency"
			],
			unlocks: function (usr) {
				usr.modifiers.reform_desire_gain = usr.modifiers.reform_desire_gain - 0.02;
				usr.modifiers.production_efficiency = usr.modifiers.production_efficiency - 0.10;
			}
		},
		mutual_funds: {
			icon: "<:old_scroll:716828676880334881>",
			description: "Mutual funds are groupings of investments meant to lower risk by diversifying the burden of investment throughout a multitude of investors. They are typically overseen by portfolio managers and are seen as safe areas for private citizens to invest their money.",
			prerequisite_techs: ["investment_banks"],
			research_cost: 5500,
			year: 1933,
			category: "economic_technology",
			modifiers: [
				"**+5%** Tax Efficiency"
			],
			unlocks: function (usr) {
				usr.modifiers.tax_efficiency = usr.modifiers.tax_efficiency + 0.05;
			}
		},
		keynesian_economics: {
			icon: "<:money:716817688718213192>",
			description: "Keynesian economics, first authored by John Maynard Keynes, proposed that government intervention during recessions could help boost consumer spending, leading to the revival of a nation's economy.",
			prerequisite_techs: ["economic_responsibility"],
			research_cost: 5500,
			year: 1936,
			category: "economic_technology",
			modifiers: [
				"**+2%** Tax Efficiency",
				"**+5%** Production Efficiency"
			],
			unlocks: function (usr) {
				usr.modifiers.tax_efficiency = usr.modifiers.tax_efficiency + 0.02;
				usr.modifiers.production_efficiency = usr.modifiers.production_efficiency + 0.05;
			}
		},
		advanced_farming_machinery: {
			icon: "<:food:716797746715033602>",
			description: "The further advancement of our nation's machinery could reduce the burden of labour on our farmers, and help improve not only the quantity, but also the quality of the food grown within our nation, leading to the possibility of mass exports.",
			prerequisite_techs: ["advanced_tractors"],
			research_cost: 6000,
			year: 1956,
			category: "economic_technology",
			modifiers: [
				"**+1** Agriculture per city"
			],
			unlocks: function (usr) {
				usr.modifiers.agriculture_building_slots = usr.modifiers.agriculture_building_slots + 1;
			}
		},
		integrated_rail_system: {
			icon: "<:steel:716791408828088420>",
			description: "The centralisation of our rail system will help get rid of a lot of the 'railwaymania' that clogs up our nation, allowing for neat and organised railways where the trains actually run on time. Although some may criticise it as an overextension of our government, there is no question about its effectiveness.",
			prerequisite_techs: ["civilian_industry"],
			research_cost: 6000,
			year: 1937,
			category: "economic_technology",
			modifiers: [
				"Enables **Suburbs**",
				"**+3** Railways per city",
				"**+5%** RGO Throughput",
				"**+25%** Army Travel Speed"
			],
			unlocks: function (usr) {
				usr.available_buildings.push("suburbs");
				usr.modifiers.railways = usr.modifiers.railways + 3;
				usr.modifiers.rgo_throughput = usr.modifiers.rgo_throughput + 0.05;
				usr.modifiers.army_travel_speed = usr.modifiers.army_travel_speed + 0.25;
			}
		},
		heavy_mining_machinery: {
			icon: "<:lead:716791408840671322>",
			description: "The introduction of heavy machinery into our mines, although making many a miner unemployed, will also inevitably boost resource extraction efficiency, allowing for ore deposits and mineral seams to be excavated faster.",
			prerequisite_techs: ["modern_mining_regulations"],
			research_cost: 6000,
			year: 1940,
			category: "economic_technology",
			modifiers: [
				"**+5%** RGO Throughput"
			],
			unlocks: function (usr) {
				usr.modifiers.rgo_throughput = usr.modifiers.rgo_throughput + 0.05;
			}
		},
		econometrics: {
			icon: "<:technology:716812861514711040>",
			description: "The application of statistical data for the purpose of analysing economic relationships helps our economists visualise the impact that certain policy decisions may have on the state of our economy. Through efficient analysation, we can help avoid many of the shortfalls that other countries have succumbed to in the past.",
			prerequisite_techs: ["mutual_funds","keynesian_economics"],
			research_cost: 6000,
			year: 1945,
			category: "economic_technology",
			modifiers: [
				"**+2%** Production Efficiency"
			],
			unlocks: function (usr) {
				usr.modifiers.production_efficiency = usr.modifiers.production_efficiency + 0.02;
			}
		},
		wartime_industry: {
			icon: "<:factory:759161240601493525>",
			description: "When in a state of total war, it becomes necessary for the state to mobilise and utilise all resources at its disposal to combat the enemy head-on. Every citizen is expected to do their part, and industry is no exception. By setting up factories that will produce equipment for new battalions, we can help shorten training time in the case of an eventual conflict, as equipment will be ready on site.",
			prerequisite_techs: ["integrated_rail_system"],
			research_cost: 6500,
			year: 1939,
			category: "economic_technology",
			modifiers: [
				"Enable **Wartime Industries**",
				"**+1** Aeroports per city"
			],
			unlocks: function (usr) {
				usr.available_buildings.push("wartime_industries");
				usr.modifiers.aeroports = usr.modifiers.aeroports + 1;
			}
		},
		deep_mining: {
			icon: "<:workers:732730754735276124>",
			description: "Deep mining, similar to shaft mining, poses numerous problems, but can be solved with the ingenuity of our engineers. Providing increased efficiency as workers no longer have to descend down long corridors, deep mining will allow us to produce the excess in raw resources that our factories desperately need.",
			prerequisite_techs: ["heavy_mining_machinery"],
			research_cost: 6500,
			year: 1942,
			category: "economic_technology",
			modifiers: [
				"**+10%** RGO Throughput"
			],
			unlocks: function (usr) {
				usr.modifiers.rgo_throughput = usr.modifiers.rgo_throughput + 0.10;
			}
		},
		divergent_economic_thought: {
			icon: "<:faculty:732730754911436830>",
			description: "Although several schools of economics had previously dominated the landscape, economic thought is beginning to shift in a more divergent direction, with variations of these schools coming into play in an attempt to make up each of their shortfalls.",
			prerequisite_techs: ["econometrics"],
			research_cost: 6500,
			year: 1950,
			category: "economic_technology",
			modifiers: [
				"**+3%** Production Efficiency"
			],
			unlocks: function (usr) {
				usr.modifiers.production_efficiency = usr.modifiers.production_efficiency + 0.03;
			}
		},
		industrial_farming: {
			icon: "<:food:716797746715033602>",
			description: "Industrial farming, or mass farming brings the organisation and efficiency of the factory to the farm as meat and grains can now be harvested across vast swaths of land, and animals can be crammed and fed for maximum efficiency.",
			prerequisite_techs: ["advanced_farming_machinery","wartime_industry"],
			research_cost: 7000,
			year: 1960,
			category: "economic_technology",
			modifiers: [
				"Enables **Industrial Farms**"
			],
			unlocks: function (usr) {
				usr.available_buildings.push("industrial_farms");
			}
		},
		limited_access_roads: {
			icon: "<:old_map:716821884867444746>",
			description: "Limited-access roads, or dual carriageways, are motorways that restrict access of certain parts of the road to certain vehicles in hope of reducing traffic congestion and gridlock.",
			prerequisite_techs: ["advanced_farming_machinery","wartime_industry"],
			research_cost: 7000,
			year: 1936,
			category: "economic_technology",
			modifiers: [
				"Enables **Motorways** (Level: 2)",
				"**+35%** Army Travel Speed"
			],
			unlocks: function (usr) {
				usr.available_buildings.push("motorways");
				usr.modifiers.motorways = usr.modifiers.motorways + 1;
				usr.modifiers.army_travel_speed = usr.modifiers.army_travel_speed + 0.35;
			}
		},
		offshore_drilling: {
			icon: "<:petroil:716791408748658739>",
			description: "Although not possible until recently, the discovery of several pockets of petroleum underneath the seas has led to the intriguing possibility of drilling offshore, which would be supported by petroil rigs, increasing our self-sustainability when it comes to supplying our nation with the petroil it runs on.",
			prerequisite_techs: ["deep_mining"],
			research_cost: 7000,
			year: 1947,
			category: "economic_technology",
			modifiers: [
				"**+1** Petrochemical per city"
			],
			unlocks: function (usr) {
				usr.modifiers.petrochemicals_building_slots = usr.modifiers.petrochemicals_building_slots + 1;
			}
		},
		securities: {
			icon: "<:money:716817688718213192>",
			description: "Securities are tradeable financial assets, typically bundled as either loans, derivatives, or normal stocks for investors to buy and sell as they please. They became infamous during the Great Recession as 'toxic assets', which referred to homeowner loans, which the homeowner stood almost no chance of paying back after the real estate bubble.",
			prerequisite_techs: ["mutual_funds"],
			research_cost: 7000,
			year: 1960,
			category: "economic_technology",
			modifiers: [
				"**+3%** Tax Efficiency"
			],
			unlocks: function (usr) {
				usr.modifiers.tax_efficiency = usr.modifiers.tax_efficiency + 0.03;
			}
		},
		linear_programming: {
			icon: "<:taxes:716817688781127810>",
			description: "Linear programming is a field of mathematics used for planning and optimisation. It rapidly became a part of computer science, and its usage is now critical in several fields of study.",
			prerequisite_techs: ["divergent_economic_thought"],
			research_cost: 7000,
			year: 1947,
			category: "economic_technology",
			modifiers: [
				"**+5%** Production Efficiency"
			],
			unlocks: function (usr) {
				usr.modifiers.production_efficiency = usr.modifiers.production_efficiency + 0.05;
			}
		},
		intensive_agriculture: {
			icon: "<:food:716797746715033602>",
			description: "The systematic optimisation of agriculture, with the usage of pesticides and herbicides in an attempt to maximise crop yield, is referred to as intensive agriculture, and is the main supplier of modern supermarkets and food supply chains.",
			year: 1960,
			prerequisite_techs: ["industrial_farming"],
			research_cost: 7000,
			category: "economic_technology",
			modifiers: [
				"**+2** Agriculture per city"
			],
			unlocks: function (usr) {
				usr.modifiers.agriculture_building_slots = usr.modifiers.agriculture_building_slots + 2;
			}
		},
		integrated_motorways: {
			icon: "<:steel:716791408828088420>",
			description: "The construction of an integrated motorway system underneath our government will help decrease transport time and increase our mobilisation capacity should war ever call for it. Logistics and shipments will also become easier to handle, leading to a boon for our economy.",
			prerequisite_techs: ["limited_access_roads"],
			research_cost: 7000,
			year: 1952,
			category: "economic_technology",
			modifiers: [
				"**+5** Motorways per city",
				"**+20%** Army Travel Speed"
			],
			unlocks: function (usr) {
				usr.modifiers.motorways = usr.modifiers.motorways + 5;
				usr.modifiers.army_travel_speed = usr.modifiers.army_travel_speed + 0.20;
			}
		},
		modern_inflation_theory: {
			icon: "<:money:716817688718213192>",
			description: "Although inflation may have always been thought as bad during the era of classical economics, it turns out that there is an ideal rate of inflation that will drive up consumer spending, and ease the worry of investors. What this rate is remains up for debate, but it should be up to our Treasury to keep it relatively low.",
			prerequisite_techs: ["securities"],
			research_cost: 7000,
			year: 1970,
			category: "economic_technology",
			modifiers: [
				"**+5%** Tax Efficiency"
			],
			unlocks: function (usr) {
				usr.modifiers.tax_efficiency = usr.modifiers.tax_efficiency + 0.05;
			}
		},
		microeconomics: {
			icon: "<:old_scroll:716828676880334881>",
			description: "Microeconomics is the study of price, supply and demand fluctuations at the level of an individual product, good, service, or even household. By analysing the behaviour of end consumers, we can get a better picture of how our economy should be directed.",
			prerequisite_techs: ["linear_programming"],
			research_cost: 7000,
			year: 1969,
			category: "economic_technology",
			modifiers: [
				"**+2%** Production Efficiency",
				"**+3%** Research Efficiency"
			],
			unlocks: function (usr) {
				usr.modifiers.production_efficiency = usr.modifiers.production_efficiency + 0.02;
				usr.modifiers.research_efficiency = usr.modifiers.research_efficiency + 0.03;
			}
		},
		mass_complexes: {
			icon: "<:factory:759161240601493525>",
			description: "Sprawling, gritty areas perpetually spewing out smoke, mass industrial complexes are the modern manufactories of our nation, keeping us strong in war, and rich in peace.",
			prerequisite_techs: ["integrated_motorways"],
			research_cost: 8000,
			year: 1950,
			category: "economic_technology",
			modifiers: [
				"**+3** Processing Facilities per city"
			],
			unlocks: function (usr) {
				usr.modifiers.processing_facilities_building_slots = usr.modifiers.processing_facilities_building_slots + 3;
			}
		},
		boring_machines: {
			icon: "<:steel:716791408828088420>",
			description: "Boring machines or TBMs are used to help drill tunnels rapidly in areas where the rock hardness does not allow for manual excavation, or sectors where drilling needs to be exacted with precision.",
			prerequisite_techs: ["integrated_motorways"],
			research_cost: 8000,
			year: 1968,
			category: "economic_technology",
			modifiers: [
				"**+3** Mines per city",
				"**+1** Resource Extraction Building per city"
			],
			unlocks: function (usr) {
				usr.modifiers.mines_building_slots = usr.modifiers.mines_building_slots + 3;
				usr.modifiers.resource_extraction_building_slots = usr.modifiers.resource_extraction_building_slots + 1;
			}
		},
		bretton_woods: {
			icon: "<:money:716817688718213192>",
			description: "Bretton Woods was an international agreement tying the world's currencies to the U.S. dollar, helping to stabilise exchange rates, and allowing for a lingua franca of currencies by revolutionising finance.",
			prerequisite_techs: ["modern_inflation_theory"],
			research_cost: 8000,
			year: 1945,
			category: "economic_technology",
			modifiers: [
				"**+5%** Tax Efficiency"
			],
			unlocks: function (usr) {
				usr.modifiers.tax_efficiency = usr.modifiers.tax_efficiency + 0.05;
			}
		},
		neo_keynesianism: {
			icon: "<:old_scroll:716828676880334881>",
			description: "Although Keynesianism initially had only accounted for macroeconomics, neo-Keynesianism seeks to combine the reasoning of microeconomics and macroeconomics into a single economic school of thought. They were eventually superseded by New Keynesianism.",
			prerequisite_techs: ["microeconomics"],
			research_cost: 8000,
			year: 1950,
			category: "economic_technology",
			modifiers: [
				"**+5%** Production Efficiency"
			],
			unlocks: function (usr) {
				usr.modifiers.production_efficiency = usr.modifiers.production_efficiency + 0.05;
			}
		},
		green_revolution: {
			icon: "<:food:716797746715033602>",
			description: "The Green Revolution was the rapid improvement of technology in agriculture, rendering the fears of overpopulation obsolete. It utilised selective breeding to create a system of improved crop yields and agricultural outputs, especially in emerging economies with high population growth rates.",
			prerequisite_techs: ["intensive_agriculture"],
			research_cost: 8500,
			year: 1970,
			category: "economic_technology",
			modifiers: [
				"**+3** Agriculture per city",
				"Obsoletes **Modern Farms**"
			],
			unlocks: function (usr) {
				deleteElement(usr.available_buildings, "modern_farms");
				usr.modifiers.agriculture_building_slots = usr.modifiers.agriculture_building_slots + 3;
			}
		},
		high_speed_rail: {
			icon: "<:steel:716791408828088420>",
			description: "High-speed rail, using specialised rolling stock, integrated and straightened tracks, and power cables have enabled faster transport across our nation, reducing shipment times and increasing army transport speed.",
			prerequisite_techs: ["mass_complexes"],
			research_cost: 8500,
			year: 1964,
			category: "economic_technology",
			modifiers: [
				"**+1** Aeroport per city",
				"**+2** Railways per city",
				"**+40%** Army Travel Speed"
			],
			unlocks: function (usr) {
				usr.modifiers.aeroports = usr.modifiers.aeroports + 1;
				usr.modifiers.railways = usr.modifiers.railways + 2;
				usr.modifiers.army_travel_speed = usr.modifiers.army_travel_speed + 0.40;
			}
		},
		abandonment_of_the_gold_standard: {
			icon: "<:gold:716798541028261927>",
			description: "By abandoning the gold standard and switching to a fiat currency, we can reduce the amount of inflation present in the policy as the worth of the currency will be tied solely to the amount of trust investors hold in our nation.",
			prerequisite_techs: ["bretton_woods"],
			research_cost: 8500,
			year: 1976,
			category: "economic_technology",
			modifiers: [
				"**-10%** Army Upkeep",
				"**-5%** Tax Efficiency"
			],
			unlocks: function (usr) {
				usr.modifiers.army_upkeep = usr.modifiers.army_upkeep - 0.10;
				usr.modifiers.tax_efficiency = usr.modifiers.tax_efficiency - 0.05;
			}
		},
		globalisation: {
			icon: "<:globe:716811246556545035>",
			description: "The globalisation of trade will play a key role in the logistical supply lines used to manufacture and ship goods on a global scale, with the end result being the consumer paying a lower price for their product, despite pushback over job losses, especially in more developed economies.",
			prerequisite_techs: ["neo_keynesianism"],
			research_cost: 8500,
			year: 1985,
			category: "economic_technology",
			modifiers: [
				"**+1** Port per city",
				"**+5%** Production Efficiency"
			],
			unlocks: function (usr) {
				usr.modifiers.ports = usr.modifiers.ports + 1;
				usr.modifiers.production_efficiency = usr.modifiers.production_efficiency + 0.05;
			}
		},
		advanced_pesticides: {
			icon: "<:food:716797746715033602>",
			description: "Pesticides, although recognised as being harmful for the environment, will also help get rid of pests and parasites that plague our crops, ending the devastating havoc that they wreak upon our agricultural output.",
			prerequisite_techs: ["green_revolution"],
			research_cost: 9000,
			year: 1970,
			category: "economic_technology",
			modifiers: [
				"**+2%** Population Growth Rate",
				"**+1** Agriculture per city"
			],
			unlocks: function (usr) {
				usr.pop_growth_modifier = usr.pop_growth_modifier + 0.02;
				usr.modifiers.agriculture_building_slots = usr.modifiers.agriculture_building_slots + 1;
			}
		},
		modern_urban_transport: {
			icon: "<:development:716811992421367869>",
			description: "By improving inter-city rail links, undergrounds, and avenues, we can improve commute time, leading to greater production efficiency within our urban centres.",
			prerequisite_techs: ["high_speed_rail"],
			research_cost: 9000,
			year: 1980,
			category: "economic_technology",
			modifiers: [
				"Enables **Districts**",
				"**+2** Aeroports per city",
				"**+3** Motorways per city",
				"**-3%** Shipment Time"
			],
			unlocks: function (usr) {
				usr.available_buildings.push("districts");
				usr.modifiers.aeroports = usr.modifiers.aeroports + 2;
				usr.modifiers.motorways = usr.modifiers.motorways + 3;
				usr.modifiers.shipment_time = usr.modifiers.shipment_time - 0.03;
			}
		},
		contemporary_mining: {
			icon: "<:government:716817688693047306>",
			description: "Contemporary mining is a system by which modern methods of resource extraction are used, including the usage of modern prospection techniques and computerised models of drilling and extraction.",
			prerequisite_techs: ["boring_machines"],
			research_cost: 9000,
			year: 1990,
			category: "economic_technology",
			modifiers: [
				"**+8** Mines per city",
				"**+2** Resource Extraction Buildings per city"
			],
			unlocks: function (usr) {
				usr.modifiers.mines_building_slots = usr.modifiers.mines_building_slots + 8;
				usr.modifiers.resource_extraction_building_slots = usr.modifiers.resource_extraction_building_slots + 2;
			}
		},
		automated_stock_trading: {
			icon: "<:development:716811992421367869>",
			description: "Beginning in the early 80s, it became more and more common for stock firms to introduce algorithmic trading in order to boost reaction time and reduce investment risk. The practice, although not without its own risks as evidenced by flash crashes, continues to this day.",
			prerequisite_techs: ["abandonment_of_the_gold_standard"],
			research_cost: 9000,
			year: 2000,
			category: "economic_technology",
			modifiers: [
				"**+5%** Tax Efficiency"
			],
			unlocks: function (usr) {
				usr.modifiers.tax_efficiency = usr.modifiers.tax_efficiency + 0.05;
			}
		},
		emerging_economic_theory: {
			icon: "<:technology:716812861514711040>",
			description: "New modes of economic thinking are beginning to challenge the economic establishment, leading to new policy intiatives and greater flexibility in deciding political directives.",
			prerequisite_techs: ["globalisation"],
			research_cost: 9000,
			year: 2006,
			category: "economic_technology",
			modifiers: [
				"**+2%** Production Efficiency"
			],
			unlocks: function (usr) {
				usr.modifiers.production_efficiency = usr.modifiers.production_efficiency + 0.02;
			}
		},
		gmo_crops: {
			icon: "<:food:716797746715033602>",
			description: "GMO crops will help improve resistance to blights and parasites, and will in some cases, completely get rid of them, whilst at the same time being capable of growing in more sturdy climes, allowing us to de facto expand the reach of our arable land.",
			prerequisite_techs: ["advanced_pesticides"],
			research_cost: 9500,
			year: 1987,
			category: "economic_technology",
			modifiers: [
				"**+1%** Population Growth Rate"
			],
			unlocks: function (usr) {
				usr.pop_growth_modifier = usr.pop_growth_modifier + 0.01;
			}
		},
		production_facilities: {
			icon: "<:factory:759161240601493525>",
			description: "Production facilities are typically used to refer to consumer goods factories that produce and distribute market goods of a civilian nature.",
			prerequisite_techs: ["modern_urban_transport"],
			research_cost: 9500,
			year: 1990,
			category: "economic_technology",
			modifiers: [
				"Enable **Production Facilities**",
				"**+1** Processing Facility per city"
			],
			unlocks: function (usr) {
				usr.available_buildings.push("production_facilities");
				usr.modifiers.processing_facilities_building_slots = usr.modifiers.processing_facilities_building_slots + 1;
			}
		},
		liquefied_natural_gas: {
			icon: "<:petroil:716791408748658739>",
			description: "Natural gas, whilst not entirely friendly to the environment, will be seen as a step in improving the amount of emissions we produce whilst also at the same time boosting our energy efficiency. Although more expensive than petrol, it also holds the promise of being more reliable and being more capable to diversify our sources of energy.",
			prerequisite_techs: ["contemporary_mining"],
			research_cost: 9500,
			year: 1986,
			category: "economic_technology",
			modifiers: [
				"**+1** Petrochemical per city"
			],
			unlocks: function (usr) {
				usr.modifiers.petrochemicals_building_slots = usr.modifiers.petrochemicals_building_slots + 1;
			}
		},
		governmental_fiscal_stimulus: {
			icon: "<:money:716817688718213192>",
			description: "In times of recession, it becomes imperative that the government directly inject fiscal stimulus into the economy so as to boost consumer spending, and thereby revive the economy. Although critics believe it to be an overextension of the government, it can give us more leverage as a state to determine how the economy can be brought back to life during times of crisis.",
			prerequisite_techs: ["contemporary_mining"],
			research_cost: 9500,
			year: 2008,
			category: "economic_technology",
			modifiers: [
				"**-2%** Reform Desire Gain",
				"**-10%** Tax Efficiency"
			],
			unlocks: function (usr) {
				usr.modifiers.reform_desire_gain = usr.modifiers.reform_desire_gain - 0.02;
				usr.modifiers.tax_efficiency = usr.modifiers.tax_efficiency - 0.10;
			}
		},
		keynesian_resurgence: {
			icon: "<:trade:716828677115084812>",
			description: "In the wake of the Great Recession, economists from across the world have gathered to hammer out new policy initiatives, many of which centred around a Keynesian mode of thought, giving rise to the term 'Keynesian Resurgence'.",
			prerequisite_techs: ["emerging_economic_theory"],
			research_cost: 9500,
			year: 2009,
			category: "economic_technology",
			modifiers: [
				"**+3%** Production Efficiency"
			],
			unlocks: function (usr) {
				usr.modifiers.production_efficiency = usr.modifiers.production_efficiency + 0.03;
			}
		},
		new_green_revolution: {
			icon: "<:food:716797746715033602>",
			description: "Although advances in farming have been made, the practice is still seen as being unsustainable going forwards. By contributing research towards a New Green Revolution, we can ensure that better quality food is produced than the food spewed forth from the industrial farms that we currently hold.",
			prerequisite_techs: ["gmo_crops"],
			research_cost: 10000,
			year: 2015,
			category: "economic_technology",
			modifiers: [
				"**+5%** Population Growth Rate"
			],
			unlocks: function (usr) {
				usr.pop_growth_modifier = usr.pop_growth_modifier + 0.05;
			}
		},
		hydraulic_fracturing: {
			icon: "<:petroil:716791408748658739>",
			description: "Fracking, also known as hydraulic fracturing is a method that combined horizontal drilling and the dispersal of fracking fluid into the surroundings to loosen up pockets of petroil and drive them into a central pipeline, where it can then be extracted, allowing for improved petroil extraction techniques, despite its groundwater pollution risk.",
			prerequisite_techs: ["liquefied_natural_gas"],
			research_cost: 10000,
			year: 2013,
			category: "economic_technology",
			modifiers: [
				"**+1** Petrochemical per city"
			],
			unlocks: function (usr) {
				usr.modifiers.petrochemicals_building_slots = usr.modifiers.petrochemicals_building_slots + 1;
			}
		},
		austerity_controversy: {
			icon: "<:taxes:716817688781127810>",
			description: "The controversy of austerity, though it has been around for a while, was revived during the Great Recession after many countries witnessed unpopular bailouts which came with the terms of austerity. Deeply unpopular amongst their citizens, it led to significant civil unrest among their populations, and is today recognised as a failure internationally. A better replacement, however, has yet to be seen.",
			prerequisite_techs: ["liquefied_natural_gas"],
			research_cost: 10000,
			year: 2012,
			category: "economic_technology",
			modifiers: [
				"**+3%** Production Efficiency",
				"**+3%** Tax Efficiency"
			],
			unlocks: function (usr) {
				usr.modifiers.production_efficiency = usr.modifiers.production_efficiency + 0.03;
				usr.modifiers.tax_efficiency = usr.modifiers.tax_efficiency + 0.03;
			}
		},
		improved_crop_yields: {
			icon: "<:food:716797746715033602>",
			description: "Innovation in farming technology allows for higher yield and more efficient usage of farmland. This would allow for a higher population being sustained.",
			prerequisite_techs: ["new_green_revolution"],
			research_cost: 10500,
			year: 2020,
			category: "economic_technology",
			modifiers: [
				"**+1** Agriculture per city"
			],
			unlocks: function (usr) {
				usr.modifiers.agriculture_building_slots = usr.modifiers.agriculture_building_slots + 1;
			}
		},
		modern_financial_centres: {
			icon: "<:taxes:716817688781127810>",
			description: "Modern financial centres are locations with a high concentration of participants in banking, asset management, insurance or financial markets with venues and supporting services for those activities to take place.",
			prerequisite_techs: ["production_facilities"],
			research_cost: 10500,
			year: 1995,
			category: "economic_technology",
			modifiers: [
				"Enables **CBDs**",
				"Enables **Modern Financial Centres**",
				"**+1** Processing Facility Buildings per city"
			],
			unlocks: function (usr) {
				usr.available_buildings.push("cbds");
				usr.available_buildings.push("modern_financial_centres");
				usr.modifiers.processing_facilities_building_slots = usr.modifiers.processing_facilities_building_slots + 1;
			}
		},
		landfill_mining_and_recycling: {
			icon: "<:trade:716828677115084812>",
			description: "Landfill mining and recycling is a process which excavates and processes solid wastes which have previously been landfilled. In the process, mining recovers valuable recyclable materials, a combustible fraction, soil and landfill space.",
			prerequisite_techs: ["hydraulic_fracturing"],
			research_cost: 10500,
			year: 2025,
			category: "economic_technology",
			modifiers: [
				"**+1** Extra Building Slots"
			],
			unlocks: function (usr) {
				usr.modifiers.extra_building_slots = usr.modifiers.extra_building_slots + 1;
			}
		},
		ai_fund_management: {
			icon: "<:money:716817688718213192>",
			description: "With artificial intelligence responsible for Fund Management, developing, operating, maintaining, upgrading and disposing assets will all be conducted with little human intervention.",
			prerequisite_techs: ["governmental_fiscal_stimulus"],
			research_cost: 10500,
			year: 2021,
			category: "economic_technology",
			modifiers: [
				"**+5%** Tax Efficiency"
			],
			unlocks: function (usr) {
				usr.modifiers.tax_efficiency = usr.modifiers.tax_efficiency + 0.05;
			}
		},
		regulated_capitalism: {
			icon: "<:old_scroll:716828676880334881>",
			description: "Regulated Capitalism serves as an alternative to other forms of capitalism in order to shed more light on capitalism as a polymorphous order. It suggests that the operation maintenance and development of the international political economy increasingly depends on administrative rules outside the legislatures and the courts.",
			prerequisite_techs: ["austerity_controversy"],
			research_cost: 10500,
			year: 2025,
			category: "economic_technology",
			modifiers: [
				"**+2** Political Capital Gain",
				"**-5%** Production Efficiency"
			],
			unlocks: function (usr) {
				usr.modifiers.political_capital_gain = usr.modifiers.political_capital_gain + 2;
				usr.modifiers.production_efficiency = usr.modifiers.production_efficiency - 0.05;
			}
		},
		vertical_farming: {
			icon: "<:steel:716791408828088420>",
			description: "Vertical farming is the practice of growing crops in vertically stacked layers. It often incorporates controlled-environment agriculture, which aims to optimise plant growth, and soilless farming techniques such as hydroponics, aquaponics, and aeroponics.",
			prerequisite_techs: ["improved_crop_yields"],
			research_cost: 11000,
			year: 2030,
			category: "economic_technology",
			modifiers: [
				"Enables **Vertical Farms**",
				"**+3** Agriculture per city",
				"**-8%** Population Growth Rate"
			],
			unlocks: function (usr) {
				usr.available_buildings.push("vertical_farms");
				usr.modifiers.agriculture_building_slots = usr.modifiers.agriculture_building_slots + 3;
				usr.pop_growth_modifier = usr.pop_growth_modifier - 0.08;
			}
		},
		ai_hubs: {
			icon: "<:government:716817688693047306>",
			description: "The consequences of the Industrial Revolution have been a disaster for the human race. They have finally reached their final form. Welcome to the endgame.",
			prerequisite_techs: ["modern_financial_centres"],
			research_cost: 11000,
			year: 2050,
			category: "economic_technology",
			modifiers: [
				"Enables **AI Hubs**",
				"**+3** Industrial Buildings per city",
			],
			unlocks: function (usr) {
				usr.available_buildings.push("ai_hubs");
				usr.modifiers.industry_building_slots = usr.modifiers.industry_building_slots + 3;
			}
		},
		automated_mining: {
			icon: "<:coal:716791408714973204>",
			description: "Automated mining involves the removal of human labour from the mining process. It can still require a large amount of human capital. There are two types of automated mining, process and software automation, and the application of robotic technology to mining vehicles and equipment.",
			prerequisite_techs: ["landfill_mining_and_recycling"],
			research_cost: 11000,
			year: 2050,
			category: "economic_technology",
			modifiers: [
				"**+2** Extra Building Slots"
			],
			unlocks: function (usr) {
				usr.modifiers.extra_building_slots = usr.modifiers.extra_building_slots + 2;
			}
		},
		contemporaneous_economic_thought: {
			icon: "<:technology:716812861514711040>",
			description: "The current state of economic thought covers a diverse range of policy initiatives and sub-movements, all of which claim to provide optimised mandates for our government. By running each of them through detailed economic simulations, we can sort out which ones will work for the economy, and which ones will not.",
			prerequisite_techs: ["regulated_capitalism"],
			research_cost: 11000,
			year: 2025,
			category: "economic_technology",
			modifiers: [
				"**+5%** Research Efficiency"
			],
			unlocks: function (usr) {
				usr.modifiers.research_efficiency = usr.modifiers.research_efficiency + 0.05;
			}
		},
		//Administrative Technology //Admin. Tech
		early_colonial_administration: {
			icon: "<:paper:759161240987369522>",
			description: "Early colonial administration was typically managed by those deemed capable of managing the colony and easing it into a state of survival. Although not ideal for long-term growth, they were instrumental in growing colonies initially.",
			research_cost: 20,
			year: 1520,
			category: "administrative_technology",
			modifiers: [
				"**+1** Maximum Expeditions"
			],
			unlocks: function (usr) {
				usr.modifiers.maximum_expeditions = usr.modifiers.maximum_expeditions + 1;
			}
		},
		the_courthouse: {
			icon: "<:political_capital:716817688525275257>",
			description: "The courthouse, used to provide rule of law for the common citizenry, is imperative to maintain a semblance of public order in any nation, and will go a long way in cementing our legitimacy over the people as a government.",
			prerequisite_techs: ["early_colonial_administration"],
			research_cost: 50,
			year: 1550,
			category: "administrative_technology",
			modifiers: [
				"**+5%** Stability"
			],
			unlocks: function (usr) {
				usr.modifiers.stability_modifier = usr.modifiers.stability_modifier + 5;
			}
		},
		cartography: {
			icon: "<:old_map:716821884867444746>",
			description: "The art of map-making is beginning to diverge into a science as cartographic maps are used increasingly for navigation and administration, and the maps it produces are even used to wage battles.",
			prerequisite_techs: ["early_colonial_administration"],
			research_cost: 50,
			year: 1569,
			category: "administrative_technology",
			modifiers: [
				"**+5%** Colonist Travel Speed"
			],
			unlocks: function (usr) {
				usr.modifiers.colonist_travel_speed = usr.modifiers.colonist_travel_speed - 0.05;
			}
		},
		universities: {
			icon: "<:knowledge:716797747193446441>",
			description: "Central locations of learning and beacons of knowledge, universities help guide our country into the future as youth from all over our nation will come to these places to study and further develop emerging fields of research.",
			prerequisite_techs: ["the_courthouse"],
			research_cost: 75,
			year: 1500,
			category: "administrative_technology",
			modifiers: [
				"Enables **Universities**"
			],
			unlocks: function (usr) {
				usr.available_buildings.push("universities");
			}
		},
		colonial_charters: {
			icon: "<:old_map:716821884867444746>",
			description: "Originally given out as grants of land for colonies, overtime they evolved into having their own separate administration, typically with high degrees of autonomy from their mother country as more and more settlers came to settle in these charters.",
			prerequisite_techs: ["cartography"],
			research_cost: 75,
			year: 1600,
			category: "administrative_technology",
			modifiers: [
				"**+1** Maximum Expeditions"
			],
			unlocks: function (usr) {
				usr.modifiers.maximum_expeditions = usr.modifiers.maximum_expeditions + 1;
			}
		},
		early_modern_bureaucracy: {
			icon: "<:government:716817688693047306>",
			description: "By switching our system of government from one that merely follows the whims of various aristocrats to one that works on a merit-based system, we can begin to enforce an early modern bureaucracy in which all valid candidates are considered of equal worth.",
			prerequisite_techs: ["universities","colonial_charters"],
			research_cost: 100,
			year: 1600,
			category: "administrative_technology",
			modifiers: [
				"**-5%** Building Cost",
				"Unlocks **Bureaucracy** Reforms"
			],
			unlocks: function (usr) {
				usr.modifiers.building_cost = usr.modifiers.building_cost - 0.05;
				unlockReform(usr.id, "bureaucracy");
			}
		},
		standardisation_of_units: {
			icon: "<:stability:716817688722407424>",
			description: "The standardisation of units will help improve governmental efficiency and reduce cheating on the local level, as peasants and serfs will now be aware of what level of tax they have to pay, and whether or not their lord is cheating them by skimming some off the top, or by raising their taxes, leading to excess burdens.",
			prerequisite_techs: ["early_modern_bureaucracy"],
			research_cost: 150,
			year: 1643,
			category: "administrative_technology",
			modifiers: [
				"**-5%** Building Cost",
				"**+5%** Administrative Efficiency"
			],
			unlocks: function (usr) {
				usr.modifiers.building_cost = usr.modifiers.building_cost - 0.05;
				usr.modifiers.administrative_efficiency = usr.modifiers.administrative_efficiency + 0.05;
			}
		},
		corvee: {
			icon: "<:taxes:716817688781127810>",
			description: "The corvee was a labour tax instituted in France, as well as several other European nations for the express purpose of building up infrastructure, typically for the benefit of the military, although it could also serve other purposes.",
			prerequisite_techs: ["early_modern_bureaucracy"],
			research_cost: 150,
			year: 1620,
			category: "administrative_technology",
			modifiers: [
				"**+5%** National Manpower"
			],
			unlocks: function (usr) {
				usr.modifiers.national_manpower = usr.modifiers.national_manpower + 0.05;
			}
		},
		religious_tolerance: {
			icon: "<:old_scroll:716828676880334881>",
			description: "The increase of religious tolerance in our country could help lead to a defusing of tensions between divergent sects of our faith, and reduce civil violence.",
			prerequisite_techs: ["early_modern_bureaucracy"],
			research_cost: 150,
			year: 1648,
			category: "administrative_technology",
			modifiers: [
				"**+5%** Stability"
			],
			unlocks: function (usr) {
				usr.modifiers.stability_modifier = usr.modifiers.stability_modifier + 5;
			}
		},
		centralisation: {
			icon: "<:provinces:716809229603700737>",
			description: "Although our state and the central government has long been swayed underneath the power and influence of the various nobles and vassals that comprise our country, through organised systems of placation, we can slowly whittle away their power peacefully, cementing a modern government capable of delegating duties.",
			prerequisite_techs: ["standardisation_of_units"],
			research_cost: 200,
			year: 1643,
			category: "administrative_technology",
			modifiers: [
				"Enables **Centralisation** Mechanics"
			],
			unlocks: function (usr) {
				usr.enabled_mechanics.push("centralisation");
			}
		},
		tax_oversight: {
			icon: "<:taxes:716817688781127810>",
			description: "By overseeing the nobles who are conducting our taxes, we can reduce the burden on the peasants, but also fill up our state coffers rather nicely in the process. Of course they won't be happy, but that's their lot.",
			prerequisite_techs: ["corvee"],
			research_cost: 200,
			year: 1600,
			category: "administrative_technology",
			modifiers: [
				"**+3%** Tax Efficiency"
			],
			unlocks: function (usr) {
				usr.modifiers.tax_efficiency = usr.modifiers.tax_efficiency + 0.03;
			}
		},
		diplomatic_code: {
			icon: "<:faculty:732730754911436830>",
			description: "As thoughts of modernity and civilised expectations begin to sweep around the world, it seems only fair that we should codify our protection of diplomats to promote bilateral relations between us and other countries.",
			prerequisite_techs: ["religious_tolerance"],
			research_cost: 200,
			year: 1648,
			category: "administrative_technology",
			modifiers: [
				"**+1** Diplomatic Slots"
			],
			unlocks: function (usr) {
				usr.modifiers.starting_diplomatic_slots = usr.modifiers.starting_diplomatic_slots + 1;
			}
		},
		absolutism: {
			icon: "<:government_scroll:716828975175041054>",
			description: "Although viewed by many as the simple rule of a petty tyrant, absolutism will help increase the unity of our state, eventually leading to a situation in which the authority of nobles will be greatly devolved.",
			prerequisite_techs: ["religious_tolerance"],
			research_cost: 250,
			year: 1654,
			category: "administrative_technology",
			modifiers: [
				"**+2%** Ruling Party Support Gain"
			],
			unlocks: function (usr) {
				usr.modifiers.ruling_party_support = usr.modifiers.ruling_party_support + 2;
			}
		},
		code_of_laws: {
			icon: "<:old_scroll:716828676880334881>",
			description: "By codifying our entire set of laws, we can make it clear to the people what we expect of them and their behaviour, and what practices to avoid, increasing social and national stability. Anything not found in the law is not law at all.",
			prerequisite_techs: ["religious_tolerance"],
			research_cost: 250,
			year: 1660,
			category: "administrative_technology",
			modifiers: [
				"Unlocks **Penal System** Reforms"
			],
			unlocks: function (usr) {
				unlockReform(usr.id, "penal_system");
			}
		},
		laws_of_war: {
			icon: "<:cb:716828676855169107>",
			description: "By setting some standards for the treatment of enemy belligerents during wartime, we can ensure that our own soldiers are treated, if not well, then at least acceptably.",
			prerequisite_techs: ["religious_tolerance"],
			research_cost: 250,
			year: 1648,
			category: "administrative_technology",
			modifiers: [
				"**+1** Diplomatic Slots"
			],
			unlocks: function (usr) {
				usr.modifiers.starting_diplomatic_slots = usr.modifiers.starting_diplomatic_slots + 1;
			}
		},
		modern_theocracy: {
			icon: "<:infamy:716817688453709905>",
			description: "The organisation of a modern theocracy, though challenging, would help in assisting our nation's souls into their afterlife, and would lend us great power over the everyday lives of the average citizen.",
			prerequisite_techs: ["absolutism"],
			research_cost: 350,
			year: 1650,
			category: "administrative_technology",
			modifiers: [
				"This technology currently has no effect. This may change in future versions."
			],
			unlocks: function (usr) {
				usr.modifiers.ruling_party_support = usr.modifiers.ruling_party_support + 2;
			}
		},
		constitutionalism: {
			icon: "<:paper:759161240987369522>",
			description: "The code of laws can be taken a step further into a constitution, severely restricting the power of the king, and opening up new voting rights for the landed gentry and aristocrats that make up this nation. Although the peasants and middle-class in our country may be upset at their own lack of representation ...",
			prerequisite_techs: ["code_of_laws"],
			research_cost: 350,
			year: 1634,
			category: "administrative_technology",
			modifiers: [
				"**-1%** Reform Desire Gain"
			],
			unlocks: function (usr) {
				usr.modifiers.reform_desire_gain = usr.modifiers.reform_desire_gain - 0.01;
			}
		},
		the_nation_state: {
			icon: "<:globe:716811246556545035>",
			description: "The modern nation state is a government capable of exercising authority over its demarcated territories whilst at the same time providing services for its people. It is the modern concept of a nation as we know it.",
			prerequisite_techs: ["absolutism","constitutionalism"],
			research_cost: 500,
			year: 1648,
			category: "administrative_technology",
			modifiers: [
				"**+5%** Stability",
				"**+20** Prestige",
				"**+3** Political Capital Gain"
			],
			unlocks: function (usr) {
				usr.modifiers.stability_modifier = usr.modifiers.stability_modifier + 5;
				usr.prestige = usr.prestige + 20;
				usr.modifiers.political_capital_gain = usr.modifiers.political_capital_gain + 3;
			}
		},
		parliament: {
			icon: "<:political_capital:716817688525275257>",
			description: "A legislative body in charge of passing the laws of the land, the concept of a Parliament, even if not instituted, will at least give our citizens the hope that they will be represented someday.",
			prerequisite_techs: ["absolutism","constitutionalism"],
			research_cost: 500,
			year: 1655,
			category: "administrative_technology",
			modifiers: [
				"Unlocks **Upper House** Reforms"
			],
			unlocks: function (usr) {
				unlockReform(usr.id, "upper_house");
			}
		},
		military_oversight: {
			icon: "<:manpower:716817688705499177>",
			description: "Oversight of the military will help reduce the rampant corruption prevalent in our armed forces, and help transform our nation's army into a modern, professional fighting force.",
			prerequisite_techs: ["the_nation_state"],
			research_cost: 650,
			year: 1630,
			category: "administrative_technology",
			modifiers: [
				"**-5%** Upkeep Cost",
				"**+5%** Colonial Power Gain"
			],
			unlocks: function (usr) {
				usr.modifiers.army_upkeep = usr.modifiers.army_upkeep - 0.05;
				usr.modifiers.colonial_power_gain = usr.modifiers.colonial_power_gain + 0.05;
			}
		},
		enlightened_absolutism: {
			icon: "<:government_scroll:716828975175041054>",
			description: "By promising to bring about the reforms of the Enlightenment whilst maintaining an autocracy, we can placate some of the more reform-minded subjects amongst our population, and be seen as a forwards-looking ruler. At least for our time.",
			prerequisite_techs: ["the_nation_state"],
			research_cost: 650,
			year: 1740,
			category: "administrative_technology",
			modifiers: [
				"Unlocks **Slavery** Reforms",
				"**+1%** Constitutional Monarchy Popularity Gain"
			],
			unlocks: function (usr) {
				unlockReform(usr.id, "slavery");
				usr.modifiers.constitutional_monarchy = usr.modifiers.constitutional_monarchy + 1;
			}
		},
		diplomatic_order: {
			icon: "<:faculty:732730754911436830>",
			description: "As the diplomatic order, at least in the civilised world as we know it, continues to evolve, we should seek to keep our code up to date, and develop the concept of diplomatic immunity further, as well as the recognition of treaties as contractual obligations between nations.",
			prerequisite_techs: ["laws_of_war"],
			research_cost: 650,
			year: 1755,
			category: "administrative_technology",
			modifiers: [
				"**+1** Diplomatic Slots"
			],
			unlocks: function (usr) {
				usr.modifiers.starting_diplomatic_slots = usr.modifiers.starting_diplomatic_slots + 1;
			}
		},
		colonialism: {
			icon: "<:soldiers:732730754592669702>",
			description: "The doctrine of expansion for centuries, colonialism often meant acquiring land outside one's own continent and bringing it into their own fold in order to extract more resources and to establish ports in strategic locations for further expansion.",
			prerequisite_techs: ["military_oversight"],
			research_cost: 750,
			year: 1756,
			category: "administrative_technology",
			modifiers: [
				"Enables **Settlers**",
				"**+1** Maximum Expeditions",
				"Obsoletes **Conquistadors**"
			],
			unlocks: function (usr) {
				usr.modifiers.maximum_expeditions = usr.modifiers.maximum_expeditions + 1;
				usr.available_units.push("settlers");
				deleteElement(usr.available_units, "conquistadors", [usr, "obsolete_units"]);
			}
		},
		national_sovereignty: {
			icon: "<:provinces:716809229603700737>",
			description: "Concepts around the national sovereignty of nations and the right to control and determine their own destiny are starting to become more firmly entrenched in the minds of the leaders of many of the world's nations, and as such, we should be careful to 'respect' it as best we can.",
			prerequisite_techs: ["enlightened_absolutism"],
			research_cost: 750,
			year: 1740,
			category: "administrative_technology",
			modifiers: [
				"**+5%** Centralisation"
			],
			unlocks: function (usr) {
				usr.modifiers.centralisation = usr.modifiers.centralisation + 0.05;
			}
		},
		landed_gentry: {
			icon: "<:faculty:732730754911436830>",
			description: "In a constitutional monarchy, the landed gentry or those of the wealthy and the aristocracy were among the first to gain access to the vote, leading to further restrictions on the powers of the monarch and further opportunities to pass new legislation.",
			prerequisite_techs: ["parliament"],
			research_cost: 750,
			year: 1750,
			category: "administrative_technology",
			modifiers: [
				"Unlocks **Voting System** Reforms"
			],
			unlocks: function (usr) {
				unlockReform(usr.id, "voting_system");
			}
		},
		balance_of_power: {
			icon: "<:stability:716817688722407424>",
			description: "As nations are inevitably concerned about their own self-interest and how far they can advance their own priorities, it becomes important to maintain a balance of power in the region in order to ensure that a single power bloc is not capable of dominating the entire landscape.",
			prerequisite_techs: ["diplomatic_order"],
			research_cost: 750,
			year: 1756,
			category: "administrative_technology",
			modifiers: [
				"**-5%** Stability"
			],
			unlocks: function (usr) {
				usr.modifiers.stability_modifier = usr.modifiers.stability_modifier - 5;
			}
		},
		colonial_bureaucracy: {
			icon: "<:globe:716811246556545035>",
			description: "By creating more organised systems for our colonies, we can help to provide more effective governance than ever before, increasing our colonial capacity and allowing for more settlers to emigrate overseas.",
			prerequisite_techs: ["colonialism"],
			research_cost: 900,
			year: 1760,
			category: "administrative_technology",
			modifiers: [
				"**+1** Maximum Expeditions"
			],
			unlocks: function (usr) {
				usr.modifiers.maximum_expeditions = usr.modifiers.maximum_expeditions + 1;
			}
		},
		organised_postage: {
			icon: "<:trade:716828677115084812>",
			description: "The postal system of a country is arguably as important as the roads themselves. The improvement of lines of communication across our nation and empire become increasingly important as they are the conduits upon which our merchants and bureaucracy depend.",
			prerequisite_techs: ["national_sovereignty"],
			research_cost: 900,
			year: 1780,
			category: "administrative_technology",
			modifiers: [
				"**+50** Shipment Capacity"
			],
			unlocks: function (usr) {
				usr.modifiers.shipment_capacity = usr.modifiers.shipment_capacity + 50;
			}
		},
		great_power_status: {
			icon: "<:prestige:762428452636721202>",
			description: "By emphasising the qualities of power projection, we can achieve great power status as we subtly influence other nations into doing what we want them to do.",
			prerequisite_techs: ["balance_of_power"],
			research_cost: 900,
			year: 1815,
			category: "administrative_technology",
			modifiers: [
				"**+5** Prestige Gain",
				"**-5%** Army Upkeep"
			],
			unlocks: function (usr) {
				usr.modifiers.prestige_gain = usr.modifiers.prestige_gain + 5;
				usr.modifiers.army_upkeep = usr.modifiers.army_upkeep - 0.05;
			}
		},
		divide_and_conquer: {
			icon: "<:infamy:716817688453709905>",
			description: "Although imperial rule may not always be easy, we can pit the natives against each other in order to lessen the probability of short-term revolt at the risk of increasing long-term violence.",
			prerequisite_techs: ["colonial_bureaucracy"],
			research_cost: 1000,
			year: 1819,
			category: "administrative_technology",
			modifiers: [
				"**+1** Maximum Expeditions"
			],
			unlocks: function (usr) {
				usr.modifiers.maximum_expeditions = usr.modifiers.maximum_expeditions + 1;
			}
		},
		land_clearance: {
			icon: "<:provinces:716809229603700737>",
			description: "Mopping up several parcels of land into a single unified lot can improve efficiency and allow our businessmen greater opportunities when it comes to utilising our natural resources.",
			prerequisite_techs: ["organised_postage"],
			research_cost: 1000,
			year: 1790,
			category: "administrative_technology",
			modifiers: [
				"**+3%** Administrative Efficiency"
			],
			unlocks: function (usr) {
				usr.modifiers.administrative_efficiency = usr.modifiers.administrative_efficiency + 0.03;
			}
		},
		political_thought_and_theory: {
			icon: "<:old_scroll:716828676880334881>",
			description: "As consciousness amongst our population begins to rise, and governments become more representative of the people, if not in truth, then at least in theory, political ideologies are beginning to adapt to the beliefs and cultures which they inhabit.",
			prerequisite_techs: ["landed_gentry"],
			research_cost: 1000,
			year: 1789,
			category: "administrative_technology",
			modifiers: [
				"**+2** Political Capital Gain"
			],
			unlocks: function (usr) {
				usr.modifiers.political_capital_gain = usr.modifiers.political_capital_gain + 2;
			}
		},
		early_imperialism: {
			icon: "<:taxes:716817688781127810>",
			description: "Imperialism took colonialism to the next level by proclaiming a civilising mission across multiple continents in order to justify the subjugation of natives in the area. It later became used to refer to the influence colonial masters held over their 'protectorates' and client states.",
			prerequisite_techs: ["divide_and_conquer"],
			research_cost: 1200,
			year: 1820,
			category: "administrative_technology",
			modifiers: [
				"**+10%** Colonial Power Gain",
				"Enables **Colonists**",
				"Obsoletes **Settlers**"
			],
			unlocks: function (usr) {
				usr.modifiers.colonial_power_gain = usr.modifiers.colonial_power_gain + 0.10;
				usr.available_units.push("colonists");
				deleteElement(usr.available_units, "settlers", [usr, "obsolete_units"]);
			}
		},
		absolute_rulership: {
			icon: "<:government:716817688693047306>",
			description: "Sometimes the best government is one that has total authority over every aspect of life. At least that's what our leader thinks.",
			prerequisite_techs: ["land_clearance"],
			research_cost: 1200,
			year: 1815,
			category: "administrative_technology",
			modifiers: [
				"**+5%** Centralisation"
			],
			unlocks: function (usr) {
				usr.modifiers.centralisation = usr.modifiers.centralisation + 0.05;
			}
		},
		political_standardisation: {
			icon: "<:old_scroll:716828676880334881>",
			description: "The varying aspects of all the political ideologies that were borne forth out of the great revolutions are finally beginning to coalesce into standard ideologies, of which certain tenets are shared between people of different political beliefs.",
			prerequisite_techs: ["political_thought_and_theory"],
			research_cost: 1200,
			year: 1848,
			category: "administrative_technology",
			modifiers: [
				"**+1%** Ruling Party Support Gain"
			],
			unlocks: function (usr) {
				usr.modifiers.ruling_party_support = usr.modifiers.ruling_party_support + 1;
			}
		},
		coalitionism: {
			icon: "<:old_map:716821884867444746>",
			description: "Minority governments, now that they are elected in certain parliamentary democracies, have the duty to form a coalition in order to gain a majority in Parliament, such that they will be capable of passing laws and enacting reforms in an equitable manner for the general public.",
			prerequisite_techs: ["great_power_status"],
			research_cost: 1200,
			year: 1848,
			category: "administrative_technology",
			modifiers: [
				"**+1** Diplomatic Slots"
			],
			unlocks: function (usr) {
				usr.modifiers.starting_diplomatic_slots = usr.modifiers.starting_diplomatic_slots + 1;
			}
		},
		logical_units: {
			icon: "<:stability:716817688722407424>",
			description: "Despite the standardisation of our units having already occurred, certain scientists believe that measures should correspond to natural constants, as they believe that these measurements would be more 'logical' and 'natural'. Whether or not we adopt these policy changes, however, is up to us.",
			prerequisite_techs: ["absolute_rulership"],
			research_cost: 1400,
			year: 1791,
			category: "administrative_technology",
			modifiers: [
				"Enables **Research Labs**",
				"**+1** Research Building per city",
				"**+5%** Centralisation"
			],
			unlocks: function (usr) {
				usr.available_buildings.push("research_labs");
				usr.modifiers.research_buildings_building_slots = usr.modifiers.research_buildings_building_slots + 1;
				usr.modifiers.centralisation = usr.modifiers.centralisation + 0.05;
			}
		},
		the_constitution: {
			icon: "<:old_scroll:716828676880334881>",
			description: "Although the concept of restricted powers and a code of laws has been around for a while, the time has finally come to update and formalise our constitution into something that will stand the test of time.",
			prerequisite_techs: ["political_standardisation"],
			research_cost: 1400,
			year: 1787,
			category: "administrative_technology",
			modifiers: [
				"Unlocks **Political Parties** Reforms"
			],
			unlocks: function (usr) {
				unlockReform(usr.id, "political_parties");
			}
		},
		intervention: {
			icon: "<:old_scroll:716828676880334881>",
			description: "Since the first 'bright' intellectuals came up with the concept of 'Bellum Justum', it falls upon us to figure out how to intervene in wars without the ire of our population. Concepts such as mutual defence and false-flag operations provide that casus belli, the reason for war that we so desperately need.",
			prerequisite_techs: ["coalitionism"],
			research_cost: 1400,
			year: 1854,
			category: "administrative_technology",
			modifiers: [
				"**+25%** CB Generation Speed"
			],
			unlocks: function (usr) {
				usr.modifiers.cb_generation_speed = usr.modifiers.cb_generation_speed + 0.25;
			}
		},
		improved_colonial_administration: {
			icon: "<:provinces:716809229603700737>",
			description: "Through the layout of ethnographic maps and historic provinces, we can help divide our colonial subjects up how we see best fit for their governance.",
			prerequisite_techs: ["early_imperialism"],
			research_cost: 1600,
			year: 1850,
			category: "administrative_technology",
			modifiers: [
				"Enables **Magnates**",
				"Obsoletes **Colonists**",
				"**+5%** Colonial Power Gain",
				"**-5%** Overextention"
			],
			unlocks: function (usr) {
				usr.available_units.push("magnates");
				deleteElement(usr.available_units, "colonists", [usr, "obsolete_units"]);
				usr.modifiers.colonial_power_gain = usr.modifiers.colonial_power_gain + 0.05;
				usr.modifiers.overextension = usr.modifiers.overextension - 0.05;
			}
		},
		prussian_constitutionalism: {
			icon: "<:government:716817688693047306>",
			description: "Originating in the German state of Prussia, Prussian constitutionalism attempts to maintain a balance between complete constitutional monarchy as seen in Britain and an absolute monarchy where the monarch was to do as they saw fit.",
			prerequisite_techs: ["logical_units"],
			research_cost: 1600,
			year: 1850,
			category: "administrative_technology",
			modifiers: [
				"This technology currently has no effect. This may change in future versions." //Supposed to enable Prussian Constitutionalism as a government type in the future
			],
			unlocks: function (usr) {
			}
		},
		separation_of_powers: {
			icon: "<:political_capital:716817688525275257>",
			description: "In order to maintain a truly free democracy, the various branches of government must be separated in a such a manner that neither one of the branches is capable of holding a monopoly on government power.",
			prerequisite_techs: ["the_constitution"],
			research_cost: 1600,
			year: 1809,
			category: "administrative_technology",
			modifiers: [
				"**+5%** Republicanism Strength"
			],
			unlocks: function (usr) {
				usr.modifiers.republicanism = usr.modifiers.republicanism + 0.05;
			}
		},
		modern_diplomatic_institutions: {
			icon: "<:faculty:732730754911436830>",
			description: "Embassies, consulates, diplomatic missions and international agreements are slowly becoming more and more commonplace among the nations of the world, and it is only right that our great nation should take part in them as well.",
			prerequisite_techs: ["intervention"],
			research_cost: 1600,
			year: 1836,
			category: "administrative_technology",
			modifiers: [
				"**+1** Diplomatic Slots"
			],
			unlocks: function (usr) {
				usr.modifiers.starting_diplomatic_slots = usr.modifiers.starting_diplomatic_slots + 1;
			}
		},
		modern_bureaucracy: {
			icon: "<:knowledge:716797747193446441>",
			description: "The wheels and cogs of our government are beginning to turn as the first dedicated agencies to their service, the postal office and the central bank, are slowly beginning to cement themselves into the everyday vernacular. As our government expands, we must be careful to exercise our control well, lest certain parties increase unrest among our populace.",
			prerequisite_techs: ["prussian_constitutionalism"],
			research_cost: 1800,
			year: 1866,
			category: "administrative_technology",
			modifiers: [
				"**+1** Research Building per city",
				"**+2** Political Capital Gain",
				"Unlocks **School System** Reforms"
			],
			unlocks: function (usr) {
				usr.modifiers.research_buildings_building_slots = usr.modifiers.research_buildings_building_slots + 1;
				usr.modifiers.political_capital_gain = usr.modifiers.political_capital_gain + 2;
				unlockReform(usr.id, "school_system");
			}
		},
		bill_of_rights: {
			icon: "<:old_scroll:716828676880334881>",
			description: "The Bill of Rights guarantees civil rights and liberties to the individual, like freedom of speech, press, and religion. It sets rules for due process of law and reserves all powers not delegated to the Government to the people.",
			prerequisite_techs: ["separation_of_powers"],
			research_cost: 1800,
			year: 1689,
			category: "administrative_technology",
			modifiers: [
				"**+5%** Republicanism Strength"
			],
			unlocks: function (usr) {
				usr.modifiers.republicanism = usr.modifiers.republicanism + 0.05;
			}
		},
		sphere_of_influence: {
			icon: "<:old_map:716821884867444746>",
			description: "A sphere of influence is a spatial region or concept division over which a state has a level of cultural, economic, military, or political exclusivity.",
			prerequisite_techs: ["modern_diplomatic_institutions"],
			research_cost: 1800,
			year: 1895,
			category: "administrative_technology",
			modifiers: [
				"This technology currently has no effect. This may change in future versions." //Supposed to enable Influence mechanics in the future
			],
			unlocks: function (usr) {
			}
		},
		colonial_autonomy: {
			icon: "<:consciousness:758424911852470293>",
			description: "Colonial autonomy allows for the existence of colonies with an elected government in which elected rulers were able to make most decisions without referring to the colonial power with nominal control of the colony.",
			prerequisite_techs: ["improved_colonial_administration"],
			research_cost: 2000,
			year: 1860,
			category: "administrative_technology",
			modifiers: [
				"**-5%** Colonial Maintenance"
			],
			unlocks: function (usr) {
				usr.modifiers.colonial_maintenance = usr.modifiers.colonial_maintenance - 0.05;
			}
		},
		instant_communciations: {
			icon: "<:naval_units:716821195277729832>",
			description: "The advent of the telegraph has allowed our country to revolutionise communication between not just our administrative entities, but also our finance centres and military as well, allowing for improved administrative efficiency.",
			prerequisite_techs: ["modern_bureaucracy"],
			research_cost: 2000,
			year: 1851,
			category: "administrative_technology",
			modifiers: [
				"**+1** Research Building per city",
				"**+3%** Administrative Efficiency"
			],
			unlocks: function (usr) {
				usr.modifiers.research_buildings_building_slots = usr.modifiers.research_buildings_building_slots + 1;
				usr.modifiers.administrative_efficiency = usr.modifiers.administrative_efficiency + 0.03;
			}
		},
		increased_voting_rights: {
			icon: "<:soldiers:732730754592669702>",
			description: "People in foreign lands are beginning to demand that they be given more say in political affairs, and as voter suffrage becomes a bigger issue abroad, perhaps it's time to look at our own country as well for consideration.",
			prerequisite_techs: ["bill_of_rights"],
			research_cost: 2000,
			year: 1880,
			category: "administrative_technology",
			modifiers: [
				"Unlocks **Public Meeting** Reforms",
				"Unlocks **Political Rights** Reforms"
			],
			unlocks: function (usr) {
				unlockReform(usr.id, "public_meetings");
				unlockReform(usr.id, "political_rights");
			}
		},
		political_union: {
			icon: "<:government:716817688693047306>",
			description: "A political union, in which all the parts thereof are intertwined either in a loose type of federalism where each state is still technically sovereign, or in a single union that comprises many autonomous regions, can encompass people of different ethnicities and languages by treating them as first-class citizens.",
			prerequisite_techs: ["sphere_of_influence"],
			research_cost: 2000,
			year: 1865,
			category: "administrative_technology",
			modifiers: [
				"**+1** Political Capital Gain"
			],
			unlocks: function (usr) {
				usr.modifiers.political_capital_gain = usr.modifiers.political_capital_gain + 1;
			}
		},
		dominion_status: {
			icon: "<:government_scroll:716828975175041054>",
			description: "Overseas colonies are already clamouring for greater say in their external affairs. Granting them Dominion status would be a step in this direction, and would reduce our colonial maintenance expenses significantly.",
			prerequisite_techs: ["colonial_autonomy"],
			research_cost: 2500,
			year: 1901,
			category: "administrative_technology",
			modifiers: [
				"**-10%** Colonial Maintenance"
			],
			unlocks: function (usr) {
				usr.modifiers.colonial_maintenance = usr.modifiers.colonial_maintenance - 0.10;
			}
		},
		timezone_standardisation: {
			icon: "<:building:716827579650408538>",
			description: "Timezone Standardisation will allow for the railways to run on time as trains no longer have to be adjusted to a town's local time, improving the speed at which citizens of our nation can travel between cities.",
			prerequisite_techs: ["instant_communciations"],
			research_cost: 2500,
			year: 1880,
			category: "administrative_technology",
			modifiers: [
				"**+3%** Administrative Efficiency"
			],
			unlocks: function (usr) {
				usr.modifiers.administrative_efficiency = usr.modifiers.administrative_efficiency + 0.03;
			}
		},
		revolution_and_counterrevolution: {
			icon: "<:infamy:716817688453709905>",
			description: "The advent of republicanism, especially violent one, has shaken the monarchies of the world to their core as more absolutist monarchies have to contend with new republics that threaten to stir up the international order.",
			prerequisite_techs: ["increased_voting_rights"],
			research_cost: 2500,
			year: 1905,
			category: "administrative_technology",
			modifiers: [
				"Unlocks **Vote Franchise** Reforms"
			],
			unlocks: function (usr) {
				unlockReform(usr.id, "vote_franchise");
			}
		},
		international_order: {
			icon: "<:diplomacy:716827579323121666>",
			description: "As the position of Great Powers in international politics become more cemented, we must learn to deal with them on the world stage if we wish to compete internationally.",
			prerequisite_techs: ["political_union"],
			research_cost: 2500,
			year: 1910,
			category: "administrative_technology",
			modifiers: [
				"**+5** Influence Gain"
			],
			unlocks: function (usr) {
				usr.modifiers.influence_gain = usr.modifiers.influence_gain + 5;
			}
		},
		military_academies: {
			icon: "<:manpower:716817688705499177>",
			description: "Establishing professional schools of training where our officers can learn tactics and adapt in wargames will help to greatly improve our current military professionalism.",
			prerequisite_techs: ["dominion_status"],
			research_cost: 3000,
			year: 1880,
			category: "administrative_technology",
			modifiers: [
				"**+10%** Army Professionalism"
			],
			unlocks: function (usr) {
				usr.modifiers.army_professionalism = usr.modifiers.army_professionalism + 0.10;
			}
		},
		industrial_towns: {
			icon: "<:factory:759161240601493525>",
			description: "The establishment of industrial towns, solely dedicated to the furthering of our nation's industry, will become pivotal in the manufacturing sectors of our nation in the years to come.",
			prerequisite_techs: ["timezone_standardisation"],
			research_cost: 3000,
			year: 1880,
			category: "administrative_technology",
			modifiers: [
				"**+3%** Administrative Efficiency"
			],
			unlocks: function (usr) {
				usr.modifiers.administrative_efficiency = usr.modifiers.administrative_efficiency + 0.03;
			}
		},
		popular_reform: {
			icon: "<:old_scroll:716828676880334881>",
			description: "Reforms in democratic states often demanded by the public can be passed in such institutions as Parliament, allowing for reforms to be made on a wide scale.",
			prerequisite_techs: ["timezone_standardisation"],
			research_cost: 3000,
			year: 1890,
			category: "administrative_technology",
			modifiers: [
				"Unlocks **Health Care** Reforms",
				"**+1%** Constitutional Monarchy Support Gain",
				"**+1%** Democracy Support Gain",
				"**+1%** Socialism Support Gain"
			],
			unlocks: function (usr) {
				usr.modifiers.constitutional_monarchy = usr.modifiers.constitutional_monarchy + 1;
				usr.modifiers.democracy = usr.modifiers.democracy + 1;
				usr.modifiers.socialism = usr.modifiers.socialism + 1;
				unlockReform(usr.id, "healthcare");
			}
		},
		humane_treatment: {
			icon: "<:revolt:716819535964930149>",
			description: "Calls to outlaw such subtleties such as torture and arbitrary imprisonment have lead the populations of certain nations to begin calling for the criminalisation of 'cruel and unusual' punishments.",
			prerequisite_techs: ["timezone_standardisation"],
			research_cost: 3000,
			year: 1895,
			category: "administrative_technology",
			modifiers: [
				"**+10** Opinion Modifier"
			],
			unlocks: function (usr) {
				usr.modifiers.opinion_modifier = usr.modifiers.opinion_modifier + 10;
			}
		},
		divergent_political_thought: {
			icon: "<:knowledge:716797747193446441>",
			description: "As the spectre of new ideologies begin to take hold over the Continent, our nation's leaders should be careful to keep an eye on the situation to root out various forms of extremism.",
			prerequisite_techs: ["industrial_towns"],
			research_cost: 3500,
			year: 1914,
			category: "administrative_technology",
			modifiers: [
				"**+5%** Tax Efficiency"
			],
			unlocks: function (usr) {
				usr.modifiers.tax_efficiency = usr.modifiers.tax_efficiency + 0.05;
			}
		},
		universal_suffrage: {
			icon: "<:old_scroll:716828676880334881>",
			description: "Much like the old Chartist refrain, other nations have begun to take it on themselves to provide universal suffrage to all males, and are also beginning to provide suffrage to females.",
			prerequisite_techs: ["popular_reform"],
			research_cost: 3500,
			year: 1920,
			category: "administrative_technology",
			modifiers: [
				"**+50** Political Capital"
			],
			unlocks: function (usr) {
				usr.political_capital = usr.political_capital + 50;
			}
		},
		communism: {
			icon: "<:infamy:716817688453709905>",
			description: "Socialism is when the government does stuff. And the more stuff they do, the more socialist it gets. And if they do a whole lot of stuff, it's communism.",
			prerequisite_techs: ["divergent_political_thought"],
			research_cost: 4000,
			year: 1870,
			category: "administrative_technology",
			modifiers: [
				"Enables **Communism**"
			],
			unlocks: function (usr) {
				usr.available_governments.push("communism");
			}
		},
		mass_politics: {
			icon: "<:old_scroll:716828676880334881>",
			description: "The emergence of new ideas and ideologies have piqued the common man's interest in politics, as they increasingly search for new ways of effective governance.",
			prerequisite_techs: ["universal_suffrage"],
			research_cost: 4000,
			year: 1900,
			category: "administrative_technology",
			modifiers: [
				"Unlocks **Press Rights** Reforms"
			],
			unlocks: function (usr) {
				unlockReform(usr.id, "press_rights");
			}
		},
		international_diplomatic_immunity: {
			icon: "<:diplomacy:716827579323121666>",
			description: "Increasingly, with the power projection of the countries that dominate this world, even uncivilised nations have to accept the sovereign immunity of diplomats.",
			prerequisite_techs: ["universal_suffrage"],
			research_cost: 4000,
			year: 1890,
			category: "administrative_technology",
			modifiers: [
				"**+5** Opinion Modifier"
			],
			unlocks: function (usr) {
				usr.modifiers.opinion_modifier = usr.modifiers.opinion_modifier + 5;
			}
		},
		protectorates: {
			icon: "<:old_map:716821884867444746>",
			description: "Protectorates are de jure nations that are given 'protection' by major colonial powers in exchange for large amounts of influence.",
			prerequisite_techs: ["military_academies"],
			research_cost: 4500,
			year: 1890,
			category: "administrative_technology",
			modifiers: [
				"Enables **Administrators**",
				"Obsoletes **Magnates**",
				"**+5%** Colonial Power Gain"
			],
			unlocks: function (usr) {
				usr.available_units.push("administrators");
				deleteElement(usr.available_units, "magnates", [usr, "obsolete_units"]);
				usr.modifiers.colonial_power_gain = usr.modifiers.colonial_power_gain + 0.05;
			}
		},
		fascism: {
			icon: "<:land_vehicles:716821195215077406>",
			description: "Fascism is a doctrine that espouses the racial and national superiority of one's own country, often using political violence and intimidation in order to gain power before launching aggressive military campaigns in pursuit of a nationalist vision.",
			prerequisite_techs: ["communism"],
			research_cost: 4500,
			year: 1923,
			category: "administrative_technology",
			modifiers: [
				"Enables **Fascism**"
			],
			unlocks: function (usr) {
				usr.available_governments.push("fascism");
			}
		},
		self_determination: {
			icon: "<:knowledge:716797747193446441>",
			description: "A term Woodrow Wilson invented that doesn't actually mean anything. - Colonial Powers, probably.",
			prerequisite_techs: ["international_diplomatic_immunity"],
			research_cost: 4500,
			year: 1918,
			category: "administrative_technology",
			modifiers: [
				"**-10%** Stability",
				"**+2** Political Capital Gain"
			],
			unlocks: function (usr) {
				usr.modifiers.stability_modifier = usr.modifiers.stability_modifier - 10;
				usr.modifiers.political_capital_gain = usr.modifiers.political_capital_gain + 2;
			}
		},
		home_rule: {
			icon: "<:political_capital:716817688525275257>",
			description: "Seeking a compromise between direct rule, and complete independence, Home Rule allows for complete independence of the legislature whilst aligned with the foreign policy interests of the mother country.",
			prerequisite_techs: ["protectorates"],
			research_cost: 5000,
			year: 1920,
			category: "administrative_technology",
			modifiers: [
				"**-5%** Colonial Maintenace"
			],
			unlocks: function (usr) {
				usr.modifiers.colonial_maintenance = usr.modifiers.colonial_maintenance - 0.05;
			}
		},
		socialism: {
			icon: "<:workers:732730754735276124>",
			description: "Socialism is a blanket term for a wide range of economic and social systems characterised by social ownership of the means of production and workers' self-management of enterprises.",
			prerequisite_techs: ["fascism"],
			research_cost: 5000,
			year: 1936,
			category: "administrative_technology",
			modifiers: [
				"Enables **Socialism**"
			],
			unlocks: function (usr) {
				usr.available_governments.push("socialism");
			}
		},
		womens_suffrage: {
			icon: "<:consciousness:758424911852470293>",
			description: "The right for women to vote and participate in elections is a large step in the right direction in the fight for political equality and social reform, distancing societies from traditional gender roles.",
			prerequisite_techs: ["mass_politics"],
			research_cost: 5000,
			year: 1920,
			category: "administrative_technology",
			modifiers: [
				"This technology currently has no effect. This may change in future versions."
			],
			unlocks: function (usr) {
			}
		},
		geneva_convention: {
			icon: "<:diplomacy:716827579323121666>",
			description: "The Geneva Convention establishes the standard international law for human treatment in war, rules that apply in times of armed conflict that are aimed to protect people who are not included in taking part in hostilities.",
			prerequisite_techs: ["self_determination"],
			research_cost: 5000,
			year: 1929,
			category: "administrative_technology",
			modifiers: [
				"**-2%** Infamy Loss"
			],
			unlocks: function (usr) {
				usr.modifiers.infamy_loss = usr.modifiers.infamy_loss + 0.02;
			}
		},
		colonial_management: {
			icon: "<:old_map:716821884867444746>",
			description: "The vast swaths of land claimed by colonial powers aren't going to govern themselves, and the natives certainly won't be having a say either. Colonial management aims to exploit the resources and population of the colonies in order to maximise profits, with little to no regards for morality.",
			prerequisite_techs: ["home_rule"],
			research_cost: 5500,
			year: 1930,
			category: "administrative_technology",
			modifiers: [
				"**+5%** Colonial Power Gain"
			],
			unlocks: function (usr) {
				usr.modifiers.colonial_power_gain = usr.modifiers.colonial_power_gain + 0.05;
			}
		},
		decentralised_administration: {
			icon: "<:provinces:716809229603700737>",
			description: "By allowing our various states and provinces to hold a high level of autonomy whilst reserving large amounts of federal power, we can potentially decrease the fiscal and administrative burden placed on local governments.",
			prerequisite_techs: ["socialism"],
			research_cost: 5500,
			year: 1930,
			category: "administrative_technology",
			modifiers: [
				"**+3%** Administrative Efficiency"
			],
			unlocks: function (usr) {
				usr.modifiers.administrative_efficiency = usr.modifiers.administrative_efficiency + 0.03;
			}
		},
		frontier_control: {
			icon: "<:soldiers:732730754592669702>",
			description: "Having the power to check those coming in and out of our country will help in reducing the crime rate, as well as for checking for hostile actors who seek to upend our system and traditions.",
			prerequisite_techs: ["geneva_convention"],
			research_cost: 5500,
			year: 1930,
			category: "administrative_technology",
			modifiers: [
				"**+1** Political Capital Gain",
				"**-5%** Crime Rate"
			],
			unlocks: function (usr) {
				usr.modifiers.political_capital_gain = usr.modifiers.political_capital_gain + 1;
				usr.modifiers.crime_rate = usr.modifiers.crime_rate - 0.05;
			}
		},
		trusts_and_mandates: {
			icon: "<:globe:716811246556545035>",
			description: "Having the power to check those coming in and out of our country will help in reducing the crime rate, as well as for checking for hostile actors who seek to upend our system and traditions.",
			prerequisite_techs: ["colonial_management"],
			research_cost: 6000,
			year: 1919,
			category: "administrative_technology",
			modifiers: [
				"**-5%** Colonial Maintenance"
			],
			unlocks: function (usr) {
				usr.available_units.push("bureaucrats");
				deleteElement(usr.available_units, "administrators", [usr, "obsolete_units"]);
				usr.modifiers.colonial_maintenance = usr.modifiers.colonial_maintenance - 0.05;
			}
		},
		multi_party_political_systems: {
			icon: "<:government:716817688693047306>",
			description: "A multi-party political system allows for multiple political parties across the political spectrum to run in elections and have the capability to gain control of government institutions, either separately or in coalition.",
			prerequisite_techs: ["womens_suffrage"],
			research_cost: 6000,
			year: 1923,
			category: "administrative_technology",
			modifiers: [
				"**+1%** Constitutional Monarchy Support Gain",
				"**+1%** Democracy Support Gain",
				"**+1%** Socialism Support Gain"
			],
			unlocks: function (usr) {
				usr.modifiers.constitutional_monarchy = usr.modifiers.constitutional_monarchy + 1;
			}
		},
		international_treaties: {
			icon: "<:globe:716811246556545035>",
			description: "A treaty is a formal and binding agreement entered by sovereign states or international organisations. Treaties express agreements that states use to legally bind themselves.",
			prerequisite_techs: ["frontier_control"],
			research_cost: 6000,
			year: 1880,
			category: "administrative_technology",
			modifiers: [
				"**+1** Diplomatic Slots"
			],
			unlocks: function (usr) {
				usr.modifiers.starting_diplomatic_slots = usr.modifiers.starting_diplomatic_slots + 1;
			}
		},
		wartime_colonial_administration: {
			icon: "<:infamy:716817688453709905>",
			description: "A treaty is a formal and binding agreement entered by sovereign states or international organisations. Treaties express agreements that states use to legally bind themselves.",
			prerequisite_techs: ["trusts_and_mandates"],
			research_cost: 6500,
			year: 1914,
			category: "administrative_technology",
			modifiers: [
				"**+15%** Colonial Maintenance",
				"**+10%** Colonial Power Gain"
			],
			unlocks: function (usr) {
				usr.modifiers.colonial_maintenance = usr.modifiers.colonial_maintenance + 0.15;
				usr.modifiers.colonial_power_gain = usr.modifiers.colonial_power_gain + 0.10;
			}
		},
		economic_based_ideologies: {
			icon: "<:gold:716798541028261927>",
			description: "Economic-based ideologies such as anarcho-capitalism believe the inherent worth of the economy to act as a tool in moulding the life of the ordinary citizen.",
			prerequisite_techs: ["decentralised_administration"],
			research_cost: 6500,
			year: 1950,
			category: "administrative_technology",
			modifiers: [
				"This technology currently has no effect. This may change in future versions." //Supposed to unlock Libertarianism, Strasserism in the future
			],
			unlocks: function (usr) {
			}
		},
		racial_equality: {
			icon: "<:consciousness:758424911852470293>",
			description: "Racial equality is when institutions give equal opportunities to people of all races, regardless of physical traits, heritage or skin colour. This would allow for minorities to gain more opportunities in employment, education and politics than ever before.",
			prerequisite_techs: ["multi_party_political_systems"],
			research_cost: 6500,
			year: 1950,
			category: "administrative_technology",
			modifiers: [
				"This technology currently has no effect. This may change in future versions." //Supposed to unlock Minorities reforms in the future
			],
			unlocks: function (usr) {
			}
		},
		universal_human_rights: {
			icon: "<:workers:732730754735276124>",
			description: "The establishment of moral principles and norms that set an international standard for fundamental rights to which a person is inherently entitled simply because he or she is a human being, regardless of age, ethnic origin, location, language, religion, ethnicity or any other status.",
			prerequisite_techs: ["international_treaties"],
			research_cost: 6500,
			year: 1945,
			category: "administrative_technology",
			modifiers: [
				"**-1%** Infamy Loss"
			],
			unlocks: function (usr) {
				usr.modifiers.infamy_loss = usr.modifiers.infamy_loss - 0.01;
			}
		},
		decolonisation: {
			icon: "<:diplomacy:716827579323121666>",
			description: "As the winds of change begin to sweep through our colonies, many believe that our time has come to give our colonies independence. Whilst we will lose our colonies, if we manage it well, we will still hold profound influence over them and we might be able to gain leverage over them in future discussions and negotiations.",
			prerequisite_techs: ["wartime_colonial_administration"],
			research_cost: 7000,
			year: 1961,
			category: "administrative_technology",
			modifiers: [
				"This technology currently has no effect. This may change in future versions." //Supposed to unlock Decolonisation mechanics in the future
			],
			unlocks: function (usr) {
			}
		},
		political_responsibility: {
			icon: "<:political_capital:716817688525275257>",
			description: "By holding those in office accountable for their political actions, our government can seek to enforce a meritocracy of sorts that promotes only those deemed capable enough to carry out their duties effectively.",
			prerequisite_techs: ["racial_equality"],
			research_cost: 7000,
			year: 1968,
			category: "administrative_technology",
			modifiers: [
				"**+2** Political Capital Gain"
			],
			unlocks: function (usr) {
				usr.modifiers.political_capital_gain = usr.modifiers.political_capital_gain + 2;
			}
		},
		cold_war: {
			icon: "<:infamy:716817688453709905>",
			description: "New technological innovations, digitalisation and mass markets have come to dominate our country, as we deal with the ideological struggles of the Cold War.",
			prerequisite_techs: ["universal_human_rights"],
			research_cost: 7000,
			year: 1949,
			category: "administrative_technology",
			modifiers: [
				"This technology currently has no effect. This may change in future versions." //Supposed to unlock Cold War mechanics in the future
			],
			unlocks: function (usr) {
			}
		},
		neo_colonialism: {
			icon: "<:trade:716828677115084812>",
			description: "Neo-colonialism is the geopolitical practice of utilising economics, globalisation, cultural imperialism, conditional aid, and other nefarious practices such as spiraling debt obligations that functionally imitate the relationship of traditional colonialism in order to impose dominance over other sovereign states.",
			prerequisite_techs: ["decolonisation"],
			research_cost: 7500,
			year: 1973,
			category: "administrative_technology",
			modifiers: [
				"**+5%** Colonial Power Gain"
			],
			unlocks: function (usr) {
				usr.modifiers.colonial_power_gain = usr.modifiers.colonial_power_gain + 0.05;
			}
		},
		modern_political_theory: {
			icon: "<:political_capital:716817688525275257>",
			description: "Political science has started to become a more developed field, and the studying of citizen behaviour will allow us to predict future political movements and problems with greater certainty than before.",
			prerequisite_techs: ["decolonisation"],
			research_cost: 7500,
			year: 1971,
			category: "administrative_technology",
			modifiers: [
				"**+5** Political Capital Gain"
			],
			unlocks: function (usr) {
				usr.modifiers.political_capital_gain = usr.modifiers.political_capital_gain + 5;
			}
		},
		containment: {
			icon: "<:infamy:716817688453709905>",
			description: "Ideological struggles are popping up all across the world, and it is important that we do not get lost in this whirlwind of chaos. Therefore, we must begin to realise that certain political extremes that pose a danger to our way of life must be curtailled, even if in other countries, and by force if necessary.",
			prerequisite_techs: ["cold_war"],
			research_cost: 7500,
			year: 1950,
			category: "administrative_technology",
			modifiers: [
				"This technology currently has no effect. This may change in future versions."
			],
			unlocks: function (usr) {
			}
		},
		modern_political_competency: {
			icon: "<:knowledge:716797747193446441>",
			description: "The idea of competency in politics is beginning to hold greater sway over our administration as citizens increasingly come to expect more from their government. Needless to say, they will only be satisfied through provision.",
			prerequisite_techs: ["modern_political_theory"],
			research_cost: 8000,
			year: 1970,
			category: "administrative_technology",
			modifiers: [
				"**+3%** Administrative Efficiency"
			],
			unlocks: function (usr) {
				usr.modifiers.administrative_efficiency = usr.modifiers.administrative_efficiency + 0.03;
			}
		},
		rollback: {
			icon: "<:land_vehicles:716821195215077406>",
			description: "Containment as a policy was limited to simply 'containing' the other's ideology. Problem is, should it spread too far, a different strategy is needed for the region. Rollback, as the name would imply, refers to overthrowing governments friendly to another ideology and replacing them with our own for ensured stability and influence in the region.",
			prerequisite_techs: ["containment"],
			research_cost: 8000,
			year: 1960,
			category: "administrative_technology",
			modifiers: [
				"This technology currently has no effect. This may change in future versions."
			],
			unlocks: function (usr) {
			}
		},
		governmental_digitisation: {
			icon: "<:government:716817688693047306>",
			description: "With the internet rapidly permeating into many households in other nations, perhaps it is time to look at our own country and figure out how best to make use of this new technology to maximise effective governance ...",
			prerequisite_techs: ["modern_political_competency"],
			research_cost: 8500,
			year: 1969,
			category: "administrative_technology",
			modifiers: [
				"**+2** Research Building per city",
				"**+5%** Administrative Efficiency"
			],
			unlocks: function (usr) {
				usr.modifiers.research_buildings_building_slots = usr.modifiers.research_buildings_building_slots + 2;
				usr.modifiers.administrative_efficiency = usr.modifiers.administrative_efficiency + 0.05;
			}
		},
		lgbtqia_rights: {
			icon: "<:government:716817688693047306>",
			description: "As attitudes in other countries regarding people with different sexual orientations start to shift, it might be time for us to consider our own take on the issue.",
			prerequisite_techs: ["modern_political_competency"],
			research_cost: 8500,
			year: 1969,
			category: "administrative_technology",
			modifiers: [
				"Unlocks **LGBTQIA Rights** Reforms"
			],
			unlocks: function (usr) {
				unlockReform(usr.id, "lgbtqia_rights");
			}
		},
		foreign_aid: {
			icon: "<:money:716817688718213192>",
			description: "Foreign aid is the voluntary transfer of resources from one actor to another. It serves various purposes, such as a sign of diplomatic approval, extending the donor's cultural influence and providing infrastructure needed by the donor for resource extraction from the recipient country.",
			prerequisite_techs: ["rollback"],
			research_cost: 8500,
			year: 1946,
			category: "administrative_technology",
			modifiers: [
				"This technology currently has no effect. This may change in future versions." //Supposed to unlock Foreign Aid diplomatic decisions with other countries to extend influence
			],
			unlocks: function (usr) {
			}
		},
		political_transparency: {
			icon: "<:knowledge:716797747193446441>",
			description: "Political transparency gives citizens the right and means to examine the process of decision making within government institutions. This is used as a means of holding public officials accountable and fighting corruption.",
			prerequisite_techs: ["governmental_digitisation"],
			research_cost: 9000,
			year: 1973,
			category: "administrative_technology",
			modifiers: [
				"This technology currently has no effect. This may change in future versions."
			],
			unlocks: function (usr) {
			}
		},
		contemporary_politics: {
			icon: "<:consciousness:758424911852470293>",
			description: "Politics has become an ever-changing environment where the situations of entire countries and governments can change in a mere matter of months, and as such it remains imperative for us to keep up with the latest issues and to delegate tasks responsibly.",
			prerequisite_techs: ["lgbtqia_rights"],
			research_cost: 9000,
			year: 1975,
			category: "administrative_technology",
			modifiers: [
				"This technology currently has no effect. This may change in future versions." 
			],
			unlocks: function (usr) {
			}
		},
		detente: {
			icon: "<:diplomacy:716827579323121666>",
			description: "Detente is the relaxation of strained relations, especially political tensions, by communication. The term is often used to refer to a period of general easing of geopolitical tensions between major powers.",
			prerequisite_techs: ["foreign_aid"],
			research_cost: 9000,
			year: 1968,
			category: "administrative_technology",
			modifiers: [
				"This technology currently has no effect. This may change in future versions." //Supposed to enable Detente decisions
			],
			unlocks: function (usr) {
			}
		},
		populism: {
			icon: "<:culture:758424912049864784>",
			description: "Populism refers to a range of political stances that emphasises the idea of 'the people', and often seeks to juxtapose this group against a common enemy via negative integration.",
			prerequisite_techs: ["contemporary_politics","detente"],
			research_cost: 10000,
			year: 1975,
			category: "administrative_technology",
			modifiers: [
				"This technology currently has no effect. This may change in future versions." //Supposed to unlock populist ideologies
			],
			unlocks: function (usr) {
			}
		},
		democratic_order: {
			icon: "<:revolt:716819535964930149>",
			description: "As our world becomes ever more global and interconnected, the idea of democracy is beginning to spread beyond those few frontiers and to the rest of the globe as well, and foreign demands that countries respect human rights are becoming more and more commonplace.",
			prerequisite_techs: ["contemporary_politics","detente"],
			research_cost: 10000,
			year: 1990,
			category: "administrative_technology",
			modifiers: [
				"**+1%** Constitutional Monarchy Support Gain",
				"**+1%** Democracy Support Gain",
				"**+1%** Socialism Support Gain"
			],
			unlocks: function (usr) {
				usr.modifiers.constitutional_monarchy = usr.modifiers.constitutional_monarchy + 1;
				usr.modifiers.democracy = usr.modifiers.democracy + 1;
				usr.modifiers.socialism = usr.modifiers.socialism + 1;
			}
		},
		increased_digitalisation: {
			icon: "<:steel:716791408828088420>",
			description: "Our country's infrastructure has begun to shift more and more from the real world and into the realm of cyberspace, giving us a technological edge over that of other countries. Therefore, we must consider the best way to utilise this technology.",
			prerequisite_techs: ["political_transparency"],
			research_cost: 10000,
			year: 1995,
			category: "administrative_technology",
			modifiers: [
				"**+5%** Administrative Efficiency"
			],
			unlocks: function (usr) {
				usr.modifiers.administrative_efficiency = usr.modifiers.administrative_efficiency + 0.05;
			}
		},
		students_rights: {
			icon: "<:consciousness:758424911852470293>",
			description: "The youth in our country (and in some others as well) have been particularly active recently in demanding their own rights, even with pushback from large segments of society.",
			prerequisite_techs: ["populism"],
			research_cost: 10000,
			year: 1990,
			category: "administrative_technology",
			modifiers: [
				"This technology currently has no effect. This may change in future versions." //Supposed to unlock Students Rights reforms
			],
			unlocks: function (usr) {
			}
		},
		citizen_protection: {
			icon: "<:faculty:732730754911436830>",
			description: "Protecting our citizens in foreign countries has become more and more important in an era of asymmetric warfare and hostage diplomacy, as international norms are increasingly being violated.",
			prerequisite_techs: ["democratic_order"],
			research_cost: 10000,
			year: 1980,
			category: "administrative_technology",
			modifiers: [
				"**+1** Political Capital Gain"
			],
			unlocks: function (usr) {
				usr.modifiers.political_capital_gain = usr.modifiers.political_capital_gain + 1;
			}
		},
		cyberstates: {
			icon: "<:taxes:716817688781127810>",
			description: "Entire governments have now begun to move their operations online, posing new risks and opportunities as administration becomes ever more efficient.",
			prerequisite_techs: ["increased_digitalisation"],
			research_cost: 10500,
			year: 2005,
			category: "administrative_technology",
			modifiers: [
				"**+5%** Administrative Efficiency"
			],
			unlocks: function (usr) {
				usr.modifiers.administrative_efficiency = usr.modifiers.administrative_efficiency + 0.05;
			}
		},
		minors_rights: {
			icon: "<:faculty:732730754911436830>",
			description: "First the students, now the minors. Increasingly, those under 18 are demanding more rights and the ability to increasingly participate in civic life. Although hugely controversial, especially from older sections of our society, perhaps it is time that we take a stance on the issue.",
			prerequisite_techs: ["students_rights"],
			research_cost: 10500,
			year: 2025,
			category: "administrative_technology",
			modifiers: [
				"**+1** Political Capital Gain",
				"**-5%** Stability"
			],
			unlocks: function (usr) {
				usr.modifiers.political_capital_gain = usr.modifiers.political_capital_gain + 1;
				usr.modifiers.stability_modifier = usr.modifiers.stability_modifier - 5;
			}
		},
		contemporary_international_order: {
			icon: "<:diplomacy:716827579323121666>",
			description: "The establishment of a worldwide intergovernmental organization aims to maintain international peace, justice, stability and security, while developing friendly and mutually beneficial relations among states to achieve international cooperation.",
			prerequisite_techs: ["citizen_protection"],
			research_cost: 10500,
			year: 2000,
			category: "administrative_technology",
			modifiers: [
				"**+2** Political Capital Gain"
			],
			unlocks: function (usr) {
				usr.modifiers.political_capital_gain = usr.modifiers.political_capital_gain + 2;
			}
		},
		augmented_governmental_management: {
			icon: "<:development:716811992421367869>",
			description: "Through the effective use of information and employing algorithmic governance, we can create a government capable of managing various bureaus and agencies with surgical precision and machine-like efficiency.",
			prerequisite_techs: ["cyberstates"],
			research_cost: 11000,
			year: 2030,
			category: "administrative_technology",
			modifiers: [
				"**+10%** Administrative Efficiency",
				"**+5%** Stability"
			],
			unlocks: function (usr) {
				usr.modifiers.administrative_efficiency = usr.modifiers.administrative_efficiency + 0.10;
				usr.modifiers.stability_modifier = usr.modifiers.stability_modifier + 5;
			}
		},
	},
	
	government_list: ["absolute_monarchy", "constitutional_monarchy", "communism", "socialism", "democracy", "fascism"],
	governments: {
		anarchy: {
			name: ["Anarchy", "Anarchists"],
			icon: ":black_circle:",
			description: "Anarchists believe in a stateless world ... which is bad news for you, since you're roleplaying a state. Go on, do `$government <name>`!",
			can_justify_wars: false,
			has_elections: false,
			maximum_manpower: 1.00,
			maximum_tax_rate: 0.01,
			civilian_actions: 1.00,
			stability: -10,
			famine_penalty: 0.50
		},
		absolute_monarchy: {
			name: ["Absolute Monarchy", "Absolutists"],
			icon: ":purple_circle:",
			description: "Supporters of absolute monarchy believe in a divinely ordained monarchy that wields absolute power.",
			can_justify_wars: true,
			has_elections: false,
			maximum_manpower: 0.10,
			maximum_tax_rate: 0.65,
			civilian_actions: 0.10,
			early_game_stability: 20, //Applies up until year 1815
			stability: -5,
			famine_penalty: 0.075,
			reform_desire: -0.1
		},
		constitutional_monarchy: {
			name: ["Constitutional Monarchy", "Constitutionalists"],
			icon: ":orange_circle:",
			description: "Constitutionalists believe in a figurehead monarchy, with a democratic system of government.",
			can_justify_wars: false,
			has_elections: true,
			maximum_manpower: 0.20,
			maximum_tax_rate: 0.35,
			civilian_actions: 0.35,
			stability: 15,
			famine_penalty: 0.065,
			reform_desire: 0.02
		},
		communism: {
			name: ["Communism", "Communists"],
			icon: ":red_circle:",
			description: "Communism, the Red Hydra: the dictatorship of the proletariat often means the nationalisation of all privately held property.",
			can_justify_wars: true,
			has_elections: false,
			maximum_manpower: 0.35,
			maximum_tax_rate: 0.05,
			civilian_actions: 0.05,
			stability: -5,
			famine_penalty: 0.125,
			reform_desire: 0.01
		},
		socialism: {
			name: ["Socialism", "Socialists"],
			icon: ":green_circle:",
			description: "Socialism branched out from communism during the first half of the 20th century, and instead argued for a welfare state.",
			can_justify_wars: false,
			has_elections: true,
			maximum_manpower: 0.35,
			maximum_tax_rate: 0.15,
			civilian_actions: 0.20,
			stability: 15,
			famine_penalty: 0.07,
			reform_desire: 0.04
		},
		democracy: {
			name: ["Democracy", "Republicans"],
			icon: ":blue_circle:",
			description: "The concept of democracy often differed throughout history, but eventually came to represent a government by the people.",
			can_justify_wars: false,
			has_elections: true,
			maximum_manpower: 0.25,
			maximum_tax_rate: 0.70,
			civilian_actions: 0.50,
			stability: 15,
			famine_penalty: 0.05,
			reform_desire: 0.03
		},
		fascism: {
			name: ["Fascism", "Fascists"],
			icon: ":brown_circle:",
			description: "Fascism originally stemmed from ethnic hypernationalism and became emblematic of aggressive militaristic countries.",
			can_justify_wars: true,
			has_elections: false,
			maximum_manpower: 0.10,
			maximum_tax_rate: 0.70,
			civilian_actions: 0.20,
			stability: 10,
			famine_penalty: 0.05,
			reform_desire: -0.05
		}
	},
	
	reforms: {
		minimum_wage: {
			name: "Minimum Wage",
			no_minimum_wage: {
				name: "No Minimum Wage",
				description: "Proponents of no minimum wage believe that countries without a minimum wage will see increased economic growth as smaller businesses can afford to hire more workers.",
				political_appeasement: {
					absolute_monarchy_discontent: -5,
					fascism_discontent: -5,
					constitutional_monarchy_discontent: 2,
					democracy_discontent: 2,
					socialism_discontent: 5,
					communism_discontent: 7
				},
				effects: [
					["stability_modifier", -5],
					["tax_efficiency", -0.03],
					["production_efficiency", -0.05],
					["research_efficiency", 0.02],
					["building_cost", -0.05],
					["rgo_throughput", 0.02]
				]
			},
			trinket_minimum_wage: {
				name: "Trinket Minimum Wage",
				description: "A trinket minimum wage can be used to help satisfy the workers of this country whilst keeping corporate regulations minimal. However, workers won't be oblivious to this, and trade unions will likely continue to attempt to push for higher minimum wages.",
				political_appeasement: {
					absolute_monarchy_discontent: -3,
					fascism_discontent: -3,
					constitutional_monarchy_discontent: 3,
					democracy_discontent: 3,
					socialism_discontent: 2,
					communism_discontent: 2
				},
				effects: [
					["stability_modifier", -3],
					["tax_efficiency", -0.02],
					["production_efficiency", -0.04],
					["research_efficiency", 0.05],
					["building_cost", -0.03],
					["rgo_throughput", 0.02]
				]
			},
			low_minimum_wage: {
				name: "Low Minimum Wage",
				description: "Low minimum wages wil help reduce worker discontent, but will also be seen as a step towards more regulationist policies in our country.",
				political_appeasement: {
					absolute_monarchy_discontent: -1,
					fascism_discontent: -2,
					constitutional_monarchy_discontent: 0,
					democracy_discontent: 0,
					socialism_discontent: 2,
					communism_discontent: 3
				},
				effects: [
					["stability_modifier", -1],
					["production_efficiency", -0.02]
				]
			},
			acceptable_minimum_wage: {
				name: "Acceptable Minimum Wage",
				description: "Acceptable minimum wages, whilst decreasing our support amongst more conservative members of society, is seen as a widely needed reform by trade unions and those on the left of the political spectrum. It is also likely to impact small businesses.",
				political_appeasement: {
					absolute_monarchy_discontent: 3,
					fascism_discontent: 2,
					constitutional_monarchy_discontent: -1,
					democracy_discontent: -1,
					socialism_discontent: 4,
					communism_discontent: 3
				},
				effects: [
					["stability_modifier", 2],
					["tax_efficiency", 0.03],
					["production_efficiency", 0.02],
					["research_efficiency", -0.01],
					["building_cost", 0.05],
					["unit_cost", 0.05],
					["training_cost", 0.05],
					["rgo_throughput", -0.03]
				]
			},
			good_minimum_wage: {
				name: "Good Minimum Wage",
				description: "A good minimum wage, or as critics are calling it, a 'lavish minimum wage', is likely to increase stability and lower discontent on the left, but will also increase building costs and unit upkeep, although tax efficiency will also go up as consumer spending increases.",
				political_appeasement: {
					absolute_monarchy_discontent: 5,
					fascism_discontent: 4,
					constitutional_monarchy_discontent: 2,
					democracy_discontent: 3,
					socialism_discontent: -7,
					communism_discontent: -6
				},
				effects: [
					["stability_modifier", 5],
					["tax_efficiency", 0.05],
					["production_efficiency", 0.04],
					["research_efficiency", -0.06],
					["building_cost", 0.10],
					["unit_cost", 0.08],
					["training_cost", 0.06],
					["rgo_throughput", -0.05]
				]
			}
		},
		maximum_workhours: {
			name: "Maximum Workhours",
			unlimited_work_day: {
				name: "Unlimited Work Day",
				description: "No one enjoys this schedule, but proponents of lassiez-faire believe that markets will self-adjust working hours, as workers choose which jobs to work at. However, critics point out that all workplaces have similar working hours.",
				political_appeasement: {
					absolute_monarchy_discontent: -3,
					fascism_discontent: -1,
					constitutional_monarchy_discontent: 5,
					democracy_discontent: 6,
					socialism_discontent: 8,
					communism_discontent: 8
				},
				effects: [
					["stability_modifier", -7],
					["tax_efficiency", -0.05],
					["production_efficiency", 0.2],
					["research_efficiency", -0.1],
					["reform_desire_gain", 0.05],
					["rgo_throughput", 0.1]
				]
			},
			fourteen_hour_work_day: {
				name: "14 Hour Work Day",
				description: "The introduction of a limited work day was hailed as a good first step, but regulationists are still concerned, and laissez-faire economists believe the government is meddling too much in private business.",
				political_appeasement: {
					absolute_monarchy_discontent: -2,
					fascism_discontent: -2,
					constitutional_monarchy_discontent: 3,
					democracy_discontent: 3,
					socialism_discontent: 1,
					communism_discontent: 1
				},
				effects: [
					["stability_modifier", -5],
					["tax_efficiency", -0.02],
					["production_efficiency", 0.1],
					["reform_desire_gain", 0.02],
					["rgo_throughput", 0.05]
				]
			},
			twelve_hour_work_day: {
				name: "12 Hour Work Day",
				description: "A 12-hour workday, whilst currently seen as acceptable, is likely to fail to placate workers in the long-term, and laissez-faire economists are increasingly claiming that our policies go overboard.",
				political_appeasement: {
					absolute_monarchy_discontent: -3,
					fascism_discontent: -2,
					constitutional_monarchy_discontent: 2,
					democracy_discontent: 5,
					socialism_discontent: 3,
					communism_discontent: 2
				},
				effects: [
					["stability_modifier", -3],
					["research_efficiency", 0.05],
					["production_efficiency", 0.1],
					["reform_desire_gain", 0.01],
					["rgo_throughput", 0.05]
				]
			},
			ten_hour_work_day: {
				name: "10 Hour Work Day",
				description: "A 10-hour workday is likely to meet the relatively modern standards that our workers are now demanding for their workday, but also to upset deregulationists.",
				political_appeasement: {
					absolute_monarchy_discontent: 2,
					fascism_discontent: 3,
					constitutional_monarchy_discontent: 1,
					democracy_discontent: 1,
					socialism_discontent: -4,
					communism_discontent: -3
				},
				effects: [
					["research_efficiency", 0.1],
					["production_efficiency", 0.05],
					["rgo_throughput", 0.05]
				]
			},
			eight_hour_work_day: {
				name: "8 Hour Work Day",
				description: "A comfortable eight hour workday is likely to allow leisure time for our workers, and therefore, will also increase consumer spending, especially when coupled with better minimum wages. Critics, however, point out that it will lower our production efficiency.",
				political_appeasement: {
					absolute_monarchy_discontent: 7,
					fascism_discontent: 5,
					constitutional_monarchy_discontent: 2,
					democracy_discontent: 3,
					socialism_discontent: -8,
					communism_discontent: -5
				},
				effects: [
					["stability_modifier", 5],
					["research_efficiency", 0.15],
					["tax_efficiency", 0.03],
					["production_efficiency", -0.05],
					["rgo_throughput", -0.05]
				]
			}
		},
		safety_regulations: {
			name: "Safety Regulations",
			no_safety_regulations: {
				name: "No Safety Regulations",
				description: "Although dangerous, critics of safety regulation believe that increased regulationism will reduce the ability of the free markets to allocate their own funds most efficiently.",
				political_appeasement: {
					absolute_monarchy_discontent: -5,
					fascism_discontent: -6,
					constitutional_monarchy_discontent: 4,
					democracy_discontent: 5,
					socialism_discontent: 7,
					communism_discontent: 6
				},
				effects: [
					["stability_modifier", -5],
					["pop_growth_modifier", -0.01],
					["reform_desire_gain", 0.05],
					["production_efficiency", 0.05],
					["building_cost", -0.1],
					["tax_efficiency", -0.02]
				]
			},
			minimal_safety_regulations: {
				name: "Minimal Safety Regulations",
				description: "Minimal safety regulations, whilst not protecting from all accidents, will hopefully help those on the job to avoid the most serious of injuries that may maim them for life.",
				political_appeasement: {
					absolute_monarchy_discontent: -3,
					fascism_discontent: -4,
					constitutional_monarchy_discontent: 3,
					democracy_discontent: 4,
					socialism_discontent: 5,
					communism_discontent: 5
				},
				effects: [
					["stability_modifier", -2],
					["pop_growth_modifier", -0.005],
					["reform_desire_gain", 0.04],
					["production_efficiency", 0.02],
					["building_cost", -0.05]
				]
			},
			limited_safety_regulations: {
				name: "Limited Safety Regulations",
				description: "Limited safety regulations will prevent most injures on-site and will help reduce the burden on charities and workers compensation. However, production efficiency will take a modest hit.",
				political_appeasement: {
					absolute_monarchy_discontent: -2,
					fascism_discontent: -1,
					constitutional_monarchy_discontent: 1,
					democracy_discontent: 2,
					socialism_discontent: 3,
					communism_discontent: 4
				},
				effects: [
					["reform_desire_gain", 0.02],
					["production_efficiency", 0.01],
					["tax_efficiency", 0.01]
				]
			},
			acceptable_safety_regulations: {
				name: "Acceptable Safety Regulations",
				description: "Acceptable safety regulations are hailed by trade unions as a step towards a comprehensive social safety net, but companies are beginning to fear the overarching role that government is beginning to play in regulation.",
				political_appeasement: {
					absolute_monarchy_discontent: 2,
					fascism_discontent: 4,
					constitutional_monarchy_discontent: -4,
					democracy_discontent: -5,
					socialism_discontent: 1,
					communism_discontent: 1
				},
				effects: [
					["stability_modifier", 2],
					["production_efficiency", -0.02],
					["pop_growth_modifier", 0.02],
					["reform_desire_gain", -0.02],
					["building_cost", 0.1],
					["tax_efficiency", 0.04]
				]
			},
			excellent_safety_regulations: {
				name: "Excellent Safety Regulations",
				description: "Excellent safety regulations, although widely seen as a gross overreach of power by conservatives and even moderates, is a way to help ensure minimal casualties amongst the workforce, and will help appease those on the left.",
				political_appeasement: {
					absolute_monarchy_discontent: 5,
					fascism_discontent: 6,
					constitutional_monarchy_discontent: 1,
					democracy_discontent: 2,
					socialism_discontent: -7,
					communism_discontent: -7
				},
				effects: [
					["stability_modifier", 5],
					["production_efficiency", -0.05],
					["pop_growth_modifier", 0.01],
					["reform_desire_gain", -0.05],
					["building_cost", 0.15],
					["tax_efficiency", 0.1]
				]
			}
		},
		unemployment: {
			name: "Unemployment",
			no_subsidies: {
				name: "No Subsidies",
				description: "In order to avoid taxation, we can rely completely on charities to provide aid to those most affected, so as to ease the administrative burden upon ourselves.",
				political_appeasement: {
					absolute_monarchy_discontent: -3,
					fascism_discontent: -8,
					constitutional_monarchy_discontent: 5,
					democracy_discontent: 4,
					socialism_discontent: 5,
					communism_discontent: 6
				},
				effects: [
					["stability_modifier", -5],
					["pop_growth_modifier", -0.02],
					["reform_desire_gain", 0.05],
					["tax_efficiency", 0.1],
					["national_manpower", 0.05],
					["political_capital_gain", 2]
				]
			},
			trinket_subsidies: {
				name: "Trinket Subsidies",
				description: "Trinket subsidies, athough far from an effective solution regarding unemployment, will help alleviate some of the burdens faced by unemployed workers in our country today.",
				political_appeasement: {
					absolute_monarchy_discontent: -2,
					fascism_discontent: -6,
					constitutional_monarchy_discontent: 4,
					democracy_discontent: 3,
					socialism_discontent: 4,
					communism_discontent: 4
				},
				effects: [
					["stability_modifier", -3],
					["pop_growth_modifier", -0.02],
					["reform_desire_gain", 0.03],
					["tax_efficiency", 0.08],
					["national_manpower", 0.02],
					["political_capital_gain", 1]
				]
			},
			low_subsidies: {
				name: "Low Subsidies",
				description: "Low subsidies, although far from a comprehensive part of a social safety net, will help lift the burden on charities, and lower discontent amongst the general public.",
				political_appeasement: {
					absolute_monarchy_discontent: -1,
					fascism_discontent: -3,
					constitutional_monarchy_discontent: 1,
					democracy_discontent: 1,
					socialism_discontent: 3,
					communism_discontent: 2
				},
				effects: [
					["pop_growth_modifier", -0.01],
					["reform_desire_gain", 0.01],
					["tax_efficiency", 0.04]
				]
			},
			extended_subsidies: {
				name: "Extended Subsidies",
				description: "Extended subsidies, although praised by the left as helping those unfortunate enough to be unemployed to get back on their feet, are also said by those on the right to encourage laziness, and may lower our tax efficiency.",
				political_appeasement: {
					absolute_monarchy_discontent: 1,
					fascism_discontent: 2,
					constitutional_monarchy_discontent: 1,
					democracy_discontent: 0,
					socialism_discontent: -2,
					communism_discontent: -3
				},
				effects: [
					["stability_modifier", 5],
					["pop_growth_modifier", 0.02],
					["reform_desire_gain", -0.02],
					["production_efficiency", -0.05],
					["national_manpower", -0.01]
				]
			},
			generous_subsidies: {
				name: "Generous Subsidies",
				description: "Generous subsidies, although deeply alleviating burden on the unemployed, will also weigh down our state's coffers and political capital, and is often seen as feeding laziness.",
				political_appeasement: {
					absolute_monarchy_discontent: 2,
					fascism_discontent: 6,
					constitutional_monarchy_discontent: 4,
					democracy_discontent: 3,
					socialism_discontent: -4,
					communism_discontent: -4
				},
				effects: [
					["stability_modifier", 10],
					["pop_growth_modifier", 0.05],
					["reform_desire_gain", -0.05],
					["production_efficiency", -0.1],
					["building_cost", 0.05],
					["national_manpower", -0.05]
				]
			}
		},
		pensions: {
			name: "Pensions",
			no_pensions: {
				name: "No Pensions",
				description: "Although pensions might sure sound nice, few people ever consider how much money it would actually cost us, and does it look like the public want austerity?",
				political_appeasement: {
					absolute_monarchy_discontent: -5,
					fascism_discontent: -4,
					constitutional_monarchy_discontent: 5,
					democracy_discontent: 4,
					socialism_discontent: 7,
					communism_discontent: 7
				},
				effects: [
					["stability_modifier", -3],
					["pop_growth_modifier", 0.02],
					["reform_desire_gain", 0.02],
					["tax_efficiency", 0.07],
					["political_capital_gain", 4],
					["building_cost", -0.1],
					["training_cost", -0.1],
					["production_efficiency", -0.05]
				]
			},
			trinket_pensions: {
				name: "Trinket Pensions",
				description: "Trinket pensions will give our workforce something to look forwards to in the future when they retire, even if not much. Unfortunately, it would seem that the pension amount is proportional to incentive.",
				political_appeasement: {
					absolute_monarchy_discontent: -3,
					fascism_discontent: 1,
					constitutional_monarchy_discontent: 4,
					democracy_discontent: 3,
					socialism_discontent: 5,
					communism_discontent: 5
				},
				effects: [
					["stability_modifier", -1],
					["pop_growth_modifier", 0.04],
					["reform_desire_gain", 0.02],
					["tax_efficiency", 0.05],
					["political_capital_gain", 3],
					["building_cost", -0.05],
					["training_cost", -0.05],
					["production_efficiency", -0.02]
				]
			},
			low_pensions: {
				name: "Low Pensions",
				description: "Low pensions, whilst still offering flexibility for our state budget, will also help to incentivise workers and help decrease discontent in our country. However, some in our government are beginning to grow worried whether our state can handle all these expenses ...",
				political_appeasement: {
					absolute_monarchy_discontent: -2,
					fascism_discontent: -1,
					constitutional_monarchy_discontent: 2,
					democracy_discontent: 2,
					socialism_discontent: 4,
					communism_discontent: 3
				},
				effects: [
					["pop_growth_modifier", 0.05],
					["tax_efficiency", 0.01],
					["political_capital_gain", 1]
				]
			},
			acceptable_pensions: {
				name: "Acceptable Pensions",
				description: "Acceptable pensions, a.k.a. enough for most of our elderly to live off of, is substantially more accepted by society, but also places a substantial burden on our administrative functions and our workforce.",
				political_appeasement: {
					absolute_monarchy_discontent: 2,
					fascism_discontent: -2,
					constitutional_monarchy_discontent: -5,
					democracy_discontent: -5,
					socialism_discontent: -2,
					communism_discontent: -3
				},
				effects: [
					["stability_modifier", 5],
					["pop_growth_modifier", 0.07],
					["reform_desire_gain", -0.02],
					["tax_efficiency", -0.05],
					["political_capital_gain", -1],
					["building_cost", 0.05],
					["training_cost", 0.05],
					["production_efficiency", 0.05]
				]
			},
			good_pensions: {
				name: "Good Pensions",
				description: "Good pensions, whilst placing a heavy burden on our existent workforce and lowering the state budget significantly will serve as a paragon of stability and incentive, although it will alienate those on the right and even some moderates.",
				political_appeasement: {
					absolute_monarchy_discontent: 5,
					fascism_discontent: 4,
					constitutional_monarchy_discontent: 3,
					democracy_discontent: 4,
					socialism_discontent: -8,
					communism_discontent: -10
				},
				effects: [
					["stability_modifier", 10],
					["pop_growth_modifier", 0.1],
					["reform_desire_gain", -0.05],
					["tax_efficiency", -0.1],
					["political_capital_gain", -2],
					["building_cost", 0.1],
					["training_cost", 0.1],
					["production_efficiency", 0.2]
				]
			}
		},
		healthcare: {
			name: "Healthcare",
			no_healthcare: {
				name: "No Healthcare",
				description: "It's the American way!",
				political_appeasement: {
					absolute_monarchy_discontent: -10,
					fascism_discontent: 1,
					constitutional_monarchy_discontent: 6,
					democracy_discontent: 1,
					socialism_discontent: 8,
					communism_discontent: 6
				},
				effects: [
					["stability_modifier", -5],
					["pop_growth_modifier", -0.05],
					["reform_desire_gain", 0.05],
					["tax_efficiency", 0.15]
				]
			},
			trinket_healthcare: {
				name: "Trinket Healthcare",
				description: "If we can't afford to set up even the most rudimentary of healthcare services, at least we can put some 'nurses' in our schools and call it a day!",
				political_appeasement: {
					absolute_monarchy_discontent: -8,
					fascism_discontent: -1,
					constitutional_monarchy_discontent: 5,
					democracy_discontent: -1,
					socialism_discontent: 7,
					communism_discontent: 6
				},
				effects: [
					["stability_modifier", -2],
					["pop_growth_modifier", -0.04],
					["reform_desire_gain", 0.04],
					["tax_efficiency", 0.12]
				]
			},
			low_healthcare: {
				name: "Low Healthcare",
				description: "By providing rudimentary services to the general public, and making the healthcare system free for those in emergency situations only, we can at least trim down some of the excess casualties.",
				political_appeasement: {
					absolute_monarchy_discontent: -3,
					fascism_discontent: -1,
					constitutional_monarchy_discontent: 2,
					democracy_discontent: -3,
					socialism_discontent: 6,
					communism_discontent: 5
				},
				effects: [
					["pop_growth_modifier", -0.02],
					["reform_desire_gain", 0.02],
					["tax_efficiency", 0.05]
				]
			},
			acceptable_healthcare: {
				name: "Acceptable Healthcare",
				description: "Don't socialise my healthcare!",
				political_appeasement: {
					absolute_monarchy_discontent: 3,
					fascism_discontent: 2,
					constitutional_monarchy_discontent: 0,
					democracy_discontent: -3,
					socialism_discontent: 3,
					communism_discontent: 2
				},
				effects: [
					["stability_modifier", 5],
					["pop_growth_modifier", 0.02],
					["tax_efficiency", -0.02]
				]
			},
			good_healthcare: {
				name: "Good Healthcare",
				description: "By making our nation a world model for healthcare, we can avoid the worst of public health crises and ensure stability for those in our nation at the cost of the taxpayer.",
				political_appeasement: {
					absolute_monarchy_discontent: 4,
					fascism_discontent: 2,
					constitutional_monarchy_discontent: 1,
					democracy_discontent: -3,
					socialism_discontent: -6,
					communism_discontent: -6
				},
				effects: [
					["stability_modifier", 10],
					["pop_growth_modifier", 0.05],
					["tax_efficiency", -0.05],
					["reform_desire_gain", -0.02],
					["political_capital_gain", -1]
				]
			}
		},
		school_system: {
			name: "School System",
			no_school_system: {
				name: "No School System",
				description: "Sometimes the best schooling is homeschooling.",
				political_appeasement: {
					absolute_monarchy_discontent: 2,
					fascism_discontent: -3,
					constitutional_monarchy_discontent: 6,
					democracy_discontent: 6,
					socialism_discontent: 8,
					communism_discontent: 8
				},
				effects: [
					["stability_modifier", -10],
					["pop_growth_modifier", 0.05],
					["tax_efficiency", 0.15],
					["political_capital_gain", -2],
					["research_efficiency", -0.2],
					["reform_desire_gain", 0.03]
				]
			},
			basic_school_system: {
				name: "Basic School System",
				description: "By giving our nation's children at least basic literacy skills, we can ensure a more competent workforce in the future.",
				political_appeasement: {
					absolute_monarchy_discontent: -1,
					fascism_discontent: -1,
					constitutional_monarchy_discontent: 5,
					democracy_discontent: 4,
					socialism_discontent: 7,
					communism_discontent: 7
				},
				effects: [
					["stability_modifier", -5],
					["pop_growth_modifier", 0.04],
					["tax_efficiency", 0.1],
					["political_capital_gain", -1],
					["research_efficiency", -0.15],
					["reform_desire_gain", 0.01]
				]
			},
			acceptable_school_system: {
				name: "Acceptable School System",
				description: "An acceptable school system will teach our children at least primary education and ensure a basic academic base to build our future research prospects off of.",
				political_appeasement: {
					absolute_monarchy_discontent: 1,
					fascism_discontent: 2,
					constitutional_monarchy_discontent: 1,
					democracy_discontent: 0,
					socialism_discontent: 3,
					communism_discontent: 4
				},
				effects: [
					["pop_growth_modifier", 0.03],
					["tax_efficiency", 0.05],
					["research_efficiency", -0.06]
				]
			},
			good_school_system: {
				name: "Good School System",
				description: "A good school system will not only allow for secondary education for our students, but will also ensure that they can be taught to love our government and support our country ... for some monetary cost, of course.",
				political_appeasement: {
					absolute_monarchy_discontent: 3,
					fascism_discontent: 3,
					constitutional_monarchy_discontent: -2,
					democracy_discontent: -3,
					socialism_discontent: 2,
					communism_discontent: 2
				},
				effects: [
					["stability_modifier", 5],
					["tax_efficiency", -0.05],
					["political_capital_gain", 1],
					["research_efficiency", 0.05]
				]
			},
			mandatory_schooling: {
				name: "Mandatory Schooling",
				description: "Mandatory schooling will forcibly place our nation's children into a learning environment where we can instill in them values and ideals that reflect those of our nation, and with post-secondary education being made available, a good scientific base to build off of.",
				political_appeasement: {
					absolute_monarchy_discontent: 8,
					fascism_discontent: 5,
					constitutional_monarchy_discontent: -5,
					democracy_discontent: 2,
					socialism_discontent: -8,
					communism_discontent: -8
				},
				effects: [
					["stability_modifier", 10],
					["tax_efficiency", -0.1],
					["production_efficiency", 0.05],
					["political_capital_gain", 3],
					["pop_growth_modifier", -0.05],
					["research_efficiency", 0.2]
				]
			}
		},
		penal_system: {
			name: "Penal System",
			capital_punishment: {
				name: "Capital Punishment",
				description: "Although some citizens may call it the 'Bloody Code', capital punishment for even the lightest of crimes is the only surefire way to prevent crime from breeding.",
				political_appeasement: {
					absolute_monarchy_discontent: -8,
					fascism_discontent: -8,
					constitutional_monarchy_discontent: -4,
					democracy_discontent: -3,
					socialism_discontent: 4,
					communism_discontent: 3
				},
				effects: [
					["stability_modifier", 5],
					["reform_desire_gain", 0.1],
					["training_cost", -0.05],
					["pop_growth_modifier", -0.03],
					["infamy_loss", 0.02]
				]
			},
			penal_labour: {
				name: "Penal Labour",
				description: "In order to rehabilitate our prisoners back to society, we shall place them in forced work camps, where they shall contribute towards making valuable products that our society wants and needs.",
				political_appeasement: {
					absolute_monarchy_discontent: -8,
					fascism_discontent: -6,
					constitutional_monarchy_discontent: 2,
					democracy_discontent: 1,
					socialism_discontent: 3,
					communism_discontent: 3
				},
				effects: [
					["stability_modifier", 3],
					["reform_desire_gain", 0.05],
					["training_cost", -0.02],
					["pop_growth_modifier", -0.02],
					["infamy_loss", 0.01]
				]
			},
			incarceration: {
				name: "Incarceration",
				description: "Simply arresting individuals and throwing them in gaols and prisons is more than enough to stop any wave of crime.",
				political_appeasement: {
					absolute_monarchy_discontent: -2,
					fascism_discontent: -3,
					constitutional_monarchy_discontent: 0,
					democracy_discontent: 0,
					socialism_discontent: 2,
					communism_discontent: 2
				},
				effects: [
					["reform_desire_gain", 0.02],
					["training_cost", -0.02]
				]
			},
			rehabilitation: {
				name: "Rehabilitation",
				description: "By rehabilitating our prisoners, we may be able to reintroduce them back into society, and thereby, the workforce, at a later date when they are deemed safe for release.",
				political_appeasement: {
					absolute_monarchy_discontent: 2,
					fascism_discontent: 1,
					constitutional_monarchy_discontent: 0,
					democracy_discontent: 0,
					socialism_discontent: -5,
					communism_discontent: -5
				},
				effects: [
					["stability_modifier", -5],
					["reform_desire_gain", -0.02],
					["training_cost", 0.05],
					["pop_growth_modifier", 0.04],
					["tax_efficiency", 0.03],
					["infamy_loss", -0.02]
				]
			}
		},
		political_parties: {
			name: "Political Parties",
			only_underground: {
				name: "Only Underground",
				description: "We shall take every opportunity to crack down on political dissent and impose a one-party state.",
				political_appeasement: {
					absolute_monarchy_discontent: -5,
					fascism_discontent: -10,
					constitutional_monarchy_discontent: 10,
					democracy_discontent: 8,
					socialism_discontent: 9,
					communism_discontent: -8
				},
				effects: [
					["stability_modifier", 10],
					["reform_desire_gain", 0.05],
					["political_capital_gain", 5]
				]
			},
			harassment: {
				name: "Harassment",
				description: "As domestic and international criticism begins to ramp up, we recognise that it may be necessary to implement some new reforms, although we'll be sure to keep the opposition on a short leash still.",
				political_appeasement: {
					absolute_monarchy_discontent: -3,
					fascism_discontent: -5,
					constitutional_monarchy_discontent: 8,
					democracy_discontent: 7,
					socialism_discontent: 8,
					communism_discontent: -5
				},
				effects: [
					["stability_modifier", 5]
					["reform_desire_gain", 0.03],
					["political_capital_gain", 3]
				]
			},
			gerrymandering: {
				name: "Gerrymandering",
				description: "'Can we have some more funds for redistricting maps, please?'",
				political_appeasement: {
					absolute_monarchy_discontent: -1,
					fascism_discontent: -2,
					constitutional_monarchy_discontent: 5,
					democracy_discontent: 6,
					socialism_discontent: 7,
					communism_discontent: -3
				},
				effects: [
					["reform_desire_gain", 0.02],
					["political_capital_gain", 2]
				]
			},
			non_secret_ballots: {
				name: "Non-Secret Ballots",
				description: "They're secret, just an open secret! Oh, and we're taking notes by the way ...",
				political_appeasement: {
					absolute_monarchy_discontent: 1,
					fascism_discontent: 0,
					constitutional_monarchy_discontent: 3,
					democracy_discontent: 4,
					socialism_discontent: 5,
					communism_discontent: -1
				},
				effects: [
					["stability_modifier", -5],
					["reform_desire_gain", 0.01],
					["political_capital_gain", 1]
				]
			},
			secret_ballots: {
				name: "Secret Ballots",
				description: "We can only have a free and fair democracy by ensuring that each of our voters are able to vote securely and therefore for the candidate that they feel will serve their job best.",
				political_appeasement: {
					absolute_monarchy_discontent: 3,
					fascism_discontent: 4,
					constitutional_monarchy_discontent: -7,
					democracy_discontent: -6,
					socialism_discontent: -3,
					communism_discontent: 5
				},
				effects: [
					["stability_modifier", -10],
					["reform_desire_gain", -0.02],
					["political_capital_gain", -1],
					["constitutional_monarchy", 3],
					["democracy", 3],
					["socialism", 2]
				]
			}
		},
		upper_house: {
			name: "Upper House",
			ruling_party_only: {
				name: "Ruling Party Only",
				description: "Why have an upper house when you can simply be a dictatorship?",
				political_appeasement: {
					absolute_monarchy_discontent: -8,
					fascism_discontent: -10,
					constitutional_monarchy_discontent: 8,
					democracy_discontent: 8,
					socialism_discontent: 5,
					communism_discontent: -10
				},
				effects: [
					["stability_modifier", 15],
					["reform_desire_gain", 0.05],
					["political_capital_gain", 5]
				]
			},
			appointed: {
				name: "Appointed",
				description: "By simply appointing the upper house of our legislature, we can ensure that only the Acts which suit our own interest pass Parliament.",
				political_appeasement: {
					absolute_monarchy_discontent: -3,
					fascism_discontent: -2,
					constitutional_monarchy_discontent: 4,
					democracy_discontent: 7,
					socialism_discontent: 5,
					communism_discontent: -2
				},
				effects: [
					["stability_modifier", 10],
					["reform_desire_gain", 0.03],
					["political_capital_gain", 3],
					["constitutional_monarchy", 2]
				]
			},
			two_per_state: {
				name: "Two Per State",
				description: "We can prevent the inevitable outcome of the 'tyranny of the majority' in a completely democratic society by giving each state an equal say.",
				political_appeasement: {
					absolute_monarchy_discontent: 3,
					fascism_discontent: 2,
					constitutional_monarchy_discontent: 2,
					democracy_discontent: -3,
					socialism_discontent: 2,
					communism_discontent: 3
				},
				effects: [
					["stability_modifier", 5],
					["reform_desire_gain", 0.01],
					["political_capital_gain", 1],
					["democracy", 3]
				]
			},
			based_on_population: {
				name: "Based on Population",
				description: "Although many on the right are against this proposal, our government believes that only votes based on population will ensure a fair result.",
				political_appeasement: {
					absolute_monarchy_discontent: 5,
					fascism_discontent: 4,
					constitutional_monarchy_discontent: -5,
					democracy_discontent: -2,
					socialism_discontent: -3,
					communism_discontent: 4
				},
				effects: [
					["stability_modifier", -5],
					["reform_desire_gain", -0.01],
					["political_capital_gain", -1],
					["constitutional_monarchy", 3],
					["democracy", 2],
					["socialism", 1]
				]
			}
		},
		conscription: {
			name: "Conscription",
			service_by_requirement: {
				name: "Service by Requirement",
				description: "The only sure way to maximise our manpower is service by requirement, although people may choose to emigrate instead, and all the training is sucking our coffers dry.",
				political_appeasement: {
					absolute_monarchy_discontent: -5,
					fascism_discontent: -15,
					constitutional_monarchy_discontent: 5,
					democracy_discontent: 5,
					socialism_discontent: 7,
					communism_discontent: -5
				},
				effects: [
					["stability_modifier", 5],
					["national_manpower", 0.2],
					["training_cost", -0.2],
					["tax_efficiency", -0.1],
					["pop_growth_modifier", -0.02],
					["political_capital_gain", 1],
					["mobilisation_speed", -0.15],
					["mobilisation_impact", -0.5],
					["mobilisation_size", 1],
					["fascism", 1],
					["absolute_monarchy", 1]
				]
			},
			four_year_draft: {
				name: "Four Year Draft",
				description: "By implementing a four year draft, we can help alleviate the training costs when it finally comes time to mobilise our population for the war effort.",
				political_appeasement: {
					absolute_monarchy_discontent: -3,
					fascism_discontent: -12,
					constitutional_monarchy_discontent: 4,
					democracy_discontent: 4,
					socialism_discontent: 6,
					communism_discontent: -3
				},
				effects: [
					["stability_modifier", 3],
					["national_manpower", 0.15],
					["training_cost", -0.2],
					["tax_efficiency", -0.05],
					["pop_growth_modifier", -0.02],
					["mobilisation_speed", -0.10],
					["mobilisation_impact", -0.35],
					["mobilisation_size", 0.8],
					["fascism", 1],
					["absolute_monarchy", 1]
				]
			},
			two_year_draft: {
				name: "Two Year Draft",
				description: "A two year draft will help ensure at least basic training for all males of fighting age in our country at reduced cost.",
				political_appeasement: {
					absolute_monarchy_discontent: -3,
					fascism_discontent: -6,
					constitutional_monarchy_discontent: 3,
					democracy_discontent: 3,
					socialism_discontent: 5,
					communism_discontent: -3
				},
				effects: [
					["stability_modifier", 1],
					["national_manpower", 0.1],
					["training_cost", -0.15],
					["tax_efficiency", -0.03],
					["pop_growth_modifier", -0.01],
					["mobilisation_speed", -0.05],
					["mobilisation_impact", -0.2],
					["mobilisation_size", 0.5],
					["fascism", 1],
					["absolute_monarchy", 1]
				]
			},
			one_year_draft: {
				name: "One Year Draft",
				description: "A one year draft, whilst not enough for advanced military training, will help reduce future training costs somewhat whilst keeping expenditures and draft dodging minimal.",
				political_appeasement: {
					absolute_monarchy_discontent: -1,
					fascism_discontent: -2,
					constitutional_monarchy_discontent: 2,
					democracy_discontent: 2,
					socialism_discontent: 4,
					communism_discontent: -1
				},
				effects: [
					["national_manpower", 0.1],
					["training_cost", -0.1],
					["tax_efficiency", -0.01],
					["pop_growth_modifier", -0.01],
					["mobilisation_speed", -0.02],
					["mobilisation_impact", -0.05],
					["mobilisation_size", 0.2]
				]
			},
			no_draft: {
				name: "No Draft",
				description: "Whilst not having a draft implemented in our nation is sure to drive down draft dodging, concerns are growing over whether it could lead to pacifism running rampant amongst our populace.",
				political_appeasement: {
					absolute_monarchy_discontent: 3,
					fascism_discontent: 0,
					constitutional_monarchy_discontent: -3,
					democracy_discontent: -3,
					socialism_discontent: -4,
					communism_discontent: 0
				},
				effects: [
					["tax_efficiency", 0.05],
					["national_manpower", -0.05],
					["pop_growth_modifier", 0.05],
					["political_capital_gain", -1],
					["mobilisation_speed", 0.1],
					["infamy_loss", -0.05],
					["democracy", 1],
					["constitutional_monarchy", 1],
					["socialism", 2]
				]
			}
		},
		trade_unions: {
			name: "Trade Unions",
			illegal: {
				name: "Illegal",
				description: "Our factory owners and businessmen could do better without the Red Hydra lurking around the corners ready to threaten them with strikes for not raising wages to ludicrous levels.",
				political_appeasement: {
					absolute_monarchy_discontent: -4,
					fascism_discontent: -5,
					constitutional_monarchy_discontent: -2,
					democracy_discontent: -1,
					socialism_discontent: 8,
					communism_discontent: 8
				},
				effects: [
					["stability_modifier", -5],
					["tax_efficiency", 0.05],
					["rgo_throughput", 0.02],
					["production_efficiency", 0.1],
					["political_capital_gain", 2],
					["extra_building_slots", 3],
					["reform_desire_gain", 0.03]
				]
			},
			guilds: {
				name: "Guilds",
				description: "Although we should allow some organised labour, further concessions to the unions could lead to more strikes and unrest across our country. 'Give them an inch, and they want a mile'.",
				political_appeasement: {
					absolute_monarchy_discontent: -3,
					fascism_discontent: -4,
					constitutional_monarchy_discontent: -1,
					democracy_discontent: -1,
					socialism_discontent: 6,
					communism_discontent: 7
				},
				effects: [
					["stability_modifier", -2],
					["tax_efficiency", 0.03],
					["rgo_throughput", 0.01],
					["production_efficiency", 0.05],
					["political_capital_gain", 1],
					["extra_building_slots", 2],
					["reform_desire_gain", 0.02]
				]
			},
			state_controlled: {
				name: "State Controlled",
				description: "State-controlled unions are a good way to make sure that unions stay friendly and don't strike during times critical to our nation. Or so the line of reasoning goes.",
				political_appeasement: {
					absolute_monarchy_discontent: -4,
					fascism_discontent: -6,
					constitutional_monarchy_discontent: 1,
					democracy_discontent: 0,
					socialism_discontent: 5,
					communism_discontent: 5
				},
				effects: [
					["stability_modifier", 5],
					["tax_efficiency", 0.05],
					["rgo_throughput", 0.1],
					["production_efficiency", 0.1],
					["political_capital_gain", 2],
					["extra_building_slots", 2],
					["reform_desire_gain", 0.04]
				]
			},
			non_socialist_allowed: {
				name: "Non-Socialist Allowed",
				description: "If we strike before the Red Hydra can grow its first head, we won't have to worry about the rest.",
				political_appeasement: {
					absolute_monarchy_discontent: 2,
					fascism_discontent: 3,
					constitutional_monarchy_discontent: 1,
					democracy_discontent: 0,
					socialism_discontent: 4,
					communism_discontent: 5
				},
				effects: [
					["stability_modifier", -5],
					["tax_efficiency", -0.05],
					["rgo_throughput", -0.05],
					["production_efficiency", 0.1],
					["political_capital_gain", 1],
					["extra_building_slots", 1],
					["reform_desire_gain", 0.01]
				]
			},
			all_allowed: {
				name: "All Allowed",
				description: "Organised labour should have a seat at the table, and militia should not be sent in to machine gun down strikers as violence involving socialist trade unions has recently come to a head.",
				political_appeasement: {
					absolute_monarchy_discontent: 5,
					fascism_discontent: 8,
					constitutional_monarchy_discontent: 1,
					democracy_discontent: 2,
					socialism_discontent: -9,
					communism_discontent: -10
				},
				effects: [
					["stability_modifier", -10],
					["tax_efficiency", -0.1],
					["rgo_throughput", -0.1],
					["production_efficiency", -0.05],
					["political_capital_gain", 1],
					["extra_building_slots", 5],
					["reform_desire_gain", -0.05],
					["socialism", 2],
					["communism", 2]
				]
			}
		},
		vote_franchise: {
			name: "Vote Franchise",
			no_voting: {
				name: "No Voting",
				description: "Why have a democracy?",
				political_appeasement: {
					absolute_monarchy_discontent: -10,
					fascism_discontent: -10,
					constitutional_monarchy_discontent: 7,
					democracy_discontent: 8,
					socialism_discontent: 6,
					communism_discontent: -10
				},
				effects: [
					["stability_modifier", 5],
					["political_capital_gain", 2],
					["army_upkeep", 0.05],
					["reform_desire_gain", 0.05],
					["infamy_loss", 0.04],
					["absolute_monarchy", 1],
					["fascism", 1],
					["communism", 1]
				]
			},
			only_landed: {
				name: "Only Landed",
				description: "We should make it so that only the landed gentry and those of high intelligence in our country are allowed to vote, as the common people simply can't be trusted to elect their own leaders.",
				political_appeasement: {
					absolute_monarchy_discontent: -8,
					fascism_discontent: -3,
					constitutional_monarchy_discontent: 5,
					democracy_discontent: 7,
					socialism_discontent: 5,
					communism_discontent: -7
				},
				effects: [
					["stability_modifier", 2],
					["political_capital_gain", 1],
					["reform_desire_gain", 0.04],
					["infamy_loss", 0.03],
					["absolute_monarchy", 1],
					["constitutional_monarchy", 1]
				]
			},
			weighted_wealth: {
				name: "Weighted Wealth",
				description: "Only those who own land and are of the majority ethnicity should be allowed to vote in this country, and greater emphasis should be placed on the aristocracy.",
				political_appeasement: {
					absolute_monarchy_discontent: -6,
					fascism_discontent: -1,
					constitutional_monarchy_discontent: 4,
					democracy_discontent: 5,
					socialism_discontent: 4,
					communism_discontent: -3
				},
				effects: [
					["stability_modifier", 3],
					["political_capital_gain", 1],
					["reform_desire_gain", 0.05],
					["infamy_loss", 0.02],
					["absolute_monarchy", 1],
					["constitutional_monarchy", 1],
					["democracy", 1]
				]
			},
			wealth: {
				name: "Wealth",
				description: "Any landowing gentleman in this realm should be given the vote.",
				political_appeasement: {
					absolute_monarchy_discontent: -5,
					fascism_discontent: 0,
					constitutional_monarchy_discontent: 2,
					democracy_discontent: 3,
					socialism_discontent: 3,
					communism_discontent: -5
				},
				effects: [
					["stability_modifier", 1],
					["reform_desire_gain", 0.03],
					["tax_efficiency", 0.05],
					["absolute_monarchy", 1],
					["constitutional_monarchy", 1],
					["democracy", 2]
				]
			},
			weighted_universal: {
				name: "Weighted Universal",
				description: "Although everyone should be given the vote, it might be wise to balance out our country's electoral system with an electoral college to make sure that everyone's views are represented.",
				political_appeasement: {
					absolute_monarchy_discontent: 5,
					fascism_discontent: 4,
					constitutional_monarchy_discontent: 0,
					democracy_discontent: 0,
					socialism_discontent: 2,
					communism_discontent: 4
				},
				effects: [
					["reform_desire_gain", -0.01],
					["tax_efficiency", 0.07],
					["absolute_monarchy", 1],
					["constitutional_monarchy", 2],
					["democracy", 4],
					["socialism", 1]
				]
			},
			universal: {
				name: "Universal",
				description: "One man, one vote.",
				political_appeasement: {
					absolute_monarchy_discontent: 5,
					fascism_discontent: 4,
					constitutional_monarchy_discontent: 0,
					democracy_discontent: 0,
					socialism_discontent: 2,
					communism_discontent: 4
				},
				effects: [
					["stability_modifier", -5],
					["reform_desire_gain", -0.04],
					["infamy_loss", -0.05],
					["tax_efficiency", 0.1],
					["constitutional_monarchy", 2],
					["democracy", 5],
					["socialism", 2]
				]
			}
		},
		slavery: {
			name: "Slavery",
			upheld: {
				name: "Upheld",
				description: "Everyone knows that slavery is necessary for the continued existence of our state, and not only is it necessary, but it is the ethical choice to make, as anyone who's ever read the Curse of Ham would know.",
				political_appeasement: {
					absolute_monarchy_discontent: -2,
					fascism_discontent: -9,
					constitutional_monarchy_discontent: 5,
					democracy_discontent: 4,
					socialism_discontent: 8,
					communism_discontent: 10
				},
				effects: [
					["stability_modifier", -5],
					["reform_desire_gain", 0.1],
					["infamy_loss", 0.02],
					["tax_efficiency", 0.1],
					["production_efficiency", 0.15],
					["rgo_throughput", 0.1],
					["national_manpower", -0.1],
					["building_cost", -0.2],
					["research_efficiency", -0.2]
				]
			},
			allowed: {
				name: "Allowed",
				description: "Whilst we won't go as far as to openly promote the morality of slavery, we will simply allow it in order to allow the continuation of the flow of raw resources to our industry, no matter the cost.",
				political_appeasement: {
					absolute_monarchy_discontent: -1,
					fascism_discontent: -8,
					constitutional_monarchy_discontent: 4,
					democracy_discontent: 5,
					socialism_discontent: 7,
					communism_discontent: 9
				},
				effects: [
					["stability_modifier", -8],
					["reform_desire_gain", 0.12],
					["tax_efficiency", 0.08],
					["production_efficiency", 0.15],
					["rgo_throughput", 0.1],
					["national_manpower", -0.1],
					["building_cost", -0.15],
					["research_efficiency", -0.15]
				]
			},
			freedom_of_womb: {
				name: "Freedom of Womb",
				description: "As slavery leaves a moral mark on our society, we should seek to phase it out gradually to ensure that the slaveholders in our country don't get too upset ...",
				political_appeasement: {
					absolute_monarchy_discontent: 1,
					fascism_discontent: 3,
					constitutional_monarchy_discontent: 3,
					democracy_discontent: 3,
					socialism_discontent: 6,
					communism_discontent: 8
				},
				effects: [
					["stability_modifier", -5],
					["reform_desire_gain", 0.05],
					["tax_efficiency", 0.05],
					["production_efficiency", 0.1],
					["rgo_throughput", 0.1],
					["national_manpower", -0.05],
					["building_cost", -0.1],
					["research_efficiency", -0.1]
				]
			},
			partial_abolition: {
				name: "Partial Abolition",
				description: "Partial abolition refers to the plan by which we will gradually phase out slavery in this country and transition to a free society.",
				political_appeasement: {
					absolute_monarchy_discontent: 3,
					fascism_discontent: 5,
					constitutional_monarchy_discontent: 1,
					democracy_discontent: 1,
					socialism_discontent: 4,
					communism_discontent: 6
				},
				effects: [
					["reform_desire_gain", 0.02],
					["tax_efficiency", 0.05],
					["production_efficiency", 0.05],
					["rgo_throughput", 0.05],
					["building_cost", -0.05],
					["research_efficiency", -0.1]
				]
			},
			abolished: {
				name: "Abolished",
				description: "Slavery should be outlawed everywhere. 'Am I not a man and also a brother?'",
				political_appeasement: {
					absolute_monarchy_discontent: 3,
					fascism_discontent: 6,
					constitutional_monarchy_discontent: -3,
					democracy_discontent: -4,
					socialism_discontent: -5,
					communism_discontent: -5
				},
				effects: [
					["national_manpower", 0.1],
					["rgo_throughput", 0.05],
					["research_efficiency", 0.1]
				]
			}
		},
		voting_system: {
			name: "Voting System",
			no_voting_system: {
				name: "No Voting System",
				description: "Dictatorship, trollface.",
				political_appeasement: {
					absolute_monarchy_discontent: -10,
					fascism_discontent: -10,
					constitutional_monarchy_discontent: 5,
					democracy_discontent: 8,
					socialism_discontent: 8,
					communism_discontent: -10
				},
				effects: [
					["stability_modifier", 10],
					["absolute_monarchy", 2],
					["fascism", 2],
					["communism", 2],
					["reform_desire_gain", 0.05]
				]
			},
			first_past_the_post: {
				name: "First Past The Post",
				description: "Reforms to our voting system could greatly change the political landscape of our democracy. First Past the Post, or FPTP, therefore, is the most secure as it is the most widely used.",
				political_appeasement: {
					absolute_monarchy_discontent: 3,
					fascism_discontent: 5,
					constitutional_monarchy_discontent: -1,
					democracy_discontent: -2,
					socialism_discontent: 3,
					communism_discontent: 5
				},
				effects: [
					["stability_modifier", 5],
					["reform_desire_gain", 0.01],
					["democracy", 5],
					["constitutional_monarchy", 4],
					["socialism", 1]
				]
			},
			jefferson_method: {
				name: "Jefferson Method",
				description: "By weighting our voting methods, we can ensure that seats to our Lower House are fairly allocated amongst our states.",
				political_appeasement: {
					absolute_monarchy_discontent: 5,
					fascism_discontent: 6,
					constitutional_monarchy_discontent: 1,
					democracy_discontent: -4,
					socialism_discontent: 2,
					communism_discontent: 5
				},
				effects: [
					["reform_desire_gain", -0.01],
					["democracy", 6],
					["constitutional_monarchy", 4],
					["socialism", 1]
				]
			},
			proportional_representation: {
				name: "Proportional Representation",
				description: "Via proportional representation, we can ensure a wealth and diversity of opinions amongst the enfranchised, if at least nothing else, which can help improve our governmental stability and decrease cynicism.",
				political_appeasement: {
					absolute_monarchy_discontent: 6,
					fascism_discontent: 6,
					constitutional_monarchy_discontent: -2,
					democracy_discontent: -5,
					socialism_discontent: -2,
					communism_discontent: 6
				},
				effects: [
					["political_capital_gain", 4],
					["reform_desire_gain", -0.03],
					["democracy", 8],
					["constitutional_monarchy", 5],
					["socialism", 3]
				]
			}
		},
		public_meetings: {
			name: "Public Meetings",
			meetings_not_allowed: {
				name: "Meetings Not Allowed",
				description: "Although freedom of assembly might sure sound nice, few contemplate the potential loss of stability that our state could suffer from implementing it, and fewer still the administrative burden that it would place amongst our governors. Therefore, we should restrict it.",
				political_appeasement: {
					absolute_monarchy_discontent: -7,
					fascism_discontent: -5,
					constitutional_monarchy_discontent: 5,
					democracy_discontent: 4,
					socialism_discontent: 6,
					communism_discontent: 5
				},
				effects: [
					["political_capital_gain", 3],
					["stability_modifier", 10],
					["reform_desire_gain", 0.05],
					["production_efficiency", 0.05],
					["rgo_throughput", 0.05],
					["training_cost", 0.1]
				]
			},
			some_meetings_tolerated: {
				name: "Some Meetings Tolerated",
				description: "As the number of unsanctioned and thereby illegal protests grow, we might be forced to tolerate some of the larger ones, as a brutal massacre would rile the population against us.",
				political_appeasement: {
					absolute_monarchy_discontent: -4,
					fascism_discontent: 1,
					constitutional_monarchy_discontent: 4,
					democracy_discontent: 3,
					socialism_discontent: 5,
					communism_discontent: 5
				},
				effects: [
					["political_capital_gain", 1],
					["stability_modifier", -5],
					["reform_desire_gain", 0.07],
					["production_efficiency", 0.02],
					["rgo_throughput", 0.03],
					["training_cost", 0.15]
				]
			},
			meetings_allowed: {
				name: "Meetings Allowed",
				description: "In order to maintain a truly democratic society, we must allow freedom of assembly in public in order to safeguard our freedoms and ensure that each of our citizens has a voice.",
				political_appeasement: {
					absolute_monarchy_discontent: 1,
					fascism_discontent: 2,
					constitutional_monarchy_discontent: -4,
					democracy_discontent: -6,
					socialism_discontent: -5,
					communism_discontent: 7
				},
				effects: [
					["reform_desire_gain", 0.02],
					["production_efficiency", -0.05],
					["rgo_throughput", -0.02],
					["democracy", 3],
					["constitutional_monarchy", 3],
					["socialism", 1]
				]
			}
		},
		child_labour: {
			name: "Child Labour",
			child_labour_encouraged: {
				name: "Child Labour Encouraged",
				description: "By encouraging our children to work in the factories, we can instill in them a valuable work ethic that will surely be of great use to us in the future ... although some of them will inevitably be injured in the process.",
				political_appeasement: {
					absolute_monarchy_discontent: 1,
					fascism_discontent: -2,
					constitutional_monarchy_discontent: 4,
					democracy_discontent: 4,
					socialism_discontent: 5,
					communism_discontent: 4
				},
				effects: [
					["stability_modifier", -5],
					["reform_desire_gain", 0.03],
					["tax_efficiency", 0.05],
					["production_efficiency", 0.05],
					["building_cost", -0.05],
					["training_cost", -0.05],
					["pop_growth_modifier", -0.05],
					["research_efficiency", -0.05]
				]
			},
			child_labour_legal: {
				name: "Child Labour Legal",
				description: "Although the moral efficacy of using child labour might be questionable, it sure is a boon to our businesses, and so we should only socially encourage parents to withdraw their children from unsafe working conditions.",
				political_appeasement: {
					absolute_monarchy_discontent: -2,
					fascism_discontent: -1,
					constitutional_monarchy_discontent: 3,
					democracy_discontent: 3,
					socialism_discontent: 4,
					communism_discontent: 3
				},
				effects: [
					["stability_modifier", -2],
					["reform_desire_gain", 0.02],
					["tax_efficiency", 0.06],
					["production_efficiency", 0.04],
					["building_cost", -0.03],
					["training_cost", -0.03],
					["pop_growth_modifier", -0.02],
					["research_efficiency", -0.04]
				]
			},
			child_labour_discouraged: {
				name: "Child Labour Discouraged",
				description: "It might also be wise to start public information campaigns about the dangers of child labour in order to prevent even more parents from sending their children to the mills where they could be injured or worse in an effort to preserve our population, even with the maluses it may come with.",
				political_appeasement: {
					absolute_monarchy_discontent: -2,
					fascism_discontent: -1,
					constitutional_monarchy_discontent: 3,
					democracy_discontent: 3,
					socialism_discontent: 4,
					communism_discontent: 3
				},
				effects: [
					["stability_modifier", -5],
					["reform_desire_gain", 0.03],
					["tax_efficiency", 0.03],
					["production_efficiency", 0.02],
					["research_efficiency", -0.04],
					["national_manpower", 0.02]
				]
			},
			child_labour_restricted: {
				name: "Child Labour Restricted",
				description: "By beginning to restrict child labour only to 'safe jobs', we can help reduce the epidemic of maiming and lost limbs that abound amongst our young.",
				political_appeasement: {
					absolute_monarchy_discontent: 3,
					fascism_discontent: 1,
					constitutional_monarchy_discontent: -1,
					democracy_discontent: -1,
					socialism_discontent: 3,
					communism_discontent: 2
				},
				effects: [
					["stability_modifier", 5],
					["reform_desire_gain", 0.01],
					["tax_efficiency", 0.01],
					["production_efficiency", 0.02],
					["research_efficiency", -0.03],
					["pop_growth_modifier", 0.01],
					["national_manpower", 0.05]
				]
			},
			child_labour_illegal: {
				name: "Child Labour Illegal",
				description: "Criminalising the usage of child labour, whilst damaging for our economy in the short term, could provide a population and academic base to build off of when combined with mandatory schooling.",
				political_appeasement: {
					absolute_monarchy_discontent: 4,
					fascism_discontent: 2,
					constitutional_monarchy_discontent: -3,
					democracy_discontent: -2,
					socialism_discontent: -3,
					communism_discontent: -4
				},
				effects: [
					["stability_modifier", 7],
					["research_efficiency", 0.1],
					["pop_growth_modifier", 0.05],
					["national_manpower", 0.07]
				]
			}
		},
		bureaucracy: {
			name: "Bureaucracy",
			gentry: {
				name: "Gentry",
				description: "By restricting our bureaucratic positions to aristocrats only, we can ensure that an entire category of men are raised to adulthood with the sole purpose of serving as competent administrators.",
				political_appeasement: {
					absolute_monarchy_discontent: -15,
					fascism_discontent: 3,
					constitutional_monarchy_discontent: -3,
					democracy_discontent: 5,
					socialism_discontent: 8,
					communism_discontent: 10
				},
				effects: [
					["stability_modifier", 5],
					["reform_desire_gain", 0.05],
					["tax_efficiency", 0.1],
					["political_capital_gain", 3],
					["army_upkeep", 0.05],
					["building_cost", -0.05],
					["training_cost", 0.02],
					["research_efficiency", -0.05]
				]
			},
			hereditary_bureaucracy: {
				name: "Hereditary Bureaucracy",
				description: "Although our bureaucracy may theoretically be open to anyone, in reality, it is comprised out of the descendants of noble families and those lucky enough to have passed the exams required to become an administrator.",
				political_appeasement: {
					absolute_monarchy_discontent: -12,
					fascism_discontent: 2,
					constitutional_monarchy_discontent: -1,
					democracy_discontent: 4,
					socialism_discontent: 6,
					communism_discontent: 8
				},
				effects: [
					["stability_modifier", 3],
					["reform_desire_gain", 0.03],
					["tax_efficiency", -0.05],
					["political_capital_gain", 3],
					["army_upkeep", -0.02],
					["building_cost", 0.05],
					["training_cost", 0.02],
					["research_efficiency", -0.05]
				]
			},
			professional_civil_servants: {
				name: "Professional Civil Servants",
				description: "Professional civil servants are the backbone that lie underneath any great modern state, and should form the backbone of ours too, if we are to create a truly competent bureaucracy.",
				political_appeasement: {
					absolute_monarchy_discontent: 2,
					fascism_discontent: 3,
					constitutional_monarchy_discontent: -5,
					democracy_discontent: -4,
					socialism_discontent: -8,
					communism_discontent: -8
				},
				effects: [
					["stability_modifier", -5],
					["reform_desire_gain", -0.02],
					["tax_efficiency", 0.1],
					["political_capital_gain", 5],
					["army_upkeep", -0.05],
					["building_cost", -0.05],
					["training_cost", -0.02],
					["research_efficiency", 0.15]
				]
			}
		},
		political_rights: {
			name: "Political Rights",
			restricted_rights: {
				name: "Restricted Rights",
				description: "Political rights are best in small doses. And I mean small, alright.",
				political_appeasement: {
					absolute_monarchy_discontent: -5,
					fascism_discontent: -4,
					constitutional_monarchy_discontent: 2,
					democracy_discontent: 5,
					socialism_discontent: 4,
					communism_discontent: -3
				},
				effects: [
					["stability_modifier", 5],
					["political_capital_gain", 1],
					["reform_desire_gain", 0.02],
					["national_manpower", -0.05],
					["training_cost", 0.05],
					["unit_cost", 0.05],
					["extra_building_slots", -1]
				]
			},
			cultural_rights: {
				name: "Cultural Rights",
				description: "By enshrining the rights of at least some cultural minorities in our country, we may be able to ensure long-term stability and draw those not of our primary culture to our side, if nothing else.",
				political_appeasement: {
					absolute_monarchy_discontent: -3,
					fascism_discontent: 1,
					constitutional_monarchy_discontent: -2,
					democracy_discontent: -3,
					socialism_discontent: 3,
					communism_discontent: -3
				},
				effects: [
					["stability_modifier", 7],
					["political_capital_gain", 2],
					["reform_desire_gain", -0.05],
					["national_manpower", -0.02],
					["training_cost", 0.02],
					["unit_cost", 0.02],
					["extra_building_slots", 1]
				]
			},
			all_allowed_rights: {
				name: "All Allowed Rights",
				description: "All of our citizens shall be equal in this country, and enshrining that view point in none other than the public consciousness will help to solidify our nation's varicose reputation as a melting pot of cultures.",
				political_appeasement: {
					absolute_monarchy_discontent: 1,
					fascism_discontent: 5,
					constitutional_monarchy_discontent: -5,
					democracy_discontent: -4,
					socialism_discontent: -6,
					communism_discontent: -1
				},
				effects: [
					["stability_modifier", 10],
					["political_capital_gain", 3],
					["reform_desire_gain", -0.1],
					["national_manpower", 0.05],
					["training_cost", 0.05],
					["unit_cost", 0.05],
					["extra_building_slots", 3]
				]
			}
		},
		lgbtqia_rights: {
			name: "LGBTQIA Rights",
			outlawed: {
				name: "Outlawed",
				description: "'Also, you're gay, and they're homophobic, so ...'\n'Firstly, I'm not gay'.\n'Yes, you are'.",
				political_appeasement: {
					absolute_monarchy_discontent: -5,
					fascism_discontent: -7,
					constitutional_monarchy_discontent: 4,
					democracy_discontent: 6,
					socialism_discontent: 6,
					communism_discontent: 2
				},
				effects: [
					["stability_modifier", 5],
					["reform_desire_gain", 0.02],
					["national_manpower", -0.05],
					["infamy_loss", -0.01],
					["constitutional_monarchy", 1],
					["fascism", 1]
				]
			},
			decriminalised: {
				name: "Decriminalised",
				description: "'Well, we've stopped throwing the gays in prison, which has got to be progress, right?'\n* Ugandan telly plays in background *",
				political_appeasement: {
					absolute_monarchy_discontent: -3,
					fascism_discontent: -3,
					constitutional_monarchy_discontent: 2,
					democracy_discontent: 2,
					socialism_discontent: 3,
					communism_discontent: 1
				},
				effects: [
					["stability_modifier", -5],
					["reform_desire_gain", 0.01],
					["constitutional_monarchy", 1],
					["democracy", 1],
					["socialism", 1]
				]
			},
			accepted: {
				name: "Accepted",
				description: "'At the end of the day, they're our fellow countrymen, and they're not really any different from any of us - we see no reason to exclude them from military service, and we believe that society should treat them as they would any other person'.",
				political_appeasement: {
					absolute_monarchy_discontent: 5,
					fascism_discontent: 6,
					constitutional_monarchy_discontent: -2,
					democracy_discontent: -4,
					socialism_discontent: -5,
					communism_discontent: 2
				},
				effects: [
					["stability_modifier", 5],
					["reform_desire_gain", -0.01],
					["national_manpower", 0.05],
					["infamy_loss", 0.01],
					["constitutional_monarchy", 1],
					["democracy", 2],
					["socialism", 2]
				]
			}
		},
		press_rights: {
			name: "Press Rights",
			state_press_only: {
				name: "State Press Only",
				description: "You know, it's a real shame private broadcasting networks have a tendency to not accept all our rubbish propaganda. Now, the solution here is obvious: nationalising all of them and merging them into our very own state broadcaster. I'm sure you wouldn't disagree, would you, Minister?",
				political_appeasement: {
					absolute_monarchy_discontent: -4,
					fascism_discontent: -8,
					constitutional_monarchy_discontent: 3,
					democracy_discontent: 4,
					socialism_discontent: 6,
					communism_discontent: -10
				},
				effects: [
					["stability_modifier", 10],
					["reform_desire_gain", -0.05],
					["tax_efficiency", -0.1],
					["research_efficiency", -0.1],
					["building_cost", -0.05],
					["pop_growth_modifier", 0.02],
					["rgo_throughput", 0.05]
				]
			},
			censored_press: {
				name: "Censored Press",
				description: "Although no one likes restrictions, they're necessary to prevent wartime secrets from leaking out, or even critical coverage of our government when we could afford it least. Therefore, some press needs to be censored.",
				political_appeasement: {
					absolute_monarchy_discontent: -3,
					fascism_discontent: -7,
					constitutional_monarchy_discontent: 2,
					democracy_discontent: 3,
					socialism_discontent: 5,
					communism_discontent: -9
				},
				effects: [
					["stability_modifier", 5],
					["reform_desire_gain", -0.03],
					["tax_efficiency", -0.13],
					["research_efficiency", -0.05],
					["building_cost", -0.04],
					["pop_growth_modifier", 0.03],
					["rgo_throughput", 0.04]
				]
			},
			harassed_press: {
				name: "Harassed Press",
				description: "That's just another hit job from the Fake News Media. Ah, here's another beauty ... and besides, no one could even see that 'Press' vest at that protest you were going to. This is the media my opponents want, can you believe it? It's so sad.",
				political_appeasement: {
					absolute_monarchy_discontent: -2,
					fascism_discontent: -3,
					constitutional_monarchy_discontent: 1,
					democracy_discontent: 1,
					socialism_discontent: 4,
					communism_discontent: -2
				},
				effects: [
					["reform_desire_gain", 0.01],
					["research_efficiency", -0.08],
					["building_cost", -0.02],
					["pop_growth_modifier", 0.01],
					["democracy", 2]
				]
			},
			free_press: {
				name: "Free Press",
				description: "Democracy relies on a free and open press to be able to inform voters, not only of geopolitical affairs, but also of affairs in their local constituencies as well.",
				political_appeasement: {
					absolute_monarchy_discontent: 3,
					fascism_discontent: 5,
					constitutional_monarchy_discontent: -1,
					democracy_discontent: -2,
					socialism_discontent: -2,
					communism_discontent: 6
				},
				effects: [
					["reform_desire_gain", 0.03],
					["research_efficiency", 0.1],
					["democracy", 4]
				]
			}
		}
	},
	
	//AI
		//City AI
		conurbation_max_distance: 2, //Maximum distance at which conurbation modifiers take effect
		conurbation_score_per_step: 1, //How much should city matrix scoring decrease per distance from nearest city? (This should create an interesting dynamic)'
		low_worker_count: [0.05, 500000], //At what level is worker pop count considered low? (Percentage of unused_workers remaining and total available worker count, whichever one is higher)
		preferred_city_override: false, //Should preferred cities always be founded by the AI?
		remoteness_max_distance: 10, //Maximum distance at which remoteness modifiers take effect
		remoteness_score_per_step: 1, //How much should city matrix scoring increase per distance from nearest city?
		run_out_of_slots_found_chance: 0.50, //What should the chance of founding a new city be if the AI runs out of building slots for any given building?
		small_city_limit: [2, 5], //[min, max] - How many cities should AI be willing to found if considered small?
		tall_city_limit: [7, 10], //[min-max] - How many cities should AI be willing to found if considered tall?
		wide_city_limit: [12, 18], //.. - What if they're considered wide?
		
		//Colonisation AI
		adjacency_high_count: 8, //What is a high count for adjacencies? (Used in imperial AI)
		adjacency_importance: 1, //How important are adjacenct tiles for colonisation?
		adjacency_importance_turns: 10, //How many turns should adjacency importance last? This is defined by another country settling a province that's within zone_of_interest provinces of a province owned by the other AI
		adajcency_low_count: 2, //What is a low count for adjacencies? (Used in imperial AI)
		attempt_colonisation_even_if_active: false, //Should colonisation be attempted even if someone else is currently colonising the province?
		capital_importance: 3, //This dissipates with provincial range
		expansionism_fraction: 0.25, //This is the percentage of the world map an AI is willing to colonise (logistically dissipates)
		ignore_adjacency_for_capital_distance: 10, //If a local capital is present, how many provinces in terms of distance should adjacency bonuses be negated?
		imperial_adjacency_importance: 2, //How much should randomly generated colonial provinces be affected by adjacencies?
		imperial_importance: 2, //How much should the default value for imperial colonisation be when this AI is activated?
		imperial_ignore_border_distance: 20, //Imperial importance immediately drops to 0 if another nation's capital is within this distance
		max_expansion_willingness: 1.1, //Even if strategic, how far are countries willing to expand past their expansion limits?
		power_importance: 2, //How important are average resources?
		power_importance_turns: 5, //How many turns should power importance last? This is defined by another country having more average resources than the original AI
		preferred_city_importance: 3, //How important are preferred_cities if they're connected by adjacency?
		preferred_colonial_provinces_importance: 2, //How important are preferred colonial provinces if applied?
		preferred_provinces_importance: 2, //How important are 'core' provinces to the AI?
		rival_importance: 3, //Gains additional scoring importance if rival/poor relations
		rival_importance_turns: 15, //How many turns should poor relations/rivalries affect colonisation AI for?
		start_imperialism_at: 1, //What should the maximum 'home province' default value be before AI countries can 'activate' their imperial AI?
		zone_of_interest: 10, //How many tiles away from an adjacent province should an AI country be concerned about?
		
		//Economic AI - Goods
		action_importance: 1, //Modifier based on average goods importance. 1 is average
		cp_importance: 1, //Modifier based on average goods importance. 1 is average
		deficit_importance: 50, //How much more important should a good be if the AI is running a deficit on it?
		housing_importance: 2, //Modifier based on average goods importance. 1 is average
		housing_scale_importance: 100000, //Housing will divide by this number to emulate production
		ignore_surplus_in_market: 0, //After how many turns should surpluses be counted when selling goods for money? Set to 0 to disable
		knowledge_importance: 2, //Modifier based on average goods importance. 1 is average
		lessen_action_consumption: 10, //After how many turns should action consumption be lessened?
		low_cash: 15000, //AI will always attempt to maintain cash above this level if possible
		maximum_good_importance_from_building: 10, //What should the cap-off limit be for importance? (This is to make sure that crazy unit/building prices can't make things too bad)
		maximum_goods_for_selling: 5, //How many goods should the AI sell per turn? (These are automatically taken from the top scoring goods for sale)
		maximum_selling: 0.5, //How much of the AI's market capacity should be used on selling at most?
		split_building_orders: 5, //How many buildings should the AI be allowed to construct at once before splitting buildings up into random orders? (This doesn't apply to building categories with disabled slot arguments)
		surplus_importance: -1, //How much less important should a good be if the AI is running a surplus on it?
	
	//Combat
		//General Combat Defines
		anti_aircraft_base_damage: 10000, //How much AP should each AA gun be worth at the start?
		anti_aircraft_effectiveness: 1, //How effective should ack-ack be by default? This modifies total AP damage outputted by ack-ack gun buildings
		anti_aircraft_fixed_damage: true, //Should ack-ack damage be fixed or scale with the bomber force?
		base_attrition_rate: 0.90, //What should the base attrition rate be? (percentage)
		base_mobilisation_impact: [0.30, 0.25, 0.10], //Hits to [production_efficiency, tax_efficiency, rgo_throughput]
		base_mobilisation_time: 8, //Amount of turns it should take to fully mobilise
		base_mobilisation_size: 0.05, //Default percentage of worker pops mobilised
		base_supply_limit: 40, //How many thousands of soldiers can a colonised province support by default?
		blockade_challenge_limit: 5, //How many times can a fleet challenge a blockade on the same turn?
		combat_order: ["ap", "dp"], //What should the combat order be by default?
		combat_order_switch_tech: "war_of_movement", //What tech should switch the combat order back around?
		infrastructure_range: 5, //What is the radius of provinces that should be affected by constructed infrastructure?
		interception_range: 5, //From how many provinces away should air wings be allowed to intercept other air wings?
		max_army_creation_limit: 100, //How many armies should users be able to create with a single command? Set to 0 to disable
		max_army_limit: 1000, //What is the maximum amount of armies that a user should be allowed to have? Set to 0 to disable
		mobilisation_cooldown: 3, //Amount of turns before a person can mobilise/demobilise again
		mobilise_unit: "none", //Default unit for mobilisation
		peacetime_mobilisation_penalty: 0.5, //What should the penalty for peacetime mobilisation be (in infamy)?
		war_exhaustion_blockade_limit: 20, //What should be the maximum warscore penalty for being blockaded?
		war_exhaustion_blockade_rate: 5, //How fast should war exhaustion tick up if user is blockaded?
		war_exhaustion_mobilisation_rate: 3, //How fast should war exhaustion tick up if user is mobilised?
		war_exhaustion_tickdown_rate: 10, //How fast should war exhaustion tick down if user is not at war?
	
		//Movement Speed
		army_speed: 2, //Base provinces per turn for armies
		colonisation_speed: 2, //Base provinces per turn for colonists
		max_colonisation_speed: 25, //Set to 0 to disable, in provinces per turn
		shipment_time: 10, //Transfer speed for shipping goods
		base_transfer_time: 3, //Base turns for all shipments
		
		//Supply Limit
		access_territory_modifier: 1.5, //(Counts if allied, vassalised, or has military access)
		friendly_territory_modifier: 2, //(Counts only if culture in province is friendly)
		hostile_territory_modifier: 0.5, //Uncolonised territory and enemy land
	
	//Diplomacy
		//Casus Belli and Wargoals
		justify_wargoal_cost: 75, //Amount of PC needed to justify a wargoal
		justify_wargoal_time: 3, //Base number of turns needed to justify a wargoal
		
		//Diplomatic Actions
		improve_relations_cost: 50, //Amount of PC needed to improve relations
		decrease_relations_cost: 25, //Amount of PC needed to decrease relations
		
		vassalise_cost: 75, //Amount of PC needed to attempt vassalisation
		annex_cost: 150, //Amount of PC needed to attempt annexation
		form_alliance_cost: 50, //PC cost for forming an alliance
		break_alliance_cost: 50, //PC cost for breaking an alliance
		declare_rival_cost: 50, //PC cost for declaring a rival
		guarantee_independence_cost: 30, //PC cost for guaranteeing independence
		request_military_access_cost: 25, //PC cost for requesting military access
		sign_non_aggression_pact_cost: 25, //PC cost for signing non-aggression pact
		
		//Rivalries
		rival_slots: 2, //Base amount of rival slots made available to a country at game start
		cede_limit: 10, //Amount of provinces that can be ceded per turn
	
	//Economy
		//General Economic Defines
		city_resources: [[10, "wood"], [15, "stone"], [25000, "money"]], //Resources needed for founding a new city
		city_unlock_caps: [
			1,
			2,
			3,
			4,
			5,
			6,
			10,
			15,
			20,
			25,
			30,
			40,
			60,
			80,
			105,
			155,
			170,
			195,
			220,
			265,
			280,
			305,
			340,
			395,
			430,
			460,
			500,
			575,
			620,
			650,
			730,
			840,
			950,
			1350,
			1400,
			1425,
			1450,
			1475,
			1500,
			1510,
			1520,
			1530,
			1540,
			1550,
			1600,
			1650,
			1700,
			1750,
			1800,
			1850,
			1900,
			1950,
			2000
		], //Levels of provinces at which a new city is unlocked. Leave empty for unlimited cities
		construction_turns: 3, //Default number of construction turns per city
		money_per_action: 2500, //Assuming taxes were 100%, this is how much a country would earn per action
		population_food_requirement: 1000000, //How much of the pop should 1 food be able to feed?
		resource_base_stock: 100, //How much stock should be set as the default amount in the world market
		rgo_modifier: 0.1, //Amplifier for RGO modifier effects
		shipment_speed: 50, //How many provinces should a shipment travel per turn as base?
		urbanisation_cost: 25, //Initial Political Capital cost for urbanisation
		urbanisation_cost_percentile_growth: 1.2, //How fast should the cost grow exponentially?
		
		//Trade and World Market
		resource_list: [["aluminium", 2200], ["ammunition", 1000], ["artillery", 12500], ["bauxite", 1500], ["coal", 1000], ["concrete", 1100], ["cotton", 1200], ["copper", 1800], ["fertiliser", 2000], ["food", 850], ["gold", 3500], ["iron", 2000], ["lead", 700], ["lumber", 1100], ["machine_parts", 5500], ["meat", 600], ["petroil", 2500], ["refined_petroil", 3000], ["silver", 2200], ["sulphur", 2500], ["small_arms", 1500], ["steel", 3500], ["stone", 1500], ["uniforms", 1350], ["wheat", 500], ["wood", 900]], //Resources in the world market0,
		resource_min_buy_price: 150, //Minimum purchasing price for a resource
		resource_min_sell_price: 100, //Minimum sell price for a resource
		resource_init_max_percentile: 0.80, //Maximum percentage of shipment capacity that new countries (for the first 10 turns) can use on buying/selling goods from the World Market
		resource_max_percentile: 0.20, //Maximum percentage of shipment capacity that you can use per turn on buying/selling goods from the World Market
		starting_actions: 5, //Base actions per turn, and base starting actions
		supply_limit_rgo_modifier: 100, //How much extra supply limit should it take for an extra +1% boost to RGO throughput in the province?
	
	//Politics and Culture
		//Culture
		accepted_culture_cost: 150, //PC cost for accepting a culture
		accepted_culture_maintenance_cost: 1, //PC cost per turn for each accepted culture
		assimilate_cost: 10, //PC cost for assimilating a province
		assimilate_fiscal_cost: 5000, //Amount of £ needed to assimilate a province
		assimilation_turns: 10, //Amount of turns needed to assimilate a province
		integration_turns: 20, //Amount of turns needed to integrate a province
		non_core_manpower: 0.1, //Percentile of non-core manpower handed back to a country
		
		//General Political Defines
		coup_cost: 150, //PC cost for couping
		infamy_limit: 8, //Total infamy before containment CB kicks in, and bad effects
		infamy_loss: -0.05, //Per turn
		max_stab_boost: 50, //How much should be the maximum someone can boost their stability by?
		move_capital_cost: 100, //PC cost for moving capital cities
		political_capital_gain: 10, //All costs not labelled in this category are in political capital
		reform_cost: 25, //PC cost for attempting a reform
		revolt_threshold: 40, //How low should the stability threshold be before coups are possible? Number is a %
		stability_cost: 75, //PC cost for boosting stability 10%
	
	//Technology
		additional_research: 0, //Research up to certain research cost, 0 to disable
		ahead_of_time: [
			[0, 1800, 10], //Between 0 and 1800, the tech penalty doubles for every 10 years it is ahead of time
			[1800, 1890, 5],
			[1890, 1939, 2],
			[1939, 1945, 1],
			[1945, 3000, 2]
		],
		max_knowledge_investment: 1, //How much of a tech can be researched each turn at maximum? (percentage)
	
	//Subconfiguration Files
	ai_types: {
		confoederatio_helvetica: {
			//Default parameters
			name: "Confoederatio Helvetica",
			colour: [26, 56, 54],
			culture_name: "Swiss",
			government: "democracy",
			flag: "https://media.discordapp.net/attachments/829862963485474827/876432132346613770/1920px-Flag_of_Switzerland.png",
			motto: "Unus pro omnibus, omnes pro uno",
			spawn_years: [[1291, 1798], [1815]],
			starting_earth_province: 461,
			
			aggression: 0.1,
			capital_city: "Bern",
			cities: {
				earth: {
					"Bern": 461,
					"Geneva-Lausanne": 451,
					"Zürich": 425,
					"Lucerne": 459,
					"Winterthur": 441,
					"Lugano": 438,
					"Chur": 435
				},
				generic_names: [
					"Ararau",
					"Basel",
					"Biel/Bienne",
					"Davos",
					"Montreux",
					"Schaffhausen",
					"St. Gallen",
					"Zug"
				]
			},
			imperialist: false,
			expansionism: 0.05,
			expansion_style: "tall",
			preferred_provinces: {
				earth: [
					//Switzerland
					451, 461, 435, 438, 425, 450, 457, 456, 452, 455, 453, 454, 428, 429, 460, 459, 458, 449, 448, 447, 444, 445, 446, 439, 437, 431, 433, 430, 423, 424, 440, 442, 427, 426,
					
					//Northern Italy
					1102, 1107, 1109, 1108
				]
			}
		},
		foerenade_konungarikena_sverige_och_norge: {
			name: "Förenade Konungarikena Sverige och Norge",
			colour: [91, 116, 216],
			culture_name: "Swedish",
			government: "constitutional_monarchy",
			flag: "https://media.discordapp.net/attachments/829862963485474827/877182681530642502/1920px-Swedish_civil_ensign_281844E28093190529.png",
			motto: "Sveriges väl",
			spawn_years: [[1814, 1905]],
			starting_earth_province: 2006,
			
			aggression: 0.2,
			capital_city: "Stockholm",
			cities: {
				earth: {
					"Stockholm": 2006,
					"Christiania": 2066,
					"Bergen": 2102,
					"Uppsala": 2013,
					"Gothenburg": 1987,
					"Malmo": 1967,
					"Kristiansand": 2099,
					"Trondheim": 2083,
					"Lulea": 2062,
				},
				generic_names: [
					"Vasteras",
					"Orebro",
					"Norrkoping",
					"Linkoping",
					"Jonkoping",
					"Drammen",
					"Tromso",
					"Lillehammer",
					"Stavanger",
					"Falun",
					"Gavle",
					"Vasteras",
					"Visby",
					"Helsingborg",
					"Narvik"
				]
			},
			imperialist: false,
			expansionism: 0.07,
			expansion_style: "tall",
			preferred_provinces: {
				earth: [
					//Sweden
					1987, 1967, 2013, 2006, 1968, 1974, 1975, 1973, 1969, 1970, 1972, 1971, 1997, 1998, 1999, 1976, 1986, 1985, 1977, 1983, 1984, 1978, 1982, 1979, 1980, 1981, 1993, 1994, 1995, 1996, 1992, 1991, 1988, 2026, 2025, 2024, 2023, 1989, 2022, 2019, 2020, 2021, 1990, 2000, 2010, 2002, 2001, 2003, 2004, 2005, 2007, 2008, 2011, 2012, 2009, 2010, 2018, 2017, 2016, 2014, 2015, 2031, 2030, 2029, 2030, 2032, 2033, 2037, 2038, 2062, 2027, 2028, 2035, 2036, 2041, 2040, 2039, 2042, 2049, 2048, 2047, 2034, 2046, 2045, 2043, 2044, 2053, 2054, 2060, 2061, 2063, 2059, 2057, 2055, 2052, 2051, 2056, 2050, 2058,
					
					//Norway
					2099, 2102, 2066, 2083, 2097, 2098, 2095, 2093, 2094, 2100, 2101, 2103, 2104, 2106, 2092, 2096, 2071, 2072, 2070, 2065, 2067, 2073, 2075, 2074, 2076, 2077, 2068, 2069, 2079, 2078, 2090, 2091, 2089, 2105, 2107, 2108, 2088, 2086, 2087, 2084, 2085, 2080, 2081, 2082, 2109, 2110, 2111, 2112, 2113, 2114, 2115, 2118, 2117, 2123, 2122, 2121, 2120, 2119, 2124, 2127, 2129, 2132, 2131, 2133, 2135, 2136, 2134, 2130, 2128, 2064, 2125, 2126,
					
					//Aland
					2177,
					
					//Jan Mayen
					1522
				]
			}
		},
		kaisertum_oesterreich: {
			name: "Kaisertum Österreich",
			colour: [124, 24, 54],
			culture_name: "Österreichisch",
			government: "absolute_monarchy",
			flag: "https://media.discordapp.net/attachments/829862963485474827/877078217654145054/1200px-Flag_of_the_Habsburg_Monarchy.png",
			spawn_years: [[1804, 1867]],
			starting_earth_province: 853,
			
			aggression: 0.6,
			capital_city: "Vienna",
			cities: {
				earth: {
					"Vienna": 853,
					"Graz": 847,
					"Klagenfurt": 846,
					"Linz": 843,
					"Salzburg": 842,
					"Innsbruck": 842,
					"Trieste": 1135,
					"Laibach": 12951,
					"Prague": 893,
					"Brunn": 888,
					"Lemberg": 2350,
					"Budapest": 1533,
					"Pressburg": 1559,
					"Czernowitz": 2367,
					"Agram": 1672,
					"Sarajevo": 1718
				},
				generic_names: [
					"Bregenz",
					"Troppau",
					"Split",
					"Klausenburg",
					"Gyor",
					"Krakau"
				]
			},
			imperialist: false,
			expansionism: 0.15,
			expansion_style: "wide",
			preferred_provinces: {
				earth: [
					//Upper Austria
					853, 854, 855, 856, 857, 843,
					
					//Salzburg
					842, 841, 838,
					
					//Tyrol
					837, 834, 836, 835, 833,
					
					//Sudtirol
					1124, 1123, 1122, 1126, 1121,
					
					//Lower Austria and Styria
					847, 849, 848, 844, 845, 846, 12952, 840, 839,
					
					//Slovenia
					1138, 1137, 1156, 12948, 12945, 12949, 12950, 1141, 1155,
					
					//Italian Borderlands (Nova Gorizia and Trieste)
					1132, 1133, 1135, 1136, 1134, 1133,
					
					//Bohemia and Moravia
					893, 888, 860, 889, 883, 882, 881, 880, 875, 879, 878, 873, 874, 872, 868, 871, 866, 867, 869, 865, 886, 887, 885, 890, 891, 858, 859, 861, 895, 896, 894, 862, 863, 864, 884, 892,
					
					//Hungary
					1533, 1144, 850, 851, 1525, 852, 1523, 1524, 1530, 1529, 1531, 1532, 1534, 1526, 1527, 1528, 1538, 1539, 1535, 1536, 1537, 1540, 1546, 1547, 1557, 1556, 1555, 1553, 1552, 1551, 1550, 1549, 1554, 1545, 1548, 1541, 1542, 1544, 1543,
					
					//Slovakia
					1559, 1558, 1562, 1560, 1561, 1564, 1570, 1574, 1573, 1572, 1571, 1569, 1568, 1567, 1563, 1566, 1565,
					
					//Transylvania
					1610, 1611, 1612, 1614, 1642, 1615, 1616, 1598, 1613, 1600, 1599, 1605, 1609, 1607, 1608, 1606, 1575, 1603, 1604, 1602, 1583, 1576, 1577, 1582, 1578, 1584, 1581, 1601, 1595, 1596, 1597, 1591, 1590, 1589, 1588, 1587, 1586, 1592, 1585, 1593, 1594, 1580,
					
					//Serbia/Banat
					1741, 1742, 1740, 1738, 1737, 1739,
					
					//Galicia-Lodomeria
					2367, 2350, 1579, 2368, 2369, 2370, 2371, 2372, 2363, 2362, 2365, 2355, 2366, 2354, 2346, 2345, 2344, 2343, 2353, 2347, 2352, 2351, 2360, 2361, 2358, 2356, 2357, 2348, 2349, 921, 917, 916, 915, 914, 918, 920, 912, 913, 919, 911, 899, 898,
					
					//Croatia
					1672, 1671, 1673, 1674, 1675, 1676, 1677, 1678, 1679, 1681, 1680, 12955, 1721, 1682, 1683, 1687, 1689, 1691, 1695, 1685, 1684, 1686, 1688, 1692, 1693, 1694, 1690, 1696, 1698, 1697, 1699,
					
					//Bosnia-Herzegovina
					1718, 1735, 1736, 1732, 1731, 1716, 1717, 1715, 1713, 1714, 1733, 1734, 1730, 1729, 1728, 1726, 1719, 1725, 1724, 1727, 1723, 1722, 1703, 1701, 1700, 1702, 1704, 1720, 1710, 1711, 1712, 1709, 1708, 1707, 1706, 1705,
					
					//Lombardo-Venetien
					1104, 1103, 1112, 1111, 1113, 1114, 1105, 1106, 1110, 1118, 1119, 1115, 1117, 1116, 1143, 1145, 12953, 12946, 1140, 1135, 1139, 1131, 1130, 1125, 1127, 1129, 1128, 1142, 1120
				]
			}
		},
		koenigreich_preussen: {
			//Default parameters
			name: "Königreich Preußen",
			colour: [45, 54, 99],
			culture_name: "Preußisch",
			government: "absolute_monarchy",
			flag: "https://media.discordapp.net/attachments/829862963485474827/876754967040520212/2560px-Flag_of_the_Kingdom_of_Prussia_281803-189229.png",
			spawn_years: [[1701, 1918]],
			starting_earth_province: 1,
			
			aggression: 1.2,
			capital_city: "Berlin",
			cities: {
				earth: {
					"Berlin": 1,
					"Königsberg": 2211,
					"Magdeburg": 53,
					"Potsdam": 59,
					"Breslau": 954,
					"Kattowitz": 902,
					"Danzig": 1003,
					"Köln": 279,
					"Duisburg": 275,
					"Düssdeldorf": 277,
					"Kiel": 104,
					"Bremen": 151,
					"Lübeck": 98,
					"Stettin": 984,
					"Posen": 985
				},
				generic_names: [
					"Emden",
					"Bremerhaven",
					"Kleves",
					"Aachen",
					"Koblenz",
					"Elbing",
					"Allenstein",
					"Memel",
					"Liegnitz",
					"Kottbus"
				]
			},
			colonial_preferred_provs: {
				earth: [
					//Brandenburg Colonies
					3430, //Gold Coast
					7071, //St. Thomas
					7072,
					
					//German Colonies
					3575, //Togoland
					3850, //Kamerun
					4754, //Namibien
					13243, //Zanzibar
					13242,
					13244,
					13245, //Tanzania
					13944, //Tsingtau
					7891, //Rabaul
					11406, //Polynesia
					11385,
					13615, //Samoa
				]
			},
			imperialist: true,
			expansionism: 0.15,
			expansion_style: "tall",
			preferred_provinces: {
				earth: [
					//Brandenburg
					1, 2, 59, 60, 62, 63, 64, 65, 8, 5, 68, 71, 10, 9, 3, 4, 6, 7, 18, 15, 14, 13, 12, 11, 21, 20,
					
					//Neumark
					982, 983, 986, 970, 978, 980, 987, 988, 991,
					
					//East Prussia
					2211, 2210, 2213, 2212, 2214, 2216, 2217, 2218, 2219, 2220, 2221, 1051, 1050, 1047, 1049, 1048, 1046, 1045, 1043, 1037,
					
					//Magdeburg and Upper Saxony
					53, 47, 58, 28, 29, 19, 16, 967, 45, 44, 48,
					
					//Pomerania
					73, 72, 984, 990, 993, 989, 76, 77, 992, 994, 995, 996, 1000, 998,
					
					//Warmia and Masuria
					1038, 1039, 1042, 1041, 1040,
					
					//Silesia
					969, 968, 966, 965, 964, 961, 950, 952, 962, 951, 954, 902, 12941, 953, 963, 973, 957, 955, 972, 971, 976, 974, 947, 956, 946, 897, 949, 948, 944, 943, 904, 939, 941, 945, 940, 907, 901, 900, 870, 905, 867, 903, 877, 876, 906, 908, 937, 938,
					
					//Prussian Poland (Post-Viennese Partition)
					981, 979, 977, 975,  985, 958, 959, 960, 12942, 1005, 1007, 1011, 1008, 1009, 997, 1010, 999, 1001, 1002, 1004, 1003, 1012, 1013, 1035, 1036,
					
					//Prussian Rhineland
					275, 277, 279, 280, 276, 276, 281, 282, 283, 269, 273, 274, 271, 409, 410, 272, 365, 266, 267, 270, 278, 268, 264, 257, 256, 259, 260, 258, 227, 293, 294, 159, 291, 145, 285, 162, 286, 284, 290, 289, 288, 287, 292, 261,
					
					//Prussian Thuringia
					129, 38,
					
					//Vorpommern
					74, 75, 69,
					
					//Schleswig-Holstein
					86, 87, 115, 95, 99, 100, 106, 105, 107, 110, 111, 108, 109, 113, 114,
					
					//Hannover
					12928, 297, 298, 300, 301, 304, 302, 29, 296, 156, 153, 158, 139, 138, 137, 116, 136, 119, 141, 143, 140, 149, 137, 121, 120, 124, 123, 122, 50, 125, 127, 43,
					
					//Hessen
					171, 168, 170, 148, 262, 263, 166, 165, 164, 163, 160, 161, 230,
					
					//Helgoland
					112,
					
					//NOT ACTUALLY PART OF THE KINGDOM OF PRUSSIA
					//Bremen and Bremerhaven
					151, 155,

					//Oldenburg and Adjacencies
					157, 303, 305,
					
					//Lippe-Detmold
					146, 12927,
					
					//Meiningen, Hannover and Adjacencies
					150, 142, 118, 117,
					
					//Mecklenburg
					66, 67, 70, 81, 80, 79, 78, 12926, 91, 92, 85, 83, 82, 84, 88, 89, 90, 80,
					
					//Hamburg and Lubeck
					96, 94, 93, 98, 103, 101, 102, 93,
					
					//Anhalt-Dessau and Adjacencies
					51, 52, 54, 61, 55, 57, 49, 56, 
					
					//Saxony
					17, 22, 23, 24, 25, 27, 30, 46, 41, 32, 31, 26, 33, 34, 35, 40, 42, 
					
					//Thuringia
					126, 36, 39, 37, 131, 132, 130, 128, 169,
					
					//Hessen
					228, 167, 229, 231, 234, 233, 235,
					
					//South Germany
					247, 246, 248, 249, 251, 253, 255, 254, 252, 250, 245, 243, 244, 242, 220, 241, 240, 239, 223, 222, 224, 238, 236, 237, 232, 226, 225, 174, 172, 173, 175, 176, 208, 210, 209, 133, 134, 135, 179, 178, 180, 12929, 187, 206, 177, 207, 212, 211, 221, 219, 218, 217, 215, 216, 12930, 189, 190, 200, 185, 191, 202, 203, 204, 182, 184, 183, 181, 186, 188, 205, 213, 214, 201,
					
					//Alsace-Lorraine
					473, 472, 474, 468, 471, 470, 469, 416, 417, 415, 418, 419, 420, 421, 422
				]
			}
		},
		kongeriget_danmark: {
			name: "Kongeriget Danmark",
			colour: [175, 70, 105],
			culture_name: "Danish",
			government: "constitutional_monarchy",
			flag: "https://media.discordapp.net/attachments/829862963485474827/877186873397768272/1920px-Flag_of_Denmark.png",
			motto: "Guds hjaelp, Folkets kaerlighed, Danmarks styrke.",
			spawn_years: [[700, 1940], [1940]],
			starting_earth_province: 352,
			
			aggression: 0.3,
			capital_city: "Copenhagen",
			cities: {
				earth: {
					"Copenhagen": 352,
					"Odense": 346,
					"Aarhus": 345,
					"Aalborg": 342,
					"Malmo": 1967,
					"Kiel": 104,
					"Kristiansand": 2066,
					"Reykjavik": 1504,
					"Godthab": 1513
				},
				generic_names: [
					"Aabenraa",
					"Bergen",
					"Kolding",
					"Nykobing",
					"Roskilde",
					"Flensburg",
					"Neumunster"
				]
			},
			colonial_preferred_provs: {
				earth: [
					11778, //Danish India
					11741,
					11820,
					7071, //Danish West Indies
				]
			},
			imperialist: true,
			expansionism: 0.05,
			expansion_style: "tall",
			preferred_provinces: {
				earth: [
					//Denmark
					352, 346, 342, 352, 306, 307, 308, 309, 340, 344, 343, 341, 354, 353, 351, 350, 349, 348, 355,
					
					//Norway
					2099, 2102, 2066, 2083, 2097, 2098, 2095, 2093, 2094, 2100, 2101, 2103, 2104, 2106, 2092, 2096, 2071, 2072, 2070, 2065, 2067, 2073, 2075, 2074, 2076, 2077, 2068, 2069, 2079, 2078, 2090, 2091, 2089, 2105, 2107, 2108, 2088, 2086, 2087, 2084, 2085, 2080, 2081, 2082, 2109, 2110, 2111, 2112, 2113, 2114, 2115, 2118, 2117, 2123, 2122, 2121, 2120, 2119, 2124, 2127, 2129, 2132, 2131, 2133, 2135, 2136, 2134, 2130, 2128, 2064, 2125, 2126,
					
					//Jan Mayen
					1522,
					
					//Skaneland
					1967, 1968, 1969, 1970, 1975, 1976,
					
					//Iceland
					1504, 1505, 1506, 1503, 1502, 1501, 1508, 1509, 1507, 
					
					//Greenland
					1513, 1514, 1517, 1516, 1518, 1520, 1510, 1511, 1512, 1515, 1519, 1521,
					
					//Slesvig
					113, 114, 110, 111, 108, 107,
					
					//Holstein
					104, 105, 106, 100, 97
				]
			}
			
		},
		koninkrijk_der_nederlanden: {
			//Default parameters
			name: "Koninkrijk der Nederlanden",
			colour: [211, 152, 74],
			culture_name: "Dutch",
			government: "constitutional_monarchy",
			flag: "https://cdn.discordapp.com/attachments/829862963485474827/877085742428483594/1920px-Statenvlag.png",
			motto: "Je maintiendrai",
			spawn_years: [[1815, 1940], [1945]],
			starting_earth_province: 381,
			
			aggression: 0.25,
			capital_city: "Amsterdam",
			cities: {
				earth: {
					"Amsterdam": 381,
					"Rotterdam": 373,
					"Den Haag": 372,
					"Eindhoven": 366,
					"Maastricht": 365,
					"Utrecht": 378,
					"Bruxelles": 386,
					"Antwerp": 489,
					"Liege": 407
				},
				generic_names: [
					"Lelystad",
					"Groningen",
					"Zwolle",
					"Enscheden",
					"Haarlem",
					"Alkmaar",
					"Leeuwarden",
					"Oostende",
					"Ypres",
					"Ghent",
					"Namur",
					"Hasselt",
					"Mons",
					"Charleroi"
				]
			},
			colonial_preferred_provs: {
				earth: [
					7173, //Suriname
					4913, //Cape Colony
					10842, //Batavia
					10947, //Sumatra
					10898, //Borneo
					10878, //Makassar
					11771, //Ceylon
					7090, //Carribean Islands
					7091,
					7092,
					7093,
					7151,
					7050,
					7071,
					7076
				]
			},
			imperialist: true,
			expansionism: 0.45,
			expansion_style: "tall",
			preferred_provinces: {
				earth: [
					//Holland and Brabant
					381, 373, 372, 374, 376, 380, 382, 383, 384, 12933, 378, 379, 371, 367, 375, 370, 364, 
					
					//Friesland
					363, 362, 361, 357, 356, 359, 358, 360,
					
					//Limburg
					366, 365,
					
					//Belgium
					377, 489, 386, 407, 403, 404, 402, 388, 387, 399, 405, 369, 368, 414, 401, 400, 398, 390, 389, 391, 392, 406, 397, 396, 395, 393, 408, 12931, 413, 412,
					
					//Luxemburg
					394
				]
			}
		},
		reino_de_espana: {
			//Default parameters
			name: "Reino de España",
			colour: [219, 194, 70],
			culture_name: "Spanish",
			government: "constitutional_monarchy",
			flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Flag_of_Spain_%281785%E2%80%931873%2C_1875%E2%80%931931%29.svg/1599px-Flag_of_Spain_%281785%E2%80%931873%2C_1875%E2%80%931931%29.svg.png",
			motto: "Plus ultra",
			spawn_years: [[1715, 1939], [1978]],
			starting_earth_province: 740,
			
			aggression: 0.5,
			capital_city: "Madrid",
			cities: {
				earth: {
					"Madrid": 740,
					"Barcelona": 681,
					"Seville": 807,
					"Toledo": 762,
					"Cartagena": 755,
					"A Coruna": 735,
					"Valencia": 750,
					"Bilbao": 706,
					"Badajoz": 812,
				},
				generic_names: [
					"Ibiza",
					"Mao",
					"Vigo",
					"Guernica",
					"Zaragoza",
					"Alhambra",
					"Ceuta",
					"Melilla",
					"Malaga",
					"Murcia",
					"Santander",
					"Oviedo",
					"Salamanca",
					"Toledo"
				]
			},
			colonial_preferred_provs: {
				earth: [
					//Early Colonies
					7061, //Hispaniola
					6956, //Mexico
					7143, //Venezuela
					7196, //Quito
					7261, //Peru
					7343, //Santiago
					7383, //Rio de la Plata
					6797, //St. Augustine
					7040, //Havana
					7070, //Puerto Rico
					5814, //San Francisco
					
					//Later Colonies
					9803, //Formosa
					11183, //Manila
					3070, //Cape Juby/Rio de Oro
					3958, //Spanish Guinea
					3848,
					3849,
					3847,
					7360 //Falklands
				]
			},
			imperialist: true,
			expansionism: 1.0,
			expansion_style: "wide",
			preferred_provinces: {
				earth: [
					//Mainland Spain
					740, 762, 807, 812, 755, 750, 706, 735, 736, 732, 731, 734, 733, 729, 737, 728, 727, 726, 725, 724, 723, 705, 704, 703, 702, 691, 690, 701, 708, 700, 709, 707, 717, 718, 720, 721, 719, 722, 739, 741, 742, 743, 761, 760, 763, 764, 765, 738, 730, 766, 777, 778, 779, 813, 811, 810, 805, 804, 803, 802, 806, 809, 808, 796, 798, 797, 794, 795, 792, 799, 791, 790, 756, 789, 800, 788, 801, 781, 780, 782, 784, 787, 786, 785, 783, 759, 758, 757, 751, 752, 753, 754, 748, 749, 745, 746, 744, 716, 712, 710, 711, 713, 714, 699, 695, 698, 697, 700, 692, 690, 693, 694, 696, 715,
					
					//Catalonia
					684, 683, 681, 682, 685, 689, 687, 688, 686, 678, 680, 671, 
					
					//Balearic Islands
					677, 676, 675, 674,
					
					//Gibraltar
					793,
					
					//Perpignan
					633, 634, 635,
					
					//Canary Islands
					3073, 3072, 3071,
					
					//Ceuta and Melilla
					3000, 2975
				]
			}
		},
		reino_de_portugal: {
			//Default parameters
			name: "Reino de Portugal",
			colour: [117, 142, 85],
			culture_name: "Portugese",
			government: "absolute_monarchy",
			flag: "https://media.discordapp.net/attachments/829862963485474827/876436524110082088/1920px-Flag_of_Portugal_28183029.png",
			spawn_years: [[1139, 1580], [1640, 1808], [1814, 1910]],
			starting_earth_province: 829,
			
			aggression: 0.25,
			capital_city: "Lisbon",
			cities: {
				earth: {
					"Lisbon": 829,
					"Porto": 820,
					"Coimbra": 822,
					"Braga": 815,
					"Faro": 831
				},
				generic_names: [
					"Albufiera",
					"Aveiro",
					"Castelo Branco",
					"Evora",
					"Santarem",
					"Villa Real",
					"Viseu"
				]
			},
			colonial_preferred_provs: {
				earth: [
					13478, //Rio de Janeiro
					8488, //Musqat
					11715, //Goa
					3179, //Portugese Guinea
					4453, //Luanda
					4635, //Maputo
					12649, //Macau
					10805, //Timor-Leste
					10802, //Timor-Leste
				]
			},
			imperialist: true,
			expansionism: 0.25,
			expansion_style: "tall",
			preferred_provinces: {
				earth: [
					//Mainland Portugal
					829, 820, 815, 822, 830, 831, 832, 827, 826, 824, 825, 828, 823, 821, 819, 818, 817, 816, 814,
					
					//Madeira Islands and Azores
					3074, 4987, 4988, 4989
				]
			}
		},
		republic_of_ireland: {
			//Default parameters
			name: "Republic of Ireland",
			colour: [80, 147, 64],
			culture_name: "Irish",
			government: "democracy",
			flag: "https://media.discordapp.net/attachments/829862963485474827/871651601503371304/ireland-flag__72814.png",
			spawn_years: [[1949]],
			starting_earth_province: 1427,
			
			aggression: 0.5,
			capital_city: "Dublin",
			cities: {
				earth: {
					"Dublin": 1427,
					"Cork": 1436,
					"Limerick": 1441,
					"Galway": 1443
				},
				generic_names: [
					"Tralee",
					"Waterford",
					"Wexford",
					"Drogheda",
					"Dundalk",
					"Kilkenny"
				]
			},
			imperialist: false,
			expansionism: 0.05,
			expansion_style: "small",
			preferred_provinces: {
				earth: [
					//Ireland
					12936, 1437, 1422, 1427, 1426, 1431, 1432, 1428, 1429, 1430, 12937, 12935, 1433, 1425, 1445, 1444, 1446, 1424, 1423, 1448, 1447, 1443, 1449, 1442, 1441, 1440, 1435, 1434, 1436, 1439, 1438,
					
					//Northern Ireland
					1421, 1420, 1419, 1418, 1416, 1417, 1415, 1414
				]
			}
		},
		rossiyskaya_imperiya: {
			//Default parameters
			name: "Rossiyskaya Imperiya",
			colour: [68, 91, 52],
			culture_name: "Russian",
			government: "absolute_monarchy",
			flag: "https://media.discordapp.net/attachments/829862963485474827/876855112751009822/2560px-Flag_of_Russia.png",
			motto: "Съ нами Богъ!",
			spawn_years: [[1721, 1917]],
			starting_earth_province: 8995,
			
			aggression: 0.7,
			capital_city: "St. Petersburg",
			cities: {
				earth: {
					"St. Petersburg": 8995,
					"Moscow": 9025,
					"Tsaritsyn": 8747,
					"Kyiv": 2433,
					"Odessa": 2426,
					"Riga": 2284,
					"Warsaw": 1026,
					"Lodz": 1022,
					"Sevastopol": 12981,
					"Kerch": 12985,
					"Nikolayev": 2447,
					"Rostov-on-Don": 8740,
					"Saratov": 8824,
					"Khabarovsk": 9213,
					"Vladivostok": 9218
				},
				generic_names: [
					"Kharkiv",
					"Tbilisi",
					"Vilna",
					"Kazan",
					"Tula",
					"Astrakhan",
					"Ekaterinoslav",
					"Baku",
					"Kishinev",
					"Helsinki",
					"Minsk",
					"Nizhny Novgorod",
					"Samara",
					"Orenburg",
					"Yaroslavl",
					"Dvinsk",
					"Vitebsk",
					"Reval",
					"Libava",
					"Yekaterinodar"
				]
			},
			colonial_preferred_provs: {
				earth: [
					5672, //Sitka
					5682, //Dutch Harbour
					12868 //Port Arthur
				]
			},
			imperialist: true,
			expansionism: 0.5,
			expansion_style: "wide",
			preferred_provinces: {
				earth: [
					//Core Muscovy
					9025, 8982, 9027, 9029, 9033, 13314, 9026, 9024, 9028, 9023, 8984, 9021, 9022, 9034, 9035, 9048,
					
					//Muscovy Expansions
					8904, 8905, 8903, 8902, 8901, 9030, 8980, 8981, 8979, 8891, 8897, 8898, 9031, 9032,
					
					//Vladimir-Suzdal
					9045, 9046, 9047, 9054, 9053, 9050, 9049, 9051, 9052, 9063, 9061, 9060, 9061,
					
					//Vologda
					9110, 9111, 9106, 9094, 9090, 9091, 9089, 9088, 9086, 9087, 9095, 9098, 9097, 9102, 9112, 9113, 13315, 9085, 9080, 9082, 9081, 9084, 9083, 9150, 9151, 9149, 9152, 9247, 9153, 9245,
					
					//Pskov
					8957, 8956, 8947, 8948, 8950, 8949, 8943, 8929, 8928, 8944, 8945,
					
					//Ryazan
					8842, 8843, 8844, 8850, 8849, 8873, 8851, 8854, 8853, 8852, 8867,
					
					//Smolensk
					8913, 8912, 8914, 8915, 8908, 8910,
					
					//Grand Duchy of Moscow - Novgorod
					8995, 8927, 8926, 8925, 8916, 8917, 8924, 8923, 8936, 8935, 8919, 8918, 8922, 8921, 8920, 8911, 8909, 8907, 8958, 8959, 8961, 8960, 8955, 8951, 8942, 8930, 8941, 8933, 8931, 8932, 8934, 8939, 8940, 8953, 8952, 8954, 8967, 8966, 8965, 8962, 8963, 8964, 8996, 9002, 8998, 8997, 9000, 9001, 9003, 8999, 9004, 9005, 9008, 8969, 8968, 8970, 8994, 8993, 8971, 8938, 8972, 8974, 8973, 8937, 8976, 8977, 8978, 8975, 8991, 8988, 8992, 8985, 8983, 8986, 8987, 8989, 9020, 9019, 9018, 9055, 9059, 9058, 9057, 9056, 9017, 8990, 9014, 9013, 9015, 9016, 9056, 9093, 9092, 9103, 9104, 9105, 9107, 9012, 9010, 9011, 9009, 9007, 9108, 9109, 9006, 9117, 9118, 9116, 9115, 9114, 9119, 9120, 9126, 9127, 9125, 9128, 9114, 9140, 9132, 9131, 9133, 9134, 9135, 9136, 9139, 
					
					//Grand Duchy of Moscow - Southern Russia
					2503, 8881, 8882, 8888, 8883, 8884, 8880, 8879, 8885, 8886, 8889, 8887, 8890, 8906, 8878, 8836, 2493, 8834, 8833, 8830, 8832, 8865, 9071, 9069, 9068, 9070, 8866, 9041, 9044, 9042, 9040, 9039, 9043, 9038, 9036, 9037, 8874, 8876, 8875, 8900, 8899, 8895, 8894, 8893, 8896, 8892, 8877, 8837, 8870, 8838, 8831, 8839, 8840, 8841, 8868, 8869, 8871, 8872, 
					
					//Perm
					9248, 9246, 9249, 9251, 9250, 9243, 9242, 9244, 9239, 9239, 9376, 9276, 9349, 9351, 9406, 9407, 9352, 9403, 9409, 9408, 9396, 9399, 9400, 9444, 9443, 9308, 9307, 9306, 9294, 9293, 9304, 9305, 9285, 9284, 9229, 8860, 9228, 8859, 8858, 8857, 8847, 8848, 8845, 8846, 8856, 8823, 9064, 9065, 9066, 9067, 9078, 9075, 9072, 9079, 9077, 9076, 9074, 9237, 9238, 9241, 9240, 9279, 9280, 9234, 9235, 9233, 9232, 9073, 8864, 9231, 8863, 9230, 8861, 8862, 8855, 9236, 9283, 9287, 9302, 9281, 9282, 9368, 9303, 9373, 9374, 9369, 9394, 9375, 9372, 9371, 9370, 9277, 9278, 9350, 9405, 9404, 9395, 9393, 9397, 9398,
					
					//Siberian Forts
					9295, 9292, 9296, 9291, 9290, 9297, 9157, 9158, 9160, 10513, 10514, 9161, 9162, 10515, 9164, 9163, 9299, 9298, 9300, 9309, 9301, 9377, 9378, 9379, 9380, 9381, 9391, 9390, 9383, 9382, 9310, 9384, 9385, 9388, 9387, 9471, 9472, 9473, 9475, 9476, 9474, 9165, 9166, 9167, 9315, 9316, 9317, 9322, 9314, 9313, 9311, 9312, 9386, 13636, 9386, 9481, 9480, 9479, 9478, 9477, 13684, 14082, 14081, 9323, 9321, 9320, 9486, 9487, 9169, 9168, 9170, 9484, 9483, 9482, 9319, 9318, 14084, 13660, 13687, 13657, 14083, 13654, 13653, 9171, 9172, 9173, 9485, 13659, 13658, 9514, 9513, 9174, 9175, 13664, 13666, 13665, 9176, 9177, 9178, 9179, 9180, 9181, 9182, 13672, 13671, 13669, 9500, 13673, 9515, 9516, 9504, 9506, 9503, 9505, 13667, 13675, 13668, 13674, 9507, 9511, 9510, 9509, 9508, 9528, 9529, 9530, 9536, 9535, 9537, 9539, 9538, 9501, 9502, 9184, 9185, 9540, 9541, 9545, 9546, 9547, 9542, 9190, 9507, 9191, 9192, 9193, 9531, 9527, 9523, 9525, 9526, 9524, 9521, 9517, 9520, 9568, 9575, 9574, 9573, 9572, 9581, 9582, 13693, 9701, 9700, 9698, 9702, 9695, 9697, 9696, 9628, 9629, 9627, 9626, 9620, 9534, 9555, 9554, 9532, 9533, 9553, 9550, 9549, 9551, 9552, 9548, 9601, 9599, 9600, 9598, 9594, 9595, 9597, 9622, 9623, 9621, 9618, 9604, 9604, 9603, 9617, 9602, 9606, 9608, 9616, 9619, 9615, 9593, 9592, 9596, 9591, 9194, 9195, 9610, 9611, 9612, 9639, 9638, 9613, 9609, 9614, 9632, 9631, 9630, 9633, 9635, 9634, 9682, 9683, 9694, 9690, 9688, 9689, 9687, 9691, 9692, 9717, 9680, 9684, 9685, 9681, 9686, 9677, 9675, 9674, 9676, 9678, 9679, 9714, 9718, 9713, 9715, 9712, 9711, 9196, 9197, 9198, 9199, 9200, 9645, 9644, 9643, 9642, 9641, 9201, 9202, 9203, 9204, 9656, 9668, 9748, 9653, 9646, 9647, 9648, 9649, 9650, 9651, 9654, 9652, 9655, 9657, 9658, 9659, 9660, 9664, 9661, 9640, 9637, 9636, 9662, 9663, 9673, 9665, 9666, 9667, 9671, 9672, 9749, 9749, 9747, 9761, 9763, 9731, 9730, 9729, 9735, 9736, 9728, 9737, 9738, 9791, 9722, 9721, 9720, 9723, 9724, 9725, 9726, 9727, 9670, 9669, 9746, 9745, 9744, 9764, 9743, 9796, 9797, 13682, 9989, 8795, 9794, 9793, 9987, 9792, 9789, 9788, 9787, 9786, 9984, 9985, 9785, 9783, 9782, 9781, 9740, 9741, 9742, 9739, 9771, 9772, 9770, 9773, 9776, 9774, 9775, 9790, 9777, 9778, 9767, 9768, 9766, 9769, 9765, 9779, 9780, 9784, 9975, 10002, 10003, 10004, 10005, 10006, 10009, 10010, 10011, 10013, 10014, 10044, 10045, 10053, 10054, 10055, 10046, 10047, 10050, 10051, 10052,
					
					//South Russia
					9159, 9156, 9289, 9288, 13633, 13632, 9286, 13631, 13630, 13629, 9226, 9227, 8803, 10500, 10501, 10499, 10497, 10495, 10496, 10498, 13627, 13628, 8828, 8827, 8829, 8826, 8825, 8813, 8814, 8812, 8815, 8816, 8817, 8818, 8821, 8740, 8747, 8822, 8820, 8819, 8809, 8811, 8810, 8807, 8808, 8804, 8805, 8806, 8800, 8802, 8801, 8784, 8785, 8799, 8798, 8797, 8796, 8783, 8781, 8780, 8777, 8778, 8779, 8775, 8773, 8774, 8717, 8722, 8723, 8721, 8728, 8724, 8727, 8732, 8733, 8702, 8704, 8692, 8693, 8706, 8705, 8708, 8753, 8752, 8751, 13619, 8691, 8730, 8731, 8729, 9734, 8735, 9736, 8739, 8737, 8741, 8742, 8738, 13623, 13624, 8787, 8792, 8793, 8794, 8795, 8743, 8744, 8786, 8745, 8765, 8767, 8766, 8789, 8788, 8791, 8790, 8768, 8769, 8770, 8771, 8782, 8772, 8762, 8764, 8763, 8746, 8707, 8748, 8749, 8750, 8760, 8759, 8754, 8755, 8756, 8757, 8758, 8776, 8761, 8835,
					
					//West Circassia
					13621, 8681, 8678, 8677, 8671, 8676, 8711, 8710, 8709, 8718, 8716, 8719, 8720, 8712, 8715, 8714, 8713, 8725, 8699, 8698, 8726, 
					
					//Caspian Coast
					8532, 8531, 8533, 8534, 8535, 8537, 8536, 8538, 8546, 8545, 8548, 8623, 8628, 8629, 8624, 8630, 8625, 8631, 8632, 8633, 8635, 8636, 8634, 13683, 13616, 13617,
					
					//Crimea
					12985, 12981, 12984, 12983, 12982, 12980,
					
					//Ukraine
					2450, 2457, 2458, 12977, 12978, 2451, 2452, 2459, 2460, 2453, 12979, 2463, 2464, 2465, 2454, 12976, 2427, 2446, 2448, 2449, 2455, 2456, 2470, 2469, 2466, 2468, 2467, 2462, 2461, 2460, 2474, 2475, 2476, 2477, 2478, 2479, 2480, 2481, 2473, 2472, 2471, 2483, 2482, 2484, 2485, 2492, 2494, 2495, 2496, 2497, 2490, 2489, 2488, 2486, 2487, 2491, 2437, 2436, 2498, 2434, 2433, 2426, 2447, 2445, 2444, 2442, 2443, 2440, 2441, 2438, 2439, 2431, 2428, 2421, 2429, 2430, 2432, 2435, 2499, 2500, 2415, 2413, 2416, 2412, 2384, 2414, 2420, 2419, 2417, 2418, 2406, 2405, 2407, 2410, 2411, 2408, 2409, 2375, 2376, 2377, 2374, 2373, 2364, 2359, 2378, 2380, 2381, 2382, 2383,
					
					//Bessarabia/Pruth
					2422, 2423, 2424, 2425, 2394, 2393, 2392, 2395, 2391, 2385, 2387, 2389, 2386, 2388, 2390, 12975, 2397, 2398, 2399, 2396, 2401, 2403, 2404, 2402, 2400,
					
					//Byelorussia
					1061, 1064, 1067, 1068, 1066, 2572, 1065, 12944, 2568, 2581, 2245, 2244, 2246, 2247, 2521, 2520, 2519, 2518, 2517, 2515, 2516, 2580, 2582, 12972, 2523, 2524, 12973, 2566, 2567, 12964, 2585, 2584, 2583, 2578, 2579, 2576, 2575, 2574, 2577, 2573, 2571, 2569, 2570, 12966, 12967, 12963, 2522, 2529, 2528,2526, 2525, 2564, 2565, 2563, 2562, 12971, 12970, 12965, 2561, 12969, 2560, 12968, 2559, 2513, 2514, 2512, 2511, 2510, 2509, 2507, 2508, 2506, 2504, 2505, 2502, 2501, 2556, 2558, 2555, 2554, 2553, 2552, 2557, 2540, 2541, 2542, 2543, 2549, 2548, 2550, 2551, 2547, 2546, 2530, 2531, 2532, 2533, 2534, 2535, 2536, 2545, 2544, 2537, 2538, 2539, 12974, 
					
					//Baltic Guberniyas
					2240, 2443, 2242, 2241, 2253, 2255, 2256, 2252, 2248, 2249, 2250, 2257, 2266, 2258, 2251, 2259, 2260, 2262, 2261, 2265, 12228, 2227, 2225, 2226, 2224, 2223, 2222, 2231, 2230, 2232, 2229, 2233, 2234, 2263, 2264, 2254, 2235, 2284, 2267, 2269, 2270, 2271, 2272, 2273, 2275, 2274, 2276, 2277, 2278, 2279, 2280, 2281, 2282, 2283, 2286, 2287, 2285, 2307, 2312, 2311, 2310, 2304, 2303, 2302, 2299, 2300, 2301, 2292, 2305, 2306, 2308, 2309, 2288, 2289, 2290, 2291, 2293, 2294, 2295, 2296, 2297, 2298, 8946, 2313, 2314, 2315, 2316, 2317, 2318, 2322, 2321, 2323, 2320, 2324, 2325, 2326, 2319, 2327, 2329, 2328, 2337, 2330, 2331, 2336, 2332, 2333, 2335, 2334, 2342, 2333, 2338, 2340, 2339, 2341,
					
					//Transcaucasia - Georgia
					8613, 8612, 8611, 8610, 8609, 8608, 8582, 8581, 8580, 8579, 13625, 8577, 8576, 8588, 8571, 8573, 8572, 8575, 8615, 8574, 8571, 8590, 8596, 8589, 13316, 8586, 8587, 8586, 8584, 8597, 8600, 8599, 8598, 8602, 8601, 8603, 8606, 8605, 8604, 8583, 8607,
					
					//Transcaucasia - Azerbaijan
					8614, 8568, 8569, 8567, 8564, 8562, 8521, 8520, 8557, 8524, 8555, 8525, 8526, 8527, 8530, 8528, 8540, 8541, 8542, 8549, 8554, 8553, 8556, 8551, 8552, 8563, 8564, 8566, 8547, 8543, 8550, 8544, 8539,
					
					//Transcaucasia - Armenia
					8561, 8523, 8522, 8558, 8559, 8560, 13626, 8570, 8591, 8595, 8592, 8593, 8594,
					
					//Turkish Transcaucasia
					8134, 8135, 8136, 8137, 8138, 8144, 8145, 8139, 8133,
					
					//Russian Poland - Post-Viennese Partition (Congress Poland)
					910, 909, 1022, 1026, 930, 931, 928, 929, 927, 923, 924, 926, 925, 1031, 1032, 1033, 1030, 1027, 1029, 1028, 1025, 932, 1024, 1023, 1021, 1016, 1014, 934, 933, 936, 935, 942, 1015, 1006, 12943, 1017, 1018, 1020, 1019, 1034, 1052, 1053, 1054, 1055, 1057, 1058, 1059, 2239, 2237, 2236, 2238, 1056, 1060, 1062, 1063, 922,
					
					//Duchy of Finland
					9121, 9122, 9123, 9124, 2206, 2209, 2197, 2205, 2196, 2194, 2195, 2173, 1272, 2199, 2198, 2171, 2190, 2192, 2193, 2191, 2187, 2186, 2185, 2184, 2179, 2180, 2178, 2177, 2182, 2181, 2183, 2176, 2175, 2188, 2189, 2170, 2168, 2169, 2166, 2164, 2174, 2163, 2161, 2165, 2160, 2155, 2156, 2167, 2157, 2158, 2159, 2200, 2207, 2202, 2201, 2208, 2151, 2204, 2203, 2149, 2148, 2152, 2153, 2154, 2146, 2145, 2150, 2144, 2143, 12962, 2142, 9129, 9130, 9138, 9137, 2139, 2141, 2140, 2138, 2137, 
					
					//Circassia
					8674, 8673, 8672, 8675, 8670, 8679, 13620, 13622, 8680, 13317, 8701, 8697, 8653, 8652, 8651, 8650, 8578, 8643, 8642, 8641, 8640, 8639, 8616, 8618, 8619, 8621, 8622, 8626, 8627, 8620, 8638, 8637, 8669, 8645, 8644, 8649, 8646, 8647, 8648, 13318, 8661, 8662, 8660, 8657, 8665, 8664, 8666, 8667, 8663, 8668, 8617, 13618, 14071, 8690, 8688, 8689, 8685, 8659, 8658, 8655, 8656, 8654, 8684, 8686, 8587, 8694, 8703, 8695, 8696, 8682, 8683,
					
					//Northern Siberia
					9096, 9099, 9101, 9100, 9148, 9254, 9255, 9252, 9257, 9256, 9258, 9260, 9147, 9146, 9261, 9262, 9270, 9259, 9273, 9272, 9274, 9253, 9275, 9325, 9326, 9324, 9348, 9347, 9329, 9327, 9328, 9271, 9269, 9268, 9331, 9330, 9346, 9356, 9355, 9354, 9353, 9402, 9401, 9417, 9416, 9415, 9422, 9439, 9440, 9442, 9441, 9438, 9437, 9445, 9423, 9421, 9420, 9424, 9425, 9436, 9435, 9426, 9419, 9418, 9414, 9360, 9359, 9357, 9345, 9344, 9343, 9342, 9358, 9361, 9341, 9340, 9339, 9337, 9338, 9335, 9336, 9333, 9334, 9332, 9267, 9263, 9264, 9266, 9265, 9141, 9142, 9143, 9145, 9365, 9364, 9362, 9363, 9410, 9413, 9412, 9411, 9367, 9366, 9429, 9428, 9427, 13637, 9434, 9446, 9433, 13635, 9431, 9432, 9456, 9457, 9458, 9459, 9430, 9455, 9462, 9460, 9461, 9450, 9447, 9451, 9452, 9453, 9454, 9463, 9464, 9465, 9466, 9497, 9467, 9496, 9495, 9490, 9489, 9488, 9469, 9468, 9449, 9448, 9389, 9470, 9491, 9492, 9493, 9494, 9498, 9499, 14078, 14079, 13689, 14080, 13685, 13651, 13652, 13645, 9518, 9512, 9519, 13643, 13644, 13656, 13646, 13649, 13655, 13650, 13686, 13688, 13648, 13647, 13642, 13690, 13691, 13640, 13692, 13639, 13638, 9566, 9565, 9564, 9570, 9569, 9567, 9563, 9571, 13641, 9561, 9560, 9522, 9559, 9556, 9557, 9590, 9587, 9588, 9589, 9558, 9586, 9585, 9584, 9583, 9699, 9624, 9625, 9703, 9580, 9704, 13679, 13680, 6963, 9716, 9719, 9710, 9709, 13681, 9732, 9733, 9734, 9708, 9707, 9706, 9705, 9579, 9577, 9576, 9578, 10048, 10049, 10043, 10042, 10041, 10038, 10040, 10016, 10012, 10015, 10039, 10037, 10017, 10018, 10021, 10019, 10020, 10008, 10023, 10007, 10022, 10029, 10030, 10036, 10034, 10035, 10032, 10031, 9998, 10028, 10027, 10026, 9997, 10025, 10024, 10001, 9976, 9977, 9978, 9979, 9981, 9980, 9982, 9983, 10000, 9999, 9996, 9986, 9995, 9992, 9988, 9990, 9991, 9993, 9994, 100033,
					
					//Central Asia
					10502, 13634, 9154, 9155, 10503, 10504, 10505, 10506, 10457, 10507, 10508, 10458, 10456, 10455, 10454, 10452, 10453, 10459, 10506, 10460, 10510, 10461, 10463, 10466, 10467, 10511, 10512, 10468, 10469, 10465, 10464, 10462, 10420, 10417, 10415, 10416, 10418, 10387, 10386, 10385, 10384, 10383, 10382, 10434, 10433, 10432, 10381, 10431, 10430, 10395, 10380, 10379, 10373, 10516, 10519, 10518, 10520, 10517, 10526, 10521, 10525, 10522, 10524, 10523, 10537, 10538, 10539, 10492, 10491, 10490, 10488, 10487, 10486, 10498, 10484, 10485, 10437, 10479, 10480, 10483, 10478, 10477, 10482, 10481, 13663, 13662, 13661, 10535, 10536, 10534, 10533, 10531, 10532, 10527, 10530, 10494, 10529, 10528, 10470, 10471, 10493, 10472, 10451, 10421, 10419, 10450, 10449, 10446, 10445, 10444, 10443, 10447, 10448, 10442, 10441, 10473, 10474, 10475, 10476, 10436, 10435, 10438, 10439, 10440, 10428, 10429, 10414, 10412, 10413, 10427, 10426, 10425, 10424, 10423, 10408, 10409, 10411, 10396, 10394, 10393, 10377, 10378, 10392, 10391, 10376, 10375, 10374, 10388, 10390, 10397, 10398, 10389, 10323, 10324, 10316, 10305, 13716, 10306, 10301, 10330, 10329,  10327, 10334, 10319, 10369, 10328, 10283, 10251, 10250, 10249, 10248, 10247, 10246, 10243, 10268, 10264, 10261, 10269, 10270, 10267, 10271, 10272, 10273, 10322, 10321, 10371, 10372, 10320, 10370, 10400, 10399, 10402, 10410, 10401, 10403, 10405, 10407, 10404, 10337, 10336, 10335, 10333, 10332, 10331, 10340, 10341, 10339, 10347, 10338, 10348, 10406, 10368, 10266, 10263, 10265, 10260, 10262, 10254, 10253, 10252, 10255, 10256, 10257, 10258, 10282, 10294, 10342, 10343, 10344, 10346, 10345, 10367, 10366, 10365, 10364, 10362, 10361, 10359, 10360, 10363, 10355, 10299, 10295, 10296, 10298, 10291, 10293, 10292, 10275, 10274, 10279, 10278, 10276, 10289, 10297, 10290, 10277, 10281, 10280, 10284, 10285, 10288, 10287, 10353, 10354, 10352, 10351, 10356, 10358, 10357, 10349, 10350, 10286, 10244, 10245, 10300, 13712, 10259,
					
					//Amur
					9205, 9206, 9207, 9750, 9208, 9209, 9210, 9211, 9212, 9754, 9753, 9752, 9751, 9759, 9760, 9762, 9755, 9756, 9757, 9223, 9221, 9222, 9220, 9219, 9213, 9218, 9216, 9215, 9214,
					
					//North Sakhalin
					9224,
					
					//Tannu Tuva
					9183, 9184, 9185, 9543, 9544, 9189, 9188, 9187, 9186, 13676,
					
					//Manchuria
					12912, 12913, 12914, 12911, 12910, 12905, 12866, 12872, 12873, 12874, 12864, 12862, 12859, 12860, 12861, 12863, 12868, 12867, 12869, 12879, 12880, 12881, 12882, 12890, 9217, 12893, 12894, 12895, 12896, 12892, 12891, 12889, 12885, 12883, 12884, 12886, 12875, 12877, 12878, 12870, 12871, 12876, 12887, 12888, 12899, 12900, 12903, 12904, 12901, 12902, 12906, 12898, 12897, 12907, 12909, 12917, 12921, 12923, 12924, 12925, 12922, 12920, 12918, 12919, 12916, 12915,
					
					//Mongolia
					12457, 12571, 12570, 12572, 12458, 12477, 12475, 12459, 12460, 12461, 12462, 12474, 12473, 12463, 12464, 12465, 12466, 12467, 12468, 12469, 13678, 12470, 12471, 12482, 12481, 12472, 13677, 12480, 12478, 12479,
					
					//Afghanistan
					10543, 10544, 10545, 10546, 10547, 10548, 10540, 10558, 13714, 10557, 10556, 10582, 10554, 10553, 10703, 10559, 10551, 10550, 10583, 10555, 10568, 10570, 10569, 10225, 10590, 10592, 10594, 10593, 10653, 10596, 10595, 10591, 10571, 10572, 10575, 10574, 10573, 10566, 10567, 10562, 10563, 10564, 10565, 10578, 10577, 10576, 10589, 10598, 10579, 10580, 10581, 10584, 10585, 10586, 10587, 10588, 10599, 10601, 10602, 10603, 10612, 10552, 13713, 10611, 10610, 10613, 10614, 10616, 10617, 10615, 10686, 10618, 10637, 10638, 10639, 10609, 10608, 10605, 10606, 10604, 10607, 10600, 10640, 10636, 10619, 10622, 10621, 10620, 10541, 13715, 10623, 10635, 10624, 10309, 10308, 10307, 10317, 10318, 10310, 10326, 10325, 10311, 10312, 10315, 10304, 10313, 10314, 10628, 10303, 10302, 10656, 10655, 10654, 10652, 10651, 10597, 10650, 10645, 10646, 10644, 10643, 10642, 10641, 10634, 10632, 10633, 10648, 10631, 10630, 10629, 10647, 10649, 10627, 10626, 10625,
					
					//South Sakhalin
					9225,
					
					//Kuril Islands
					10063, 10062, 10064, 10061, 10060, 10059, 
				]
			}
		},
		royaume_de_france: {
			//Default parameters
			name: "Royaume de France",
			colour: [116, 132, 201],
			culture_name: "French",
			government: "absolute_monarchy",
			flag: "https://cdn.discordapp.com/attachments/829862963485474827/876444588947148810/2560px-Royal_flag_of_France_during_the_Bourbon_Restoration.png",
			motto: "Montjoie Saint Denis!",
			spawn_years: [[1815, 1830]],
			starting_earth_province: 542,
			
			aggression: 1.0,
			capital_city: "Paris",
			cities: {
				earth: {
					"Paris": 542,
					"Lyon": 651,
					"Marseille": 667,
					"Montpellier": 638,
					"Nantes": 589,
					"Brest": 570,
					"Rennes": 583,
					"Bordeaux": 604,
					"Toulouse": 625,
					"Avignon": 655,
					"Limoges": 597,
					"Clermont-Ferrand": 646,
					"La Rochelle": 601,
					"Strasbourg": 416,
					"Lille": 497
				},
				generic_names: [
					"Calais",
					"Saint-Malo",
					"Grenoble",
					"Bayonne",
					"Dieppe",
					"Le Havre",
					"Rouen",
					"Dunkerque",
					"Arras",
					"Saint-Quentin",
					"Chartres",
					"Tours",
					"Orleans",
					"Reims",
					"Verdun",
					"Metz",
					"Nancy",
					"Epinal",
					"Troyes",
					"Amiens",
					"Poitiers",
					"Avignon",
					"Valence",
					"Macon",
					"Toulon",
					"Pau",
					"Beziers",
					"Caen",
					"Dijon",
					"Rochefort"
				]
			},
			colonial_preferred_provs: {
				earth: [
					//Early Colonies
					5102, //Quebec
					5048, //St. Pierre et Miquelon
					3142, //Dakar
					7056, //Haiti
					7079, //Guadeloupe
					7082, //Martinique
					7181, //Cayenne
					6205, //New Orleans
					11782, //Puducherry
					12120, //Chandannagar
					4975, //Reunion
					
					//Later Colonies
					2936, //Algiers
					2853, //Bone
					2709, //Tunisia
					4947, //Madagascar
					3962, //Libreville
					4347, //French Somaliland
					8209, //Beirut
					8151, //Latakia
					14002, //Cochinchina
					7849, //New Caledonia
					11515, //French Polynesia
					11501,
					11414, //France-Antarctique
				]
			},
			imperialist: true,
			expansionism: 1.0,
			expansion_style: "wide",
			preferred_provinces: {
				earth: [
					//Metropolitan France
					542, 651, 667, 638, 589, 570, 583, 604, 625, 655, 597, 646, 601, 416, 497, 571, 572, 573, 574, 575, 576, 577, 578, 579, 582, 580, 581, 584, 585, 586, 588, 591, 590, 587, 593, 589, 592, 605, 602, 602, 603, 600, 606, 606, 607, 598, 541, 521, 543, 546, 551, 547, 552, 553, 548, 545, 544, 517, 518, 519, 516, 511, 510, 512, 520, 559, 569, 568, 560, 562, 561, 563, 564, 594, 595, 557, 558, 554, 555, 556, 596, 644, 645, 550, 549, 539, 540, 538, 647, 537, 536, 528, 527, 523, 522, 524, 526, 535, 534, 531, 530, 529, 533, 532, 525, 488, 515, 504, 503, 505, 501, 502, 506, 509, 507, 500, 463, 462, 496, 499, 508, 498, 513, 514, 494, 495, 493, 492, 491, 490, 482, 481, 480, 479, 478, 477, 487, 486, 467, 421, 422, 420, 418, 419, 469, 470, 417, 415, 468, 464, 465, 466, 484, 485, 483, 475, 476, 474, 471, 472, 473, 608, 609, 610, 612, 611, 616, 617, 618, 614, 613, 619, 620, 621, 622, 623, 624, 626, 627, 629, 630, 631, 639, 637, 628, 636, 632, 642, 12932, 648, 649, 650, 652, 641, 640, 653, 668, 669, 666, 656, 657, 658, 655, 665, 664, 659, 663, 654, 652,
					
					//Perpignan
					633, 635, 634,
					
					//Corsica
					672, 673,
					
					//Nice and Annecy-Chamonix
					670, 660, 661, 662,
					
					//Rheinland and Saarland (including Belgium and the Lower Netherlands)
					257, 256, 253, 255, 254, 261, 260, 259, 258, 264, 268, 265, 267, 266, 270, 271, 278, 279, 277, 275, 274, 273, 364, 370, 366, 365, 272, 412, 410, 409, 394, 393, 395, 396, 408, 12931, 413, 414, 407, 397, 392, 391, 406, 405, 369, 368, 367, 376, 377, 374, 489, 387, 388, 375, 399, 386, 398, 389, 390, 400, 401, 402, 403, 404,
					
					//Catalonia
					684, 683, 685, 681, 682, 680, 671, 678, 686, 687, 688, 689,
					
					//Piedmont and Liguria
					1069, 1070, 1087, 1088, 1091, 1095, 1104, 1089, 1081, 1082, 1080, 1078, 1079, 1077, 1085, 1086, 1084, 1074, 1073, 1072, 1083, 1076, 1075, 1071,
					
					//Elba
					1209, 1210
				]
			}
		},
		the_sublime_ottoman_state: { //WIP - Rework cities to include Baghdad, Damascus, Aleppo, Cairo, Sarajevo, and other non-Turkish cities
			//Default Parameters
			name: "The Sublime Ottoman State",
			colour: [153, 183, 148],
			culture_name: "Turkish",
			government: "absolute_monarchy",
			flag: "https://media.discordapp.net/attachments/829862963485474827/876494071034691686/1920px-Flag_of_the_Ottoman_Empire_281844E28093192229.png",
			motto: "دولت ابد مدت",
			spawn_years: [[1453, 1922]],
			starting_earth_province: 1966,
			
			aggression: 0.8,
			capital_city: "Konstantiniye",
			cities: {
				earth: {
					"Konstantiniye": 1966,
					"Edirne": 1954,
					"Ankara": 7931,
					"Bursa": 7901,
					"Konya": 7996,
					"Samsun": 8110,
					"Gaziantep": 8070,
					"Diyarbakir": 8076,
					"Izmir": 7961,
					"Kayseri": 8032,
					"Malatya": 8078,
					"Marsin": 8006,
					"Antalya": 7989
				},
				generic_names: [
					"Zonguldak",
					"Denizli",
					"Ordu",
					"Mugla",
					"Eskisehir",
					"Inebolu",
					"Sinop",
					"Adana",
					"Tarsus",
					"Artuin",
					"Bodrum",
					"Eregli",
					"Silifke",
					"Sivas",
					"Amasya",
					"Marmaris",
					"Trabzon",
					"Erzurum",
					"Urfa",
					"Izmit",
					"Afyonkarhisar",
					"Bitlis",
					"Yalova"
				]
			},
			imperialist: false,
			expansionism: 0.25,
			expansion_style: "wide",
			preferred_provinces: {
				earth: [
					//Turkey and Anatolia
					1966, 1954, 7931, 7901, 7996, 8110, 8070, 8076, 7961, 8032, 8078, 8006, 7989, 1962, 1963, 1961, 1960, 1964, 1959, 1958, 1965, 1957, 1955, 1957, 1955, 7896, 7897, 7898, 7899, 7922, 7921, 7920, 7923, 7919, 7900, 7917, 7915, 7918, 7916, 7914, 7913, 7902, 7903, 7904, 7905, 7906, 7907, 7908, 7912, 7909, 7910, 7911, 7960, 7959, 7973, 7962, 7963, 7965, 7964, 7968, 7969, 7970, 7971, 7981, 7982, 7986, 7987, 7988, 7985, 7983, 7984, 7979, 7980, 7972, 7967, 7966, 7977, 7978, 7976, 7975, 7974, 7948, 7958, 7957, 7949, 7956, 7955, 7950, 7951, 7952, 7954, 7953, 7991, 7990, 7992, 7995, 7997, 7947, 7946, 7928, 7929, 7930, 7945, 7993, 8004, 7994, 8001, 8005, 8002, 8000, 8003, 7999, 7998, 8015, 8016, 8014, 8013, 8012, 8008, 8007, 8009, 8010, 8011, 8041, 8042, 8040, 8038, 8037, 8043, 8039, 8044, 8069, 8036, 7924, 7925, 7926, 7927, 7931, 7932, 7933, 7944, 8017, 8018, 7938, 7937, 7936, 7935, 7934, 7943, 8019, 8020, 8027, 8028, 8029, 8105, 8106, 8104, 8103, 8031, 8030, 8108, 8021, 8026, 7942, 7940, 7939, 7941, 8023, 8022, 8025, 8024, 8109, 8111, 8112, 8113, 8114, 8115, 8116, 8107, 8102, 8033, 8034, 8035, 8071, 8072, 8045, 8046, 8048, 8047, 8049, 8050, 8051, 8052, 8053, 8054, 8068, 8067, 8066, 8065, 8075, 8074, 8073, 8077, 8079, 8080, 8081, 8082, 8083, 8084, 8062, 8063, 8064, 8061, 8060, 8055, 8056, 8057, 8058, 8059, 8090, 8089, 8091, 8092, 8088, 8085, 8086, 8087, 8098, 8097, 8101, 8100, 8121, 8099, 8096, 8118, 8119, 8117, 8122, 8120, 8123, 8124, 8128, 8129, 8125, 8131, 8130, 8132, 8133, 8134, 8135, 8136, 8141, 8137, 8138, 8139, 8145, 8142, 8144, 8143, 8140, 8093, 8094, 8095, 8126, 8127,
					
					//Cyprus
					8149, 8150, 8148, 8147, 8146,
					
					//Balkan Europe
					8190, 8191, 1889, 1888, 1887, 1886, 1885, 1884, 1882, 1883, 1892, 1893, 1897, 1896, 1895, 1871, 1881, 1880, 1879, 1877, 1876, 1872, 1874, 1873, 1855, 1856, 1857, 1858, 1854, 1848, 1847, 1836, 1835, 1826, 1870, 1869, 12957, 1867, 1868, 1865, 1866, 1864, 1863, 1862, 1861, 1860, 1859, 1853, 1852, 1843, 1844, 1851, 1850, 1849, 1846, 1845, 1838, 1837, 1839, 1842, 1841, 1840, 1832, 1833, 1834, 1831, 1827, 1825, 1828, 1829, 1830, 12958, 1894, 1902, 1909, 1910, 1911, 1907, 1908, 1901, 1900, 1899, 1898, 1868, 1905, 1903, 1904, 1906, 1806, 1805, 1804, 1803, 1802, 1800, 1801, 1792, 1799, 1796, 1797, 1798, 1791, 1790, 1795, 1794, 1793, 1788, 1789, 1759, 1761, 1762, 1758, 1755, 1757, 1760, 1809, 1810, 1811, 1812, 1814, 1815, 1816, 1824, 1822, 1823, 1821, 1820, 1817, 1818, 1819, 1813, 1807, 1772, 1808, 1769, 1770, 1773, 1771, 1768, 1766, 1767, 1767, 1763, 1756, 1754, 1764, 1765, 1781, 1774, 1775, 1776, 1777, 1778, 1779, 1787, 1780, 1786, 1748, 1785, 1784, 1782, 1783, 1753, 1751, 1752, 1750, 1747, 1746, 1745, 1743, 1744, 1878, 1875, 1922, 1921, 1923, 1924, 1926, 1925, 1930, 1929, 1928, 1927, 1944, 1956, 1951, 1950, 1949, 1948, 1952, 1953, 1947, 1946, 1939, 1938, 1945, 1937, 1935, 1936, 1940, 1942, 1941, 1932, 1943, 1931, 1920, 1919, 1918, 1917, 12956, 1915, 1933, 1916, 1934, 1914, 1912, 1749, 1736, 1733, 1734, 1735, 1730, 1731, 1732, 1717, 1718, 1716, 1715, 1713, 1714, 1712, 1719, 1726, 1729, 1728, 1725, 1727, 1724, 1723, 1700, 1722, 1703, 1701, 1702, 1704, 1720, 1710, 1711, 1709, 1707, 1708, 1705, 1706,
					
					//Wallachia and Moldavia
					1645, 1646, 1647, 1648, 1649, 1650, 1652, 1653, 1655, 1654, 1670, 1669, 1668, 1667, 1666, 1651, 1634, 1633, 1635, 1636, 1637, 1638, 1641, 1640, 1639, 1644, 1643, 12959, 1627, 1630, 1629, 1631, 1632, 1623, 1628, 1624, 1626, 1625, 1617, 1622, 1621, 1620, 1619, 1618,
					
					//Levant, Iraq
					8156, 8155, 8157, 8158, 8162, 8164, 8163, 8151, 8152, 8165, 8153, 8206, 8205, 8207, 8209, 8208, 8210, 8154, 8159, 8160, 8161, 8170, 8168, 8167, 13694, 8166, 8177, 8178, 8179, 8182, 8183, 8169, 8190, 8186, 8185, 8184, 8180, 8181, 8193, 8194, 8200, 8201, 8203, 8204, 8198, 8197, 8199, 8195, 8176, 8175, 8172, 8192, 8171, 8174, 8173, 8196, 8357, 8356, 8354, 8352, 8355, 8353, 8264, 8263, 8262, 8265, 8270, 8271, 8268, 8269, 8266, 8261, 8267, 8260, 8259, 8258, 8257, 8256, 8255, 8253, 13703, 8252, 8276, 8277, 8278, 8279, 8280, 8281, 8251, 8250, 8248, 8249, 8318, 8317, 8314, 8313, 8312, 8311, 8310, 8309, 8308, 8307, 8315, 8316, 8304, 8303, 8305, 8306, 8302, 8301, 8291, 8292, 8290, 8289, 8288, 8286, 8287, 8285, 8284, 8283, 8282, 8293, 8294, 8295, 8296, 8297, 8298, 8299, 8300,
					
					//Palestine and Transjordan
					8246, 8245, 8243, 8244, 8242, 8241, 8240, 8231, 8239, 8238, 8230, 8229, 8227, 8228, 8225, 8226, 8218, 8219, 8217, 8216, 8215, 8221, 8220, 8222, 8223, 8224, 8211, 8212, 8213, 8214,
					
					//Arabia and Hejaz
					8358, 8360, 13697, 8519, 13698, 8518, 8323, 8324, 13695, 8341, 8340, 8330, 8339, 8337, 8331, 8332, 8333, 8338, 8336, 8334, 
					
					//Ottoman Yemen
					8424, 8425, 8426, 8427, 8407, 8408, 8410, 8413, 8414, 8395, 8390, 13700, 13701, 14073, 14074, 8391, 8392, 8393, 8394, 8412, 8411, 8406, 8402, 8405, 8404, 8403, 8399, 8400, 8401,
					
					//Egypt
					2588, 2587, 2586, 2592, 2591, 2590, 2594, 2593, 2589, 2629, 2630, 2640, 2628, 2648, 2625, 2650, 2649, 2650, 2626, 2627, 2624, 2651, 2652, 2647, 2641, 2639, 2597, 2638, 2632, 2631, 2633, 2636, 2637, 2642, 2643, 2644, 2645, 2656, 2646, 2653, 2654, 2655, 2657, 2623, 2622, 2621, 2620, 2619, 2618, 2617, 2616, 2598, 13306, 12986, 12988, 12987, 2599, 13014, 12990, 12989, 12992, 12993, 12999, 13015, 13000, 12999, 12998, 13003, 13004, 13002, 13001, 13007, 13006, 13005, 13008, 13018, 13022, 13020, 13021, 13019, 2596, 2595, 12996, 12997, 13013, 13012, 13011, 13017, 13010, 13009, 12994, 12995, 2615, 2614, 2612, 2611, 2610, 2609, 2608, 2634, 2635, 2602, 13025, 2603, 2605, 2607, 2606, 13024, 13023, 2600,
					
					//Sudan and Eritrea
					4112, 4113, 4116, 4117, 4115, 4114, 4102, 4108, 4126, 4125, 4120, 4111, 4119, 4118, 4124, 4127, 4128, 4130, 4129, 4131, 4168, 4169, 4352, 4355, 4350, 4351, 4347, 4346, 4348, 4207, 4173, 4172, 4171, 4170, 4103, 4106, 4107, 4123, 4122, 4109, 4110, 4121,
					
					//North Africa
					2660, 2663, 2665, 2666, 2674, 2672, 2670, 2668, 2664, 2667, 2659, 2658, 2669, 2671, 2673, 2675, 2676, 2721, 2722, 2723, 2724, 2725, 2727, 2728, 13026, 2729, 2726, 2745, 2746, 2743, 2744, 2730, 2736, 2737, 2738, 2742, 2741, 2740, 2739, 2748, 2747, 2749, 2750, 2754, 2769, 2760, 2757, 2756, 2755, 2765, 2764, 2763, 2761, 2762, 2767, 2766, 2768, 2770, 2771, 2772, 2773, 2774, 2775, 2777, 2776, 2778, 2779, 2780, 2781, 2786, 2787, 2782, 2786, 2791, 2790, 2793, 2794, 2792, 2789, 2795, 2788, 2796, 2797, 2798, 2831, 2832, 2833, 2830, 2828, 2827, 2829, 2834, 2872, 2871, 2914, 2915, 2939, 2940, 2943, 2942, 2944, 2838, 2841, 2847, 2839, 2842, 2843, 2844, 2861, 2860, 2845, 2848, 2846, 2849, 2850, 2851, 2852, 2853, 2855, 13029, 2856, 13020, 2857, 2858, 2859, 2866, 2867, 2868, 2869, 2863, 2840, 2835, 2836, 2837, 2862, 2865, 2864, 2870, 2917, 2916, 2945, 2937, 2918, 2919, 2920, 2921, 2931, 2932, 2934, 2933, 2935, 2936, 13031, 2938, 2958, 2957, 2956, 2962, 2964, 2961, 2959, 2960, 2968, 2969, 2966, 2965, 2963, 2955, 2946, 2954, 2948, 2953, 2970, 13032, 2967, 2972, 2971, 2952, 2949, 2950, 2951, 2973, 2974,
					
					//Batumi
					8598, 8599
				]
			}
		},
		united_kingdom_of_great_britain_and_ireland: {
			//Default parameters
			name: "United Kingdom of Great Britain and Ireland",
			colour: [255, 48, 62],
			culture_name: "British",
			government: "constitutional_monarchy",
			flag: "https://media.discordapp.net/attachments/829862963485474827/871642113832525854/UK-flag-union-jack-1024x683.png",
			motto: "Dieu et mon droit",
			spawn_years: [[1801, 1922]],
			starting_earth_province: 1301,
			
			aggression: 1.0,
			capital_city: "London",
			cities: {
				earth: {
					"Birmingham": 1338,
					"York": 1351,
					"Liverpool": 1359,
					"Manchester": 1360,
					"Cardiff": 1378,
					"Bristol": 1319,
					"Plymouth": 1313,
					"Coventry": 1337,
					"Edinburgh": 12934,
					"Glasgow": 1393,
					"Belfast": 1414,
					"Dublin": 1427,
					"Leeds": 1352,
					"Sheffield": 1349,
					"Colchester": 1325,
					"Newcastle upon Tyne": 1355,
					"Kingston upon Hull": 1347,
					"Sunderland": 1357
				},
				generic_names: [
					"Brighton",
					"Canterbury",
					"Southampton",
					"Portsmouth",
					"Bournemouth",
					"Weymouth",
					"Exeter",
					"Torquay",
					"Swansea",
					"Newport",
					"Cambridge",
					"Ipswich",
					"Norwich",
					"Derby",
					"Bath",
					"Swindon",
					"Oxford",
					"Reading",
					"Peterborough",
					"Leicester",
					"Nottingham",
					"Wolverhampton",
					"Warrington",
					"Blackpool",
					"Durham",
					"Dumfries",
					"Perth",
					"Dundee",
					"Livingston",
					"Paisley",
					"Wick",
					"Scapa Flow",
					"Londonderry"
				]
			},
			colonial_preferred_provs: {
				earth: [
					//Early Colonies
					5050, //Newfoundland
					4997, //Halifax
					6666, //Jamestown
					6506, //Cape Cod
					
					674, //Minorca
					7027, //Mosquito Coast
					7007, //Belize
					11991, //Kolkata
					11692, //Bombay
					7646, //Botany Bay
					7845, //Auckland
					7171, //Georgetown
					7053, //Jamaica
					7069, //Bahamas
					7088, //Trinidad and Tobago
					
					//Later Colonies
					2785, //Malta
					8147, //Cyprus
					8150, //Cyprus
					8424, //Aden Protectorate
					3697, //Lagos
					2623, //Alexandria
					3433, //Ghana
					3265, //Sierra Leone
					4913, //Cape Town
					11772, //Ceylon
					12184, //Rangoon
					12146, //Singapore
					12650, //Hong Kong
					13240, //Mombasa
					13243, //Zanzibar
					4352, //British Somaliland
					7866, //Port Moresby
				]
			},
			imperialist: true,
			expansionism: 1.0,
			expansion_style: "wide",
			preferred_provinces: {
				earth: [
					//England, Wales, and the Channel Islands
					1315, 1316, 1313, 1314, 1312, 1317, 1311, 567, 566, 1310, 1318, 1319, 1320, 1334, 1320, 1309, 1305, 1308, 1321, 1307, 1306, 1304, 1303, 1302, 1301, 1324, 1325, 1326, 1327, 1328, 1323, 1322, 1333, 1335, 1336, 1337, 1338, 1332, 1330, 1331, 1329, 1345, 1346, 1347, 1343, 1344, 1349, 1350, 1351, 1348, 1354, 1339, 1342, 1341, 1340, 1369, 1378, 1370, 1377, 1379, 1380, 1376, 1371, 1368, 1375, 1372, 1367, 1373, 1374, 1366, 1359, 1360, 1361, 1362, 1352, 1353, 1363, 1358, 1364, 1355, 1357, 1356, 1365,
					
					//Scotland
					1389, 1388, 1387, 1386, 1385, 1384, 1383, 1382, 1381, 1391, 1392, 12934, 1390, 1393, 1394, 1395, 1404, 1403, 1396, 1397, 1399, 1400, 1401, 1402, 1405, 1404, 1406, 1407, 1408, 1409, 1412, 1411, 1410, 1413,
					
					//Northern Ireland
					1421, 1420, 1419, 1418, 1416, 1417, 1415, 1414,
					
					//Irish Treaty Ports
					12936, 1437, 1422,
					
					//Ireland
					1427, 1426, 1431, 1432, 1428, 1429, 1430, 12937, 12935, 1433, 1425, 1445, 1444, 1446, 1424, 1423, 1448, 1447, 1443, 1449, 1442, 1441, 1440, 1435, 1434, 1436, 1439, 1438,
					
					//Gibraltar
					793
				]
			}
		}
	},
	
	casus_belli: {
		//status_quo, install_government, cut_down_to_size, liberation, puppet, retake_cores, annexation
		territorial_violation: {
			name: "Territorial Violation",
			description: "Target has moved armed forces through your country without permission.",
			icon: "<:active_personnel:716820390474940426>",
			infamy: 0,
			peace_demands: ["status_quo"]
		},
		theft: {
			name: "Theft",
			description: "Target scammed/blockaded you, etc.",
			icon: "<:taxes:716817688781127810>",
			infamy: 0,
			peace_demands: ["status_quo"]
		},
		containment: {
			name: "Containment",
			description: "Target has over 8 infamy.",
			icon: "<:infamy:716817688453709905>",
			infamy: 0,
			peace_demands: ["status_quo", "install_government", "cut_down_to_size"]
		},
		diplomatic_insult: {
			name: "Diplomatic Insult",
			description: "Target has formally insulted the attacker.",
			icon: "<:cb:716828676855169107>",
			infamy: 1,
			peace_demands: ["status_quo"]
		},
		colonial_integration: {
			name: "Colonial Integration",
			description: "Attacker's total deployed AP are over 4x that of their target's deployed military. Target has less than 75% of the attacker's total researched techs.",
			icon: "<:globe:716811246556545035>",
			infamy: 2,
			peace_demands: ["status_quo", "puppet", "annexation"]
		},
		free_oppressed_people: {
			name: "Free Oppressed People",
			description: "Attacker is a democracy/HM Government, target is not. Target has over 3 infamy.",
			icon: "<:diplomacy:716827579323121666>",
			infamy: 2,
			peace_demands: ["status_quo", "install_government"]
		},
		independence: {
			name: "Independence",
			description: "The attacker has been a puppet for more than 5 turns to the target.",
			icon: "<:revolt:716819535964930149>",
			infamy: 2,
			peace_demands: ["status_quo", "liberation"]
		},
		revanchism: {
			name: "Revanchism",
			description: "Target occupies land once controlled by the attacker.",
			icon: "<:old_map:716821884867444746>",
			infamy: 2,
			peace_demands: ["status_quo", "retake_cores"]
		},
		anschluss: {
			name: "Anschluss",
			description: "Target is your puppet, and refused to be annexed by you.",
			icon: "<:old_scroll:716828676880334881>",
			infamy: 3,
			peace_demands: ["status_quo", "annexation"]
		},
		lebensraum: {
			name: "Lebensraum",
			description: "Attacker is communist, fascist, or absolute monarchy.",
			icon: "<:land_vehicles:716821195215077406>",
			infamy: 5,
			peace_demands: ["puppet", "annexation"]
		},
		acquire_state: {
			name: "Acquire State",
			description: "Attacker's capital is less than 15 provinces away from target's capital. Attacker's total AP are over twice that of target's.",
			icon: "<:provinces:716809229603700737>",
			infamy: 5,
			peace_demands: ["puppet", "annexation"]
		}
	},
	
	decisions: { //Not currently in use!
		//Decisions API to be implemented later
	},
	
	events: {
		access_cancelled: {
			name: "Military Access Cancelled.",
			description: "{0} has cancelled our right to passage through their territorial claims for our military assets. Oh, well, we didn't need those traitorious scum anyway.",
			trigger: function (usr) {
				return false;
			},
			option_a_title: "We really should have beaten them to it.",
			option_a_description: "• Your military access has been cancelled by **{0}**!",
			option_a: function (usr) {
			}
		},
		access_denied: {
			name: "Request For Military Access Denied.",
			description: "{0} has denied our requests for military access repeatedly. If we can't get our way, we may just have to circumvent them ... one way or the other.",
			trigger: function (usr) {
			},
			option_a_title: "Unfortunate.",
			option_a_description: "• This option currently has no effect.",
			option_a: function (usr) {
			}
		},
		a_guarantee_for_our_nation: {
			name: "Our Sovereignty Guaranteed!",
			description: "{0}, seeking to form closer relations with our state, has decided to extend a guarantee of sovereignty to us to protect us from both internal and external threats. Our envoys and diplomats are looking forward to working with {0} in the future, and our people are relieved to finally have an ally in their time of need.",
			trigger: function (usr) {
				return false;
			},
			option_a_title: "They must be proud to offer this arrangement to such a noble nation.",
			option_a_description: "• **+25** Relations with {0}.\n• **+10%** Stability for 5 turns.",
			option_a_ai_chance: function (usr) {
				return 100;
			},
			option_a: function (usr) {
				for (var i = 0; i < usr.relations.length; i++) {
					if (usr.relations[i][1] == main.users.global.current_scope) {
						if (usr.relations[i][0]+25 <= 100) {
							usr.relations[i][0] = usr.relations[i][0] + 25;
						} else {
							usr.relations[i][0] = 100;
						}
					}
				}
				usr.temporary_modifiers.push(["stability_modifier", 10, 5]);
			},
			option_b_title: "How patronising!",
			option_b_description: "• This choice currently has no effect.",
			option_b_ai_chance: function (usr) {
				return 0;
			},
			option_b: function (usr) {
			}
		},
		a_guaranteed_peace: {
			name: "A Guaranteed Peace.", //[[user_id, turns_before_expiry]
			description: "{0} is offering us a non-aggression pact for the next 10 turns. It is up to you, however, as to how to respond to this present opportunity for making peace with the nation of {0}. Should we accept this opportunity for peace, or should we plan for war?",
			event_image: "https://media.discordapp.net/attachments/682166052393582627/740803688834269194/unknown.png",
			trigger: function (usr) {
				return false;
			},
			option_a_title: "We shall accept the offer.",
			option_a_description: "• **+20** Relations with {0}.\n• This will take up one of our diplomatic slots!",
			option_a_ai_chance: function (usr) {
				return 20;
			},
			option_a: function (usr) {
				for (var i = 0; i < usr.relations.length; i++) {
					if (usr.relations[i][1] == main.users.global.current_scope) {
						if (usr.relations[i][0]+20 <= 100) {
							usr.relations[i][0] = usr.relations[i][0] + 20;
						} else {
							usr.relations[i][0] = 100;
						}
					}
				}
				main.users[main.users.global.current_scope].non_aggression_pacts.push([usr.id, 10]);
				usr.non_aggression_pacts.push([main.users[main.users.global.current_scope].id, 10]);
				usr.used_diplomatic_slots++;
			},
			option_b_title: "We respectfully decline the offer.",
			option_b_description: "• This choice currently has no effect.",
			option_b_ai_chance: function (usr) {
				return 80;
			},
			option_b: function (usr) {
				printEvent(main.users.global.current_scope, "an_uneasy_peace");
			}
		},
		alliance_proposal: {
			name: "An Offer For Alliance.",
			description: "We have received an official diplomatic delegation from {0}. They are requesting our mutual aid and support in military and economic affairs, and a formal agreement regarding an alliance. How should our government respond?",
			event_image: "https://media.discordapp.net/attachments/682166052393582627/740803072304873542/unknown.png",
			trigger: function (usr) {
				//Check if user has received any alliance requests: [[nation, pending/accepted]]
				return false;
			},
			option_a_title: "It is in our best interest to conclude an alliance.",
			option_a_description: "• We enter into an alliance with **{0}**.\n• Improves relations with {0} by **+25**.\n• This will take up one of our diplomatic slots!",
			option_a_ai_chance: function (usr) {
				return 60;
			},
			option_a: function (usr) {
				usr.used_diplomatic_slots++;
				//[[value, player_id, [improving/decreasing/none, turns]]
				for (var i = 0; i < usr.allies.length; i++) {
					if (usr.allies[i][0] == main.users.global.current_scope) {
						usr.allies.splice(i, 1);
					}
				}
				usr.allies.push([main.users.global.current_scope, "accepted"]);
				main.users[main.users.global.current_scope].allies.push([usr.id, "accepted"]);
				for (var i = 0; i < usr.relations.length; i++) {
					if (usr.relations[i][1] == main.users.global.current_scope) {
						if (usr.relations[i][0]+25 <= 100) {
							usr.relations[i][0] = usr.relations[i][0] + 25;
						} else {
							usr.relations[i][0] = 100;
						}
					}
				}
				localisation.push(main.users[main.users.global.current_scope].name);
				localisation.push(usr.name);
				printEvent(main.users.global.current_scope, "alliance_accepted");
			},
			option_b_title: "Respectfully decline the offer for now.",
			option_b_description: "• We refuse **{0}'s** alliance proposal. This will harm our relations with them moderately.",
			option_b_ai_chance: function (usr) {
				return 40;
			},
			option_b: function (usr) {
				for (var i = 0; i < usr.relations.length; i++) {
					if (usr.relations[i][1] == main.users.global.current_scope) {
						if (usr.relations[i][0]-20 >= -100) {
							usr.relations[i][0] = usr.relations[i][0] - 20;
						} else {
							usr.relations[i][0] = -100;
						}
					}
				}
				for (var i = 0; i < usr.allies.length; i++) {
					if (usr.allies[i][0] == main.users.global.current_scope) {
						usr.allies.splice(i, 1); //Remove alliance request from array
					}
				}
				main.users[main.users.global.current_scope].used_diplomatic_slots--;
				localisation.push(usr.name);
				printEvent(main.users.global.current_scope, "alliance_declined");
			}
		},
		alliance_accepted: {
			name: "Our New Friend!",
			description: "{1} is cheering her new friend, {0} tonight. It comes as our diplomatic standing in the world is beginning to increase, and we hope that these well-made connections with other foreign powers can help protect our own people.",
			trigger: function (usr) {
				return false;
			},
			option_a_title: "We shall accomplish much together.",
			option_a_description: "• **+5%** Stability for 3 turns.",
			option_a: function (usr) {
				usr.temporary_modifiers.push(["stability_modifier", 5, 3]);
			}
		},
		alliance_declined: {
			name: "Alliance Rejected.",
			description: "{0} has declined our repeated requests for an alliance. We should get ready for whatever they have planned ...",
			trigger: function (usr) {
				return false;
			},
			option_a_title: "An unfortunate rejection.",
			option_a_description: "• This choice currently has no effect.",
			option_a: function (usr) {
			}
		},
		alliance_broken: {
			name: "Alliance Broken.",
			description: "We were informed by a diplomatic envoy from {0} that our alliance has expired today. Our government worries, however, that it could be the start of colder diplomatic relations between our two nations.",
			trigger: function (usr) {
				return false;
			},
			option_a_title: "What could we have done?",
			option_a_description: "• This choice currently has no effect.",
			option_a: function (usr) {
			}
		},
		an_offer_to_lay_down_arms: {
			//[user, war, peace_object
			name: "An Offer To Lay Down Arms.",
			description: "{0} is offering us peace in exchange for the terms listed below. We have the option to either accept or deny this.",
			trigger: function (usr) {
				return false;
			},
			option_a_title: "We accept this offer.",
			option_a_description: "• You concede to the terms listed below.",
			option_a: function (usr) {
				//(arg0_peace_obj, arg1_war_obj)
				parsePeace(main.users.global.current_scope[0], main.users.global.current_scope[1]);
			},
			option_b_ai_chance: function (usr) {
				return 0;
			},
			option_b_title: "And they call it ''peace''?",
			option_b_description: "• The war rages on ...",
			option_b: function (usr) {
			},
			option_b_ai_chance: function (usr) {
				return 100;
			}
		},
		an_uneasy_peace: {
			name: "An Uneasy Peace.",
			description: "An uneasy peace is now forming between us and {0} as the former has refused our requests for a non-aggression pact, which would surely be mutually beneficial to us both! Perhaps they have something to hide, and if they do, we'd better be ready ...",
			trigger: function (usr) {
				return false;
			},
			option_a_title: "Stand vigilant.",
			option_a_description: "• This option currently has no effect.",
			option_a: function (usr) {
			}
		},
		auroras_last_flight: {
			name: "Aurora's Last Flight.",
			description: "The engines hummed steadily as Miller glanced at the fuel gauge bouncing off the bottom. Runsend, had by their merit, earlier shone with the brilliance of a thousand suns, but now a seemingly eternal void of darkness enveloped the plane.\n\nThey all knew there was nowhere to go. {0} would be a crater, and {1} might not exist at all.\n\n'Raven, how do you feel?'\n\nRaven didn't respond.\n\n'Ah well, there'll be bombers on both sides of the Arctic that'll never see land', Miller said in a hushed tone.\n\nAnd with that, the fuel gauge steadied. Miller found a strange comfort grip his heart just before the plane whisked them ten thousand metres below to their watery graves.",
			event_image: "https://media.discordapp.net/attachments/751226425272434770/765012430874214400/unknown.png",
			trigger: function (usr) {
				if (usr.at_war.length > 0) {
					for (var i = 0; i < main.user_array.length; i++) {
						if (main.users[main.user_array[i]] == usr.at_war[0]) {
							if (main.users[main.user_array[i]].cities.city_array.length > 0) {
								localisation.push(main.users[main.user_array[i]].cities.city_array[0]);
							} else {
								localisation.push("Runsend");
							}
						}
					}
				} else {
					localisation.push("Runsend");
				}
				
				var all_cities = usr.cities.city_array;
				if (all_cities.length > 1) {
					localisation.push(usr.cities.city_array[0]);
					localisation.push(usr.cities.city_array[1]);
				} else {
					localisation.push(usr.cities.city_array[0]);
					localisation.push("Valsond");
				}
				return false;
			},
			option_a_title: "'Do you suppose anyone will ever know?'",
			option_a_description: "• The game comes to an end ...",
			option_a: function (usr) {
			}
		},
		call_to_arms: {
			name: "Call to Arms!",
			description: "{0} is attempting to call us into their war! Although this war may have been started by another country, we hold an alliance with {0}, and so if we seek to honour our alliance, we'll also need to muster our armed forces together. For us all.",
			event_image: "https://media.discordapp.net/attachments/751226425272434770/751226440971976754/Le_drapeau_belge.png",
			trigger: function (usr) {
				return false;
			},
			option_a_title: "Our nation is one of honour!",
			option_a_description: "• Join the **{1}**.\n• Our alliance will not be seen in vain ...",
			option_a: function (usr) {
				//[war_id, friendly_side: attacker/defender, opposing_side: attacker/defender, nation_calling_in_ally]
				main.users.global.wars[main.users.global.current_scope[0]][main.users.global.current_scope[1]].push(usr.id);
				for (var i = 0; i < main.users.global.wars[main.users.global.current_scope[0]][main.users.global.current_scope[2]].length; i++) {
					usr.at_war.push(main.users[main.users.global.wars[main.users.global.current_scope[0]][main.users.global.current_scope[2]][i]].name);
					//Add new belligerent to all opposing nations
					main.users[main.users.global.wars[main.users.global.current_scope[0]][main.users.global.current_scope[2]][i]].at_war.push(usr.name);
					main.users[main.users.global.wars[main.users.global.current_scope[0]][main.users.global.current_scope[2]][i]].at_war = unique(main.users[main.users.global.wars[main.users.global.current_scope[0]][main.users.global.current_scope[2]][i]].at_war);
				}
				usr.at_war = unique(usr.at_war);
			},
			option_b_title: "We can't afford this war.",
			option_b_description: "• Break alliance with **{0}**.\n• **-15%** Stability for 5 turns. \n• **{0}** will see this as a betrayal ...",
			option_b: function (usr) {
				console.log("Current Scope: " + main.users.global.current_scope[3]);
				console.log("User relations: " + usr.relations);
				for (var i = 0; i < usr.relations.length; i++) {
					if (usr.relations[i][1] == main.users.global.current_scope[3]) {
						if (usr.relations[i][0]-70 >= -100) {
							usr.relations[i][0] = usr.relations[i][0] - 70;
						} else {
							usr.relations[i][0] = -100;
						}
					}
				}
				for (var i = 0; i < usr.allies.length; i++) {
					if (usr.allies[i][0] == main.users.global.current_scope[3]) {
						usr.allies.splice(i, 1); //Remove alliance from array
					}
				}
				for (var i = 0; i < main.users[main.users.global.current_scope[3]].allies.length; i++) {
					if (main.users[main.users.global.current_scope[3]].allies[i][0] == usr.id) {
						main.users[main.users.global.current_scope[3]].allies.splice(i, 1); //Remove alliance from array
					}
				}
				usr.temporary_modifiers.push(["stability_modifier", -15, 5]);
			}
		},
		comet_sighted: {
			name: "Comet Sighted!",
			description: "Peasants are always superstitious, and the appearance of a comet in the sky has caused panic among our people. They are convinced that this is a sign that the end of times is near or that something bad is going to happen in the near future.",
			event_image: "https://media.discordapp.net/attachments/682166052393582627/740806719512379432/f65c82ddf92032087e9b472ec36903a5.png",
			trigger: function (usr) {
				var chance = randomNumber(0, 100);
				if (usr.techs_researched < 100) {
					if (chance <= 2) {
						if (usr.comet_sighted_event == undefined) {
							usr.comet_sighted_event = 1;
							return true;
						} else {
							if (usr.comet_sighted_event < 3) {
								return true;
								usr.comet_sighted_event++;
							} else {
								return false;
							}
						}
					} else {
						return false;
					}
				} else {
					return false;
				}
			},
			option_a_title: "It's an omen!",
			option_a_description: "• **-5%** Stability for 3 turns.",
			option_a: function (usr) {
				//[modifier, increment, lasting_turns]
				usr.temporary_modifiers.push(["stability_modifier", -5, 3]);
			}
		},
		declare_independence: { //Event not actually scripted to fire, so it's ok.
			name: "{0}'s Declaration of Independence.",
			description: "For too long, the peoples of {0} have been oppressed underneath the rule of the tyrannical {1}. Our lands have been ruthlessly exploited, and our men have been sent to die in foreign wars that are only for the benefit of {0}. The time for justice has arrived, and it has arrived on the point of a bayonet!",
			trigger: function (usr) {
				return false;
			},
			option_a_title: "This is an act of war!",
			option_a_description: "• {0} declares war on {1}",
			option_a: function (usr) {
				//Add effect later
			}
		},
		emergence_of_a_nation: {
			name: "Emergence of a Nation.",
			description: "Perhaps, over time, their culture had begun to evolve to be something different than that of their neighbours. Through thousands of years of migration, an entire people had shifted, leaving artefacts here and there for future archaeologists to admire.\n\nThen, even though they found themselves parcelled up by different kings and warlords, they found home.\n\nThey built towns and cities, forts and walls - until they built a kingdom of their own. Over time, they became known as the {0}.\n\nAnd although nations were not meant to last, they were to leave a legacy that was to surely stand the test of time.",
			event_image: "https://media.discordapp.net/attachments/751226425272434770/767857679292694578/unknown.png",
			trigger: function (usr) {
				return false;
			},
			option_a_title: "Nations come and go, the people endure.",
			option_a_description: "• The game begins ...",
			option_a: function (usr) {
			}
		},
		guarantee_broken: {
			name: "Guarantee Broken.",
			description: "{0} has rescinded their guarantee for our nation. It seems that they no longer wish to be friends with our great and mighty nation. Whatever the case, our military and our diplomats shall always be standing by at your service.",
			trigger: function (usr) {
				return false;
			},
			option_a_title: "Shame.",
			option_a_description: "• This choice currently has no effect.",
			option_a: function (usr) {
			}
		},
		non_aggression_pact_expired: {
			name: "The Expiry Of A Pact.",
			description: "Our non-aggression pact with {0} has expired, and our secretaries are urging for you to renew the pact with **{0}** in order to preserve peace and stability in the region and for our peoples. On the other hand, we could use it as an opportunity to attack, if we so desire ...",
			trigger: function (usr) {
				return false;
			},
			option_a_title: "Alright. Next brief, please!",
			option_a_description: "• This choice currently has no effect.",
			option_a: function (usr) {
			}
		},
		other_armies_our_soil: {
			name: "Other Armies, Our Soil.",
			description: "{0} is proposing to be able to move troops through our territory! Our advisors believe that it will likely have a negative impact on the stability of certain regions of our country, however, some advisors also say that the best option may simply be to yield into {0}'s demands. How should we respond?",
			trigger: function (usr) {
				return false;
			},
			option_a_title: "Let them march through.",
			option_a_description: "• **+10** Relations with {0}.\n• **-5%** Stability for 10 turns.\n• **{0}** will be given military access through our nation.",
			option_a_ai_chance: function (usr) {
				return 65;
			},
			option_a: function (usr) {
				for (var i = 0; i < usr.relations.length; i++) {
					if (usr.relations[i][1] == main.users.global.current_scope) {
						if (usr.relations[i][0]+10 <= 100) {
							usr.relations[i][0] = usr.relations[i][0] + 10;
						} else {
							usr.relations[i][0] = 100;
						}
					}
				}
				usr.temporary_modifiers.push(["stability_modifier", -5, 10]);
				main.users[main.users.global.current_scope].military_access.push(usr.id);
			},
			option_b_title: "They'll march through when we're dead!",
			option_b_description: "• This choice currently has no effect.",
			option_b_ai_chance: function (usr) {
				return 35;
			},
			option_b: function (usr) {
				printEvent(main.users.global.current_scope, "access_denied");
			}
		},
		our_hour_of_need: {
			name: "Our Hour of Need.",
			description: "Our nation is now locked in a state of war that threatens to consume our country. Our old friend, {0}, has promised to help us in this struggle. Our diplomats and envoys are standing by. What should we do?",
			trigger: function (usr) {
				return false;
			},
			option_a_title: "We need every friend we can get.",
			option_a_description: "• **{0}** may join the war.",
			option_a_ai_chance: function (usr) {
				return 90;
			},
			option_a: function (usr) {
				printEvent(main.users.global.current_scope, "the_promise_we_made");
			},
			option_b_title: "We shall fight alone.",
			option_b_description: "• This choice currently has no effect.",
			option_a_ai_chance: function (usr) {
				return 10;
			},
			option_b: function (usr) {
			}
		},
		pouring_over_the_maps: {
			name: "Pouring Over The Maps.",
			description: "Somewhere in High Command sits a map that countless generals have spent years working on, that countless agents of our intelligence have been working for, a map littered with arrows stabbing into the heart of the {0} nation. They've refused to be rightfully incorporated into our burgeoning nation, so now we must give them war.",
			trigger: function (usr) {
				return false;
			},
			option_a_title: "It was our land anyway.",
			option_a_description: "• We have gained a **Anschluss CB** against {0}. It will be valid for 10 turns.",
			option_a: function (usr) {
			}
		},
		rival_declared: {
			name: "A New Rival!",
			description: "Relations between us and {0} have never been colder. Diplomatic relations have been suspended, and our forces are marching to the border immediately. Our citizens are growing more and more eager to view them, if not as rivals, then at least as enemies.",
			trigger: function (usr) {
				return false;
			},
			option_a_title: "It's either us or them.",
			option_a_description: "• **-50** Relations with {0}.\n• Rival relations with {0}.",
			option_a: function (usr) {
				for (var i = 0; i < usr.relations.length; i++) {
					if (usr.relations[i][1] == main.users.global.current_scope) {
						if (usr.relations[i][0]-50 >= -100) {
							usr.relations[i][0] = usr.relations[i][0] - 50;
						} else {
							usr.relations[i][0] = -100;
						}
					}
				}
			}
		},
		the_coming_integration: {
			name: "The Coming Integration.",
			description: "Although we were the protectorate of {0}, the last thing we expected them to do was to betray that trust and request our annexation! However, we have just received word that their armies on our doorstep, and refusing their request to annex us could result in open conflict. What shall we do?",
			trigger: function (usr) {
				return false;
			},
			option_a_title: "Those bloody backstabbers!",
			option_a_description: "• {0} gains an Anschluss CB on us for 10 turns.\n• **-30** Relations with {0}.\n• We are no longer their vassal!",
			option_a_ai_chance: function (usr) {
				return 0;
			},
			option_a: function (usr) { //WIP
				var ot_user = main.users[main.users.global.current_scope];
				console.log(main.users.global.current_scope);
				
				//Remove vassalisation
				for (var i = 0; i < ot_user.vassals.length; i++) {
					if (ot_user.vassals[i] == usr.id) {
						ot_user.vassals.splice(i, 1);
					}
				}
				//Grant Anschluss CB
				ot_user.casus_belli.push(["anschluss", usr.id, 10]);
				//-30 Relations, on both ends
				for (var i = 0; i < usr.relations.length; i++) {
					if (usr.relations[i][1] == main.users.global.current_scope) {
						if (usr.relations[i][0]-30 >= -100) {
							usr.relations[i][0] = usr.relations[i][0] - 30;
						} else {
							usr.relations[i][0] = -100;
						}
					}
				}
				for (var i = 0; i < ot_user.relations.length; i++) {
					if (ot_user.relations[i][1] == usr.id) {
						if (ot_user.relations[i][0]-30 >= -100) {
							ot_user.relations[i][0] = ot_user.relations[i][0] - 30;
						} else {
							ot_user.relations[i][0] = -100;
						}
					}
				}
				
				localisation.push(usr.name);
				printEvent(main.users.global.current_scope, "pouring_over_the_maps");
			},
			option_b_title: "We have no choice. Goodbye, cruel world!",
			option_b_description: "• We go down without a fight. All our lands are annexed, and the game is over.\nNote: you can restart the game after this by typing the found command.",
			option_b_ai_chance: function (usr) {
				return 100;
			},
			option_b: function (usr) { //WIP
				var all_province_array = [];
				var ot_user = main.users[main.users.global.current_scope];
				
				//Get all provinces
				for (var i = 0; i < usr.cities.province_array.length; i++) {
					var already_included = false;
					for (var x = 0; x < all_province_array.length; x++) {
						if (all_province_array[x] == usr.cities.province_array[i]) {
							already_included = true;
						}
					}
					
					if (already_included == false) {
						all_province_array.push(usr.cities.province_array[i]);
					}
				}
				for (var i = 0; i < usr.pops.pop_array.length; i++) {
					var already_included = false;
					for (var x = 0; x < all_province_array.length; x++) {
						if (all_province_array[x] == usr.pops.pop_array[i]) {
							already_included = true;
						}
					}
					
					if (already_included == false) {
						all_province_array.push(usr.pops.pop_array[i]);
					}
				}
				
				//Hand over all provinces
				for (var i = 0; i < all_province_array.length; i++) {
					transferProvince(usr.id, all_province_array[i], main.users.global.current_scope, "none");
				}
				returnChannels.send(war_channel, "<:old_scroll:716828676880334881> **" + usr.name + "** was annexed by their overlord, and have ceased to exist as a nation.");
				
				//Delete country
				deleteCountry(usr.id, "none");
			}
		},
		the_coming_thaw: {
			name: "The Coming Thaw.",
			description: "Relations between us and {0} are beginning to thaw as our diplomats begin approaching them with a mutual policy of detente. Our citizens are increasingly seeing them not as a menace, but rather as a potential trade partner, or at the very least, a nation like any other.",
			trigger: function (usr) {
				return false;
			},
			option_a_title: "Can relations improve?",
			option_a_description: "• End rivalry with {0}.",
			option_a: function (usr) {
				for (var i = 0; i < usr.rivals.length; i++) {
					if (usr.rivals[i] == main.users.global.current_scope) {
						usr.rivals.splice(i, 1);
					}
				}
				for (var i = 0; i < main.users[main.users.global.current_scope].rivals.length; i++) {
					if (main.users[main.users.global.current_scope].rivals[i] == main.users.global.current_scope) {
						main.users[main.users.global.current_scope].rivals.splice(i, 1);
					}
				}
			}
		},
		the_national_disaster: {
			name: "The National Disaster!",
			description: "War exhaustion in our countries and in those of our allies have finally reached record highs. With the enemy willing to talk peace terms, we have no choice but to concede to their demands, whatever they may be. Let us hope that they shall be merciful.",
			trigger: function (usr) {
				return false;
			},
			option_a_title: "It's over ... I can't believe it's over.",
			option_a_description: "• We now have to obey the diktats of our enemies.",
			option_a: function (usr) {
			}
		},
		the_option_to_submit: {
			name: "The Option To Submit.",
			description: "Diplomats in our country are hastily screening over {0}'s proposal, which if accepted, could drastically change the future of our nation. {0} promises to deliver us economic and military support in exchange for, well let's just say ... our independence. We would have to be a subservient client state to {0} in order for them to provide this aid. We could of course decline, but that might anger {0}'s envoys.",
			trigger: function (usr) {
				return false;
			},
			option_a_title: "This is a diplomatic insult!",
			option_a_description: "• **-50** Relations with {0}",
			option_a_ai_chance: function (usr) {
				return 95;
			},
			option_a: function (usr) {
				for (var i = 0; i < usr.relations.length; i++) {
					if (main.users[main.users.global.current_scope].relations[i][1] == usr.id) {
						if (usr.relations[i][0]-50 >= -100) {
							usr.relations[i][0] = usr.relations[i][0] - 50;
						} else {
							usr.relations[i][0] = -100;
						}
					}
				}
				for (var i = 0; i < main.users[main.users.global.current_scope].relations.length; i++) {
					if (main.users[main.users.global.current_scope].relations[i][1] == usr.id) {
						if (main.users[main.users.global.current_scope].relations[i][0]-50 >= -100) {
							main.users[main.users.global.current_scope].relations[i][0] = main.users[main.users.global.current_scope].relations[i][0] - 50;
						} else {
							main.users[main.users.global.current_scope].relations[i][0] = -100;
						}
					}
				}
				
				localisation.push(usr.name);
				printEvent(main.users.global.current_scope, "they_stand_defiant");
			},
			option_b_title: "We have no choice but to accept.",
			option_b_description: "• We will become a vassal under **{0}**!\n• **-15%** Stability for 5 turns.",
			option_b_ai_chance: function (usr) {
				return 5;
			},
			option_b: function (usr) {
				main.users[main.users.global.current_scope].vassals.push(usr.id);
				usr.temporary_modifiers.push(["stability_modifier", -15, 5]);
			}
		},
		the_promise_we_made: {
			name: "The Promise We Made.",
			description: "A nation we had previously announced our intention to protect, {0} has been attacked in a perfidious act of war! Although we could simply opt out of risking both our resources and armies to protect {0}, such an action would likely ruin our diplomatic reputation on the world stage. What should we do?",
			trigger: function (usr) {
				return false;
			},
			option_a_title: "''Let the world know we stand by {0}. Enter the war''.",
			option_a_description: "• Join the **{1}**.",
			option_a_ai_chance: function (usr) {
				return 80;
			},
			option_a: function (usr) {
				main.users.global.wars[main.users.global.current_scope[0]][main.users.global.current_scope[1]].push(usr.id);
				for (var i = 0; i < main.users.global.wars[main.users.global.current_scope[0]][main.users.global.current_scope[2]].length; i++) {
					usr.at_war.push(main.users[main.users.global.wars[main.users.global.current_scope[0]][main.users.global.current_scope[2]][i]].name);
					//Add new belligerent to all opposing nations
					main.users[main.users.global.wars[main.users.global.current_scope[0]][main.users.global.current_scope[2]][i]].at_war.push(usr.name);
				}
				usr.at_war = unique(usr.at_war);
				main.users[main.users.global.wars[main.users.global.current_scope[0]][main.users.global.current_scope[2]][i]].at_war = unique(main.users[main.users.global.wars[main.users.global.current_scope[0]][main.users.global.current_scope[2]][i]].at_war);
			},
			option_b_title: "{0}!? I've never heard of such a place before!",
			option_b_description: "• **-50** Relations with {0}.\n**-5%** Stability for 5 turns.",
			option_a_ai_chance: function (usr) {
				return 20;
			},
			option_b: function (usr) {
				for (var i = 0; i < main.users[main.users.global.current_scope[3]].relations.length; i++) {
					if (main.users[main.users.global.current_scope[3]].relations[i][1] == usr.id) {
						if (main.users[main.users.global.current_scope[3]].relations[i][0]-50 >= -100) {
							main.users[main.users.global.current_scope[3]].relations[i][0] = main.users[main.users.global.current_scope[3]].relations[i][0] - 50;
						} else {
							main.users[main.users.global.current_scope[3]].relations[i][0] = -100;
						}
					}
				}
				usr.temporary_modifiers.push(["stability_modifier", -5, 5]);
			}
		},
		they_stand_defiant: {
			name: "They Stand Defiant.",
			description: "{0} has refused to give up their independence, even in the face of our combined economic and military assets. Either they treat us as a laughing stock, or they hold the means to protect their independence at all costs. Either way, our military is preparing to move in.",
			trigger: function (usr) {
				return false;
			},
			option_a_title: "How dare they defy us?",
			option_a_description: "• This option currently has no effect.",
			option_a: function (usr) {
			}
		},
		we_are_free: {
			name: "We Are Free!",
			description: "Our nation has recently gained independence from {0} after our overlord announced that our vassalisation treaties and contractual obligations had been annulled. Their given reason for doing this is unclear, but our diplomats are speculating that they might have lost the economic and military strength needed to enforce such a policy. As such we have once again become an independent nation.",
			trigger: function (usr) {
				return false;
			},
			option_a_title: "Long live the new republic!",
			option_a_description: "• This option currently has no effect.",
			option_a: function (usr) {
			}
		}
	},
	
	localisation: {
		bathymetric_names: [
			//Hesteria
			/*
			"Roder Bay", 
			"Valour Strait", 
			"Fortitude Bay", 
			"Sedenal Sea", 
			"Sedenal Islands", 
			"Coast of Amsai", 
			"Heunghoi Strait", 
			"Gwokga Delta", 
			"Gulf of Haerjo", 
			"North Tereles Passage", 
			"Tereles Ocean", 
			"Ashima Straits", 
			"Lampshaden Plateau", 
			"Strait of Accalma", 
			"Mid-Seperic Ridge", 
			"Cape Circle", 
			"Okoye Delta", 
			"Sirenis Sea", 
			"Sedes Strait", 
			"Australic Strait", 
			"Lines Strait", 
			"Tetralic Gulf", 
			"Novaenian Sea", 
			"Noveinter Passage", 
			"Rampan Sea", 
			"Bercault Isthmus", 
			"Gulf of Nocte", 
			"Gren Isthmus", 
			"Cape Discoir", 
			"Seperic Ocean", 
			"Cliffs of Runsend", 
			"Sepention Island", 
			"Aelfland", 
			"Hesteric Pass", 
			"Gulf of Hesteria", 
			"Litlandic Shelf", 
			"Collenham Delta", 
			"Trommen Bay", 
			"Intersectionalic Sea", 
			"Karelekt", 
			"Presteric Ocean", 
			"Borealic Ocean", 
			"Thoric Pillars", 
			"Cacarra Coast", 
			"Artisa Passage", 
			"Gulf of Titania", 
			"Torrentes Sea", 
			"Australis Shelf", 
			"Terrace Bridge", 
			"Great Australic Sea", 
			"Southern Ocean"
			*/
			//Earth
			"Baffin Bay",
			"Davis Strait",
			"the Labrador Sea",
			"Cumberland Sound",
			"the Gulf of St. Lawrence",
			"Maine",
			"Fundy",
			"Nantucket Sound",
			"Narragansett Bay",
			"Long Island Sound",
			"Chesapeake Bay",
			"Cape Hatteras",
			"the Gulf of Mexico",
			"the Carribean Sea",
			"Todos os Santos",
			"Guanabara Bay",
			"Lagoa dos Patos",
			"the River Platte",
			"the Argentine Sea",
			"the Norweigan Sea",
			"Kattegat",
			"Skaggerak",
			"Dogger Bank",
			"the Baltic Sea",
			"the Gulf of Bothnia",
			"Kvarken",
			"the Bothnian Sea",
			"Aland",
			"the Gulf of Finland",
			"Vyborg",
			"Neva",
			"Koporye",
			"Narva Bay",
			"the Gulf of Riga",
			"Gdansk Bay",
			"the Kalmar Straits",
			"the Danish Straits",
			"Hanö Bight",
			"the Oresund Strait",
			"the English Channel",
			"the Strait of Dover",
			"the Irish Sea",
			"the Celtic Sea",
			"St. George's Strait",
			"the Iroise Sea",
			"the Bay of Biscay",
			"the Cantabrian Sea",
			"the Gulf of Cádiz",
			"the Mediterranean",
			"the Alboran Sea",
			"the Balearic Sea",
			"the Gulf of Lions",
			"the Ligurian Sea",
			"the Tyrrhenian Sea",
			"Elba",
			"the Adriatic",
			"the Ionian Sea",
			"the Aegean Sea",
			"the Sea of Marmara",
			"Reggio di Calabria",
			"the Levantine Sea",
			"the Libyan Sea",
			"the Strait of Sicily",
			"Gabes Gulf",
			"Sirte Gulf",
			"Sardinia",
			"Corsica",
			"the Black Sea",
			"the Sea of Azov",
			"the Kerch Strait",
			"Sebastopol",
			"the Gulf of Guinea",
			"Walvis Bay",
			"Luanda Bay",
			"False Bay",
			"the Cape of Good Hope",
			"the Irminger Sea",
			"the Denmark Strait",
			"the Hebrides",
			"the Magallanes",
			"the Tierra del Fuego",
			"the Falklands",
			"the Andaman Sea",
			"the Arabian Sea",
			"the Gulf of Kutch",
			"the Gulf of Khambhat",
			"the Bay of Bengal",
			"the Gulf of Aden",
			"the Gulf of Oman",
			"the Laccadive Sea",
			"Mozambique Channel",
			"the Persian Gulf",
			"the Red Sea",
			"the Sea of Zanj",
			"the Timor Sea",
			"Palk Strait",
			"Palk Bay",
			"Gulf of Mannar",
			"the Bering Sea",
			"Bristol Bay",
			"Norton Sound",
			"the Chilean Sea",
			"the Aleutians",
			"the Gulf of Alaska",
			"Glacier Bay",
			"Prince William Sound",
			"the Gulf of California",
			"the Gulf of Nicoya",
			"Panama Bay",
			"the California Coast",
			"the Arafura Sea",
			"the Bali Sea",
			"the Banda Sea",
			"the Bay of Kampong Som",
			"the Bay of Plenty",
			"the Bismarck Sea",
			"the Bohai Sea",
			"the Camotes Sea",
			"the Mindanao Sea",
			"the Celebes Sea",
			"the Ceram Sea",
			"the Coral Sea",
			"the Dragon's Sea",
			"East China Sea",
			"Tsushima Strait",
			"Kagoshima Bay",
			"Flores Sea",
			"the Gulf of Carpentaria",
			"the Gulf of Thailand",
			"the Bay of Bangkok",
			"Halmahera",
			"Hawke's Bay",
			"the Java Sea",
			"the Koro Sea",
			"the Molucca Sea",
			"Philippine Sea",
			"Leyte Gulf",
			"Sagami Bay",
			"the Savu Sea",
			"the Sea of Japan",
			"the Sea of Okhotsk",
			"the Sibuyan Sea",
			"the Solomon Sea",
			"the South China Sea",
			"the West Philippine Sea",
			"the South Seas",
			"Pearl Harbour",
			"the Gulf of Tonkin",
			"the Sulu Sea",
			"the Tasman Sea",
			"Tokyo Bay",
			"the Visayan Sea",
			"Waihau Bay",
			"the Yellow Sea",
			"the Korean Sea",
			"the Sargasso Sea"
		],
		battle_prefixes: [
			"Hill", 
			"Site", 
			"Mountain", 
			"Peak", 
			"Valley", 
			"Road", 
			"Route"
		],
		rigged_elections: [
			"held 'elections' in a manner international observers deemed 'unfair'. Due to errors in counting, the ruling party walked away with " + randomNumber(101, 117) + "% of the vote. ",
			"today stated that their ruling party won " + randomNumber(97, 100) + "% of the vote. The opposition leader claimed yesterday claimed that the polls were rigged, but was today identified as a corpse in the boot of a white van. ",
			"went to the polls yesterday. Many of the voters looked at the ballot, which contained only one option, before realising that a bayonet was being pointed at their face. ",
			"would have gone to the polls, if only there were any open. ",
			"held elections. Rumours allege that men with beards and moustaches cast their ballot, went to the barber shop, came back without a moustache, cast their vote, went back to the barber shop, came back with a neat trim, cast another ballot, went back to the barber, came back shaved like a monk, and cast another vote. They then went down to the local wig shop to purchase some fake hair, before casting a fifth vote. A local mayor was particularly outraged upon realising that several hundred unidentified decedents (all of whom had been a member of the opposition), were somehow being tallied in the vote. Voter turnout in his constituency was " + randomNumber(200, 300) + "%, but his outrage was silenced when his remains were found plastered to the windscreen of his car. ",
			"had elections. The 'Prime Minister' of the country unveiled a new voting booth, one he said 'would obtain an acceptable standard of precision, ensure that all votes are counted accurately, and submitted legally'. Photos smuggled out of this secretive state revealed a voting booth with a built-in Kalashnikov. "
		]
	},
	
	modifiers: { //Not currently in use! [WIP]
		//Economic Modifiers (incl. Technology)
		building_cost: {
			name: "Building Cost",
			importance: 1,
			
			is_percentage_modifier: true,
			positive_direction: "negative"
		},
		construction_speed: {
			name: "Construction Speed",
			importance: 1.5,
			
			is_percentage_modifier: true,
			positive_direction: "negative"
		},
		extra_building_slots: {
			name: "Extra Building Slots",
			importance: 3,
			
			positive_direction: "positive"
		},
		isolation: { //No current effect
		},
		knowledge_investment_limit: {
		},
		production_efficiency: {
		},
		research_efficiency: {
		},
		research_slots: {
		},
		rgo_throughput: {
		},
		tax_efficiency: {
		},
		training_cost: {
		},
		shipment_capacity: {
		},
		shipment_time: {
		},
		
		//Military Modifiers (incl. Colonisation)
		ack_ack_effectiveness: {
		},
		air_interception_range: {
		},
		attrition_rate: {
		},
		army_professionalism: { //No current effect
		},
		army_travel_speed: {
		},
		army_upkeep: {
		},
		blockade_efficiency: { //No current effect
		},
		casualty_reduction: { //No current effect
		},
		colonial_immigration_rate: { //No current effect
		},
		colonial_maintenance: { //No current effect
		},
		colonial_power_cap: { //No current effect
		},
		colonial_power_gain: { //No current effect
		},
		colonist_travel_speed: {
		},
		command_power_gain: { //No current effect
		},
		maximum_expeditions: {
		},
		mobilisation_impact: {
		},
		mobilisation_size: {
		},
		mobilisation_speed: {
		},
		national_manpower: {
		},
		navy_professionalism: { //No current effect
		},
		non_core_manpower: {
		},
		supply_consumption: { //No current effect
		},
		training_cost: {
		},
		unit_cost: {
		},
		war_exhaustion_rate: {
		},
		
		//Political Modifiers (incl. Diplomacy)
		administrative_efficiency: { //No current effect
		},
		advisor_cost: { //No current effect
		},
		cb_generation_speed: {
		},
		centralisation_gain: { //No current effect
		},
		crime_rate: { //No current effect
		},
		infamy_loss: {
		},
		influence_gain: { //No current effect
		},
		jingoism: { //No current effect
		},
		opinion_modifier: { //No current effect
		},
		overextension_modifier: { //No current effect
		},
		political_capital_gain: {
		},
		prestige_gain: {
		},
		reform_desire_gain: {
		},
		republicanism: { //No current effect
		},
		ruling_party_support: { //No current effect
		},
		stability_modifier: {
		},
		starting_diplomatic_slots: {
		}
	},
	
	pops: {
		aristocrats: {
			name: "Aristocrats",
			chance: 0.02,
			specialised_pop: true,
			tax_efficiency_per_100k: 0.03,
			stability_per_100k: 0.05
		},
		faculty: {
			name: "Faculty",
			chance: 0.10,
			specialised_pop: true,
			research_efficiency_per_100k: 0.02,
			knowledge_per_100k: 10
		},
		workers: {
			name: "Workers",
			specialised_pop: false
		},
		soldiers: {
			name: "Soldiers",
			chance: 0.15,
			specialised_pop: true
		}
	},
	
	starting_kit: function (usr) {
		//City bonuses
		usr.modifiers.production_efficiency += usr.city_production_modifier;
		usr.modifiers.research_efficiency += usr.city_research_modifier;
		usr.modifiers.stability_modifier += usr.city_stability_modifier;
				
		//Starting kit
		usr.government = "anarchy";
		usr.politics.anarchy = 100;
		usr.actions = 5;
		usr.mobilise_unit = config.mobilise_unit;
		usr.money = 50000;
		usr.inventory.wood = 10;
		usr.inventory.stone = 15;
		usr.inventory.lumber = 25;
		usr.inventory.food = 50;
		usr.military.conquistadors = randomNumber(3, 15);
		
		//plantations not part of default kit
		usr.available_buildings = ["guilds","farms","pastures","fisheries","quarries","lumberjacks","forgeries","food_processing_facilities","sawmills","neighbourhoods","barracks","dockyards","schools","libraries","canals"];
		usr.available_units = ["skirmishers","spearmen","swordsmen","knights","archers","longbowmen","conquistadors"];
		
		//Starting governments
		usr.available_governments = ["absolute_monarchy", "constitutional_monarchy", "democracy"];
	}
};