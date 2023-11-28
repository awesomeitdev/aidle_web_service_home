document.addEventListener("DOMContentLoaded", function () {
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
