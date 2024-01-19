// Function to handle certificate filtering
document.getElementById('certificateFilter').addEventListener('change', function () {
  const filterValue = this.value;
  const certificates = document.querySelectorAll('.certificate');

  certificates.forEach(cert => {
    const type = cert.getAttribute('data-type');
    cert.style.display = (filterValue === 'all' || filterValue === type) ? 'block' : 'none';
  });
});

// Function to toggle the visibility of a year section
function toggleYear(yearId, expandBtnId) {
  var yearSection = document.getElementById(yearId);
  var expandBtn = document.getElementById(expandBtnId);

  if (yearSection.classList.contains('collapsed')) {
    yearSection.classList.remove('collapsed');
    expandBtn.classList.remove('fa-caret-down');
    expandBtn.classList.add('fa-caret-up');
  } else {
    yearSection.classList.add('collapsed');
    expandBtn.classList.remove('fa-caret-up');
    expandBtn.classList.add('fa-caret-down');
  }
}

// Function to scroll to the top of the page
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Event listener for scrolling, showing/hiding the scroll-to-top button
window.onscroll = function () {
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  const scrollThreshold = 20;

  scrollTopBtn.style.display = (document.body.scrollTop > scrollThreshold || document.documentElement.scrollTop > scrollThreshold)
    ? 'block'
    : 'none';
};
