# react-prj

## 프로젝트 내용

- Todo list 프로그램 기능 구현
- React-boilerplate-cra-template 기반으로 구현
- class101의 "React 로 웹 개발의 기초부터 프로덕션까지 :: To-Do, 메모앱 만들기" 강의를 바탕으로 구현

### 주요 기능

- Todo 추가/수정/삭제
- Todo 항목 완료 표시 토글
- Redux를 이용한 기능 구현
- LocalStorage를 이용한 데이터 저장

### 명령어

- 프로젝트 시작
  ```
  yarn start
  ```

## 프로젝트 구조

- .husky : 테스트 소스 관리. 커밋 시 해당 폴더의 `pre-commit`파일에 있는 스크립트를 이용하여 구현한 코드를 테스트(현재 사용 안함)
- .vscode : 해당 코드를 vscode 로 열때 프로젝트만을 위한 내부 설정을 정의한 파일
- internals : 템플릿에서 제공하는 유용한 스크립트를 담아두는 폴더
  - 공식문서에 컴포넌트 페이지 리덕스와 같을 파일을 자동으로 만들어주는 도구도 내재되어있다고 함(현재 사용 안함)
- node_modules : 해당 템플릿에서 사용하는 모든 라이브러리를 모아두는 폴더
  - react, redux 사용 중
- public :

  - 아이콘, 파비콘 :
  - manifast.json : pwa 개발시? 사용할 설정파일
  - robots.txt : 구글 검색엔진을 위한 파일

- .babel-plugin-macrosrc.js : babel이라는 라이브러리의 설정파일. (현재 사용 안함)
- .env.local : 프로젝트를 실행하거나 빌드할 떄 필요한 설정 값을 정의하는 환경변수 파일(개발버전)
- .env.production : 프로젝트를 실행하거나 빌드할 떄 필요한 설정 값을 정의하는 환경변수 파일(배포버전)
- .eslintrc.js : eslint 라이브러리의 설정파일
- .gitattributes : 파일별 설정(현재 사용 안함)
- .gitignore : git에서 무시할 파일을 설정. 설정 후 destate영역에도 나오지 않음.
- .npmrc : npm을 사용할 떄 설정하는 파일(현재 사용 안함)
- .nvmrc : 해당 프로젝트를 개발할 때 정확한 node 버전을 명시할 때 사용하는 파일(현재 사용 안함)
- .prettierignore : prettier 설정파일로 소스 검토 시 제외 파일 및 폴더 규칙 명시
- .prettierrc : prettier 설정파일로 소스 검토 규칙을 정의
- .stylelintrc : stylelint라이브러리의 설정파일(현재 사용 안함)
- package.json : 사용하는 라이브러리의 이름과 버전을 명시
  - 프로젝트의 주요 의존성과 그 버전 범위를 정의
- README.md : 템플릿 소개 글
- tsconfig.json : typescript를 위한 설정파일
- yarn.lock : 의존성의 정확한 버전을 고정하여 동일한 환경에서 패키지를 설치할 수 있도록 보장하는 파일

  - package.json에서 정의된 의존성의 정확한 버전과 그 하위 의존성의 버전을 고정

- src
  - app :
    - components : 컴포넌트 개발 폴더
    - pages : 화면단 개발 폴더
    - index.tsx : <br> - React 애플리케이션의 진입점.<br> - 여러 페이지를 연결하고 링크를 연결해주는 역할을 수행<br> - 페이지 타이틀을 자유롭게 변경할 수 있게한다...?
  - locales : 다국어 지원시 번역본과 설정파일을 두는 폴더(현재 사용 안함)
  - store : redux 개발 파일을 두는 폴더
  - styles :
    - global-styles.ts : 모든 페이지와 컴포넌트에 적용되는 css
    - 그 외 : 기본제공되는 파일과 테마파일
  - types : 해당 프로젝트에서 사용하는 type, interface를 모두 모아두는 폴더
  - utils : 템플릿에서 제공하는 유용한 함수들을 모아두는 폴더.(현재 사용 안함)
  - index.tsx : 가장 최상위 파일로 가장 기초가되는 파일. 라이브러리를 리액트프로젝트에 적용할 때 사용
