export interface Label {
  labelValue: string
  action: 'operation' | 'clear' | 'digit'
  type: 'defaultButton' | 'doubleButton' | 'tripleButton'
}
