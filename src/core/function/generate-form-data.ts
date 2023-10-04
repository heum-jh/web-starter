interface CompoundStringMap {
  [name: string]: string | string[] | null;
}
/*
 * 설명: form의 FormEvent의 target을 인자로 받아서 서버로 데이터를 전송할 때 형식을 객체 형식으로 만들어준다.
 * 기본적으로 input, textarea, select를 지원하고 `input과 select는 value값을, textarea는 textContent를 사용한다.`
 * input:
 * <input type="text" name="name" placeholder="이름을 입력해주세요." value="홍길동"/>
 * <textarea name="description" placeholder="자기소개를 입력해주세요." value="동에 번쩍 서에 번쩍, 아버지를 아버지라 부르지 못하는 홍길동"/>
 * <select name="age" value="20">
 *   <option value="" disabled>나이를 선택해주세요.</option>
 *   <option value="20">20</option>
 *   <option value="30">30</option>
 *   <option value="40">40</option>
 * </select>
 * <input type="checkbox" name="relationship" checked/>아빠
 * <input type="checkbox" name="relationship" checked/>엄마
 * <input type="checkbox" name="relationship"/>형제
 * <input type="checkbox" name="relationship"/>자매
 * output:
 *  {
 *    name : '홍길동',
 *    description : '동에 번쩍 서에 번쩍, 아버지를 아버지라 부르지 못하는 홍길동',
 *    age : 20,
 *    relationship : ["아빠", "엄마"]
 *  }
 */
export default function generateFormData(target: HTMLFormElement) {
  const elements = Array.from(target.elements);
  return elements
    .filter(element => element.hasAttribute("name"))
    .reduce((result: CompoundStringMap, control) => {
      const name = control.getAttribute("name");
      if (name == null) return result;
      let value: string | string[] | null = null;

      if (control instanceof HTMLInputElement) {
        if (control.type === "checkbox" && control.checked) {
          const res = result[name];
          if (res) {
            value = res.concat(control.value);
          } else {
            value = [control.value];
          }
          return { ...result, [name]: value };
        }
        if (control.type === "radio" && control.checked) {
          value = control.value;
          return { ...result, [name]: value };
        } else if (control.type !== "checkbox" && control.type !== "radio") {
          value = control.value;
          return { ...result, [name]: value };
        }
      } else if (control instanceof HTMLTextAreaElement) {
        value = control.value;
        if (value !== "") {
          return { ...result, [name]: value };
        }
      } else if (control instanceof HTMLSelectElement) {
        value = control.value;
        if (value !== "") {
          return { ...result, [name]: value };
        }
      }
      return result;
    }, {});
}
