const shareBtn = document.getElementById('js-share-icon');
const popUp = document.getElementById('js-active-state');

shareBtn.addEventListener('click', function () {
    document.querySelector('.active-state').classList.toggle('hidden');
});
