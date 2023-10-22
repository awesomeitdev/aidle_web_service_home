// 페이지가 스크롤될 때 이벤트 처리
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    const content = document.querySelector('.content');

    // 배경색의 임계점 (예: 스크롤이 100px 이상되면 배경색 변경)
    const threshold = 100;

    // 현재 스크롤 위치 가져오기
    const scrollY = window.scrollY || window.pageYOffset;

    if (scrollY >= threshold) {
        // 스크롤 위치가 임계점 이상인 경우, 메뉴 폰트를 검정색으로 변경
        navbar.style.backgroundColor = 'white';
        navbar.style.color = 'black';
    } else {
        // 스크롤 위치가 임계점 미만인 경우, 메뉴 폰트를 화이트로 변경
        navbar.style.backgroundColor = 'black';
        navbar.style.color = 'white';
    }
});
