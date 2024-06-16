let isParagraphVisible = false;

function toggleParagraph() {
    isParagraphVisible = !isParagraphVisible;
    
    if (isParagraphVisible) {
        console.log("Paragraph is visible");
    } else {
        console.log("Paragraph is hidden");
    }
}
// Add event listener to the button
document.getElementById("toggleButton").addEventListener("click", toggleParagraph);

