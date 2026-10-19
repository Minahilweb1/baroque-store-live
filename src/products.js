
const imagePath = (path) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

const products = [
  {
    id: 1,
    name: "Royal Dress",
    category: "Fashion",
    description: "Elegant Baroque-inspired fashion for special occasions.",
    price: 120,
    image: imagePath("images/dress.jpg"),
  },
  {
    id: 2,
    name: "Classic Handbag",
    category: "Accessories",
    description: "Luxury design with timeless details.",
    price: 85,
    image: imagePath("images/handbag.jpg"),
  },
  {
    id: 3,
    name: "Golden Accessories",
    category: "Luxury",
    description: "Beautiful accessories for a royal look.",
    price: 50,
    image: imagePath("images/accessories.jpg"),
  },
  {
    id: 4,
    name: "Royal Necklace",
    category: "Jewelry",
    description: "An elegant golden necklace inspired by Baroque style.",
    price: 70,
    image: imagePath("images/necklace.jpg"),
  },
  {
    id: 5,
    name: "Elegant Evening Dress",
    category: "Fashion",
    description: "A sophisticated look for celebrations and events.",
    price: 145,
    image: imagePath("images/img1.jpg"),
  },
  {
    id: 6,
    name: "Luxury Shoulder Bag",
    category: "Accessories",
    description: "A timeless accessory for your everyday wardrobe.",
    price: 95,
    image: imagePath("images/shoulder bags.jpg"),
  },
  {
    id: 7,
    name: "Golden Earrings",
    category: "Jewelry",
    description: "Statement earrings with a classic golden finish.",
    price: 40,
    image: imagePath("images/earings.jpg"),
  },
  {
    id: 8,
    name: "Luxury Clutch",
    category: "Luxury",
    description: "An elegant finishing touch for evening outfits.",
    price: 65,
    image: imagePath("images/cluch.jpg"),
  },
];

export default products;
