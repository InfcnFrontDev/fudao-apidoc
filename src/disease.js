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
 * @apiSuccess {Object[]}   datas             疾病类型列表
 * @apiSuccess {String}     datas.id              疾病类型ID
 * @apiSuccess {String}     datas.name            疾病类型名称
 * @apiSuccess {String}     datas.orderNum        疾病类型名称
 * @apiSuccess {Object[]}   datas.diseases        同一类型疾病排序号
 * @apiSuccess {String}     datas.diseases.id                  疾病ID
 * @apiSuccess {String}     datas.diseases.name                疾病名称
 * @apiSuccess {String}     datas.diseases.title               疾病显示名称
 * @apiSuccess {String}     datas.diseases.img                 疾病图片
 * @apiSuccess {Number}     datas.diseases.orderNum            疾病排序号
 * @apiSuccess {Boolean}    ok         是否成功
 *
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   {
        "datas": [
            {
                "diseases": [
                    {
                      "id": "17",
                      "name": "跌倒",
                      "title": "跌倒",
                      "img": "/icons/disease/diedao.png",
                      "orderNum": 17,
                    },
                    ...
                ],
                "id": "1",
                "name": "意外伤害",
                "orderNum": 1,
            },
            ...
        ],
        "ok": true
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
 * @apiParam {String}  diseaseId        疾病ID
 *
 *
 * @apiSuccess {Object[]}   datas             疾病类型列表
 * @apiSuccess {String}     datas.id                  疾病ID
 * @apiSuccess {String}     datas.name                疾病名称
 * @apiSuccess {String}     datas.title               疾病显示名称
 * @apiSuccess {String}     datas.img                 疾病图片
 * @apiSuccess {Number}     datas.orderNum            疾病排序号
 * @apiSuccess {Boolean}    ok              是否成功
 *
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   {
        "datas": [
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
 * @apiSuccess {Object}     datas             疾病的日常疗法和专业疗法
 * @apiSuccess {Object[]}   datas.dailyMethods        疾病的日常疗法分类列表
 * @apiSuccess {String}     datas.dailyMethods.type         疾病的日常疗法的类型
 * @apiSuccess {String}     datas.dailyMethods.typeValue    疾病的日常疗法的类型名称
 * @apiSuccess {Object}     datas.dailyMethods.datas        疾病的日常疗法的某一类型的数据
 * @apiSuccess {Object}     datas.dailyMethods.datas.diseaseDailyMethod        疾病的日常疗法的饮食类型的日常疗法数据
 * @apiSuccess {String}     datas.dailyMethods.datas.diseaseDailyMethod.id            日常疗法方法ID
 * @apiSuccess {String}     datas.dailyMethods.datas.diseaseDailyMethod.renqunId      人群ID
 * @apiSuccess {String}     datas.dailyMethods.datas.diseaseDailyMethod.type          日常疗法方法所属类型
 * @apiSuccess {String}     datas.dailyMethods.datas.diseaseDailyMethod.suitable      宜食
 * @apiSuccess {String}     datas.dailyMethods.datas.diseaseDailyMethod.fasting       禁食
 * @apiSuccess {Object[]}   datas.dailyMethods.datas.timePeriod                疾病的日常疗法中的饮食
 * @apiSuccess {String}     datas.dailyMethods.datas.timePeriod.timePeriod            疾病的日常疗法中的饮食的时期
 * @apiSuccess {Object[]}   datas.dailyMethods.datas.timePeriod.suitable              疾病的日常疗法中的早餐或下午茶阶段饮食宜食
 * @apiSuccess {Object[]}   datas.dailyMethods.datas.timePeriod.fasting               疾病的日常疗法中的某一阶段饮食禁食
 * @apiSuccess {Object}     datas.dailyMethods.datas.timePeriod.suitable              疾病的日常疗法中的午餐或晚餐阶段饮食宜食
 * @apiSuccess {Object}     datas.dailyMethods.datas.timePeriod.suitable.staple                疾病的日常疗法中的午餐或晚餐阶段饮食宜食中的主食
 * @apiSuccess {Object}     datas.dailyMethods.datas.timePeriod.suitable.dishes                疾病的日常疗法中的午餐或晚餐阶段饮食宜食中的菜品
 * @apiSuccess {String}     datas.dailyMethods.datas.principle                  疾病的日常疗法的除饮食外的其他类型的日常疗法原理
 * @apiSuccess {Object[]}   datas.dailyMethods.datas.datas                     疾病的日常疗法的除饮食外的其他类型的日常疗法数据
 * @apiSuccess {String}     datas.dailyMethods.datas.datas.timePeriod                除饮食外的其他类型的日常疗法适用时段
 * @apiSuccess {Object[]}   datas.dailyMethods.datas.datas.diseaseDailyMethod        除饮食外的其他类型的日常疗法数据
 * @apiSuccess {String}     datas.dailyMethods.datas.datas.diseaseDailyMethod.id               日常疗法方法ID
 * @apiSuccess {String}     datas.dailyMethods.datas.datas.diseaseDailyMethod.name             日常疗法方法名称
 * @apiSuccess {String}     datas.dailyMethods.datas.datas.diseaseDailyMethod.img              日常疗法方法附件（图片/音频/视频）
 * @apiSuccess {String}     datas.dailyMethods.datas.datas.diseaseDailyMethod.detail           日常疗法方法详情
 * @apiSuccess {String}     datas.dailyMethods.datas.datas.diseaseDailyMethod.principle        日常疗法方法详原理
 * @apiSuccess {String}     datas.dailyMethods.datas.datas.diseaseDailyMethod.renqunId         人群ID
 * @apiSuccess {String}     datas.dailyMethods.datas.datas.diseaseDailyMethod.timePeriod       日常疗法方法适用时段
 * @apiSuccess {String}     datas.dailyMethods.datas.datas.diseaseDailyMethod.type             日常疗法方法所属类型
 * @apiSuccess {Object[]}   datas.professionalMethod  疾病的专业疗法分类列表
 * @apiSuccess {Object[]}   datas.professionalMethod.type    疾病的专业疗法的类型名称
 * @apiSuccess {Object[]}   datas.professionalMethod.datas   疾病的专业疗法某一分类列表
 * @apiSuccess {Object[]}   datas.professionalMethod.datas.id                 专业疗法方法ID
 * @apiSuccess {Object[]}   datas.professionalMethod.datas.name               专业疗法方法名称
 * @apiSuccess {Object[]}   datas.professionalMethod.datas.detail             专业疗法方法详情
 * @apiSuccess {Object[]}   datas.professionalMethod.datas.type               专业疗法方法所属类型
 * @apiSuccess {Object[]}   datas.professionalMethod.datas.renqunId           人群ID
 * @apiSuccess {Boolean}    ok              是否成功
 *
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   {
        "datas": {
           "dailyMethods": [
            {
                "datas": {
                    "diseaseDailyMethod": {
                        "id": "4",
                        "suitable": "寒凉性的食物/豆类及豆制品/含微量元素的食物"
                        "fasting": "辛辣刺激性食物/温热性食物/油炸类食物",
                        "renqunId": "aged",
                        "type": "1",
                    },
                    "timePeriod": [
                        {
                            "timePeriod": "早餐",
                            "suitable": [
                                {
                                    "id": "71",
                                    "name": "牛奶"
                                },
                                ...
                            ]
                        },
                        {
                            "timePeriod": "午餐",
                            "suitable": {
                                "staple": [.....],
                                "dishes": [....]
                            },
                            "fasting": [....]
                        },
                        {
                            下午茶，格式同早餐（本数组第一项）
                        },
                        {
                            晚餐，格式同午餐（本数组第二项）
                        }
                    ]
                },
                "type": "1",
                "type_value": "饮食"
            },
            {
                "datas": {
                    "datas": [
                        {
                            "diseaseDailyMethods": [
                                {
                                    "details": "1、晚餐最好是睡前4个小时吃。除了晚餐，最好不要吃夜宵。\n2、睡前大吃大喝向来是减肥的大忌，水也要少喝。\n3、除此之外，一些坏习惯也要改改，比如上网看电视时喜欢吃东西，这是很容易堆积脂肪的，而且入睡前吃掉太多东西，很容易让人兴奋，更加不容易睡眠，这会直接影响到睡眠减肥的效果哦!",
                                    "id": "36",
                                    "img": "/photo/shuiqianbuchidongxi.jpg",
                                    "name": "睡前不要吃东西",
                                    "principle": "保证充足高质量的睡眠，可以减少热量摄入和脂肪囤积。",
                                    "renqunId": "aged",
                                    "timePeriod": "睡前",
                                    "type": "2"
                                }
                            ],
                            "startTime": "21:30",
                            "timePeriod": "睡前"
                        }
                    ],
                    "principle": "保证充足高质量的睡眠，可以减少热量摄入和脂肪囤积。"
                },
                "type": "2",
                "type_value": "起居"
            },
            ...格式类型同type：2
        ],
        "professionalMethods": [
            {
                "datas": [
                    {
                        "details": "取穴：中脘、三阴交、天枢、巨阙、大横、腹结。\n操作：每次选用4-5穴，根据患者肥胖程度选用大号或中号火罐，以闪火法拔罐，留罐10-20min，每日1次，15次为1个疗程。",
                        "id": "101",
                        "name": "拔罐疗法",
                        "renqunId": "aged",
                        "type": "拔罐"
                    }
                ],
                "type": "拔罐"
            },
            ...
        ]
    },
        "success": true
    }
 *
 */
function getDiseaseMethod() {   return; }
