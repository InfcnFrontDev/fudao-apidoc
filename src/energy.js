/**
 * @api {get} /EnergyApi/getEnergyList 获取能量场指标
 * @apiVersion 2.0.0
 * @apiName getEnergyList
 * @apiGroup Energy
 * @apiPermission login
 *
 * @apiDescription 获取能量场指标。
 *
 * @apiHeader {String} access-key Users unique access-key.
 *
 * @apiParam {String}  useId	用户ID
 *
 *
 * @apiSuccess {Boolean}      ok                  是否成功
 * @apiSuccess {Object[]}     obj                 指标
 * @apiSuccess {String}     obj.name              指标名称
 * @apiSuccess {Number}     obj.value             能量值
 * @apiSuccess {Number}     obj.orderNum          排序号

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "ok": true,
 *         "obj": [
 *             {
 *                 name:"风"，
 *                 value:90,
 *                 orderNum:1
 *             },
 *             {
 *                 name:"雨"，
 *                 value:80,
 *                 orderNum:2
 *             },
 *             ...
 *         ]
 *     }
 */
function getMyEnergyList() { return; }
