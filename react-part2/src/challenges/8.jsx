import { useState } from "react";
import { cardStyle } from "./common";

// Sample image URLs
const images = [
  "https://marketmillion.com/wp-content/uploads/2023/12/fullstack-development.png",
  "https://www.bing.com/th/id/OIP.svcoczs5cNIR_8m__ztsyQHaEI?w=218&h=211&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.5&pid=3.1&rm=2",
  "https://appmaster.io/api/_files/PqV7MuNwv89GrZvBd4LNNK/download/",
  "https://tse1.mm.bing.net/th/id/OIP.o5FmjKTPdJTbhGE2MIjo6wHaEH?rs=1&pid=ImgDetMain&o=7&rm=3",
  "https://tse2.mm.bing.net/th/id/OIP.5578fVgePmYZk4VwfTse3gHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
];
export default function ImageGallery() {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div style={cardStyle}>
      <h3>Image Gallery</h3>

      <img
        src={activeImage}
        alt="Main Display"
        style={{ width: "300px", height: "200px", marginBottom: "1rem" }}
      />

      <div style={{ display: "flex", gap: "6px" }}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => setActiveImage(img)}
            style={{
              width: "60px",
              height: "40px",
              cursor: "pointer",
              border: activeImage === img ? "2px solid blue" : "1px solid gray",
            }}
          />
        ))}
      </div>
    </div>
  );
}
