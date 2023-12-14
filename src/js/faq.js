document.addEventListener("DOMContentLoaded", function () {
  /*   window.addEventListener("touchstart", function (e) { 
        if (e.target.matches('.button') || e.target.matches('.click_event')) {
            e.preventDefault();
        }
    }); */
    
    function isMobile() {
        if (window.innerWidth < 700) {
            return true
        }
        return false
    }       
        
    function performSearch() {
        var input, filter, ul, li, i, span, txtValue, filterType;
        input = document.getElementById('search');
        filter = input.value.trim().toUpperCase();
        ul = document.getElementById("list");
        li = ul.getElementsByTagName('li');
        filterType = document.getElementById('filter').value;

        // 활성화된 아이템 해제
        var activeItem = document.querySelector('.item.active');
        if (activeItem) {
            activeItem.classList.remove('active');
        }

        for (i = 0; i < li.length; i++) {
            span = li[i].getElementsByTagName('span')[0];
            txtValue = span.textContent || span.innerText;

            var shouldDisplay = false;
            if (filterType === 'title') {
                var textElement = li[i].getElementsByClassName('text')[0];
                var textValue = textElement.textContent || textElement.innerText;
                shouldDisplay = textValue.toUpperCase().includes(filter) && (selectedCategory === '전체' || txtValue === selectedCategory);
            } else { // filterType === 'titleAndContent'
                shouldDisplay = li[i].innerHTML.toUpperCase().includes(filter) && (selectedCategory === '전체' || txtValue === selectedCategory);
            }

            if (shouldDisplay) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    }

    document.getElementById('searchButton').addEventListener('click', performSearch);
    document.getElementById('search').addEventListener('keyup', function(e) {
        if (e.keyCode === 13) {  // 13은 엔터키의 키 코드.
            performSearch();
        }
    });

    // 아이템 활성화 기능
    var items = document.getElementsByClassName('item');

    for (var i = 0; i < items.length; i++) {
        items[i].addEventListener('click', function() {
            var activeItem = document.querySelector('.item.active');
            if (activeItem) {
                activeItem.classList.remove('active');
            }

            if (activeItem !== this) {
                this.classList.add('active');
            }
        });
    }

    document.getElementById('category').addEventListener('click', function(e) {
        if (e.target.tagName === 'LI') {
            selectedCategory = e.target.getAttribute('data-category');
            filterList(selectedCategory);
        }
    });

    function filterList(category) {
        var ul, li, i, span, txtValue;
        ul = document.getElementById("list");
        li = ul.getElementsByTagName('li');
        
        for (i = 0; i < li.length; i++) {
            span = li[i].getElementsByTagName('span')[0];
            txtValue = span.textContent || span.innerText;

            if (category === '전체' || txtValue === category) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    }

    filterList('전체');

    document.getElementById('category').addEventListener('click', function(e) {
        if (e.target.tagName === 'LI') {
            // 이전에 활성화된 카테고리 메뉴 아이템의 활성화 상태를 해제.
            var activeCategoryItem = document.querySelector('#category li.active');
            if (activeCategoryItem) {
                activeCategoryItem.classList.remove('active');
            }

            // 클릭된 카테고리 메뉴 아이템을 활성화함.
            e.target.classList.add('active');

            selectedCategory = e.target.getAttribute('data-category');
            filterList(selectedCategory);
        
            // 다른 카테고리 메뉴를 선택하면 활성화된 아이템을 자동으로 닫음.
            var activeItem = document.querySelector('.item.active');
            if (activeItem) {
                activeItem.classList.remove('active');
            }
        }
    });

    // 페이지가 로드될 때 "전체" 카테고리 메뉴 아이템을 찾아서 클릭 이벤트를 발생시킴.
    var allCategoryItem = document.querySelector('#category li[data-category="전체"]');
    if (allCategoryItem) {
        allCategoryItem.click();
    }
 
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

document.addEventListener("DOMContentLoaded", function () {
    // 페이지 로드 시 초기화

    // 화면 크기가 변경될 때마다 업데이트
    // window.addEventListener("resize", updateSectionBackground);
    // 새로고침 시 페이지의 가장 위로 이동
   

    const button = document.querySelector('.button');
    const buttonList = document.querySelector('.button_list');
    const hamburgerMenu = document.querySelector('.hamburger_menu');
    const mobileMenuList = document.querySelector('.mobile-nav-list');
    const hamOverlay = document.querySelector('.hamburger_overlay');
    const touchButton = document.querySelectorAll(".click_event");    
    const touchfab = document.getElementById("fab");
    
    document.querySelectorAll('#sidebar ul li').forEach(item => {
        item.addEventListener('touchstart', event => {
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

    // touchButton.forEach(button => {
    //     button.addEventListener('touchstart', function (e) {
    //         // 가장 가까운 a 태그를 찾습니다.
    //         var aTag = e.target.closest('a');
    //         if (aTag) {
    //             // a 태그의 href 속성을 이용해 현재 브라우저에서 링크를 연다
    //             window.location.href = aTag.href;
    //         }
    //     });
    // });

    button.addEventListener('click', function () {
        buttonList.classList.toggle('show_list');
        hamOverlay.classList.remove('active');
        mobileMenuList.classList.remove('active');
        hamburgerMenu.classList.remove('active');
    });

    hamburgerMenu.addEventListener('click', function () {
        hamburgerMenu.classList.toggle('active');
        hamOverlay.classList.toggle('active');
        mobileMenuList.classList.toggle('active');
        buttonList.classList.remove('show_list');

    });

    touchfab.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        currentSection = 1;    
    })

});
