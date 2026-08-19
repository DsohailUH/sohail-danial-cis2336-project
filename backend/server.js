const express = require("express");
const path = require("path");
const submissionRoutes = require("./routes/submissionRoutes");

const app = express();
const PORT = 3000;

// Middleware for reading form data
app.use(express.urlencoded({ extended: true }));

// Submission routes
app.use("/", submissionRoutes);

// Serve frontend files
app.use(express.static(path.join(__dirname, "../frontend")));

// Basic test route
app.get("/api/test", function(req, res) {
    res.send("ArtConnect backend is working.");
});

app.get("/submission-status", function(req, res) {
    const result = req.query.result;

    if (result === "accepted") {
        res.sendFile(path.join(__dirname, "views", "confirmation.html"));
    } else {
        res.sendFile(path.join(__dirname, "views", "decline.html"));
    }
});

// GET route for declined submissions
app.get("/decline/:reason", function(req, res) {
    res.sendFile(path.join(__dirname, "views", "decline.html"));
});
// Start server
app.listen(PORT, function() {
    console.log(`Server running at http://localhost:${PORT}`);
});