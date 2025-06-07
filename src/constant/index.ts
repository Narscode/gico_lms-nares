export type SideBar = {
  icon: string;
  label: string;
  href: string[];
};

export const sideBarMenu: SideBar[] = [
  {
    icon: "ri-stack-line",
    label: "Dashboard",
    href: ["/dashboard"],
  },
  {
    icon: "ri-file-text-line",
    label: "Mocktest Results",
    href: ["/mocktest_results"],
  },
];

export const sideBarGeneral: SideBar[] = [
  {
    icon: "ri-shopping-bag-2-line",
    label: "Package",
    href: ["/dashboard"],
  },
  {
    icon: "ri-question-line",
    label: "Help and Support",
    href: ["/dashboard"],
  },
  {
    icon: "ri-settings-3-line",
    label: "Setting",
    href: ["/dashboard"],
  },
];

export type PricingCard = {
  name: string;
  durationTime: string;
  isBestDeal: boolean;
  price: string;
  features: string[];
  href: string;
};

export const pricingCard: PricingCard[] = [
  {
    name: "Free",
    durationTime: "Lifetime",
    isBestDeal: false,
    price: "200000",
    features: [
      "10 users included",
      "2 GB of storage",
      "Help center access",
      "Email support",
    ],
    href: "#",
  },
  {
    name: "IELTS Mastery Program",
    durationTime: "Lifetime",
    isBestDeal: true,
    price: "7500000",
    features: [
      "50 users included",
      "4 GB of storage",
      "Help center access",
      "Email support",
      "Priority email support",
      "Help center access",
    ],
    href: "#",
  },
  {
    name: "Expert",
    durationTime: "Lifetime",
    isBestDeal: false,
    price: "15000000",
    features: [
      "100 users included",
      "6 GB of storage",
      "Help center access",
      "Email support",
      "Help center access",
      "Priority email support",
    ],
    href: "#",
  },
];

export type Testimonial = {
  img: string;
  name: string;
  review: string;
  instance: string;
};

export const testimonials: Testimonial[] = [
  {
    img: "https://unsplash.com/photos/orange-tabby-cat-on-yellow-surface-p6yH8VmGqxo",
    name: "John Doe",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    instance: "Lorem ipsum dolor.",
  },
  {
    img: "https://unsplash.com/photos/orange-tabby-cat-on-yellow-surface-p6yH8VmGqxo",
    name: "John Doe",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    instance: "Lorem ipsum dolor.",
  },
  {
    img: "https://unsplash.com/photos/orange-tabby-cat-on-yellow-surface-p6yH8VmGqxo",
    name: "John Doe",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    instance: "Lorem ipsum dolor.",
  },
  {
    img: "https://unsplash.com/photos/orange-tabby-cat-on-yellow-surface-p6yH8VmGqxo",
    name: "John Doe",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    instance: "Lorem ipsum dolor.",
  },
  {
    img: "https://unsplash.com/photos/orange-tabby-cat-on-yellow-surface-p6yH8VmGqxo",
    name: "John Doe",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    instance: "Lorem ipsum dolor.",
  },
  {
    img: "https://unsplash.com/photos/orange-tabby-cat-on-yellow-surface-p6yH8VmGqxo",
    name: "John Doe",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    instance: "Lorem ipsum dolor.",
  },
];

export type SocialMedia = {
  icon: string;
  href: string;
};

export const socialMedia: SocialMedia[] = [
  {
    href: "",
    icon: "ri-instagram-line",
  },
  {
    href: "",
    icon: "ri-twitter-line",
  },
  {
    href: "",
    icon: "ri-linkedin-fill",
  },
];

export type AdditionalInformation = {
  icon: string;
  label: string;
};

export const additionalInformation: AdditionalInformation[] = [
  {
    icon: "ri-phone-line",
    label: "(+62)877-000-000",
  },
  {
    icon: "ri-mail-line",
    label: "xxxxxxx@gmail.com",
  },
  {
    icon: "ri-map-pin-line",
    label: "xxxxxxx Rd. xxxxxxx, Yogyakarta",
  },
];

export type GICCard = {
  icon: string;
  label: string;
  content: string;
  isAIAssisted: boolean;
};
export const GICCard: GICCard[] = [
  {
    content:
      "Provides instant and accurate evaluations of IELTS writing tasks using AI. Offers feedback on grammar, coherence, vocabulary, and task achievement",
    icon: "ri-pen-nib-line",
    isAIAssisted: true,
    label: "GIC Learn",
  },
  {
    content:
      "Provides instant and accurate evaluations of IELTS writing tasks using AI. Offers feedback on grammar, coherence, vocabulary, and task achievement",
    icon: "ri-pen-nib-line",
    isAIAssisted: true,
    label: "GIC Write",
  },
  {
    content:
      "Provides instant and accurate evaluations of IELTS writing tasks using AI. Offers feedback on grammar, coherence, vocabulary, and task achievement",
    icon: "ri-pen-nib-line",
    isAIAssisted: true,
    label: "GIC Talk",
  },
  {
    content:
      "Provides instant and accurate evaluations of IELTS writing tasks using AI. Offers feedback on grammar, coherence, vocabulary, and task achievement",
    icon: "ri-pen-nib-line",
    isAIAssisted: true,
    label: "Mockup Test",
  },
];
