/**
 * @api {get} /FriendApi/getMyFriendList 获取我的好友列表
 * @apiVersion 2.0.0
 * @apiName getMyFriendList
 * @apiGroup Friend
 * @apiPermission login
 *
 * @apiDescription 获取当前登录用户的好友列表。
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiSuccess {Boolean}    ok                    是否成功
 * @apiSuccess {Object[]}   obj                   好友列表
 * @apiSuccess {String}     obj.id                好友id
 * @apiSuccess {String}     obj.phone             手机号
 * @apiSuccess {String}     obj.nickname          昵称
 * @apiSuccess {String}     obj.photo             好友头像
 * @apiSuccess {String}     obj.friendRemark            好友备注
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
 *                 "nickmame":"党中央"
 *                 "photo":"/uploader/00/00/00/00/00/00/00/60.jpg",
 *                 "friendRemark":"杨可",
 *             }
 *             ...
 *         ]
 *     }
 *
 * @apiUse AuthenticatedError
 *
 */
function getMyFriendList() { return; }

/**
 * @api {get} /FriendApi/getMyFriendApplyList 获取我的好友申请列表
 * @apiVersion 2.0.0
 * @apiName getMyFriendApplyList
 * @apiGroup Friend
 * @apiPermission login
 *
 * @apiDescription 获取我的好友申请列表。
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiSuccess {Boolean}    ok                    是否成功
 * @apiSuccess {Object[]}   obj                   资讯列表分页
 * @apiSuccess {String}     obj.id                用户id
 * @apiSuccess {String}     obj.nickname          昵称
 * @apiSuccess {String}     obj.phone             手机号
 * @apiSuccess {String}     obj.photo             好友头像
 * @apiSuccess {String}     obj.introduce         自我介绍
 * @apiSuccess {String}     obj.status            状态，1：新朋友，2：拒绝，3：同意
 * @apiErrorExample Response (example):
 *     HTTP/1.1 200 OK
 *      {
 *         "ok": true,
 *         "obj": [
 *             {
 *                 "id":"867200022156895,86720002215690321000493",
 *                 "nickname":"杨可",
 *                 "phone":"15901097191",
 *                 "photo":"/uploader/00/00/00/00/00/00/00/60.jpg",
 *                 'introduce'："我叫杨可",
 *                 "status": 1
 *             }
 *             ...
 *         ]
 *     }
 *
 * @apiUse AuthenticatedError
 *
 */
function getMyFriendApplyList() { return; }

/**
 * @api {get} /FriendApi/updateFriendRemark 修改好友备注
 * @apiVersion 2.0.0
 * @apiName updateFriendRemark
 * @apiGroup Friend
 * @apiPermission login
 *
 * @apiDescription 修改好友备注进行保存。
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {String} friendId 		    好友id
 * @apiParam {String} friendRemark		好友备注
 *
 * @apiSuccess {Boolean}    ok               是否成功
 *
 * @apiUse AuthenticatedError
 *
 */
function updateFriendRemark() { return; }

/**
 * @api {get} /FriendApi/agreeAddFriend 同意加好友
 * @apiVersion 2.0.0
 * @apiName agreeAddFriend
 * @apiGroup Friend
 * @apiPermission login
 *
 * @apiDescription 同意加对方用户为我的好友
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {String} id 		修改的用户id
 * @apiParam {String} friendRemark 	修改的用户备注
 *
 * @apiSuccess {Boolean}    ok               是否成功
 *
 * @apiUse AuthenticatedError
 *
 */
function agreeAddFriend() { return; }

/**
 * @api {get} /FriendApi/deleteMyFriend 删除我的好友
 * @apiVersion 2.0.0
 * @apiName deleteMyFriend
 * @apiGroup Friend
 * @apiPermission login
 *
 * @apiDescription 删除我的好友
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {String} friendId 	    好友id
 *
 * @apiSuccess {Boolean}    ok      是否成功
 *
 * @apiUse AuthenticatedError
 *
 */
function deleteMyFriend() { return; }

/**
 * @api {get} /FriendApi/applyAddFriend 申请加为好友
 * @apiVersion 2.0.0
 * @apiName applyAddFriend
 * @apiGroup Friend
 * @apiPermission login
 *
 * @apiDescription  向好友发送加好友请求。
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {String} friendId 	    好友id
 * @apiParam {String} introduce      自我介绍
 * @apiParam {String} friendRemark    好友备注
 *
 * @apiSuccess {Boolean}    ok               是否成功
 *
 * @apiUse AuthenticatedError
 *
 */
function applyAddFriend() { return; }