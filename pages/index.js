import Image from "next/image";
import { HomePage } from "../components/homepage.js/homepage";

 const HomeMainPage = (props) => {
  console.log("props", props);
  let propsData = props.propsData || {};
  return(
    <HomePage propsData={propsData}/>
  )
};
export default HomeMainPage;

export const getServerSideProps = async () => {
  const headerData = [
    {
      title: "About",
      url:"/about",
      subcategories: null,
    },
    {
      title: "Shop",
      url:"/shop",
      x: [
        {    
             title: "curtains",
             url:"/curtain",
        },
           {
         
             title: "home Decore",
             url:"/home-decore",
        },
           { 
             title: "lighting",
             url:"/lighting",
        }
      ],
    },
    {
      title: "Contact",
      subcategories: null,
    },
  ];
   const banner=[
          {
              tagline:"Where Comfort Meets Style",
             title: "Summer Collection",
        },
              {
                 tagline:"Dress Your Home, Impress Your Soul",
             title: "Winter Collection",
        },      {
          tagline:"Illuminate Your Space with Elegance",
             title: "curtains",
        },      {
          tagline:"Transform Your Home with Our Best Sellers",
             title: "curtains",
        },
              {
                tagline:"Discover the Best in Home Decor",
             title: "best sellers",
        },
  ]
const offergrid=[
  {
    title:"pots and planters",
  },
  {
    title:"wall art",
  },
  {
    title:"wall clocks",
  },
  {
    title:"wall mirrors",
  },
  {
    title:"wall shelves",
  },
  {
    title:"wall hangings",
  }
]
  return {
    props: {
      propsData: {
        headerData,
        banner,
        offergrid
      },
    },
  };
};