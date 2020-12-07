import React from 'react'

import  {Dialog, show}   from '@thevsstech/react-material-confirm-dialog'
import { Button } from '@material-ui/core'

const App = () => {
  return <Dialog>
    <Button  onClick={() => show({
      title: 'Use Google\'s location service',
      content: 'Let Google help apps determine location. This means sending anonymous location data to\n' +
        '            Google, even when no apps are running.',
      onConfirm: () => {
        console.log('called')
      }
    })}>
      show
    </Button>
  </Dialog>
}

export default App
