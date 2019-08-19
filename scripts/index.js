/**
 * index.js
 * - All our useful JS goes here, awesome!
 */

const $headerSection = $(".header");
const $aboutSection = $("#about");
const $educationSection = $("#education");
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
    if (screen.width > 500) {
      updateActiveLink(1, true);
      updateActiveLink(2, false);
    }
  },
  {
    offset: "20%"
  }
);

$educationSection.waypoint(function(direction) {
  $educationSection.addClass("show");
  if (screen.width > 500) {
    updateActiveLink(1, false);
    updateActiveLink(2, true);
    console.log("left education");
  }
});

updateActiveLink = (index, isAdded) => {
  if (isAdded) $(`.nav-list ul li:nth-child(${index}) a`).addClass("active");
  else $(`.nav-list ul li:nth-child(${index}) a`).removeClass("active");
};
