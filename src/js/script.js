// 초기값 세팅
let currentSection = 1;
let isImageChanged = false;
let scrollCount = 0;

// 윈도우 기본 휠이벤트 삭제
window.addEventListener("wheel", function (e) {
    e.preventDefault();
}, { passive: false });

// 휠이벤트시 동작
window.addEventListener('wheel', (event) => {
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


    if (event.deltaY > 0) { //휠 아래로
        if (currentSection == 1 && !isImageChanged) { //첫번째 섹션
            // 조건이 맞으면 backgroundImage변경
            if (++scrollCount == 4) { // 휠 이벤트가 4번 발생했을 때
                document.getElementById('section1').style.backgroundImage = "url('./public/images/main_background2.png')";
                isImageChanged = true;

            // 헤더 텍스트와 로고 변경
            headerText.forEach(text => {
                text.classList.add('background_white');
            });
            logo.src = './public/logo.svg'
                 
            scrollCount = 0; // 스크롤 카운트 초기화
          }
        }
        } else if (currentSection == 3 && scrollCount < 8) { //3번째 섹션
            // 조건이 맞으면 헤더 텍스트와 로고 변경
            if (++scrollCount == 4 || scrollCount == 8) { // 휠 이벤트가 4번 또는 8번 발생했을 때
                headerText.forEach(text => {
                text.classList.remove('background_white');
            });
            logo.src = './public/logo_white.svg'
            // overlay 효과주기
            overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';

            if (scrollCount == 4) { //scrollCount 4일때 text 애니메이션
                section3_move_text1.style.animation = 'slide-up 1s forwards';
                section3_move_text1.style.opacity = 1;
            } else if (scrollCount == 8) {
                //scrollCount 8일때 text 애니메이션
                section3_move_text2.style.animation = 'slide-up 1s forwards';
                section3_move_text2.style.opacity = 1;
                scrollCount = 0; // 스크롤 카운트 초기화
             }
            }
        } else if (currentSection == 5 && scrollCount < 8) { //5번째 섹션
            // 조건이 맞으면 헤더 텍스트와 로고 변경
            if (++scrollCount == 4 || scrollCount == 8) { // 휠 이벤트가 4번 또는 8번 발생했을 때
                headerText.forEach(text => {
                text.classList.remove('background_white');
            });
            logo.src = './public/logo_white.svg'
            // overlay 효과주기
            overlay5.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
                
            if (scrollCount == 4) { //scrollCount 4일때 text 애니메이션
                section5_move_text1.style.animation = 'slide-up 1s forwards';
                section5_move_text1.style.opacity = 1;
            } else if (scrollCount == 8) {
                //scrollCount 8일때 text 애니메이션
                section5_move_text2.style.animation = 'slide-up 1s forwards';
                section5_move_text2.style.opacity = 1;                
                scrollCount = 0; // 스크롤 카운트 초기화                
             }
           }
        } else if (currentSection == 8 && scrollCount < 8) { //8번째 섹션
            // 조건이 맞으면 헤더 텍스트와 로고 변경
                if (++scrollCount == 4 || scrollCount == 8) { // 휠 이벤트가 4번 또는 8번 발생했을 때
                headerText.forEach(text => {
                text.classList.remove('background_white');
            });
            logo.src = './public/logo_white.svg'
            // overlay 효과주기
            overlay8.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';

             if (scrollCount == 4) { //scrollCount 4일때 text 애니메이션
                section8_move_text1.style.animation = 'slide-up 1s forwards';
                section8_move_text1.style.opacity = 1;
            } else if (scrollCount == 8) {
                //scrollCount 8일때 text 애니메이션
                section8_move_text2.style.animation = 'slide-up 1s forwards';
                section8_move_text2.style.opacity = 1;
                scrollCount = 0; // 스크롤 카운트 초기화                
             }
            }
        } else if (currentSection == 11 && scrollCount < 8) { //11번째 섹션
            // 조건이 맞으면 헤더 텍스트와 로고 변경
            if (++scrollCount == 4 || scrollCount == 8) { // 휠 이벤트가 4번 또는 8번 발생했을 때
                headerText.forEach(text => {
                text.classList.remove('background_white');
            });
            logo.src = './public/logo_white.svg'
            // overlay 효과주기
            overlay11.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
                
            if (scrollCount == 4) { //scrollCount 4일때 text 애니메이션
                section11_move_text1.style.animation = 'slide-up 1s forwards';
                section11_move_text1.style.opacity = 1;
            } else if (scrollCount == 8) {
                //scrollCount 8일때 text 애니메이션
                section11_move_text2.style.animation = 'slide-up 1s forwards';
                section11_move_text2.style.opacity = 1;
                scrollCount = 0; // 스크롤 카운트 초기화       
            }
            }
        }else if (currentSection < 14) {
            // 조건이 맞으면 다음페이지
            currentSection++;
            // scrollCount 초기화
            scrollCount = 0;
            scrollToSection(currentSection);
        }
    } else if (event.deltaY < 0) { //휠 위로
       if (currentSection == 1 && isImageChanged) {
            if (++scrollCount == 4) { // 휠 이벤트가 4번 발생했을 때
                // 조건에 맞으면 배경이미지 변경
            document.getElementById('section1').style.backgroundImage = "url('./public/images/main_background1.png')";
            isImageChanged = false;
            // 헤더와 로고 변경
            headerText.forEach(text => {
                text.classList.remove('background_white');
            });
            logo.src = './public/logo_white.svg'
            scrollCount = 0; // 스크롤 카운트 초기화
             }
            }
        } else if (currentSection > 1) {
            if (++scrollCount == 4 || scrollCount == 8) { // 휠 이벤트가 4번 또는 8번 발생했을 때
            // 페이지 벗어날시 초기값 세팅
            overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
            overlay8.style.backgroundColor = 'rgba(0, 0, 0, 0)';
            overlay5.style.backgroundColor = 'rgba(0, 0, 0, 0)';
            overlay11.style.backgroundColor = 'rgba(0, 0, 0, 0)';
           
            

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
            if (scrollCount == 8) {
            scrollCount = 0; // 스크롤 카운트 초기화
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
            text.style.animation = 'slide-up 1s forwards, fade-in 2s forwards';
        });

     setTimeout(() => {  
        ani_text7_img.style.animation = 'slide-up 1s forwards, fade-in 2s forwards';
       }, 300); 
        headerText.forEach(text => {
            text.classList.add('background_white');
        });
        logo.src = './public/logo.svg'
    } else if (section7Position !== 0) {
        // 페이지 벗어나면 초기화
        ani_text7.forEach((text) => {
            text.style.animation = ''; // 애니메이션 속성을 초기화
            text.style.opacity = 0; // 텍스트가 보이지 않게 설정
            text.style.transform = 'translateY(10%)'; // 텍스트가 아래에 위치하게 설정
        });

     setTimeout(() => {
        ani_text7_img.style.animation = '';
        ani_text7_img.style.opacity = 0;
        ani_text7_img.style.transform = 'translateY(10%)';
    }, 300); 
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
            text.style.animation = 'slide-up 1s forwards, fade-in 2s forwards';
        });
       
      setTimeout(() => {    
        ani_text10_img.style.animation = 'slide-up 1s forwards, fade-in 2s forwards';
        }, 300); 
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
       
     setTimeout(() => {    
        ani_text10_img.style.animation = '';
        ani_text10_img.style.opacity = 0;
        ani_text10_img.style.transform = 'translateY(10%)';
    }, 300); 
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
            text.style.animation = 'slide-up 1s forwards, fade-in 2s forwards';
        });
       
     setTimeout(() => {      
         ani_text13_img.style.animation = 'slide-up 1s forwards, fade-in 2s forwards';
         }, 300); 
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
      
      setTimeout(() => {    
        ani_text13_img.style.animation = '';
        ani_text13_img.style.opacity = 0;
        ani_text13_img.style.transform = 'translateY(10%)';
    }, 300); 
}    
    // 다른방법
    /*    if (scrollPosition >= section2Position) {
           ani_texts.forEach((text) => {
               text.style.animation = 'slide-up 1s forwards, fade-in 2s forwards';
           });
       } else if (scrollPosition < section2Position) {
           ani_texts.forEach((text) => {
               text.style.animation = ''; // 애니메이션 속성을 초기화
               text.style.opacity = 0; // 텍스트가 보이지 않게 설정
               text.style.transform = 'translateY(10%)'; // 텍스트가 아래에 위치하게 설정
           })
       }
   
       if (scrollPosition >= section4Position) {
           ani_texts.forEach((text) => {
               text.style.animation = 'slide-up 1s forwards, fade-in 2s forwards';
           });
       } else if (scrollPosition < section4Position) {
           ani_texts.forEach((text) => {
               text.style.animation = ''; // 애니메이션 속성을 초기화
               text.style.opacity = 0; // 텍스트가 보이지 않게 설정
               text.style.transform = 'translateY(10%)'; // 텍스트가 아래에 위치하게 설정
           })
       } */

});

// 헤더버튼 효과
document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector('.button');
    const buttonList = document.querySelector('.button_list')

    button.addEventListener('click', function () {
        buttonList.classList.toggle('show_list');
    })
})

// 새로고침 시 페이지의 가장 위로 이동
window.addEventListener('beforeunload', () => {
    window.scrollTo(0, 0);
});
