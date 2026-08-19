// Basic JS for Phase 2

console.log("ArtConnect script loaded");

// Artist Submission Form Validation
const artistForm = document.getElementById("artist-form");
const formMessage = document.getElementById("form-message");

if (artistForm) {
    artistForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("artist-name").value.trim();
        const email = document.getElementById("email").value.trim();
        const title = document.getElementById("art-title").value.trim();
        const description = document.getElementById("description").value.trim();
        const category = document.getElementById("category").value;
        const price = document.getElementById("price").value.trim();
        const image = document.getElementById("image-upload").value;

        // Clear previous message
        formMessage.textContent = "";

        // Artist name validation
        if (name === "") {
            formMessage.textContent = "Please enter your name.";
            formMessage.style.color = "red";
            return;
        }

        // Email validation
        if (email === "") {
            formMessage.textContent = "Please enter your email address.";
            formMessage.style.color = "red";
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            formMessage.textContent = "Please enter a valid email address.";
            formMessage.style.color = "red";
            return;
        }

        // Artwork title validation
        if (title === "") {
            formMessage.textContent = "Please enter an artwork title.";
            formMessage.style.color = "red";
            return;
        }

        // Description validation
        if (description === "") {
            formMessage.textContent = "Please enter an artwork description.";
            formMessage.style.color = "red";
            return;
        }

        // Category validation
        if (category === "") {
            formMessage.textContent = "Please select a category.";
            formMessage.style.color = "red";
            return;
        }

        // Price validation
        if (price !== "" && isNaN(price)) {
            formMessage.textContent = "Price must be a number.";
            formMessage.style.color = "red";
            return;
        }

        // Image validation
        if (image === "") {
            formMessage.textContent = "Please upload an image of your artwork.";
            formMessage.style.color = "red";
            return;
        }

        // Success message
        formMessage.textContent = "Artwork submitted successfully!";
        formMessage.style.color = "green";
    });
}
// Gallery Search Function
const searchBar = document.getElementById('search-bar');

if (searchBar) {
    searchBar.addEventListener('keyup', function() {
        let searchText = searchBar.value.toLowerCase();
        let artworks = document.querySelectorAll('.art-card');

        artworks.forEach(card => {
            let title = card.querySelector('.art-title').textContent.toLowerCase();

            if (title.includes(searchText)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
}

// Events Page Expand/Collapse
const eventButtons = document.querySelectorAll('.event-toggle');

eventButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const details = btn.nextElementSibling;
        details.classList.toggle('show');

        btn.textContent = details.classList.contains('show')
            ? "Hide Details"
            : "View Details";
    });
});

