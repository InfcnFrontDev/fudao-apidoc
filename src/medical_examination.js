/**
 * @api {get} /MedicalExaminationApi/updataMedicalInformationResult 修改体检结果
 * @apiVersion 2.0.0
 * @apiName updataMedicalInformationResult
 * @apiGroup MedicalExamination
 * @apiPermission login
 *
 * @apiDescription 用户修改某项体检结果
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {String} medicalInformationId  体检项ID
 * @apiParam {String} value 体检结果值
 *
 * @apiSuccess {Boolean}    ok          是否成功
 *
 * @apiUse AuthenticatedError
 *
 */


function updataMedicalInformationResult() { return; }

/**
 * @api {get} /MedicalExaminationApi/getMedicalInformationList 获取体检项列表
 * @apiVersion 2.0.0
 * @apiName getMedicalInformationList
 * @apiGroup MedicalExamination
 * @apiPermission login
 *
 * @apiDescription 获取全部体检项列表
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {String}  keyword          模糊匹配名称，或使用首字母检索，为空查询全部
 *
 * @apiSuccess {Boolean}   ok               是否成功
 * @apiSuccess {object}    obj              体检项对象
 * @apiSuccess {object[]}  obj.type         体检项分类
 * @apiSuccess {String}    obj.type.id           ID
 * @apiSuccess {String}    obj.type.name         名称
 * @apiSuccess {String}    obj.type.unit         单位
 * @apiSuccess {String}    obj.type.inputType    输入类型，1：数值型，2：文本型，3：选择型，4：A/B型
 * @apiSuccess {String}    obj.type.items        选择项
 * @apiSuccess {String}    obj.type.value        值
 * @apiSuccess {String}    obj.type.range        值输入范围
 *
 *
 * @apiErrorExample Response (example):
 *     HTTP/1.1 200 OK
 *     {
 *         "ok":true,
 *         "obj":{
 *              "基本信息": [
 *                  {
 *                      "id":'1',
 *                      "name":'体重',
 *                      "type": "基本信息",
 *                      "unit":'kg',
 *                      "inputType": 1,
 *                      "items": null,
 *                      "value": 75,
 *                      "range": "30~200"
 *                  },
 *                  ...
 *              ],
 *              "眼科": [
 *                  {
 *                      "id":'2',
 *                      "name":'辨色力',
 *                      "unit": null,
 *                      "inputType": 3,
 *                      "items": ["正常", "色弱", "色盲"],
 *                      "value": 175,
 *                      "range": "30~200"
 *                  },
 *                  ...
 *              ]
 *         }
 *     }
 *
 * @apiUse AuthenticatedError
 *
 */
function getMedicalInformationList() { return; }