/**
 * @api {get} /ArticleApi/getArticleColumnList 获取资讯栏目列表
 * @apiVersion 2.0.0
 * @apiName getArticleColumnList
 * @apiGroup Article
 * @apiPermission login
 *
 * @apiDescription 获取所有资讯栏目。
 *
 * @apiHeader {String} access-key Users unique access-key.
 *
 * @apiSuccess {Boolean}    success   是否成功
 * @apiSuccess {Object[]}   obj       资讯栏目列表
 * @apiSuccess {String}     obj.id    栏目ID
 * @apiSuccess {String}     obj.name  栏目名称
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "ok": true,
 *         "obj": [
 *             {
 *                 "id": "1",
 *                 "name": "健康饮食"
 *             },
 *             {
 *                 "id": "2",
 *                 "name": "健康常识"
 *             },{
 *                 "id": "3",
 *                 "name": "疾病偏方"
 *             },
 *             ...
 *         ]
 *     }
 *
 * @apiError NoAccessRight  只有授权的用户可以访问数据。
 * @apiError UserNotFound   用户不存在。
 *
 * @apiErrorExample Response (example):
 *     HTTP/1.1 401 Not Authenticated
 *     {
 *       "error": "NoAccessRight"
 *     }
 *
 */
function getArticleColumnList() { return; }

/**
 * @api {get} /ArticleApi/getArticleList 获取资讯列表
 * @apiVersion 2.0.0
 * @apiName getArticleList
 * @apiGroup Article
 * @apiPermission login
 *
 * @apiDescription 通过资讯栏目ID， 获取指定栏目下资讯列表。
 *
 * @apiHeader {String} access-key Users unique access-key.
 *
 * @apiParam {String} crowd 			人群
 * @apiParam {String} columnId 			栏目ID
 * @apiParam {Number} [page=1] 		当前页码
 * @apiParam {Number} [pageSize=10] 	每页大小
 *
 * @apiSuccess {Boolean}    success               是否成功
 * @apiSuccess {Object}     obj                   资讯列表分页
 * @apiSuccess {Object[]}   obj.list              资讯列表
 * @apiSuccess {String}     obj.list.id           ID
 * @apiSuccess {String}     obj.list.title        标题
 * @apiSuccess {String}     obj.list.img          图片
 * @apiSuccess {String}     obj.list.source       来源
 * @apiSuccess {Long}       obj.list.createTime   发表时间
 * @apiSuccess {Number}    obj.page              当前页码
 * @apiSuccess {Number}    obj.pageSize          每页大小
 * @apiSuccess {Number}    obj.pageCount         总页数
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "ok": true,
 *         "obj": {
 *             "list": [
 *                 {
 *                     "id": "1106775f-0d7d-11e7-9b59-000c293e6828",
 *                     "title": "食物中的10大“黄金搭档”",
 *                     "img": "zixun/1.1.jpg,zixun/1.2.jpg,zixun/1.3.jpg",
 *                     "content":"桌上要讲究搭配，正确的搭配可以让我们获得更多营养。错误搭配不仅会让食品失去营养，甚至会让身体受到危害。",
 *                     "source": "养生堂",
 *                     "createTime": 1460651070000,
 *                     "isCollection": true
 *                 },
 *                 {
 *                     "id": "1106775f-0d7d-11e7-9b59-000c293e6828",
 *                     "title": "日用品过期会引来一身病，99%的人不知道！ ",
 *                     "img": "zixun/2.1.jpg,zixun/2.2.jpg,zixun/2.3.jpg",
 *                     "content":"毛巾、牙刷、浴球、抹布、餐具等等这些每天都会用到的日用品，会成为你的健康杀手。",
 *                     "source": "养生堂",
 *                     "createTime": 1460651070000,
 *                     "isCollection": true
 *                 },
 *                 ...
 *             ],
 *             "page": 1,
 *             "pageSize": 10,
 *             "pageCount": 5
 *         }
 *     }
 *
 * @apiError NoAccessRight  只有授权的用户可以访问数据。
 * @apiError UserNotFound   用户不存在。
 *
 * @apiErrorExample Response (example):
 *     HTTP/1.1 401 Not Authenticated
 *     {
 *       "error": "NoAccessRight"
 *     }
 */
function getArticleList() { return; }

/**
 * @api {get} /ArticleApi/getArticle 获取资讯详细
 * @apiVersion 2.0.0
 * @apiName getArticle
 * @apiGroup Article
 * @apiPermission login
 *
 * @apiDescription 获取资讯详细。
 *
 * @apiHeader {String} access-key Users unique access-key.
 *
 * @apiParam {String} id 资讯ID
 *
 * @apiSuccess {Boolean}    success         是否成功
 * @apiSuccess {Object}     obj             资讯对象
 * @apiSuccess {String}     obj.id        	ID
 * @apiSuccess {String}     obj.title     	标题
 * @apiSuccess {String}     obj.img       	图片
 * @apiSuccess {String}     obj.content   	内容
 * @apiSuccess {String}     obj.source    	来源
 * @apiSuccess {Date}       obj.createTime	发表时间
 * @apiSuccess {Boolean}    obj.isCollection	是否已收藏
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "ok": true,
 *         "obj": {
 *             "id": "1106775f-0d7d-11e7-9b59-000c293e6828",
 *             "title": "食物中的10大“黄金搭档”",
 *             "img": "zixun/1.1.jpg,zixun/1.2.jpg,zixun/1.3.jpg",
 *             "content":"桌上要讲究搭配，正确的搭配可以让我们获得更多营养。错误搭配不仅会让食品失去营养，甚至会让身体受到危害。",
 *             "source": "养生堂",
 *             "createTime": 1460651070000,
 *             "isCollection": true
 *         }
 *     }
 *
 * @apiError NoAccessRight  只有授权的用户可以访问数据。
 * @apiError UserNotFound   用户不存在。
 *
 * @apiErrorExample Response (example):
 *     HTTP/1.1 401 Not Authenticated
 *     {
 *       "error": "NoAccessRight"
 *     }
 */
function getArticle() { return; }