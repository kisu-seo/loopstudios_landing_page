# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Tablet: 768px
- Desktop: 1024px

> 💡 These are just the design sizes. Ensure content is responsive and meets WCAG requirements by testing the full range of screen sizes from 320px to large screens.

## Colors

### Primary (주요 색상)

#### White (흰색)
- HEX: `#FFFFFF`
- RGB: `255, 255, 255`
- HSL: `hsl(0, 100%, 100%)`
- 용도: 텍스트, 배경, 버튼 오버레이 등 기본 밝은 요소에 사용

#### Black (검정색)
- HEX: `#000000`
- RGB: `0, 0, 0`
- HSL: `hsl(0, 0%, 0%)`
- 용도: 배경, 텍스트, 카드 오버레이 어두운 요소에 사용

### Neutral (중립 색상)

#### Grey 200 (연회색)
- HEX: `#D8D8D8`
- RGB: `216, 216, 216`
- HSL: `hsl(0, 0%, 85%)`
- 용도: 구분선, 비활성 상태, 보조 텍스트 등에 사용

### Blue (파란 계열)

#### Blue 100 (연파랑 - 진한)
- HEX: `#E5EAF1`
- RGB: `229, 234, 241`
- HSL: `hsl(215, 30%, 92%)`
- 용도: 카드 배경, 섹션 배경 등 은은한 파랑 톤에 사용

#### Blue 50 (연파랑 - 연한)
- HEX: `#F6FAFF`
- RGB: `246, 250, 255`
- HSL: `hsl(213, 100%, 98%)`
- 용도: 가장 밝은 파랑 계열로, 호버 상태나 강조 배경에 사용

### Gradient (그라디언트)

#### Gradient 1
- 방향: 왼쪽(0%) → 오른쪽(60%) 으로 점점 투명해지는 검정 그라디언트
- 시작 지점 (0%): `#000000` / `rgba(0, 0, 0, 1.0)` — 완전한 검정
- 끝 지점 (60%): `#000000` / `rgba(0, 0, 0, 0.6)` — 60% 투명도의 검정
- CSS 예시:
  ```css
  background: linear-gradient(to right, rgba(0, 0, 0, 1.0) 0%, rgba(0, 0, 0, 0.6) 60%);
  ```
- 용도: 이미지 카드 위에 텍스트가 잘 보이도록 씌우는 어두운 오버레이에 사용

## Typography

### 사용 폰트 (Font Families)

| 폰트 이름 | 굵기 | Google Fonts 링크 |
|-----------|------|-------------------|
| **Josefin Sans** | Light (300) | [Google Fonts - Josefin Sans](https://fonts.google.com/specimen/Josefin+Sans) |
| **Alata** | Regular (400) | [Google Fonts - Alata](https://fonts.google.com/specimen/Alata) |

> 💡 Josefin Sans는 주로 **제목(Heading)** 에, Alata는 **본문(Body)** 에 사용됩니다.  
> 두 폰트 모두 대문자(uppercase)와 잘 어울리는 깔끔한 산세리프(sans-serif) 계열입니다.

---

### Text Presets (텍스트 스타일 프리셋)

#### Text Preset 1 — 최대 제목 (Hero Heading)
- **폰트**: Josefin Sans Light (Weight: 300)
- **크기**: `72px`
- **줄 높이 (Line Height)**: `100%` → `line-height: 1`
- **자간 (Letter Spacing)**: `0px`
- **특징**: 전부 대문자(uppercase), 페이지 최상단 영웅(Hero) 영역 제목에 사용

#### Text Preset 2 — 대형 섹션 제목
- **폰트**: Josefin Sans Light (Weight: 300)
- **크기**: `48px`
- **줄 높이 (Line Height)**: `100%` → `line-height: 1`
- **자간 (Letter Spacing)**: `0px`
- **특징**: 전부 대문자(uppercase), 주요 섹션 제목에 사용

#### Text Preset 3 — 중형 섹션 제목
- **폰트**: Josefin Sans Light (Weight: 300)
- **크기**: `40px`
- **줄 높이 (Line Height)**: `100%` → `line-height: 1`
- **자간 (Letter Spacing)**: `0px`
- **특징**: 전부 대문자(uppercase), 서브 섹션 제목에 사용

#### Text Preset 4 — 소형 섹션 제목
- **폰트**: Josefin Sans Light (Weight: 300)
- **크기**: `32px`
- **줄 높이 (Line Height)**: `100%` → `line-height: 1`
- **자간 (Letter Spacing)**: `0px`
- **특징**: 전부 대문자(uppercase), 카드 또는 작은 섹션 제목에 사용

#### Text Preset 5 — 최소 제목
- **폰트**: Josefin Sans Light (Weight: 300)
- **크기**: `24px`
- **줄 높이 (Line Height)**: `100%` → `line-height: 1`
- **자간 (Letter Spacing)**: `0px`
- **특징**: 전부 대문자(uppercase), 가장 작은 크기의 제목에 사용

#### Text Preset 6 — 본문 텍스트 (Body Copy)
- **폰트**: Alata Regular (Weight: 400)
- **크기**: `15px`
- **줄 높이 (Line Height)**: `165%` → `line-height: 1.65`
- **자간 (Letter Spacing)**: `0px`
- **특징**: 일반 본문에 사용. 줄 높이가 넉넉해서 가독성이 높음

#### Text Preset 7 — 내비게이션 / 라벨
- **폰트**: Alata Regular (Weight: 400)
- **크기**: `14px`
- **줄 높이 (Line Height)**: `100%` → `line-height: 1`
- **자간 (Letter Spacing)**: `5px`
- **특징**: 자간(letter-spacing)이 5px로 넓어 내비게이션, 버튼 라벨, 태그 등에 사용

## Spacing (간격 시스템)

> 💡 이 프로젝트의 간격은 모두 **8px 배수 체계(8-point grid system)** 를 기반으로 합니다.  
> 마치 눈금자처럼 일정한 기준으로 여백을 맞추면, 디자인이 통일감 있고 깔끔하게 보여요.

### 간격 토큰 (Spacing Tokens)

| 토큰 이름 | 픽셀 값 | rem 값 | 주요 용도 |
|-----------|---------|--------|----------|
| `spacing-0` | `0px` | `0rem` | 여백 초기화, 기본값 제거 |
| `spacing-100` | `8px` | `0.5rem` | 아이콘과 텍스트 사이 등 아주 작은 간격 |
| `spacing-200` | `16px` | `1rem` | 버튼 패딩, 항목 간 기본 간격 |
| `spacing-300` | `24px` | `1.5rem` | 카드 내부 패딩, 섹션 내 요소 간격 |
| `spacing-400` | `32px` | `2rem` | 섹션 내부 상하 여백, 중형 간격 |
| `spacing-500` | `40px` | `2.5rem` | 섹션 간 여백, 대형 컴포넌트 패딩 |
| `spacing-600` | `48px` | `3rem` | 섹션 상하 여백, 헤더/푸터 패딩 |
| `spacing-800` | `64px` | `4rem` | 주요 섹션 간 구분 여백 |
| `spacing-1000` | `80px` | `5rem` | 페이지 최상단/최하단 대형 여백 |

> ⚠️ **주의**: `spacing-700`과 `spacing-900`은 이 디자인 시스템에 존재하지 않습니다.  
> 700과 900을 건너뛴 것은 의도적인 설계입니다 — 중간 크기가 필요 없는 디자인이에요.

### CSS 변수 선언 예시

```css
:root {
  --spacing-0:    0px;    /* 여백 없음 */
  --spacing-100:  8px;    /* XS - 아주 작은 간격 */
  --spacing-200:  16px;   /* SM - 작은 간격 */
  --spacing-300:  24px;   /* MD - 중간 간격 */
  --spacing-400:  32px;   /* LG - 큰 간격 */
  --spacing-500:  40px;   /* XL - 더 큰 간격 */
  --spacing-600:  48px;   /* 2XL - 섹션 패딩 */
  --spacing-800:  64px;   /* 3XL - 섹션 구분 */
  --spacing-1000: 80px;   /* 4XL - 페이지 최대 여백 */
}
```

## Icons


We provide the required social icons. But, if you prefer, you can use a font icon library. Some suggestions can be found below:

- [Font Awesome](https://fontawesome.com)
- [IcoMoon](https://icomoon.io)
- [Ionicons](https://ionicons.com)