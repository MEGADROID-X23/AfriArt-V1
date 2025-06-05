//Men Artwork Gallery
import Product_1 from "../Assets/Products/P1.jpg";
import Product_1_1 from "../Assets/Products/P1.jpg";
import Product_2 from "../Assets/Products/P2.avif";
import Product_2_1 from "../Assets/Products/P2.avif";
import Product_3 from "../Assets/Products/P3.jpg";
import Product_3_1 from "../Assets/Products/P3.jpg";
import Product_4 from "../Assets/Products/P4.avif";
import Product_4_1 from "../Assets/Products/P4.avif";
import Product_9 from "../Assets/Products/menArtworkGallery4.jpg";
import Product_9_1 from "../Assets/Products/menArtworkGallery4.jpg";
import Product_10 from "../Assets/Products/P10.avif";
import Product_10_1 from "../Assets/Products/P10.avif";
import Product_11 from "../Assets/Products/P11.avif";
import Product_11_1 from "../Assets/Products/P11.avif";
import Product_12 from "../Assets/Products/P11.jpg";
import Product_12_1 from "../Assets/Products/P11.jpg";


//Women Artwork Gallery
import Product_5 from "../Assets/Products/P5.avif";
import Product_5_1 from "../Assets/Products/P5.avif";
import Product_6 from "../Assets/Products/P6.avif";
import Product_6_1 from "../Assets/Products/P6.avif";

import Product_7 from "../Assets/Products/P7.jpg";
import Product_7_1 from "../Assets/Products/P7.jpg";
import Product_72 from "../Assets/Products/P72.jpg";
import Product_72_1 from "../Assets/Products/P72.jpg";
import Product_73 from "../Assets/Products/P73.avif";
import Product_73_1 from "../Assets/Products/P73.avif";
import Product_74 from "../Assets/Products/P74.avif";
import Product_74_1 from "../Assets/Products/P74.avif";
import Product_75 from "../Assets/Products/P75.avif";
import Product_75_1 from "../Assets/Products/P75.avif";

import Product_8 from "../Assets/Products/P8.jpg";
import Product_8_1 from "../Assets/Products/P8.jpg";



import limited1 from "../Assets/LimitedEdition/L1.jpg";
import limited2 from "../Assets/LimitedEdition/L2.jpg";
import limited3 from "../Assets/LimitedEdition/L3.avif";
import limited4 from "../Assets/LimitedEdition/L4.avif";
import limited5 from "../Assets/LimitedEdition/L5.avif";
import limited6 from "../Assets/LimitedEdition/L6.jpg";
import limited7 from "../Assets/LimitedEdition/L7.avif";
import limited8 from "../Assets/LimitedEdition/L8.avif";
import limited9 from "../Assets/LimitedEdition/L9.jpg";
import limited10 from "../Assets/LimitedEdition/L10.jpg";

let StoreData = [
  {
    productID: 1,
    frontImg: Product_1,
    backImg: Product_1_1,
    productName: "Radius by Microstocks",
    productPrice: 29,
    productReviews: "8k+ reviews",
  },
  {
    productID: 2,
    frontImg: Product_9,
    backImg: Product_9_1,
    productName: "Hall of Fame by Freepik",
    productPrice: 29,
    productReviews: "8k+ reviews",
  },
  {
    productID: 3,
    frontImg: Product_11,
    backImg: Product_11_1,
    productName: "Psychedelic by Freepik",
    productPrice: 29,
    productReviews: "8k+ reviews",
  },
  {
    productID: 4,
    frontImg: Product_10,
    backImg: Product_10_1,
    productName: "Time Travelers by Asmrajib",
    productPrice: 29,
    productReviews: "8k+ reviews",
  },
  {
    productID: 5,
    frontImg: Product_12,
    backImg: Product_12_1,
    productName: "Self Portrait by Godofvektor",
    productPrice: 29,
    productReviews: "8k+ reviews",
  },
  {
    productID: 6,
    frontImg: Product_2,
    backImg: Product_2_1,
    productName: "Nightlife by Freepik",
    productPrice: 62,
    productReviews: "2k+ reviews",
  },
  {
    productID: 7,
    frontImg: Product_3,
    backImg: Product_3_1,
    productName: "Afro Gold by Yganko",
    productPrice: 60,
    productReviews: "7k+ reviews",
  },
  {
    productID: 8,
    frontImg: Product_4,
    backImg: Product_4_1,
    productName: "The Medium by Freepik",
    productPrice: 17,
    productReviews: "5k+ reviews",
  },
  {
    productID: 9,
    frontImg: Product_5,
    backImg: Product_5_1,
    productName: "Amber Sanction by MikeOrlov",
    productPrice: 100,
    productReviews: "9k+ reviews",
  },
  
  {
    productID: 10,
    frontImg: Product_6,
    backImg: Product_6_1,
    productName: "Lady of Afropolis by Incroforman",
    productPrice: 69,
    productReviews: "1k+ reviews",
  },
  {
    productID: 11,
    frontImg: Product_7,
    backImg: Product_7_1,
    productName: "Vibrant by Nomannoor943",
    productPrice: 99,
    productReviews: "3k+ reviews",
  },
  {
    productID: 12,
    frontImg: Product_72,
    backImg: Product_72_1,
    productName: "Glamour Galore by Fijulanam468",
    productPrice: 99,
    productReviews: "3k+ reviews",
  },
  {
    productID: 13,
    frontImg: Product_73,
    backImg: Product_73_1,
    productName: "Ethnical Elegance by EyeEm",
    productPrice: 99,
    productReviews: "3k+ reviews",
  },
  {
    productID: 14,
    frontImg: Product_74,
    backImg: Product_74_1,
    productName: "Drama Queen by Freepik",
    productPrice: 99,
    productReviews: "3k+ reviews",
  },
  {
    productID: 15,
    frontImg: Product_75,
    backImg: Product_75_1,
    productName: "Nubian Queen by Landscape Al",
    productPrice: 99,
    productReviews: "3k+ reviews",
  },
  {
    productID: 16,
    frontImg: Product_8,
    backImg: Product_8_1,
    productName: "Alternate by Smartmalik6384",
    productPrice: 37,
    productReviews: "4k+ reviews",
  },



  // Limited Edition Products
  {
    productID: 17,
    frontImg: limited1,
    productName: "Painting of a woman with a black hair and earrings by Blubber",
    productPrice: 29,
    productReviews: "8k+ reviews",
  },
  {
    productID: 18,
    frontImg: limited2,
    productName: "Ethnic wood illustration beautiful black woman in a field by Elshamilini",
    productPrice: 92,
    productReviews: "5k+ reviews",
  },
  {
    productID: 19,
    frontImg: limited3,
    productName: "Watercolor eyes illustration by Freepik",
    productPrice: 25,
    productReviews: "1k+ reviews",
  },
  {
    productID: 20,
    frontImg: limited4,
    productName: "Gentle Giant by Freepik",
    productPrice: 27,
    productReviews: "7k+ reviews",
  },
  {
    productID: 21,
    frontImg: limited5,
    productName: "Loving Connection by Freepik",
    productPrice: 39,
    productReviews: "71+ reviews",
  },
  {
    productID: 22,
    frontImg: limited6,
    productName: "Warrior by Chatchanan366",
    productPrice: 39,
    productReviews: "71+ reviews",
  },
  {
    productID: 23,
    frontImg: limited7,
    productName: "Sphere by Milankov",
    productPrice: 39,
    productReviews: "71+ reviews",
  },
  {
    productID: 24,
    frontImg: limited8,
    productName: "Origin by Tereza",
    productPrice: 39,
    productReviews: "71+ reviews",
  },
  {
    productID: 25,
    frontImg: limited9,
    productName: "Ethnika by Kotlyarn",
    productPrice: 39,
    productReviews: "71+ reviews",
  },
  {
    productID: 26,
    frontImg: limited10,
    productName: "Among Us by Bold Artist",
    productPrice: 39,
    productReviews: "71+ reviews",
  },
];

export default StoreData;
