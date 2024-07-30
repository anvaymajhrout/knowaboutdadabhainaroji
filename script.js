document.getElementById('more-info-btn').addEventListener('click', function() {
    var extraInfo = document.getElementById('extra-info');
    if (extraInfo.style.display === 'none' || extraInfo.style.display === '') {
        extraInfo.style.display = 'block';
        this.textContent = 'Less Info';
    } else {
        extraInfo.style.display = 'none';
        this.textContent = 'More Info';
    }
});
