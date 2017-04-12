/**
 * @api {get} /CollectionApi/getCollectionList 获取收藏列表
 * @apiVersion 2.0.0
 * @apiName getCollectionList
 * @apiGroup Collection
 * @apiPermission login
 *
 * @apiDescription 获取当前用户的收藏列表。
 *
 * @apiUse AuthenticatedHeader
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
 * @apiSuccess {Object}     obj.list.article         资讯
 * @apiSuccess {String}     obj.list.article.id           资讯ID
 * @apiSuccess {String}     obj.list.article.title        资讯标题
 * @apiSuccess {String}     obj.list.article.img          资讯图片
 * @apiSuccess {String}     obj.list.article.source       资讯来源
 * @apiSuccess {Date}       obj.list.article.createTime   资讯发表时间
 * @apiSuccess {Integer}    obj.page              当前页码
 * @apiSuccess {Integer}    obj.pageSize          每页大小
 * @apiSuccess {Integer}    obj.pageCount         总页数
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "success": true,
 *         "obj":
 *             "list": [
 *                 {
 *                     "id": "473a39e9-0fba-11e7-9b59-000c293e6828",
 *                     "type": 1,
 *                     "createTime": 1460651070000,
 *                     "article": {
 *                         "id": "473a39e9-0fba-11e7-9b59-000c293e6828",
 *                         "title": "日用品过期会引来一身病，99%的人不知道！",
 *                         "img": "zixun/1.1.jpg,zixun/1.2.jpg,zixun/1.3.jpg",
 *                         "source": "养生堂",
 *                         "createTime": 1460651070000
 *                     }
 *                 },
 *                 ...
 *             ],
 *             "page": 1,
 *             "pageSize": 10,
 *             "pageCount": 5
 *         }
 *     }
 *
 * @apiUse AuthenticatedError
 *
 */
function getCollectionList() { return; }

/**
 * @api {get} /CollectionApi/deleteCollection 删除收藏
 * @apiVersion 2.0.0
 * @apiName deleteCollection
 * @apiGroup Collection
 * @apiPermission login
 *
 * @apiDescription 用户从我的收藏中删除指定的收藏。
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {String} id 收藏ID
 *
 * @apiSuccess {Boolean}    success         是否成功
 *
 * @apiUse AuthenticatedError
 *
 */
function deleteCollection() { return; }


/**
 * @api {get} /CollectionApi/addCollection 添加收藏
 * @apiVersion 2.0.0
 * @apiName addCollection
 * @apiGroup Collection
 * @apiPermission login
 *
 * @apiDescription 用户添加资讯/动态等到我的收藏。
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {Number} type 类型，1：资讯，...
 * @apiParam {String} sourceId 对象ID
 *
 * @apiSuccess {Boolean}    success         是否成功
 *
 * @apiUse AuthenticatedError
 *
 */
function addCollection() { return; }