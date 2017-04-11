/**
 * @api {get} /MedicalExaminationApi/updataMedicalInformationResult 修改体检结果
 * @apiVersion 2.0.0
 * @apiName updataMedicalInformationResult
 * @apiGroup MedicalExamination
 * @apiPermission login
 *
 * @apiDescription 用户修改某项体检结果
 *
 * @apiHeader {String} access-key Users unique access-key.
 *
 * @apiParam {String} medicalInformationId  体检项ID
 * @apiParam {String} value 体检结果值
 *
 * @apiSuccess {Boolean}    ok          是否成功
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
 * @apiHeader {String} access-key Users unique access-key.
 *
 * @apiSuccess {Boolean}   ok               是否成功
 * @apiSuccess {object[]}  obj              体检项对象
 * @apiSuccess {String}    obj.id           ID
 * @apiSuccess {String}    obj.name         名称
 * @apiSuccess {String}    obj.medicalExaminationType          体检项分类对象
 * @apiSuccess {String}    obj.medicalExaminationType.id       分类ID
 * @apiSuccess {String}    obj.medicalExaminationType.name     分类名称
 * @apiSuccess {String}    obj.type          输入类型，1：数值型，2：文本型，3：选择型，4：A/B型
 * @apiSuccess {String}    obj.items         选择项
 * @apiSuccess {String}    obj.unit          单位
 *
 * @apiErrorExample Response (example):
 *     HTTP/1.1 200 OK
 *     {
 *         "ok":true,
 *         "obj":[
 *             {
 *                 "name":'1',
 *                 "name":'体重',
 *                 "medicalExaminationType": {
 *                     "id": "ebb8bd60-0f0f-11e7-9b59-000c293e6828",
 *                     "name": "基本信息"
 *                 },
 *                 "type":'数值型',
 *                 "items": null,
 *                 "unit":'kg'
 *             },
 *             {
 *                 "name":'2',
 *                 "name":'身高',
 *                 "medicalExaminationType": {
 *                     "id": "ebb8bd60-0f0f-11e7-9b59-000c293e6828",
 *                     "name": "基本信息"
 *                 },
 *                 "type":'数值型',
 *                 "items": null,
 *                 "unit":'cm'
 *             },
 *             ...
 *         ]
 *     }
 */
function getMedicalInformationList() { return; }