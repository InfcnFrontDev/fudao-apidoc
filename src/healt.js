/**
 * @api {get} /HealthApi/getHealthDailyMethodList 获取节气日常疗法列表
 * @apiVersion 2.0.0
 * @apiName getHealthDailyMethodList
 * @apiGroup Health
 * @apiPermission login
 *
 * @apiDescription  根据人群、节气，获取节气日常疗法列表
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiSuccess {Boolean}    ok                              是否成功
 * @apiSuccess {Object[]}   obj                             自养的日常疗法列表
 * @apiSuccess {String}     obj.type                        日常疗法的类型名称
 * @apiSuccess {Object}     obj.suitable                    日常疗法的饮食类型的宜食
 * @apiSuccess {Object}     obj.fasting                     日常疗法的饮食类型的禁食
 * @apiSuccess {Object[]}   obj.methods                     日常疗法的各阶段饮食或方法列表
 * @apiSuccess {String}     obj.methods.timePeriod          日常疗法中饮食类型的适用时段
 * @apiSuccess {Object[]}   obj.methods.suitable            日常疗法中饮食类型的宜食
 * @apiSuccess {Object[]}   obj.methods.fasting             日常疗法中饮食类型的禁食(早餐、下午茶阶段不包含此字段，午餐、晚餐阶段包含此字段)
 * @apiSuccess {String}     obj.methods.id                  日常疗法中除饮食类型外其他类型的方法ID
 * @apiSuccess {String}     obj.methods.name                日常疗法中除饮食类型外其他类型的方法名称
 * @apiSuccess {String}     obj.methods.timePeriod          日常疗法中除饮食类型外其他类型的方法适用时段
 * @apiSuccess {String}     obj.principle       日常疗法的除饮食外的其他类型的日常疗法原理
 *
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "ok":true,
 *      "obj": [
 *           {
 *               "type": "饮食",
 *               "suitable": "寒凉性的食物/豆类及豆制品/含微量元素的食物",
 *               "fasting": "辛辣刺激性食物/温热性食物/油炸类食物",
 *               "methods": [
 *                   {
 *                       "timePeriod": "早餐",
 *                       "suitable": ["牛奶", "薏米"]
 *                   },
 *                   {
 *                       "timePeriod": "午餐",
 *                       "suitable": ["牛肺", "菜花", "白豆蔻", "粳米", "小麦"],
 *                       "fasting": ["狗肉", "鸭血"]
 *                   },
 *                   {
 *                       "timePeriod": "下午茶",
 *                       "suitable": ["香梨", "猕猴桃"]
 *                   },
 *                  {
 *                      "timePeriod": "晚餐",
 *                      "suitable": ["牛肺", "菜花", "白豆蔻", "粳米", "小麦"],
 *                      "fasting": ["狗肉", "鸭血"]
 *                  }
 *              ]
 *           },
 *           {
 *               "type": "起居",
 *               "principle": "保证充足高质量的睡眠，可以减少热量摄入和脂肪囤积。"
 *               "methods": [
 *                   {
 *                       "id": "36",
 *                       "name": "睡前不要吃东西",
 *                       "timePeriod": "睡前"
 *                   },
 *                   ...
 *               ]
 *           },
 *           {
 *               "type": "动",
 *               "principle": "保证充足高质量的睡眠，可以减少热量摄入和脂肪囤积。"
 *               "methods": [
 *                   {
 *                       "id": "36",
 *                       "name": "睡前不要吃东西",
 *                       "timePeriod": "睡前"
 *                   },
 *                   ...
 *               ]
 *           },
 *           {
 *               "type": "静",
 *               "principle": "保证充足高质量的睡眠，可以减少热量摄入和脂肪囤积。"
 *               "methods": [
 *                   {
 *                       "id": "36",
 *                       "name": "睡前不要吃东西",
 *                       "timePeriod": "睡前"
 *                   },
 *                   ...
 *               ]
 *           },
 *           {
 *               "type": "娱乐",
 *               "principle": "保证充足高质量的睡眠，可以减少热量摄入和脂肪囤积。"
 *               "methods": [
 *                   {
 *                       "id": "36",
 *                       "name": "睡前不要吃东西",
 *                       "timePeriod": "睡前"
 *                   },
 *                   ...
 *               ]
 *           },
 *       ]
 *   }
 *
 * @apiUse AuthenticatedError
 *
 */
function getHealthDailyMethodList() {   return; }

/**
 * @api {get} /HealthApi/getHealthDailyMethodDetail 获取节气日常疗法详情
 * @apiVersion 2.0.0
 * @apiName getHealthDailyMethodDetail
 * @apiGroup Health
 * @apiPermission login
 *
 * @apiDescription  获取节气日常疗法详情
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {String}   id         日常方法ID
 *
 * @apiSuccess {Boolean}    ok              是否成功
 * @apiSuccess {Object}     obj             节气的日常疗法方法详情
 * @apiSuccess {String}     obj.id                        方法ID
 * @apiSuccess {String}     obj.name                      方法名称
 * @apiSuccess {String}     obj.img                       方法附件：图片/音频/视频
 * @apiSuccess {String}     obj.threeCharacterClassic     方法三字经
 * @apiSuccess {String}     obj.detail                   方法详情
 *
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "ok":true,
 *      "obj": {
 *          "id": "91723491hf-ajdhfkaqwerqew1239-4193749fhaw",
 *          "name": "睡前不要吃东西",
 *          "img": "/photo/shuiqianbuchidongxi.jpg",
 *          "threeCharacterClassic":"用粗盐，可减肥，拍废物，促代谢。",
 *          "detail": "1、晚餐最好是睡前4个小时吃。除了晚餐，最好不要吃夜宵。\n2、睡前大吃大喝向来是减肥的大忌，水也要少喝。\n3、除此之外，一些坏习惯也要改改，比如上网看电视时喜欢吃东西，这是很容易堆积脂肪的，而且入睡前吃掉太多东西，很容易让人兴奋，更加不容易睡眠，这会直接影响到睡眠减肥的效果哦!",
 *       }
 *   }
 *
 * @apiUse AuthenticatedError
 *
 *
 */
function getHealthDailyMethodDetail() {   return; }


/**
 * @api {get} /HealthApi/getSolarTerm 获取节气信息
 * @apiVersion 2.0.0
 * @apiName getSolarTerm
 * @apiGroup Health
 * @apiPermission login
 *
 * @apiDescription  获取当前节气信息
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiSuccess {Boolean}    ok              是否成功
 * @apiSuccess {Object}     obj             节气详情
 * @apiSuccess {String}     obj.name        节气名称
 * @apiSuccess {String}     obj.img         节气图片
 * @apiSuccess {String}     obj.detail      节气详情
 *
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "ok":true,
 *      "obj": {
 *          "name": "惊蛰",
 *          "img": "/solarterm/shuiqianbuchidongxi.jpg",
 *          "detail": "桃始华，仓庚鸣，鹰化为鸠。",
 *       }
 *   }
 *
 * @apiUse AuthenticatedError
 *
 */
function getSolarTerm() {   return; }
