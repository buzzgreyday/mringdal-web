$(document).ready(function () {
    // List of project names to ignore
    var projectsToIgnore = ['ISL-linear-regression', 'BigO'];

    // Fetch portfolio data from GitHub API
    $.getJSON('https://api.github.com/users/buzzgreyday/repos', function (data) {
        var projectItems = $('#projectItems');
        var portfolioItems = $('#portfolioItems');
        $.each(data, function (index, item) {
            // Check if the project name is not in the list of projects to ignore
            if (!projectsToIgnore.includes(item.name)) {
                var portfolioItem = `
                    <div class="col-md-4 mb-4">
                        <div class="card">
                            <img src="${item.owner.avatar_url}" class="card-img-top" alt="Project Thumbnail">
                            <div class="card-body">
                                <h6 class="card-title">${item.name}</h6>
                                <p class="card-text">${item.description}</p>
                                <a href="${item.html_url}" class="btn btn-primary">View</a>
                            </div>
                        </div>
                    </div>
                `;
                projectItems.append(portfolioItem);
                portfolioItems.append(portfolioItem);
            }
        });
    });
});

// Show or hide the toTop button based on scroll position
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("toTopBtn").style.display = "block";
    } else {
        document.getElementById("toTopBtn").style.display = "none";
    }
}

// Scroll to top function
function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
