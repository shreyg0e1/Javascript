
// ==============================================================
// Access input box where user enters the place
const input = document.getElementById("search-input");

// Access the "Check Weather" button
const button = document.querySelector(".weather-btn");

// Access result elements
const result_place = document.getElementById("location");
const temperature = document.getElementById("temp");

// Function to fetch weather
function weather(place) {
  return fetch(`http://api.weatherapi.com/v1/current.json?key=843298eb1f134508b8c82931252307&q=${place}&aqi=yes`)
    .then(res => {
      if (!res.ok) {
        // If response is not ok (e.g. 400 or 404)
        throw new Error("Invalid place");
      }
      return res.json();
    })
    .then(info => {
      return {
        name: info.location.name,
        temp: info.current.temp_c,
      };
    })
    .catch(error => {
      alert("⚠️ Please enter a valid place!");
      console.error("Error fetching weather:", error);
      return null;
    });
}

// On button click
button.addEventListener("click", () => {
  const place = input.value.trim(); // remove extra spaces

  if (place === "") {
    alert(" Input cannot be empty!");
    return;
  }

  weather(place).then(data => {
    if (data) {
      result_place.innerHTML = data.name;
      temperature.innerHTML = `${data.temp}°C`;
    } else {
      result_place.innerHTML = "--";
      temperature.innerHTML = "--";
    }
  });
});
