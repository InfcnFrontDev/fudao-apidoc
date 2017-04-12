/**
 * @api {get} /TimePeriodApi/getTimePeriod 获取当前用户的时间阶段
 * @apiVersion 2.0.0
 * @apiName getTimePeriod
 * @apiGroup TimePeriod
 * @apiPermission login
 *
 * @apiDescription 获取当前用户的时间阶段。
 *
 * @apiHeader {String} access-key Users unique access-key.
 *
 * @apiParam {Integer} id		用户的ID
 * @apiParam {String} [crowd=high_quality_population]  人群
 *
 * @apiSuccess {Boolean}    success               是否成功
 * @apiSuccess {Object[]}     obj                 用户时间分段
 * @apiSuccess {String}     obj.startTime     开始时间
 * @apiSuccess {String}     obj.endTime       结束时间
 * @apiSuccess {String}     obj.title       分段备注名称
 * @apiSuccess {Date}       obj.name         分段名称
 *
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "ok":true,
 *         "obj"[
 *                  {
 *                       "startTime":"07:30"
 *                       "endTime":"08:30",
 *                       "name":"起床阶段",
 *                       "title":"起床阶段"
 *                  },
 *                  ...
 *         ]
 *     }
 */

function getTimePeriod() { return; }

/**
 * @api {get} /TimePeriodApi/getCommonUseTimePeriod 获取通用时间阶段
 * @apiVersion 2.0.0
 * @apiName getCommonUseTimePeriod
 * @apiGroup TimePeriod
 * @apiPermission login
 *
 * @apiDescription 获取通用时间阶段。
 *
 * @apiHeader {String} access-key Users unique access-key.
 *
 *
 * @apiSuccess {Boolean}    success               是否成功
 * @apiSuccess {Object[]}     obj                通用时间分段
 * @apiSuccess {String}     obj.startTime     开始时间
 * @apiSuccess {String}     obj.endTime       结束时间
 * @apiSuccess {String}     obj.title       分段备注名称
 * @apiSuccess {Date}       obj.name         分段名称
 *
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "ok":true,
 *         "obj"[
 *                  {
 *                       "startTime":"07:30"
 *                       "endTime":"08:30",
 *                       "name":"起床阶段",
 *                       "title":"起床阶段"
 *                  },
 *                  ...
 *         ]
 *     }
 */

function getCommonUseTimePeriod() { return; }

/**
 * @api {get} /TimePeriodApi/updateMyHabit 保存我的时间（待定）
 * @apiVersion 2.0.0
 * @apiName updateMyHabit
 * @apiGroup TimePeriod
 * @apiPermission login
 *
 * @apiDescription 保存我的时间段。
 *
 * @apiHeader {String} access-key Users unique access-key.
 *
 * @apiParam {String} id 用户的ID
 * @apiParam {jsonstr} data 我的时间的返回的data数据
 *
 * @apiSuccess {Boolean}    ok      是否成功
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "ok":true,
 *     }
 *
 *
 */
function updateMyHabit() { return; }