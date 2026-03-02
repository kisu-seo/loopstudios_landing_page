/**
 * @file script.js
 * @description Loopstudios 랜딩 페이지 — 모바일 전체화면 메뉴 토글 및 키보드 접근성 제어
 *
 * [이 파일이 하는 일]
 * 1. 모바일 햄버거(☰) / 닫기(✕) 버튼 클릭 이벤트를 감지합니다.
 * 2. CSS 클래스('is-open', 'menu-open')를 붙였다 떼어
 *    메뉴 슬라이드 애니메이션과 배경 스크롤 잠금을 제어합니다.
 * 3. ARIA 속성을 동기화하여 스크린 리더 사용자에게도
 *    메뉴의 열림/닫힘 상태를 정확히 전달합니다.
 * 4. ESC 키 이벤트를 처리하여 키보드만으로도 메뉴를 닫을 수 있게 합니다.
 *
 * [핵심 원리 (비유)]
 * 마치 가게 입구의 '열림/닫힘' 표지판처럼,
 * JS는 CSS 클래스('is-open', 'menu-open')를 붙였다 뗐다(classList 제어) 하는 역할만 합니다.
 * 실제 시각적 애니메이션은 모두 CSS(transition)가 처리합니다.
 *
 * [파일 간 관계]
 * - index.html: 제어 대상 요소의 id(hamburger-btn, close-btn, mobile-menu)를 정의
 * - style.css: .is-open 클래스가 붙으면 transform: translateX(0)으로 메뉴를 화면에 표시
 * - script.js (이 파일): 사용자 이벤트를 감지하여 위 클래스를 붙이거나 제거
 */


/* =====================================================
   1. DOM 요소 선택 (필요한 HTML 요소 불러오기)
   =====================================================
   연극 무대에서 필요한 소품을 미리 챙겨두듯,
   제어할 요소들을 변수에 저장해 둡니다.
*/

/** @type {HTMLButtonElement} 햄버거 버튼 (☰): 클릭하면 메뉴가 열림 */
const hamburgerBtn = document.getElementById('hamburger-btn');

/** @type {HTMLButtonElement} 닫기 버튼 (✕): 클릭하면 메뉴가 닫힘 */
const closeBtn = document.getElementById('close-btn');

/** @type {HTMLElement} 전체화면 메뉴 컨테이너: 'is-open' 클래스를 받는 대상 */
const mobileMenu = document.getElementById('mobile-menu');

/**
 * @type {NodeList} 메뉴 내부 링크 목록
 * querySelectorAll은 조건에 맞는 요소를 한꺼번에 가져옵니다 (배열과 유사한 NodeList).
 * 링크를 클릭해도 메뉴가 닫히도록 처리하기 위해 가져옵니다.
 */
const mobileMenuLinks = mobileMenu.querySelectorAll('.mobile-menu__link');


/* =====================================================
   2. 메뉴 열기 함수 (openMenu)
   =====================================================
   햄버거 버튼을 누르면 실행됩니다.
   '문을 여는 것'처럼 관련 요소들의 상태를 업데이트합니다.
*/

/**
 * 모바일 메뉴를 엽니다.
 *
 * [상태 변화와 결과]
 * 1. CSS: 'is-open' 클래스 추가
 *    → style.css의 .mobile-menu.is-open { transform: translateX(0); } 이 발동되어
 *      메뉴가 오른쪽 밖에서 화면 안으로 0.4초 동안 슬라이드인됩니다.
 *
 * 2. CSS: body에 'menu-open' 추가
 *    → style.css의 body.menu-open { overflow: hidden; } 이 발동되어
 *      메뉴가 열려있는 동안 배경 콘텐츠가 스크롤되지 않습니다.
 *      (메뉴 아래 페이지가 움직이면 사용자가 혼란스럽기 때문)
 *
 * 3. ARIA: mobileMenu의 aria-hidden → "false"
 *    → 스크린 리더가 이 메뉴 영역을 이제 읽을 수 있게 됩니다.
 *
 * 4. ARIA: hamburgerBtn의 aria-expanded → "true"
 *    → 스크린 리더가 "메뉴 열기 버튼, 펼쳐짐"으로 읽어줍니다.
 *
 * 5. Focus: 포커스를 닫기 버튼으로 이동
 *    → 키보드로 탭이동 중인 사용자가 메뉴가 열리는 순간
 *      자동으로 메뉴 안 첫 번째 상호작용 요소(닫기 버튼)로 초점이 이동합니다.
 *      메뉴가 열렸는데 포커스가 뒤에 숨겨진 배경에 남아있으면 사용자가
 *      어디에 있는지 알 수 없게 되기 때문입니다.
 */
function openMenu() {
    // 메뉴 컨테이너에 'is-open' 클래스 추가 → CSS가 메뉴를 화면에 슬라이드인
    mobileMenu.classList.add('is-open');

    // body에 'menu-open' 클래스 추가 → 배경 스크롤 방지
    document.body.classList.add('menu-open');

    // 스크린 리더에게 "이 메뉴가 이제 보여!" 알림
    mobileMenu.setAttribute('aria-hidden', 'false');

    // 햄버거 버튼이 "나는 지금 메뉴를 열었어"라고 스크린 리더에 알림
    hamburgerBtn.setAttribute('aria-expanded', 'true');

    // 키보드 사용자: 메뉴가 열리면 닫기 버튼으로 포커스 이동
    closeBtn.focus();
}


/* =====================================================
   3. 메뉴 닫기 함수 (closeMenu)
   =====================================================
   X 버튼, 링크 클릭, 또는 ESC 키 입력 시 실행됩니다.
   '문을 닫는 것'처럼 모든 상태를 원래대로 되돌립니다.
*/

/**
 * 모바일 메뉴를 닫습니다.
 *
 * [상태 변화와 결과]
 * 1. CSS: 'is-open' 클래스 제거
 *    → style.css의 transform: translateX(100%) 초기 상태로 되돌아가
 *      메뉴가 오른쪽 화면 밖으로 슬라이드아웃됩니다.
 *
 * 2. CSS: body에서 'menu-open' 제거
 *    → overflow: hidden이 해제되어 배경 스크롤이 다시 가능해집니다.
 *
 * 3. ARIA: mobileMenu의 aria-hidden → "true"
 *    → 스크린 리더가 이 영역을 다시 건너뜁니다.
 *
 * 4. ARIA: hamburgerBtn의 aria-expanded → "false"
 *    → 스크린 리더가 "메뉴 열기 버튼, 접힘"으로 읽어줍니다.
 *
 * 5. Focus: 포커스를 햄버거 버튼으로 복귀
 *    → 메뉴가 닫힌 후 키보드 사용자의 초점이 메뉴를 열었던 햄버거 버튼으로
 *      돌아갑니다. 이렇게 하지 않으면 포커스가 사라져서
 *      사용자가 계속 탭키를 눌러 페이지 처음부터 다시 시작해야 하는
 *      불편함이 생깁니다.
 */
function closeMenu() {
    // 'is-open' 클래스 제거 → CSS가 메뉴를 화면 밖으로 슬라이드아웃
    mobileMenu.classList.remove('is-open');

    // 'menu-open' 클래스 제거 → 배경 스크롤 다시 허용
    document.body.classList.remove('menu-open');

    // 스크린 리더에게 "이 메뉴는 이제 숨겨졌어" 알림
    mobileMenu.setAttribute('aria-hidden', 'true');

    // 햄버거 버튼이 "나는 지금 메뉴를 닫았어"라고 스크린 리더에 알림
    hamburgerBtn.setAttribute('aria-expanded', 'false');

    // 키보드 사용자: 메뉴가 닫히면 햄버거 버튼으로 포커스 복귀
    hamburgerBtn.focus();
}


/* =====================================================
   4. 이벤트 리스너 등록 (Event Listeners)
   =====================================================
   위에서 만든 함수들을 버튼 클릭 이벤트와 연결합니다.
   마치 초인종(버튼)과 문(함수)을 배선으로 연결하는 것과 같습니다.
*/

// 햄버거 버튼 클릭 → 메뉴 열기
hamburgerBtn.addEventListener('click', openMenu);

// 닫기 버튼 클릭 → 메뉴 닫기
closeBtn.addEventListener('click', closeMenu);

// 메뉴 링크 클릭 → 해당 섹션으로 이동 + 메뉴 닫기
// forEach: NodeList의 각 링크에 이벤트를 하나씩 연결하는 반복문
mobileMenuLinks.forEach(function (link) {
    link.addEventListener('click', closeMenu);
});


/* =====================================================
   5. ESC 키로 메뉴 닫기 (키보드 접근성)
   =====================================================
   마우스 없이 키보드만으로도 사이트를 이용할 수 있어야 합니다.
   ESC 키를 누르면 열려있는 메뉴가 닫히도록 처리합니다.
*/
document.addEventListener('keydown', function (event) {
    /*
      [조건문 심층 설명]
      if (event.key === 'Escape' && mobileMenu.classList.contains('is-open'))

      조건 ①: event.key === 'Escape'
        → 사용자가 키보드에서 누른 키가 'Escape'인지 확인합니다.
          웹 접근성 가이드라인(WCAG 2.1 SC 1.4.13)은 모달/오버레이가 열렸을 때
          ESC 키로 닫을 수 있어야 한다고 명시합니다.

      조건 ②: mobileMenu.classList.contains('is-open')
        → 메뉴가 현재 열려있는지 확인하는 '방어 로직'입니다.
          만약 이 조건 없이 ESC 키만 감지하면, 메뉴가 닫혀있는 상태에서도
          closeMenu()가 실행되어 hamburgerBtn.focus()가 불필요하게 호출됩니다.
          (사용자가 입력 필드에서 ESC를 누를 때처럼 전혀 무관한 상황에서도
          포커스가 햄버거 버튼으로 강제 이동되는 버그를 방지)

      두 조건을 &&(AND)로 묶어:
      "ESC를 눌렀고, 그 때 메뉴가 열려있을 때만" closeMenu를 실행합니다.
      → UX: 키보드 사용자가 메뉴 탐색 중 언제나 ESC 한 번으로 탈출 가능
      → 방어 로직: 메뉴가 닫혀있을 때는 아무 일도 일어나지 않음
    */
    if (event.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
        closeMenu();
    }
});
