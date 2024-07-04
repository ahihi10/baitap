function search(event) {
  event.preventDefault(); // Ngăn chặn hành động mặc định của form

  let input = document.getElementById('searchInput').value.toLowerCase();
  let links = document.querySelectorAll('.document-item a');
  let paragraphs = document.querySelectorAll('p');
  links.forEach(function(link) {
      let linkText = link.textContent.toLowerCase();
      let parent = link.parentElement;

      if (linkText.includes(input)) {
          parent.style.display = 'block';
      } else {
          parent.style.display = 'none';
      }
  });

  paragraphs.forEach(function(paragraph) {
    let paragraphText = paragraph.textContent.toLowerCase();

    if (paragraphText.includes(input)) {
        paragraph.style.display = 'block';

        // Tìm nút sao chép của đoạn văn hiện tại và hiển thị nó
        let copyButton = paragraph.nextElementSibling;
        if (copyButton && copyButton.classList.contains('copy-button')) {
            copyButton.style.display = 'block';
        }
    } else {
        paragraph.style.display = 'none';

        // Ẩn nút sao chép của đoạn văn không được hiển thị
        let copyButton = paragraph.nextElementSibling;
        if (copyButton && copyButton.classList.contains('copy-button')) {
            copyButton.style.display = 'none';
        }
    }
});

}


