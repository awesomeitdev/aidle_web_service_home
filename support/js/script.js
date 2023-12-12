window.addEventListener("touchstart", function (e) { 
    if (e.target.matches('.button') || e.target.matches('.click_event')) {
        e.preventDefault();
    }
});

function isMobile() {
    console.log(window.innerWidth, "window.innerWidth");
    if (window.innerWidth < 700) {
        return true
    }
    return false
}

document.addEventListener('DOMContentLoaded', function () {
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



window.addEventListener('scroll', function () {
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




document.addEventListener("DOMContentLoaded", function () {
    // 페이지 로드 시 초기화
    // updateSectionBackground();
    // 화면 크기가 변경될 때마다 업데이트
    // window.addEventListener("resize", updateSectionBackground);
    // 새로고침 시 페이지의 가장 위로 이동
    window.addEventListener('beforeunload', () => {
        window.scrollTo(0, 0);
    });

    const button = document.querySelector('.button');
    const buttonList = document.querySelector('.button_list');
    const hamburgerMenu = document.querySelector('.hamburger_menu');
    const mobileMenuList = document.querySelector('.mobile-nav-list');
    const hamOverlay = document.querySelector('.hamburger_overlay');
    const touchButton = document.querySelectorAll(".click_event");

    document.querySelectorAll('#sidebar ul li').forEach(item => {
        item.addEventListener('touchstart', event => {
            event.preventDefault();
            document.querySelectorAll('#sidebar ul li').forEach(item => {
                item.classList.remove('active');
            });
    
            event.target.classList.add('active');
    
            const target = event.target.getAttribute('data-target');
    
            document.querySelectorAll('#content .content-item').forEach(item => {
                if(item.getAttribute('id') === target) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });



    // const install = document.getElementById('install')
    // const services = document.getElementById('services')

    // install.addEventListener('touchstart', function () {
    //     const target = install.getAttribute('data-target');
    //     services.classList.remove('active');
    //     install.classList.add('active');
    //     document.querySelectorAll('#content .content-item').forEach(item => {
    //         if (item.getAttribute('id') === target) {
    //             item.style.display = 'block';
    //         } else {
    //             item.style.display = 'none';
    //         }
    //     });
    // })
    // services.addEventListener('touchstart', function () {
    //     const target = services.getAttribute('data-target');
    //     install.classList.remove('active');

    //     services.classList.add('active');
    //     document.querySelectorAll('#content .content-item').forEach(item => {
    //         if (item.getAttribute('id') === target) {
    //             item.style.display = 'block';
    //         } else {
    //             item.style.display = 'none';
    //         }
    //     });
    // })

    touchButton.forEach(button => {
        button.addEventListener('touchstart', function (e) {
            var aTag = e.target.closest('a');
            if (aTag) {
                window.location.href = aTag.href;
            }
        });
    });

    button.addEventListener('click', function () {
        buttonList.classList.toggle('show_list');
        hamOverlay.classList.remove('active');
        mobileMenuList.classList.remove('active');
        hamburgerMenu.classList.remove('active');
    });
    

    hamburgerMenu.addEventListener('click', function () {
        console.log("click");
        hamburgerMenu.classList.toggle('active');
        hamOverlay.classList.toggle('active');
        mobileMenuList.classList.toggle('active');
        buttonList.classList.remove('show_list');

    });

});