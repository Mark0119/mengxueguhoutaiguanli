import request from "@/utils/request";

// 渲染数据
export function GetGoods(current,size){
    return request({
        url:`/goods/list/search/${current}/${size}`,
        method:'post',
    })
}
// // 查找数据
// export function FindGoods(data){
//     return request({
//         url:'/goods/list/search/1/20',
//         method:'post',
//         data
//     })
// }
// // 删除数据
// export function DelGoods(data){
//     return request({
//         url:'/goods/list/search/1/20',
//         method:'post',
//         data
//     })
// }
// // 新增数据
// export function AddGoods(data){
//     return request({
//         url:'/goods/list/search/1/20',
//         method:'post',
//         data
//     })
// }
// // 编辑数据
// export function RedactGoods(data){
//     return request({
//         url:'/goods/list/search/1/20',
//         method:'post',
//         data
//     })
// }

