/**
 * @api {get} /EnergyApi/getMyEnergyDataList 获取我的能量场数据列表
 * @apiVersion 2.0.0
 * @apiName getMyEnergyDataList
 * @apiGroup Energy
 * @apiPermission login
 *
 * @apiDescription 获取当前登录用户的能量场数据列表。
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiSuccess {Boolean}      ok                  是否成功
 * @apiSuccess {Object[]}     obj                 指标
 * @apiSuccess {String}       obj.name              指标名称
 * @apiSuccess {Number}       obj.value             能量值

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "ok": true,
 *         "obj": [
 *             {
 *                 name: "风"，
 *                 value: 90,
 *             },
 *             {
 *                 name: "雨"，
 *                 value: 80,
 *             },
 *             ...
 *         ]
 *     }
 *
 * @apiUse AuthenticatedError
 *
 */
function getMyEnergyDataList() { return; }

/**
 * @api {get} /EnergyApi/getInformationDataList 获取填写数据项列表
 * @apiVersion 2.0.0
 * @apiName getInformationDataList
 * @apiGroup Energy
 * @apiPermission login
 *
 * @apiDescription 获取填写数据项列表。
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiSuccess {Boolean}      ok                  是否成功
 * @apiSuccess {Object[]}     obj                 指标
 * @apiSuccess {String}       obj.name              指标名称
 * @apiSuccess {Number}       obj.value             能量值

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "ok": true,
 *         "obj": [
 *             {
 *                 name: "风"，
 *                 value: 90,
 *             },
 *             {
 *                 name: "雨"，
 *                 value: 80,
 *             },
 *             ...
 *         ]
 *     }
 *
 * @apiUse AuthenticatedError
 *
 */
function getInformationList() { return; }


/**
 * @api {get} /EnergyApi/getQuestionnaireList 获取问卷调查列表
 * @apiVersion 2.0.0
 * @apiName getQuestionnaireList
 * @apiGroup Energy
 * @apiPermission login
 *
 * @apiDescription 获取问卷调查列表。
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiSuccess {Boolean}      ok                  是否成功
 * @apiSuccess {Object[]}     obj                 指标
 * @apiSuccess {String}       obj.name              指标名称
 * @apiSuccess {Number}       obj.value             能量值

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "ok": true,
 *         "obj": [
 *             {
 *                 name: "风"，
 *                 value: 90,
 *             },
 *             {
 *                 name: "雨"，
 *                 value: 80,
 *             },
 *             ...
 *         ]
 *     }
 *
 * @apiUse AuthenticatedError
 *
 */
function getQuestionnaireList() { return; }


/**
 * @api {get} /EnergyApi/getMyEnergyDataList4 提交填写数据项结果
 * @apiVersion 2.0.0
 * @apiName getMyEnergyDataList4
 * @apiGroup Energy
 * @apiPermission login
 *
 * @apiDescription 提交填写数据项结果。
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiSuccess {Boolean}      ok                  是否成功
 * @apiSuccess {Object[]}     obj                 指标
 * @apiSuccess {String}       obj.name              指标名称
 * @apiSuccess {Number}       obj.value             能量值

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "ok": true,
 *         "obj": [
 *             {
 *                 name: "风"，
 *                 value: 90,
 *             },
 *             {
 *                 name: "雨"，
 *                 value: 80,
 *             },
 *             ...
 *         ]
 *     }
 *
 * @apiUse AuthenticatedError
 *
 */
function submitInformationData() { return; }


/**
 * @api {get} /EnergyApi/getMyEnergyDataList5 提交问卷调查数据
 * @apiVersion 2.0.0
 * @apiName getMyEnergyDataList5
 * @apiGroup Energy
 * @apiPermission login
 *
 * @apiDescription 提交填写数据项结果。
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiSuccess {Boolean}      ok                  是否成功
 * @apiSuccess {Object[]}     obj                 指标
 * @apiSuccess {String}       obj.name              指标名称
 * @apiSuccess {Number}       obj.value             能量值

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "ok": true,
 *         "obj": [
 *             {
 *                 name: "风"，
 *                 value: 90,
 *             },
 *             {
 *                 name: "雨"，
 *                 value: 80,
 *             },
 *             ...
 *         ]
 *     }
 *
 * @apiUse AuthenticatedError
 *
 */
function submitQuestionnaireData() { return; }


/**
 * @api {get} /EnergyApi/getMyEnergyDataList6 提交自动获取数据
 * @apiVersion 2.0.0
 * @apiName getMyEnergyDataList6
 * @apiGroup Energy
 * @apiPermission login
 *
 * @apiDescription 提交自动获取数据结果。
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiSuccess {Boolean}      ok                  是否成功
 * @apiSuccess {Object[]}     obj                 指标
 * @apiSuccess {String}       obj.name              指标名称
 * @apiSuccess {Number}       obj.value             能量值

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "ok": true,
 *         "obj": [
 *             {
 *                 name: "风"，
 *                 value: 90,
 *             },
 *             {
 *                 name: "雨"，
 *                 value: 80,
 *             },
 *             ...
 *         ]
 *     }
 *
 * @apiUse AuthenticatedError
 *
 */
function submitAcquisitionData() { return; }
