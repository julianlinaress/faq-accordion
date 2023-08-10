const questions = document.querySelectorAll(".question");

questions.forEach(question => {
  question.addEventListener("click", () => {
    const isActive = question.classList.contains("active");

    questions.forEach(q => {
      q.classList.remove("active");
    });

    if (!isActive) {
      question.classList.add("active");
    }
  });
});