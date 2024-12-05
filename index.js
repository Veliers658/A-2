const images = [
  { src: "./images/한동캠퍼스사진.webp", caption: "Caption Text" },
  { src: "./images/한동교회외부사진.jpg", caption: "Caption Two" },
  { src: "./images/한동교회사진.jpg", caption: "Caption Three" },
];

let slideIndex = 0;
let autoSlideInterval;

function showSlides() {
  const slides = document.getElementsByClassName("mySlides");

  // 모든 슬라이드를 숨김
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }

  // 현재 슬라이드 활성화
  slideIndex = (slideIndex + 1) % slides.length; // 다음 슬라이드로 이동
  slides[slideIndex].classList.add("active");
}

function startAutoSlide() {
  autoSlideInterval = setInterval(showSlides, 3000); // 3초마다 전환
}

function initializeSlideshow() {
  const slideshowContainer = document.getElementById("slideshow");
  const dotsContainer = document.getElementById("dots-container");

  // 기존 슬라이드와 도트 초기화
  slideshowContainer.innerHTML = "";
  dotsContainer.innerHTML = "";

  images.forEach((image, index) => {
    // 슬라이드 추가
    const slide = document.createElement("div");
    slide.className = "mySlides";
    slide.innerHTML = `
      <img src="${image.src}" alt="${image.caption}" />
      <div class="text">${image.caption}</div>
    `;
    slideshowContainer.appendChild(slide);

    // 도트 추가
    const dot = document.createElement("span");
    dot.className = "dot";
    dot.onclick = () => {
      clearInterval(autoSlideInterval); // 자동 전환 중지
      slideIndex = index - 1; // 클릭된 도트에 맞춘 슬라이드로 이동
      showSlides();
      startAutoSlide(); // 다시 자동 전환 시작
    };
    dotsContainer.appendChild(dot);
  });

  // 첫 번째 슬라이드 표시
  const slides = document.getElementsByClassName("mySlides");
  slides[0].classList.add("active"); // 첫 슬라이드 활성화
  startAutoSlide(); // 자동 슬라이드 시작
}


// 슬라이드 초기화 실행
initializeSlideshow();


// 초기화
initializeSlideshow();
// Initialize slideshow when page loads
document.addEventListener("DOMContentLoaded", function () {
  showSlides(slideIndex); // Show first slide
  startSlideTimer(); // Start automatic sliding

  // 햄버거 메뉴 이벤트 등록
  const hamburgerIcon = document.getElementById("hamburger-icon");
  const sidebar = document.getElementById("sidebar");

  // 햄버거 아이콘 클릭 이벤트
  hamburgerIcon.addEventListener("click", function () {
    if (sidebar.style.left === "0px") {
      sidebar.style.left = "-250px"; // 메뉴 숨기기
    } else {
      sidebar.style.left = "0px"; // 메뉴 보이기
    }
  });

  // 메뉴 외부 클릭 시 닫기 기능
  document.addEventListener("click", function (event) {
    if (!sidebar.contains(event.target) && !hamburgerIcon.contains(event.target)) {
      sidebar.style.left = "-250px"; // 메뉴 숨기기
    }
  });
});

// 로그인 폼
function setWelcomeMessage() {
  const userId = window.localStorage.getItem('login_id');
  const loginTime = window.localStorage.getItem('login_time');

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  const day = days[today.getDay()];

  const hours = loginTime ? parseInt(loginTime.split(':')[0]) : today.getHours();

  let theme = '';
  let welcomeMessage = '';

  if (hours >= 5 && hours < 11) {
      theme = {
          background: '#E6F2FF',
          color: '#003366',
          message: '상쾌한 아침입니다!'
      };
  } else if (hours >= 11 && hours < 14) {
      theme = {
          background: '#FFF0B5',
          color: '#664400',
          message: '맛있는 점심시간이에요!'
      };
  } else if (hours >= 14 && hours < 18) {
      theme = {
          background: '#F0F4C3',
          color: '#33691E',
          message: '활기찬 오후입니다!'
      };
  } else if (hours >= 18 && hours < 22) {
      theme = {
          background: '#FFD180',
          color: '#BF360C',
          message: '편안한 저녁입니다!'
      };
  } else {
      theme = {
          background: '#283593',
          color: '#E3F2FD',
          message: '조용한 밤입니다.'
      };
  }


  document.body.style.backgroundColor = theme.background;
  document.body.style.color = theme.color;

  document.getElementById('wel_msg').innerHTML = `
      ${userId}님, ${theme.message}<br>
      ${year}년 ${month}월 ${date}일 ${day}요일 ${loginTime || today.getHours() + ':' + today.getMinutes()}
  `;
}

window.onload = setWelcomeMessage;


// 다크모드 버튼 이벤트
document.getElementById('dark-mode-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // 로컬 스토리지에 다크모드 상태 저장
  const isDarkMode = document.body.classList.contains('dark-mode');
  localStorage.setItem('dark-mode', isDarkMode ? 'enabled' : 'disabled');
});

// 페이지 로드 시 다크모드 상태 적용
document.addEventListener('DOMContentLoaded', () => {
  const darkModeState = localStorage.getItem('dark-mode');
  if (darkModeState === 'enabled') {
    document.body.classList.add('dark-mode');
  }
});



