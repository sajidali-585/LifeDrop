
/* ==============================
   QUICK SEARCH FUNCTIONALITY
================================= */

document.addEventListener("DOMContentLoaded", function () {

    const searchForm = document.getElementById("quickSearchForm");

    if (!searchForm) {
        return;
    }

    searchForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const bloodGroup = document.getElementById("bloodGroup").value;

        const city = document.getElementById("city").value;

        if (!bloodGroup || !city) {

            alert("Please select a blood group and city.");
            return;

        }

        alert(
            "Searching for " +
            bloodGroup +
            " blood donors in " +
            city +
            ".\n\nDonor results will be available when we build the Find Blood page."
        );

    });

});
