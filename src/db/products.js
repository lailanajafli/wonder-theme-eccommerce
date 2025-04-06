const products = [
  {
    id: 1,
    title: "Algae Peel-Off Mask",
    description:
      "Algae Peel-Off Mask with moisturizing and soothing properties.",
    brand: "BKIND",
    brandImage:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/files/bkind_20964610-a240-4c93-9e8a-b016c9ef244b.png?v=1727383420&width=200",
    price: 115.0,
    currency: "USD",
    image:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/bkind-floral-face-2_718634ed-72d4-47b3-98aa-ab26bbc66519.jpg?v=1661113363&width=4096",
    otherImages: [
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/MasqueRose-Claudine_Rosehandband106-modif_720x_2721450b-5319-4c17-88a7-f184fc6f88af.webp?v=1661113363&width=300",
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/bkind-floral-face-2_718634ed-72d4-47b3-98aa-ab26bbc66519.jpg?v=1661113363&width=300",
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/DSC09676_720x_c8e60487-bf57-4cbe-9582-b9db4c16aec9.webp?v=1661113363&width=500",
    ],
    hoverImage:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/MasqueRose-Claudine_Rosehandband106-modif_720x_2721450b-5319-4c17-88a7-f184fc6f88af.webp?v=1661113363&width=1000",
    productVideo:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/videos/c/vp/4d305e188b5b4865a3ec837303069d9e/4d305e188b5b4865a3ec837303069d9e.HD-1080p-2.5Mbps-25428248.mp4?v=0",
    category: "Face Care",
    url: "https://wonder-theme-beauty.myshopify.com/products/bkind-algae-peel-off-mask",
    created_at: "2024-08-15",
  },

  {
    id: 2,
    title: "Active Toning Essence",
    description: "Delays the aging process",
    price: 59.0,
    brand: "MOKOSH",
    brandImage:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/files/mokosh_1c744388-d073-4284-b6af-77229e000f0b.png?v=1727383374&width=200",
    currency: "USD",
    image:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/esencja-Roza-PL.jpg?v=1660223483&width=1200",
      otherImages: [
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/eye.jpg?v=1660832620&width=1200",
      ],
      hoverImage:
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/MasqueRose-Claudine_Rosehandband106-modif_720x_2721450b-5319-4c17-88a7-f184fc6f88af.webp?v=1661113363&width=1000",
        mlOptions: ["12 ml", "24 ml", "36 ml"],
    productVideo:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/videos/c/vp/c90d76a595684ce789cbb1d8c56c23ac/c90d76a595684ce789cbb1d8c56c23ac.HD-1080p-2.5Mbps-25428270.mp4?v=0",
    category: "Face Care",
    url: "https://wonder-theme-beauty.myshopify.com/products/mokosh-active-toning-essence",
    created_at: "2025-01-10",
  },
  {
    id: 3,
    title: "Figa Smoothing Face Cream",
    description: "Reduces fine wrinkles, rejuvenates, improves facial oval",
    price: 70.0,
    brand: "MOKOSH",
    brandImage:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/files/mokosh_1c744388-d073-4284-b6af-77229e000f0b.png?v=1727383374&width=200",
    currency: "USD",
    image:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/mokosh_eb6f0013-4fcc-4f5e-8693-7200be74e429.jpg?v=1661021258&width=600",
      otherImages: [
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/face-2_b57a45fc-e736-4647-96a1-d4f900425895.jpg?v=1661021350&width=1680",
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/hand_d43e00cb-f9b8-42af-856a-5161a71825e9.jpg?v=1661021360&width=1680",
      ],
      hoverImage:
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/MasqueRose-Claudine_Rosehandband106-modif_720x_2721450b-5319-4c17-88a7-f184fc6f88af.webp?v=1661113363&width=1000",
    productVideo:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/videos/c/vp/8de005ccc0de48af93bdb207cff33d51/8de005ccc0de48af93bdb207cff33d51.HD-1080p-3.3Mbps-25428504.mp4?v=0",
    category: "Face Care",
    url: "https://wonder-theme-beauty.myshopify.com/products/mokosh-figa-smoothing-face-cream",
    created_at: "2025-02-13",
  },
  {
    id: 4,
    title: "Jasmine Body Oil",
    description: "Cildinizi besleyen ve yumuşatan yaseminli vücut yağı.",
    price: 170.0,
    brand: "Herbivore",
    brandImage:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/files/herbi_f4fc6530-ee64-4cb8-8620-eac55c6746ef.png?v=1727383343&width=200",
    currency: "USD",
    image:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/jasmine-butelka.jpg?v=1660679672&width=1200",
      otherImages: [
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/herbi-4.jpg?v=1661079705&width=1000",
      ],
      hoverImage:
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/MasqueRose-Claudine_Rosehandband106-modif_720x_2721450b-5319-4c17-88a7-f184fc6f88af.webp?v=1661113363&width=1000",
        mlOptions: ["12 ml", "24 ml", "36 ml"],
    productVideo:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/videos/c/vp/be85ff6dd7374d148021cc59efaba46d/be85ff6dd7374d148021cc59efaba46d.HD-1080p-3.3Mbps-25428588.mp4?v=0",
    category: "Body Care",
    url: "https://wonder-theme-beauty.myshopify.com/products/herbivore-jasmine-body-oil",
    created_at: "2024-11-07",
  },
  {
    id: 5,
    title: "Firming face serum Orange",
    description: "Perfect for natural skin tightening",
    price: 69.0,
    brand: "MOKOSH",
    brandImage:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/files/mokosh_1c744388-d073-4284-b6af-77229e000f0b.png?v=1727383374&width=200",
    currency: "USD",
    image:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/mokosh_a4c51963-4734-4185-a4cf-e05bcc808a17.jpg?v=1661076311&width=1000",
      otherImages: [
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/mokosh-2_6fbcd117-8b45-4d3c-9c0e-1b117823fc80.jpg?v=1661076615&width=1000",
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/mokosh-butelka-2.jpg?v=1661081980&width=1000",
      ],
      hoverImage:
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/MasqueRose-Claudine_Rosehandband106-modif_720x_2721450b-5319-4c17-88a7-f184fc6f88af.webp?v=1661113363&width=1000",
        mlOptions: ["12 ml", "24 ml", "36 ml"],
    productVideo:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/videos/c/vp/ca87e6ef6c494a4181a81ba36d9d2c7b/ca87e6ef6c494a4181a81ba36d9d2c7b.HD-1080p-2.5Mbps-25428822.mp4?v=0",
    category: "Face Care",
    url: "https://wonder-theme-beauty.myshopify.com/products/herbivore-jasmine-body-oil",
    bestSeller: true,
    created_at: "2025-05-02",
  },
  {
    id: 6,
    title: "Body salt scrub 300 g",
    description: "Perfect for natural skin tightening",
    price: 68.0,
    brand: "MOKOSH",
    brandImage:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/files/mokosh_1c744388-d073-4284-b6af-77229e000f0b.png?v=1727383374&width=200",
    currency: "USD",
    image:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/mokosh_f5156c4e-7a14-4bb0-bcfa-e026f125a4c7.jpg?v=1661020160&width=750",
      otherImages: [
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/mokosh-3.jpg?v=1661020209&width=1000",
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/face-3.jpg?v=1661020456&width=1000",
      ],
      hoverImage:
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/MasqueRose-Claudine_Rosehandband106-modif_720x_2721450b-5319-4c17-88a7-f184fc6f88af.webp?v=1661113363&width=1000",
    category: "Face Care",
    url: "https://wonder-theme-beauty.myshopify.com/products/herbivore-jasmine-body-oil",
    bestSeller: true,
    created_at: "2024-17-07",
  },
  {
    id: 7,
    title: "Moisturizing hand lotion",
    description:
      "Effectively nourishes the skin of the hands and protects it from drying out",
    price: 11.5,
    brand: "MOKOSH",
    brandImage:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/files/mokosh_1c744388-d073-4284-b6af-77229e000f0b.png?v=1727383374&width=200",
    currency: "USD",
    image:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/1484-lotion-do-dloni-melon-z-ogorkiem-100ml.jpg?v=1644567435&width=750",
      otherImages: [
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/hand_6cc27ca5-286a-49e8-b56c-2a67ce894e5b.jpg?v=1660832679&width=1680",
      ],
      hoverImage:
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/MasqueRose-Claudine_Rosehandband106-modif_720x_2721450b-5319-4c17-88a7-f184fc6f88af.webp?v=1661113363&width=1000",
    productVideo:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/videos/c/vp/cc2494dc8cde4dcfbbcd7cf208d20cec/cc2494dc8cde4dcfbbcd7cf208d20cec.HD-1080p-2.5Mbps-25428688.mp4?v=0",
    category: "Face Care",
    url: "https://wonder-theme-beauty.myshopify.com/products/herbivore-jasmine-body-oil",
    bestSeller: true,
    created_at: "2024-17-07",
  },
  {
    id: 8,
    title: "Corrective eye cream",
    description: "Reduces dark circles and puffs under the eyes",
    price: 29.0,
    brand: "MOKOSH",
    brandImage:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/files/mokosh_1c744388-d073-4284-b6af-77229e000f0b.png?v=1727383374&width=200",
    currency: "USD",
    image:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/mokosh-korygujacy-krem.jpg?v=1655666765&width=750",
      otherImages: [
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/cream_da85ff75-366f-4c30-95da-9164b501a65e.jpg?v=1660895427&width=1200",
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/face_293b7eaa-ff18-43e7-87e5-d253357d99a7.jpg?v=1660895442&width=1200",
      ],
      hoverImage:
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/MasqueRose-Claudine_Rosehandband106-modif_720x_2721450b-5319-4c17-88a7-f184fc6f88af.webp?v=1661113363&width=1000",
    category: "Face Care",
    url: "https://wonder-theme-beauty.myshopify.com/products/herbivore-jasmine-body-oil",
    bestSeller: true,
    created_at: "2025-05-01",
  },
  {
    id: 9,
    title: "Nourishing hand balm",
    description: "Moisturizes, soothes, repairs and promotes tissue healing",
    price: 96.0,
    brand: "BKIND",
    brandImage:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/files/bkind_20964610-a240-4c93-9e8a-b016c9ef244b.png?v=1727383420&width=200",
    currency: "USD",
    image:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/bkind-mobile-3.jpg?v=1661118934&width=750",
      otherImages: [
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/handbalmgrapefruit_8592b728-46ab-4e38-b1db-d1338d66876a.webp?v=1661118934&width=2048",
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/MandarinePAmplemousse-GOLD-modif-Web_cb267dfb-1d32-4c77-a26d-056bc24a226e.webp?v=1661118934&width=1680",
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/mandarinepamplemousse_baume_ecom_2_1f803f8a-78c5-4e1c-b062-506280256b38.webp?v=1661118934&width=2048",
      ],
      hoverImage:
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/MasqueRose-Claudine_Rosehandband106-modif_720x_2721450b-5319-4c17-88a7-f184fc6f88af.webp?v=1661113363&width=1000",
    category: "Hand Care",
    url: "https://wonder-theme-beauty.myshopify.com/products/bkind-algae-peel-off-mask",
    created_at: "2025-02-10",
    bestSeller: true,
  },
  {
    id: 10,
    title: "Iodine & bromine salt",
    description: "Fights cellulite",
    price: 13.9,
    brand: "MOKOSH",
    brandImage:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/files/bkind_20964610-a240-4c93-9e8a-b016c9ef244b.png?v=1727383420&width=200",
    currency: "USD",
    image:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/mokosh-sol-jodowana.jpg?v=1655666934&width=750",
      otherImages: [
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/662-160-sol_jodowobromowa_mm.jpg?v=1655666934&width=500",
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/wash_fcbe8c99-e644-4b27-9063-036876038749.jpg?v=1660832937&width=1680",
      ],
      hoverImage:
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/MasqueRose-Claudine_Rosehandband106-modif_720x_2721450b-5319-4c17-88a7-f184fc6f88af.webp?v=1661113363&width=1000",
        mlOptions: ["12 ml", "24 ml", "36 ml"],
    category: "Body Care",
    url: "https://wonder-theme-beauty.myshopify.com/products/bkind-algae-peel-off-mask",
    created_at: "2025-02-10",
    bestSeller: true,
  },
  {
    id: 11,
    title: "Orchid Antioxidant Beauty Face Oil",
    description: "Orchid Antioxidant Beauty Face Oil contains lush",
    price: 86.0,
    brand: "Herbivore",
    brandImage:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/files/herbi_f4fc6530-ee64-4cb8-8620-eac55c6746ef.png?v=1727383343&width=200",
    currency: "USD",
    image:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/orchid_facial_oil.jpg?v=1655662514&width=1200",
      otherImages: [
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/orchid_facial_oil-2.jpg?v=1655662514&width=1200",
      ],
      hoverImage:
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/MasqueRose-Claudine_Rosehandband106-modif_720x_2721450b-5319-4c17-88a7-f184fc6f88af.webp?v=1661113363&width=1000",
        mlOptions: ["12 ml", "24 ml", "36 ml"],
    category: "Body Care",
    url: "https://wonder-theme-beauty.myshopify.com/products/herbivore-jasmine-body-oil",
    created_at: "2024-11-07",
    bestSeller: true,
  },
  {
    id: 12,
    title: "Bakuchiol Retinol Alternative Serum",
    description: "Orchid Antioxidant Beauty Face Oil contains lush",
    price: 55.0,
    brand: "Herbivore",
    brandImage:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/files/herbi_f4fc6530-ee64-4cb8-8620-eac55c6746ef.png?v=1727383343&width=200",
    currency: "USD",
    image:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/Herbivore_Bakuchiol_Retinol_Alternative_Smoothing_Serum.webp?v=1663087327&width=2048",
      otherImages: [
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/Herbivore_Bakuchiol_RetinolAlternativeSmoothingSerum_2.webp?v=1663087327&width=1680",
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/Herbivore_Bakuchiol_Serum_Ecomm.webp?v=1663087327&width=1200",
      ],
      hoverImage:
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/MasqueRose-Claudine_Rosehandband106-modif_720x_2721450b-5319-4c17-88a7-f184fc6f88af.webp?v=1661113363&width=1000",
        mlOptions: ["12 ml", "24 ml", "36 ml"],
    category: "Body Care",
    url: "https://wonder-theme-beauty.myshopify.com/products/herbivore-jasmine-body-oil",
    created_at: "2024-11-07",
  },
  {
    id: 13,
    title: "Lapis Blue Tansy Face Oil",
    description: "Lapis Blue Tansy Face Oil",
    price: 170.0,
    brand: "Herbivore",
    brandImage:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/files/bkind_20964610-a240-4c93-9e8a-b016c9ef244b.png?v=1727383420&width=200",
    currency: "USD",
    image:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/files/1_c99f225c-fa02-47fb-af9f-c0fd52ce7381.jpg?v=1645702698&width=750",
      otherImages: [
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/mokosh-butelka_8cb663c2-c261-49b8-bb27-5561b0039aea.jpg?v=1661110797&width=1000",
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/Herbivore_Lapis_BlueTansy_FaceOil_2.webp?v=1661110797&width=1200",
      ],
      hoverImage:
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/MasqueRose-Claudine_Rosehandband106-modif_720x_2721450b-5319-4c17-88a7-f184fc6f88af.webp?v=1661113363&width=1000",
        mlOptions: ["12 ml", "24 ml", "36 ml"],
    category: "Body Care",
    url: "https://wonder-theme-beauty.myshopify.com/products/bkind-algae-peel-off-mask",
    created_at: "2025-02-10",
  },
  {
    id: 14,
    title: "Conditioner bar - colored or white hair",
    description: "Conditioner bar - colored or white hair",
    price: 80.0,
    brand: "BKIND",
    brandImage:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/files/bkind_20964610-a240-4c93-9e8a-b016c9ef244b.png?v=1727383420&width=200",
    currency: "USD",
    image:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/files/bknd-banner-1241.jpg?v=1705065416&width=750",
      otherImages: [
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/mydlo.jpg?v=1660765109&width=1680",
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/grain_shampoo_flatlay_b9ef8c80-fa90-46ba-bad3-25d7e3160881.webp?v=1660765109&width=1680",
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/R-PAMPOU.webp?v=1660765109&width=2048",
      ],
      hoverImage:
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/MasqueRose-Claudine_Rosehandband106-modif_720x_2721450b-5319-4c17-88a7-f184fc6f88af.webp?v=1661113363&width=1000",
    category: "Hand Care",
    url: "https://wonder-theme-beauty.myshopify.com/products/bkind-algae-peel-off-mask",
    created_at: "2025-02-10",
  },
  {
    id: 15,
    title: "Moisturizing body lotion",
    description: "Mokosh body lotion",
    price: 65.0,
    brand: "MOKOSH",
    brandImage:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/files/bkind_20964610-a240-4c93-9e8a-b016c9ef244b.png?v=1727383420&width=200",
    currency: "USD",
    image:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/files/1_3da6ed06-b3f4-4413-adec-953c463fa313.jpg?v=1645722345&width=750",
      otherImages: [
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/mokosh_a5aecbc8-4cfa-43fc-99e1-8791f467e78a.jpg?v=1661021907&width=1000",
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/hand_9a61cb07-c896-4bdd-ac2a-0049b32a53e3.jpg?v=1661021907&width=1680",
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/face_71a13af0-710c-43ed-90d3-d2faa3adba89.jpg?v=1661021907&width=1200",
      ],
      hoverImage:
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/MasqueRose-Claudine_Rosehandband106-modif_720x_2721450b-5319-4c17-88a7-f184fc6f88af.webp?v=1661113363&width=1000",
        mlOptions: ["12 ml", "24 ml", "36 ml"],
    category: "Body Care",
    url: "https://wonder-theme-beauty.myshopify.com/products/bkind-algae-peel-off-mask",
    created_at: "2025-02-10",
  },
  {
    id: 16,
    title: "Patchouli essential oil",
    description: "Chemical-free and synthetic-free.",
    price: 13.90,
    brand: "MOKOSH",
    brandImage:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/files/bkind_20964610-a240-4c93-9e8a-b016c9ef244b.png?v=1727383420&width=200",
    currency: "USD",
    image:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/pink.jpg?v=1644567419&width=1000",
      otherImages: [
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/1260-paczuli-hq.jpg?v=1644567419&width=500",

      ],
      hoverImage:
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/1260-paczuli-hq.jpg?v=1644567419&width=500",
    category: "Essential Care",
    created_at: "2024-09-10",
  },
  {
    id: 17,
    title: "Argan oil for nails",
    description: "Strengthens nails",
    price: 19.00,
    brand: "MOKOSH",
    brandImage:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/files/bkind_20964610-a240-4c93-9e8a-b016c9ef244b.png?v=1727383420&width=200",
    currency: "USD",
    image:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/mokosh-argan-nail-care.jpg?v=1660679309&width=1200",
      otherImages: [
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/argan-beauty_a7548367-e940-4495-8b64-a13b5cd30108.jpg?v=1660832651&width=1200",

      ],
      hoverImage:
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/argan-beauty_a7548367-e940-4495-8b64-a13b5cd30108.jpg?v=1660832651&width=750",
        mlOptions: ["12 ml", "24 ml", "36 ml"],
    category: "Essential Care",
    created_at: "2024-12-12",
  },
  {
    id: 18,
    title: "Shampoo Bar - coily and curly hair",
    description: "Easy to foam",
    price: 80.00,
    brand: "BKIND",
    brandImage:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/files/bkind_20964610-a240-4c93-9e8a-b016c9ef244b.png?v=1727383420&width=200",
    currency: "USD",
    image:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/bkind-grey.jpg?v=1660765271&width=1680",
      otherImages: [
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/98.webp?v=1660765271&width=500",
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/R-PAMPOU_172052c7-5ceb-4912-93b0-d1bb8e13a59b.webp?v=1660765269&width=2048"

      ],
      hoverImage:
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/98.webp?v=1660765271&width=500",
    category: "Hair Care",
    created_at: "2025-04-06",
  },
  {
    id: 19,
    title: "Nourishing hand balm - balsam, pine cedar",
    description: "The balm contains essential oils of balsam, pine and cedar",
    price: 96.00,
    brand: "BKIND",
    brandImage:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/files/bkind_20964610-a240-4c93-9e8a-b016c9ef244b.png?v=1727383420&width=200",
    currency: "USD",
    image:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/bkind-balm.jpg?v=1661014192&width=1200",
      otherImages: [
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/55.webp?v=1661014192&width=500",
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/56.webp?v=1661014192&width=500",
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/bkind-2.jpg?v=1661014192&width=1200"

      ],
      hoverImage:
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/55.webp?v=1661014192&width=1000",
    category: "Hand Care",
    created_at: "2025-03-15",
  },
  {
    brand: "Osea",
    brandImage:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/files/osea_249c4ef0-4671-4810-910a-54461c1a863d.png?v=1727383398&width=200",
  },
  {
    brand: "Acure",
    brandImage:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/files/acure_34eec53a-de6d-4717-9e48-ee4137067bc5.png?v=1727383304&width=200",
  },
  {
    brand: "Keeko.",
    brandImage:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/files/keeko_860e46a1-b765-4f97-9d31-a29328decefc.png?v=1727383316&width=200",
  },
  {
    brand: "Odacite",
    brandImage:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/files/odacite_6c8c52af-f8ae-4260-8725-8e7119df3aad.png?v=1727383387&width=200",
  },
  {
    brand: "Ilia",
    brandImage:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/files/ilia_c29907a2-c6f9-410c-bbc3-1d4debd9e041.png?v=1727383362&width=200",
  },
];

export default products;
