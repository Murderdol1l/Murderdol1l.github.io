window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#header__find').addEventListener('click', function() {
        document.querySelector('#search').classList.toggle('is-active')
    })
    document.querySelector('#search__close').addEventListener('click', function() {
        document.querySelector('#search').classList.toggle('is-active')
    })
})
