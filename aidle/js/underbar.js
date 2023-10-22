// JavaScript 코드
document.addEventListener("DOMContentLoaded", function () {
    // 모든 메뉴 아이템을 가져옵니다.
    var menuItems = document.querySelectorAll(".nav-item");

    // 메뉴 아이템을 클릭할 때 "active" 클래스를 추가하고 하단 바를 표시합니다.
    menuItems.forEach(function (menuItem) {
        menuItem.addEventListener("click", function () {
            // 모든 메뉴 아이템에서 "active" 클래스를 제거합니다.
            menuItems.forEach(function (item) {
                item.classList.remove("active");
            });

            // 클릭한 메뉴 아이템에 "active" 클래스를 추가합니다.
            menuItem.classList.add("active");
        });
    });
});