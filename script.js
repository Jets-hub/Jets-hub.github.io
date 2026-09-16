```javascript
// =====================================
// CURRENT YEAR
// =====================================

document.getElementById("year").textContent =
    new Date().getFullYear();


// =====================================
// SMOOTH NAVIGATION
// =====================================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(event) {

        const target =
            document.querySelector(
                this.getAttribute("href")
            );

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});
```
