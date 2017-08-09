/**
 * @api {get} /DynamicApi/getMyDynamicsList 获取我的动态列表
 * @apiVersion 2.0.0
 * @apiName getMyDynamicsList
 * @apiGroup Dynamic
 * @apiPermission login
 *
 * @apiDescription  获取我的朋友圈动态列表。
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {Number}  [page=1] 		当前页码
 * @apiParam {Number}  [pageSize=10] 	    每页大小
 *
 * @apiSuccess {Boolean}    ok              是否成功
 * @apiSuccess {Object}     obj             结果
 * @apiSuccess {Object}     obj.list        动态列表
 * @apiSuccess {String}     obj.list.id                  动态ID
 * @apiSuccess {String}     obj.list.content             动态内容
 * @apiSuccess {String}     obj.list.path                动态图片路径
 * @apiSuccess {String}     obj.list.user              动态发表人
 * @apiSuccess {String}     obj.list.user.id              动态发表人ID
 * @apiSuccess {String}     obj.list.user.nickname            动态发表人昵称
 * @apiSuccess {String}     obj.list.user.photo               动态发表人头像
 * @apiSuccess {Date}       obj.list.createTime          动态发表时间
 * @apiSuccess {Number}     obj.list.type                动态类型
 * @apiSuccess {Object[]}   obj.list.praises       动态点赞信息
 * @apiSuccess {String}     obj.list.praises.user                   点赞用户
 * @apiSuccess {String}     obj.list.praises.user.id                点赞用户的ID
 * @apiSuccess {String}     obj.list.praises.user.nickname          点赞用户的昵称
 * @apiSuccess {String}     obj.list.praises.user.photo             点赞用户的头像
 * @apiSuccess {Object[]}   obj.list.comments                      动态评论
 * @apiSuccess {String}     obj.list.comments.id                   评论ID
 * @apiSuccess {String}     obj.list.comments.dynamicId            动态ID
 * @apiSuccess {String}     obj.list.comments.user                 评论人
 * @apiSuccess {String}     obj.list.comments.user.id              评论人ID
 * @apiSuccess {String}     obj.list.comments.user.nickname        评论人昵称
 * @apiSuccess {String}     obj.list.comments.atUser               @用户
 * @apiSuccess {String}     obj.list.comments.atUser.nickname      评论人昵称
 * @apiSuccess {String}     obj.list.comments.content              评论内容
 * @apiSuccess {Date}       obj.list.comments.createTime           评论时间
 * @apiSuccess {Number}     obj.page              当前页码
 * @apiSuccess {Number}     obj.pageSize          每页大小
 * @apiSuccess {Number}     obj.pageCount         总页数
 *
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *       "ok":true,
 *       "obj":{
 *           "list": [
 *               {
 *                   "id": "25b403fb5fff41fa80428e504f53225a",
 *                   "content": "如下原因会造成JSON校验失败,而且会让你不知道为什么失败.....",
 *                   "path": "/uploader/00/00/00/00/00/00/00/51.jpg,/uploader/00/00/00/00/00/00/00/52.jpg,/uploader/00/00/00/00/00/00/00/53.jpg",
 *                   "user": {
 *                       "id": "867516022307943,86751602230794380640149",
 *                       "nickname": "小球",
 *                       "photo": "/test/a.png",
 *                   },
 *                   "createTime": 1489199154000,
 *                   "type": 2,
 *                   "praises": [
 *                       {
 *                           "id": "191cd650-1122-11e7-8d45-b7787a373d6b",
 *                           "nickname": "皮皮",
 *                           "photo": "/test/a.png",
 *                       },
 *                     ...
 *                   ],
 *                   "comments": [
 *                       {
 *                           "id": "81b32a7a682a4cf78bc502d351fb197b",
 *                           "user": {
 *                               "id": "86720002215690321000493",
 *                               "nickname": "guoxm",
 *                           },
 *                           "atUser": {
 *                               "id": "867200022156895",
 *                               "nickname": "yangkk",
 *                           },
 *                           "content": "哈哈",
 *                           "commentTime": 1489370564000,
 *                       },
 *                       ...
 *                   ],
 *               },
 *               ...
 *           ],
 *           "page": 0,
 *           "pageSize": 0,
 *           "pageCount": 0
 *       }
 *   }
 *
 * @apiUse AuthenticatedError
 *
 */
function getMyDynamicsList() { return; }

/**
 * @api {get} /DynamicApi/addDynamic 发表动态
 * @apiVersion 2.0.0
 * @apiName addDynamic
 * @apiGroup Dynamic
 * @apiPermission login
 *
 * @apiDescription 发表动态。
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {String} content    发表的内容
 * @apiParam {String} type       发表的动态类型
 * @apiParam {String} path       发表动态中包含的图片路径
 *
 * @apiSuccess {Boolean}    ok         是否成功
 *
 * @apiUse AuthenticatedError
 *
 */
function addDynamic() { return; }

/**
 * @api {get} /DynamicApi/deleteDynamic 删除动态
 * @apiVersion 2.0.0
 * @apiName deleteDynamic
 * @apiGroup Dynamic
 * @apiPermission login
 *
 * @apiDescription 删除指定的动态。
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {String}   dynamicId   动态ID
 *
 * @apiSuccess {Boolean}    ok         是否成功
 *
 * @apiUse AuthenticatedError
 *
 */
function deleteDynamic() { return; }

/**
 * @api {get} /DynamicApi/addDynamicComment 添加评论
 * @apiVersion 2.0.0
 * @apiName addDynamicComment
 * @apiGroup Dynamic
 * @apiPermission login
 *
 * @apiDescription 对指定的动态添加评论。
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {String}     dynamicId             动态ID
 * @apiParam {String}     content               评论内容
 * @apiParam {String}     atUserId              @用户的ID
 *
 * @apiSuccess {Boolean}    ok         是否成功
 *
 * @apiUse AuthenticatedError
 *
 */
function addDynamicComment() { return; }

/**
 * @api {get} /DynamicApi/deleteDynamicComment 删除评论
 * @apiVersion 2.0.0
 * @apiName deleteDynamicComment
 * @apiGroup Dynamic
 * @apiPermission login
 *
 * @apiDescription 删除指定评论。
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {String}       commentId  评论ID
 *
 * @apiSuccess {Boolean}    ok         是否成功
 *
 * @apiUse AuthenticatedError
 *
 */
function deleteDynamicComment() { return; }

/**
 * @api {get} /DynamicApi/addDynamicPraise 添加点赞
 * @apiVersion 2.0.0
 * @apiName addDynamicPraise
 * @apiGroup Dynamic
 * @apiPermission login
 *
 * @apiDescription 对指定的动态点赞。
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {String}       dynamicId   动态ID
 *
 * @apiSuccess {Boolean}    ok          是否成功
 *
 * @apiUse AuthenticatedError
 *
 */
function addDynamicPraise() { return; }

/**
 * @api {get} /DynamicApi/deleteDynamicPraise 取消点赞
 * @apiVersion 2.0.0
 * @apiName deleteDynamicPraise
 * @apiGroup Dynamic
 * @apiPermission login
 *
 * @apiDescription 对指定动态取消点赞。
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {String}       dynamicID   点赞动态ID
 *
 * @apiSuccess {Boolean}    ok          是否成功
 *
 * @apiUse AuthenticatedError
 *
 */
function deleteDynamicPraise() { return; }
