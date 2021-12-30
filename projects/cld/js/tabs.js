document.querySelectorAll('.how-we-work__step').forEach(function (tabsLink) {
    tabsLink.addEventListener('click', function (e) {
        const path = e.currentTarget.dataset.path;
        document.querySelectorAll('.how-we-work__step').forEach(function (link) {
            link.classList.remove('how-we-work__step--active')
        });
        e.currentTarget.classList.add('how-we-work__step--active');
        document.querySelectorAll('.how-we-work__block').forEach(function (tabsLink) {
            tabsLink.classList.remove('how-we-work__block--active')
        });
        document.querySelector(`[data-target="${path}"]`).classList.add('how-we-work__block--active');
    });
});
