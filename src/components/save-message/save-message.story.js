'use strict'

import React from 'react'
import {storiesOf} from '@kadira/storybook'
import SaveMessage from './index'

const stories = storiesOf('SaveMessage', module)

stories.add('SaveMessage with saving === null', () =>
  (
    <div style={{background: '#ccc'}}>
      Message: "<SaveMessage isSaving={null} />"
    </div>
  )
)

stories.add('SaveMessage with saving === true', () =>
  (
    <div style={{background: '#ccc'}}>
      Message: "<SaveMessage isSaving />"
    </div>
  )
)

stories.add('SaveMessage with saving === false', () =>
  (
    <div style={{background: '#ccc'}}>
      Message: "<SaveMessage isSaving={false} />"
    </div>
  )
)
