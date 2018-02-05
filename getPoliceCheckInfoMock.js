/**
 * Created by LiQian on 17/11/9.
 */

exports.getPoliceCheckInfoMock = {
  'httpRequest': {
    'method': 'GET',
    'path': '/credit-query/api/credit/getPoliceCheckInfo'

  },
  'httpResponse': {
    'statusCode': 200,
    'body': JSON.stringify({
      'createTime': 1489112786126,
      'updateTime': 1489112786126,
      'enabled': true,
      'md5': null,
      'resultType': 'SUCCESS',
      'subReportType': null,
      'subReportTypeCost': null,
      'treatResult': null,
      'creditCode': '200',
      'creditMsg': '返回成功！',
      'dataChannel': 'LOCAL_CHANNEL',
      'batchNo': 'f8e75497fbfd48eb9fc117b6fb05debb',
      'productId': 7,
      'id': 8971,
      'name': '叶红',
      'levelNo': null,
      'graduateTime': null,
      'college': null,
      'collegeLevel': null,
      'startTime': null,
      'areaCode': null,
      'idNo': '440881199002020414',
      'resultMessage': '1',
      'photo': null,
      'courtInfos': null,
      'nationalPersonShareholderReport': null,
      'personTopManagerInfo': null,
      'educationCheck': null,
      'educationInSchoolCheck': null,
      'personBaseInfos': null,
      'ostaInfos': null,
      'personIndentityInfos': null,
      'artificialNationalInfos': null,
      'toll': true
    })
  },
  'times': {
    'remainingTimes': 1,
    'unlimited': true
  }
};