const countEl = document.getElementById('count');

updateVisitorCount();

function updateVisitorCount() {
    fetch('https://api.countapi.xyz/update/marcinnnnb/youtube/?amount=1')
        .then(res => res.json())
        .then(res => {
            countEl.innerHTML = res.value;
        });
}