type Blog = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
};

const blogs: Blog[] = [
  {
    title: "Diet Coke is Awesome",
    date: "2025-10-16",
    description: "This is the Diet Coke Blog!",
    image: "./images/dietcoke.jpg",
    imageAlt: "A picture of a can of diet coke",
    slug: "diet-coke-blog",
  },
  {
    title: "Shayne Hopkins' Personal Website",
    date: "2025-10-16",
    description: "This is my website :D",
    image: "./images/galaxy.jpg",
    imageAlt: "Galaxy",
    slug: "personal-website-blog",
  },
];

const blogContainer = document.getElementById("blog-container");
if (blogContainer) {
  blogs.forEach((blog) => {
    const card = document.createElement("div");
    card.className = "card";

    const h1 = document.createElement("h1");
    const link = document.createElement("a");
    link.href = `blogs/${blog.slug}.html`;
    link.textContent = blog.title;
    h1.appendChild(link);

    const date = document.createElement("small");
    date.textContent = blog.date;

    const img = document.createElement("img");
    img.src = blog.image;
    img.alt = blog.imageAlt;

    const p = document.createElement("p");
    p.textContent = blog.description;

    card.appendChild(h1);
    card.appendChild(date);
    card.appendChild(img);
    card.appendChild(p);
    blogContainer.appendChild(card);
  });
}
