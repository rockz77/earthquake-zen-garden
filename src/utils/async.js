import { SOURCE_LOCAL_DATA } from '../constants'

export const getSourceDataLocal = async() => {
    let sourceData = SOURCE_LOCAL_DATA.default;
    return JSON.stringify(sourceData)
}