//?Подключаем фреймворк для бэкенда
const express = require('express')
const jsonParser = express.json();
//?Подключаем фреймворк для БД
const mysql = require('mysql2')
const app = express()
const log = (n) => console.log(n)
app.use(express.static('public'))
const easyvk = require('easyvk')

//?Подключаем динамическую страницу и шаблонизатор
app.set('view engine', 'pug')

//?Событие создания сервера
app.listen(3000, function(){
    
})
log(1)

app.get(`/`, function(req, res) {
    res.render('cartopedia')
})

    // app.post('/getcard', jsonParser, (req, res) => {
    //     res.json('привет')
    //     if(req.body['to'] == 'prev'){
    //         res.json({
    //             id: card.id
                
    //         })
    //     }
        
    // })
app.post('/sm', jsonParser, (req, res) => {
    log('work')
    sendMessage()
})

const sendMessage = () =>{
    easyvk({
    token: 'vk1.a.xFDPiLlAFQeTbCw9n_iBFfl5wXgSWF63sgkfM0oi6NmrDErzoi0YlIPFrMQzcedwbHzB0OZ9DqVJRDwDCdiCYJ3sw3YiBaSLWBg8vBPYCNveUIB0lX3Ge_cY_NA9CXjYX9_GVakWJLsFcxCFqhi1HrF4axu49sSBNDkRysgX9GSueCcm0e8Zfxi0SQxkMVTEIXg5emGZS_SniTF88ho1Pw'
    }).then(async vk => {

    let peerId = 755709089 // ID получателя

    /** Отправляем сообщение */
    let response = await vk.call('messages.send', {
        peer_id: peerId,
        message: "Привет!",
        /** Получаем случайное число с привязкой к дате*/
        random_id: easyvk.randomId()
    })

    console.log(response) // Выводим ID отправленного сообщения
    })
}