document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("h2").forEach(function (title) {
        title.addEventListener("click", function () {
            const section = this.nextElementSibling; // Get the section below the title
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});