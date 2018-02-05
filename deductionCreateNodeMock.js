/**
 * Created by LiQian on 17/11/14.
 */
exports.deductionCreateNodeMock = {
  'httpRequest': {
    'method': 'GET',
    'path': '/contract/create/deduction/node'

  },
  'httpResponse': {
    'statusCode': 200,
    'body': JSON.stringify({
      "statusCode": 200,
      "message": "",
      "result": ""
    })
  },
  'times': {
    'remainingTimes': 1,
    'unlimited': true
  }
};