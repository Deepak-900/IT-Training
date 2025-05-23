// Function to handle scroll event
    const progressBars = document.querySelectorAll(".progress");

    const animateSkills = () => {
      progressBars.forEach((bar) => {
        const skillLevel = bar.getAttribute("data-skill");
        const barPosition = bar.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (barPosition < windowHeight) {
          bar.style.width = skillLevel;
        }
      });
    };

    // Trigger animation on scroll
    window.addEventListener("scroll", animateSkills);