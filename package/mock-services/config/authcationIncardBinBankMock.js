/**
 * Created by LiQian on 17/11/9.
 */

// mock三方银行卡鉴权接口
exports.authcationIncardBinBankMock = {
  'httpRequest': {
    'method': 'POST',
    'path': '/credit-query/api/credit/authcationInCardBinBank'

  },
  'httpResponse': {
    'statusCode': 200,
    'body': JSON.stringify({
      "createTime": 1479720626401,
      "updateTime": 1479720626401,
      "enabled": true,
      "md5": null,
      "resultType": "SUCCESS",
      "subReportType": null,
      "subReportTypeCost": null,
      "treatResult": null,
      "creditCode": "200",
      "creditMsg": "返回成功！",
      "dataChannel": "PENG_YUAN_CHANNEL",
      "batchNo": "PY_161121173021910",
      "productId": 19,
      "id": 121880,
      "productNumber": "CI14506",
      "name": "张三",
      "documentNo": "430623123456789747",
      "mobile": "18612349111",
      "accountNo": "6211234567890891478",
      "openBankNo": "CCB",
      "subReportIds": null,
      "refId": "PH1234567890",
      "personBankCheckInfo": {
        "id": 110642,
        "personBankCheckId": 121880,
        "name": "张三",
        "documentNo": "430623123456789747",
        "mobile": "18612349111",
        "accountNo": "xy56a97bd1cec11941bc3cf28c443cd8f823d930a8c1a96a06f7daf76cb64683b820160926",
        "accountBankNo": "105584000005",
        "accountBankName": "中国建设银行",
        "cardNature": "借记卡",
        "status": 1,
        "message": "成功",
        "updateTime": null,
        "createTime": null
    },
    "toll": true
  })
  },
  'times': {
  'remainingTimes': 1,
      'unlimited': true
  }
};
