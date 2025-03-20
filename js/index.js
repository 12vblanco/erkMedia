function textClock() {
  var newDate = new Date();

  var day = newDate.getDay(),
    hours = newDate.getHours(),
    minutes = newDate.getMinutes().toString(),
    seconds = newDate.getSeconds().toString();

  var twelveHourFormat = hours % 12 || 12;

  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  var minsSecs = minutes + seconds;

  if (hours === 0 && minsSecs >= 0 && minsSecs < 230) {
    twelveHourFormat = 24; // Midnight
  } else if (hours === 12 && minsSecs >= 0 && minsSecs < 230) {
    twelveHourFormat = 12; // Noon
  }

  if (minsSecs >= 3230) {
    twelveHourFormat = (twelveHourFormat % 12) + 1;
    if (twelveHourFormat === 13) {
      twelveHourFormat = 1;
    }
  }

  if (day == 5) {
    $("#tgif").html("TGIF");
  }

  var hoursObj = {
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
    24: "#midnight",
  };

  updateHour(hoursObj[twelveHourFormat]);

  if (
    (minsSecs >= 5730 && minsSecs < 6000) ||
    (minsSecs >= 0 && minsSecs < 230)
  ) {
    if (twelveHourFormat !== 24) {
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
  if (classes) {
    classes.split(", ").forEach((cls) => $(cls).addClass("active"));
  }
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
