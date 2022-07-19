const header = document.querySelector(".header");

// Counter up animation onscroll
document.addEventListener("DOMContentLoaded", () => {
  const statistics = document.querySelector(".statistics");
  let counterAlreadyFired = false;
  let scroll = window.pageYOffset;

  const isElementVisible = (el) => {
    var boundsTop = el.getBoundingClientRect().top + scroll;
    var viewport = {
      top: scroll,
      bottom: scroll + window.innerHeight,
    };
    var bounds = {
      top: boundsTop,
      bottom: boundsTop + el.clientHeight,
    };
    return (
      (bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom) ||
      (bounds.top <= viewport.bottom && bounds.top >= viewport.top)
    );
  };

  const statisticsCounter = () => {
    const allNumberDisplays = document.querySelectorAll(
      ".statistics-card__value"
    );
    let validNumbers = [];

    allNumberDisplays.forEach((item) => {
      if (item.getAttribute("data-val")) validNumbers.push(item);
    });

    const interval = 2000;
    validNumbers.forEach((item) => {
      let startVal = 0;
      let endVal = parseInt(item.getAttribute("data-val"));
      const duration = Math.floor(interval / endVal);
      const counter = setInterval(function () {
        startVal += 1;
        item.textContent = startVal;
        if (endVal == startVal) {
          clearInterval(counter);
        }
      }, duration);
    });
  };

  const handleScroll = (e) => {
    if (isElementVisible(statistics) && !counterAlreadyFired) {
      statisticsCounter();
      counterAlreadyFired = true;
    }
  };

  window.addEventListener("scroll", handleScroll);
});

// Sticky Navbar
window.addEventListener("scroll", (e) => {
  let scroll = window.pageYOffset;
  if (scroll >= 50) {
    console.log("hi");
    header.classList.add("sticky");
  }
  if (scroll < 50) {
    header.classList.remove("sticky");
  }
});
