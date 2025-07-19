document.addEventListener("DOMContentLoaded", function () {
    const makeupLink = document.querySelector(".makeup-link");
    const makeupSection = document.getElementById("makeup-section");
  
    if (makeupLink && makeupSection) {
      makeupLink.addEventListener("click", () => {
        makeupSection.style.display = "block";
        makeupSection.scrollIntoView({ behavior: "smooth" });
      });
    }
  });

  
  document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".carousel-track");
    const slides = document.querySelectorAll(".carousel-slide");
    const prevBtn = document.querySelector(".carousel-btn.prev");
    const nextBtn = document.querySelector(".carousel-btn.next");
    let index = 0;
  
    function scrollToCard(i) {
      const slide = slides[i];
      if (slide) {
        slide.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      }
    }
  
    nextBtn.addEventListener("click", () => {
      index = (index + 1) % slides.length;
      scrollToCard(index);
    });
  
    prevBtn.addEventListener("click", () => {
      index = (index - 1 + slides.length) % slides.length;
      scrollToCard(index);
    });
  });
  
  