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
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/MasqueRose-Claudine_Rosehandband106-modif_720x_2721450b-5319-4c17-88a7-f184fc6f88af.webp?v=1661113363&width=300",
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/bkind-floral-face-2_718634ed-72d4-47b3-98aa-ab26bbc66519.jpg?v=1661113363&width=300",
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/DSC09676_720x_c8e60487-bf57-4cbe-9582-b9db4c16aec9.webp?v=1661113363&width=500",
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
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/MasqueRose-Claudine_Rosehandband106-modif_720x_2721450b-5319-4c17-88a7-f184fc6f88af.webp?v=1661113363&width=300",
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/bkind-floral-face-2_718634ed-72d4-47b3-98aa-ab26bbc66519.jpg?v=1661113363&width=300",
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/DSC09676_720x_c8e60487-bf57-4cbe-9582-b9db4c16aec9.webp?v=1661113363&width=500",
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
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/MasqueRose-Claudine_Rosehandband106-modif_720x_2721450b-5319-4c17-88a7-f184fc6f88af.webp?v=1661113363&width=300",
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/bkind-floral-face-2_718634ed-72d4-47b3-98aa-ab26bbc66519.jpg?v=1661113363&width=300",
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/DSC09676_720x_c8e60487-bf57-4cbe-9582-b9db4c16aec9.webp?v=1661113363&width=500",
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
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/MasqueRose-Claudine_Rosehandband106-modif_720x_2721450b-5319-4c17-88a7-f184fc6f88af.webp?v=1661113363&width=300",
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/bkind-floral-face-2_718634ed-72d4-47b3-98aa-ab26bbc66519.jpg?v=1661113363&width=300",
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/DSC09676_720x_c8e60487-bf57-4cbe-9582-b9db4c16aec9.webp?v=1661113363&width=500",
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
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/MasqueRose-Claudine_Rosehandband106-modif_720x_2721450b-5319-4c17-88a7-f184fc6f88af.webp?v=1661113363&width=300",
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/bkind-floral-face-2_718634ed-72d4-47b3-98aa-ab26bbc66519.jpg?v=1661113363&width=300",
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/DSC09676_720x_c8e60487-bf57-4cbe-9582-b9db4c16aec9.webp?v=1661113363&width=500",
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
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/MasqueRose-Claudine_Rosehandband106-modif_720x_2721450b-5319-4c17-88a7-f184fc6f88af.webp?v=1661113363&width=300",
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/bkind-floral-face-2_718634ed-72d4-47b3-98aa-ab26bbc66519.jpg?v=1661113363&width=300",
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/DSC09676_720x_c8e60487-bf57-4cbe-9582-b9db4c16aec9.webp?v=1661113363&width=500",
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
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/MasqueRose-Claudine_Rosehandband106-modif_720x_2721450b-5319-4c17-88a7-f184fc6f88af.webp?v=1661113363&width=300",
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/bkind-floral-face-2_718634ed-72d4-47b3-98aa-ab26bbc66519.jpg?v=1661113363&width=300",
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/DSC09676_720x_c8e60487-bf57-4cbe-9582-b9db4c16aec9.webp?v=1661113363&width=500",
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
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/MasqueRose-Claudine_Rosehandband106-modif_720x_2721450b-5319-4c17-88a7-f184fc6f88af.webp?v=1661113363&width=300",
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/bkind-floral-face-2_718634ed-72d4-47b3-98aa-ab26bbc66519.jpg?v=1661113363&width=300",
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/DSC09676_720x_c8e60487-bf57-4cbe-9582-b9db4c16aec9.webp?v=1661113363&width=500",
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
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/MasqueRose-Claudine_Rosehandband106-modif_720x_2721450b-5319-4c17-88a7-f184fc6f88af.webp?v=1661113363&width=300",
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/bkind-floral-face-2_718634ed-72d4-47b3-98aa-ab26bbc66519.jpg?v=1661113363&width=300",
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/DSC09676_720x_c8e60487-bf57-4cbe-9582-b9db4c16aec9.webp?v=1661113363&width=500",
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
