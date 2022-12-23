import { request } from './request.js'

export function getHomeMultidata() {
    console.log('发送');
    return request({
        url: 'home/multidata'
    })
}
//getHomeMultiData返回的是reuqest,是一个promise对象
