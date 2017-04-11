/**
 * @api {get} /FriendApi/getFriendList 我的好友列表
 * @apiVersion 2.0.0
 * @apiName getFriendList
 * @apiGroup Friend
 * @apiPermission login
 *
 * @apiDescription 获取我的好友列表。
 *
 * @apiHeader {String} access-key Users unique access-key.
 *
 * @apiParam {Integer} userId 		用户id
 *
 * @apiSuccess {Boolean}    ok               是否成功
 * @apiSuccess {Object[]}     obj                   好友列表分页
 * @apiSuccess {String}   obj.createTime        加好友时间
 * @apiSuccess {String}     obj.friendId          好友用户ID
 * @apiSuccess {String}     obj.friendNick        好友备注
 * @apiSuccess {String}       obj.id                信息id
 * @apiSuccess {String}     obj.img               好友头像
 * @apiSuccess {String}     obj.phone             好友电话
 * @apiSuccess {String}     obj.isRead            是否读取
 * @apiSuccess {String}     obj.userId            我的用户id
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "ok": true,
 *         "obj": [
 *             {
 *                 "createTime":1489215938000,
 *                 "friendId":"867200022156895,86720002215690321000493",
 *                 "friendNick":"杨可",
 *                 "id":"0eb39b076c1448b6b139a151cbb38924",
 *                 "img":"/uploader/00/00/00/00/00/00/00/60.jpg",
 *                 "phone":"15901097191",
 *                 "isRead":"0",
 *                 "userId":"867516022307943,86751602230794397042005"
 *             }
 *             ...
 *         ]
 *     }
 */
function getMyFriendList() { return; }

/**
 * @api {get} /FriendApi/FriendApplyList 好友申请列表
 * @apiVersion 2.0.0
 * @apiName FriendApplyList
 * @apiGroup Friend
 * @apiPermission login
 *
 * @apiDescription 好友申请列表。
 *
 * @apiHeader {String} access-key Users unique access-key.
 *
 * @apiParam {String}        userId 		      我的用户id
 *
 * @apiSuccess {Boolean}    ok                    是否成功
 * @apiSuccess {Object[]}   obj                   资讯列表分页
 * @apiSuccess {String}     obj.friendId          好友用户ID
 * @apiSuccess {String}     obj.friendNick        好友备注
 * @apiSuccess {String}     obj.id                信息id
 * @apiSuccess {String}     obj.img               好友头像
 * @apiSuccess {String}     obj.phone             好友电话
 * @apiSuccess {String}     obj.isRead            是否读取
 * @apiSuccess {String}     obj.state             我的id
 * @apiSuccess {String}     obj.tip               好友信息
 *
 * @apiError NoAccessRight 只有授权的用户可以访问数据。
 * @apiError UserNotFound   用户不存在。
 *
 * @apiErrorExample Response (example):
 *     HTTP/1.1 401 Not Authenticated
 *      {
 *         "ok": true,
 *         "obj": [
 *             {
 *                 "state":0,
 *                 'tip'："我叫杨可",
 *                 "friendId":"867200022156895,86720002215690321000493",
 *                 "friendNick":"杨可",
 *                 "id":"57",
 *                 "img":"/uploader/00/00/00/00/00/00/00/60.jpg",
 *                 "phone":"15901097191",
 *                 "isRead":"0",
 *             }
 *             ...
 *         ]
 *     }
 */
function FriendApplyList() { return; }

/**
 * @api {get} /FriendApi/modificationFriendName 修改好友备注
 * @apiVersion 2.0.0
 * @apiName modificationFriendName
 * @apiGroup Friend
 * @apiPermission login
 *
 * @apiDescription 修改好友备注。
 *
 * @apiHeader {String} access-key Users unique access-key.
 *
 * @apiParam {String} userId 		我的用户id
 * @apiParam {String} passiveAppid 		好友的用户ID
 * @apiParam {String} passiveName 		好友的昵称
 *
 * @apiSuccess {Boolean}    ok               是否成功
 *
 * @apiError NoAccessRight 只有授权的用户可以访问数据。
 * @apiError UserNotFound   用户不存在。
 *
 * @apiErrorExample Response (example):
 *     HTTP/1.1 401 Not Authenticated
 *      {
 *         "ok": true,
 *     }
 */
function modificationFriendName() { return; }


/**
 * @api {get} /FriendApi/searchFriend 搜索好友
 * @apiVersion 2.0.0
 * @apiName searchFriend
 * @apiGroup Friend
 * @apiPermission login
 *
 * @apiDescription 搜索好友
 *
 * @apiHeader {String} access-key Users unique access-key.
 *
 * @apiParam {String} phone 		用户电话
 *
 * @apiSuccess {Boolean}    ok               是否成功
 * @apiSuccess {Object}    obj                    搜索信息列表
 * @apiSuccess {String}    obj.appid              用户id
 * @apiSuccess {String}    obj.img                用户头像
 * @apiSuccess {String}    obj.sex                用户性别
 * @apiSuccess {String}    obj.title              用户昵称
 *
 * @apiError NoAccessRight 只有授权的用户可以访问数据。
 * @apiError UserNotFound   用户不存在。
 *
 * @apiErrorExample Response (example):
 *     HTTP/1.1 401 Not Authenticated
 *      {
 *         "ok": true,
 *         obj:{
 *              "appid":"867200022156895,86720002215690393791782",
 *              "img":"/uploader/00/00/00/00/00/00/00/62.jpg",
 *              "sex":"0",
 *              "title":"王朋"
 *         }
 *     }
 */
function searchFriend() { return; }

/**
 * @api {get} /FriendApi/agreePlusFriend 同意加好友
 * @apiVersion 2.0.0
 * @apiName agreePlusFriend
 * @apiGroup Friend
 * @apiPermission login
 *
 * @apiDescription 同意加好友
 *
 * @apiHeader {String} access-key Users unique access-key.
 *
 * @apiParam {String} id 		用户信息id
 * @apiParam {String} passiveName 	修改的用户备注
 *
 * @apiSuccess {Boolean}    ok               是否成功
 *
 * @apiError NoAccessRight 只有授权的用户可以访问数据。
 * @apiError UserNotFound   用户不存在。
 *
 * @apiErrorExample Response (example):
 *     HTTP/1.1 401 Not Authenticated
 *      {
 *         "ok": true,
 *     }
 */
function agreePlusFriend() { return; }