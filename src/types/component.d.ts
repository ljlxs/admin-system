import PhoneCodeForm from './PhoneCodeForm'
declare module 'vue' {
  interface GlobalComponents {
    PhoneCodeForm: typeof PhoneCodeForm
  }
}
