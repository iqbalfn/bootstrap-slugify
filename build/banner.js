'use strict'

const year = new Date().getFullYear()

function getBanner(pluginFilename) {
  return `/*!
  * Bootstrap Slugify v0.0.1 (https://iqbalfn.github.io/bootstrap-slugify/)
  * Copyright 2019 Iqbal Fauzi
  * Licensed under MIT (https://github.com/iqbalfn/bootstrap-slugify/blob/master/LICENSE)
  */`
}

module.exports = getBanner
