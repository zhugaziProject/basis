const userArgv = require('optimist')
    .usage('Usage: $0 -i [instance name] -a [crawl|test|config|proxy|schedule]  -p [num] -l[url] -h')
    .options('i', {
        'alias' : 'instance',
        'default' : 'scheduler',
        'describe' : 'Specify a instance',
        'demand' : true
    })
    .options('a', {
        'alias' : 'action',
        'default' : 'scheduler',
        'describe' : 'Specify a action[crawl|test|config|proxy|schedule]',
        'demand' : true
    })
    .options('p', {
        'alias' : 'port',
        'default' : 2016,
        'describe' : 'Specify a service port, for config service and proxy router'
    })
    .options('h', {
        'alias' : 'help',
        'describe' : 'Help infomation'
    })
const options = userArgv.argv
if(options['h']){
    userArgv.showHelp()
    process.exit()
}

const xiaoming = () => {
    let start = new (require('./project/start'))('basis')
    start.start()
}

switch(options['a']){
    case 'xiaoming':
        xiaoming()
        break
    default:
        userArgv.showHelp()
}