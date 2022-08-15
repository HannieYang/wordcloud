// mock.js
// 引入mockjs
const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;
// mock新闻数据，包括新闻标题title、内容content、创建时间createdTime
// const produceNewsData = function () {
//     let newsList = []
//     for (let i = 0; i < 20; i++) {
//     let newNewsObject = {
//     title: Random.ctitle(), // Random.ctitle( min, max ) 随机产生一个中文标题，长度默认在3-7之间
//     content: Random.cparagraph(), // Random.cparagraph(min, max) 随机生成一个中文段落，段落里的句子个数默认3-7个
//     createdTime: Random.date() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；
//     }
//     newsList.push(newNewsObject)
//     }
//     return newList
// }
const dataOne = function(){
    let label_list = [];
    let label_list_1 = [];
    let label_list_2 = [];
    let label_list_3 = [];
    for(let i=0; i<100; i++){
        label_list.push({
            'name': Random.word(1,20),
            'cnt': Random.integer(1,5000)
        })
        label_list_1.push({
            'name': Random.word(1,20),
            'cnt': Random.integer(1,5000)
        })
        label_list_2.push({
            'name': Random.word(1,20),
            'cnt': Random.integer(1,5000)
        })
        label_list_3.push({
            'name': Random.word(1,20),
            'cnt': Random.integer(1,5000)
        })
    }
    const data = {
        'all':label_list,
        'transaction':label_list_1,
        'account':label_list_2,
        'block':label_list_3
    };
    return data
};
Random.extend({
    net: function() {
        var nets = ['ETH', 'BTC']
        return this.pick(nets)
    },
    category: function(){
        var categorys = ["transaction","account","token"]
        return this.pick(categorys)
    }
})
function dataTwo(res){
    if(res.label == '0'){
        return {
            'total':0,
            'result_list':[]
        }
    }
    let total = Random.integer(1,5000);
    let result_list = [];
    for(let i=0; i<res.page_size; i++){
        result_list.push({
            'id': Random.integer(20),
            'label': [res.label,res.label, res.label],
            'net': res.net=='ALL'?Random.net():res.net,
            'category': res.category=='all'?Random.category():res.category,
            'address': Random.word(30),
            'info':{
                'url': Random.url('https'),
                'nametag':Random.word(5,10),
                'balance':Random.integer(4)+' Ether',
                'TxnCount':Random.integer(3)
            }
        })
    }
    const data = {
        'total':total,
        'result_list':result_list
    }
    return data
}

// 请求该url，就可以返回newsList
Mock.mock(/\/mock\/one/, 'get', dataOne)
Mock.mock(/\/mock\/two/, 'post', function(options){
    console.log(options)
    return dataTwo(JSON.parse(options.body))
})