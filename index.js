try {
  console.log("JavaScript is running");
  console.log("Dark mode status:", document.body.classList.contains("dark-mode"));
  console.log(localStorage.getItem("dark-mode"));
} catch (error) {
  console.error("콘솔 초기화 중 오류 발생:", error.message);
}

try {
  const images = [
    { src: "./images/한동캠퍼스사진.webp", caption: "Caption Text" },
    { src: "./images/한동교회외부사진.jpg", caption: "Caption Two" },
    { src: "./images/한동교회사진.jpg", caption: "Caption Three" },
  ];

  let slideIndex = 0;
  let autoSlideInterval;

  function showSlides() {
    try {
      const slides = document.getElementsByClassName("mySlides");
      for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
      }
      slideIndex = (slideIndex + 1) % slides.length;
      slides[slideIndex].classList.add("active");
    } catch (error) {
      console.error("슬라이드 표시 중 오류 발생:", error.message);
    }
  }

  function startAutoSlide() {
    try {
      autoSlideInterval = setInterval(showSlides, 3000);
    } catch (error) {
      console.error("자동 슬라이드 시작 중 오류 발생:", error.message);
    }
  }

  function initializeSlideshow() {
    try {
      const slideshowContainer = document.getElementById("slideshow");
      const dotsContainer = document.getElementById("dots-container");

      slideshowContainer.innerHTML = "";
      dotsContainer.innerHTML = "";

      images.forEach((image, index) => {
        const slide = document.createElement("div");
        slide.className = "mySlides";
        slide.innerHTML = `
          <img src="${image.src}" alt="${image.caption}" />
          <div class="text">${image.caption}</div>
        `;
        slideshowContainer.appendChild(slide);

        const dot = document.createElement("span");
        dot.className = "dot";
        dot.onclick = () => {
          clearInterval(autoSlideInterval);
          slideIndex = index - 1;
          showSlides();
          startAutoSlide();
        };
        dotsContainer.appendChild(dot);
      });

      const slides = document.getElementsByClassName("mySlides");
      slides[0].classList.add("active");
      startAutoSlide();
    } catch (error) {
      console.error("슬라이드 초기화 중 오류 발생:", error.message);
    }
  }

  initializeSlideshow();
} catch (error) {
  console.error("슬라이드 전체 초기화 중 오류 발생:", error.message);
}

document.addEventListener("DOMContentLoaded", function () {
  try {
    const hamburgerIcon = document.getElementById("hamburger-icon");
    const sidebar = document.getElementById("sidebar");

    hamburgerIcon.addEventListener("click", function () {
      try {
        const sidebarStyle = getComputedStyle(sidebar);
        if (sidebarStyle.left === "0px") {
          sidebar.style.left = "-250px";
        } else {
          sidebar.style.left = "0px";
        }
      } catch (error) {
        console.error("햄버거 메뉴 클릭 처리 중 오류 발생:", error.message);
      }
    });

    document.addEventListener("click", function (event) {
      try {
        if (!sidebar.contains(event.target) && !hamburgerIcon.contains(event.target)) {
          sidebar.style.left = "-250px";
        }
      } catch (error) {
        console.error("메뉴 외부 클릭 처리 중 오류 발생:", error.message);
      }
    });
  } catch (error) {
    console.error("DOMContentLoaded 초기화 중 오류 발생:", error.message);
  }
});

try {
  function setWelcomeMessage() {
    try {
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
        theme = { message: '상쾌한 아침입니다!' };
      } else if (hours >= 11 && hours < 14) {
        theme = { message: '맛있는 점심시간이에요!' };
      } else if (hours >= 14 && hours < 18) {
        theme = { message: '활기찬 오후입니다!' };
      } else if (hours >= 18 && hours < 22) {
        theme = { message: '편안한 저녁입니다!' };
      } else {
        theme = { message: '조용한 밤입니다.' };
      }

      document.getElementById('wel_msg').innerHTML = `
        ${userId}님, ${theme.message}<br>
        ${year}년 ${month}월 ${date}일 ${day}요일 ${loginTime || today.getHours() + ':' + today.getMinutes()}
      `;
    } catch (error) {
      console.error("환영 메시지 설정 중 오류 발생:", error.message);
    }
  }

  window.onload = setWelcomeMessage;
} catch (error) {
  console.error("환영 메시지 초기화 중 오류 발생:", error.message);
}

document.addEventListener('DOMContentLoaded', () => {
  try {
    const darkModeToggle = document.getElementById('dark-mode-toggle');

    if (!darkModeToggle) {
      console.error('다크모드 버튼을 찾을 수 없습니다.');
      return;
    }

    const isDarkMode = localStorage.getItem('dark-mode') === 'enabled';

    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      darkModeToggle.textContent = '☀️'; // 다크모드일 때 햇빛 아이콘
    } else {
      darkModeToggle.textContent = '🌙'; // 라이트모드일 때 달 아이콘
    }

    darkModeToggle.addEventListener('click', () => {
      try {
        document.body.classList.toggle('dark-mode');
        const isNowDarkMode = document.body.classList.contains('dark-mode');
        darkModeToggle.textContent = isNowDarkMode ? '☀️' : '🌙'; // 상태에 따라 아이콘 변경
        const mode = isNowDarkMode ? 'enabled' : 'disabled';
        localStorage.setItem('dark-mode', mode);
      } catch (error) {
        console.error("다크모드 전환 처리 중 오류 발생:", error.message);
      }
    });
  } catch (error) {
    console.error("다크모드 초기화 중 오류 발생:", error.message);
  }
});

const urls = [
  { title: "Homepage 개요", url: "index.html" },
  { title: "Map 개요", url: "map.html" },
  { title: "Login 개요", url: "login.html" },
  { title: "Club 개요", url: "club.html" },
  { title: "Map Info", url: "mapinfo.html" }
];

const data = [];

// HTML에서 텍스트 콘텐츠만 추출
function extractTextFromHTML(htmlString) {
  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");
    return doc.body.textContent || "";
  } catch (error) {
    console.error("Error extracting text from HTML:", error);
    return "";
  }
}

// URL에서 콘텐츠 읽어오기
async function loadContent() {
  for (let item of urls) {
    try {
      const response = await fetch(item.url);
      if (!response.ok) {
        console.error(`Failed to fetch ${item.url}: ${response.status}`);
        continue;
      }
      const text = await response.text();
      const plainText = extractTextFromHTML(text);
      data.push({ url: item.url, content: plainText });
    } catch (error) {
      console.error(`Error loading content from ${item.url}:`, error);
    }
  }
}

// 검색 이벤트
function performSearch() {
  const searchInput = document.getElementById("search-bar").value.toLowerCase();
  const resultsContainer = document.getElementById("search-results");
  resultsContainer.innerHTML = "";

  if (searchInput.trim() === "") {
    resultsContainer.classList.remove("show");
    return;
  }

  const results = data.filter(
    (item) =>
      item.content.toLowerCase().includes(searchInput)
  );

  if (results.length > 0) {
    results.forEach((result) => {
      const matchedIndex = result.content.toLowerCase().indexOf(searchInput);
      const previewStart = Math.max(matchedIndex - 30, 0);
      const previewEnd = Math.min(
        matchedIndex + 30 + searchInput.length,
        result.content.length
      );
      const preview = result.content.slice(previewStart, previewEnd);

      const resultItem = document.createElement("div");
      resultItem.classList.add("result-item");
      resultItem.innerHTML = `
        <p>
          ...${preview.replace(
            new RegExp(searchInput, "gi"),
            (match) => `<b>${match}</b>`
          )}...
        </p>
      `;
      resultItem.addEventListener("click", () => {
        if (result.url === "mapinfo.html") {
          // mapinfo.html의 검색 결과는 map.html로 이동
          window.location.href = "map.html";
        } else {
          // 다른 검색 결과는 해당 URL로 이동
          window.location.href = result.url;
        }
      });
      resultsContainer.appendChild(resultItem);
    });
    resultsContainer.classList.add("show");
  } else {
    resultsContainer.innerHTML = "<div class='result-item'>검색 결과가 없습니다.</div>";
    resultsContainer.classList.add("show");
  }
}

// 초기 데이터 로드
loadContent();

// 검색 입력창 이벤트
document.getElementById("search-bar").addEventListener("input", performSearch);

// 검색 영역 외부 클릭 시 닫기
document.addEventListener("click", function (event) {
  const resultsContainer = document.getElementById("search-results");
  const searchBar = document.getElementById("search-bar");
  if (!resultsContainer.contains(event.target) && event.target !== searchBar) {
    resultsContainer.classList.remove("show");
  }
});

