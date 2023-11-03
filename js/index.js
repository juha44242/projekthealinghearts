<script>
    // Get the current page's filename
    var currentPage = location.pathname.split("/").slice(-1);

    // Find the matching link and highlight it
    var links = document.querySelectorAll(".tabnav");
    for (var i = 0; i < links.length; i++) {
        var link = links[i];
        var linkHref = link.getAttribute("href");

        // Check if the link's href matches the current page
        if (linkHref === currentPage) {
            link.classList.add("active"); // You can define a CSS class for highlighting the active link
        }
    }
}
</script>