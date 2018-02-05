/**
 * Created by LiQian on 17/11/14.
 */
exports.pushToAssetMock = {
  'httpRequest': {
    'method': 'POST',
    'path': '/api/v1/nirvana/apply'

  },
  'httpResponse': {
    'statusCode': 200,
    'body': JSON.stringify({
      "code": 200,
      "message": "",
      "result": ""
    })
  },
  'times': {
    'remainingTimes': 1,
    'unlimited': true
  }
};