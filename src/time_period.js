/**
 * @api {get} /TimePeriodApi/getMyTimeStage 获取我的时间段
 * @apiVersion 2.0.0
 * @apiName getMyTimeStage
 * @apiGroup TimePeriod
 * @apiPermission login
 *
 * @apiDescription 获取我的时间段。
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiSuccess {Boolean}    success           是否成功
 * @apiSuccess {Object[]}   obj               时间阶段
 * @apiSuccess {String}     obj.id            阶段ID
 * @apiSuccess {String}     obj.name          阶段名称
 * @apiSuccess {String}     obj.title         阶段备注名称
 * @apiSuccess {String}     obj.level         时段级别
 * @apiSuccess {String}     obj.startTime     开始时间
 * @apiSuccess {String}     obj.endTime       结束时间
 * @apiSuccess {String}     obj.startTimeRange     开始时间调整范围
 * @apiSuccess {String}     obj.endTimeRange       结束时间调整范围
 * @apiSuccess {Number}     obj.timeLenRangeMin     时间长度范围限制最小值(min)
 * @apiSuccess {Number}     obj.timeLenReaneMax     时间长度范围限制最大值(min)
 * @apiSuccess {Object[]}   obj.timePeriods                分段列表
 * @apiSuccess {String}     obj.timePeriods.id             分段id
 * @apiSuccess {String}     obj.timePeriods.name           分段名称
 * @apiSuccess {String}     obj.timePeriods.title          分段显示名称
 * @apiSuccess {String}     obj.timePeriods.startTime      分段开始时间
 * @apiSuccess {String}     obj.timePeriods.endTime        分段结束时间
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "ok":true,
 *         "obj"[
 *             {
 *                 "id": "128624c3-0f17-11e7-9b59-000c293e6828",
 *                 "name":"起床阶段",
 *                 "title":"起床阶段"
 *                 "level":"主要阶段"
 *                 "startTime":"07:30"
 *                 "endTime":"08:30",
 *                 "startTimeRange": "7:45-8:15",
 *                 "endTimeRange": "7:45-8:15",
 *                 "timeLenRangeMin": 20,
 *                 "timeLenReaneMax": 40,
 *                 "timePeriods": [
 *                     {
 *                          "id": "128624c3-0f17-11e7-9b59-000c293e6828",
 *                          "name":"晨练",
 *                          "title":"晨练"
 *                          "startTime":"07:30"
 *                          "endTime":"08:30"
 *                     },
 *                     ...
 *                 ]
 *             },
 *             ...
 *         ]
 *     }
 *
 * @apiUse AuthenticatedError
 *
 */

function getMyTimeStage() { return; }

/**
 * @api {get} /TimePeriodApi/getGeneralTimeStage 获取通用时间段
 * @apiVersion 2.0.0
 * @apiName getGeneralTimeStage
 * @apiGroup TimePeriod
 * @apiPermission login
 *
 * @apiDescription 获取通用时间段。
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiSuccess {Boolean}    success           是否成功
 * @apiSuccess {Object[]}   obj               时间阶段
 * @apiSuccess {String}     obj.id            阶段ID
 * @apiSuccess {String}     obj.name          阶段名称
 * @apiSuccess {String}     obj.title         阶段备注名称
 * @apiSuccess {String}     obj.level         时段级别
 * @apiSuccess {String}     obj.startTime     开始时间
 * @apiSuccess {String}     obj.endTime       结束时间
 * @apiSuccess {String}     obj.startTimeRange     开始时间调整范围
 * @apiSuccess {String}     obj.endTimeRange       结束时间调整范围
 * @apiSuccess {Number}     obj.timeLenRangeMin     时间长度范围限制最小值(min)
 * @apiSuccess {Number}     obj.timeLenReaneMax     时间长度范围限制最大值(min)
 * @apiSuccess {Object[]}   obj.timePeriods                分段列表
 * @apiSuccess {String}     obj.timePeriods.id             分段id
 * @apiSuccess {String}     obj.timePeriods.name           分段名称
 * @apiSuccess {String}     obj.timePeriods.title          分段显示名称
 * @apiSuccess {String}     obj.timePeriods.startTime      分段开始时间
 * @apiSuccess {String}     obj.timePeriods.endTime        分段结束时间
 *
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "ok":true,
 *         "obj"[
 *             {
 *                 "id": "128624c3-0f17-11e7-9b59-000c293e6828",
 *                 "name":"起床阶段",
 *                 "title":"起床阶段"
 *                 "level":"主要阶段"
 *                 "startTime":"07:30"
 *                 "endTime":"08:30",
 *                 "startTimeRange": "7:45-8:15",
 *                 "endTimeRange": "7:45-8:15",
 *                 "timeLenRangeMin": 20,
 *                 "timeLenReaneMax": 40,
 *                 "timePeriods": [
 *                     {
 *                          "id": "128624c3-0f17-11e7-9b59-000c293e6828",
 *                          "name":"晨练",
 *                          "title":"晨练"
 *                          "startTime":"07:30"
 *                          "endTime":"08:30"
 *                     },
 *                     ...
 *                 ]
 *             },
 *             ...
 *         ]
 *     }
 *
 * @apiUse AuthenticatedError
 *
 */
function getGeneralTimeStage() { return; }