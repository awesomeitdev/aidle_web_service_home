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




//모바일 햄버거 버튼
document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector('.button');
    const buttonList = document.querySelector('.button_list');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const overlay = document.querySelector('.header .header-inner .overlay');
    const header = document.querySelector('.header');
    const headerInner = document.querySelector('.header .header-inner');
    const navigationBar = document.querySelector('.navigation-bar');
    const headerText = document.querySelectorAll(".header-nav-item-link-text");
    const logo = document.querySelector('.header-title img');
    const headerMenu = document.querySelector('.header-menu');

    button.addEventListener('click', function () {
        buttonList.classList.toggle('show_list');
    });

    hamburgerMenu.addEventListener('click', function () {
        hamburgerMenu.classList.toggle('active');
        overlay.classList.toggle('active');
        header.classList.toggle('active');
        navigationBar.classList.toggle('active');

        if (hamburgerMenu.classList.contains('active')) {
            // 햄버거 버튼이 활성화되어 있을 때
            headerInner.style.backgroundColor = '#fff';
            hamburgerMenu.style.backgroundImage = "url('../../public/images/close-icon.png')";
            headerMenu.style.display = 'block';
            overlay.style.display = "block"
        } else {
            // 햄버거 버튼이 비활성화되어 있을 때
            headerInner.style.backgroundColor = 'transparent';
            hamburgerMenu.style.backgroundImage = "url('../../public/images/hamburger-icon.png')";
            headerMenu.style.display = 'none';
            overlay.style.display = "none"
        }
        // 로고 및 메뉴명 상시 변경 없음
        logo.src = './public/logo.svg';
        headerText.forEach(text => {
            text.style.color = '#2D3439';
        });
    });

    overlay.addEventListener('click', function () {
        hamburgerMenu.classList.remove('active');
        overlay.classList.remove('active');
        overlay.style.display = "none"
        header.classList.remove('active');
        navigationBar.classList.remove('active');
        hamburgerMenu.style.backgroundImage = "url('../../public/images/hamburger-icon.png')";
        headerInner.style.backgroundColor = 'transparent';
        headerMenu.style.display = 'none';
        // 로고 및 메뉴명 상시 변경 없음
        logo.src = './public/logo.svg';
        headerText.forEach(text => {
            text.style.color = '#2D3439';
        });
    });
});

