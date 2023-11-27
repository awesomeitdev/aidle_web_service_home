// 초기값 세팅
let currentSection = 1;
let isImageChanged = false;
let scrollCount = 0;
let touchStart = 0;
let touchEnd = 0;

window.addEventListener('touchstart', function (event) {
    touchStart = event.changedTouches[0].screenY;
}, false);

window.addEventListener('touchend', function (event) {
    touchEnd = event.changedTouches[0].screenY;
    handleTouchMove();
}, false);

function handleTouchMove() {
    const deltaY = touchEnd - touchStart;
    const event = { deltaY: deltaY };
    handleScroll(event);
}

// 윈도우 기본 휠이벤트 삭제
window.addEventListener("wheel", function (e) {
    e.preventDefault();
}, { passive: false });

var wheelTimer = new Date().getTime()

// 휠이벤트시 동작
window.addEventListener('wheel', handleScroll, false);

function handleScroll(event) {
    const current = new Date().getTime()
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const section1 = document.getElementById('section1');
    if (current - wheelTimer < 500) {
        return
    }

    wheelTimer = current
    const headerText = document.querySelectorAll(".header-nav-item-link-text");
    const logo = document.querySelector('.header-title img');
    const overlay = document.querySelector('#section3 .overlay');
    const section3_move_text1 = document.getElementById('section3_move_text1');
    const section3_move_text2 = document.getElementById('section3_move_text2');
    const overlay8 = document.querySelector('#section8 .overlay');
    const section8_move_text1 = document.getElementById('section8_move_text1');
    const section8_move_text2 = document.getElementById('section8_move_text2');
    const overlay11 = document.querySelector('#section11 .overlay');
    const section11_move_text1 = document.getElementById('section11_move_text1');
    const section11_move_text2 = document.getElementById('section11_move_text2');
    const overlay5 = document.querySelector('#section5 .overlay');
    const section5_move_text1 = document.getElementById('section5_move_text1');
    const section5_move_text2 = document.getElementById('section5_move_text2');
    const overlay14 = document.querySelector('#section11 .overlay');
    const section14_move_text1 = document.getElementById('section11_move_text1');
    const section14_move_text2 = document.getElementById('section11_move_text2');


    if (event.deltaY > 0) { //휠 아래로
        if (currentSection == 1 && !isImageChanged) { //첫번째 섹션
            // 조건이 맞으면 backgroundImage변경
            document.getElementById('section1').style.backgroundImage = "url('./public/images/main_background2.png')";
            isImageChanged = true;

            // 헤더 텍스트와 로고 변경
            headerText.forEach(text => {
                text.classList.add('background_white');
            });
            logo.src = './public/logo.svg'
            hamburgerMenu.style.backgroundImage = "url('./public/images/hamburger-icon-d.png')";
        } else if (currentSection == 3 && scrollCount < 1) { //3번째 섹션
            // 조건이 맞으면 헤더 텍스트와 로고 변경
            headerText.forEach(text => {
                text.classList.remove('background_white');
            });
            if (!header.classList.contains('active')) {
                logo.src = './public/logo_white.svg';
            }
            // overlay 효과주기
            overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
            // scrollCount 증가 시키고 다음 코드
            scrollCount++;

            if (scrollCount == 1) { //scrollCount 1일때 text 애니메이션
                section3_move_text1.style.animation = 'slide-up 1s forwards';
                section3_move_text1.style.opacity = 1;
                setTimeout(() => {
                    section3_move_text2.style.animation = 'slide-up 1s forwards';
                    section3_move_text2.style.opacity = 1;
                }, 500);
            }
        } else if (currentSection == 5 && scrollCount < 1) { //5번째 섹션
            // 조건이 맞으면 헤더 텍스트와 로고 변경
            headerText.forEach(text => {
                text.classList.remove('background_white');
            });
            logo.src = './public/logo_white.svg'
            hamburgerMenu.style.backgroundImage = "url('./public/images/hamburger-icon.png')";
            // overlay 효과주기
            overlay5.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
            // scrollCount2 증가 시키고 다음 코드
            scrollCount++;
            if (scrollCount == 1) { //scrollCount 1일때 text 애니메이션
                section5_move_text1.style.animation = 'slide-up 1s forwards';
                section5_move_text1.style.opacity = 1;
                setTimeout(() => {
                    section5_move_text2.style.animation = 'slide-up 1s forwards';
                    section5_move_text2.style.opacity = 1;
                }, 500);
            }
        } else if (currentSection == 8 && scrollCount < 1) { //8번째 섹션
            // 조건이 맞으면 헤더 텍스트와 로고 변경
            headerText.forEach(text => {
                text.classList.remove('background_white');
            });
            logo.src = './public/logo_white.svg'
            // overlay 효과주기
            overlay8.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
            // scrollCount2 증가 시키고 다음 코드
            scrollCount++;

            if (scrollCount == 1) { //scrollCount 1일때 text 애니메이션
                section8_move_text1.style.animation = 'slide-up 1s forwards';
                section8_move_text1.style.opacity = 1;
                setTimeout(() => {
                    section8_move_text2.style.animation = 'slide-up 1s forwards';
                    section8_move_text2.style.opacity = 1;
                }, 500);
            }
        } else if (currentSection == 11 && scrollCount < 1) { //11번째 섹션
            // 조건이 맞으면 헤더 텍스트와 로고 변경
            headerText.forEach(text => {
                text.classList.remove('background_white');
            });
            logo.src = './public/logo_white.svg'
            // overlay 효과주기
            overlay11.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
            // scrollCount2 증가 시키고 다음 코드
            scrollCount++;
            if (scrollCount == 1) { //scrollCount 1일때 text 애니메이션
                section11_move_text1.style.animation = 'slide-up 1s forwards';
                section11_move_text1.style.opacity = 1;
                setTimeout(() => {
                    section11_move_text2.style.animation = 'slide-up 1s forwards';
                    section11_move_text2.style.opacity = 1;
                }, 500);
            }
        } else if (currentSection == 14 && scrollCount < 1) { //11번째 섹션
            // 조건이 맞으면 헤더 텍스트와 로고 변경
            headerText.forEach(text => {
                text.classList.remove('text');
            });
            logo.src = './public/logo.svg'
            // overlay 효과주기
            overlay14.style.backgroundColor = 'linear-gradient(180deg, #FFF 0%, #EBEBFF 51.56%)';
            // scrollCount2 증가 시키고 다음 코드
            scrollCount++;
            if (scrollCount == 1) { //scrollCount 1일때 text 애니메이션
                section14_move_text1.style.animation = 'slide-up 1s forwards';
                section14_move_text1.style.opacity = 1;
                setTimeout(() => {
                    section14_move_text2.style.animation = 'slide-up 1s forwards';
                    section14_move_text2.style.opacity = 1;
                }, 500);
            }
        } else if (currentSection < 15) {
            // 조건이 맞으면 다음페이지
            currentSection++;
            // scrollCount 초기화
            scrollCount = 0;
            scrollToSection(currentSection);
        }
    } else if (event.deltaY < 0) { //휠 위로
        if (isImageChanged && currentSection == 1) {
            // 조건에 맞으면 배경이미지 변경
            document.getElementById('section1').style.backgroundImage = "url('./public/images/main_background1.png')";
            isImageChanged = false;
            // 헤더와 로고 변경
            if (!header.classList.contains('active')) {
                logo.src = './public/logo_white.svg';
            }
            headerText.forEach(text => {
                text.classList.remove('background_white');
            });

            hamburgerMenu.style.backgroundImage = "url('./public/images/hamburger-icon.png')";
        } else if (currentSection > 1) {
            // 페이지 벗어날시 초기값 세팅
            overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
            overlay8.style.backgroundColor = 'rgba(0, 0, 0, 0)';
            overlay5.style.backgroundColor = 'rgba(0, 0, 0, 0)';
            overlay11.style.backgroundColor = 'raba(0, 0, 0, 0)';

            section3_move_text1.style.animation = '';
            section3_move_text1.style.opacity = 0;
            section3_move_text2.style.animation = '';
            section3_move_text2.style.opacity = 0;

            section5_move_text1.style.animation = '';
            section5_move_text1.style.opacity = 0;
            section5_move_text2.style.animation = '';
            section5_move_text2.style.opacity = 0;

            section8_move_text1.style.animation = '';
            section8_move_text1.style.opacity = 0;
            section8_move_text2.style.animation = '';
            section8_move_text2.style.opacity = 0;

            section11_move_text1.style.animation = '';
            section11_move_text1.style.opacity = 0;
            section11_move_text2.style.animation = '';
            section11_move_text2.style.opacity = 0;

            currentSection--;
            scrollToSection(currentSection);
        }
    }
}

// 스크롤 효과
function scrollToSection(section) {
    const sectionElement = document.getElementById(`section${section}`);

    if (sectionElement) {
        window.scrollTo({
            top: sectionElement.offsetTop,
            behavior: 'smooth'
        });
    }
}

// 스크롤 이벤트시 발동
window.addEventListener('scroll', function () {
    const section2 = document.getElementById('section2');
    const section4 = document.getElementById('section4');
    const section6 = document.getElementById('section6');
    const section7 = document.getElementById('section7');
    const section9 = document.getElementById('section9');
    const section10 = document.getElementById('section10');
    const section12 = document.getElementById('section12');
    const section13 = document.getElementById('section13');
    const section14 = document.getElementById('section14');
    const ani_text2 = document.querySelectorAll('.ani_text_2');
    const ani_text2_img = document.querySelector('.ani_text_2_img');
    const ani_text4 = document.querySelectorAll('.ani_text_4');
    const ani_text4_img = document.querySelector('.ani_text_4_img');
    const ani_text6 = document.querySelectorAll('.ani_text_6');
    const ani_text6_img = document.querySelector('.ani_text_6_img');
    const ani_text7 = document.querySelectorAll('.ani_text_7');
    const ani_text7_img = document.querySelector('.ani_text_7_img');
    const ani_text9 = document.querySelectorAll('.ani_text_9');
    const ani_text9_img = document.querySelector('.ani_text_9_img');
    const ani_text10 = document.querySelectorAll('.ani_text_10');
    const ani_text10_img = document.querySelector('.ani_text_10_img');
    const ani_text12 = document.querySelectorAll('.ani_text_12');
    const ani_text12_img = document.querySelector('.ani_text_12_img');
    const ani_text13 = document.querySelectorAll('.ani_text_13');
    const ani_text13_img = document.querySelector('.ani_text_13_img');
    const ani_text14 = document.querySelectorAll('.ani_text_14');
    const ani_text14_1_img = document.querySelector('.ani_text_14_1_img');
    const ani_text14_2_img = document.querySelector('.ani_text_14_2_img');



    const headerText = document.querySelectorAll(".header-nav-item-link-text");
    const logo = document.querySelector('.header-title img');

    // 현재 스크롤 위치를 확인
    // const scrollPosition = window.scrollY;

    // 섹션2의 위치를 확인 2가지 방법
    const section2Position = section2.getBoundingClientRect().top;
    const section4Position = section4.getBoundingClientRect().top;
    const section6Position = section6.getBoundingClientRect().top;
    const section7Position = section7.getBoundingClientRect().top;
    const section9Position = section9.getBoundingClientRect().top;
    const section10Position = section10.getBoundingClientRect().top;
    const section12Position = section12.getBoundingClientRect().top;
    const section13Position = section13.getBoundingClientRect().top;
    const section14Position = section14.getBoundingClientRect().top;

    // const section2Position = section2.offsetTop;
    // const section4Position = section4.offsetTop;

    if (section2Position == 0) {
        // 조건에 맞으면 애니메이션 효과와 헤더 변경
        ani_text2.forEach((text) => {
            text.style.animation = 'slide-up 1s forwards, fade-in 2s forwards';
        });

        setTimeout(() => {
            ani_text2_img.style.animation = 'slide-up 1s forwards, fade-in 2s forwards';
        }, 300);

        headerText.forEach(text => {
            text.classList.add('background_white');
        });
        logo.src = './public/logo.svg'
    } else if (section2Position !== 0) {
        // 페이지 벗어나면 초기화
        ani_text2.forEach((text) => {
            text.style.animation = ''; // 애니메이션 속성을 초기화
            text.style.opacity = 0; // 텍스트가 보이지 않게 설정
            text.style.transform = 'translateY(10%)'; // 텍스트가 아래에 위치하게 설정
        })

        setTimeout(() => {
            ani_text2_img.style.animation = '';
            ani_text2_img.style.opacity = 0;
            ani_text2_img.style.transform = 'translateY(10%)';
        }, 300);
    }
    if (section4Position == 0) {
        // 조건에 맞으면 애니메이션
        ani_text4.forEach((text) => {
            text.style.animation = 'slide-up 1s forwards, fade-in 2s forwards';
        });

        setTimeout(() => {
            ani_text4_img.style.animation = 'slide-up 1s forwards, fade-in 2s forwards';
        }, 300); // 500밀리초(0.5초) 후에 이미지 애니메이션 시작

        headerText.forEach(text => {
            text.classList.add('background_white');
        });

        logo.src = './public/logo.svg'
    } else if (section4Position !== 0) {
        // 페이지 벗어나면 초기화
        ani_text4.forEach((text) => {
            text.style.animation = ''; // 애니메이션 속성을 초기화
            text.style.opacity = 0; // 텍스트가 보이지 않게 설정
            text.style.transform = 'translateY(10%)'; // 텍스트가 아래에 위치하게 설정
        });

        setTimeout(() => {
            ani_text4_img.style.animation = '';
            ani_text4_img.style.opacity = 0;
            ani_text4_img.style.transform = 'translateY(10%)';
        }, 300); // 500밀리초(0.5초) 후에 이미지 스타일 초기화
    }
    if (section6Position == 0) {
        // 조건에 맞으면 애니메이션
        ani_text6.forEach((text) => {
            text.style.animation = 'slide-up 1s forwards, fade-in 2s forwards';
        });

        setTimeout(() => {
            ani_text6_img.style.animation = 'slide-up 1s forwards, fade-in 2s forwards';
        }, 300);
        headerText.forEach(text => {
            text.classList.add('background_white');
        });
        logo.src = './public/logo.svg'
    } else if (section6Position !== 0) {
        // 페이지 벗어나면 초기화
        ani_text6.forEach((text) => {
            text.style.animation = ''; // 애니메이션 속성을 초기화
            text.style.opacity = 0; // 텍스트가 보이지 않게 설정
            text.style.transform = 'translateY(10%)'; // 텍스트가 아래에 위치하게 설정
        });

        setTimeout(() => {
            ani_text6_img.style.animation = '';
            ani_text6_img.style.opacity = 0;
            ani_text6_img.style.transform = 'translateY(10%)';
        }, 300);
    }

    if (section7Position == 0) {
        // 조건에 맞으면 애니메이션
        ani_text7.forEach((text) => {
            setTimeout(() => {
                text.style.animation = 'slide-up 1s forwards, fade-in 2s forwards';
            }, 300);
        });

        ani_text7_img.style.animation = 'slide-up 1s forwards, fade-in 2s forwards';


        headerText.forEach(text => {
            text.classList.add('background_white');
        });

        logo.src = './public/logo.svg';
    } else if (section7Position !== 0) {
        // 페이지 벗어나면 초기화
        ani_text7.forEach((text) => {
            text.style.animation = ''; // 애니메이션 속성을 초기화
            text.style.opacity = 0; // 텍스트가 보이지 않게 설정
            text.style.transform = 'translateY(10%)'; // 텍스트가 아래에 위치하게 설정
        });

        ani_text7_img.style.animation = '';
        ani_text7_img.style.opacity = 0;
        ani_text7_img.style.transform = 'translateY(10%)';
    }

    if (section9Position == 0) {
        // 조건에 맞으면 애니메이션
        ani_text9.forEach((text) => {
            text.style.animation = 'slide-up 1s forwards, fade-in 2s forwards';
        });

        setTimeout(() => {
            ani_text9_img.style.animation = 'slide-up 1s forwards, fade-in 2s forwards';
        }, 300);
        headerText.forEach(text => {
            text.classList.add('background_white');
        });
        logo.src = './public/logo.svg'
    } else if (section9Position !== 0) {
        // 페이지 벗어나면 초기화
        ani_text9.forEach((text) => {
            text.style.animation = ''; // 애니메이션 속성을 초기화
            text.style.opacity = 0; // 텍스트가 보이지 않게 설정
            text.style.transform = 'translateY(10%)'; // 텍스트가 아래에 위치하게 설정
        });

        setTimeout(() => {
            ani_text9_img.style.animation = '';
            ani_text9_img.style.opacity = 0;
            ani_text9_img.style.transform = 'translateY(10%)';
        }, 300);
    }

    if (section10Position == 0) {
        // 조건에 맞으면 애니메이션
        ani_text10.forEach((text) => {
            setTimeout(() => {
                text.style.animation = 'slide-up 1s forwards, fade-in 2s forwards';
            }, 300);
        });


        ani_text10_img.style.animation = 'slide-up 1s forwards, fade-in 2s forwards';

        headerText.forEach(text => {
            text.classList.add('background_white');
        });
        logo.src = './public/logo.svg'
    } else if (section10Position !== 0) {
        // 페이지 벗어나면 초기화
        ani_text10.forEach((text) => {
            text.style.animation = ''; // 애니메이션 속성을 초기화
            text.style.opacity = 0; // 텍스트가 보이지 않게 설정
            text.style.transform = 'translateY(10%)'; // 텍스트가 아래에 위치하게 설정
        });


        ani_text10_img.style.animation = '';
        ani_text10_img.style.opacity = 0;
        ani_text10_img.style.transform = 'translateY(10%)';
    }

    if (section12Position == 0) {
        // 조건에 맞으면 애니메이션
        ani_text12.forEach((text) => {
            text.style.animation = 'slide-up 1s forwards, fade-in 2s forwards';
        });

        setTimeout(() => {
            ani_text12_img.style.animation = 'slide-up 1s forwards, fade-in 2s forwards';
        }, 300);
        headerText.forEach(text => {
            text.classList.add('background_white');
        });
        logo.src = './public/logo.svg'
    } else if (section12Position !== 0) {
        // 페이지 벗어나면 초기화
        ani_text12.forEach((text) => {
            text.style.animation = ''; // 애니메이션 속성을 초기화
            text.style.opacity = 0; // 텍스트가 보이지 않게 설정
            text.style.transform = 'translateY(10%)'; // 텍스트가 아래에 위치하게 설정
        });

        setTimeout(() => {
            ani_text12_img.style.animation = '';
            ani_text12_img.style.opacity = 0;
            ani_text12_img.style.transform = 'translateY(10%)';
        }, 300);
    }

    if (section13Position == 0) {
        // 조건에 맞으면 애니메이션s
        ani_text13.forEach((text) => {
            setTimeout(() => {
                text.style.animation = 'slide-up 1s forwards, fade-in 2s forwards';
            }, 300);
        });

        ani_text13_img.style.animation = 'slide-up 1s forwards, fade-in 2s forwards';

        headerText.forEach(text => {
            text.classList.add('background_white');
        });
        logo.src = './public/logo.svg'
    } else if (section13Position !== 0) {
        // 페이지 벗어나면 초기화
        ani_text13.forEach((text) => {
            text.style.animation = ''; // 애니메이션 속성을 초기화
            text.style.opacity = 0; // 텍스트가 보이지 않게 설정
            text.style.transform = 'translateY(10%)'; // 텍스트가 아래에 위치하게 설정
        });

        ani_text13_img.style.animation = '';
        ani_text13_img.style.opacity = 0;
        ani_text13_img.style.transform = 'translateY(10%)';
    }
    if (section14Position == 0) {
        // 조건에 맞으면 애니메이션s
        ani_text14.forEach((text) => {
            setTimeout(() => {
                text.style.animation = 'slide-up 1s forwards, fade-in 2s forwards';
            }, 400);
        });

        ani_text14_1_img.style.animation = 'slide-up 1s forwards, fade-in 2s forwards';
        setTimeout(() => {
            ani_text14_2_img.style.animation = 'slide-down 1s forwards, fade-in 2s forwards';
        }, 200);

        headerText.forEach(text => {
            text.classList.add('background_white');
        });
        logo.src = './public/logo.svg'
    } else if (section14Position !== 0) {
        // 페이지 벗어나면 초기화
        ani_text14.forEach((text) => {
            text.style.animation = ''; // 애니메이션 속성을 초기화
            text.style.opacity = 0; // 텍스트가 보이지 않게 설정
            text.style.transform = 'translateY(10%)'; // 텍스트가 아래에 위치하게 설정
        });

    }
});

/*/ 헤더버튼 효과
document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector('.button');
    const buttonList = document.querySelector('.button_list')

    button.addEventListener('click', function () {
        buttonList.classList.toggle('show_list');
    })
})
*/
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




// 새로고침 시 페이지의 가장 위로 이동
window.addEventListener('beforeunload', () => {
    window.scrollTo(0, 0);
});



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
    function updateSectionBackground() {
        if (window.innerWidth >= 468) {
            console.log(window.innerWidth);
            document.getElementById('section1').style.backgroundImage = "url('./public/images/main_background2.png')";
        } else if (window.innerWidth < 468) {
            console.log(window.innerWidth);
            document.getElementById('section1').style.backgroundImage = "url('./public/images/main_background1.png')";
        }
    }

    // 페이지 로드 시 초기화
    updateSectionBackground();

    // 화면 크기가 변경될 때마다 업데이트
    window.addEventListener("resize", updateSectionBackground);
});