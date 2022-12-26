import { affixProps } from 'element-plus'
import { request} from './request.js'

export function getHomeMultidata() {
    return request({
        url: '/home/multidata'
    })
}
//getHomeMultiData返回的是reuqest,是一个promise对象

// export function getHomeGoods(type, page) {
//     axios.get('/home/data').then(
//         res => {
//             console.log(res);
//         }
//     )
// }
export function getHomeGoods(type,page){
    //该路径已经被mock拦截
    return request({
        url:'/home/data',
        params:{
            type,
            page
        }
    })
}
// http://123.207.32.32:8000/home/data?type=pop&page=1