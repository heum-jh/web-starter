# Boilerplate 기본 컴포넌트

## alert-provider.tsx
> 커스텀된 Alert를 사용하기 위해 사용
내장 javascript의 alert를 사용하지 않고 react-dom의 portal를 사용하여
별도의 레이어를 Alert 형태로 구현하기 위함

`_app.tsx`에서 해당 컴포넌트를 레이아웃을 구성하는 `Component`의 상위에서 사용해야함.

## popup-provider.tsx
> `Modal`, `Popup` 과 같은 별도의 레이아웃을 사용하기 위해 사용

`_app.tsx`에서 해당 컴포넌트를 레이아웃을 구성하는 `Component`의 상위에서 사용해야함.

## layout.tsx
> Next Js에서 전역적으로 레이아웃을 사용하기 위한 컴포넌트

`_app.tsx`에서 해당 컴포넌트를 레이아웃을 구성하는 `Component`를 감싸서 사용해야함.

## seo.tsx
> SEO와 관련된 `meta` 테그를 페이지별로 사용하기 위한 컴포넌트


|필수| Prop          | Type     | Description            |
|:-:|---------------| -------- | ---------------------- |
|   | title         | `string` | 브라우저의 Tab의 이름      |
|   | siteName      | `string` | 해당 사이트의 이름         |
|   | description   | `string` | 해당 사이트의 설명         |
|   | url           | `string` | 해당 사이트의 주소         |
|   | type          | `string` | 해당 사이트의 타입         |
|   | robots        | `string` | 해당 사이트의 robots 옵션  |
|   | image         | `string` | 해당 사이트의 파비콘 이미지  |

## temp-image.tsx
> `Next Js`에서 `Image`컴포넌트를 사용할 때 `src`가 필수적으로 필요하다.
프로젝트에 설정된 `next.config.ts`의 허용하는 이미지 경로를 설정하였고 (`via.placeholder.com`)
해당 이미지 경로를 기본값으로 설정한 컴포넌트

|필수| Prop   | Type                                 | Description                      |
|:-:|--------| ------------------------------------ | -------------------------------- |
| ✓ | width  | `number \| ${'number'} \| undefined` | 이미지의 넓이                       |
| ✓ | height | `number \| ${'number'} \| undefined` | 이미지의 높이                       |
|   | ...res | `ImageProps`                         | `Next Js`의 `Image` 컴포넌트 props |

## infinity-scroll.tsx
> 무한스크롤을 구현 시 사용하기 용이한 컴포넌트

|필수| Prop          | Type                       | Description                                    |
|:-:|---------------| -------------------------- | ---------------------------------------------- |
| ✓ | name          | `string`                   | 무한스크롤을 구현하는 요소의 name                     |
| ✓ | fetchMoreData | `() => Promise<void>`      | 무한스크롤이 발생할 때 데이터를 불러오기 위한 함수         |
| ✓ | children      | `React.ReactNode`          | 무한스크롤 내부 요소                                |
|   | hasNextPage   | `boolean`                  | 무한스크롤의 동작을 체크하기 위해 다음 페이지가 있음을 구분  |
|   | isLoading     | `boolean`                  | 무한스크롤이 동작에 대한 상태                         |
|   | options       | `IntersectionObserverInit` | `IntersectionObserverInit`의 수정 값             |