import React from 'react';
import '../styles/home.css';

const HomePage = () => (
  <section className="homeHolder">
    <h1 className="introTextHeader">Welcome to our Page!</h1>
    <article className="introTextParagragh">
      <h2 className="parHeader">
        This page is dedicated to creating the best calculator on the world wide web.
      </h2>
      <p className="par">With this tool, you can perform a wide range of calculations in a fast and user-friendly way. Whether you need to add numbers, subtract them, calculate percentages, or perform more complex operations, our calculator has got you covered</p>
      <p className="par"> Designed with simplicity and efficiency in mind, our calculator is perfect for anyone who needs to perform calculations quickly and easily. So, why waste time and effort doing math by hand when you can use our calculator? Start crunching numbers now and see how easy it can be!</p>
    </article>
  </section>
);

export default HomePage;
