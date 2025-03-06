document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const slider = document.querySelector(".slider");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
  
    let currentSlide = 0; // 현재 보여지는 슬라이드의 인덱스
    const slideWidths = [790, 379.99, 379.99]; // 각 슬라이드의 너비
    const totalSlides = slides.length;
  
    // 슬라이드를 보여주는 함수
    function showSlide(index) {
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.style.display = "block"; // 현재 슬라이드만 보이기
        } else {
          slide.style.display = "none"; // 다른 슬라이드는 숨김
        }
      });
    }
  
    // 이전 버튼 클릭
    prevButton.addEventListener("click", () => {
      currentSlide = (currentSlide === 0) ? totalSlides - 1 : currentSlide - 1;
      showSlide(currentSlide);
    });
  
    // 다음 버튼 클릭
    nextButton.addEventListener("click", () => {
      currentSlide = (currentSlide === totalSlides - 1) ? 0 : currentSlide + 1;
      showSlide(currentSlide);
    });
  
    // 초기 상태로 첫 번째 슬라이드 표시
    showSlide(currentSlide);
  });