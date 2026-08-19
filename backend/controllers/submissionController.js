// Processes artist submission form data
function processSubmission(req, res) {
    const artistName = req.body["artist-name"];
    const email = req.body.email;
    const artTitle = req.body["art-title"];
    const description = req.body.description;
    const category = req.body.category;
    const price = req.body.price;

    // Server-side validation
    if (
        !artistName ||
        !email ||
        !artTitle ||
        !description ||
        !category
    ) {
        return res.redirect("/decline/missing");
    }

    if (!email.includes("@") || !email.includes(".")) {
        return res.redirect("/decline/email");
    }

    if (price !== "" && (isNaN(price) || Number(price) < 0)) {
        return res.redirect("/decline/price");
    }

    // If validation passes
    res.redirect("/submission-status?result=accepted");
}

module.exports = {
    processSubmission
};