function goToPage(pageNum) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });
  document.getElementById('page' + pageNum).classList.add('active');
}
