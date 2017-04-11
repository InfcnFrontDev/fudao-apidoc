/**
 * @api {get} /RegionApi/getMyRegionList 获取区域列表
 * @apiVersion 2.0.0
 * @apiName getMyRegionList
 * @apiGroup Region
 * @apiPermission login
 *
 * @apiDescription 获取区域列表
 *
 * @apiHeader {String} access-key Users unique access-key.
 *
 * @apiParam {String}  city   城市名称（北京）
 *
 *
 * @apiSuccess {Boolean}    ok                  是否成功
 * @apiSuccess {Object[]}     obj                 区域列表
 *
 *
 * @apiError NoAccessRight 只有授权的用户可以访问数据。
 * @apiError UserNotFound   用户不存在。
 *
 * @apiErrorExample Response (example):
 *     HTTP/1.1 401 Not Authenticated
 *     {
 *         "ok": true,
 *         "obj": [
 *            "东城区",
 *            "西城区",
 *            "海淀区",
 *            "朝阳区",
 *            "丰台区",
 *            "崇文区",
 *            ...
 *         ]
 *     }
 */
function getMyRegionList() { return; }



/**
 * @api {get} /RegionApi/getCityList 获取城市列表
 * @apiVersion 2.0.0
 * @apiName getCityList
 * @apiGroup Region
 * @apiPermission login
 *
 * @apiDescription 获取城市列表
 *
 * @apiHeader {String} access-key Users unique access-key.
 *
 *
 * @apiSuccess {Boolean}    ok                  是否成功
 * @apiSuccess {Object}     obj                  列表
 * @apiSuccess {Object[]}  obj.cityName          城市列表
 * @apiSuccess {Number}    obj.page              当前页码
 * @apiSuccess {Number}    obj.pageSize          每页大小
 * @apiSuccess {Number}    obj.pageCount         总页数
 *
 *
 * @apiError NoAccessRight 只有授权的用户可以访问数据。
 * @apiError UserNotFound   用户不存在。
 *
 * @apiErrorExample Response (example):
 *     HTTP/1.1 401 Not Authenticated
 *     {
 *         "ok": true,
 *         "obj": {
 *            "cityName":[
 *                "北京",
 *                "上海",
 *                "深圳",
 *                "杭州",
 *                "重庆",
 *                "武汉",
 *                ...
 *            ],
 *            "page":1,
 *            "pageSize":10,
 *            "pageCount":5,
 *         }
 *     }
 */
function getCityList() { return; }

/**
 * @api {get} /RegionApi/getHotCityList 获取热门城市列表
 * @apiVersion 2.0.0
 * @apiName getHotCityList
 * @apiGroup Region
 * @apiPermission login
 *
 * @apiDescription 获取热门城市列表
 *
 * @apiHeader {String} access-key Users unique access-key.
 *
 * @apiParam {String} collectionId 收藏ID
 *
 * @apiSuccess {Boolean}    success         是否成功
 * @apiSuccess {object[]}    obj            热门城市列表
 *
 *
 * @apiError NoAccessRight 只有授权的用户可以访问数据。
 * @apiError UserNotFound   用户不存在。
 *
 * @apiErrorExample Response (example):
 *     HTTP/1.1 401 Not Authenticated
 *     {
 *         "success": true,
 *         "obj": [
 *            "北京",
 *            "上海",
 *            "深圳",
 *            "杭州",
 *            "重庆",
 *            "武汉",
 *            ...
 *         ]
 *     }
 */
function getHotCityList() { return; }