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

