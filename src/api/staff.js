import request from "@/utils/request";

// 渲染数据
export function GetStaff(current,size){
    return request({
        url:`/staff/list/search/${current}/${size}`,
        method:'post',
    })
}
// // 查找数据
// export function FindStaff(data){
//     return request({
//         url:'/staff/list/search/1/20',
//         method:'post',
//         data
//     })
// }
// // 删除数据
export function DelStaff(id){
    return request({
        url:`/staff/${id}`,
        method:'DELETE',
    })
}
// // 新增数据
// export function AddStaff(data){
//     return request({
//         url:'/staff/list/search/1/20',
//         method:'post',
//         data
//     })
// }
// // 编辑数据
// export function RedactStaff(data){
//     return request({
//         url:'/staff/list/search/1/20',
//         method:'post',
//         data
//     })
// }

