/**
 * Minimal quiz widget for lessons.
 * Usage:
 * <div class="quiz" data-quiz data-answer="1">
 *   <h3>Question?</h3>
 *   <div class="quiz-options">
 *     <button type="button" data-option="0">A</button>
 *     <button type="button" data-option="1">B</button>
 *   </div>
 *   <p class="feedback" data-feedback></p>
 * </div>
 * Option labels should be same length where possible (no formatting clues).
 */
(function () {
  function initQuiz(root) {
    const answer = root.getAttribute("data-answer");
    const feedback = root.querySelector("[data-feedback]");
    const buttons = [...root.querySelectorAll("[data-option]")];
    let locked = false;

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        if (locked) return;
        locked = true;
        const choice = btn.getAttribute("data-option");
        buttons.forEach((b) => b.setAttribute("aria-pressed", "false"));
        btn.setAttribute("aria-pressed", "true");

        buttons.forEach((b) => {
          const isCorrect = b.getAttribute("data-option") === answer;
          b.classList.add(isCorrect ? "correct" : "incorrect");
        });

        if (choice === answer) {
          feedback.textContent =
            root.getAttribute("data-ok") || "Correct. That distinction matters in interviews.";
        } else {
          feedback.textContent =
            root.getAttribute("data-bad") ||
            "Not quite. Re-read the rule, then try explaining it out loud.";
        }
      });
    });
  }

  document.querySelectorAll("[data-quiz]").forEach(initQuiz);
})();
