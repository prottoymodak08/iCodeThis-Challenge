const searchInput = document.getElementById("search");
const resultContainer = document.querySelector(".result_container");
const results = document.querySelectorAll(".result");

const noResultsMessage = document.createElement("div");
noResultsMessage.className = "no-results";
noResultsMessage.textContent = "No results found.";
resultContainer.appendChild(noResultsMessage);
noResultsMessage.style.display = "none";

resultContainer.style.display = "none";

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase().trim();

  if (searchTerm === "") {
    resultContainer.style.display = "none";
    return;
  }

  resultContainer.style.display = "flex";

  let hasMatch = false;

  results.forEach((result) => {
    const title = result.querySelector("h3").textContent.toLowerCase();
    const description = result.querySelector("p").textContent.toLowerCase();

    if (title.includes(searchTerm) || description.includes(searchTerm)) {
      result.style.display = "flex";
      hasMatch = true;
    } else {
      result.style.display = "none";
    }
  });

  noResultsMessage.style.display = hasMatch ? "none" : "block";
});

results.forEach((result) => {
  result.addEventListener("click", () => {
    const selectedText = result.querySelector("h3").textContent;
    searchInput.value = selectedText;

    results.forEach((r) => {
      if (r === result) {
        r.style.display = "flex";
        r.classList.add("selected");
      } else {
        r.style.display = "none";
        r.classList.remove("selected");
      }
    });

    resultContainer.style.display = "flex";
    noResultsMessage.style.display = "none";
  });
});
