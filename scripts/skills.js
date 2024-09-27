document.addEventListener("DOMContentLoaded", function () {
    //    CSS Loader
    const skills = document.getElementsByClassName("cl_skills-circularProgress");
    
    for (const skill of skills) {
        let progress;
        skill.addEventListener("mouseenter", () => {
            let progressValue = 0;
            let progressEnd = skill.dataset.value;
            let speed = 5;


            progress = setInterval(() => {
                progressValue++;
                skill.style.background = `
                conic-gradient(#00C7A9 ${progressValue * 3.6}deg, #333 ${progressValue * 3.6}deg)
                `;
                if (progressValue == progressEnd) {
                    clearInterval(progress);

                }
            }, speed)
        })
        skill.addEventListener("mouseleave", () => {
            clearInterval(progress);
            skill.style.background = `transparent `;
        })
    }
});
