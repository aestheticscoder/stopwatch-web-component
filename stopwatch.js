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
                    font-family: Arial, sans-serif;
                    text-align: center;
                    padding: 20px;
                    border: 2px solid #333;
                    border-radius: 10px;
                    width: 200px;
                    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
                }
                .time {
                    font-size: 2em;
                    margin-bottom: 10px;
                }
                button {
                    margin: 5px;
                    padding: 5px 10px;
                    cursor: pointer;
                }
            </style>
            <div class="stopwatch">
                <div class="time">0.00</div>
                <button id="start">Start</button>
                <button id="stop">Stop</button>
                <button id="reset">Reset</button>
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
