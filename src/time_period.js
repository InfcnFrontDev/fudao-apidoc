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
 * @apiParam {Number} dayType 	    天类型，1：工作日，2：休息日，如果为null，则取当天的类型。
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
 *         "obj": [
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


/**
 * @api {get} /TimePeriodApi/getTimeStageTherapyList 获取时间段的推荐疗法
 * @apiVersion 2.0.0
 * @apiName getTimeStageTherapyList
 * @apiGroup TimePeriod
 * @apiPermission login
 *
 * @apiDescription 获取时间段的推荐疗法。
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {String}    timePeriod	       时间分段
 *
 * @apiSuccess {Boolean}    success           是否成功
 * @apiSuccess {Object[]}   obj               时段疗法列表
 * @apiSuccess {String}     obj.timePeriod                时段
 * @apiSuccess {String}     obj.name                      名称
 * @apiSuccess {String}     obj.img                       图片
 * @apiSuccess {String}     obj.principle                 原理
 * @apiSuccess {String}     obj.threeCharacterClassic     三字经
 * @apiSuccess {String}     obj.detail                    详细
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "ok":true,
 *         "obj": [
 *             {
 *                 timePeriod: "晨练",
 *                 name: "揉心窝",
 *                 img: "pic/rouxinwo.png",
 *                 principle: "\t揉心窝可以有效止胃痛、祛胃寒、养胃气。",
 *                 threeCharacterClassic: "揉心窝，止胃痛，祛胃寒，养胃气。",
 *                 detail: "\t1.心窝也就是中脘穴以上，胸骨以下的位置。这里虽然叫心窝，其实是胃所在的位置。\n\t2.将双手交迭，用掌跟在这里按揉，顺时针方向和逆时针方向各揉36圈以上。\n\t3.既保养了胃气，又能减轻压力，使心中畅快。"
 *             },
 *             ...
 *         ]
 *     }
 *
 * @apiUse AuthenticatedError
 *
 */
function getTimeStageTherapyList() { return; }


/**
 * @api {get} /TimePeriodApi/getAllDayMotionList 获取全天的运动列表
 * @apiVersion 2.0.0
 * @apiName getAllDayMotionList
 * @apiGroup TimePeriod
 * @apiPermission login
 *
 * @apiDescription 获取全天所有时段的运动列表。
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiSuccess {Boolean}    success           是否成功
 * @apiSuccess {Object[]}   obj               时段运动列表
 * @apiSuccess {String}     obj.timePeriod    时段
 * @apiSuccess {String}     obj.name          运动名称
 * @apiSuccess {String}     obj.img           运动图片
 * @apiSuccess {String}     obj.threeCharacterClassic           三字经
 * @apiSuccess {String}     obj.detail           详情
 *
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "ok":true,
 *         "obj": [
 *             {
 *                 "timePeriod": "晨练",
 *                 "name": "揉心窝",
 *                 "img": "pic/rouxinwo.png",
 *                 "detail": "1.洗净双手互相摩擦，待搓热后用手掌贴双眼(闭着眼睛)，反复3次以上。\\n2.用食指、中指、无名指的指端轻轻按压眼球，也可以旋转轻揉，但不可持续太久，也不可用力压揉，持续20秒左右即可。",
 *                 "threeCharacterClassic": "手热敷，促循环，利泪腺，助分泌。"
 *             },
 *             {
 *                 "timePeriod": "运动",
 *                 "name": "内养功",
 *                 "img": "pic/neiyanggong.jpg",
 *                 "detail": "1.洗净双手互相摩擦，待搓热后用手掌贴双眼(闭着眼睛)，反复3次以上。\\n2.用食指、中指、无名指的指端轻轻按压眼球，也可以旋转轻揉，但不可持续太久，也不可用力压揉，持续20秒左右即可。",
 *                 "threeCharacterClassic": "手热敷，促循环，利泪腺，助分泌。"
 *             },
 *             ...
 *         ],
 *     }
 *
 * @apiUse AuthenticatedError
 *
 */
function getAllDayMotionList() { return; }




/**
 * @api {get} /TimePeriodApi/saveMyTimePeriod 保存我的时间段
 * @apiVersion 2.0.0
 * @apiName saveMyTimePeriod
 * @apiGroup TimePeriod
 * @apiPermission login
 *
 * @apiDescription 获取全天所有时段的运动列表。
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {Number} dayType 	    天类型，1：工作日，2：休息日
 * @apiParam {String} jsonData 	    时间阶段和分段
 *
 *
 * @apiParamExample {json} Param (example):
 *     {
 *         "jsonData": [
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
 * @apiSuccess {Boolean}    success           是否成功
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "ok":true,
 *     }
 *
 * @apiUse AuthenticatedError
 *
 */
function saveMyTimePeriod() { return; }