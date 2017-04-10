/**
 * @api {get} /DynamicApi/getDynamicList 获取收藏列表
 * @apiVersion 2.0.0
 * @apiName getDynamicList
 * @apiGroup Dynamic
 * @apiPermission login
 *
 * @apiDescription 获取我的收藏列表。
 *
 * @apiHeader {String} access-key Users unique access-key.
 *
 * @apiParam {Integer} [page=1] 		当前页码
 * @apiParam {Integer} [pageSize=10] 	每页大小
 *
 * @apiSuccess {Boolean}    success               是否成功
 * @apiSuccess {Object}     obj                   资讯列表分页
 * @apiSuccess {Object[]}   obj.list              收藏列表
 * @apiSuccess {String}     obj.list.id           收藏ID
 * @apiSuccess {String}     obj.list.type         收藏类型，1：资讯，...
 * @apiSuccess {Date}       obj.list.createTime   收藏时间
 * @apiSuccess {Object}     obj.list.data         资讯
 * @apiSuccess {String}     obj.list.data.id           资讯ID
 * @apiSuccess {String}     obj.list.data.title        资讯标题
 * @apiSuccess {String}     obj.list.data.img          资讯图片
 * @apiSuccess {String}     obj.list.data.source       资讯来源
 * @apiSuccess {Date}       obj.list.data.createTime   资讯发表时间
 * @apiSuccess {Integer}    obj.page              当前页码
 * @apiSuccess {Integer}    obj.pageSize          每页大小
 * @apiSuccess {Integer}    obj.pageCount         总页数
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "success": true,
 *         "obj": [
 *             {
 *                 "id": "473a39e9-0fba-11e7-9b59-000c293e6828",
 *                 "type": 1,
 *                 "createTime": 1460651070000,
 *                 "data": {
 *                     "id": "473a39e9-0fba-11e7-9b59-000c293e6828",
 *                     "title": "日用品过期会引来一身病，99%的人不知道！",
 *                     "img": "zixun/1.1.jpg,zixun/1.2.jpg,zixun/1.3.jpg",
 *                     "source": "养生堂",
 *                     "createTime": 1460651070000
 *                 }
 *             },
 *             ...
 *         ]
 *     }
 */
function getMyDynamicList() { return; }

/**
 * @api {get} /DynamicApi/deleteDynamic 删除收藏
 * @apiVersion 2.0.0
 * @apiName deleteDynamic
 * @apiGroup Dynamic
 * @apiPermission login
 *
 * @apiDescription 删除指定的收藏。
 *
 * @apiHeader {String} access-key Users unique access-key.
 *
 * @apiParam {String} collectionId 收藏ID
 *
 * @apiSuccess {Boolean}    success         是否成功
 *
 * @apiError NoAccessRight 只有授权的用户可以访问数据。
 * @apiError UserNotFound   用户不存在。
 *
 * @apiErrorExample Response (example):
 *     HTTP/1.1 401 Not Authenticated
 *     {
 *       "error": "NoAccessRight"
 *     }
 */
function deleteDynamic() { return; }