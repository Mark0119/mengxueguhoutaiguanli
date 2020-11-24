import request from "@/utils/request";

// 渲染数据
export function GetMember(current,size){
    return request({
        url:`/member/list/search/${current}/${size}`,
        method:'post',
    })
}
// // 查找数据
// export function FindMember(data){
//     return request({
//         url:'/member/list/search/1/20',
//         method:'post',
//         data
//     })
// }
// // 删除数据
export function DelMember(id){
    return request({
        url:`/member/${id}`,
        method:'DELETE',
    })
}
// // 新增数据
// export function AddMember(data){
//     return request({
//         url:'/member/list/search/1/20',
//         method:'post',
//         data
//     })
// }
// // 编辑数据
// export function RedactMember(data){
//     return request({
//         url:'/member/list/search/1/20',
//         method:'post',
//         data
//     })
// }

