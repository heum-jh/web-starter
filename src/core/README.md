# Boilerplate Core Folder

## function

### alert.ts
>browser의 기본 alert함수를 custom한 함수이다.
기본적으로 alert를 사용할 수 있고 confirm도 사용할 수 있다.
또한 필요에 따라서 custom을 사용하여 목적에 맞춰 수정할 수 있다.
`초기 clone시 alert-provider.tsx의 className을 수정하여 디자인을 변경 해줘야 한다.`
#### Alert.alert
|필수| Prop      | Type                  | Description                  |
|:-:|-----------| --------------------- | -----------------------------|
| ✓ | message   | `string`              | Alert에 사용되는 메시지 내용       |
|   | title     | `string`              | Alert에 사용되는 창의 제목         |
|   | options   | `AlertAlertOptions`   | Alert에 사용되는 버튼의 label     |

```typescript
interface AlertAlertOptions {
    confirmText?: string; // Alert에 사용되든 버튼의 label
}
```
#### Alert.confirm
|필수| Prop      | Type                  | Description                  |
|:-:|-----------| --------------------- | -----------------------------|
| ✓ | message   | `string`              | Confirm에 사용되는 메시지 내용     |
|   | title     | `string`              | Confirm에 사용되는 창의 제목       |
|   | options   | `AlertConfirmOptions` | Confirm에 사용되는 버튼의 label   |

```typescript
interface AlertConfirmOptions {
    confirmText?: string; // Confirm에 사용되든 True 버튼의 label
    cancelText?: string; // Confirm에 사용되든 False 버튼의 label
}
```
#### Alert.custom
|필수| Prop      | Type           | Description               |
|:-:|-----------| -------------- | --------------------------|
|   | options   | `AlertOptions` | Confirm에 사용되는 options   |

```typescript
interface AlertOptions {
    message: string; // Custom에 사용되는 메시지 내용
    title?: string; // Custom에 사용되는 창의 제목
    buttons?: AlertButtonOptions[]; // Custom의 버튼 Array
    onClose?: (result?: boolean) => void; // Custom을 종료할 때 발생하는 함수
}
```
```typescript
interface AlertButtonOptions {
  text: string; // 버튼의 label
  type: "confirm" | "cancel"; // 버튼의 type
  onClick?: () => void; // 버튼을 눌렀을 때 발생하는 함수
}
```


### cn.ts
> HTML요소의 className으로 Tailwind CSS를 사용하게 될 때
변수의 사용을 편하게 하고 Tailwind CSS의 순서에 따른 충돌 문제를 해결하고자 하는 함수
순서에 따라서 우선순위가 달라진다. (`inputs` 배열의 마지막에 위치한 값이 적용)

|필수| Prop      | Type                  | Description                              |
|:-:|-----------| --------------------- | -----------------------------------------|
| ✓ | inputs   | `ClassValue[]`         | Tailwind CSS와 변수 분기에 따른 Tailwind CSS |

### download-file.ts
> 서버로 부터 파일을 다운로드 할 때 사용
파일을 다운로드 할 때 서버에 따라 `GET` `POST` 방식을 수정 해야한다.

|필수| Prop      | Type                    | Description                  |
|:-:|-----------| ----------------------- | -----------------------------|
| ✓ | url       | `string`                | 파일을 다운로드하는 경로           |
| ✓ | filename  | `string`                | 파일을 다운로드할 때 사용할 파일명   |
|   | options   | `RequestInit` \| `null` | `fetch` 함수의 options        |

### upload-file.ts
> 서버로 파일을 업로드 할 때 사용
파일을 업로드 할 때 한개 혹은 한개 이상의 파일을 업로드, 파일 업로드 경로는 수정 해야한다.

|필수| Prop        | Type                                             | Description                         |
|:-:|-------------| ------------------------------------------------ | ------------------------------------|
| ✓ | targetFiles | `File[]`                                         | 업로드 할 파일들 graphql의 File 타입      |
|   | _context    | `Pick<GetServerSidePropsContext, "req" \| "res">` | GetServerSidePropsContext의 req, res |

### generate-form-data.ts
> HTML의 `<form>`를 사용할 때 `submit 이벤트`에서 form 내부의 요소들 중 `name`의 value를 가져옴

|필수| Prop      | Type                    | Description                  |
|:-:|-----------| ----------------------- | -----------------------------|
| ✓ | target    | `HTMLFormElement`       | submit의 event.currentTarget  |

```typescript
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const data = generateFormData(e.currentTarget);
    console.log(data.email) // admin@admin.com
    console.log(data.name) // 홍길동
}
```
```html
<form onSubmit={handleSubmit}>
    <input name="email" type="email" value="admin@admin.com"/>
    <input name="name" type="text" value="홍길동"/>
</form>
```

### is-server-side.ts
> SSR 환경에서 동작하는지 여부를 판단하기 위한 함수
```typescript
 const isServerSide:boolean = isServerSide();
```

### process-query-string.ts
> Query String을 사용할 때 `encode/decode`와 `trim` 처리를 하는 함수

#### processGetQueryString
|필수| Prop             | Type                            | Description                  |
|:-:|------------------| ------------------------------- | -----------------------------|
| ✓ | queryStringValue | `string | string[] | undefined` | encode된 query string을 decode  |

#### processSetQueryString
|필수| Prop     | Type      | Description                  |
|:-:|----------| --------- | -----------------------------|
| ✓ | value    | `string`  | submit의 event.currentTarget  |

## hooks

### use-infinite-scroll.tsx
> 무한 스크롤 구현 시 사용하는 프로세스를 hook으로 만들었습니다.
무한 스크롤을 체크할 수 있는 HTML 요소에 ref 값을 할당하여 사용할 수 있습니다.
무한 스크롤이 동작할 때 loading 상태값을 확인하여 이벤트 동작을 조절 할 수 있습니다.

|필수| Prop        | Type                        | Description                  |
|:-:|-------------| --------------------------- | -----------------------------|
| ✓ | onIntersect | `() => void`                | submit의 event.currentTarget  |
|   | options     | `IntersectionObserverInit`  | submit의 event.currentTarget  |

```typescript
// observerRef => 무한 스크롤을 체크 할 수 있는 ref
// isCurrentLoading => 무한 스크롤이 동작할 때 loading 상태값
  const [observerRef, isCurrentLoading] = useInfiniteScroll(async () => {
    if(!isCurrentLoading) {
        await fetchMore(); // 데이터를 추가로 불러오는 함수
    }
  }, options);
```

```HTML
<div>
    {...List}
    <div ref={observerRef}></div>
</div>
```

### use-outside-click.tsx
> 특정 HTML요소 외부를 클릭하였을 때 이벤트를 동작하는 hook

|필수| Prop     | Type                                        | Description                             |
|:-:|----------| ------------------------------------------- | ----------------------------------------|
| ✓ | ref      | `React.RefObject<T>`                        | 대상 HTML요소의 ref                        |
| ✓ | callback | `(event?: CustomEvent<MouseEvent>) => void` | 대상 HTML요소의 외부를 클릭했을 때 발생하는 이벤트 |

```typescript
useOutsideClick(ref, () => {
    console.log("a-block이 아닌 외부를 클릭했습니다.")
  });
```

```html
<div style={{width:'500px', height:'500px', background: 'black'}}>
    <div ref={ref} id="a-block" style={{width:'200px', height:'200px', background: 'red'}}>
        <h1>TITLE 1</h1>
        <p>Content 1</p>
    </div>
    <div id="b-block" style={{width:'200px', height:'200px', background: 'blue'}}>
        <h1>TITLE 2</h1>
        <p>Content 2</p>
    </div>
</div>
```

### use-pagination.tsx
> 페이지네이션 구현 시 사용하는 프로세스를 hook으로 만들었습니다.

|필수| Prop          | Type     | Description         |
|:-:|---------------| -------- | ------------------- |
| ✓ | viewPageRange | `number` | 화면에 보여질 페이지 수   |
| ✓ | totalCount    | `number` | 총 수량               |
| ✓ | offset        | `number` | 건너 뛸 수            |

```typescript
const { prevPage, nextPage, handleFirstClick, handleLastClick, handlePageChange, pageRange } = usePagination({ viewPageRange = 10, totalCount = 150, offset = 10});
```

```html
<div>
    <span onClick={handleFirstClick}>처음으로</span>
    <span onClick={prevPage}>이전</span>
    {pageRange.map(page => {
        return <span onClick={()=>handlePageChange(page)}>{page}</span>
    })}
    <span onClick={nextPage}>다음</span>
    <span onClick={handleLastClick}>마지막으로</span>
</div>
```

### use-popup.tsx
> popup을 사용하기 위한 프로세스를 hook으로 만들었습니다.

|필수| Prop   | Type                                | Description                           |
|:-:|--------| ----------------------------------- | ------------------------------------- |
| ✓ | render | `(close: () => void) => ReactNode)` | 화면에 그려질 요소와 이를 닫기 위한 close 함수  |

```typescript
const popup = usePopup(close => {
    return (
        <div style={{padding: '1rem 2rem'}}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <span>PopupTitle</span>
                <button type="button" onClick={close}>close</button>
            </div>
            <div>
                Content
            </div>
        </div>
    )
});
```

```html
<button type="button" onClick={() => popup.open()}>팝업 열기</button>
```