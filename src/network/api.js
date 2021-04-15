import {httpGet,httpPost} from './http'

export const getorglist = ({params = {}}) => httpGet({url : 'api/org/list',params});




