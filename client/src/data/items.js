import item1 from "../assets/slideritem1.png"
import item2 from "../assets/slideritem2.png"
const categories = [
    {
      id: 1,
      img:"https://images.pexels.com/photos/9154696/pexels-photo-9154696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "SHIRT STYLE!",
      cat:"men"
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "LOUNGEWEAR LOVE",
      cat:"women"
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      title: "LIGHT JACKETS",
      cat:"latest"
    },
  ];
    const popularProducts = [
    {
      id:1,
      img:"https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png",
    },
    {
      id:2,
      img:"https://cdn.shopify.com/s/files/1/0522/0987/7173/products/unisex-heavy-blend-hoodie-navy-front-6171e410ad611_900x.jpg?v=1634853914",
    },
    {
      id:3,
      img:"https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png",
    },
    {
      id:4,
      img:"https://devopus.com/wp-content/uploads/2023/05/ecommerce-photography-for-cotton-socks-02.jpg",
    },
    {
      id:5,
      img:"https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png",
    },
    {
      id:6,
      img:"https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png",
    },
    {
      id:7,
      img:"https://m.media-amazon.com/images/I/61jSHS3A2ZL.jpg",
    },
    {
      id:8,
      img:"https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png",
    },
  ];
 const sliderItems = [
    {
      id: 1,
      img:item1.toString(),
      title: "SUMMER SALE",
      desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
      bg: "f5fafd",
      cat:'men'
    },
    {
      id: 2,
      img:item2.toString(),
      title: "AUTUMN COLLECTION",
      desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
      bg: "fcf1ed",
      cat:'women'
    },
    {
      id: 3,
      img: "https://i.ibb.co/cXFnLLV/3.png",
      title: "LOUNGEWEAR LOVE",
      desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
      bg: "fbf0f4",
      cat:'latest'
    },
  ];
  export {categories,popularProducts,sliderItems};