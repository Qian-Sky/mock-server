/**
 * Created by LiQian on 17/11/10.
 */

exports.updageUserLimitInfoByInterMock = {
  'httpRequest': {
    'method': 'POST',
    'path': '/api/v1/updateUserLimit'

  },
  'httpResponse': {
    'statusCode': 200,
    'body': JSON.stringify({
      "code":200,
      "message":"update successfully",
      "result":null
    })
  },
  'times': {
    'remainingTimes': 1,
    'unlimited': true
  }
};