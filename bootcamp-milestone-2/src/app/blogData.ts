export interface Blog {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
}

const blogs: Blog[] = [
  {
    title: "Diet Coke is Awesome",
    date: "2025-10-16",
    description: "This is the Diet Coke Blog!",
    image: "/dietcoke.jpg", 
    imageAlt: "A picture of a can of Diet Coke",
    slug: "diet-coke-blog",
  },
  {
    title: "Shayne Hopkins' Personal Website",
    date: "2025-10-16",
    description: "This is my website :D",
    image: "/galaxy.jpg", 
    imageAlt: "Galaxy",
    slug: "personal-website",
  },
];

export default blogs;
