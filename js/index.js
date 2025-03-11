// function textClock() {
//   var newDate = new Date(),
//     day = newDate.getDay(),
//     hours = newDate.getHours(),
//     minutes = newDate.getMinutes().toString(),
//     seconds = newDate.getSeconds().toString();

//   if (hours > 12 && hours !== 0 && hours !== 23) {
//     hours = hours - 12;
//   }
//   if (minutes < 10) {
//     minutes = 0 + minutes;
//   }
//   if (seconds < 10) {
//     seconds = 0 + seconds;
//   }

//   var minsSecs = minutes + seconds;
//   if (minsSecs > 3230) {
//     hours++;
//   }

//   if (day == 5) {
//     $("#tgif").html("TGIF");
//   }

//   hoursObj = {
//     1: "#one",
//     2: "#two",
//     3: "#three",
//     4: "#four",
//     5: "#five-hr",
//     6: "#six",
//     7: "#seven",
//     8: "#eight",
//     9: "#nine",
//     10: "#ten-hr",
//     11: "#eleven",
//     12: "#twelve",
//     23: "#eleven",
//     24: "#midnight",
//     0: "#midnight",
//   };

//   updateHour(hoursObj[hours]);

//   if (
//     (minsSecs >= 5730 && minsSecs < 6000) ||
//     (minsSecs >= 0 && minsSecs < 230)
//   ) {
//     if (hours !== 24 && hours !== 0) {
//       updateDesc("#oclock");
//     }
//   } else if (minsSecs >= 230 && minsSecs < 730) {
//     updateDesc("#five, #past");
//   } else if (minsSecs >= 730 && minsSecs < 1230) {
//     updateDesc("#ten, #past");
//   } else if (minsSecs >= 1230 && minsSecs < 1730) {
//     updateDesc("#quarter, #past");
//   } else if (minsSecs >= 1730 && minsSecs < 2230) {
//     updateDesc("#twenty, #past");
//   } else if (minsSecs >= 2230 && minsSecs < 2730) {
//     updateDesc("#twenty, #five, #past");
//   } else if (minsSecs >= 2730 && minsSecs < 3230) {
//     updateDesc("#half, #past");
//   } else if (minsSecs >= 3230 && minsSecs < 3730) {
//     updateDesc("#twenty, #five, #to");
//   } else if (minsSecs >= 3730 && minsSecs < 4230) {
//     updateDesc("#twenty, #to");
//   } else if (minsSecs >= 4230 && minsSecs < 4730) {
//     updateDesc("#quarter, #to");
//   } else if (minsSecs >= 4730 && minsSecs < 5230) {
//     updateDesc("#ten, #to");
//   } else if (minsSecs >= 5230 && minsSecs < 5730) {
//     updateDesc("#five, #to");
//   } else {
//     updateDesc();
//   }
// }

// function updateDesc(classes) {
//   $(".desc").removeClass("active");
//   $(classes).addClass("active");
// }

// function updateHour(classes) {
//   $(".hr").removeClass("active");
//   $(classes).addClass("active");
// }

// setInterval(function () {
//   textClock();
// }, 1000);

// window.addEventListener("hashchange", function () {
//   if (window.location.hash === "#clock") {
//     document.getElementById("clock").style.animation = "none";
//     setTimeout(() => {
//       document.getElementById("clock").style.animation =
//         "clockFadeIn 1s forwards";
//     }, 10);
//   }
// });

// function setDefaultSection() {
//   if (!window.location.hash) {
//     window.location.hash = "clock";
//   }
// }

// function restartClockAnimation() {
//   const clockSection = document.getElementById("clock");
//   if (clockSection) {
//     const lines = document.querySelectorAll('[id^="line-"]');
//     lines.forEach((line) => {
//       line.style.animation = "none";
//       line.offsetHeight;
//       line.style.animation = null;
//     });

//     const hoverMenu = document.getElementById("hover_menu");
//     if (hoverMenu) {
//       hoverMenu.style.animation = "none";
//       hoverMenu.offsetHeight;
//       hoverMenu.style.animation = null;
//     }
//   }
// }

// window.addEventListener("load", () => {
//   setDefaultSection();
//   if (window.location.hash === "#clock") {
//     restartClockAnimation();
//   }
// });

// window.addEventListener("hashchange", () => {
//   if (window.location.hash === "#clock") {
//     restartClockAnimation();
//   }
// });

// function textClock() {
//   var newDate = new Date(),
//     day = newDate.getDay(),
//     hours = newDate.getHours(),
//     minutes = newDate.getMinutes().toString(),
//     seconds = newDate.getSeconds().toString();

//   // Fix for 12 hour format
//   if (hours === 12) {
//     hours = 0;
//   }
//   if (hours > 12) {
//     hours = hours - 12;
//   }

//   if (minutes < 10) {
//     minutes = 0 + minutes;
//   }
//   if (seconds < 10) {
//     seconds = 0 + seconds;
//   }

//   var minsSecs = minutes + seconds;
//   if (minsSecs > 3230) {
//     hours++;
//   }

//   if (day == 5) {
//     $("#tgif").html("TGIF");
//   }

//   hoursObj = {
//     1: "#one",
//     2: "#two",
//     3: "#three",
//     4: "#four",
//     5: "#five-hr",
//     6: "#six",
//     7: "#seven",
//     8: "#eight",
//     9: "#nine",
//     10: "#ten-hr",
//     11: "#eleven",
//     12: "#twelve",
//     23: "#eleven",
//     24: "#midnight",
//     0: "#midnight",
//   };

//   updateHour(hoursObj[hours]);

//   if (
//     (minsSecs >= 5730 && minsSecs < 6000) ||
//     (minsSecs >= 0 && minsSecs < 230)
//   ) {
//     if (hours !== 24 && hours !== 0) {
//       updateDesc("#oclock");
//     }
//   } else if (minsSecs >= 230 && minsSecs < 730) {
//     updateDesc("#five, #past");
//   } else if (minsSecs >= 730 && minsSecs < 1230) {
//     updateDesc("#ten, #past");
//   } else if (minsSecs >= 1230 && minsSecs < 1730) {
//     updateDesc("#quarter, #past");
//   } else if (minsSecs >= 1730 && minsSecs < 2230) {
//     updateDesc("#twenty, #past");
//   } else if (minsSecs >= 2230 && minsSecs < 2730) {
//     updateDesc("#twenty, #five, #past");
//   } else if (minsSecs >= 2730 && minsSecs < 3230) {
//     updateDesc("#half, #past");
//   } else if (minsSecs >= 3230 && minsSecs < 3730) {
//     updateDesc("#twenty, #five, #to");
//   } else if (minsSecs >= 3730 && minsSecs < 4230) {
//     updateDesc("#twenty, #to");
//   } else if (minsSecs >= 4230 && minsSecs < 4730) {
//     updateDesc("#quarter, #to");
//   } else if (minsSecs >= 4730 && minsSecs < 5230) {
//     updateDesc("#ten, #to");
//   } else if (minsSecs >= 5230 && minsSecs < 5730) {
//     updateDesc("#five, #to");
//   } else {
//     updateDesc();
//   }
// }

// function updateDesc(classes) {
//   $(".desc").removeClass("active");
//   $(classes).addClass("active");
// }

// function updateHour(classes) {
//   $(".hr").removeClass("active");
//   $(classes).addClass("active");
// }

// setInterval(function () {
//   textClock();
// }, 1000);

// window.addEventListener("hashchange", function () {
//   if (window.location.hash === "#clock") {
//     document.getElementById("clock").style.animation = "none";
//     setTimeout(() => {
//       document.getElementById("clock").style.animation =
//         "clockFadeIn 1s forwards";
//     }, 10);
//   }
// });

// function setDefaultSection() {
//   if (!window.location.hash) {
//     window.location.hash = "clock";
//   }
// }

// function restartClockAnimation() {
//   const clockSection = document.getElementById("clock");
//   if (clockSection) {
//     const lines = document.querySelectorAll('[id^="line-"]');
//     lines.forEach((line) => {
//       line.style.animation = "none";
//       line.offsetHeight;
//       line.style.animation = null;
//     });

//     const hoverMenu = document.getElementById("hover_menu");
//     if (hoverMenu) {
//       hoverMenu.style.animation = "none";
//       hoverMenu.offsetHeight;
//       hoverMenu.style.animation = null;
//     }
//   }
// }

// window.addEventListener("load", () => {
//   setDefaultSection();
//   if (window.location.hash === "#clock") {
//     restartClockAnimation();
//   }
// });

// window.addEventListener("hashchange", () => {
//   if (window.location.hash === "#clock") {
//     restartClockAnimation();
//   }
// });

function textClock() {
  var newDate = new Date(),
    day = newDate.getDay(),
    hours = newDate.getHours(),
    minutes = newDate.getMinutes().toString(),
    seconds = newDate.getSeconds().toString();

  // Format minutes and seconds
  if (minutes < 10) {
    minutes = 0 + minutes;
  }
  if (seconds < 10) {
    seconds = 0 + seconds;
  }

  var minsSecs = minutes + seconds;

  // For times after half past, we're approaching the next hour
  var isApproachingNextHour = minsSecs > 3230;

  // Convert 24h to 12h format
  var displayHour = hours % 12;
  if (displayHour === 0) displayHour = 12;

  // If we're approaching the next hour, increment
  if (isApproachingNextHour) {
    displayHour = (displayHour % 12) + 1;
    if (displayHour === 13) displayHour = 1;
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
    23: "#eleven",
    24: "#midnight",
    0: "#midnight",
  };

  updateHour(hoursObj[displayHour]);

  if (
    (minsSecs >= 5730 && minsSecs < 6000) ||
    (minsSecs >= 0 && minsSecs < 230)
  ) {
    if (displayHour !== 24 && displayHour !== 0) {
      updateDesc("#oclock");
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
