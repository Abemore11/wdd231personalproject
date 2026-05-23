// conditions.js
// Gets data, transforms it to HTML, injects HTML into DOM.

// We can do this kind of import bc we're using vite.
// Vite let's you import CSS directly inside your JS file.
import "../css/style.css";
import "../css/conditions.css";


import { getParkData, getParkAlerts, getVisitorCenterData } from "./parkService.mjs";
import { alertTemplate, activityListTemplate, visitorCenterTemplate } from "./templates.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";

// Takes one Alert object and returns an HTML string 
// with the alert info and the correct icon.
function setAlerts(alerts) {
    const alertsContainer = document.querySelector(".alerts > ul");
    alertsContainer.innerHTML = "";
    // For each alert - convert alert into HTML string - 
    // Return arrays of HTML strings
    const html = alerts.map(alertTemplate);
    // insertAdjacentHTML takes a string and parses it as HTML and inserts it into the DOM.
    alertsContainer.insertAdjacentHTML("beforeend", html.join(""));
}

function setVisitorCenters(centers) {
    const centersContainer = document.querySelector(".visitor details ul");
    centersContainer.innerHTML = "";
    const html = centers.map(visitorCenterTemplate);
    centersContainer.insertAdjacentHTML("afterbegin", html.join(""));
}

function setActivities(activities) {
    const activitiesContainer = document.querySelector(".activities ul");
    activitiesContainer.innerHTML = "";
    const html = activityListTemplate(activities);
    activitiesContainer.insertAdjacentHTML("afterbegin", html);
}

async function init() {
    const parkData = await getParkData();
    const alerts = await getParkAlerts(parkData.parkCode);
    const visitorCenters = await getVisitorCenterData(parkData.parkCode);
    setHeaderFooter(parkData);
    setAlerts(alerts);
    setVisitorCenters(visitorCenters);
    setActivities(parkData.activities);
}

init();