import {
  faThumbsUp,
  faObjectUngroup,
  faDesktop,
  faFileAlt,
  faEnvelope,
  faPhone,
  faFile,
  faAddressCard,
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
      "A roadmap that will guide teams from creating a project plan throughout the project’s execution and closure phases is developed comprehensively during the planning stage.resources must be allotted.",
  },
  {
    id: "2",
    icon: faDesktop,
    badge: "6",
    heading: "Brainstorming ^ Concept",
    description:
      "Brainstorming ^ Concept','Brainstorming is a method of generating ideas and sharing knowledge to solve a particular commercial or technical problem, in which participants are encouraged to think without interruption in tasks.",
  },
  {
    id: "3",
    icon: faObjectUngroup,
    badge: "3",
    heading: "Interactions",
    description:
      "From the old way of contain and deflect to a new way of engage and delight. it enhances the communication between the team member. the quality of the project development increases effectively.",
  },
  {
    id: "4",
    icon: faThumbsUp,
    badge: "5",
    heading: "UI/UX Planning",
    description:
      "A UX/UI roadmap is a high-level overview of the plans and goals relating to a product’s user experience, user interface, and user research. Product teams use these roadmaps to success in project.",
  },
];


 export const specialize = [
   {
     id: "1",
     icon: faFile,
     heading: "Concepting",
     description:
       "Concepting is the process of taking any idea, expanding on it and creating new and different versions and variations of it. This comes with the mind.",
   },
   {
     id: "2",
     icon: faDesktop,
     heading: "Visual Design",
     description:
       "Visual design aims to improve a design’s product’s aesthetic appeal and usability with suitable images, typography, space, layout and color.",
   },
   {
     id: "3",
     icon: faObjectUngroup,
     heading: "UI/UX",
     description:
       "User interface (UI) design is the process designers use to build interfaces in software & computerized devices,  focusing on looks or style of object.",
   },
   {
     id: "4",
     icon: faThumbsUp,
     heading: "Interactions",
     description:
       "the direct effect that one kind of particle has on another, in particular, in inducing the emission or absorption of one particle by another.",
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
        data: [31, 40, 28, 51, 42, 109, 150],
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

