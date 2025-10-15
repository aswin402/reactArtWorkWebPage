import React from "react";
import "./AboutUs.scss";

function AboutUs() {
  return (
    <div className="about-page">
      <section className="about-header">
        <h1>About Our Art Gallery</h1>
        <p>
          Welcome to the <strong>Art Gallery</strong> — a digital platform where you can explore
          timeless masterpieces and discover the beauty of art from around the world.
          Our goal is to make art more accessible, inspiring, and educational for everyone.
        </p>
      </section>

      <section className="about-api">
        <h2>About the Data Source</h2>
        <p>
          This website uses data from the{" "}
          <a
            href="https://api.artic.edu/docs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Art Institute of Chicago API
          </a>
          , an open-access public API that provides information about thousands of artworks,
          artists, exhibitions, and more. The API allows developers to access museum data in
          real-time and display it creatively in digital applications.
        </p>

        <div className="api-details">
          <h3>🧠 API Details:</h3>
          <ul>
            <li>
              <strong>Base URL:</strong>{" "}
              <code>https://api.artic.edu/api/v1/artworks</code>
            </li>
            <li>
              <strong>Type:</strong> RESTful JSON API
            </li>
            <li>
              <strong>Data Includes:</strong> Artwork titles, artist information, image URLs,
              dates, and descriptions.
            </li>
            <li>
              <strong>Usage:</strong> Free and open for educational and non-commercial projects.
            </li>
          </ul>
        </div>
      </section>

      <section className="about-credits">
        <h2>Credits & Acknowledgment</h2>
        <p>
          We gratefully acknowledge the{" "}
          <a
            href="https://www.artic.edu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Art Institute of Chicago
          </a>{" "}
          for providing public access to their art collections through their API.
          All artwork data and images displayed here are sourced from their open dataset.
        </p>
      </section>
    </div>
  );
}

export default AboutUs;
