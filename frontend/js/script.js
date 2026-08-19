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
// Gallery Search and Category Filter
const searchBar = document.getElementById("search-bar");
const categoryFilter = document.getElementById("category-filter");
const artworkCards = document.querySelectorAll(".art-card");

function filterGallery() {
    const searchText = searchBar ? searchBar.value.toLowerCase() : "";
    const selectedCategory = categoryFilter ? categoryFilter.value.toLowerCase() : "all";

    artworkCards.forEach(function(card) {
        const title = card.querySelector(".art-title").textContent.toLowerCase();
        const category = card.querySelector(".art-category").textContent.toLowerCase();

        const matchesSearch = title.includes(searchText);

        const matchesCategory =
            selectedCategory === "all" ||
            category.includes(selectedCategory);

        if (matchesSearch && matchesCategory) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

if (searchBar) {
    searchBar.addEventListener("input", filterGallery);
}

if (categoryFilter) {
    categoryFilter.addEventListener("change", filterGallery);
}
// Gallery Artwork Details Modal
const artCards = document.querySelectorAll(".art-card");
const artModal = document.getElementById("art-modal");
const modalImage = document.getElementById("modal-art-image");
const modalTitle = document.getElementById("modal-art-title");
const modalInfo = document.getElementById("modal-art-info");
const closeArtModal = document.getElementById("close-art-modal");

if (artModal && artCards.length > 0) {
    artCards.forEach(function(card) {
        card.addEventListener("click", function() {
            const image = card.querySelector("img");
            const title = card.querySelector(".art-title");
            const paragraphs = card.querySelectorAll("p");

            modalImage.src = image.src;
            modalImage.alt = image.alt;
            modalTitle.textContent = title.textContent;

            let details = "";

            paragraphs.forEach(function(paragraph) {
                details += paragraph.textContent + " | ";
            });

            modalInfo.textContent = details.slice(0, -3);

            artModal.style.display = "flex";
        });
    });
}

if (closeArtModal) {
    closeArtModal.addEventListener("click", function() {
        artModal.style.display = "none";
    });
}

if (artModal) {
    artModal.addEventListener("click", function(event) {
        if (event.target === artModal) {
            artModal.style.display = "none";
        }
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

