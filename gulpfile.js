'use strict'

const gulp = require('gulp')
const { spawn } = require('child_process')

// on windows, install and use `cross-spawn`:
// const { spawn } = require('cross-spawn')

gulp.task('lint', (cb) => {
  const cmd = spawn('yarn', ['lint'], { stdio: 'inherit' })
  cmd.on('close', () => cb())
})

gulp.task('default', gulp.series('lint', (done) => {
  gulp.watch('src/**/*.js', gulp.series('lint'))
  done()
}))
