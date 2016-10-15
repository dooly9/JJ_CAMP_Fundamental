/** @function isDataType  데이터 유형을 올바르게 체크해주는 헬퍼 함수 */
function isDataType(data) {
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
}

/** @function checkDomElement   문서객체가 존재하는지 여부를 확인 함수 */
function checkDomElement(element) {
  if( isDataType(element) === 'null' ) {
    console.info('현재 문서에 선택하고자 하는 문서 요소객체는 존재하지 않습니다.');
  } else {
    console.log('<' + element.nodeName.toLowerCase() + '>는 문서 요소객체입니다.');
  }
}

// console {}
//  .log()   기록하다.
//  .info()  정보를 표시하다.
//  .error() 오류를 출력하다.
//  .dir()   분석하다.