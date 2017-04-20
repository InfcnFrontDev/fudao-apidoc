/**
 * @api {get} /DiagnosisApi/getCommonDiseaseList 获取常见问题列表
 * @apiVersion 2.0.0
 * @apiName getCommonDiseaseList
 * @apiGroup Diagnosis
 * @apiPermission login
 *
 * @apiDescription  分别提供关于地域、年龄、节气、性别的常见问题。
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {String}  size        每类问题最多个数
 *
 *
 * @apiSuccess {Boolean}    ok                  是否成功
 * @apiSuccess {Object}     obj                 问题对象
 * @apiSuccess {String}     obj.city                地域名称
 * @apiSuccess {String}     obj.age                 年龄
 * @apiSuccess {String}     obj.solarTerm           节气
 * @apiSuccess {String}     obj.sex                 性别
 * @apiSuccess {Object[]}   obj.list                问题列表
 * @apiSuccess {String}     obj.list.id                 疾病ID
 * @apiSuccess {String}     obj.list.name               疾病名称
 * @apiSuccess {String}     obj.list.type               疾病所属分类（地域，年龄，节气，性别）
 *
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *       "ok": true,
 *       "obj": {
 *           "city": "北京",
 *           "age": "40",
 *           "solarTerm": "春季",
 *           "sex": "女",
 *           "list": [
 *               {
 *                   "id": "17",
 *                   "name": "脱发",
 *                   "type": "地域",
 *               },
 *               {
 *                   "id": "18",
 *                   "name": "发黄",
 *                   "type": "地域",
 *               },
 *               {
 *                   "id": "19",
 *                   "name": "焦躁",
 *                   "type": "年龄",
 *               },
 *               ...
 *           ]
 *    }
 *
 *}
 *
 *
 */
function getCommonDiseaseList() {   return; }

/**
 * @api {get} /DiagnosisApi/hasDisease 判断问题是否存在
 * @apiVersion 2.0.0
 * @apiName hasDisease
 * @apiGroup Diagnosis
 * @apiPermission login
 *
 * @apiDescription  判断问题是否存在
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {String}  name        问题名称
 *
 *
 * @apiSuccess {Boolean}    ok                  是否成功
 * @apiSuccess {Object}     obj                 问题数据
 * @apiSuccess {Boolean}    obj.has                 是否存在该问题
 * @apiSuccess {String}     obj.id                  疾病ID
 *
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *           "ok": true,
 *           "obj": {
 *               "has": true,
 *               "id": "10",
 *           }
 *   }
 *
 */
function hasDisease() {   return; }

/**
 * @api {get} /DiagnosisApi/addSomeDisease 添加我的疾病(多个)
 * @apiVersion 2.0.0
 * @apiName addSomeDisease
 * @apiGroup Diagnosis
 * @apiPermission login
 *
 * @apiDescription  添加多个疾病
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {String}  disease          疾病名称（多个中间以逗号隔开）
 *
 * @apiSuccess {Boolean}    ok         是否成功
 *
 */
function addSomeDisease() {   return; }

/**
 * @api {get} /DiagnosisApi/getEvaluationResult 获取测评结果
 * @apiVersion 2.0.0
 * @apiName getEvaluationResult
 * @apiGroup Diagnosis
 * @apiPermission login
 *
 * @apiDescription  获取测评结果
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiSuccess {Boolean}    ok         是否成功
 * @apiSuccess {Object}     obj                 测评结果
 * @apiSuccess {Boolean}    obj.has                是否存在测评结果
 * @apiSuccess {Number}     obj.complex            综合结果
 * @apiSuccess {Number}     obj.physiology         生理结果
 * @apiSuccess {Number}     obj.psychology         心理结果
 * @apiSuccess {Number}     obj.social             社交结果
 * @apiSuccess {Number}     obj.self               自测结果
 *
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *           "ok": true,
 *           "obj": {
 *               "has": true,
 *               "complex": 85,
 *               "physiology": 90,
 *               "psychology": 80,
 *               "social": 86,
 *               "self": 93,
 *           }
 *   }
 */
function getEvaluationResult() { return; }

/**
 * @api {get} /DiagnosisApi/getQuestionnaire 获取问卷
 * @apiVersion 2.0.0
 * @apiName getQuestionnaire
 * @apiGroup Diagnosis
 * @apiPermission login
 *
 * @apiDescription  获取问卷
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {String}  type          问卷类型（生理测评、心理测评、社交测评、一键测评）
 *
 * @apiSuccess {Boolean}    ok         是否成功
 * @apiSuccess {Object[]}   obj                 测评问卷列表
 * @apiSuccess {String}    obj.content             问卷问题
 * @apiSuccess {String}     obj.photo              问卷问题图片
 *
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *           "ok": true,
 *           "obj": [
 *               {
 *                   "content": "您是否有便秘症状",
 *                   "photo": "/test/a.png",
 *               },
 *               ...
 *           ]
 *   }
 */
function getQuestionnaire() { return; }

/**
 * @api {get} /DiagnosisApi/postQuestionnaire 提交问卷
 * @apiVersion 2.0.0
 * @apiName postQuestionnaire
 * @apiGroup Diagnosis
 * @apiPermission login
 *
 * @apiDescription  提交问卷
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {String}  result          问卷答案
 *
 * @apiSuccess {Boolean}    ok         是否成功
 *
 */
function postQuestionnaire() { return; }

/**
 * @api {get} /DiagnosisApi/getOrgan 获取器官
 * @apiVersion 2.0.0
 * @apiName getOrgan
 * @apiGroup Diagnosis
 * @apiPermission login
 *
 * @apiDescription  获取器官
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {String}  part          部位
 *
 * @apiSuccess {Boolean}    ok         是否成功
 * @apiSuccess {Object[]}   obj                 获取器官列表
 * @apiSuccess {String}     obj.name                器官名称
 *
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *           "ok": true,
 *           "obj": ["面部"，"头部","精神","耳","鼻","眼"，"口"]
 *   }
 */
function getOrgan() { return; }

/**
 * @api {get} /DiagnosisApi/getDiseaseAboutOrganList 获取症状列表
 * @apiVersion 2.0.0
 * @apiName getDiseaseAboutOrganList
 * @apiGroup Diagnosis
 * @apiPermission login
 *
 * @apiDescription  获取与器官相关的症状列表
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {String}  organ          器官
 *
 * @apiSuccess {Boolean}    ok         是否成功
 * @apiSuccess {Object[]}   obj                 获取症状列表
 * @apiSuccess {String}     obj.id                  症状ID
 * @apiSuccess {String}     obj.name                症状名称
 *
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *           "ok": true,
 *           "obj": [
 *               {
 *                   "id": "01",
 *                   "name": "鼻塞",
 *               },
 *               ...
 *           ]
 *   }
 */
function getDiseaseAboutOrganList() { return; }

/**
 * @api {get} /DiagnosisApi/getRecentThings 获取最近做过的事情列表
 * @apiVersion 2.0.0
 * @apiName getRecentThings
 * @apiGroup Diagnosis
 * @apiPermission login
 *
 * @apiDescription  获取最近做过的事情列表
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {String}  organ          器官
 *
 * @apiSuccess {Boolean}    ok         是否成功
 * @apiSuccess {Object[]}   obj                 最近做过的事情列表
 * @apiSuccess {String}     obj.content                事情内容
 *
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *           "ok": true,
 *           "obj": ["进食过量","缺乏运动","夜间加餐"]
 *   }
 */
function getRecentThings() { return; }

/**
 * @api {get} /DiagnosisApi/postSymptom 提交症状
 * @apiVersion 2.0.0
 * @apiName postSymptom
 * @apiGroup Diagnosis
 * @apiPermission login
 *
 * @apiDescription  提交症状(多个)
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {String}  symptom          症状名称（多个中间以逗号隔开）
 * @apiParam {String}  things           最近做过的事情名称（多个中间以逗号隔开）
 *
 * @apiSuccess {Boolean}    ok         是否成功
 *
 */
function postSymptom() {   return; }
