import React from "react";
import img5 from "../../assets/img5.jpg";
import img3 from "../../assets/img3.jpg";
import img2 from "../../assets/img2.jpg";
//import post3Image from "../assets/images/post3.jpg";
import styles from "../../style/blog.module.css";
const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Sustainable Fashion",
      date: "May 15, 2023",
      excerpt:
        "Exploring how eco-friendly materials are changing the fashion industry landscape and what it means for consumers.",
      image: img5,
    },
    {
      id: 2,
      title: "Traditional Weaving Techniques",
      date: "April 28, 2023",
      excerpt:
        "Preserving cultural heritage through modern clothing designs using ancient weaving methods.",
      image: img2,
    },
    {
      id: 3,
      title: "Seasonal Color Palettes",
      date: "March 10, 2023",
      excerpt:
        "How to choose the perfect colors for each season to complement your wardrobe and skin tone.",
      image: img3,
    },
  ];

  return (
    <div className={styles.blogContainer}>
      <header className={styles.blogHeader}>
        <h1 className={styles.blogTitle}>वसः Blog</h1>
        <p className={styles.blogSubtitle}>
          Discover the latest trends, behind-the-scenes stories, and fashion
          insights from our team.
        </p>
      </header>

      <div className={styles.postsGrid}>
        {blogPosts.map((post) => (
          <article key={post.id} className={styles.postCard}>
            <img
              src={post.image}
              alt={post.title}
              className={styles.postImage}
            />
            <div className={styles.postContent}>
              <h2 className={styles.postTitle}>{post.title}</h2>
              <p className={styles.postDate}>{post.date}</p>
              <p className={styles.postExcerpt}>{post.excerpt}</p>
              <a href={`/blog/${post.id}`} className={styles.readMore}>
                Read more →
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
