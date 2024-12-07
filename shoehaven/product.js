document.addEventListener("DOMContentLoaded", function () {
    const filterDropdown = document.getElementById("productFilter"); // Get dropdown
    const sections = {
        casual: document.getElementById("casual"), // Casual Section
        sports: document.getElementById("sports"), // Sports Section
        personalized: document.getElementById("personalized"), // Personalized Section
    };

    // Handle dropdown selection
    filterDropdown.addEventListener("change", function () {
        const filterValue = filterDropdown.value;

        // Loop through sections and hide/show based on the selected value
        Object.keys(sections).forEach(key => {
            if (filterValue === "all") {
                sections[key].style.display = "block"; // Show all sections
            } else if (key === filterValue) {
                sections[key].style.display = "block"; // Show the selected section
            } else {
                sections[key].style.display = "none"; // Hide other sections
            }
        });
    });
});
