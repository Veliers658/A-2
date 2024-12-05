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

try {
  const users = [
    { id: "user1", password: "pass1" },
    { id: "user2", password: "pass2" },
    { id: "user3", password: "pass3" },
  ];

  function login(event) {
    try {
      if (event) event.preventDefault();
      const userId = document.getElementById("userId").value;
      const userPassword = document.getElementById("userPassword").value;
      const loginTime = document.getElementById("login_time").value;

      if (!userId || !userPassword) {
        alert("아이디와 비밀번호를 모두 입력해주세요.");
        return;
      }

      const user = users.find((u) => u.id === userId && u.password === userPassword);

      if (!user) {
        alert("아이디 또는 비밀번호가 올바르지 않습니다.");
        return;
      }

      let selectedTime;

      if (loginTime) {
        selectedTime = loginTime;
      } else {
        const now = new Date();
        selectedTime =
          now.getHours().toString().padStart(2, "0") +
          ":" +
          now.getMinutes().toString().padStart(2, "0");
      }

      window.localStorage.setItem("login_id", userId);
      window.localStorage.setItem("login_time", selectedTime);

      window.open("index.html", "_self");
    } catch (error) {
      console.error("로그인 처리 중 오류 발생:", error.message);
    }
  }
} catch (error) {
  console.error("로그인 초기화 중 오류 발생:", error.message);
}
