/**
 * @api {get} /DynamicApi/getDynamicsList 获取动态列表
 * @apiVersion 2.0.0
 * @apiName getDynamicsList
 * @apiGroup Dynamic
 * @apiPermission login
 *
 * @apiDescription  根据用户ID查看朋友圈动态列表。
 *
 * @apiHeader {String} access-key Users unique access-key.
 *
 * @apiParam {String}  userId 		    评论用户ID
 * @apiParam {Number}  [page=1] 		当前页码
 * @apiParam {Number}  [rows=10] 	    每页大小
 *
 * @apiSuccess {Object[]}   datas             动态列表
 * @apiSuccess {String}     datas.id                  动态ID
 * @apiSuccess {String}     datas.content             动态内容
 * @apiSuccess {String}     datas.path                动态图片路径
 * @apiSuccess {String}     datas.userId              动态发表人ID
 * @apiSuccess {String}     datas.nickname            动态发表人昵称
 * @apiSuccess {String}     datas.photo               动态发表人头像
 * @apiSuccess {Date}       datas.createTime          动态发表时间
 * @apiSuccess {Number}     datas.type                动态类型
 * @apiSuccess {Object[]}   datas.dynamicPraise       动态点赞信息
 * @apiSuccess {Date}       datas.dynamicPraise.createTime            点赞时间
 * @apiSuccess {String}     datas.dynamicPraise.dynamicId             动态ID
 * @apiSuccess {String}     datas.dynamicPraise.userId                点赞用户的ID
 * @apiSuccess {String}     datas.dynamicPraise.nickname              点赞用户的昵称
 * @apiSuccess {Object[]}   datas.dynamicComment      动态评论
 * @apiSuccess {String}     datas.dynamicComment.id                    评论ID
 * @apiSuccess {String}     datas.dynamicComment.dynamicId             动态ID
 * @apiSuccess {String}     datas.dynamicComment.userId                评论人ID
 * @apiSuccess {String}     datas.dynamicComment.nickname                  评论人的昵称
 * @apiSuccess {String}     datas.dynamicComment.atUserId              @用户的ID
 * @apiSuccess {String}     datas.dynamicComment.content               评论内容
 * @apiSuccess {Date}       datas.dynamicComment.createTime           评论时间
 * @apiSuccess {Number}     page              当前页码
 * @apiSuccess {Number}     rows              每页大小
 * @apiSuccess {Number}     totalPages        总页数
 *
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   {
        "datas": [
            {
                "id": "25b403fb5fff41fa80428e504f53225a",
                "content": "如下原因会造成JSON校验失败,而且会让你不知道为什么失败.....",
                "path": "/uploader/00/00/00/00/00/00/00/51.jpg,/uploader/00/00/00/00/00/00/00/52.jpg,/uploader/00/00/00/00/00/00/00/53.jpg",
                "userId": "867516022307943,86751602230794380640149",
                "nickname": "小球",
                "photo": "/test/a.png",
                "createTime": 1489199154000,
                "type": 2,
                "dynamicPraise": [
                    {
                        "createTime": 1489202088000,
                        "dynamicId": "25b403fb5fff41fa80428e504f53225a",
                        "userId": "191cd650-1122-11e7-8d45-b7787a373d6b",
                        "nickname": "皮皮",
                    },
                  ...
                ],
                "dynamicComment": [
                    {
                        "id": "81b32a7a682a4cf78bc502d351fb197b",
                        "dynamicId": "25b403fb5fff41fa80428e504f53225a",
                        "userId": "867200022156895,86720002215690321000493",
                        "nickname": "小球",
                        "atUserid": "",
                        "content": "哈哈",
                        "commentTime": 1489370564000,
                    },
                    ...
                ],
            },
            ...
        ],
        "page": 0,
        "rows": 0,
        "total": 0,
        "totalPages": 0
    }
 */
function getDynamicsList() { return; }

/**
 * @api {get} /DynamicApi/addDynamic 发表动态
 * @apiVersion 2.0.0
 * @apiName addDynamic
 * @apiGroup Dynamic
 * @apiPermission login
 *
 * @apiDescription 发表动态。
 *
 * @apiHeader {String} access-key Users unique access-key.
 *
 * @apiParam {String} userId     用户ID
 * @apiParam {String} content    发表的内容
 * @apiParam {String} type       发表的动态类型
 * @apiParam {String} path       发表动态中包含的图片路径
 *
 * @apiSuccess {Boolean}    ok         是否成功
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
 * @apiHeader {String} access-key Users unique access-key.
 *
 * @apiParam {String}   key   动态ID
 *
 * @apiSuccess {Boolean}    ok         是否成功
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
 * @apiHeader {String} access-key Users unique access-key.
 *
 * @apiParam {String}     dynamicId             动态ID
 * @apiParam {String}     userId                发表评论用户的ID
 * @apiParam {String}     content               评论内容
 * @apiParam {String}     atUserId              @用户的ID
 *
 * @apiSuccess {Boolean}    ok         是否成功
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
 * @apiHeader {String} access-key Users unique access-key.
 *
 * @apiParam {String}      userId        评论用户ID
 * @apiParam {String}      dynamicID     评论动态ID
 *
 * @apiSuccess {Boolean}    ok         是否成功
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
 * @apiHeader {String} access-key Users unique access-key.
 *
 * @apiParam {String}     dynamicId             动态ID
 * @apiParam {String}     userId                点赞用户的ID
 *
 * @apiSuccess {Boolean}    ok         是否成功
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
 * @apiHeader {String} access-key Users unique access-key.
 *
 * @apiParam {String}      userId        点赞用户ID
 * @apiParam {String}      dynamicID     点赞动态ID
 *
 * @apiSuccess {Boolean}    ok         是否成功
 *
 */
function deleteDynamicPraise() { return; }
