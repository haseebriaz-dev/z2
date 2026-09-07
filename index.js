document.addEventListener("DOMContentLoaded", () => {
    // --- 1. Typewriter Effect ---
    const categories = [
        "🔥 Chicken Mandi",
        "🍱 Fast-Food Platters",
        "🍲 Sizzling Mutton Karahi",
        "🌯 Seekh Kebab Rolls",
        "🍚 Authentic Biryani",
        "🍹 Fresh Lime Soda"
    ];

    let catIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const textElement = document.getElementById("typewriter-text");

    if (textElement) {
        function typeEffect() {
            const currentCategory = categories[catIndex];

            if (isDeleting) {
                textElement.textContent = currentCategory.substring(0, charIndex - 1);
                charIndex--;
            } else {
                textElement.textContent = currentCategory.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeed = isDeleting ? 50 : 100;

            if (!isDeleting && charIndex === currentCategory.length) {
                typeSpeed = 2000; // Hold text for 2 seconds
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                catIndex = (catIndex + 1) % categories.length;
                typeSpeed = 500;
            }

            setTimeout(typeEffect, typeSpeed);
        }

        typeEffect();
    }

    // --- 2. Mobile Navigation Toggle & Auto-Close ---
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const navMenu = document.getElementById("nav-menu");

    if (hamburgerBtn && navMenu) {
        // Toggle menu on click
        hamburgerBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            navMenu.classList.toggle("active");
        });

        // Close menu on link click
        navMenu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("active");
            });
        });

        // Close menu when clicking anywhere outside
        document.addEventListener("click", (e) => {
            if (!navMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
                navMenu.classList.remove("active");
            }
        });
    }

    // --- 3. WhatsApp Table Booking System ---
    const bookingForm = document.getElementById("booking-form");

    if (bookingForm) {
        bookingForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = document.getElementById("booking-name")?.value.trim() || "";
            const phone = document.getElementById("booking-number")?.value.trim() || "";
            const date = document.getElementById("booking-date")?.value || "";
            const time = document.getElementById("booking-time")?.value || "";

            const restaurantNumber = "923281200021";

            const rawMessage =
                `Hello Zainab Restaurant!
I would like to book a table:
👤 *Name:* ${name}
📞 *Phone:* ${phone}
📅 *Date:* ${date}
⏰ *Time:* ${time}
Please confirm my reservation. Thank you!`;

            const whatsappURL = `https://wa.me/${restaurantNumber}?text=${encodeURIComponent(rawMessage)}`;

            // Open WhatsApp in new tab
            window.open(whatsappURL, "_blank");

            // Reset form after submission
            bookingForm.reset();
        });
    }
});