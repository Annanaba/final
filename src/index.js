import * as $ from 'jquery'
import Post from "@models/post"
// import json from './assets/json.json'
// import xml from './assets/data.xml'
// import csv from './assets/data.csv'
import Webpacklogo from './assets/webpack-logo.png'
import './styles/styles.css'
import './styles/scss.scss'

const post = new Post('Course', Webpacklogo)

$('pre').html(post.toString())


// console.log('json:', json)
// console.log('xml:', xml)
// console.log('csv:', csv)