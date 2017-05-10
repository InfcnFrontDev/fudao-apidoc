/**
 * @api {get} /DiagnosisApi/getCommonDiseaseList 获取常见疾病列表
 * @apiVersion 2.0.0
 * @apiName getCommonDiseaseList
 * @apiGroup Diagnosis
 * @apiPermission login
 *
 * @apiDescription  分别提供关于地域、年龄、节气、性别的常见疾病。
 *
 * @apiParam {String}       region        当前地区
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiSuccess {Boolean}    ok                  是否成功
 * @apiSuccess {Object[]}   obj                 问题分类列表
 * @apiSuccess {String}     obj.title           列表名称（北京地区、40岁用户、春季、女性、...）
 * @apiSuccess {Object[]}   obj.list            问题列表
 * @apiSuccess {String}     obj.list.id         疾病ID
 * @apiSuccess {String}     obj.list.name       疾病名称
 *
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *       "ok": true,
 *       "obj": [
 *           {
 *               "title": "北京",
 *               "list": [
 *                   {
 *                       "id": "北京地区",
 *                       "name": "脱发",
 *                   },
 *                   ...
 *               ]
 *           },
 *          {
 *               "title": "40岁用户",
 *               "list": [
 *                   {
 *                       "id": "17",
 *                       "name": "脱发",
 *                   },
 *                   ...
 *               ]
 *           },
 *          {
 *               "title": "春季",
 *               "list": [
 *                   {
 *                       "id": "17",
 *                       "name": "脱发",
 *                   },
 *                   ...
 *               ]
 *           },
 *          {
 *               "title": "女性",
 *               "list": [
 *                   {
 *                       "id": "17",
 *                       "name": "脱发",
 *                   },
 *                   ...
 *               ]
 *           }
 *    ]
 *}
 *
 */
function getCommonDiseaseList() {   return; }

/**
 * @api {get} /DiagnosisApi/addMyDiseases 添加我的疾病(多个)
 * @apiVersion 2.0.0
 * @apiName addMyDiseases
 * @apiGroup Diagnosis
 * @apiPermission login
 *
 * @apiDescription  添加多个疾病
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {String}  ids          疾病Id（多个中间以逗号隔开）
 *
 * @apiSuccess {Boolean}    ok         是否成功
 *
 */
function addMyDiseases() {   return; }

/**
 * @api {get} /DiagnosisApi/getEvaluationResult 获取测评结果
 * @apiVersion 2.0.0
 * @apiName getEvaluationResult
 * @apiGroup Diagnosis
 * @apiPermission login
 *
 * @apiDescription  获取最近一次测评结果
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiSuccess {Boolean}    ok         是否存在测评结果
 * @apiSuccess {Object}     obj                 测评结果
 * @apiSuccess {Number}     obj.complex            综合结果
 * @apiSuccess {Number}     obj.physiology         生理结果
 * @apiSuccess {Number}     obj.psychology         心理结果
 * @apiSuccess {Number}     obj.social             社交结果
 * @apiSuccess {Number}     obj.self               自测结果
 * @apiSuccess {String}     obj.grade              健康状况等级
 *
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *           "ok": true,
 *           "obj": {
 *               "complex": 85,
 *               "physiology": 90,
 *               "psychology": 80,
 *               "social": 86,
 *               "self": 93,
 *               "grade": "良好"
 *           }
 *   }
 */
function getEvaluationResult() { return; }

/**
 * @api {get} /DiagnosisApi/getQuestionnaireList 获取问卷列表
 * @apiVersion 2.0.0
 * @apiName getQuestionnaireList
 * @apiGroup Diagnosis
 * @apiPermission login
 *
 * @apiDescription  根据问卷类型，获取问卷，若不传问卷类型则得到一键测评的问卷
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {Number}  [type]          问卷类型（1：生理测评、2：心理测评、3：社交测评、4：自我测评、不传则为全部）
 *
 * @apiSuccess {Boolean}    ok         是否成功
 * @apiSuccess {Object[]}   obj        测评问卷列表
 * @apiSuccess {String}     obj.id              问卷问题ID
 * @apiSuccess {String}     obj.title           问卷问题标题
 * @apiSuccess {String}     obj.img             问卷问题图片
 * @apiSuccess {Object[]}   obj.answer          问卷问题从A到E对应问题答案
 * @apiSuccess {Object[]}   obj.asnwerScore     问卷问题从A到E对应问题答案得分
 *
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *       "ok": true,
 *       "obj": [
 *           {
 *               "id": 1,
 *               "title": "您是否有便秘症状",
 *               "img": "/test/a.png",
 *               "answer":["没有","偶尔","有时","经常","总是"],
 *               "asnwerScore":[5，4，3，2，1]
 *           },
 *           ...
 *       ]
 *   }
 */
function getQuestionnaireList() { return; }

/**
 * @api {get} /DiagnosisApi/submitQuestionnaireResult 提交问卷
 * @apiVersion 2.0.0
 * @apiName submitQuestionnaireResult
 * @apiGroup Diagnosis
 * @apiPermission login
 *
 * @apiDescription  提交问卷
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {String}  result          问卷答案（问卷答案格式，{1:A,2:E,3:5}  ）
 *
 * @apiSuccess {Boolean}    ok         是否成功
 *
 */
function submitQuestionnaireResult() { return; }

/**
 * @api {get} /DiagnosisApi/getPartOrganSymptomList 获取部位器官症状列表
 * @apiVersion 2.0.0
 * @apiName getPartOrganSymptomList
 * @apiGroup Diagnosis
 * @apiPermission login
 *
 * @apiDescription  获取全部部位器官症状列表
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiSuccess {Boolean}    ok             是否成功
 * @apiSuccess {Object}     obj              人体部位
 * @apiSuccess {Object}     obj.key1        部位下器官
 * @apiSuccess {String[]}   obj.key1.key2   器官下的症状
 *
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *       "ok": true,
 *       "obj": {
 *           "头部": {
 *               "鼻": ["鼻塞","流涕"]
 *               ...
 *           },
 *           ...
 *       ]
 *   }
 */
function getPartOrganSymptomList() { return; }


/**
 * @api {get} /DiagnosisApi/getUserSymptomList 获取用户症状列表
 * @apiVersion 2.0.0
 * @apiName getUserSymptomList
 * @apiGroup Diagnosis
 * @apiPermission login
 *
 * @apiDescription  根据人群、个人的问题，获取症状列表
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiSuccess {Boolean}    ok             是否成功
 * @apiSuccess {String[]}   obj            症状列表
 *
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *       "ok": true,
 *       "obj": [
 *           "鼻塞",
 *           "流涕",
 *           ...
 *       ]
 *   }
 */
function getUserSymptomList() { return; }

/**
 * @api {get} /DiagnosisApi/getRecentThingList 获取最近做过的事情列表
 * @apiVersion 2.0.0
 * @apiName getRecentThingList
 * @apiGroup Diagnosis
 * @apiPermission login
 *
 * @apiDescription  获取最近做过的事情列表
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {String}  symptoms          症状，多个症状逗号隔开
 *
 * @apiSuccess {Boolean}    ok         是否成功
 * @apiSuccess {Object[]}   obj                 最近做过的事情列表
 * @apiSuccess {String}     obj.content                事情内容
 *
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *       "ok": true,
 *       "obj": [
 *           "进食过量",
 *           "缺乏运动",
 *           "夜间加餐",
 *           ...
 *       ]
 *   }
 */
function getRecentThingList() { return; }

/**
 * @api {get} /DiagnosisApi/submitSymptom 提交症状
 * @apiVersion 2.0.0
 * @apiName submitSymptom
 * @apiGroup Diagnosis
 * @apiPermission login
 *
 * @apiDescription  提交症状
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {String}  symptoms         症状名称（多个中间以逗号隔开）
 * @apiParam {String}  things           事情（多个中间以逗号隔开）
 * @apiParam {Nubmer}  type             类型，（1：用户症状，2：器管症状）
 *
 * @apiSuccess {Boolean}    ok         是否成功
 */
function submitSymptom() {   return; }
