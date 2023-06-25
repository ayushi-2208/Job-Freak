function showContent(contentId) {
    var contentSections = document.getElementsByClassName("content-section");
    for (var i = 0; i < contentSections.length; i++) {
      contentSections[i].style.display = "none";
    }
    document.getElementById(contentId).style.display = "block";
  }