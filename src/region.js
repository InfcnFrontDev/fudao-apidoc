/**
 * @api {get} /RegionApi/getCountyList 获取区县列表
 * @apiVersion 2.0.0
 * @apiName getCountyList
 * @apiGroup Region
 *
 * @apiDescription 获取区县列表
 *
 * @apiParam {String}  city   城市名称或id（北京或110100）
 *
 * @apiSuccess {Boolean}    ok                  是否成功
 * @apiSuccess {Object[]}     obj                 区县列表
 * @apiSuccess {number}     obj.id                区县id
 * @apiSuccess {String}     obj.name            区县名称
 *
 *
 * @apiSuccessExample Response (example):
 *     HTTP/1.1 200 OK
 *     {
 *         "ok": true,
 *         "obj": [
 *            {
 *                 "id":110101,
 *                 "name":"东城区"
 *            },
 *            {
 *                 "id":110102,
 *                 "name":"西城区"
 *            }
 *            ...
 *         ]
 *     }
 */
function getCountyList() { return; }

/**
 * @api {get} /RegionApi/getCityList 获取城市列表
 * @apiVersion 2.0.0
 * @apiName getCityList
 * @apiGroup Region
 *
 * @apiDescription 获取城市列表
 *
 * @apiSuccess {Boolean}      ok                  是否成功
 * @apiSuccess {Object[]}     obj                 城市列表
 * @apiSuccess {Number}    obj.id                 城市id
 * @apiSuccess {String}    obj.name               城市名称
 * @apiSuccess {Boolean}    [obj.hot=false]       是否是热门城市
 *
 * @apiSuccessExample Response (example):
 *     HTTP/1.1 200 OK
 *     {
 *         "ok": true,
 *         "obj": [
 *            {
 *                 id:110101,
 *                 name:"北京",
 *                 hot:true
 *            },
 *            {
 *                 id:310000,
 *                 name:"上海"
 *                 hot:true
 *            },
 *            ...
 *         ]
 *     }
 *
 */
function getCityList() { return; }
