/**
 * @api {get} /FriendApi/getFriendList 当前用户的好友列表
 * @apiVersion 2.0.0
 * @apiName getFriendList
 * @apiGroup Friend
 * @apiPermission login
 *
 * @apiDescription 获取当前用户的好友列表。
 *
 * @apiHeader {String} access-key Users unique access-key.
 *
 * @apiParam {Integer} id 		用户id
 *
 * @apiSuccess {Boolean}    ok               是否成功
 * @apiSuccess {Object[]}     obj                   好友列表分页
 * @apiSuccess {String}       obj.id                好友id
 * @apiSuccess {String}     obj.phone              手机号
 * @apiSuccess {String}     obj.friendRemark        好友备注
 * @apiSuccess {String}     obj.photo             好友头像
 * @apiSuccess {String}     obj.nickName          好友昵称
 *
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "ok": true,
 *         "obj": [
 *             {
 *                 "id":"867200022156895,86720002215690321000493",
 *                 "phone":"15901097191",
 *                 "friendRemark":"杨可",
 *                 "nickName":"党中央"
 *                 "photo":"/uploader/00/00/00/00/00/00/00/60.jpg",
 *             }
 *             ...
 *         ]
 *     }
 */
function getMyFriendList() { return; }

/**
 * @api {get} /FriendApi/friendApplyList 好友申请列表
 * @apiVersion 2.0.0
 * @apiName friendApplyList
 * @apiGroup Friend
 * @apiPermission login
 *
 * @apiDescription 获取好友申请列表。
 *
 * @apiHeader {String} access-key Users unique access-key.
 *
 * @apiParam {String}        id 		      当前用户id
 *
 * @apiSuccess {Boolean}    ok                    是否成功
 * @apiSuccess {Object[]}   obj                   资讯列表分页
 *
 *
 *
 * @apiSuccess {String}     obj.id                用户id
 * @apiSuccess {String}     obj.phone             手机号
 * @apiSuccess {String}     obj.state             是否添加
 * @apiSuccess {String}     obj.introduce         自我介绍
 * @apiSuccess {String}     obj.nickName          好友昵称
 * @apiSuccess {String}     obj.friendNick        好友姓名
 * @apiSuccess {String}     obj.photo             好友头像
 * @apiErrorExample Response (example):
 *     HTTP/1.1 200 OK
 *      {
 *         "ok": true,
 *         "obj": [
 *             {
 *
 *                 "id":"867200022156895,86720002215690321000493",
 *                 "phone":"15901097191",
 *                 "friendNick":"杨可",
 *                 "state":ture,
 *                 'introduce'："我叫杨可",
 *                 "nickName":"党中央"
 *                 "photo":"/uploader/00/00/00/00/00/00/00/60.jpg",
 *             }
 *             ...
 *         ]
 *     }
 */
function friendApplyList() { return; }

/**
 * @api {get} /FriendApi/revampFriendRemark 修改好友备注
 * @apiVersion 2.0.0
 * @apiName revampFriendRemark
 * @apiGroup Friend
 * @apiPermission login
 *
 * @apiDescription 修改好友备注进行保存。
 *
 * @apiHeader {String} access-key Users unique access-key.
 *
 * @apiParam {String} id 		当前用户id
 * @apiParam {String} friendId 		好友id
 * @apiParam {String} nickName		好友的昵称
 *
 * @apiSuccess {Boolean}    ok               是否成功
 *
 *
 * @apiErrorExample Response (example):
 *     HTTP/1.1 200  OK
 *      {
 *         "ok": true,
 *     }
 */
function revampFriendRemark() { return; }




/**
 * @api {get} /FriendApi/agreePlusFriend 同意加好友
 * @apiVersion 2.0.0
 * @apiName agreePlusFriend
 * @apiGroup Friend
 * @apiPermission login
 *
 * @apiDescription 同意加对方用户为我的好友
 *
 * @apiHeader {String} access-key Users unique access-key.
 *
 * @apiParam {String} id 		修改的用户id
 * @apiParam {String} friendRemark 	修改的用户备注
 *
 * @apiSuccess {Boolean}    ok               是否成功
 *
 *
 * @apiErrorExample Response (example):
 *     HTTP/1.1 200 OK
 *      {
 *         "ok": true,
 *     }
 */
function agreePlusFriend() { return; }

/**
 * @api {get} /FriendApi/deleteFriend 删除好友
 * @apiVersion 2.0.0
 * @apiName deleteFriend
 * @apiGroup Friend
 * @apiPermission login
 *
 * @apiDescription 删除对方用户为我的好友
 *
 * @apiHeader {String} access-key Users unique access-key.
 *
 * @apiParam {String} id 		当前用户的id
 * @apiParam {String} friendId 	    好友id
 *
 * @apiSuccess {Boolean}    ok               是否成功
 *
 *
 * @apiErrorExample Response (example):
 *     HTTP/1.1 200 OK
 *      {
 *         "ok": true,
 *     }
 */
function deleteFriend() { return; }

/**
 * @api {get} /FriendApi/plusFriendApply 加好友申请
 * @apiVersion 2.0.0
 * @apiName plusFriendApply
 * @apiGroup Friend
 * @apiPermission login
 *
 * @apiDescription  添加好友发送请求进行申请
 *
 * @apiHeader {String} access-key Users unique access-key.
 *
 * @apiParam {String} id 		当前用户的id
 * @apiParam {String} friendId 	    好友id
 * @apiParam {String} introduce      自我介绍
 * @apiParam {String} friendRemark    好友备注
 * @apiParam {String} [dontAttentionHim=true] 是否让他关注朋友圈
 *
 * @apiSuccess {Boolean}    ok               是否成功
 *
 *
 * @apiErrorExample Response (example):
 *     HTTP/1.1 200 OK
 *      {
 *         "ok": true,
 *     }
 */
function plusFriendApply() { return; }