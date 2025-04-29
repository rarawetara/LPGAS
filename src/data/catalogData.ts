export interface Product {
  id?: string;
  name: string;
  power?: string;
  image?: string;
  priceUSD?: number;
  priceAED?: number;
}

export interface ProductType {
  type: string;
  items: Product[];
}

export interface Subcategory {
  name: string;
  products: Product[] | ProductType[];
}

export interface Category {
  category: string;
  subcategories: Subcategory[];
}

export const catalogData: Category[] = [
  {
    category: "Vaporizing Equipment",
    subcategories: [
     
      {
        name: "Electric LPG Vaporizers",
        products: [
          { id: "20.0005/SEP", name: "Electric LPG Vaporizer 5 kg/h", power: "5 kg/h", priceUSD: 295, priceAED: 1080 },
          { id: "20.0020/SEP", name: "Electric LPG Vaporizer 20 kg/h", power: "20 kg/h", priceUSD: 1320, priceAED: 4840 },
          { id: "20.0030/SEP", name: "Electric LPG Vaporizer 30 kg/h", power: "30 kg/h", priceUSD: 1390, priceAED: 5100 },
          { id: "20.0040/SEP", name: "Electric LPG Vaporizer 40 kg/h", power: "40 kg/h", priceUSD: 1450, priceAED: 5320 },
          { id: "20.0050/SEP", name: "Electric LPG Vaporizer 50 kg/h", power: "50 kg/h", priceUSD: 1780, priceAED: 6530 },
          { id: "20.0060/SEP", name: "Electric LPG Vaporizer 60 kg/h", power: "60 kg/h", priceUSD: 2500, priceAED: 9170 },
          { id: "20.0080/SEP", name: "Electric LPG Vaporizer 80 kg/h", power: "80 kg/h", priceUSD: 2630, priceAED: 9650 },
          { id: "20.0100/SEP", name: "Electric LPG Vaporizer 100 kg/h", power: "100 kg/h", priceUSD: 3420, priceAED: 12550 },
          { id: "20.0120/SEP", name: "Electric LPG Vaporizer 120 kg/h", power: "120 kg/h", priceUSD: 3550, priceAED: 13030 },
          { id: "20.0140/SEP", name: "Electric LPG Vaporizer 140 kg/h", power: "140 kg/h", priceUSD: 3750, priceAED: 13762 },
          { id: "20.0160/SEP", name: "Electric LPG Vaporizer 160 kg/h", power: "160 kg/h", priceUSD: 3880, priceAED: 14249 },
          { id: "20.0200/SEP", name: "Electric LPG Vaporizer 200 kg/h", power: "200 kg/h", priceUSD: 4080, priceAED: 14970 },
          { id: "20.0240/SEP", name: "Electric LPG Vaporizer 240 kg/h", power: "240 kg/h", priceUSD: 4200, priceAED: 15410 },
          { id: "20.0260/SEP", name: "Electric LPG Vaporizer 260 kg/h", power: "260 kg/h", priceUSD: 4340, priceAED: 15930 },
          { id: "20.0280/SEP", name: "Electric LPG Vaporizer 280 kg/h", power: "280 kg/h", priceUSD: 4470, priceAED: 16400 },
          { id: "20.0300/SEP", name: "Electric LPG Vaporizer 300 kg/h", power: "300 kg/h", priceUSD: 4600, priceAED: 16880 },
          { id: "20.0320/SEP", name: "Electric LPG Vaporizer 320 kg/h", power: "320 kg/h", priceUSD: 4870, priceAED: 17870 },
        ],
      },
      {
        name: "Cabinet-based Electric LPG Vaporizing Units",
        products: [
          { id: "20.1040/SEP/H/-", name: "Cabinet-based Electric LPG Vaporizing Unit 40 kg/h", power: "40 kg/h", priceUSD: 3290, priceAED: 12070 },
          { id: "20.1060/SEP/H/-", name: "Cabinet-based Electric LPG Vaporizing Unit 60 kg/h", power: "60 kg/h", priceUSD: 6180, priceAED: 22680 },
          { id: "20.1080/SEP/H/-", name: "Cabinet-based Electric LPG Vaporizing Unit 80 kg/h", power: "80 kg/h", priceUSD: 6440, priceAED: 23630 },
          { id: "20.1100/SEP/H/-", name: "Cabinet-based Electric LPG Vaporizing Unit 100 kg/h", power: "100 kg/h", priceUSD: 6970, priceAED: 25580 },
          { id: "20.1120/SEP/H/-", name: "Cabinet-based Electric LPG Vaporizing Unit 120 kg/h", power: "120 kg/h", priceUSD: 7090, priceAED: 26020 },
          { id: "20.1150/SEP/H/-", name: "Cabinet-based Electric LPG Vaporizing Unit 150 kg/h", power: "150 kg/h", priceUSD: 7350, priceAED: 26970 },
          { id: "20.1200/SEP/H/-", name: "Cabinet-based Electric LPG Vaporizing Unit 200 kg/h", power: "200 kg/h", priceUSD: 7620, priceAED: 27970 },
          { id: "20.1250/SEP/H/-", name: "Cabinet-based Electric LPG Vaporizing Unit 250 kg/h", power: "250 kg/h", priceUSD: 8800, priceAED: 32300 },
          { id: "20.1300/SEP/H/-", name: "Cabinet-based Electric LPG Vaporizing Unit 300 kg/h", power: "300 kg/h", priceUSD: 9130, priceAED: 33510 },
          { id: "20.1400/SEP/H/-", name: "Cabinet-based Electric LPG Vaporizing Unit 400 kg/h", power: "400 kg/h", priceUSD: 12740, priceAED: 46760 },
          { id: "20.1500/SEP/H/-", name: "Cabinet-based Electric LPG Vaporizing Unit 500 kg/h", power: "500 kg/h", priceUSD: 13790, priceAED: 50610 },
          { id: "20.1600/SEP/H/-", name: "Cabinet-based Electric LPG Vaporizing Unit 600 kg/h", power: "600 kg/h", priceUSD: 15230, priceAED: 55890 },
          { id: "20.1750/SEP/H/-", name: "Cabinet-based Electric LPG Vaporizing Unit 750 kg/h", power: "750 kg/h", priceUSD: 16940, priceAED: 62170 },
          { id: "20.1950/SEP/H/-", name: "Cabinet-based Electric LPG Vaporizing Unit 950 kg/h", power: "950 kg/h", priceUSD: 19040, priceAED: 69880 },
        ],
      },
      {
        name: "Hydronic LPG Vaporizers",
        products: [
          { id: "20.9100/SEZ", name: "Hydronic LPG Vaporizer 100 kg/h", power: "100 kg/h", priceUSD: 2620, priceAED: 9615 },
          { id: "20.9300/SEZ", name: "Hydronic LPG Vaporizer 300 kg/h", power: "300 kg/h", priceUSD: 3920, priceAED: 14380 },
          { id: "20.9500/SEZ", name: "Hydronic LPG Vaporizer 500 kg/h", power: "500 kg/h", priceUSD: 5080, priceAED: 18640 },
        ],
      },
      {
        name: "Cabinet-based Hydronic Vaporizing Units",
        products: [
          { id: "20.1100/SEZ/H", name: "Cabinet-based Hydronic Vaporizing Unit 100 kg/h", power: "100 kg/h", priceUSD: 6100, priceAED: 22380 },
          { id: "20.1300/SEZ/H", name: "Cabinet-based Hydronic Vaporizing Unit 300 kg/h", power: "300 kg/h", priceUSD: 7110, priceAED: 26090 },
          { id: "20.1500/SEZ/H", name: "Cabinet-based Hydronic Vaporizing Unit 500 kg/h", power: "500 kg/h", priceUSD: 9730, priceAED: 35700 },
        ],
      },
    ],
  },
  {
    category: "Vaporizing and Blending Units",
    subcategories: [
      {
        name: "Cabinet Type",
        products: [],
      },
      {
        name: "Container Type",
        products: [],
      },
    ], 
  },
  {
    category: "Pumps",
    subcategories: [
      {
        name: "Pumps and Pumping Units",
        products: [],
      },
      {
        name: "Self-priming Units",
        products: [],
      },
      {
        name: "Pumping and Metering Units",
        products: [],
      },
    ],
  },
  {
    category: "Compressors",
    subcategories: [
      {
        name: "Piston Compressors and Compressor Units",
        products: [],
      },
      {
        name: "Screw Compressors and Compressor Units",
        products: [],
      },
    ],
  },
  {
    category: "Autonomous Gas Supply",
    subcategories: [
      {
        name: "For Private Households",
        products: [],
      },
      {
        name: "For Enterprises",
        products: [],
      },
    ],
  },
  {
    category: "Gas Filling Stations",
    subcategories: [
      {
        name: "General",
        products: [],
      },
    ],
  },
  {
    category: "Gas Generators",
    subcategories: [
      {
        name: "General",
        products: [
          { id: "fas-5-1lm", name: "FAS-5/1LM (5 kW)", power: "Low" },
          { id: "fas-8-1lm", name: "FAS-8/1LM (8 kW)", power: "Low" },
          { id: "fas-8-1vp", name: "FAS-8-1/VP (8 kW)", power: "Low" },
          { id: "fas-10-1vp", name: "FAS-10-1/VP (10 kW)", power: "Medium" },
          { id: "fas-10-3vp", name: "FAS-10-3/VP (10 kW)", power: "Medium" },
          { id: "fas-13-1vp", name: "FAS-13-1/VP (13 kW)", power: "Medium" },
          { id: "fas-13-3vp", name: "FAS-13-3/VP (13 kW)", power: "Medium" },
          { id: "fas-15-3lm", name: "FAS-15/3LM (15 kW)", power: "Medium" },
          { id: "fas-15-1vr", name: "FAS-15-1/VR (15 kW)", power: "Medium" },
          { id: "fas-15-3vr", name: "FAS-15-3/VR (15 kW)", power: "Medium" },
          { id: "fas-18-1vr", name: "FAS-18-1/VR (18 kW)", power: "Medium" },
          { id: "fas-18-3vr", name: "FAS-18-3/VR (18 kW)", power: "Medium" },
          { id: "fas-21-1vp", name: "FAS-21-1/VP (21 kW)", power: "Medium" },
          { id: "fas-21-3vr", name: "FAS-21-3/VR (21 kW)", power: "Medium" },
          { id: "fas-24-3vr", name: "FAS-24-3/VR (24 kW)", power: "Medium" },
          { id: "fas-28-3vp", name: "FAS-28-3/VP (28 kW)", power: "Medium" },
          { id: "fas-32-3vp", name: "FAS-32-3/VP (32 kW)", power: "Medium" },
          { id: "fas-35-3zr", name: "FAS-35-3/ZR (35 kW)", power: "High" },
          { id: "fas-40-3zr", name: "FAS-40-3/ZR (40 kW)", power: "High" },
          { id: "fas-40-3m", name: "FAS-40-3/M (40 kW)", power: "High" },
          { id: "cogeneration-unit-fas-50-70m", name: "Cogeneration Unit FAS-50/70M (50 kW)", power: "High" },
          { id: "fas-50-3m", name: "FAS-50-3/M (50 kW)", power: "High" },
          { id: "fas-100-3yp", name: "FAS-100-3/YP (100 kW)", power: "High" },
          { id: "fas-150-3yp", name: "FAS-150-3/YP (150 kW)", power: "High" },
          { id: "fas-315-3yp", name: "FAS-315-3/YP (315 kW)", power: "High" },
        ],
      },
    ],
  },
  {
    category: "REGO",
    subcategories: [
      {
        name: "Back Pressure Check Valves",
        products: [
          {
            type: "Threaded",
            items: [
              { id: "ssa3197", name: "SSA3197", image: "images/placeholder-1.png" },
              { id: "ssa3196", name: "SSA3196", image: "images/placeholder-1.png" },
              { id: "ssa3186", name: "SSA3186", image: "images/placeholder-1.png" },
              { id: "ss-a3197", name: "(SS)A3197", image: "images/placeholder-1.png" },
              { id: "ss-a3196", name: "(SS)A3196", image: "images/placeholder-1.png" },
              { id: "ss-a3186", name: "(SS)A3186", image: "images/placeholder-1.png" },
              { id: "a3198s", name: "A3198S", image: "images/placeholder-1.png" },
              { id: "a3187s", name: "A3187S", image: "images/placeholder-1.png" }
            ]
          },
          {
            type: "Thread by Flange",
            items: [
              { id: "a6586d", name: "(A)6586D", image: "images/placeholder-1.png" },
              { id: "a3176", name: "(A)3176", image: "images/placeholder-1.png" },
              { id: "a3146-series", name: "(A)3146 Series", image: "images/placeholder-1.png" }
            ]
          },
          {
            type: "Flanged",
            items: [
              { id: "ssa7794f", name: "SSA7794F", image: "images/placeholder-1.png" },
              { id: "a7796", name: "A7796", image: "images/placeholder-1.png" },
              { id: "a7794", name: "A7794", image: "images/placeholder-1.png" },
              { id: "a7624", name: "A7624", image: "images/placeholder-1.png" },
              { id: "a7616", name: "A7616", image: "images/placeholder-1.png" },
              { id: "a3400l6", name: "A3400L6", image: "images/placeholder-1.png" },
              { id: "a3400l4", name: "A3400L4", image: "images/placeholder-1.png" },
              { id: "a3276bc", name: "A3276BC", image: "images/placeholder-1.png" }
            ]
          }
        ]
      },
      {
        name: "Hose End, Fueling and Quick-Acting Valves",
        products: [
          {
            type: "Pull Away Valves",
            items: [
              { id: "a2543a-series", name: "A2543A Series", image: "images/placeholder-1.png" },
              { id: "7901tl-series", name: "7901TL Series", image: "images/placeholder-1.png" }
            ]
          },
          {
            type: "Hose-End Valves",
            items: [
              { id: "a7799l", name: "A7799L", image: "images/placeholder-1.png" },
              { id: "a7799a", name: "A7799A", image: "images/placeholder-1.png" },
              { id: "a7795l", name: "A7795L", image: "images/placeholder-1.png" },
              { id: "a7795a", name: "A7795A", image: "images/placeholder-1.png" },
              { id: "a7708l", name: "A7708L", image: "images/placeholder-1.png" },
              { id: "a7707l", name: "A7707L", image: "images/placeholder-1.png" },
              { id: "a707l", name: "A707L", image: "images/placeholder-1.png" }
            ]
          },
          {
            type: "Fueling Nozzles",
            items: [
              { id: "fn1350-series", name: "FN1350 Series", image: "images/placeholder-1.png" },
              { id: "a2141a-series", name: "A2141A Series", image: "images/placeholder-1.png" }
            ]
          },
          {
            type: "Crop Driers, Charging Manifolds & Dispensing",
            items: [
              { id: "a7793l", name: "A7793L", image: "images/placeholder-1.png" },
              { id: "a7793a", name: "A7793A", image: "images/placeholder-1.png" },
              { id: "a7790heh", name: "A7790HEH", image: "images/placeholder-1.png" }
            ]
          },
          {
            type: "Universal Series",
            items: [
              { id: "7901t-series", name: "7901T Series", image: "images/placeholder-1.png" },
              { id: "7554-series", name: "7554 Series", image: "images/placeholder-1.png" },
              { id: "7053t", name: "7053T", image: "images/placeholder-1.png" }
            ]
          }
        ]
      },
      {
        name: "ACME, CGA, POL Fittings & Adapters",
        products: [
          {
            type: "POL Plugs",
            items: [
              { id: "pol-plugs", name: "POL Plugs", image: "images/placeholder-1.png" },
              { id: "n970p", name: "N970P", image: "images/placeholder-1.png" },
              { id: "3705rc", name: "3705RC", image: "images/placeholder-1.png" },
              { id: "10538p", name: "10538P", image: "images/placeholder-1.png" }
            ]
          },
          {
            type: "Inverted Flare Adapters",
            items: [
              { id: "inverted-flare-adapters", name: "Inverted Flare Adapters", image: "images/placeholder-1.png" },
              { id: "15774-1", name: "15774-1", image: "images/placeholder-1.png" }
            ]
          },
          {
            type: "Flare Adapters",
            items: [
              { id: "flare-adapters", name: "Flare Adapters", image: "images/placeholder-1.png" },
              { id: "2906-flare-adapters", name: "2906 Flare Adapters", image: "images/placeholder-1.png" },
              { id: "1328", name: "1328", image: "images/placeholder-1.png" },
              { id: "1331", name: "1331", image: "images/placeholder-1.png" },
              { id: "1332", name: "1332", image: "images/placeholder-1.png" }
            ]
          },
          {
            type: "Filling Adapters",
            items: [
              { id: "filling-adapters", name: "Filling Adapters", image: "images/placeholder-1.png" },
              { id: "7193u-10l", name: "7193U-10L", image: "images/placeholder-1.png" },
              { id: "7193u-10-series", name: "7193U-10 Series", image: "images/placeholder-1.png" },
              { id: "7193t-10", name: "7193T-10", image: "images/placeholder-1.png" },
              { id: "7193l-10a", name: "7193L-10A", image: "images/placeholder-1.png" },
              { id: "7193d-10l", name: "7193D-10L", image: "images/placeholder-1.png" },
              { id: "7193d-10", name: "7193D-10", image: "images/placeholder-1.png" },
            ]
          },
          {
            type: "CGA 555 Adapters",
            items: [
              { id: "cga-555-adapters", name: "CGA 555 Adapters", image: "images/placeholder-1.png" },
              { id: "12982", name: "12982", image: "images/placeholder-1.png" },
            ]
          },
          {
            type: "CGA 510 (POL) Swivel Adapters",
            items: [
              { id: "cga-510-pol-swivel-adapters", name: "CGA 510 (POL) Swivel Adapters", image: "images/placeholder-1.png" },
              { id: "970-series", name: "970 Series", image: "images/placeholder-1.png" },
              { id: "3188-series-adapters", name: "3188 Series – Adapters", image: "images/placeholder-1.png" },
            ]
          },
          {
            type: "CGA 510 (POL) Adapters",
            items: [
              { id: "cga-510-pol-adapters", name: "CGA 510 (POL) Adapters", image: "images/placeholder-1.png" },
              { id: "5760-series-pol-adapters", name: "5760 Series – POL Adapters", image: "images/placeholder-1.png" },
              { id: "2906-series", name: "2906 Series", image: "images/placeholder-1.png" },
            ]
          },
          {
            type: "ACME Spanner Wrench",
            items: [
              { id: "acme-spanner-wrench", name: "ACME Spanner Wrench", image: "images/placeholder-1.png" },
              { id: "3195-50", name: "3195-50", image: "images/placeholder-1.png" },
            ]
          },
          {
            type: "ACME Plugs",
            items: [
              { id: "acme-plugs", name: "ACME Plugs", image: "images/placeholder-1.png" },
              { id: "c5769n", name: "C5769N", image: "images/placeholder-1.png" },
              { id: "c5767n", name: "C5767N", image: "images/placeholder-1.png" },
              { id: "c5765n", name: "C5765N", image: "images/placeholder-1.png" },
              { id: "c5763n", name: "C5763N", image: "images/placeholder-1.png" },
              { id: "5765pr", name: "5765PR", image: "images/placeholder-1.png" },
            ]
          },
          {
            type: "ACME Connectors",
            items: [
              { id: "acme-connectors", name: "ACME Connectors", image: "images/placeholder-1.png" },
              { id: "7142-series", name: "7142 Series", image: "images/placeholder-1.png" },
              { id: "7141-series", name: "7141 Series", image: "images/placeholder-1.png" },
            ]
          },
          {
            type: "ACME Caps",
            items: [
              { id: "acme-caps", name: "ACME Caps", image: "images/placeholder-1.png" },
              { id: "907fp", name: "907FP", image: "images/placeholder-1.png" },
              { id: "7141fp", name: "7141FP", image: "images/placeholder-1.png" },
              { id: "3184-91", name: "3184-91", image: "images/placeholder-1.png" },
              { id: "3175l", name: "3175L", image: "images/placeholder-1.png" },
              { id: "3174-90-series", name: "3174-90 Series", image: "images/placeholder-1.png" },
              { id: "3144-91", name: "3144-91", image: "images/placeholder-1.png" },
            ]
          },
          {
            type: "ACME Adapters",
            items: [
              { id: "acme-adapters", name: "ACME Adapters", image: "images/placeholder-1.png" },
              { id: "5760-series-acme-adapters", name: "5760 Series – ACME Adapters", image: "images/placeholder-1.png" },
              { id: "a-5700-series", name: "(A)5700 Series", image: "images/placeholder-1.png" },
              { id: "a-3195-series", name: "(A)3195 Series", image: "images/placeholder-1.png" },
              { id: "a-3194-90l-series", name: "(A)3194-90L Series", image: "images/placeholder-1.png" },
              { id: "a-3194-90-series", name: "(A)3194-90 Series", image: "images/placeholder-1.png" },
              { id: "a-3185-series", name: "(A)3185 Series", image: "images/placeholder-1.png" },
              { id: "a-3184-90", name: "(A)3184-90", image: "images/placeholder-1.png" },
              { id: "a-3175-series", name: "(A)3175 Series", image: "images/placeholder-1.png" },
              { id: "a-3175", name: "(A)3175", image: "images/placeholder-1.png" },
              { id: "a8016-93", name: "A8016-93", image: "images/placeholder-1.png" },
              { id: "a7575-series", name: "A7575 Series", image: "images/placeholder-1.png" },
              { id: "a7571-series", name: "A7571 Series", image: "images/placeholder-1.png" },
              { id: "a7568le", name: "A7568LE", image: "images/placeholder-1.png" },
              { id: "a5764w", name: "A5764W", image: "images/placeholder-1.png" },
              { id: "a5760-series", name: "A5760 Series", image: "images/placeholder-1.png" },
              { id: "7577v-series-adapters", name: "7577V Series – Adapters", image: "images/placeholder-1.png" },
              { id: "3191", name: "3191", image: "images/placeholder-1.png" },
              { id: "3179b-series-adapters", name: "3179B Series – Adapters", image: "images/placeholder-1.png" },
              { id: "3179a-acme-adapters", name: "3179A – ACME Adapters", image: "images/placeholder-1.png" },
              { id: "3171-series", name: "3171 Series", image: "images/placeholder-1.png" },
              { id: "3121-series", name: "3121 Series", image: "images/placeholder-1.png" },
              { id: "3120-series", name: "3120 Series", image: "images/placeholder-1.png" },
              { id: "3119a-series", name: "3119A Series", image: "images/placeholder-1.png" }
            ]
          }
        ]
      },
      {
        name: "Internal Valves",
        products: [
          {
            type: "Categories",
            items: [
              { id: "flomatic", name: "Flomatic", image: "images/placeholder-1.png" },
              { id: "a3200-threaded", name: "A3200 Threaded", image: "images/placeholder-1.png" },
              { id: "a3200-flanged", name: "A3200 Flanged", image: "images/placeholder-1.png" },
              { id: "a3200-threaded-by-flange", name: "A3200 Threaded by Flange", image: "images/placeholder-1.png" },
              { id: "actuators-accessories", name: "Actuators & Accessories", image: "images/placeholder-1.png" }
            ]
          },
          {
            type: "Product Types",
            items: [
              { id: "rotary-actuators", name: "Rotary Actuators", image: "images/placeholder-1.png" },
              { id: "pneumatic-actuators", name: "Pneumatic Actuators", image: "images/placeholder-1.png" },
              { id: "electric-actuators", name: "Electric Actuators", image: "images/placeholder-1.png" },
              { id: "thermal-latch", name: "Thermal Latch", image: "images/placeholder-1.png" },
              { id: "remote-cable-controls", name: "Remote Cable Controls", image: "images/placeholder-1.png" },
              { id: "3-way-valves", name: "3-Way Valves", image: "images/placeholder-1.png" }
            ]
          },
          {
            type: "Series",
            items: [
              { id: "ssa3218f-series", name: "SSA3218F Series", image: "images/placeholder-1.png" },
              { id: "ssa3218fd-series", name: "SSA3218FD Series", image: "images/placeholder-1.png" },
              { id: "ssa3213f-series", name: "SSA3213F Series", image: "images/placeholder-1.png" },
              { id: "ssa3213fpa-series", name: "SSA3213FPA Series", image: "images/placeholder-1.png" },
              { id: "ssa3209f-series", name: "SSA3209F Series", image: "images/placeholder-1.png" },
              { id: "ssa3209pa-series", name: "SSA3209PA Series", image: "images/placeholder-1.png" },
              { id: "ba3211d-series", name: "BA3211D Series", image: "images/placeholder-1.png" },
              { id: "ba3212r-series", name: "BA3212R Series", image: "images/placeholder-1.png" },
              { id: "a7883fk-series", name: "A7883FK Series", image: "images/placeholder-1.png" },
              { id: "a7853a-series", name: "A7853A Series", image: "images/placeholder-1.png" },
              { id: "a7853pa-series", name: "A7853PA Series", image: "images/placeholder-1.png" },
              { id: "a3219-series", name: "A3219 Series", image: "images/placeholder-1.png" },
              { id: "a3219fpa-series", name: "A3219FPA Series", image: "images/placeholder-1.png" },
              { id: "a3219oa-series", name: "A3219OA Series", image: "images/placeholder-1.png" },
              { id: "a3219rt-series", name: "A3219RT Series", image: "images/placeholder-1.png" },
              { id: "a3219w-series", name: "A3219W Series", image: "images/placeholder-1.png" },
              { id: "a3218fpa-series", name: "A3218FPA Series", image: "images/placeholder-1.png" },
              { id: "a3218oa-series", name: "A3218OA Series", image: "images/placeholder-1.png" },
              { id: "a3218pa-series", name: "A3218PA Series", image: "images/placeholder-1.png" },
              { id: "a3218loa-series", name: "A3218LOA Series", image: "images/placeholder-1.png" },
              { id: "a3217pa-series", name: "A3217PA Series", image: "images/placeholder-1.png" },
              { id: "a3217roa-series", name: "A3217ROA Series", image: "images/placeholder-1.png" },
              { id: "a3217arpa-series", name: "A3217ARPA Series", image: "images/placeholder-1.png" },
              { id: "a3217loa-series", name: "A3217LOA Series", image: "images/placeholder-1.png" },
              { id: "a3217-and-da-series", name: "A3217 & A3217DA Series", image: "images/placeholder-1.png" },
              { id: "a3213fpa-series", name: "A3213FPA Series", image: "images/placeholder-1.png" },
              { id: "a3213oa-series", name: "A3213OA Series", image: "images/placeholder-1.png" },
              { id: "a3213pa-accessories", name: "A3213PA Accessories", image: "images/placeholder-1.png" },
              { id: "a3213tl-series", name: "A3213TL Series", image: "images/placeholder-1.png" },
              { id: "a3213d-series", name: "A3213D Series", image: "images/placeholder-1.png" },
              { id: "a3212ra-series", name: "A3212RA Series", image: "images/placeholder-1.png" },
              { id: "a3212r-series", name: "A3212R Series", image: "images/placeholder-1.png" },
              { id: "a3212oa-series", name: "A3212OA Series", image: "images/placeholder-1.png" },
              { id: "a3211d-series", name: "A3211D Series", image: "images/placeholder-1.png" },
              { id: "a3209pa-series", name: "A3209PA Series", image: "images/placeholder-1.png" },
              { id: "a3209poa-series", name: "A3209POA Series", image: "images/placeholder-1.png" },
              { id: "a3209foa-series", name: "A3209FOA Series", image: "images/placeholder-1.png" },
              { id: "a3209tl-series", name: "A3209TL Series", image: "images/placeholder-1.png" },
              { id: "a3209dt-series", name: "A3209D(T) Series", image: "images/placeholder-1.png" },
              { id: "a3200ea-series", name: "A3200EA Series", image: "images/placeholder-1.png" },
              { id: "3200c-and-l-series", name: "3200C & 3200L Series", image: "images/placeholder-1.png" }
            ]
          }
        ]
      },
      {
        name: "Emergency Shutoff Valves",
        products: [
          {
            type: "Valve Types and Actuators",
            items: [
              { id: "electric-actuator", name: "Electric Actuator", image: "images/placeholder-1.png" },
              { id: "cable-actuator", name: "Cable Actuator", image: "images/placeholder-1.png" },
              { id: "cable-kits", name: "Cable Kits", image: "images/placeholder-1.png" },
              { id: "pneumatic-actuator", name: "Pneumatic Actuator", image: "images/placeholder-1.png" },
              { id: "pneumatic-controls", name: "Pneumatic Controls", image: "images/placeholder-1.png" },
              { id: "rotary-actuator", name: "Rotary Actuator", image: "images/placeholder-1.png" }
            ]
          },
          {
            type: "Body Categories",
            items: [
              { id: "a6000-threaded", name: "A6000 Threaded", image: "images/placeholder-1.png" },
              { id: "fa6000-flanged", name: "FA6000 Flanged", image: "images/placeholder-1.png" },
              { id: "actuators-cable-pneumatic", name: "Actuators, Cable & Pneumatic Controls", image: "images/placeholder-1.png" }
            ]
          },
          {
            type: "Series",
            items: [
              { id: "a6006-series", name: "A6006 Series", image: "images/placeholder-1.png" },
              { id: "a6008-series", name: "A6008 Series", image: "images/placeholder-1.png" },
              { id: "va6010-series", name: "(V)A6010 Series", image: "images/placeholder-1.png" },
              { id: "va6016-series", name: "(V)A6016 Series", image: "images/placeholder-1.png" },
              { id: "va6024-series", name: "(V)A6024 Series", image: "images/placeholder-1.png" },
              { id: "fva6010-series", name: "F(V)A6010 Series", image: "images/placeholder-1.png" },
              { id: "fva6016-series", name: "F(V)A6016 Series", image: "images/placeholder-1.png" },
              { id: "fva6024-series", name: "F(V)A6024 Series", image: "images/placeholder-1.png" }
            ]
          }
        ]
      },
      {
        name: "Rotogages",
        products: [
          {
            type: "Rotogage Tubes",
            items: [
              { id: "a9090-series-tubes", name: "A9090 Series", image: "images/placeholder-1.png" },
              { id: "a9091-series-tubes", name: "A9091 Series", image: "images/placeholder-1.png" },
              { id: "a9091-m-series-tubes", name: "A9091-M Series", image: "images/placeholder-1.png" },
              { id: "2071-series-tubes", name: "2071 Series", image: "images/placeholder-1.png" }
            ]
          },
          {
            type: "Rotogage Dials",
            items: [
              { id: "a9090-series-dials", name: "A9090 Series", image: "images/placeholder-1.png" },
              { id: "a9091-series-dials", name: "A9091 Series", image: "images/placeholder-1.png" },
              { id: "a9091-m-series-dials", name: "A9091-M Series", image: "images/placeholder-1.png" },
              { id: "2071-series-dials", name: "2071 Series", image: "images/placeholder-1.png" }
            ]
          },
          {
            type: "Rotogage Assembly",
            items: [
              { id: "a9090-series-assembly", name: "A9090 Series", image: "images/placeholder-1.png" },
              { id: "a9091-series-assembly", name: "A9091 Series", image: "images/placeholder-1.png" },
              { id: "a9091-m-series-assembly", name: "A9091-M Series", image: "images/placeholder-1.png" },
              { id: "2071-series-assembly", name: "2071 Series", image: "images/placeholder-1.png" }
            ]
          }
        ]
      },
      {
        name: "Pressure Regulators & Accessories",
        products: [
          {
            type: "Pressure Regulators",
            items: [
              { id: "lv3403b-series", name: "Compact LV3403B Series", image: "images/placeholder-1.png" },
              { id: "lv3403ek", name: "Compact LV3403EK", image: "images/placeholder-1.png" },
              { id: "lv404b", name: "Compact LV404B", image: "images/placeholder-1.png" },
              { id: "lv404y39", name: "Compact LV404Y39", image: "images/placeholder-1.png" },
              { id: "5824", name: "First Stage Full Size 5824", image: "images/placeholder-1.png" },
              { id: "first-stage-regulators", name: "First Stage Regulators", image: "images/placeholder-1.png" },
              { id: "lv404b-series", name: "Full Size LV404B Series", image: "images/placeholder-1.png" },
              { id: "lv404b1", name: "Full Size LV404B1", image: "images/placeholder-1.png" },
              { id: "lv404h-series", name: "Full Size LV404H Series", image: "images/placeholder-1.png" },
              { id: "lv404h1", name: "Full Size LV404H1", image: "images/placeholder-1.png" },
              { id: "lv404y19", name: "Full Size LV404Y19", image: "images/placeholder-1.png" },
              { id: "lv404y9-series", name: "Full Size LV404Y9 Series", image: "images/placeholder-1.png" },
              { id: "lv4403b-series", name: "Full Size LV4403B Series", image: "images/placeholder-1.png" },
              { id: "lv4403h-series", name: "Full Size LV4403H Series", image: "images/placeholder-1.png" },
              { id: "lv4403k-series", name: "Full Size LV4403K Series", image: "images/placeholder-1.png" },
              { id: "lv4403y-series", name: "Full Size LV4403Y Series", image: "images/placeholder-1.png" },
              { id: "2962-series", name: "High Pressure 2962 Series", image: "images/placeholder-1.png" },
              { id: "pt6800b-series", name: "High Pressure PT6800B Series", image: "images/placeholder-1.png" },
              { id: "high-pressure-regulators", name: "High Pressure Regulators", image: "images/placeholder-1.png" },
              { id: "second-stage-regulators", name: "Second Stage Regulators", image: "images/placeholder-1.png" },
              { id: "single-stage-regulators", name: "Single Stage Regulators", image: "images/placeholder-1.png" },
              { id: "twin-stage-regulators", name: "Twin Stage Regulators", image: "images/placeholder-1.png" }
            ]
          },
          {
            type: "Automatic Changeover",
            items: [
              { id: "automatic-changeover", name: "Automatic Changeover", image: "images/placeholder-1.png" },
              { id: "5830-series", name: "Twin Stage System – 5830 Series", image: "images/placeholder-1.png" },
              { id: "5800-series", name: "Two Stage Package – 5800 Series", image: "images/placeholder-1.png" }
            ]
          },
          {
            type: "Gauges and Manifolds",
            items: [
              { id: "manifolds", name: "Manifolds", image: "images/placeholder-1.png" },
              { id: "second-stage-special-setting", name: "Second Stage Special Setting", image: "images/placeholder-1.png" },
              { id: "tpf", name: "TPF", image: "images/placeholder-1.png" },
              { id: "1350r", name: "Tee Check Manifold 1350R", image: "images/placeholder-1.png" },
              { id: "1450r", name: "Tee Check Manifold 1450R", image: "images/placeholder-1.png" },
              { id: "vent-screen", name: "Vent Screen", image: "images/placeholder-1.png" },
              { id: "x1580", name: "X1580", image: "images/placeholder-1.png" }
            ]
          },
          {
            type: "Fittings and Pigtails",
            items: [
              { id: "913-series", name: "Bent Pigtails 913 Series", image: "images/placeholder-1.png" },
              { id: "copper-pigtails", name: "Copper Pigtails", image: "images/placeholder-1.png" },
              { id: "d912-series", name: "Dielectric Pigtails D912 Series", image: "images/placeholder-1.png" },
              { id: "d913-series", name: "Dielectric Pigtails D913 Series", image: "images/placeholder-1.png" },
              { id: "inlet-fittings", name: "Inlet Fittings", image: "images/placeholder-1.png" },
              { id: "presto-tap-fittings", name: "Presto-Tap™ Fittings", image: "images/placeholder-1.png" },
              { id: "pt912-series", name: "Presto-Tap™ Pigtails PT912 Series", image: "images/placeholder-1.png" },
              { id: "pt913-series", name: "Presto-Tap™ Pigtails PT913 Series", image: "images/placeholder-1.png" },
              { id: "912-series", name: "Straight Pigtails 912 Series", image: "images/placeholder-1.png" },
              { id: "913-series-straight", name: "Straight Pigtails 913 Series", image: "images/placeholder-1.png" }
            ]
          },
          {
            type: "Mounting and Hardware",
            items: [
              { id: "adjustable-vent-kits", name: "Adjustable Vent Kits", image: "images/placeholder-1.png" },
              { id: "brackets", name: "Brackets", image: "images/placeholder-1.png" },
              { id: "brackets-and-vent-kit", name: "Brackets and Vent Kit", image: "images/placeholder-1.png" }
            ]
          },
          {
            type: "Kits and Accessories",
            items: [
              { id: "3139-accessories", name: "3139 Accessories", image: "images/placeholder-1.png" },
              { id: "outfit-kits", name: "Outfit Kits", image: "images/placeholder-1.png" },
              { id: "pt-af14-series", name: "PT-AF14 Series", image: "images/placeholder-1.png" },
              { id: "pt36kit-series", name: "PT36KIT Series", image: "images/placeholder-1.png" },
              { id: "ptkit-series", name: "PTKIT Series", image: "images/placeholder-1.png" },
              { id: "ptlinkkga-series", name: "PTLINKKGA Series", image: "images/placeholder-1.png" },
              { id: "presto-link", name: "Presto-Link", image: "images/placeholder-1.png" },
              { id: "test-presto-tap-kits", name: "Test & Presto-Tap Kits", image: "images/placeholder-1.png" }
            ]
          },
          {
            type: "Series / Components",
            items: [
              { id: "1580v-series", name: "1580V Series", image: "images/placeholder-1.png" },
              { id: "302-series", name: "302 Series", image: "images/placeholder-1.png" },
              { id: "5720-series", name: "5720 Series", image: "images/placeholder-1.png" },
              { id: "597f-series", name: "597F Series", image: "images/placeholder-1.png" },
              { id: "7525b-series", name: "7525B Series", image: "images/placeholder-1.png" },
              { id: "aa1580-series", name: "AA1580 Series", image: "images/placeholder-1.png" }
            ]
          }
        ]
      },
      {
        name: "Cylinder Valves & Multivalves",
        products: [
          {
            type: "Categories",
            items: [
              { id: "dot-cylinder-vapor", name: "DOT Cylinder Vapor", image: "images/placeholder-1.png" },
              { id: "dot-cylinder-liquid", name: "DOT Cylinder Liquid", image: "images/placeholder-1.png" },
              { id: "dot-cylinder-vapor-liquid", name: "DOT Cylinder Vapor & Liquid", image: "images/placeholder-1.png" },
              { id: "dot-cylinder-vapor-propylene", name: "DOT Cylinder Vapor – Propylene Service", image: "images/placeholder-1.png" },
              { id: "dot-cylinder-forklift", name: "DOT Cylinder Forklift", image: "images/placeholder-1.png" },
              { id: "asme-domestic", name: "ASME Domestic", image: "images/placeholder-1.png" },
              { id: "asme-motor-fuel-rv", name: "ASME Motor Fuel and RV", image: "images/placeholder-1.png" }
            ]
          },
          {
            type: "Series",
            items: [
              { id: "y520d-series", name: "Y520D Series", image: "images/placeholder-1.png" },
              { id: "g8475rl-series", name: "G8475RL Series", image: "images/placeholder-1.png" },
              { id: "g8475rlw-series", name: "G8475RLW Series", image: "images/placeholder-1.png" },
              { id: "d9107k8a", name: "D9107K8A / 9107K8A", image: "images/placeholder-1.png" },
              { id: "d9103-series", name: "D9103 Series", image: "images/placeholder-1.png" },
              { id: "d9102-series-dot-vapor", name: "D9102 Series – DOT Cylinder Vapor", image: "images/placeholder-1.png" },
              { id: "d9102-series-asme-domestic", name: "D9102 Series – ASME Domestic", image: "images/placeholder-1.png" },
              { id: "d9102-series", name: "D9102 Series", image: "images/placeholder-1.png" },
              { id: "d9101-series-dot", name: "D9101 Series – DOT", image: "images/placeholder-1.png" },
              { id: "d9101-series-asme-domestic", name: "D9101 Series – ASME Domestic", image: "images/placeholder-1.png" },
              { id: "d9101-series-asme-motor-fuel", name: "D9101 Series – ASME Motor Fuel", image: "images/placeholder-1.png" },
              { id: "d9101-series", name: "D9101 Series", image: "images/placeholder-1.png" },
              { id: "9106co-series", name: "9106CO Series", image: "images/placeholder-1.png" },
              { id: "9104pt-series", name: "9104PT Series", image: "images/placeholder-1.png" },
              { id: "9104ppa-series", name: "9104PPA Series", image: "images/placeholder-1.png" },
              { id: "9103-series-dot", name: "9103 Series – DOT", image: "images/placeholder-1.png" },
              { id: "9103-series-asme", name: "9103 Series – ASME", image: "images/placeholder-1.png" },
              { id: "9102-series-dot", name: "9102 Series – DOT", image: "images/placeholder-1.png" },
              { id: "9102-series-asme", name: "9102 Series – ASME", image: "images/placeholder-1.png" },
              { id: "9102-series-asme-motor-fuel", name: "9102 Series – ASME Motor Fuel", image: "images/placeholder-1.png" },
              { id: "9101y5h", name: "9101Y5H", image: "images/placeholder-1.png" },
              { id: "9101p6h", name: "9101P6H", image: "images/placeholder-1.png" },
              { id: "9101p6", name: "9101P6", image: "images/placeholder-1.png" },
              { id: "9101p5h", name: "9101P5H", image: "images/placeholder-1.png" },
              { id: "9101p5", name: "9101P5", image: "images/placeholder-1.png" },
              { id: "9101h-series", name: "9101H Series", image: "images/placeholder-1.png" },
              { id: "9101dk-ds-dnp", name: "9101DK / 9101DS / 9101DNP", image: "images/placeholder-1.png" },
              { id: "901c-series", name: "901C Series", image: "images/placeholder-1.png" },
              { id: "901c1-dot", name: "901C1 – DOT", image: "images/placeholder-1.png" },
              { id: "901c1-asme-motor-fuel", name: "901C1 – ASME Motor Fuel", image: "images/placeholder-1.png" },
              { id: "8593al-series", name: "8593AL Series", image: "images/placeholder-1.png" },
              { id: "8556-series", name: "8556 Series", image: "images/placeholder-1.png" },
              { id: "8555r-series", name: "8555R Series", image: "images/placeholder-1.png" },
              { id: "8555dl-series", name: "8555DL Series", image: "images/placeholder-1.png" },
              { id: "8555d-series", name: "8555D Series", image: "images/placeholder-1.png" },
              { id: "7556r-series", name: "7556R Series", image: "images/placeholder-1.png" },
              { id: "6555r-series", name: "6555R Series", image: "images/placeholder-1.png" },
              { id: "6543-series", name: "6543 Series", image: "images/placeholder-1.png" },
              { id: "6542-series", name: "6542 Series", image: "images/placeholder-1.png" },
              { id: "6533-series", name: "6533 Series", image: "images/placeholder-1.png" },
              { id: "6532-series", name: "6532 Series", image: "images/placeholder-1.png" },
              { id: "7136r-series", name: "7136R Series", image: "images/placeholder-1.png" }
            ]
          }
        ]
      },
      {
        name: "Pressure Gauges and Vent Valves",
        products: [
          {
            type: "Categories",
            items: [
              { id: "pressure-gauges", name: "Pressure Gauges", image: "images/placeholder-1.png" },
              { id: "vent-valves", name: "Vent Valves", image: "images/placeholder-1.png" },
              { id: "fixed-liquid-level-gauge", name: "Fixed Liquid Level Gauge", image: "images/placeholder-1.png" },
              { id: "combination-valve", name: "Combination Valve", image: "images/placeholder-1.png" }
            ]
          },
          {
            type: "Pressure Gauge Series",
            items: [
              { id: "5575-series", name: "5575 Series", image: "images/placeholder-1.png" },
              { id: "5547-series", name: "5547 Series", image: "images/placeholder-1.png" },
              { id: "3226a-3-series", name: "3226A-3 Series", image: "images/placeholder-1.png" },
              { id: "2434-series", name: "2434 Series", image: "images/placeholder-1.png" },
              { id: "2411-series", name: "2411 Series", image: "images/placeholder-1.png" },
              { id: "1286-series", name: "1286 Series", image: "images/placeholder-1.png" },
              { id: "a8400-series", name: "A8400 Series", image: "images/placeholder-1.png" },
              { id: "a8150-series", name: "A8150 Series", image: "images/placeholder-1.png" },
              { id: "a8060-series", name: "A8060 Series", image: "images/placeholder-1.png" },
              { id: "948gs-series", name: "948GS Series", image: "images/placeholder-1.png" },
              { id: "948-948b-series", name: "948, 948B Series", image: "images/placeholder-1.png" },
              { id: "7170-series", name: "7170 Series", image: "images/placeholder-1.png" },
              { id: "612-series", name: "612 Series", image: "images/placeholder-1.png" },
              { id: "5576-series", name: "5576 Series", image: "images/placeholder-1.png" },
              { id: "6574-series", name: "6574 Series", image: "images/placeholder-1.png" }
            ]
          },
          {
            type: "Vent Valve Series",
            items: [
              { id: "3165-series", name: "3165 Series", image: "images/placeholder-1.png" },
              { id: "3165-vent-valves-series", name: "3165 Vent Valves Series", image: "images/placeholder-1.png" },
              { id: "tss3169-series", name: "TSS3169 Series", image: "images/placeholder-1.png" },
              { id: "ta3169f-series", name: "TA3169F Series", image: "images/placeholder-1.png" }
            ]
          },
          {
            type: "Other Valves / Components",
            items: [
              { id: "a2805c-series", name: "A2805C Series", image: "images/placeholder-1.png" },
              { id: "7700-series", name: "7700 Series", image: "images/placeholder-1.png" }
            ]
          }
        ]
      }
    ]
  }
];

export default catalogData; 