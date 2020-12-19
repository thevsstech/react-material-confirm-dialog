import React from 'react'
// eslint-disable-next-line no-unused-vars
import type { DialogConfig } from './DialogContainer'
import DialogContainer from './DialogContainer'

type Props = {
  children: any
  confirmStyle?: React.CSSProperties
  cancelStyle?: React.CSSProperties
}

const ToastRef = React.createRef<DialogContainer>()

export function Dialog({ children, cancelStyle, confirmStyle }: Props) {
  return (
    <React.Fragment>
      {children}
      <DialogContainer
        cancelStyle={cancelStyle}
        confirmStyle={confirmStyle}
        ref={ToastRef}
      />
    </React.Fragment>
  )
}

const show = (config: DialogConfig) => ToastRef.current?.show(config)
const close = (after?: () => void) => ToastRef.current?.close(after)
// Dialog.show = show
// Dialog.close = close

export { show, close }
