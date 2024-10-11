# GrasaPunch - Natural Energy Drinks 🍹

Welcome to the **GrasaPunch** project! This is a student project aiming to create a modern, SEO-optimized website for a fictional brand of natural energy drinks made with **Arasgrasa**. Our objective is to build a visually appealing and functional front-end using Next.js and Tailwind CSS, while ensuring SEO optimization to rank for the keyword **Arasgrasa**.

## 🚀 Project Overview

GrasaPunch is a mock brand offering a variety of energy drinks based on natural ingredients. The website showcases different product collections, provides detailed product pages, and includes customer reviews. The website is optimized for both desktop and mobile views and includes features like carousels and interactive grids for a rich user experience.

### 🛠️ Technologies Used

- **Next.js**: For building the web application and handling routing.
- **Tailwind CSS**: To style the application with a modern and responsive design.
- **Docker**: To containerize the application and make it easier to deploy and run.
- **Swiper.js**: For implementing interactive and responsive carousels.
- **SEO**: Extensive use of meta tags, sitemap.xml, and robots.txt to ensure that the website is optimized for search engines, specifically targeting the keyword **Arasgrasa**.

## 🎓 Purpose of the Project

This is a **student project** designed to showcase skills in modern web development, SEO optimization, and UX/UI design. The ultimate goal is to rank for the keyword **Arasgrasa** on Google by applying various SEO techniques, including optimizing meta descriptions, using appropriate heading tags, and creating engaging content.

**Disclaimer**: The products displayed on this site are fictional and not for sale. This project is purely educational and for a ranking challenge.

## 📋 Prerequisites

Before you begin, make sure you have Docker and Docker Compose installed on your machine. You will also need Node.js and npm/yarn if you want to run the project locally outside of Docker.

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/ErwanBAILLON/GragasPunch.git GrasaPunch
cd GrasaPunch
```

install the dependencies:

```bash
npm install
```

## 🐳 Running the Project with Docker

If you want to run the project with Docker, follow these steps:

- Ensure Docker is installed and running on your system.
- Use the Docker Compose command to start the application:
```bash
docker-compose up --build
```

The project will be available at `http://localhost:3000`.

## 🚦 Running the Project Locally

If you prefer to run the project locally without Docker, follow these steps:

- Start the development server:
```bash
npm run dev
```

The project will be available at `http://localhost:3000`.

## 🌐 Live Demo

You can view a live demo of the project at [https://grasapunch.live/](https://grasapunch.live/).

## 📂 Project Structure

```bash
GrasaPunch
├── components
│   ├── Layout
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   └── ...
│   └── ...
├── pages
│   ├── _app.tsx
│   ├── index.tsx
│   ├── news.tsx
│   ├── news
│   │   └── [uri].tsx
│   └── ...
├── public
└── ...
```

## 🤝 Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue if you find any bugs or want to suggest improvements.

## 🧑‍💻 Development Commands

- `npm run dev`: Start the development server.
- `npm run build`: Build the production application.
- `npm run start`: Start the production server.
- `npm run lint`: Run ESLint to check for linting errors.
- `docker-compose up --build`: Build and run the application with Docker.

## 🔍 SEO Strategy

Our SEO strategy focuses on optimizing the website for the keyword **Arasgrasa**. We have implemented the following SEO techniques:
1. **Meta Tags**: Including meta titles, descriptions, and keywords on each page.
2. **Heading Tags**: Using appropriate heading tags (h1, h2, h3) to structure the content.
3. **Sitemap.xml**: Generating a sitemap to help search engines crawl the site.
4. **Robots.txt**: Specifying which pages should be indexed by search engines.
5. **Engaging Content**: Creating high-quality content that is relevant to the target keyword.
6. **Backlinks**: Building backlinks from reputable sources to improve domain authority.

## 🚀 Deployment

You can deploy this application on any cloud service that supports Docker, such as AWS, Azure, or Vercel. For Vercel, simply connect your repository, and it will automatically handle the deployment based on your Docker setup.

## 🙏 Credits

This project was created by a group of students as part of a Google Ranking Challenge. The images and product descriptions are entirely fictional and used for educational purposes.

If you have any questions or suggestions, feel free to reach out. We'd love to hear from you!
