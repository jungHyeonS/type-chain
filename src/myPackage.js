//@ts-check
/**
 * 프로젝트 초기화
 * @param {object} config 
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns {boolean}
 */
export function init(config){
    return true;
}


/**
 * Exit the program
 * @param {number} code 
 * @returns {number}
 */
export function exit(code){
    return code + 1;
}