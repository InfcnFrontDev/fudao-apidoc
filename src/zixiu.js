/**
 * @api {get} /ZixiuApi/getZixiuList 获取自修列表
 * @apiVersion 2.0.0
 * @apiName getZixiuList
 * @apiGroup Zixiu
 * @apiPermission login
 *
 * @apiDescription  根据人群查询自修部位和项目
 *
 * @apiHeader {String} access-key Users unique access-key.
 *
 * @apiParam {String}  renqunId         人群ID
 *
 * @apiSuccess {Object[]}   obj             自修类型列表
 * @apiSuccess {String}     obj.id              自修类型ID
 * @apiSuccess {String}     obj.name            自修类型名称
 * @apiSuccess {String}     obj.orderNum        自修类型名称
 * @apiSuccess {Object[]}   obj.zixiuProject        同一类型自修排序号
 * @apiSuccess {String}     obj.zixiuProject.id                  自修ID
 * @apiSuccess {String}     obj.zixiuProject.name                自修名称
 * @apiSuccess {String}     obj.zixiuProject.img                 自修图片
 * @apiSuccess {Number}     obj.zixiuProject.orderNum            自修排序号
 * @apiSuccess {Boolean}    ok         是否成功
 *
 * @apiSuccessExample {json} Success-Response:
  *   HTTP/1.1 200 OK
  *   {
    "msg": "",
    "obj": [
        {
            "id": "fac9becb-1485-11e7-9b59-000c293e6828",
            "name": "整体",
            "orderNum": 1,
            "zixiuProject": [
                {
                    "id": "dc36f1c5-1488-11e7-9b59-000c293e6828",
                    "img": "/icons/zixiu/jianfeisuxing.png",
                    "name": "减肥塑形",
                    "orderNum": 1
                },
                ...
            ]
        },
        ....
    ],
    "ok": true
}
 */
function getZixiuList() {   return; }

/**
 * @api {get} /ZixiuApi/getMyZixiu 获取我的自修
 * @apiVersion 2.0.0
 * @apiName getMyZixiu
 * @apiGroup Zixiu
 * @apiPermission login
 *
 * @apiDescription  获取我的自修项目
 *
 * @apiHeader {String} access-key Users unique access-key.
 *
 * @apiParam {String}  userId           用户ID
 *
 *
 * @apiSuccess {Object[]}   obj             自修类型列表
 * @apiSuccess {String}     obj.id                  自修ID
 * @apiSuccess {String}     obj.name                自修名称
 * @apiSuccess {String}     obj.img                 自修图片
 * @apiSuccess {Number}     obj.orderNum            自修排序号
 * @apiSuccess {Boolean}    ok              是否成功
 *
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *  {
        "obj": [
            {
                "id": "dc36f1c5-1488-11e7-9b59-000c293e6828",
                "img": "/icons/zixiu/jianfeisuxing.png",
                "name": "减肥塑形",
                "orderNum": 1
            }
        ],
        "ok": true
  }
 *
 */
function getMyZixiu() {   return; }

/**
 * @api {get} /ZixiuApi/addMyZixiu 添加我的自修
 * @apiVersion 2.0.0
 * @apiName addMyZixiu
 * @apiGroup Zixiu
 * @apiPermission login
 *
 * @apiDescription  添加我的自修
 *
 * @apiHeader {String} access-key Users unique access-key.
 *
 * @apiParam {String}  userId           用户ID
 * @apiParam {String}  zixiuProjectId   自修项目ID
 *
 * @apiSuccess {Boolean}    ok         是否成功
 *
 */
function addMyZixiu() {   return; }

/**
 * @api {get} /ZixiuApi/deleteMyZixiu 删除我的自修
 * @apiVersion 2.0.0
 * @apiName deleteMyZixiu
 * @apiGroup Zixiu
 * @apiPermission login
 *
 * @apiDescription  删除我的自修
 *
 * @apiHeader {String} access-key Users unique access-key.
 *
 * @apiParam {String}  userId           用户ID
 * @apiParam {String}  zixiuProjectId   自修项目ID
 *
 * @apiSuccess {Boolean}    ok         是否成功
 *
 */
function deleteMyZixiu() {   return; }

/**
 * @api {get} /ZixiuApi/getZixiuMethod 获取自修疗法
 * @apiVersion 2.0.0
 * @apiName getZixiuMethod
 * @apiGroup Zixiu
 * @apiPermission login
 *
 * @apiDescription  获取自修疗法
 *
 * @apiHeader {String} access-key Users unique access-key.
 *
 * @apiParam {String}  renqunId         人群ID
 * @apiParam {String}  diseaseId        自修ID
 * @apiParam {String}  regionId         地区ID
 *
 * @apiSuccess {Object}     obj             自修的日常疗法和专业疗法
 * @apiSuccess {Object[]}   obj.dailyMethods        自修的日常疗法分类列表
 * @apiSuccess {String}     obj.dailyMethods.type         自修的日常疗法的类型
 * @apiSuccess {String}     obj.dailyMethods.typeValue    自修的日常疗法的类型名称
 * @apiSuccess {Object}     obj.dailyMethods.datas        自修的日常疗法的某一类型的数据
 * @apiSuccess {Object}     obj.dailyMethods.datas.dailyMethods        自修的日常疗法的饮食类型的日常疗法数据
 * @apiSuccess {String}     obj.dailyMethods.datas.dailyMethods.id            日常疗法方法ID
 * @apiSuccess {String}     obj.dailyMethods.datas.dailyMethods.renqunId      人群ID
 * @apiSuccess {String}     obj.dailyMethods.datas.dailyMethods.type          日常疗法方法所属类型
 * @apiSuccess {String}     obj.dailyMethods.datas.dailyMethods.suitable      宜食
 * @apiSuccess {String}     obj.dailyMethods.datas.dailyMethods.fasting       禁食
 * @apiSuccess {Object[]}   obj.dailyMethods.datas.timePeriod                自修的日常疗法中的饮食
 * @apiSuccess {String}     obj.dailyMethods.datas.timePeriod.timePeriod            自修的日常疗法中的饮食的时期
 * @apiSuccess {Object}     obj.dailyMethods.datas.timePeriod.suitable              自修的日常疗法中的午餐或晚餐阶段宜食（注：早餐或下午茶阶段宜食为Object[]类型，无staple和dishes之分）
 * @apiSuccess {Object}     obj.dailyMethods.datas.timePeriod.suitable.staple                自修的日常疗法中的午餐或晚餐阶段宜食中的主食
 * @apiSuccess {Object}     obj.dailyMethods.datas.timePeriod.suitable.dishes                自修的日常疗法中的午餐或晚餐阶段宜食中的菜品
 * @apiSuccess {Object[]}   obj.dailyMethods.datas.timePeriod.fasting               自修的日常疗法中的某一阶段禁食
 * @apiSuccess {String}     obj.dailyMethods.datas.principle                 自修的日常疗法的除饮食外的其他类型的日常疗法原理
 * @apiSuccess {Object[]}   obj.dailyMethods.datas.datas                     自修的日常疗法的除饮食外的其他类型的日常疗法数据
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
 * @apiSuccess {String}     obj.dailyMethods.datas.datas.dailyMethods.threeCharacterClassic 日常疗法方法三字经
 * @apiSuccess {Object[]}   obj.professionalMethods  自修的专业疗法分类列表
 * @apiSuccess {String}     obj.professionalMethods.type    自修的专业疗法的类型名称
 * @apiSuccess {Object[]}   obj.professionalMethods.methods   自修的专业疗法某一分类列表
 * @apiSuccess {String}     obj.professionalMethods.methods.id                 专业疗法方法ID
 * @apiSuccess {String}     obj.professionalMethods.methods.name               专业疗法方法名称
 * @apiSuccess {String}     obj.professionalMethods.methods.material           专业疗法方法原料
 * @apiSuccess {String}     obj.professionalMethods.methods.makingMethod       专业疗法方法制作方法
 * @apiSuccess {String}     obj.professionalMethods.methods.usageMethod        专业疗法方法使用方法
 * @apiSuccess {String}     obj.professionalMethods.methods.type               专业疗法方法所属类型
 * @apiSuccess {String}     obj.professionalMethods.methods.renqunId           人群ID
 * @apiSuccess {Boolean}    ok              是否成功
 *
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   {
        "obj": {
           "dailyMethods": [
            {
                "datas": {
                    "dailyMethods": {
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
                            "dailyMethods": [
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
                "methods": [
                    {
                        "id": "ff5d9908-149b-11e7-9b59-000c293e6828",
                        "makingMethod": "上药用水煎。",
                        "material": "茉莉花10克，玫瑰花10克，荷叶10克，草决明10克，枳壳10克，泽兰12克，泽泻12克，桑葚15克，补骨脂15克，何首乌15克。",
                        "name": "茉莉花茶",
                        "type": "药用奇方",
                        "usageMethod": "\\t每日1剂，每剂分2次代茶饮。"
                    }
                ],
                "type": "食疗药膳"
            },
            ...
        ]
    },
    "ok": true
    }
 *
 */
function getZixiuMethod() {   return; }
