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

const Transition = React.forwardRef<unknown, TransitionProps>((props, ref) => {
  // @ts-ignore
  return <Slide direction='up' ref={ref} {...props} />
})

type Props = {
  title?: string
  visible: boolean
  confirm?: string
  onConfirm: () => void
  onClose: () => void
  cancel?: string
  content?: string
}

export default function ({
  title,
  onConfirm,
  visible,
  onClose,
  confirm,
  cancel = 'Cancel',
  content
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
        <Button onClick={onClose} color='primary'>
          {cancel}
        </Button>
        <Button variant='contained' onClick={onConfirm} color='primary'>
          {confirm}
        </Button>
      </DialogActions>
    </Dialog>
  )
}
