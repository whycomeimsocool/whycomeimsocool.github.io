(function () {
    const intervals = [
        { name: "Minor second", ratio: "16/15", value: 16 / 15 },
        { name: "Major second", ratio: "9/8", value: 9 / 8 },
        { name: "Minor third", ratio: "32/27", value: 32 / 27 },
        { name: "Major third", ratio: "5/4", value: 5 / 4 },
        { name: "Perfect fourth", ratio: "4/3", value: 4 / 3 },
        { name: "Tritone", ratio: "45/32", value: 45 / 32 },
        { name: "Perfect fifth", ratio: "3/2", value: 3 / 2 },
        { name: "Minor sixth", ratio: "8/5", value: 8 / 5 },
        { name: "Major sixth", ratio: "5/3", value: 5 / 3 },
        { name: "Octave", ratio: "2/1", value: 2 },
    ];

    const defaults = {
        intervalIndex: 2,
        rootPx: 16,
    };

    const page = document.querySelector(".typography-page");
    const intervalControl = document.querySelector("#interval-control");
    const rootControl = document.querySelector("#root-control");
    const intervalOutput = document.querySelector("[data-interval-output]");
    const rootOutput = document.querySelector("[data-root-output]");
    const reset = document.querySelector("[data-type-reset]");
    const noteOutputs = Array.from(document.querySelectorAll("[data-note-output]"));

    if (!page || !intervalControl || !rootControl || !intervalOutput || !rootOutput) {
        return;
    }

    const formatPx = (value) => `${value.toFixed(2)}px`;

    function calculateNotes(rootPx, ratio) {
        const fontSizeGrow = window.innerWidth / 100;
        const minFontSize = rootPx / ratio;
        const notes = [Math.max(minFontSize, fontSizeGrow)];

        for (let index = 1; index <= 16; index += 1) {
            notes[index] = notes[index - 1] * ratio;
        }

        return notes;
    }

    function update() {
        const intervalIndex = Number(intervalControl.value);
        const rootPx = Number(rootControl.value);
        const interval = intervals[intervalIndex] || intervals[defaults.intervalIndex];

        page.style.setProperty("--fontRatio", interval.value.toString());
        page.style.setProperty("--rootPx", rootPx.toString());

        intervalOutput.textContent = `${interval.name} · ${interval.ratio}`;
        rootOutput.textContent = `${rootPx.toFixed(rootPx % 1 === 0 ? 0 : 1)}px`;
        intervalControl.setAttribute("aria-valuetext", `${interval.name}, ${interval.ratio}`);
        rootControl.setAttribute("aria-valuetext", `${rootOutput.textContent} root anchor`);

        const notes = calculateNotes(rootPx, interval.value);
        noteOutputs.forEach((output) => {
            const noteIndex = Number(output.dataset.noteOutput);
            output.textContent = formatPx(notes[noteIndex]);
        });
    }

    function restoreDefaults() {
        intervalControl.value = defaults.intervalIndex.toString();
        rootControl.value = defaults.rootPx.toString();
        update();
    }

    intervalControl.addEventListener("input", update);
    rootControl.addEventListener("input", update);
    window.addEventListener("resize", update);

    if (reset) {
        reset.addEventListener("click", restoreDefaults);
    }

    update();
})();
