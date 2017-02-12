const router = require('express').Router()
const path = require('path')

/* GET home page. */
const options = {
    root: path.resolve(__dirname, '../..') + '/basis/',
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
}
router.get('/', (req, res) => {
    res.sendFile('index.html', options, (err) => {
        if (err) {
            res.render('error', {error:err, message: '哦哦，页面飞了'})
        }
    })
})
router.get('/input', (req, res) => {
    res.sendFile('input.html', options, (err) => {
        if (err) {
            res.render('error', {error:err, message: '哦哦，页面飞了'})
        }
    })
})
router.get('/auth', (req, res) => {
    res.sendFile('auth.html', options, (err) => {
        if (err) {
            res.render('error', {error:err, message: '哦哦，页面飞了'})
        }
    })
})

module.exports = router
