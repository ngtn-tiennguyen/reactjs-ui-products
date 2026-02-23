const products = [
  {
    id: 1,
    name: "Black&Gold 3068B Plus",
    price: 105.99,
    image:
      "https://en.akkogear.com/wp-content/uploads/2022/01/BlackGold-3068B-Plus-Q.jpg",
    description:
      "With the updated Akko Beken Plus multi-modes solution with BT5.0/2.4Ghz/Type-C All-in-One;",
  },
  {
    id: 2,
    name: "Signature M650",
    price: 39.99,
    image:
      "https://resource.logitech.com/w_544,h_544,ar_1,c_fill,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/logitech/en/products/mice/m650/update-2025/gallery/graphite-medium/m650-on-a-desk-top-view-mouse-graphite-medium-2.jpg",
    description:
      "Upgrade to smarter scrolling, better comfort, and more productivity.",
  },
  {
    id: 3,
    name: "Sony WH-CH520",
    price: 69.95,
    image:
      "https://cdn4.425degree.com/media/amasty/webp/audio/Mikie/SONY_WH_CH520/firstpic_jpg.webp",
    description:
      "Enjoy high sound quality all day long. The WH-CH520 headphones with up to 50 hours of battery life, stable connectivity, and enhanced call performance, meet the demands of your day.",
  },
  {
    id: 4,
    name: "Sony ZV-1F Specifications",
    price: 499,
    image:
      "https://1.img-dpreview.com/files/p/TS1200x900~sample_galleries/3632109265/2384427651.jpg",
    description:
      "This is a camera clearly aimed at vloggers, and features a three-capsule mic and fully articulating screen for facing-the-camera video creation.",
  },
  {
    id: 5,
    name: "JBL Go 3 Speaker",
    price: 39.95,
    image:
      "https://tse1.mm.bing.net/th/id/OIP.lIesgJ5knGZF0PCMi0rQxwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    description:
      "JBL Go 3 features bold styling and rich JBL Pro Sound for anywhere life takes you. It looks as vivid as it sounds.",
  },
  {
    id: 6,
    name: "Casio Vintage A700WMG-9AVT",
    price: 94.95,
    image:
      "https://down-my.img.susercontent.com/file/sg-11134201-23030-0rev3yu03wov3a",
    description:
      "The Casio Vintage A700WMG-9AVT is a full gold metal watch featuring a stainless steel band that evokes a classic casual look.",
  },
  {
    id: 7,
    name: "AirPods 3rd Gen",
    price: 149,
    image:
      "https://b2c-contenthub.com/wp-content/uploads/2024/09/airpods-4.jpg?resize=768%2C512&quality=50&strip=all",
    description:
      "The AirPods 3rd generation offers an enhanced audio experience with a refined design, improved sound quality, and features like spatial audio and sweat/water resistance.",
  },
  {
    id: 8,
    name: "GameSir G7 HE Xbox",
    price: 59.39,
    image:
      "https://m.media-amazon.com/images/I/715nYcy2yHL._AC_SL1000_.jpg",
    description:
      "Officially licensed Controller for Xbox Series X|S, Xbox One, Windows 10|11, PC, Video Game Controller with Hall Effect Sticks.",
  },
];

export function getProducts() {
  return products;
}

export function getProductById(id) {
  return products.find((p) => p.id === Number(id));
}