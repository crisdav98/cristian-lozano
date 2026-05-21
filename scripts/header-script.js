window.addEventListener("DOMContentLoaded", () => {
    const yearEl = document.getElementById("cl_year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    const header = document.querySelector("header");
    const nav = document.querySelector("header nav");
    const menuToggle = document.querySelector(".cl_menu-toggle");
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");
    const scrollTopBtn = document.querySelector(".cl_scroll-top");

    /* === Active nav highlight === */
    const resetLinks = () => navLinks.forEach(link => link.classList.remove("cl_nav-active"));

    const handleScroll = () => {
        const { scrollY } = window;

        sections.forEach(section => {
            const { id, offsetTop, clientHeight } = section;
            const offset = offsetTop - 1;
            if (scrollY >= offset - 150 && scrollY < offset + clientHeight) {
                resetLinks();
                navLinks.forEach(link => {
                    if (link.dataset.scroll === id) {
                        link.classList.add("cl_nav-active");
                    }
                });
            }
        });

        if (header) {
            header.classList.toggle("cl_scrolled", scrollY > 10);
        }

        if (scrollTopBtn) {
            scrollTopBtn.classList.toggle("cl_visible", scrollY > 600);
        }
    };

    document.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    /* === Mobile menu === */
    if (menuToggle && nav) {
        const closeMenu = () => {
            nav.classList.remove("cl_nav-open");
            menuToggle.setAttribute("aria-expanded", "false");
            const icon = menuToggle.querySelector("i");
            if (icon) icon.className = "ri-menu-line";
        };

        const openMenu = () => {
            nav.classList.add("cl_nav-open");
            menuToggle.setAttribute("aria-expanded", "true");
            const icon = menuToggle.querySelector("i");
            if (icon) icon.className = "ri-close-line";
        };

        menuToggle.addEventListener("click", () => {
            if (nav.classList.contains("cl_nav-open")) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        navLinks.forEach(link => link.addEventListener("click", closeMenu));

        document.addEventListener("click", (e) => {
            if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
                closeMenu();
            }
        });

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") closeMenu();
        });
    }

    /* === Scroll reveal === */
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealEls = document.querySelectorAll(".cl_reveal, .cl_reveal-left, .cl_reveal-right");

    if (reduceMotion) {
        revealEls.forEach(el => el.classList.add("cl_visible"));
    } else if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("cl_visible");
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });

        revealEls.forEach(el => io.observe(el));
    } else {
        revealEls.forEach(el => el.classList.add("cl_visible"));
    }

    /* === Scroll to top === */
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
});
