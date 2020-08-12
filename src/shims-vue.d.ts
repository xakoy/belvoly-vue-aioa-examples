declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

declare let BM
interface Window {
  BM: any
}
