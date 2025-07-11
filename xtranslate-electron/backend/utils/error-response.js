const ERROR_CODE = {
  INTERFACE_CALL_FAIL: 400,
  METHOD_ERROR: 401,
  REQUEST_ERROR: 402
}

export function getInterfaceCallFailData(message) {
  return JSON.stringify({
    code: ERROR_CODE.INTERFACE_CALL_FAIL,
    status: '调用接口失败',
    message
  })
}

export function getMethodErrorData(message) {
  return JSON.stringify({
    code: ERROR_CODE.METHOD_ERROR,
    status: '方法错误',
    message
  })
}

export function getRequestErrorData(message) {
  return JSON.stringify({
    code: ERROR_CODE.REQUEST_ERROR,
    status: '请求错误',
    message
  })
}
