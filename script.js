function showContent(contentId) {
    var contentElements = document.querySelectorAll("#content p");
    for (var i = 0; i < contentElements.length; i++) {
      contentElements[i].classList.add("hidden");
    }
  
    var selectedContent = document.getElementById(contentId);
    selectedContent.classList.remove("hidden");
    var linkElements = document.querySelectorAll("#left-panel a");
  for (var i = 0; i < linkElements.length; i++) {
    linkElements[i].classList.remove("active");
  }

  var selectedLink = document.querySelector("#left-panel a[href='#" + contentId + "']");
  selectedLink.classList.add("active");
    
  }
  