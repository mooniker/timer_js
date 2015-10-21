var timer = {
  seconds: 0,
  timerId: 0,
  is_running: false,
  htmlDoc: { // selectors to target each of the timer's elements
    timerH1: document.getElementById("timer"),
    startButton: document.getElementById("start"),
    pauseButton: document.getElementById("pause"),
    resetButton: document.getElementById("reset"),
  },
  displayTime: function () { // updates the elapsed time to H1
    this.htmlDoc.timerH1.innerText = "Time elapsed: " + this.seconds;
  },
  updateTime: function () { //Increments seconds counter, updates display.
    this.seconds += 1;
    this.displayTime(); // TODO: "uncaught TypeError: this.display is not a function"
    //this.htmlDoc.timerH1.innerText = "Time elapsed: " + this.seconds;
  },
  startTimer: function () {
    if ( this.is_running ) {
      console.log("Timer already started.");
    } else {
      console.log("Timer started.");
      this.updateTime();
      this.timerId = setInterval(this.updateTime, 1000);  //.bind(this)?
      this.is_running = true;
    }
  },
  pauseTimer: function () {
    if ( this.is_running ) {
      console.log("Timer paused.");
      clearInterval(this.timerId); // stops the timer // .bind(this)?
      this.is_running = false;
    } else {
      console.log("Timer already paused.");
    }
  },
  resetTimer: function () {
    console.log("Timer reset at " + this.seconds + " seconds.");
    clearInterval(this.timerId); // stops the timer // .binf(this)?
    this.seconds = 0; // resets the timer
    this.htmlDoc.timerH1.innerText = "Stop Watch";
  },
  // Click handlers for each of the timer buttons.
  listenForEvents: function () {
    this.htmlDoc.startButton.addEventListener("click", this.startTimer.bind(this));
    this.htmlDoc.pauseButton.addEventListener("click", this.pauseTimer.bind(this));
    this.htmlDoc.resetButton.addEventListener("click", this.resetTimer.bind(this));
  },
};

timer.listenForEvents();
