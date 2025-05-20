// Cookie Consent
document.addEventListener("DOMContentLoaded", function () {
  const cookieConsent = document.getElementById("cookieConsent");
  const cookieAccept = document.getElementById("cookieAccept");
  const cookieOverlay = document.getElementById("cookieOverlay");

  // Check if consent was already given
  if (!localStorage.getItem("cookieConsent")) {
    // Show overlay and consent
    setTimeout(() => {
      cookieOverlay.classList.add("show");
      cookieConsent.classList.add("show");

      // Prevent scrolling
      document.body.style.overflow = "hidden";
    }, 100);
  }

  // Handle accept button
  cookieAccept.addEventListener("click", function () {
    localStorage.setItem("cookieConsent", "true");
    cookieConsent.classList.remove("show");
    cookieOverlay.classList.remove("show");
    document.body.style.overflow = "";
  });
});

// Clock logic

function textClock() {
  var newDate = new Date(),
    day = newDate.getDay(),
    hours = newDate.getHours(),
    minutes = newDate.getMinutes().toString(),
    seconds = newDate.getSeconds().toString();

  // Fix for 12 hour format

  /*
if (hours > 12 && hours !== 0 && hours !== 23) {
    hours = hours - 12;
  }
    else {
      hours === 0;
  }
  */

  if (minutes < 10) {
    minutes = 0 + minutes;
  }
  if (seconds < 10) {
    seconds = 0 + seconds;
  }

  var minsSecs = minutes + seconds;
  if (minsSecs > 3230) {
    hours++;
  }

  if (day == 5) {
    $("#tgif").html("TGIF");
  }

  hoursObj = {
    1: "#one",
    2: "#two",
    3: "#three",
    4: "#four",
    5: "#five-hr",
    6: "#six",
    7: "#seven",
    8: "#eight",
    9: "#nine",
    10: "#ten-hr",
    11: "#eleven",
    12: "#twelve",
    13: "#one",
    14: "#two",
    15: "#three",
    16: "#four",
    17: "#five-hr",
    18: "#six",
    19: "#seven",
    20: "#eight",
    21: "#nine",
    22: "#ten-hr",
    23: "#eleven",
    24: "#midnight",
    0: "#midnight",
  };

  updateHour(hoursObj[hours]);

  if (
    (minsSecs >= 5730 && minsSecs < 6000) ||
    (minsSecs >= 0 && minsSecs < 230)
  ) {
    if (hours !== 24 && hours !== 0) {
      updateDesc("#oclock");
    } else {
      updateDesc("#midnight");
    }
  } else if (minsSecs >= 230 && minsSecs < 730) {
    updateDesc("#five, #past");
  } else if (minsSecs >= 730 && minsSecs < 1230) {
    updateDesc("#ten, #past");
  } else if (minsSecs >= 1230 && minsSecs < 1730) {
    updateDesc("#quarter, #past");
  } else if (minsSecs >= 1730 && minsSecs < 2230) {
    updateDesc("#twenty, #past");
  } else if (minsSecs >= 2230 && minsSecs < 2730) {
    updateDesc("#twenty, #five, #past");
  } else if (minsSecs >= 2730 && minsSecs < 3230) {
    updateDesc("#half, #past");
  } else if (minsSecs >= 3230 && minsSecs < 3730) {
    updateDesc("#twenty, #five, #to");
  } else if (minsSecs >= 3730 && minsSecs < 4230) {
    updateDesc("#twenty, #to");
  } else if (minsSecs >= 4230 && minsSecs < 4730) {
    updateDesc("#quarter, #to");
  } else if (minsSecs >= 4730 && minsSecs < 5230) {
    updateDesc("#ten, #to");
  } else if (minsSecs >= 5230 && minsSecs < 5730) {
    updateDesc("#five, #to");
  } else {
    updateDesc();
  }
}

function updateDesc(classes) {
  $(".desc").removeClass("active");
  $(classes).addClass("active");
}

function updateHour(classes) {
  $(".hr").removeClass("active");
  $(classes).addClass("active");
}

setInterval(function () {
  textClock();
}, 1000);

window.addEventListener("hashchange", function () {
  if (window.location.hash === "#clock") {
    document.getElementById("clock").style.animation = "none";
    setTimeout(() => {
      document.getElementById("clock").style.animation =
        "clockFadeIn 1s forwards";
    }, 10);
  }
});

function setDefaultSection() {
  if (!window.location.hash) {
    window.location.hash = "clock";
  }
}

function restartClockAnimation() {
  const clockSection = document.getElementById("clock");
  if (clockSection) {
    const lines = document.querySelectorAll('[id^="line-"]');
    lines.forEach((line) => {
      line.style.animation = "none";
      line.offsetHeight;
      line.style.animation = null;
    });

    const hoverMenu = document.getElementById("hover_menu");
    if (hoverMenu) {
      hoverMenu.style.animation = "none";
      hoverMenu.offsetHeight;
      hoverMenu.style.animation = null;
    }
  }
}

window.addEventListener("load", () => {
  setDefaultSection();
  if (window.location.hash === "#clock") {
    restartClockAnimation();
  }
});

window.addEventListener("hashchange", () => {
  if (window.location.hash === "#clock") {
    restartClockAnimation();
  }
});

// EXPERT PROFILES
function loadExperts() {
  // Fetch expert data from JSON file
  fetch("experts.json")
    .then((response) => {
      // Check if request was successful
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((experts) => {
      const container = document.getElementById("experts-container");

      // Clear any existing placeholder content
      container.innerHTML = "";

      // Create a card for each expert
      experts.forEach((expert) => {
        // Create card container
        const expertCard = document.createElement("div");
        expertCard.className = "expert-card";

        // Create left column (image + name/title)
        const imageContainer = document.createElement("div");
        imageContainer.className = "expert-image-container";

        // Create profile image
        const expertImg = document.createElement("img");
        expertImg.src = `images/${expert.image}`;
        expertImg.alt = `${expert.name}`;
        expertImg.className = "expert-image";

        // Create name/title container
        const expertInfo = document.createElement("div");
        expertInfo.className = "expert-info";

        // Create name element
        const expertName = document.createElement("h3");
        expertName.className = "expert-name";
        expertName.textContent = expert.name;

        // Create title element
        const expertTitle = document.createElement("p");
        expertTitle.className = "expert-title";
        expertTitle.textContent = expert.title;

        // Create right column (bio)
        const expertBio = document.createElement("div");
        expertBio.className = "expert-bio";

        // Create bio paragraph
        const bioText = document.createElement("p");
        bioText.textContent = expert.bio;

        // Assemble the DOM structure
        expertInfo.appendChild(expertName);
        expertInfo.appendChild(expertTitle);

        imageContainer.appendChild(expertImg);
        imageContainer.appendChild(expertInfo);

        expertBio.appendChild(bioText);

        expertCard.appendChild(imageContainer);
        expertCard.appendChild(expertBio);

        // Add card to container
        container.appendChild(expertCard);
      });
    })
    .catch((error) => {
      console.error("Error loading experts:", error);

      // Fallback content if JSON fails to load
      const container = document.getElementById("experts-container");
      container.innerHTML = `
        <div class="expert-card">
          <div class="expert-image-container">
            <img src="images/placeholder.jpg" alt="Placeholder" class="expert-image">
            <div class="expert-info">
              <h3 class="expert-name">Expert Name</h3>
              <p class="expert-title">Expert Title</p>
            </div>
          </div>
          <div class="expert-bio">
            <p>Expert bio will appear here. This is placeholder text that will be replaced when the experts data loads properly.</p>
          </div>
        </div>
      `;
    });
}

// Load experts when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", loadExperts);
