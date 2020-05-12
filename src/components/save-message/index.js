'use strict'

import React from 'react'
import PropTypes from 'prop-types'

const SaveMessage = ({ isSaving }) => (
  isSaving !== null && isSaving !== undefined && (
    <h2 className='save-message'>
      {isSaving ? 'Saving...' : 'Save'}
    </h2>
    )
  )

SaveMessage.propTypes = {
  isSaving: PropTypes.bool
}

export default SaveMessage
