/**
 * @api {get} /CookbookApi/getCookbookList 获取菜品列表
 * @apiVersion 2.0.0
 * @apiName getCookbookList
 * @apiGroup Cookbook
 * @apiPermission login
 *
 * @apiDescription 根据食材和个数，获取推荐的菜品。
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {String} ingredient	   食材名称
 * @apiParam {Number} [num=4]	       推荐个数
 *
 * @apiSuccess {Boolean}    ok                       是否成功
 * @apiSuccess {Object[]}   obj                      菜品列表
 * @apiSuccess {String}     obj.id                   菜品ID
 * @apiSuccess {String}     obj.name                 菜品名称
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "ok": true,
 *         "obj": [
 *             {
 *                 "id": "11269e42-0d7d-11e7-9b59-000c293e6828",
 *                 "name": "番茄牛肉"
 *             },
 *             {
 *                 "id": "110681b1-0d7d-11e7-9b59-000c293e6828",
 *                 "name": "炒白菜"
 *             },
 *             {
 *                 "id": "1106775f-0d7d-11e7-9b59-000c293e6828",
 *                 "name": "拔丝地瓜"
 *             },
 *             ...
 *         ]
 *     }
 *
 * @apiUse AuthenticatedError
 *
 */
function getCookbookList() { return; }


/**
 * @api {get} /CookbookApi/getCookbook 获取菜品详细
 * @apiVersion 2.0.0
 * @apiName getCookbook
 * @apiGroup Cookbook
 * @apiPermission login
 *
 * @apiDescription 根据菜品ID或名称，获取菜谱详细。
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam (ID查询){String}   id	       菜品ID
 * @apiParam (名称查询){String}  name	   菜品名称

 *
 * @apiSuccess {Boolean}    ok                       是否成功
 * @apiSuccess {Object[]}   obj                      菜品对象
 * @apiSuccess {String}     obj.id                   菜品ID
 * @apiSuccess {String}     obj.name                 菜名
 * @apiSuccess {String}     obj.img                  菜品图片
 * @apiSuccess {String}     obj.mainIngredient       主料
 * @apiSuccess {String}     obj.auxiliaryIngredient  辅料
 * @apiSuccess {String}     obj.steps                做法步骤
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "ok": true,
 *         "obj": {
 *             "id": "11269e42-0d7d-11e7-9b59-000c293e6828",
 *             "name": "豆角焖面",
 *             "img": ""../../1.jpg,
 *             "mainIngredient": "豆角",
 *             "auxiliaryIngredient": "面条，肉",
 *             "steps":"1.热油，放肉。。。。。。"
 *         }
 *     }
 *
 * @apiUse AuthenticatedError
 *
 */
function getCookbook() { return; }
