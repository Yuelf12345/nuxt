const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

router.get('/getData',ctx=>{
    ctx.body='数据'
})
router.get('/user',ctx=>{
    let users = {
        name:'张三',
        age:18
    }
    ctx.body=users
})

app.use(router.routes())

app.listen(6060,()=>{
    console.log('服务器已启动,请访问http://localhost:6060/');
})