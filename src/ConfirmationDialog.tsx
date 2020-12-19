import Dialog from '@material-ui/core/Dialog'
// eslint-disable-next-line no-unused-vars
import { Button, DialogContent } from '@material-ui/core'
import React from 'react'
import DialogActions from '@material-ui/core/DialogActions'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContentText from '@material-ui/core/DialogContentText'
import Slide from '@material-ui/core/Slide'
// eslint-disable-next-line no-unused-vars
import { TransitionProps } from '@material-ui/core/transitions'
// eslint-disable-next-line no-unused-vars
import { DialogConfig } from './DialogContainer'

const Transition = React.forwardRef<unknown, TransitionProps>((props, ref) => {
  // @ts-ignore
  return <Slide direction='up' ref={ref} {...props} />
})

type Props = DialogConfig & {
  visible: boolean
  confirmStyle?: React.CSSProperties
  cancelStyle?: React.CSSProperties
}

export default function ({
  title,
  onConfirm,
  visible,
  onClose,
  confirm,
  close = 'Cancel',
  content,
  cancelStyle,
  confirmStyle
}: Props) {
  /* @ts-ignore */
  return (
    <Dialog
      open={visible}
      TransitionComponent={Transition}
      keepMounted
      onClose={onClose}
      aria-labelledby='alert-dialog-slide-title'
      aria-describedby='alert-dialog-slide-description'
    >
      <DialogTitle id='alert-dialog-slide-title'>{title}</DialogTitle>

      {content ? (
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            {content}
          </DialogContentText>
        </DialogContent>
      ) : null}
      {/* <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Let Google help apps determine location. This means sending anonymous location data to
          Google, even when no apps are running.
        </DialogContentText>
      </DialogContent> */}
      <DialogActions>
        <Button style={cancelStyle} onClick={onClose} color='primary'>
          {close}
        </Button>
        <Button
          style={confirmStyle}
          variant='contained'
          onClick={onConfirm}
          color='primary'
        >
          {confirm}
        </Button>
      </DialogActions>
    </Dialog>
  )
}
