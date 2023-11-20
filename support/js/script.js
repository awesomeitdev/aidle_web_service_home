document.addEventListener('DOMContentLoaded', function(){
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    if (id) {
        const menuItem = document.querySelector(`#${id}`);

        if (menuItem) {
            // 기존에 active 클래스를 가진 아이템에서 active 클래스 제거
            const activeItem = document.querySelector('#sidebar ul li.active');
            if (activeItem) {
                activeItem.classList.remove('active');
            }

            // 쿼리 파라미터에 해당하는 아이템에 active 클래스 추가
            menuItem.classList.add('active');

            // 해당 메뉴의 컨텐츠 보이기
            const target = menuItem.getAttribute('data-target');
            document.querySelectorAll('#content .content-item').forEach(item => {
                item.style.display = 'none';
            });
            document.querySelector(`#${target}`).style.display = 'block';
        }
    }
});

document.addEventListener('DOMContentLoaded', function(){
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
