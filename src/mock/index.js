import Mock from 'mockjs'
const { goods } = Mock.mock({
    'goods': {
        'pop|15': {
            'page': '@increment(1)',
            'list|7': [ "@image('100x40','#ffcc33','#FFF','png','流行')" ], //100x100的x是埃克斯,不要写成*,艹暴怒!!!
        },
        'new|15': {
            'page': '@increment(1)',
            'list|7': ["@image('100x40','#ff3333','#FFF','png','新款')" ],
        },
        'sell|15': {
            'page': '@increment(1)',
            'list|7': [ "@image('100x40','#ffff33','#FFF','png','精选')" ],
        }
    }
})
//从url中获得指定name参数的值
function getQuery(url, name) {
    const query = url.split('?') //query[1] = 'type=pop&page=1'
    const queryArr = query[1].split('&') //query[0]='type=pop'  query[1]='page=1'
    for (let i = 0; i < queryArr.length; i++) {
        const itemArr = queryArr[i].split('=')
        if (itemArr[0] === name) {
            return itemArr[1]
        }
    }
}
Mock.mock(/\/home\/data/, 'get', (options) => {
    const type = getQuery(options.url, 'type')
    const page = getQuery(options.url, 'page')
    let targetList = []
    if (type === 'pop')
        targetList = goods.pop.list
        // console.log(goods.pop.list);
    else if (type === 'new')
        targetList = goods.goods.new.list
    else
        targetList = goods.goods.sell.list
    return {
        status: 200,
        messaeg: '获取图片成功',
        list: targetList
    }
})