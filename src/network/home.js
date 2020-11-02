import { request } from "./request";

export function getHomeMultidata(){
  return request({
    url:'/api/w6/home/multidata',
  })
}