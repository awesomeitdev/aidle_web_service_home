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
window.onload = function() {
    var allCategoryItem = document.querySelector('#category li[data-category="전체"]');
    if (allCategoryItem) {
        allCategoryItem.click();
    }
};

// 헤더버튼 효과
document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector('.button');
    const buttonList = document.querySelector('.button_list')

    button.addEventListener('click', function () {
        buttonList.classList.toggle('show_list');
    })
})






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





