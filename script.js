/**
 * script.js — Loopstudios 모바일 메뉴 토글 기능
 * =================================================
 * 이 파일의 역할:
 * 모바일 화면에서 햄버거(☰) 버튼을 누르면 전체 화면 메뉴가 열리고,
 * X 버튼이나 메뉴 링크를 누르면 메뉴가 닫히는 기능을 담당.
 *
 * 핵심 원리 (비유):
 * 마치 가게 입구의 '열림/닫힘' 표지판처럼,
 * JS는 CSS 클래스('is-open', 'menu-open')를 붙였다 뗐다(toggle) 하는 역할만 함.
 * 실제 보여주는 시각적인 변화는 모두 CSS가 처리해.
 */

/* ===================================================
   1. DOM 요소 선택 (필요한 HTML 요소 불러오기)
   ===================================================
   마치 연극 무대에서 필요한 소품을 미리 가져오듯,
   제어해야 할 요소들을 변수에 담아둠.
*/

// 햄버거 버튼 (☰): 클릭하면 메뉴가 열림
const hamburgerBtn = document.getElementById('hamburger-btn');

// 닫기 버튼 (✕): 클릭하면 메뉴가 닫힘
const closeBtn = document.getElementById('close-btn');

// 전체화면 메뉴 컨테이너: 열림/닫힘 클래스('is-open')를 받는 대상
const mobileMenu = document.getElementById('mobile-menu');

// 메뉴 내부 링크들: 링크를 클릭해도 메뉴가 닫히도록 처리
// querySelectorAll은 여러 개를 한꺼번에 가져옴 (NodeList 형태)
const mobileMenuLinks = mobileMenu.querySelectorAll('.mobile-menu__link');


/* ===================================================
   2. 메뉴 열기 함수 (openMenu)
   ===================================================
   햄버거 버튼을 누르면 실행되는 함수.
   '문을 여는 것'처럼 관련된 요소들의 상태를 업데이트함.
*/
function openMenu() {
  // 메뉴 컨테이너에 'is-open' 클래스를 추가 → CSS가 메뉴를 화면에 슬라이드인
  mobileMenu.classList.add('is-open');

  // body에 'menu-open' 클래스를 추가 → 배경 스크롤을 막음
  document.body.classList.add('menu-open');

  // aria-hidden="false": 스크린 리더에게 "이 메뉴가 이제 보여!"라고 알림
  mobileMenu.setAttribute('aria-hidden', 'false');

  // aria-expanded="true": 햄버거 버튼이 "나는 지금 메뉴를 열었어"라고 알림
  hamburgerBtn.setAttribute('aria-expanded', 'true');

  // 메뉴가 열리면 닫기 버튼으로 포커스를 이동 (키보드 사용자 접근성)
  closeBtn.focus();
}


/* ===================================================
   3. 메뉴 닫기 함수 (closeMenu)
   ===================================================
   X 버튼 또는 링크 클릭, ESC 키 입력 시 실행되는 함수.
   '문을 닫는 것'처럼 모든 상태를 원래대로 되돌림.
*/
function closeMenu() {
  // 'is-open' 클래스를 제거 → CSS가 메뉴를 화면 밖으로 슬라이드아웃
  mobileMenu.classList.remove('is-open');

  // 'menu-open' 클래스를 제거 → 배경 스크롤 다시 허용
  document.body.classList.remove('menu-open');

  // aria-hidden="true": 스크린 리더에게 "이 메뉴는 이제 숨겨졌어"라고 알림
  mobileMenu.setAttribute('aria-hidden', 'true');

  // aria-expanded="false": 햄버거 버튼이 "나는 지금 메뉴를 닫았어"라고 알림
  hamburgerBtn.setAttribute('aria-expanded', 'false');

  // 메뉴가 닫히면 햄버거 버튼으로 포커스를 되돌림 (키보드 사용자 편의)
  hamburgerBtn.focus();
}


/* ===================================================
   4. 이벤트 리스너 등록 (클릭 이벤트 연결)
   ===================================================
   위에서 만든 함수들을 버튼 클릭과 연결하는 단계.
   마치 초인종(버튼)과 문(함수)을 배선으로 연결하는 것.
*/

// 햄버거 버튼 클릭 → 메뉴 열기
hamburgerBtn.addEventListener('click', openMenu);

// 닫기 버튼 클릭 → 메뉴 닫기
closeBtn.addEventListener('click', closeMenu);

// 메뉴 링크 클릭 → 해당 섹션으로 이동 + 메뉴 닫기
// forEach: NodeList의 각 링크에 이벤트를 하나씩 연결하는 반복문
mobileMenuLinks.forEach(function(link) {
  link.addEventListener('click', closeMenu);
});


/* ===================================================
   5. 키보드 ESC 키로 메뉴 닫기 (접근성)
   ===================================================
   마우스가 없어도 키보드만으로 사이트를 이용할 수 있어야 함.
   ESC 키를 누르면 열려있는 메뉴가 닫히도록 처리.
*/
document.addEventListener('keydown', function(event) {
  // 누른 키가 'Escape'이고, 메뉴가 열려있는 상태일 때만 닫기
  if (event.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
    closeMenu();
  }
});
