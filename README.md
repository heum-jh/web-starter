# 50K, `반려동물 기반 커뮤니티 서비스`
> 해당 프로젝트는 [`web-starter`](https://github.com/heum-jh/web-starter)를 기반으로 하고있습니다.

## Features
<br/><br/><br/>
## Teck Stack
<br/><br/><br/>
## 환경설정
<br/><br/><br/>

<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

---

## web-starter 안내
## Features
* 👌 Authentication(with. cookies-next)
* ☀️ Dark/Light 테마(보류)
* 📦 Alert/Popup
* 📦 SEO
* ⚛️ Infinite Scroll/Pagination hook
* ⚛️ Outside Click hook


## Teck Stack
- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com/)
- [Apollo](https://www.apollographql.com/)
- [GraphQL](https://graphql.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org)
- [Prettier](https://prettier.io)

## Requirements
- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)

## 설치
1. Clone the repository:

   ```bash
    git clone git@github.com:caribjin/nextjs-apollo-boilerplate.git
   ```

1. Install dependent packages:

   ```bash
   yarn install
   ```

## 환경설정
1. `.env`의 환경변수 설정, 프로젝트의 GraphQL 서버의 경로에 맞춰 추가
2. `yarn generate` 명령어를 통해 graphql 갱신 (src/core/graphql에 최소 1개 이상의 .graphql 파일이 존재 해야함)

## 추가 환경설정
1. 프로젝트에 맞춰 `package.json` 파일의 `name`` 변경
2. 프로젝트에 맞춰 `_app.tsx` 파일의 meta data 설정
3. 프로젝트에 맞춰 `src/components/common`의 컴포넌트 파일 수정
4. `yarn generate` 명령어를 통해 `src/core/graphql/index.ts`가 생성이 되었다면 `src/core/function/upload-file.ts` 파일의 주석처리된 import를 해제 후 환경에 맞춰 수정

## [컴포넌트 설명](src/components/README.md)
## [Boilerplate 함수 설명](src/core/README.md)

## 개발모드 명령어
1. 개발모드에서 서비스 실행
    ```bash
    yarn dev
    ```
1. 배포를 위한 빌드
    ```bash
    yarn build
    ```
1. Apollo Server의 Schema 및 Apollo Client에서 만든 graphql 파일 적용
    ```bash
    yarn generate
    ```
## 코드검사 명령어
1. 빌드를 하기위해 코드검사
    ```bash
    yarn build:check
    ```
1. lint를 체크 하기위해 코드검사
    ```bash
    yarn lint:check
    ```
1. prettier 문법을 체크 하기위해 코드검사
    ```bash
    yarn format:check
    ```
1. prettier 문법 수정
    ```bash
    yarn fix:prettier
    ```
