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

    // 헤더버튼 효과
    const button = document.querySelector('.button');
    const buttonList = document.querySelector('.button_list')

    button.addEventListener('click', function () {
        buttonList.classList.toggle('show_list');
    })
});
