// Basic JS for Phase 2

console.log("ArtConnect script loaded");

// Handle artist submission form
const form = document.getElementById("artist-form");
const message = document.getElementById("form-message");

if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // prevent page reload

        message.textContent = "Your artwork has been submitted!";
        message.style.color = "green";

        // Clear form fields
        form.reset();
    });
}

console.log("Gallery JS ready");

console.log("Events JS ready");

document.querySelectorAll('.question').forEach(q => {
    q.addEventListener('click', () => {
        q.nextElementSibling.classList.toggle('show');
    });
});

// Artist Submission Form Validation
document.getElementById('artist-form').addEventListener('submit', function(e) {
    e.preventDefault();

    let name = document.getElementById('artist-name').value.trim();
    let email = document.getElementById('email').value.trim();
    let title = document.getElementById('art-title').value.trim();
    let description = document.getElementById('description').value.trim();
    let category = document.getElementById('category').value;
    let price = document.getElementById('price').value.trim();
    let image = document.getElementById('image-upload').value;

    // Name validation
    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    // Email validation
    if (email === "") {
        alert("Please enter your email address.");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address.");
        return;
    }

    // Title validation
    if (title === "") {
        alert("Please enter an artwork title.");
        return;
    }

    // Description validation
    if (description === "") {
        alert("Please enter an artwork description.");
        return;
    }

    // Category validation
    if (category === "") {
        alert("Please select a category.");
        return;
    }

    // Price validation (optional)
    if (price !== "" && isNaN(price)) {
        alert("Price must be a number.");
        return;
    }

    // Image validation (optional but recommended)
    if (image === "") {
        alert("Please upload an image of your artwork.");
        return;
    }

    // Success message
    document.getElementById('form-message').textContent = "Artwork submitted successfully!";
    document.getElementById('form-message').style.color = "green";
});

