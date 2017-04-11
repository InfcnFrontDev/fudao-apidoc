/**
 * @api {get} /UserApi/checkPhone  验证手机号（注册或找回密码）
 * @apiVersion 2.0.0
 * @apiName checkPhone
 * @apiGroup User
 * @apiPermission login
 *
 * @apiDescription 注册前、找回密码验证手机号
 *
 * @apiHeader {String} access-key Users unique access-key.
 *
 * @apiParam {String}    phone    手机号
 * @apiParam {String}    type     操作类型（reg:注册/findPwd:找回密码）
 *
 *
 * @apiSuccess {Boolean}    ok               是否成功
 * @apiSuccess {Object}     obj              返回信息
 * @apiSuccess {String}     obj.message      是否存在  （reg: existence:存在,notExistent:不存在,如果notExistent，则向用户发送验证码。
 *                                                        findPwd: existence:存在,notExistent:不存在,如果existence，则向用户发送验证码    ）
 *
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "ok": true,
 *         "obj":{
 *              "message":"existence"
 *         }
*
 *      }
 */
function checkPhone() { return; }

/**
 * @api {get} /UserApi/checkCode  验证验证码
 * @apiVersion 2.0.0
 * @apiName checkCode
 * @apiGroup User
 * @apiPermission login
 *
 * @apiDescription 注册前、找回密码验证验证码
 *
 * @apiHeader {String} access-key Users unique access-key.
 *
 * @apiParam {String}    phone      手机号
 * @apiParam {String}    code       验证码
 * @apiParam {String}    type       操作类型（reg:注册/findPwd:找回密码）
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
function checkCode() { return; }


/**
 * @api {get} /UserApi/register  注册
 * @apiVersion 2.0.0
 * @apiName register
 * @apiGroup User
 * @apiPermission login
 *
 * @apiDescription  注册帐号
 *
 * @apiHeader {String} access-key Users unique access-key.
 *
 * @apiParam {String}    userId     用户ID
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
 * @api {get} /Userapi/login  登录
 * @apiversion 2.0.0
 * @apiname login
 * @apigroup User
 * @apipermission login
 *
 * @apidescription 登录帐号
 *
 * @apiheader {string} access-key users unique access-key.
 *
 * @apiparam {string}    phone      手机号
 * @apiparam {string}    password    密码
 *
 *
 * @apisuccess {boolean}    ok                           是否成功
 * @apisuccess {object}     obj                          所有用户信息
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
 *              "userId" : "9898998089",
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
function login() { return; }

/**
 * @api {get} /UserApi/findPassword  找回密码
 * @apiVersion 2.0.0
 * @apiName findPassword
 * @apiGroup User
 * @apiPermission login
 *
 * @apiDescription  找回密码
 *
 * @apiHeader {String} access-key Users unique access-key.
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
function findPassword() { return; }

/**
 * @api {get} /UserApi/startInformation  设置基本信息
 * @apiVersion 2.0.0
 * @apiName startInformation
 * @apiGroup User
 * @apiPermission login
 *
 * @apiDescription  设置基本信息
 *
 * @apiHeader {String} access-key Users unique access-key.
 *
 * @apiParam {String}    sex        性别,男:1,女:2
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
function startInformation() { return; }