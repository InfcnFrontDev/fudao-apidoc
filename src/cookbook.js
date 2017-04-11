/**
 * @api {get} /CookbookApi/getCookbookList 获取菜谱信息
 * @apiVersion 2.0.0
 * @apiName getCookbookList
 * @apiGroup Cookbook
 * @apiPermission login
 *
 * @apiDescription 获取菜谱及详细。
 *
 * @apiHeader {String} access-key Users unique access-key.
 *
 * @apiParam {String} name	   食材名称

 *
 * @apiSuccess {Boolean}    ok                       是否成功
* @apiSuccess {Object[3]}   obj                     菜单信息
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
 *         "obj": [
 *             {
 *                 "name": "豆角焖面",
 *                 "img": ""../../1.jpg,
 *                 "mainIngredient": "豆角",
 *                 "auxiliaryIngredient": "面条，肉",
 *                 "steps":"1.热油，放肉。。。。。。"
 *             },
 *             {
 *                  "name": "豆角焖面",
 *                 "img": ""../../1.jpg,
 *                 "mainIngredient": "豆角",
 *                 "auxiliaryIngredient": "面条，肉",
 *                 "steps":"1.热油，放肉。。。。。。"
 *             },
 *             {
 *                  "name": "豆角焖面",
 *                 "img": ""../../1.jpg,
 *                 "mainIngredient": "豆角",
 *                 "auxiliaryIngredient": "面条，肉",
 *                 "steps":"1.热油，放肉。。。。。。"
 *             },
 *             {
 *                  "name": "豆角焖面",
 *                 "img": ""../../1.jpg,
 *                 "mainIngredient": "豆角",
 *                 "auxiliaryIngredient": "面条，肉",
 *                 "steps":"1.热油，放肉。。。。。。"
 *             }
 *         ]
 *     }
 */
function getMyCookbookList() { return; }
