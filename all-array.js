import {
  faThumbsUp,
  faObjectUngroup,
  faDesktop,
  faFileAlt,
  faEnvelope,
  faPhone,
  faFile,
  faUsers,
  faAward,
  faAddressCard,
  faHourglassStart,
  faCodeBranch,
  faCircleChevronRight
} from "@fortawesome/free-solid-svg-icons";

import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilUsdSquare,
  UilMoneyWithdrawal
} from "@iconscout/react-unicons";

 export const navItem = [
   { id: "Home", url: "/" },
   { id: "BioData", url: "/biodata" },
   { id: "Work", url: "/work" },
   { id: "Contact", url: "/contact" },
   { id: "About", url: "/about" },
 ];




export const awardBoxContent = [
  {
    id: 1,
    heading: "Award One",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, libero.",
  },
  {
    id: 2,
    heading: "Award Two",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, libero.",
  },
  {
    id: 3,
    heading: "Award Three",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, libero.",
  },
];

export const logos = [
  { id: "1", url: "img/about-logos/logo-envato.png" },
  { id: "2", url: "img/about-logos/logo-wordpress.png" },
  { id: "3", url: "img/about-logos/logo-woocommerce.png" },
  { id: "4", url: "img/about-logos/logo-magento.png" },
];

export const skill_progressbar = [
  { id: "1", title: "Html & Css", percent: "100%" },
  { id: "2", title: "Javascript", percent: "60%" },
  { id: "3", title: "Java", percent: "100%" },
  { id: "4", title: "Flutter", percent: "60%" },
  { id: "5", title: "Dart", percent: "30%" },
  { id: "6", title: "Oracle", percent: "80%" },
  { id: "7", title: "Spring framework", percent: "90%" },
];

export const testimonials = [
  {
    id: "1",
    message:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore eos vitae at exercitationem fugit voluptatibus dolorum quisquam ex aliquam aut neque harum corrupti, impedit repudiandae iure. Modi ratione sapiente vero!",
    image: "img/testimonials/person1.jpg",
    address: "Sam Smith,New York",
  },
  {
    id: "2",
    message:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore eos vitae at exercitationem fugit voluptatibus dolorum quisquam ex aliquam aut neque harum corrupti, impedit repudiandae iure. Modi ratione sapiente vero!",
    image: "img/testimonials/person2.jpg",
    address: "Sara Williams, Michigan",
  },
  {
    id: "3",
    message:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore eos vitae at exercitationem fugit voluptatibus dolorum quisquam ex aliquam aut neque harum corrupti, impedit repudiandae iure. Modi ratione sapiente vero!",
    image: "img/testimonials/person3.jpg",
    address: "Jill Johnson, London",
  },
  {
    id: "4",
    message:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore eos vitae at exercitationem fugit voluptatibus dolorum quisquam ex aliquam aut neque harum corrupti, impedit repudiandae iure. Modi ratione sapiente vero!",
    image: "img/testimonials/person4.jpg",
    address: "Steve Thompson, Boston",
  },
];

export const blogs = [
  {
    id: "1",
    title: "What is Java??",
    url: "img/testimonials/person1.jpg",
    date: "05/04/2022",
    location: "Baglung, Nepal",
    description:
      "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let programmers write once, run anywhere (WORA),[17] meaning that compiled Java code can run on all platforms that support Java without the need to recompile.[18] Java applications are typically compiled to bytecode that can run on any Java virtual machine (JVM) regardless of the underlying computer architecture. The syntax of Java is similar to C and C++, but has fewer low-level facilities than either of them. The Java runtime provides dynamic capabilities (such as reflection and runtime code modification) that are typically not available in traditional compiled languages. As of 2019, Java was one of the most popular programming languages in use according to GitHub,[19][20] particularly for client–server web applications, with a reported 9 million developers.",
  },
  {
    id: "2",
    title: "Title Two",
    url: "img/testimonials/person2.jpg",
    date: "03/04/2022",
    location: "Kathmandu, Nepal",
    description: "Very good city"
  },
  {
    id: "3",
    title: "Communication is art",
    url: "img/testimonials/person3.jpg",
    date: "02/04/2022",
    location: "Washinton, USA",
    description:
      "Every communication involves (at least) one sender, a message and a recipient. This may sound simple, but communication is actually a very complex subject.The transmission of the message from sender to recipient can be affected by a huge range of things. These include our emotions, the cultural situation, the medium used to communicate, and even our location. The complexity is why good communication skills are considered so desirable by employers around the world: accurate, effective and unambiguous communication is actually extremely hard.",
  },
  {
    id: "4",
    title: "Flutter Design",
    url: "img/testimonials/person4.jpg",
    date: "01/04/2022",
    location: "Munich, Germany",
    description:
      "Flutter widgets are built using a modern framework that takes inspiration from React. The central idea is that you build your UI out of widgets. Widgets describe what their view should look like given their current configuration and state. When a widget’s state changes, the widget rebuilds its description, which the framework diffs against the previous description in order to determine the minimal changes needed in the underlying render tree to transition from one state to the next.The runApp() function takes the given Widget and makes it the root of the widget tree. In this example, the widget tree consists of two widgets, the Center widget and its child, the Text widget. The framework forces the root widget to cover the screen, which means the text “Hello, world” ends up centered on screen. The text direction needs to be specified in this instance; when the MaterialApp widget is used, this is taken care of for you, as demonstrated later.When writing an app, you’ll commonly author new widgets that are subclasses of either StatelessWidget or StatefulWidget, depending on whether your widget manages any state. A widget’s main job is to implement a build() function, which describes the widget in terms of other, lower-level widgets. The framework builds those widgets in turn until the process bottoms out in widgets that represent the underlying RenderObject, which computes and describes the geometry of the widget.",
  },
  {
    id: "5",
    title: "Russia Tour",
    url: "img/items/item4.png",
    date: "22/03/2022",
    location: "Kyiv, Russia",
    description:"Q. Which airports has a flight to Russia from India?"
    +"A. All flights to Russia are operated from Delhi’s Indira Gandhi International Airport. Delhi serves direct flight connectivity to Russia’s capital city Moscow via Russian carrier Aeroflot. There are no flights to Russia from other airports in India."
    +"Q. How long should my Russian vacation be?"
    +"A. Russia is a tremendously vast nation with massive geographical extension that spans from Europe in the west to the far reaches of the east till Asia, and Arctic poles on the north. Firstly, you need to decide what places you want to cover, which any reputable travel agent like Yatra can guide you on that. That said, for most tourists, Moscow and St. Petersburg are the main attractions, and you need a week or so to see both cities."
  },
  {
    id: "6",
    title: "Paris Tower Travel",
    url: "img/items/item2.png",
    date: "18/03/2022",
    location: "Paris,France",
    description: "The Eiffel Tower was built from 1887 to 1889 by French engineer Gustave Eiffel, whose company specialized in building metal frameworks and structures. Gustave Eiffel is at the origin of many metallic works in Europe including the Porto Viaduct (Portugal), the Viaduct du Garabit (France) and the Budapest train station (Hungary)."
    +"Gustave Eiffel's company, that was located in Levallois Perret, very near Paris, France, also built the metal framework for another world-famous monument: the Statue of Liberty (New York, United States), designed by Auguste Bartholdi and offered to the United States as a gift from France to celebrate the 100th anniversary of the American Declaration of Independence in 1886"
  },
  {
    id: "7",
    title: "Bayern Vs Frankfurt",
    url: "img/items/item3.png",
    date: "12/03/2022",
    location: "Frankfurt, Germany",
    description: "Maxi Rall opened the scoring for Bayern after 5 minutes when Klara Bühl played her into space. However, Frankfurt would end the half on top after goals from Laura Freigang and Nicole Anyomi."

   +"In great news for Bayern, Sydney Lohmann made her return after a long injury layoff, coming in as a halftime substitute. Her presence immediately turned the game. Lohmann headed a ball over the backline into the path of Lea Schüller who lifted a shot over the goalkeeper’s head and into the back of the net."

  +"The Bavarians kept pushing for the winner, and they finally got it in the 79th minute. Viviane Asseyi scored a long free kick from Lina Magull to put Bayern up 3-1. Then, in the dying moments of the match, Lohmann broke free after some impressive dribbling before playing Jovana Damnjanovic in behind the Frankfurt backline. The Serbian international finished her chance to seal the 4-2 victory for Bayern."
  },
  {
    id: "8",
    title: "Free Marijuana",
    url: "img/items/item1.png",
    date: "09/03/2022",
    location: "Amstardam, Netherland",
    description: "The following pages are for the purpose of education and information only. This should not be considered in any way to condone the use of cannabis or other mind-altering substances."

    +"Amsterdam counts about 160 coffeeshops and most of them are located in the Red Light District. From psychedelic to hipster-ish but also from very local ones to more touristic places, each of Amsterdam coffeeshops has its own atmosphere. You can find some notable examples categorised at the bottom of this page."

    +"Amsterdam coffeeshops are not only to smoke weed. They are real social places where you can easily meet people and spend some good times with friends. Watching TV, playing chess or card games and much more can be done here. And always in a very relaxing way."

    +"Due to the allowance of cannabis consumption and sex work, the Netherlands are reputed to be a very liberal country. This is true but you should be aware of the Dutch laws and the rules inside a coffee shop."
  },
];

export const contact_medium = [
  {
    id: "1",
    icon: faEnvelope,
    heading: "Email",
    description: "maheshlamichhane048@gmail.com",
  },
  {
    id: "2",
    icon: faPhone,
    heading: "Phone",
    description: "(+977) 9818567284",
  },
  {
    id: "3",
    icon: faAddressCard,
    heading: "Address",
    description: "Narayansthan-8, Baglung, Nepal",
  },
];

export const creative_process = [
  {
    id: "1",
    icon: faFileAlt,
    badge: "1",
    heading: "Discuss The Project",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum assumenda quae laudantium sequi consequatur aut a saepe ab odit." +
      "Laborum",
  },
  {
    id: "2",
    icon: faDesktop,
    badge: "6",
    heading: "Brainstorming ^ Concept",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum," +
      "assumenda quae laudantium sequi consequatur aut a saepe ab odit" +
      "Laborum!",
  },
  {
    id: "3",
    icon: faObjectUngroup,
    badge: "3",
    heading: "Interactions",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum," +
      "assumenda quae laudantium sequi consequatur aut a saepe ab odit." +
      "Laborum!",
  },
  {
    id: "4",
    icon: faThumbsUp,
    badge: "5",
    heading: "UI/UX Planning",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum," +
      "assumenda quae laudantium sequi consequatur aut a saepe ab odit." +
      "Laborum!",
  },
];


 export const specialize = [
   {
     id: "1",
     icon: faFile,
     heading: "Concepting",
     description:
       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut autem quae ea ut eos beatae debitis quis facilis laboriosam voluptatum.",
   },
   {
     id: "2",
     icon: faDesktop,
     heading: "Visual Design",
     description:
       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut autem quae ea ut eos beatae debitis quis facilis laboriosam voluptatum.",
   },
   {
     id: "3",
     icon: faObjectUngroup,
     heading: "UI/UX",
     description:
       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut autem quae ea ut eos beatae debitis quis facilis laboriosam voluptatum.",
   },
   {
     id: "4",
     icon: faThumbsUp,
     heading: "Interactions",
     description:
       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut autem quae ea ut eos beatae debitis quis facilis laboriosam voluptatum.",
   },
 ];


  export const stats = [
    { id: "1", icon: faUsers, heading: "Clients", description: "100" },
    { id: "2", icon: faAward, heading: "Award", description: "3" },
    {
      id: "3",
      icon: faHourglassStart,
      heading: "Hours Worked",
      description: "3500",
    },
    {
      id: "4",
      icon: faCodeBranch,
      heading: "Projects Completed",
      description: 135,
    },
  ];

 export const projects = [
     {
       id: "1",
       image_address: "img/items/item1.png",
       description: "Design",
       title: "Great Gradients",
     },
     {
       id: "2",
       image_address: "img/items/item2.png",
       description: "UI/UX",
       title: "World Experience",
     },
     {
       id: "3",
       image_address: "img/items/item3.png",
       description: "Photogrphy & Design",
       title: "Vanishing",
     },
     {
       id: "4",
       image_address: "img/items/item4.png",
       description: "Design",
       title: "Gap INC",
     },
     {
       id: "5",
       image_address: "img/items/item5.png",
       description: "Mobile UI Design",
       title: "Face The Experience",
     },
     {
       id: "6",
       image_address: "img/items/item6.png",
       description: "Design Concept",
       title: "Bezier Curves",
     },
     {
       id: "7",
       image_address: "img/items/item7.png",
       description: "Photogrphy",
       title: "Dock Ponder",
     },
     {
       id: "8",
       image_address: "img/items/item8.png",
       description: "Web Applications",
       title: "Restaurant App",
     },
     {
       id: "9",
       image_address: "img/items/item9.png",
       description: "Social Network Concept",
       title: "FriendFeed",
     },
   ];

export const knowldgeresume = [
  {
    id: "1",
    icon: faCircleChevronRight,
    header: "2012: Programming in C",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi non error excepturi sapiente quam, vitae, atque, placeat autem nihil eos doloribus illo. Blanditiis, sunt, vitae dolorem asperiores aspernatur quos similique eius modi corrupti officiis fuga pariatur, iusto quis voluptatum architecto!",
  },
  {
    id: "2",
    icon: faCircleChevronRight,
    header: "2013: Programming in C++",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi non error excepturi sapiente quam, vitae, atque, placeat autem nihil eos doloribus illo. Blanditiis, sunt, vitae dolorem asperiores aspernatur quos similique eius modi corrupti officiis fuga pariatur, iusto quis voluptatum architecto!",
  },
  {
    id: "3",
    icon: faCircleChevronRight,
    header: "2014: HTML and CSS",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi non error excepturi sapiente quam, vitae, atque, placeat autem nihil eos doloribus illo. Blanditiis, sunt, vitae dolorem asperiores aspernatur quos similique eius modi corrupti officiis fuga pariatur, iusto quis voluptatum architecto!",
  },
  {
    id: "4",
    icon: faCircleChevronRight,
    header: "2015: Programming in Java",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi non error excepturi sapiente quam, vitae, atque, placeat autem nihil eos doloribus illo. Blanditiis, sunt, vitae dolorem asperiores aspernatur quos similique eius modi corrupti officiis fuga pariatur, iusto quis voluptatum architecto!<",
  },
  {
    id: "5",
    icon: faCircleChevronRight,
    header: "2016: Servlet and Jsp & JSTL",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi non error excepturi sapiente quam, vitae, atque, placeat autem nihil eos doloribus illo. Blanditiis, sunt, vitae dolorem asperiores aspernatur quos similique eius modi corrupti officiis fuga pariatur, iusto quis voluptatum architecto!",
  },
  {
    id: "6",
    icon: faCircleChevronRight,
    header: "2017: Spring Framework",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi non error excepturi sapiente quam, vitae, atque, placeat autem nihil eos doloribus illo. Blanditiis, sunt, vitae dolorem asperiores aspernatur quos similique eius modi corrupti officiis fuga pariatur, iusto quis voluptatum architecto!",
  },
  {
    id: "7",
    icon: faCircleChevronRight,
    header: "2018: Database Management System With Oracle",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi non error excepturi sapiente quam, vitae, atque, placeat autem nihil eos doloribus illo. Blanditiis, sunt, vitae dolorem asperiores aspernatur quos similique eius modi corrupti officiis fuga pariatur, iusto quis voluptatum architecto!",
  },
  {
    id: "8",
    icon: faCircleChevronRight,
    header: "2019: Hibernate",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi non error excepturi sapiente quam, vitae, atque, placeat autem nihil eos doloribus illo. Blanditiis, sunt, vitae dolorem asperiores aspernatur quos similique eius modi corrupti officiis fuga pariatur, iusto quis voluptatum architecto!",
  },
  {
    id: "9",
    icon: faCircleChevronRight,
    header: "2020: React Js",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi non error excepturi sapiente quam, vitae, atque, placeat autem nihil eos doloribus illo. Blanditiis, sunt, vitae dolorem asperiores aspernatur quos similique eius modi corrupti officiis fuga pariatur, iusto quis voluptatum architecto!",
  },
  {
    id: "10",
    icon: faCircleChevronRight,
    header: "2021: Microservices & Next Js",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi non error excepturi sapiente quam, vitae, atque, placeat autem nihil eos doloribus illo. Blanditiis, sunt, vitae dolorem asperiores aspernatur quos similique eius modi corrupti officiis fuga pariatur, iusto quis voluptatum architecto!",
  },
  {
    id: "11",
    icon: faCircleChevronRight,
    header: "2018: Docker and Kubernates",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi non error excepturi sapiente quam, vitae, atque, placeat autem nihil eos doloribus illo. Blanditiis, sunt, vitae dolorem asperiores aspernatur quos similique eius modi corrupti officiis fuga pariatur, iusto quis voluptatum architecto!",
  },
];

export const cv = [
  {
    id: "1",
    section_id: "page-1",
    section_class: "page",
    header: "Welcome To My Presentation",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae rerum consequuntur ipsam aliquid! Ipsam iste nisi velit corporis cum quod, nemo labore officiis. Atque doloribus id, deserunt provident minus veritatis! Officia laborum nam illo rem. Voluptas, officia beatae esse itaque alias illum eos repellat provident iste, qui architecto dicta distinctio aut natus! Voluptatem eligendi atque aperiam distinctio earum itaque incidunt?",
    btn_prev: null,
    btn_next: "#page-2",
  },
  {
    id: "2",
    section_id: "page-2",
    section_class: "page",
    header: "Page-2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam saepe necessitatibus commodi labore corporis iusto exercitationem pariatur sit nulla iste minima, dicta sunt repudiandae, voluptates quod molestiae id iure fuga.",
    btn_prev: "#page-1",
    btn_next: "#page-3",
  },
  {
    id: "3",
    section_id: "page-3",
    section_class: "page",
    header: "Page-3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam saepe necessitatibus commodi labore corporis iusto exercitationem pariatur sit nulla iste minima, dicta sunt repudiandae, voluptates quod molestiae id iure fuga.",
    btn_prev: "#page-2",
    btn_next: "#page-4",
  },
  {
    id: "4",
    section_id: "page-4",
    section_class:"page",
    header: "Presentation 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam saepe necessitatibus commodi labore corporis iusto exercitationem pariatur sit nulla iste minima, dicta sunt repudiandae, voluptates quod molestiae id iure fuga.",
    btn_prev: "#page-3",
    btn_next: null,
  },
];



/*   admin panel data */

export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilClipboardAlt,
    heading: "Orders",
  },
  {
    icon: UilUsersAlt,
    heading: "Customers",
  },
  {
    icon: UilPackage,
    heading: "Products",
  },
  {
    icon: UilChart,
    heading: "Analytics",
  },
];

export const cardsData = [
  {
    title: "Sales",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "25,970",
    png: UilUsdSquare,
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Revenue",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "14,270",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Expenses",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "4,270",
    png: UilClipboardAlt,
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

