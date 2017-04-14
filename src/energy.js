/**
 * @api {get} /EnergyApi/getEnergyDataList 获取能量场数据列表
 * @apiVersion 2.0.0
 * @apiName getEnergyDataList
 * @apiGroup Energy
 * @apiPermission login
 *
 * @apiDescription 获取当前登录用户的能量场数据列表。
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiSuccess {Boolean}      ok                  是否成功
 * @apiSuccess {Object[]}     obj                 指标
 * @apiSuccess {String}       obj.indicator       指标名称
 * @apiSuccess {Number}       obj.score           得分

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "ok": true,
 *         "obj": [
 *             {
 *                 "indicator": "风"，
 *                 "score": 90,
 *             },
 *             {
 *                 "indicator": "雨"，
 *                 "score": 80,
 *             },
 *             ...
 *         ]
 *     }
 *
 * @apiUse AuthenticatedError
 *
 */
function getEnergyDataList() { return; }

/**
 * @api {get} /EnergyApi/getInformationResult 获取填写数据结果
 * @apiVersion 2.0.0
 * @apiName getInformationResult
 * @apiGroup Energy
 * @apiPermission login
 *
 * @apiDescription 获取填写数据结果。
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiSuccess {Boolean}      ok                  是否成功
 * @apiSuccess {Object[]}     obj                 指标
 * @apiSuccess {String}       obj.indicator       指标名称
 * @apiSuccess {Number}       obj.value           值

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "ok": true,
 *         "obj": [
 *             {
 *                 "indicator": "性别"，
 *                 "value": '男',
 *             },
 *             {
 *                 "indicator": "民族"，
 *                 "value": '汉',
 *             },
 *             {
 *                 "indicator": "姓氏"，
 *                 "value": '杨',
 *             },
 *             ...
 *         ]
 *     }
 *
 * @apiUse AuthenticatedError
 *
 */
function getInformationResult() { return; }


/**
 * @api {get} /EnergyApi/getQuestionnaireResult 获取问卷调查结果
 * @apiVersion 2.0.0
 * @apiName getQuestionnaireResult
 * @apiGroup Energy
 * @apiPermission login
 *
 * @apiDescription 获取问卷调查结果。
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiSuccess {Boolean}      ok                  是否成功
 * @apiSuccess {Object[]}     obj                 指标
 * @apiSuccess {String}       obj.indicator       指标名称
 * @apiSuccess {Number}       obj.question        问题
 * @apiSuccess {Number}       obj.value           值

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "ok": true,
 *         "obj": [
 *             {
 *                 "indicator": "爱情类型"，
 *                 "question": "您会如何形容您恋爱的类型",
 *                 "value": '空洞式爱情'
 *             },
 *             {
 *                 "indicator": "道德感"，
 *                 "question": "您会如何形容自己的道德感",
 *                 "value": '非善向'
 *             },
 *             {
 *                 "indicator": "友情空间"，
 *                 "question": "您在公司保持有过短暂接触的人有多少",
 *                 "value": '偏善'
 *             },
 *             ...
 *         ]
 *     }
 *
 * @apiUse AuthenticatedError
 *
 */
function getQuestionnaireResult() { return; }


/**
 * @api {get} /EnergyApi/submitInformationResult 提交填写数据项结果
 * @apiVersion 2.0.0
 * @apiName submitInformationResult
 * @apiGroup Energy
 * @apiPermission login
 *
 * @apiDescription 提交填写数据项结果。
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {String}   jsonData	       json数据
 *
 * @apiParamExample {json} Param (example):
 *     {
 *         "jsonData": [
 *             {
 *                 "indicator": "性别"，
 *                 "value": '男',
 *                 "score": 50
 *             },
 *             {
 *                 "indicator": "民族"，
 *                 "value": '汉',
 *                 "score": 50
 *             },
 *             {
 *                 "indicator": "姓氏"，
 *                 "value": '杨',
 *                 "score": 50
 *             },
 *             ...
 *         ]
 *     }
 *
 * @apiSuccess {Boolean}      ok                  是否成功
 *
 * @apiUse AuthenticatedError
 *
 */
function submitInformationResult() { return; }


/**
 * @api {get} /EnergyApi/submitQuestionnaireResult 提交问卷调查数据
 * @apiVersion 2.0.0
 * @apiName submitQuestionnaireResult
 * @apiGroup Energy
 * @apiPermission login
 *
 * @apiDescription 提交问卷调查数据。
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {String}   jsonData	       json数据
 *
 * @apiParamExample {json} Param (example):
 *     {
 *         "jsonData": [
 *             {
 *                 "indicator": "动植物"，
 *                 "question": "您周围的动植物多吗",
 *                 "value": "多",
 *                 "score": 100
 *             },
 *             {
 *                 "indicator": "婚姻幸福度"，
 *                 "question": "您对您的婚姻满意吗",
 *                 "value": "不满意",
 *                 "score": 0
 *             },
 *             {
 *                 "indicator": "强组织弱关系指数"，
 *                 "question": "您在公司保持有过短暂接触的人有多少",
 *                 "value": "中",
 *                 "score": 30
 *             },
 *             {
 *                 "indicator": "强组织弱关系指数"，
 *                 "question": "您在公司保持有过短暂接触的人有多少",
 *                 "value": '多',
 *                 "score": 30
 *             },
 *             ...
 *         ]
 *     }
 *
 * @apiSuccess {Boolean}      ok                  是否成功
 *
 * @apiUse AuthenticatedError
 *
 */
function submitQuestionnaireResult() { return; }
