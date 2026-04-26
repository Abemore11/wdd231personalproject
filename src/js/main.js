import { getParkData } from "./parkService.mjs";

const parkData = getParkData();


function parkInfoTemplate(info) {
    return `<a href="/" class="hero-banner__title">${info.name}</a>
  <p class="hero-banner__subtitle">
    <span>${info.designation}</span>
    <span>${info.states}</span>
  </p>`;
}

// Inserts data into disclaimer section
const disclaimer = document.querySelector(".disclaimer > a");
disclaimer.href = parkData.url;
disclaimer.innerHTML = parkData.fullName;

// Updates the title of the site.
document.querySelector("head > title").textContent = parkData.fullName;

// Sets the banner image
document.querySelector(".hero-banner > img").src = parkData.images[0].url;

// Use the template function above to set the rest of the park specific info in the header
document.querySelector(".hero-banner__content").innerHTML =
    parkInfoTemplate(parkData);