// Importing order images (JPG)
import order1 from "./assets/order1.jpg";
import order2 from "./assets/order2.jpg";
import order3 from "./assets/order3.jpg";
import order4 from "./assets/order4.jpg";
import order5 from "./assets/order5.jpg";
import order6 from "./assets/order6.jpg";
import order7 from "./assets/order7.jpg";
import order8 from "./assets/order8.jpg";
import order9 from "./assets/order9.jpg";
import order10 from "./assets/order10.jpg";
import order11 from "./assets/order11.jpg";
import order12 from "./assets/order12.jpg";
import order13 from "./assets/order13.jpg";
import order14 from "./assets/order14.jpg";
import order15 from "./assets/order15.jpg";
import order16 from "./assets/order16.jpg";
import order17 from "./assets/order17.jpg";
import order18 from "./assets/order18.jpg";

// Importing hero images (JPEG)
import Hero1 from "./assets/Hero1.jpg";
import Hero2 from "./assets/Hero2.jpeg";
import Hero3 from "./assets/Hero3.jpeg";
import Hero4 from "./assets/Hero4.jpg";

// Importing other assets (PNG)
import min24 from "./assets/24_min.png";
import appStoreIcon from "./assets/App-Store-icon.png";
import blog from "./assets/blog.jpg";
import customers from "./assets/Customers.png";
import facebook from "./assets/facebook.png";
import hotDeal from "./assets/hot-deal.png";
import instagram from "./assets/instagram.png";
import playStoreIcon from "./assets/Play-Store-icon.png";
import rating from "./assets/Rating.png";
import shoppingCart from "./assets/shopping-cart.png";
import stores from "./assets/stores.png";
import twitter from "./assets/twitter.png";
import user from "./assets/user.png";
import zomato from "./assets/Zomato.png";

// Importing mobile images (WEBP)
import mobile from "./assets/mobile.webp";
import mobile2 from "./assets/mobile2.webp";

// Importing user images (PNG)
import Akanksha from "./assets/Akanksha.png";
import RajKumarRao from "./assets/raj_kumar_rao.jpg";
import Sanjay from "./assets/Sanjay.png";
import Sanya from "./assets/Sanya.png";
import Sara from "./assets/Sara.jpg";
import Soha from "./assets/Soha.png";
import Yami from "./assets/Yami.png";
import Milestones from "./components/Milestons";

// Exporting all assets as a single object
const assets = {
  orders: [
    order1,
    order2,
    order3,
    order4,
    order5,
    order6,
    order7,
    order8,
    order9,
    order10,
    order11,
    order12,
    order13,
    order14,
    order15,
    order16,
    order17,
    order18,
  ],

  heroes: [Hero1, Hero2, Hero3, Hero4],

  icons: {
    min24,
    appStoreIcon,
    blog,
    customers,
    facebook,
    hotDeal,
    instagram,
    playStoreIcon,
    rating,
    shoppingCart,
    stores,
    twitter,
    user,
    zomato,
  },
  milestones: [
    {
      icon: stores,
      title: "300+ Stores",
      desc: "In Mumbai, Delhi NCR, Bangalore, Hyderabad, Pune, Chennai & Kolkata",
    },
    { icon: customers, title: "15L+ Customers", desc: "Love MOJO Pizza" },
    {
      icon: min24,
      title: "24 Mins Delivery",
      desc: "Average Super Fast Delivery Time",
    },
    ,
    {
      icon: rating,
      title: "4.7 stars",
      desc: "India's Highest Rated Pizza Delivery Chain",
    },
  ],
  mobiles: {
    mobile,
    mobile2,
  },

  users: [Akanksha, RajKumarRao, Sanjay, Sanya, Sara, Soha, Yami],
};

export default assets;
