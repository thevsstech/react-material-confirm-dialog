// eslint-disable-next-line no-unused-vars
import React, { RefObject } from 'react'
import ConfirmationDialog from './ConfirmationDialog'

type Props = {
  ref: RefObject<DialogContainer>
}

export type DialogConfig = {
  title: string
  confirm?: string
  close?: string
  onConfirm: () => void
  onClose?: () => void
  content?: string
}

type State = {
  visible: boolean
  config: DialogConfig
}

export default class DialogContainer extends React.PureComponent<Props, State> {
  defaultConfig: DialogConfig = {
    title: '',
    confirm: 'OK',
    close: 'CANCEL',
    onConfirm: () => {},
    onClose: () => {}
  }

  props: Props
  state: State
  constructor(props: Props) {
    super(props)

    this.state = {
      visible: false,
      config: this.defaultConfig
    }
  }

  show = (config: DialogConfig) => {
    this.setState({
      visible: true,
      config: {
        ...this.state.config,
        ...config
      }
    })
  }

  close = (after?: () => void) => {
    this.setState(
      {
        visible: false,
        config: this.defaultConfig
      },
      after
    )
  }

  cancel = () => {
    this.close(() => {
      if (this.state.config.onClose) {
        this.state.config.onClose()
      }
    })
  }

  confirm = () => {
    this.close(() => {
      if (this.state.config.onConfirm) {
        this.state.config.onConfirm()
      }
    })
  }

  render() {
    return this.state.visible ? (
      <ConfirmationDialog
        visible={this.state.visible}
        {...this.state.config}
        onClose={this.cancel}
        onConfirm={this.confirm}
      />
    ) : null
  }
}
