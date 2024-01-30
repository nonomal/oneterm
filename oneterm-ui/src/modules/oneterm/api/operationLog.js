import { axios } from '@/utils/request'

export function getOperationLogList(params) {
    return axios({
        url: `/oneterm/v1/history`,
        method: 'GET',
        params: params
    })
}

export function getResourceType(params) {
    return axios({
        url: `/oneterm/v1/history/type/mapping`,
        method: 'get',
        params: params
    })
}

export function getCiType() {
    return axios({
        url: 'v0.1/ci_types',
        method: 'get',
    })
}
