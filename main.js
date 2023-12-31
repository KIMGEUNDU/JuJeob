import { jujeobData } from "./data/data.js";

import {
  shake,
  getNode,
  addClass,
  showAlert,
  getRandom,
  insertLast,
  removeClass,
  clearContents,
  isNumericString,
  toggleClass,
  copy,
} from "./lib/index.js";

// [phase-1]
// 1. 주접 떨기 버튼을 클릭할 수 있는 핸들러를 연결해 주세요.
// 2. nameField에 있는 값을 가져와 주세요.
// 3. jujeob 데이터 가져오기
// 4. jujeobData에서 랜덤한 주접 한개를 가져와야함.
// 5. pick 항목을 result에 랜더링해 주세요.

// [phase-2]
// 1. 아무 값도 입력 받지 못했을 때 예외처리
// 2. 공백 문자를 받았을 때 예외처리  replace => regEXP
// 3. 숫자형 문자를 받았을 때 (e.g  123, 기안84)

const submit = getNode("#submit");
const nameField = getNode("#nameField");
const result = getNode(".result");
const data = jujeobData.name.length - 1;

function handleSubmit(e) {
  e.preventDefault();
  let name = nameField.value;
  let count = parseInt(Math.random() * data);
  const dataName = jujeobData(name)[count];

  if (!name || name.replace(/\s*/g, "") === "") {
    showAlert(".alert-error", "이름을 입력해주세요", 2000);

    shake.restart();
    return;
  }

  if (!isNumericString(name)) {
    showAlert(".alert-error", "제대로된 이름을 입력 해주세요!!", 2000);

    shake.restart();

    return;
  }

  result.textContent = dataName;
}

function handleCopy() {
  let text = result.textContent;
  let state = false;

  if (isNumericString(nameField.value)) {
    copy(text).then(() => showAlert(".alert-success", "클립보드 복사 완료!"));
  } else {
    showAlert(".alert-error", "이름을 입력해주세욧!!", 2000);
  }
}

submit.addEventListener("click", handleSubmit);
result.addEventListener("click", handleCopy);
