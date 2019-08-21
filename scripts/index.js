/**
 * index.js
 * - All our useful JS goes here, awesome!
 */

// const primaryColors = ["#3ff61d", "#59c2fe", "#cc0183"];
// document.documentElement.style.setProperty(
//   "--primary",
//   primaryColors[
//     Math.floor(Math.random(primaryColors.length - 1) * primaryColors.length)
//   ]
// );

const $headerSection = $(".header");
const $aboutSection = $("#about");
const $educationSection = $("#education");
const $experienceSection = $("#experience");
const $projectsSection = $("#projects");
const $contactSection = $("#contact");
const $navList = $(".nav-list");

$headerSection.waypoint(
  function(direction) {
    if (direction === "down") {
      $navList.addClass("show-nav");
    } else {
      $navList.removeClass("show-nav");
    }
  },
  {
    offset: "-70%"
  }
);

// 1
$aboutSection.waypoint(
  function(direction) {
    $aboutSection.addClass("show");
    if (screen.width > 500 && direction === "down") {
      updateActiveLink(1, true);
      updateActiveLink(2, false);
    }
  },
  {
    offset: "25%"
  }
);

$aboutSection.waypoint(
  function(direction) {
    if (screen.width > 500 && direction === "up") {
      updateActiveLink(1, true);
      updateActiveLink(2, false);
    }
  },
  {
    offset: "-25%"
  }
);

// 2
$educationSection.waypoint(
  function(direction) {
    if (screen.width > 500 && direction === "down") {
      updateActiveLink(1, false);
      updateActiveLink(2, true);
    }
  },
  {
    offset: "25%"
  }
);

$educationSection.waypoint(
  function(direction) {
    if (screen.width > 500 && direction === "up") {
      updateActiveLink(2, true);
      updateActiveLink(3, false);
    }
  },
  {
    offset: "-25%"
  }
);

// 3
$experienceSection.waypoint(
  function(direction) {
    if (screen.width > 500 && direction === "down") {
      updateActiveLink(2, false);
      updateActiveLink(3, true);
    }
  },
  {
    offset: "25%"
  }
);

$experienceSection.waypoint(
  function(direction) {
    if (screen.width > 500 && direction === "up") {
      updateActiveLink(3, true);
      updateActiveLink(4, false);
    }
  },
  {
    offset: "-25%"
  }
);

// 4
$projectsSection.waypoint(
  function(direction) {
    if (screen.width > 500 && direction === "down") {
      updateActiveLink(3, false);
      updateActiveLink(4, true);
    }
  },
  {
    offset: "25%"
  }
);

$projectsSection.waypoint(
  function(direction) {
    if (screen.width > 500 && direction === "up") {
      updateActiveLink(4, true);
      updateActiveLink(5, false);
    }
  },
  {
    offset: "-25%"
  }
);

// 5
$contactSection.waypoint(
  function(direction) {
    if (screen.width > 500 && direction === "down") {
      updateActiveLink(4, false);
      updateActiveLink(5, true);
    }
  },
  {
    offset: "25%"
  }
);

$contactSection.waypoint(
  function(direction) {
    if (screen.width > 500 && direction === "up") {
      updateActiveLink(4, true);
      updateActiveLink(5, false);
    }
  },
  {
    offset: "-25%"
  }
);

updateActiveLink = (index, isAdded) => {
  if (isAdded) $(`.nav-list ul li:nth-child(${index}) a`).addClass("active");
  else $(`.nav-list ul li:nth-child(${index}) a`).removeClass("active");
};
