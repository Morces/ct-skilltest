const tab1 = document.getElementById("tab1");
const tab2 = document.getElementById("tab2");
const mountain1 = document.getElementById("mountain1");
const mountain2 = document.getElementById("mountain2");

//step 1: get DOM
let nextDom = document.getElementById("next");
let prevDom = document.getElementById("prev");

let carouselDom = document.querySelector(".carousel");
let SliderDom = carouselDom.querySelector(".carousel .list");
let thumbnailBorderDom = document.querySelector(".carousel .thumbnail");
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(".item");
let timeDom = document.querySelector(".carousel .time");

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function () {
  showSlider("next");
};

prevDom.onclick = function () {
  showSlider("prev");
};
let runTimeOut;
let runNextAuto = setTimeout(() => {
  next.click();
}, timeAutoNext);
function showSlider(type) {
  let SliderItemsDom = SliderDom.querySelectorAll(".carousel .list .item");
  let thumbnailItemsDom = document.querySelectorAll(
    ".carousel .thumbnail .item"
  );

  if (type === "next") {
    SliderDom.appendChild(SliderItemsDom[0]);
    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    carouselDom.classList.add("next");
  } else {
    SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
    thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
    carouselDom.classList.add("prev");
  }
  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carouselDom.classList.remove("next");
    carouselDom.classList.remove("prev");
  }, timeRunning);

  clearTimeout(runNextAuto);
  runNextAuto = setTimeout(() => {
    next.click();
  }, timeAutoNext);
}

tab1.addEventListener("click", () => {
  mountain1.classList.remove("hidden");
  mountain2.classList.add("hidden");
  tab1.classList.add("bg-[#9FA7B6]");
  tab2.classList.remove("bg-[#9FA7B6]");
  tab1.classList.add("text-[#404F6C]");
  tab2.classList.remove("text-[#404F6C]");

  tab2.classList.add("text-[#9FA7B6]");
  tab1.classList.remove("text-[#9FA7B6]");
});

tab2.addEventListener("click", () => {
  mountain1.classList.add("hidden");
  mountain2.classList.remove("hidden");
  tab1.classList.remove("bg-[#9FA7B6]");
  tab2.classList.add("bg-[#9FA7B6]");
  tab1.classList.remove("text-[#404F6C]");
  tab2.classList.add("text-[#404F6C]");

  tab2.classList.remove("text-[#9FA7B6]");
  tab1.classList.add("text-[#9FA7B6]");
});

document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".accordion-tab");

  function toggleAccordion(tab) {
    const targetId = tab.getAttribute("id").replace("tab", "mountain");
    const content = document.getElementById(targetId);
    if (content) {
      const allContents = document.querySelectorAll(".accordion-content");
      allContents.forEach((c) => c.classList.add("hidden"));
      content.classList.remove("hidden");
    }
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      toggleAccordion(this);
    });
  });

  function checkViewportWidth() {
    const isSmallDevice = window.innerWidth <= 375;
    if (isSmallDevice) {
      tabs.forEach((tab) => {
        tab.addEventListener("click", function () {
          toggleAccordion(this);
        });
      });
    } else {
      tabs.forEach((tab) => {
        tab.removeEventListener("click", function () {
          toggleAccordion(this);
        });
      });
    }
  }

  checkViewportWidth();

  window.addEventListener("resize", checkViewportWidth);
});
