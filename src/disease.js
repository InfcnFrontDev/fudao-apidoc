/**
 * @api {get} /DiseaseApi/getDiseaseList 获取疾病列表
 * @apiVersion 2.0.0
 * @apiName getDiseaseList
 * @apiGroup Disease
 * @apiPermission login
 *
 * @apiDescription  根据人群ID查询疾病列表
 *
 * @apiHeader {String} access-key Users unique access-key.
 *
 * @apiParam {String}  renqunId         人群ID
 *
 * @apiSuccess {Object[]}   obj             疾病类型列表
 * @apiSuccess {String}     obj.id              疾病类型ID
 * @apiSuccess {String}     obj.name            疾病类型名称
 * @apiSuccess {String}     obj.orderNum        疾病类型名称
 * @apiSuccess {Object[]}   obj.diseases        同一类型疾病排序号
 * @apiSuccess {String}     obj.diseases.id                  疾病ID
 * @apiSuccess {String}     obj.diseases.name                疾病名称
 * @apiSuccess {String}     obj.diseases.title               疾病显示名称
 * @apiSuccess {String}     obj.diseases.img                 疾病图片
 * @apiSuccess {Number}     obj.diseases.orderNum            疾病排序号
 * @apiSuccess {Boolean}    ok         是否成功
 *
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   {
        "ok": true,
        "obj": [
            {
                "id": "17",
                "name": "跌倒",
                "title": "跌倒",
                "img": "/icons/disease/diedao.png",
                "type": "意外伤害",
            },
            ...
        ]
    }
 */
function getDiseaseList() {   return; }

/**
 * @api {get} /DiseaseApi/getMyDisease 获取我的问题
 * @apiVersion 2.0.0
 * @apiName getMyDisease
 * @apiGroup Disease
 * @apiPermission login
 *
 * @apiDescription  获取我的问题
 *
 * @apiHeader {String} access-key Users unique access-key.
 *
 * @apiParam {String}  userId           用户ID
 *
 *
 * @apiSuccess {Object[]}   obj             疾病类型列表
 * @apiSuccess {String}     obj.id                  疾病ID
 * @apiSuccess {String}     obj.name                疾病名称
 * @apiSuccess {String}     obj.title               疾病显示名称
 * @apiSuccess {String}     obj.img                 疾病图片
 * @apiSuccess {Number}     obj.orderNum            疾病排序号
 * @apiSuccess {Boolean}    ok              是否成功
 *
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   {
        "obj": [
            {
                "id": "17",
                "name": "跌倒",
                "title": "跌倒",
                "img": "/icons/disease/diedao.png",
                "orderNum": 17,
            },
            ...
        ],
        "ok": true
    }
 *
 */
function getMyDisease() {   return; }

/**
 * @api {get} /DiseaseApi/addMyDisease 添加我的问题
 * @apiVersion 2.0.0
 * @apiName addMyDisease
 * @apiGroup Disease
 * @apiPermission login
 *
 * @apiDescription  添加我的问题
 *
 * @apiHeader {String} access-key Users unique access-key.
 *
 * @apiParam {String}  userId           用户ID
 * @apiParam {String}  diseaseId        疾病ID
 *
 * @apiSuccess {Boolean}    ok         是否成功
 *
 */
function addMyDisease() {   return; }

/**
 * @api {get} /DiseaseApi/deleteMyDisease 删除我的问题
 * @apiVersion 2.0.0
 * @apiName deleteMyDisease
 * @apiGroup Disease
 * @apiPermission login
 *
 * @apiDescription  删除我的问题
 *
 * @apiHeader {String} access-key Users unique access-key.
 *
 * @apiParam {String}  userId           用户ID
 * @apiParam {String}  diseaseId        疾病ID
 *
 * @apiSuccess {Boolean}    ok         是否成功
 *
 */
function deleteMyDisease() {   return; }

/**
 * @api {get} /DiseaseApi/getDiseaseMethod 获取疾病疗法
 * @apiVersion 2.0.0
 * @apiName getDiseaseMethod
 * @apiGroup Disease
 * @apiPermission login
 *
 * @apiDescription  获取疾病疗法
 *
 * @apiHeader {String} access-key Users unique access-key.
 *
 * @apiParam {String}  renqunId         人群ID
 * @apiParam {String}  diseaseId        疾病ID
 * @apiParam {String}  regionId         地区ID
 *
 * @apiSuccess {Object}     obj             疾病的日常疗法和专业疗法
 * @apiSuccess {Object[]}   obj.dailyMethods        疾病的日常疗法分类列表
 * @apiSuccess {String}     obj.dailyMethods.type         疾病的日常疗法的类型
 * @apiSuccess {String}     obj.dailyMethods.typeValue    疾病的日常疗法的类型名称
 * @apiSuccess {Object}     obj.dailyMethods.datas        疾病的日常疗法的某一类型的数据
 * @apiSuccess {Object}     obj.dailyMethods.datas.dailyMethods        疾病的日常疗法的饮食类型的日常疗法数据
 * @apiSuccess {String}     obj.dailyMethods.datas.dailyMethods.id            日常疗法方法ID
 * @apiSuccess {String}     obj.dailyMethods.datas.dailyMethods.renqunId      人群ID
 * @apiSuccess {String}     obj.dailyMethods.datas.dailyMethods.type          日常疗法方法所属类型
 * @apiSuccess {String}     obj.dailyMethods.datas.dailyMethods.suitable      宜食
 * @apiSuccess {String}     obj.dailyMethods.datas.dailyMethods.fasting       禁食
 * @apiSuccess {Object[]}   obj.dailyMethods.datas.timePeriod                疾病的日常疗法中的饮食
 * @apiSuccess {String}     obj.dailyMethods.datas.timePeriod.timePeriod            疾病的日常疗法中的饮食的时期
 * @apiSuccess {Object}     obj.dailyMethods.datas.timePeriod.suitable              疾病的日常疗法中的午餐或晚餐阶段宜食（注：早餐或下午茶阶段宜食为Object[]类型，无staple和dishes之分）
 * @apiSuccess {Object}     obj.dailyMethods.datas.timePeriod.suitable.staple                疾病的日常疗法中的午餐或晚餐阶段饮食中的主食
 * @apiSuccess {Object}     obj.dailyMethods.datas.timePeriod.suitable.dishes                疾病的日常疗法中的午餐或晚餐阶段饮食中的菜品
 * @apiSuccess {Object[]}   obj.dailyMethods.datas.timePeriod.fasting               疾病的日常疗法中的某一阶段禁食
 * @apiSuccess {String}     obj.dailyMethods.datas.principle                  疾病的日常疗法的除饮食外的其他类型的日常疗法原理
 * @apiSuccess {Object[]}   obj.dailyMethods.datas.datas                     疾病的日常疗法的除饮食外的其他类型的日常疗法数据
 * @apiSuccess {String}     obj.dailyMethods.datas.datas.timePeriod                除饮食外的其他类型的日常疗法适用时段
 * @apiSuccess {Object[]}   obj.dailyMethods.datas.datas.dailyMethods        除饮食外的其他类型的日常疗法数据
 * @apiSuccess {String}     obj.dailyMethods.datas.datas.dailyMethods.id               日常疗法方法ID
 * @apiSuccess {String}     obj.dailyMethods.datas.datas.dailyMethods.name             日常疗法方法名称
 * @apiSuccess {String}     obj.dailyMethods.datas.datas.dailyMethods.img              日常疗法方法附件（图片/音频/视频）
 * @apiSuccess {String}     obj.dailyMethods.datas.datas.dailyMethods.detail           日常疗法方法详情
 * @apiSuccess {String}     obj.dailyMethods.datas.datas.dailyMethods.principle        日常疗法方法详原理
 * @apiSuccess {String}     obj.dailyMethods.datas.datas.dailyMethods.renqunId         人群ID
 * @apiSuccess {String}     obj.dailyMethods.datas.datas.dailyMethods.timePeriod       日常疗法方法适用时段
 * @apiSuccess {String}     obj.dailyMethods.datas.datas.dailyMethods.type             日常疗法方法所属类型
 * @apiSuccess {Object[]}   obj.professionalMethods  疾病的专业疗法分类列表
 * @apiSuccess {String}     obj.professionalMethods.type    疾病的专业疗法的类型名称
 * @apiSuccess {Object[]}   obj.professionalMethods.methods   疾病的专业疗法某一分类列表
 * @apiSuccess {String}     obj.professionalMethods.methods.id                 专业疗法方法ID
 * @apiSuccess {String}     obj.professionalMethods.methods.name               专业疗法方法名称
 * @apiSuccess {String}     obj.professionalMethods.methods.detail             专业疗法方法详情
 * @apiSuccess {String}     obj.professionalMethods.methods.type               专业疗法方法所属类型
 * @apiSuccess {String}     obj.professionalMethods.methods.renqunId           人群ID
 * @apiSuccess {Boolean}    ok              是否成功
 *
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
  {
        "obj": {
            "dailyMethods": [
 *               {
 *                   "type": "饮食",
 *                   "suitable": "寒凉性的食物/豆类及豆制品/含微量元素的食物",
 *                   "fasting": "辛辣刺激性食物/温热性食物/油炸类食物",
 *                   "methods": [
 *                       {
 *                           "timePeriod": "早餐",
 *                           "suitable": ["牛奶", "薏米"]
 *                       },
 *                       {
 *                           "timePeriod": "午餐",
 *                           "suitable": ["牛肺", "菜花", "白豆蔻", "粳米", "小麦"],
 *                           "fasting": ["狗肉", "鸭血"]
 *                       },
 *                       {
 *                           "timePeriod": "下午茶",
 *                           "suitable": ["香梨", "猕猴桃"]
 *                       },
 *                      {
 *                          "timePeriod": "晚餐",
 *                          "suitable": ["牛肺", "菜花", "白豆蔻", "粳米", "小麦"],
 *                          "fasting": ["狗肉", "鸭血"]
 *                      }
 *                  ]
 *              },
 *              {
 *                  "type": "起居",
 *                  "principle": "保证充足高质量的睡眠，可以减少热量摄入和脂肪囤积。"
 *                  "methods": [
 *                      {
 *                          "id": "36",
 *                          "name": "睡前不要吃东西",
 *                          "timePeriod": "睡前"
 *                      },
 *                      ...
 *                  ]
 *              },
 *              {
 *                  "type": "动",
 *                  "principle": "保证充足高质量的睡眠，可以减少热量摄入和脂肪囤积。"
 *                  "methods": [
 *                      {
 *                          "id": "36",
 *                          "name": "睡前不要吃东西",
 *                          "timePeriod": "睡前"
 *                      },
 *                      ...
 *                  ]
 *              },
 *              {
 *                  "type": "静",
 *                  "principle": "保证充足高质量的睡眠，可以减少热量摄入和脂肪囤积。"
 *                  "methods": [
 *                      {
 *                          "id": "36",
 *                          "name": "睡前不要吃东西",
 *                          "timePeriod": "睡前"
 *                      },
 *                      ...
 *                  ]
 *              },
 *              {
 *                  "type": "娱乐",
 *                  "principle": "保证充足高质量的睡眠，可以减少热量摄入和脂肪囤积。"
 *                  "methods": [
 *                      {
 *                          "id": "36",
 *                          "name": "睡前不要吃东西",
 *                          "timePeriod": "睡前"
 *                      },
 *                      ...
 *                  ]
 *              },
 *           ],
 *           "professionalMethods": [
 *               {
 *                   "id": "101",
 *                   "name": "拔罐疗法",
 *                   "type": "拔罐"
 *               },
 *               ...
 *           ]
 *       },
 *       "ok": true
 * }
 *
 */
function getDiseaseMethod() {   return; }
