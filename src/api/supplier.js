import request from "@/utils/request";

// 渲染数据
export function GetSupplier(current,size){
    return request({
        url:`supplier/list/search/${current}/${size}`,
        method:'post',
    })
}
// // 查找数据
// export function FindSupplier(data){
//     return request({
//         url:'/member/list/search/1/20',
//         method:'post',
//         data
//     })
// }
// // 删除数据
export function DelSupplier(id){
    return request({
        url:`/supplier/${id}`,
        method:'DELETE',
    })
}
// // 新增数据
// export function AddSupplier(data){
//     return request({
//         url:'/member/list/search/1/20',
//         method:'post',
//         data
//     })
// }
// // 编辑数据
// export function RedactSupplier(data){
//     return request({
//         url:'/member/list/search/1/20',
//         method:'post',
//         data
//     })
// }

