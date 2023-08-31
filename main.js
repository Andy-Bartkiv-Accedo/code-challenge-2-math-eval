const contTest = document.querySelector('.test-container');

const testActionArr = [];
TESTCASES.forEach((test, i) => {
  const divTest = document.createElement('div');
  divTest.setAttribute('class', 'test-case');
  const testStr = document.createElement('div');
  testStr.setAttribute('class', 'test-str');
  testStr.innerText = test.str;
  const testAction = document.createElement('div');
  testAction.setAttribute('class', 'test-action');
  testAction.setAttribute('id', `test-case-${i}`);
  testAction.innerText = "= ???";
  testActionArr.push(testAction);
  const testRes = document.createElement('div');
  testRes.setAttribute('class', 'test-res');
  testRes.innerText = test.res;
  divTest.appendChild(testStr);
  divTest.appendChild(testAction);
  divTest.appendChild(testRes);
  contTest.appendChild(divTest);
});

// Custom Test Section
const tagWrap = document.createElement('div');
tagWrap.setAttribute('class', 'tag-wrap');
const tagInner = document.createElement('div');
tagInner.setAttribute('class', 'inner-tag');
tagInner.innerText = "Custom Test Case";
tagWrap.appendChild(tagInner);
contTest.appendChild(tagWrap);

const customTestInput = document.createElement('form');
customTestInput.setAttribute('class', 'custom-test');
const testInput = document.createElement('input');
testInput.setAttribute('type', 'text');
testInput.setAttribute('placeholder', 'Write a valid math expression ...');
const testAct = document.createElement('div');
testAct.innerText = "=";
const testBtn = document.createElement('input');
testBtn.setAttribute('type', 'submit');
testBtn.setAttribute('value', 'calc');
customTestInput.appendChild(testInput);
customTestInput.appendChild(testAct);
customTestInput.appendChild(testBtn);
contTest.appendChild(customTestInput);

const customTest = document.createElement('div');
customTest.setAttribute('class', 'test-case');
const testStr = document.createElement('div');
testStr.setAttribute('class', 'test-str');
const testAction = document.createElement('div');
testAction.setAttribute('class', 'test-action');
const testRes = document.createElement('div');
testRes.setAttribute('class', 'test-res');
customTest.appendChild(testStr);
customTest.appendChild(testAct);
customTest.appendChild(testRes);
contTest.appendChild(customTest);

testBtn.addEventListener('click', (event) => {
  event.preventDefault();
  testStr.innerText = testInput.value;
  testRes.innerText = calc(testInput.value);
  testInput.value = "";
});

const calcAllBtn = document.querySelector('#calc-all');
calcAllBtn.addEventListener('click', () => {
  testActionArr.forEach((testAction, i) => {
    const res = calc(TESTCASES[i].str);
    testAction.innerText = `= ${res}`;
    testAction.classList.add(res === TESTCASES[i].res ? 'test-passed' : 'test-failed');
  })
  document.querySelector('input').focus();
});
