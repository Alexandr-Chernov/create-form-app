export type NotificationStatus = 'end' | 'loading' | 'good' | 'error'

export interface CreateFormStatus {
  text: string
  status: NotificationStatus
}

export type Content = {
  [key in string]: string
}

export type FormTypes = 'question' | 'nameOfContact'

export interface Form {
  type: FormTypes
  content: Content | Content[] | string
}

export type FormsRouter = {
  [key in FormTypes]: (form: Form) => JSX.Element
}
