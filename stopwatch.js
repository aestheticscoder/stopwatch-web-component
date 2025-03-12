class StopwatchComponent extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });

        this.time = 0;
        this.timer = null;

        this.render();
    }

    render() {
        this.shadow.innerHTML = `
          <style>
            .stopwatch {
              font-family: 'Poppins', sans-serif;
              text-align: center;
              padding: 20px;
              border: 2px solid #333;
              border-radius: 10px;
              width: 200px;
              box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
              background: white;
            }
            .time {
              font-size: 2em;
              margin-bottom: 10px;
              font-family: 'Courier New', monospace;
            }
            button {
              background: #007bff;
              color: white;
              border: none;
              padding: 12px 20px;
              margin: 10px;
              border-radius: 6px;
              cursor: pointer;
              font-size: 1rem;
              transition: 0.3s;
            }
            button:hover {
              background: #0056b3;
            }
            .reset-btn {
              background: #dc3545;
            }
            .reset-btn:hover {
              background: #a71d2a;
            }
          </style>
          <div class="stopwatch">
            <div class="time">0.00</div>
            <button id="start">Start</button>
            <button id="stop">Stop</button>
            <button id="reset" class="reset-btn">Reset</button>
          </div>
        `;
    }


    connectedCallback() {
        this.shadow.querySelector("#start").addEventListener("click", () => this.start());
        this.shadow.querySelector("#stop").addEventListener("click", () => this.stop());
        this.shadow.querySelector("#reset").addEventListener("click", () => this.reset());
    }

    start() {
        if (!this.timer) {
            this.timer = setInterval(() => {
                this.time += 0.1;
                this.shadow.querySelector(".time").textContent = this.time.toFixed(2);

                this.dispatchEvent(new CustomEvent("timeUpdate", {
                    detail: { time: this.time.toFixed(2) },
                    bubbles: true,
                    composed: true
                }));
            }, 100);
        }
    }

    stop() {
        clearInterval(this.timer);
        this.timer = null;
    }

    reset() {
        this.stop();
        this.time = 0;
        this.shadow.querySelector(".time").textContent = "0.00";
    }
}

customElements.define("stopwatch-component", StopwatchComponent);
