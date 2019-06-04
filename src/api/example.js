import request from './ajax'

/**
 * Example 获取电影列表
 * @param {page} page
 * @param {10} size
 */
export const getMovieList = page => request.get('/movie/getMovieList', {page})
