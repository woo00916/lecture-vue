const tag = '[View]'

export default {
  init(el) {//element를 자신의 property로?
    if (!el) throw el
    this.el = el
    return this
  },

  on(event, handler) {//뷰에서 발생하는 이벤트 처리 
    this.el.addEventListener(event, handler)
    return this
  },

  emit(event, data) {//이벤트 정의 방출
    const evt = new CustomEvent(event, { detail: data })
    this.el.dispatchEvent(evt)//?
    return this
  },

  hide() {
    this.el.style.display = 'none'
    return this
  },

  show() {
    this.el.style.display = ''
    return this
  }
}