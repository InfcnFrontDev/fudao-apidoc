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
 * @apiError NoAccessRight  只有授权的用户可以访问数据。
 * @apiError UserNotFound   用户不存在。
 *
 * @apiErrorExample Response (example):
 *     HTTP/1.1 401 Not Authenticated
 *     {
 *       "error": "NoAccessRight"
 *     }
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
 * @apiParam {String} renqunId 			人群ID
 * @apiParam {String} columnId 			栏目ID
 * @apiParam {Integer} [page=1] 		当前页码
 * @apiParam {Integer} [pageSize=10] 	每页大小
 *
 * @apiSuccess {Boolean}    success               是否成功
 * @apiSuccess {Object}     obj                   资讯列表分页
 * @apiSuccess {Object[]}   obj.list              资讯列表
 * @apiSuccess {String}     obj.list.id           ID
 * @apiSuccess {String}     obj.list.title        标题
 * @apiSuccess {String}     obj.list.img          图片
 * @apiSuccess {String}     obj.list.source       来源
 * @apiSuccess {Long}       obj.list.createTime   发表时间
 * @apiSuccess {Integer}    obj.page              当前页码
 * @apiSuccess {Integer}    obj.pageSize          每页大小
 * @apiSuccess {Integer}    obj.pageCount         总页数
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
 * @apiParam {String} articleId 资讯ID
 *
 * @apiSuccess {Boolean}    success         是否成功
 * @apiSuccess {Object}     obj             资讯
 * @apiSuccess {String}     obj.id        	ID
 * @apiSuccess {String}     obj.title     	标题
 * @apiSuccess {String}     obj.img       	图片
 * @apiSuccess {String}     obj.content   	内容
 * @apiSuccess {String}     obj.source    	来源
 * @apiSuccess {Date}       obj.createTime	发表时间
 * @apiSuccess {Boolean}    obj.isCollection	是否已收藏
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