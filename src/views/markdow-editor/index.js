'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import Header from './header'
import Files from './files'

const MarkdownEditor = ({value, handleChange, getMarkup, textareaRef, handleOpenFile, files, ...props}) => (
  <div className='editor'>
    <Header {...props} handleChange={handleChange} />
    <Files handleOpenFile={handleOpenFile} files={files} />
    <textarea name='textarea' value={value} onChange={handleChange('value')} autoFocus ref={textareaRef} />
    <article className='view' dangerouslySetInnerHTML={getMarkup()} />
  </div>
)

MarkdownEditor.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  getMarkup: PropTypes.func.isRequired,
  textareaRef: PropTypes.func.isRequired
}

export default MarkdownEditor
