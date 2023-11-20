// 페이지 로딩 시 URL의 쿼리 파라미터에 따라 메뉴 아이템 활성화 및 콘텐츠 표시
window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    if (id) {
        const menuItem = document.querySelector(`#${id}`);

        if (menuItem) {
            menuItem.click(); // 해당 메뉴 아이템 클릭 이벤트 발생
        }
    }
}

document.querySelectorAll('#sidebar ul li').forEach(item => {
    item.addEventListener('click', event => {
        document.querySelectorAll('#sidebar ul li').forEach(item => {
            item.classList.remove('active');
        });

        event.target.classList.add('active');

        const target = event.target.getAttribute('data-target');

        document.querySelectorAll('#content .content-item').forEach(item => {
            item.style.display = 'none';
        });

        document.querySelector(`#${target}`).style.display = 'block';

        // URL의 쿼리 파라미터 업데이트
        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set('id', event.target.getAttribute('id'));
        window.history.replaceState({}, '', `${window.location.pathname}?${urlParams}`);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".button");
    const buttonList = document.querySelector(".button_list");

    button.addEventListener("click", function () {
        buttonList.classList.toggle("show_list");
    });
});

window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var threshold = 10; // Adjust this value based on when you want the change to happen

    var searchArea = document.getElementById('search_area');

    if (scrollPosition > threshold) {
        // After scrolling past the threshold, hide search area
        searchArea.classList.add('hidden');
    } else {
        // Before reaching the threshold, show search area
        searchArea.classList.remove('hidden');
    }
});

