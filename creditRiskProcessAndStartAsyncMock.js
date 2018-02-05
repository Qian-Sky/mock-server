/**
 * Created by LiQian on 17/11/9.
 */

exports.creditRiskProcessAndStartAsyncMock = {
  'httpRequest': {
    'method': 'POST',
    'path': '/api/v2/createRiskProcessAndStartAsync',
    "body": {
      "type":"JSON_SCHEMA",
      "value": "{'type':'object', " +
      "'properties':{'riskCode':{'type':'string', 'pattern':'.*-sx$'}}, " +
      "'required': ['riskCode']}"
    }

  },
  'httpResponse': {
    'statusCode': 200,
    'body': JSON.stringify({
      "data" : {
        "useTime" : 25,
        "productDisplayOutputVO" : null,
        "callbackUrl" : "http://10.10.232.242:9000/internal/callback/credit",
        "extData" : null,
        "id" : 280394,
        "errorMsg" : "成功",
        "hasError" : 0,
        "rejectState" : -1,
        "displayLimit" : null,
        "actualLimit" : null,
        "decisionTreeLimit" : null,
        "channelCode" : "kaniu",
        "riskUserId" : 4006205103599.0,
        "extUserId" : "1100000100033",
        "extId" : "323111111111111111"
      },
      "message" : "success",
      "code" : 1
    })
  },
  'times': {
    'remainingTimes': 1,
    'unlimited': true
  }
};