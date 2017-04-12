/**
 * @api {get} /ExpectApi/getExpectList 获取期望列表
 * @apiVersion 2.0.0
 * @apiName getExpectList
 * @apiGroup Expect
 * @apiPermission login
 *
 * @apiDescription  根据人群ID查询期望列表
 *
 * @apiHeader {String} access-key Users unique access-key.
 *
 * @apiParam {String}  crowd            人群ID
 *
 * @apiSuccess {Boolean}    ok         是否成功
 * @apiSuccess {Object[]}   obj             期望列表
 * @apiSuccess {String}     obj.id              期望ID
 * @apiSuccess {String}     obj.name            期望名称
 * @apiSuccess {String}     obj.img             期望图片
 * @apiSuccess {String}     obj.type            期望类型
 *
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   {
        "ok": true,
        "obj": [
            {
                "id": "dc36f1c5-1488-11e7-9b59-000c293e6828",
                "name": "跌倒",
                "img": "/icons/zixiu/jianfeisuxing.png",
                "type": "减肥塑形",
            },
            ...
        ]
    }
 */
function getExpectList() {   return; }


/**
 * @api {get} /ExpectApi/getMyExpect 获取我的期望
 * @apiVersion 2.0.0
 * @apiName getMyExpect
 * @apiGroup Expect
 * @apiPermission login
 *
 * @apiDescription  获取我的期望项目
 *
 * @apiHeader {String} access-key Users unique access-key.
 *
 * @apiSuccess {Boolean}    ok              是否成功
 * @apiSuccess {Object[]}   obj             自修类型列表
 * @apiSuccess {String}     obj.id                  自修ID
 * @apiSuccess {String}     obj.name                自修名称
 * @apiSuccess {String}     obj.img                 自修图片
 *
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
  {
      "ok": true,
      "obj": [
          {
            "id": "dc36f1c5-1488-11e7-9b59-000c293e6828",
            "img": "/icons/zixiu/jianfeisuxing.png",
            "name": "减肥塑形",
          },
          ...
      ],
  }
 *
 */
function getMyExpect() {   return; }

/**
 * @api {get} /ExpectApi/addMyExpect 添加我的期望
 * @apiVersion 2.0.0
 * @apiName addMyExpect
 * @apiGroup Expect
 * @apiPermission login
 *
 * @apiDescription  添加我的期望
 *
 * @apiHeader {String} access-key Users unique access-key.
 *
 * @apiParam {String}  expectProjectId   期望项目ID
 *
 * @apiSuccess {Boolean}    ok         是否成功
 *
 */
function addMyExpect() {   return; }

/**
 * @api {get} /ExpectApi/deleteMyExpect 删除我的期望
 * @apiVersion 2.0.0
 * @apiName deleteMyExpect
 * @apiGroup Expect
 * @apiPermission login
 *
 * @apiDescription  删除我的期望
 *
 * @apiHeader {String} access-key Users unique access-key.
 *
 * @apiParam {String}  expectProjectId   期望项目ID
 *
 * @apiSuccess {Boolean}    ok         是否成功
 *
 */
function deleteMyExpect() {   return; }


/**
 * @api {get} /ExpectApi/getExpectDailyMethodsList 获取期望日常疗法列表
 * @apiVersion 2.0.0
 * @apiName getExpectDailyMethodsList
 * @apiGroup Expect
 * @apiPermission login
 *
 * @apiDescription  获取期望日常疗法列表
 *
 * @apiHeader {String} access-key Users unique access-key.
 *
 * @apiParam {String}  crowd            人群ID
 * @apiParam {String}  diseaseId        期望项目ID
 * @apiParam {String}  regionId         地区ID
 *
 * @apiSuccess {Boolean}    ok              是否成功
 * @apiSuccess {Object[]}   obj             期望的日常疗法列表
 * @apiSuccess {String}     obj.type            日常疗法的类型名称
 * @apiSuccess {Object}     obj.suitable        日常疗法的饮食类型的宜食
 * @apiSuccess {Object}     obj.fasting         日常疗法的饮食类型的禁食
 * @apiSuccess {Object[]}   obj.methods         日常疗法的各阶段饮食或方法列表
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
 * {
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
 *               "principle": "粗盐有发汗的作用，它可以排出体内的废物和多余的水分，促进皮肤的新陈代谢，还可以软化污垢、补充盐分和矿物质，使肌肤细致、紧绷。"
 *               "methods": [
 *                   {
 *                       "id": "543f81e4-14ad-11e7-9b59-000c293e6828",
 *                       "name": "粗盐减肥法",
 *                       "timePeriod": "睡前"
 *                   },
 *                   ...
 *               ]
 *           },
 *           {
 *               "type": "动",
 *               "principle": "粗盐有发汗的作用，它可以排出体内的废物和多余的水分，促进皮肤的新陈代谢，还可以软化污垢、补充盐分和矿物质，使肌肤细致、紧绷。"
 *               "methods": [
 *                   {
 *                       "id": "543f81e4-14ad-11e7-9b59-000c293e6828",
 *                       "name": "粗盐减肥法",
 *                       "timePeriod": "睡前"
 *                   },
 *                   ...
 *               ]
 *           },
 *           {
 *               "type": "静",
 *               "principle": "粗盐有发汗的作用，它可以排出体内的废物和多余的水分，促进皮肤的新陈代谢，还可以软化污垢、补充盐分和矿物质，使肌肤细致、紧绷。"
 *               "methods": [
 *                   {
 *                       "id": "543f81e4-14ad-11e7-9b59-000c293e6828",
 *                       "name": "粗盐减肥法",
 *                       "timePeriod": "睡前"
 *                   },
 *                   ...
 *               ]
 *           },
 *           {
 *               "type": "娱乐",
 *               "principle": "粗盐有发汗的作用，它可以排出体内的废物和多余的水分，促进皮肤的新陈代谢，还可以软化污垢、补充盐分和矿物质，使肌肤细致、紧绷。"
 *               "methods": [
 *                   {
 *                       "id": "543f81e4-14ad-11e7-9b59-000c293e6828",
 *                       "name": "粗盐减肥法",
 *                       "timePeriod": "睡前"
 *                   },
 *                   ...
 *               ]
 *           },
 *       ]
 * }
 *
 */
function getExpectDailyMethodsList() {   return; }

/**
 * @api {get} /ExpectApi/getExpectDailyMethodDetail 获取期望日常疗法详情
 * @apiVersion 2.0.0
 * @apiName getExpectDailyMethodDetail
 * @apiGroup Expect
 * @apiPermission login
 *
 * @apiDescription  获取期望日常疗法详情
 *
 * @apiHeader {String} access-key Users unique access-key.
 *
 * @apiParam {String}   id         方法ID
 *
 * @apiSuccess {Boolean}    ok              是否成功
 * @apiSuccess {Object}     obj             期望的日常疗法方法详情
 * @apiSuccess {String}     obj.name                      方法名称
 * @apiSuccess {String}     obj.threeCharacterClassic     方法三字经
 * @apiSuccess {String}     obj.img                       方法附件：图片/音频/视频
 * @apiSuccess {String}     obj.details                   方法详情
 * @apiSuccess {String}     obj.timePeriod                方法适用时段
 *
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 * {
 *      "ok":true,
 *      "obj": {
          name: "粗盐减肥法",
          threeCharacterClassic: "用粗盐，可减肥，拍废物，促代谢。",
          img: "/photo/cuyan.jpg",
          details: "1、每次洗澡前，取一杯粗盐加上少许热水拌成糊状，再把它涂在腹部。\n\t2、10分钟后，用热水把粗盐冲洗干净，也可以按摩后再冲掉，...",
          timePeriod: "睡前",
      }
 * }
 *
 */
function getExpectDailyMethodDetail() {   return; }

/**
 * @api {get} /ExpectApi/getExpectProfessionalMethodsList 获取期望专业疗法列表
 * @apiVersion 2.0.0
 * @apiName getExpectProfessionalMethodsList
 * @apiGroup Expect
 * @apiPermission login
 *
 * @apiDescription  获取期望专业疗法列表
 *
 * @apiHeader {String} access-key Users unique access-key.
 *
 * @apiParam {String}  crowd            人群ID
 * @apiParam {String}  diseaseId        期望ID
 * @apiParam {String}  regionId         地区ID
 *
 * @apiSuccess {Boolean}    ok              是否成功
 * @apiSuccess {Object}     obj             期望的专业疗法列表
 * @apiSuccess {String}     obj.id                 专业疗法方法ID
 * @apiSuccess {String}     obj.name               专业疗法方法名称
 * @apiSuccess {String}     obj.type               专业疗法方法所属类型
 *
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "ok": true,
 *      "obj":[
 *           {
 *               id: "ff5d9908-149b-11e7-9b59-000c293e6828",
 *               name: "茉莉花茶",
 *               type: "药用奇方",
 *           },
 *           ...
 *      ]
 *   }
 *
 */
function getExpectProfessionalMethodsList() {   return; }

/**
 * @api {get} /ExpectApi/getExpectProfessionalMethodDetail 获取期望专业疗法详情
 * @apiVersion 2.0.0
 * @apiName getExpectProfessionalMethodDetail
 * @apiGroup Expect
 * @apiPermission login
 *
 * @apiDescription  获取期望专业疗法详情
 *
 * @apiHeader {String} access-key Users unique access-key.
 *
 * @apiParam {String}   id         专业疗法ID
 *
 * @apiSuccess {Boolean}    ok              是否成功
 * @apiSuccess {Object}     obj             期望的专业疗法方法详情
 * @apiSuccess {String}     obj.name               方法名称
 * @apiSuccess {String}     obj.material           方法原料
 * @apiSuccess {String}     obj.makingMethod       方法制作方法
 * @apiSuccess {String}     obj.usageMethod        方法使用方法
 * @apiSuccess {String}     obj.type             方法类型
 *
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 * {
 *      "ok":true,
 *      "obj": {
          name: "茉莉花茶",
          material: "茉莉花10克，玫瑰花10克，荷叶10克，草决明10克，枳壳10克，泽兰12克，泽泻12克，桑葚15克，补骨脂15克，何首乌15克。",
          makingMethod: "上药用水煎。",
          usageMethod: "\t每日1剂，每剂分2次代茶饮。"
          type: "药用奇方",
      }
 * }
 *
 */
function getExpectProfessionalMethodDetail() {   return; }
