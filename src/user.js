// 1，用户登录 - login (手机号，密码)                                      （access_key）
// 2，获取登录用户信息 getLoginUser（access_key）                              （User表所有信息）
// 3，验证手机号是否存在 checkPhone（手机号）                              （ok）
// 4，发送验证码 sendCode（手机号）                                     （ok）
// 5，验证验证码 checkCode（手机号， 验证码）                                 （ok）
// 6，用户注册 register（手机号，密码）                                     （ok）
// 7，设置用户基本信息 setUserBaseInfo（手机号， 性别，[女性类型]，出生日期，地区）            （ok）
// 8，重置密码 resetPassword（手机号，密码）                                     （ok）
// 9，修改密码 updatePassword（手机号，旧密码，新密码）                                     （ok）
// 10, 修改用户信息 updateUserInfo (手机号，fieldName , value)                                   (ok)

/**
 * @api {get} /UserApi/checkPhoneRegistered  检查手机号是否被注册
 * @apiVersion 2.0.0
 * @apiName checkPhoneRegistered
 * @apiGroup User
 *
 * @apiDescription 检查手机号是否被注册过
 *
 * @apiParam {String}    phone    手机号
 *
 * @apiSuccess {Boolean}    ok   是否被注册
 */
function checkPhoneRegistered() { return; }

/**
 * @api {get} /UserApi/sendCode       发送验证码
 * @apiVersion 2.0.0
 * @apiName sendCode
 * @apiGroup User
 *
 * @apiDescription  向用户发送验证码
 *
 *
 * @apiParam {String}    phone      手机号
 *
 *
 * @apiSuccess {Boolean}    ok               是否发送成功
 *
 */
function sendCode() { return; }

/**
 * @api {get} /UserApi/checkCode  检查验证码是否正确
 * @apiVersion 2.0.0
 * @apiName checkCode
 * @apiGroup User
 *
 * @apiDescription 检查验证码是否正确
 *
 *
 * @apiParam {String}    phone      手机号
 * @apiParam {String}    code       验证码
 *
 *
 * @apiSuccess {Boolean}    ok               验证是否成功
 *
 */
function checkCode() { return; }


/**
 * @api {get} /UserApi/register  用户注册
 * @apiVersion 2.0.0
 * @apiName register
 * @apiGroup User
 *
 * @apiDescription  使用手机号、密码，注册新用户。
 *
 *
 * @apiParam {String}    phone      手机号
 * @apiParam {String}    password   密码
 *
 *
 * @apiSuccess {Boolean}    ok      是否成功
 *
 */
function register() { return; }

/**
 * @api {get} /UserApi/login       用户登录
 * @apiVersion 2.0.0
 * @apiName login
 * @apiGroup User
 *
 * @apiDescription  用户输入手机号、密码登录。
 *
 * @apiParam {String}    phone      手机号
 * @apiParam {String}    password   密码
 *
 * @apiSuccess {Boolean}    ok               是否成功
 * @apiSuccess {String}     obj              用户唯一标识码
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "ok": true,
 *         "obj": "1106775f-0d7d-11e7-9b59-000c293e6828"
 *      }
 */
function login() { return; }

/**
 * @api {get} /UserApi/getLoginUser  获取登录用户信息
 * @apiversion 2.0.0
 * @apiname getLoginUser
 * @apigroup User
 *
 * @apidescription  获取当前登录用户的信息
 *
 * @apiUse AuthenticatedHeader
 *
 * @apisuccess {Boolean}    ok                           是否成功
 * @apisuccess {Object}     obj                          用户对象
 * @apisuccess {String}     obj.id                       id
 * @apisuccess {String}     obj.phone                    手机号
 * @apisuccess {String}     obj.password                 密码
 * @apisuccess {String}     obj.email                    电子邮箱
 * @apisuccess {String}     obj.nickname                 昵称
 * @apisuccess {String}     obj.name                     姓名
 * @apisuccess {String}     obj.photo                    头像
 * @apisuccess {String}     obj.sex                      性别，男：1,女：2
 * @apisuccess {String}     obj.birthday                 出生日期
 * @apisuccess {String}     obj.height                   身高(cm)
 * @apisuccess {String}     obj.weight                   体重(kg)
 * @apisuccess {String}     obj.personalHistory          个人史
 * @apisuccess {String}     obj.familyHistory            家族史
 * @apisuccess {String}     obj.obstetricalHistory       婚育史
 * @apisuccess {String}     obj.medicationHistory        用药史
 * @apisuccess {String}     obj.diet                     饮食
 * @apisuccess {String}     obj.motion                   运动
 * @apisuccess {String}     obj.sleep                    睡眠
 * @apisuccess {String}     obj.smoke                    吸烟
 * @apisuccess {String}     obj.drink                    饮酒
 * @apisuccess {String}     obj.mentalState              精神状态
 * @apisuccess {String}     obj.regionId                 地区ID
 * @apisuccess {String}     obj.crowd                    人群
 *
 * @apisuccessexample {json} success-response:
 *     http/1.1 200 ok
 *     {
 *         "ok": true,
 *         "obj":{
                "id" : "045454045-45404545404545404-5454045454" ,
                "phone" : "15930316547" ,
                "password" : "123456" ,
                "email" : "123656985698@qq.com " ,
                "nickname" : "罐头" ,
                "name" : "草莓罐头",
                "photo" : "../i.jpg ",
                "sex"  : "1",
                "birthday" :"1996-05-06",
                "height" : "160",
                "weight" : "50",
                "personalHistory" :"把拉",
                "familyHistory" :"无",
                "obstetricalHistory" :"未婚",
                "medicationHistory" :"阿莫西林",
                "diet" :"良好",
                "motion" :"经常",
                "sleep" :"良好",
                "smoke" :"偶尔",
                "drink" :"偶尔",
                "mentalState" :"好",
                "regionId": "0365888",
                "crowd":"aged"
 *         }
 *      }
 *
 * @apiUse AuthenticatedError
 *
 */
function getLoginUser() { return; }


/**
 * @api {get} /UserApi/getUser  获取指定用户信息
 * @apiversion 2.0.0
 * @apiname getUser
 * @apigroup User
 *
 * @apidescription  获取指定用户信息
 *
 * @apiParam (ID查询){String}       id          用户ID
 * @apiParam (手机号查询){String}    phone      手机号
 *
 * @apiUse AuthenticatedHeader
 *
 * @apisuccess {Boolean}    ok                           是否成功
 * @apisuccess {Object}     obj                          用户对象
 * @apisuccess {String}     obj.id                       id
 * @apisuccess {String}     obj.phone                    手机号
 * @apisuccess {String}     obj.email                    电子邮箱
 * @apisuccess {String}     obj.nickname                 昵称
 * @apisuccess {String}     obj.name                     姓名
 * @apisuccess {String}     obj.photo                    头像
 * @apisuccess {String}     obj.sex                      性别，男：1,女：2
 * @apisuccess {String}     obj.birthday                 出生日期
 * @apisuccess {String}     obj.height                   身高(cm)
 * @apisuccess {String}     obj.weight                   体重(kg)
 * @apisuccess {String}     obj.regionId                 地区ID
 * @apisuccess {String}     obj.crowd                    人群
 *
 * @apisuccessexample {json} success-response:
 *     http/1.1 200 ok
 *     {
 *         "ok": true,
 *         "obj":{
 *             "id" : "045454045-45404545404545404-5454045454" ,
 *             "phone" : "15930316547" ,
 *             "email" : "123656985698@qq.com " ,
 *             "nickname" : "罐头" ,
 *             "name" : "草莓罐头",
 *             "photo" : "../i.jpg ",
 *             "sex"  : "1",
 *             "birthday" :"1996-05-06",
 *             "height" : "160",
 *             "weight" : "50",
 *             "regionId": "0365888",
 *             "crowd":"aged"
 *         }
 *      }
 *
 * @apiUse AuthenticatedError
 *
 */
function getUser() { return; }

/**
 * @api {get} /UserApi/updateUserInfo       修改用户信息
 * @apiVersion 2.0.0
 * @apiName updateUserInfo
 * @apiGroup User
 *
 * @apiDescription  修改当前用户信息
 *
 * @apiParam {String}    phone          手机号
 * @apiParam {String}    fieldName      字段名（eg:email / nickname / name ...   ）
 * @apiParam {String}    value          值
 *
 * @apiSuccess {Boolean}    ok               修改是否成功
 *
 * @apiUse AuthenticatedError
 *
 */
function updateUserInfo() { return; }

/**
 * @api {get} /UserApi/resetPassword       重置密码
 * @apiVersion 2.0.0
 * @apiName resetPassword
 * @apiGroup User
 *
 * @apiDescription  用户找回密码时，验证手机后，重置密码。
 *
 *
 * @apiParam {String}    phone      手机号
 * @apiParam {String}    password   密码
 *
 *
 * @apiSuccess {Boolean}    ok      是否成功
 */
function resetPassword() { return; }

/**
 * @api {get} /UserApi/updatePassword       修改密码
 * @apiVersion 2.0.0
 * @apiName updatePassword
 * @apiGroup User
 * @apiPermission login
 *
 * @apiDescription  修改当前用户密码
 *
 * @apiParam {String}    phone          手机号
 * @apiParam {String}    oldPassword    旧密码
 * @apiParam {String}    newPassword    新密码
 *
 * @apiSuccess {Boolean}    ok      是否成功
 *
 * @apiUse AuthenticatedError
 *
 */
function updatePassword() { return; }

/**
 * @api {get} /UserApi/setUserBaseInfo  设置用户基本信息
 * @apiVersion 2.0.0
 * @apiName setUserBaseInfo
 * @apiGroup User
 *
 * @apiDescription  初次使用，设置用户的基本信息
 *
 * @apiParam {String}    phone        手机号
 * @apiParam {Number}    sex          性别，（1：男，2：女）
 * @apiParam {String}    crowd        女性类型（woman_un:未孕，woman_pre：备孕，woman_ing:待产，woman_ed:产后，woman_next：已育）
 * @apiParam {String}    birthday     出生日期，（1987-07-19）
 * @apiParam {String}    regionId     地区ID
 *
 * @apiSuccess {Boolean}    ok      是否成功
 *
 * @apiUse AuthenticatedError
 *
 */
function setUserBaseInfo() { return; }

/**
 * @api {get} /UserApi/searchUser 搜索用户
 * @apiVersion 2.0.0
 * @apiName searchUser
 * @apiGroup User
 * @apiPermission login
 *
 * @apiDescription 用手机号完全匹配，搜索用户。
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {String}      phone 		      手机号
 *
 * @apiSuccess {Boolean}   ok                 是否成功
 * @apiSuccess {Object}    obj                搜索信息列表
 * @apiSuccess {String}    obj.id             用户id
 * @apiSuccess {String}    obj.photo          用户头像
 * @apiSuccess {String}    obj.phone          手机号
 * @apiSuccess {String}    obj.nickName       用户昵称
 *
 *
 * @apiErrorExample Response (example):
 *     HTTP/1.1 200 OK
 *     {
 *         "ok": true,
 *         "obj":{
 *              "id":"867200022156895,86720002215690393791782",
 *              "photo":"/uploader/00/00/00/00/00/00/00/62.jpg",
 *              "phone":"15901097191",
 *              "nickName":"王朋"
 *         }
 *     }
 *
 * @apiUse AuthenticatedError
 *
 */
function searchUser() { return; }