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
 * @api {get} /UserApi/checkPhone  验证手机号是否存在
 * @apiVersion 2.0.0
 * @apiName checkPhone
 * @apiGroup User
 * @apiPermission login
 *
 * @apiDescription 验证手机号是否存在
 *
 * @apiParam {String}    phone    手机号
 *
 *
 * @apiSuccess {Boolean}    ok   手机号是否存在（true:存在，false:不存在）
 *
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "ok": true,
 *      }
 */
function checkPhone() { return; }

/**
 * @api {get} /UserApi/sendCode       发送验证码
 * @apiVersion 2.0.0
 * @apiName sendCode
 * @apiGroup User
 *
 * @apiDescription  发送验证码
 *
 *
 * @apiParam {String}    phone      手机号
 *
 *
 * @apiSuccess {Boolean}    ok               是否成功
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "ok": true,
 *      }
 */
function sendCode() { return; }

/**
 * @api {get} /UserApi/checkCode  验证验证码
 * @apiVersion 2.0.0
 * @apiName checkCode
 * @apiGroup User
 *
 * @apiDescription 验证验证码
 *
 *
 * @apiParam {String}    phone      手机号
 * @apiParam {String}    code       验证码
 *
 *
 * @apiSuccess {Boolean}    ok               验证成功
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "ok": true,
 *      }
 */
function checkCode() { return; }


/**
 * @api {get} /UserApi/register  用户注册
 * @apiVersion 2.0.0
 * @apiName register
 * @apiGroup User
 *
 * @apiDescription  用户注册
 *
 *
 * @apiParam {String}    phone      手机号
 * @apiParam {String}    password   密码
 *
 *
 * @apiSuccess {Boolean}    ok               是否成功
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "ok": true,
 *      }
 */
function register() { return; }

/**
 * @api {get} /UserApi/login       用户登录
 * @apiVersion 2.0.0
 * @apiName login
 * @apiGroup User
 *
 * @apiDescription  用户登录
 *
 *
 * @apiParam {String}    phone      手机号
 * @apiParam {String}    password   密码
 *
 *
 * @apiSuccess {Boolean}    ok               是否成功
 * @apiSuccess {String}    obj               用户标识码(access-key)
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
 * @apidescription 获取登录用户信息
 *
 *
 *  @apiParam {String}    access_key      用户标识码
 *
 *
 * @apisuccess {Boolean}    ok                           是否成功
 * @apisuccess {Object}     obj                          所有用户信息
 * @apisuccess {String}     obj.userId                   用户Id
 * @apisuccess {String}     obj.id                       id
 * @apisuccess {String}     obj.phone                    手机号
 * @apisuccess {String}     obj.password                 密码
 * @apisuccess {String}     obj.email                    电子邮箱
 * @apisuccess {String}     obj.nickname                 昵称
 * @apisuccess {String}     obj.name                     姓名
 * @apisuccess {String}     obj.photo                    头像
 * @apisuccess {String}     obj.sex                      性别，男：1,女：2
 * @apisuccess {String}     obj.birthdate                出生日期
 * @apisuccess {String}     obj.height                   身高(cm)
 * @apisuccess {String}     obj.weight                   体重(kg)
 * @apisuccess {String}     obj.personal_history         个人史
 * @apisuccess {String}     obj.family_history           家族史
 * @apisuccess {String}     obj.obstetrical_history      婚育史
 * @apisuccess {String}     obj.medication_history       用药史
 * @apisuccess {String}     obj.diet                     饮食
 * @apisuccess {String}     obj.motion                   运动
 * @apisuccess {String}     obj.sleep                    睡眠
 * @apisuccess {String}     obj.smoke                    吸烟
 * @apisuccess {String}     obj.drink                    饮酒
 * @apisuccess {String}     obj.mental_state             精神状态
 * @apisuccess {String}     obj.regionId                 地区ID
 * @apisuccess {String}     obj.renqunId                 人群ID
 *
 *
 * @apisuccessexample {json} success-response:
 *     http/1.1 200 ok
 *     {
 *         "ok": true,
 *         "obj":{
 *                  "userId" : "9898998089",
                "id" : "045454" ,
                "phone" : "15930316547" ,
                "password" : "123456" ,
                "email" : "123656985698@qq.com " ,
                "nickname" : "罐头" ,
                "name" : "草莓罐头",
                "photo" : "../i.jpg ",
                "sex"  : "1",
                "birthdate" :"1996-05-06",
                "height" : "160",
                "weight" : "50",
                "personal_history" :"把拉",
                "family_history" :"无",
                "obstetrical_history" :"未婚",
                "medication_history" :"阿莫西林",
                "diet" :"良好",
                "motion" :"经常",
                "sleep" :"良好",
                "smoke" :"偶尔",
                "drink" :"偶尔",
                "mental_state" :"好",
                "regionId" :"0365888",
                "renqunId" :"高精质人群",
 *         }
 *      }
 */
function getLoginUser() { return; }

/**
 * @api {get} /UserApi/updateUserInfo       修改用户信息
 * @apiVersion 2.0.0
 * @apiName updateUserInfo
 * @apiGroup User
 *
 * @apiDescription  修改用户信息
 *
 * @apiParam {String}    phone          手机号
 * @apiParam {String}    fieldName      字段名（eg:email / nickname / name ...   ）
 * @apiParam {String}    value          值
 *
 *
 * @apiSuccess {Boolean}    ok               是否成功
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "ok": true,
 *      }
 */
function updateUserInfo() { return; }

/**
 * @api {get} /UserApi/resetPassword       重置密码
 * @apiVersion 2.0.0
 * @apiName resetPassword
 * @apiGroup User
 *
 * @apiDescription  找回密码
 *
 *
 * @apiParam {String}    phone      手机号
 * @apiParam {String}    password   密码
 *
 *
 * @apiSuccess {Boolean}    ok      是否成功
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "ok": true,
 *      }
 */
function resetPassword() { return; }

/**
 * @api {get} /UserApi/updatePassword       修改密码
 * @apiVersion 2.0.0
 * @apiName updatePassword
 * @apiGroup User
 *
 * @apiDescription  修改密码
 *
 *
 * @apiParam {String}    phone          手机号
 * @apiParam {String}    oldPassword    旧密码
 * @apiParam {String}    newPassword    新密码
 *
 * @apiSuccess {Boolean}    ok      是否成功
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "ok": true,
 *      }
 */
function updatePassword() { return; }

/**
 * @api {get} /UserApi/setUserBaseInfo  设置用户基本信息
 * @apiVersion 2.0.0
 * @apiName setUserBaseInfo
 * @apiGroup User
 *
 * @apiDescription  设置用户基本信息
 *
 * @apiParam {String}    phone      手机号
 * @apiParam {String}    sex        性别,男:1,女:2
 * @apiParam {String}    [womanType]  女性类型(1:未孕阶段/备孕阶段/已孕阶段。
*                                               2:待产阶段。
 *                                              3:产后恢复阶段。)
 * @apiParam {String}    birthday   出生日期
 * @apiParam {String}    regionId   地区ID
 *
 *
 * @apiSuccess {Boolean}    ok      是否成功
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "ok": true,
 *      }
 */
function setUserBaseInfo() { return; }