import React from "react";
import img from "../../assets/img.jpg";
import styles from "../../style/about.module.css";
const AboutUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            About <span className={styles.textGradient}> वसः</span>
          </h1>
          <p className={styles.subtitle}>
            At वसः, we believe clothing is not just about covering yourself—it's
            a form of self-expression. We craft each piece with passion,
            quality, and elegance to bring your inner confidence to life.
          </p>
        </div>

        <div className={styles.gridContainer}>
          <div>
            <h2 className={styles.sectionTitle}>Our Story</h2>
            <p className={styles.textContent}>
              वसः started with a dream—to redefine fashion in a way that blends
              heritage with modernity. Born in the heart of Nepal, our designs
              take inspiration from cultural richness and contemporary trends.
            </p>
            <p className={styles.textContent}>
              From humble beginnings to serving fashion-forward individuals
              globally, our mission remains the same: make you feel confident
              and stylish in every outfit you wear.
            </p>
          </div>

          <div className={styles.imageWrapper}>
            <img
              src={img}
              alt="Our team working on fashion"
              className={styles.image}
            />
          </div>
        </div>

        <div className={styles.valuesSection}>
          <h2 className={styles.sectionTitle}>Our Values</h2>
          <div className={styles.valuesGrid}>
            {[
              {
                title: "Craftsmanship",
                desc: "Every stitch, cut, and detail is handled with precision to ensure you get the best.",
              },
              {
                title: "Sustainability",
                desc: "We prioritize eco-friendly practices and materials that support our planet.",
              },
              {
                title: "Empowerment",
                desc: "We strive to inspire confidence through clothing that celebrates all body types and identities.",
              },
            ].map((val, idx) => (
              <div key={idx} className={styles.valueCard}>
                <h3 className={styles.valueTitle}>{val.title}</h3>
                <p className={styles.textContent}>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
