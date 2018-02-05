/**
 * Created by LiQian on 17/11/10.
 */
/**
 * Created by LiQian on 17/11/9.
 */
const mockServiceConfig = require('./config');
var mockServer = require('mockserver-client'),
    mockServerClient = mockServer.mockServerClient, // MockServer client
    proxyClient = mockServer.proxyClient; // proxy client

var remote = mockServerClient('localhost', 1080),
    remoteProxy = proxyClient('localhost', 1090);

// 使用之前清除服务器里边已经注册的 mockup 信息，因为可能会影响当前测试结果
remote.reset();

// mock提现风控
remote.mockAnyResponse(mockServiceConfig.withdrawRiskProcessAndStartAsyncMock.withdrawRiskProcessAndStartAsyncMock);

// mock更新全渠道额度
remote.mockAnyResponse(mockServiceConfig.updageUserLimitInfoByInterMock.updageUserLimitInfoByInterMock);

// mock获取全渠道额度
remote.mockAnyResponse(mockServiceConfig.findUserLimitInfoByInterMock.findUserLimitInfoByInterMock);

// mock授信风控
remote.mockAnyResponse(mockServiceConfig.creditRiskProcessAndStartAsyncMock.creditRiskProcessAndStartAsyncMock);

// mock银行卡鉴权
remote.mockAnyResponse(mockServiceConfig.authcationIncardBinBankMock.authcationIncardBinBankMock);

// mock实名认证
remote.mockAnyResponse(mockServiceConfig.getPoliceCheckInfoMock.getPoliceCheckInfoMock);

// mock委托划扣协议 生成节点
remote.mockAnyResponse(mockServiceConfig.deductionCreateNodeMock.deductionCreateNodeMock);

// mock推标
remote.mockAnyResponse(mockServiceConfig.pushToAssetMock.pushToAssetMock);