window.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section"), navLinks = document.querySelectorAll("nav ul li a");

    const resetLinks = () => navLinks.forEach(link => link.classList.remove("cl_nav-active"));

    const handleScroll = () => {
        const { scrollY } = window;
        sections.forEach(section => {
            const { id, offsetTop, clientHeight } = section;
            const offset = offsetTop -1;
            if (scrollY >= offset - 150 && scrollY < offset + clientHeight) {
                resetLinks();
                navLinks.forEach(link => {
                    if (link.dataset.scroll === id) {
                        link.classList.add("cl_nav-active");
                    }
                })
            }
        })
    }
    document.addEventListener("scroll", () => {
        handleScroll();
        const header = document.querySelector('header');
        if (window.scrollY > 0) {
            header.classList.add('cl_scrolled');
        } else {
            header.classList.remove('cl_scrolled');
        }
    })
})
