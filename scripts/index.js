/**
 * index.js
 * - All our useful JS goes here, awesome!
 */

const $headerSection = $(".header");
const $aboutSection = $("#about");
const $educationSection = $("#education");
const $experienceSection = $("#experience");
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

updateActiveLink = (index, isAdded) => {
  if (isAdded) $(`.nav-list ul li:nth-child(${index}) a`).addClass("active");
  else $(`.nav-list ul li:nth-child(${index}) a`).removeClass("active");
};
