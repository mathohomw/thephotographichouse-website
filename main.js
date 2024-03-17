const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav__menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})

const youtube = document.querySelector('fab fa-youtube');

youtube.href = "https://www.youtube.com/results?search_query=the+photographic+house"
const facebook = document.querySelector('fab fa-youtube');

youtube.href = "https://www.facebook.com/profile.php?id=100069054137516";