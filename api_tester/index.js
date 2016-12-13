var app = angular.module('App', []);
app.controller('AppCtrl', ['$scope',
  function($scope) {
    // HTTPリクエスト用オブジェクトの初期化
    initHttpRequest = function() {
      httpRequest = false;
      if(window.XMLHttpRequest) { // Firefox,Opera,...
        httpRequest = new XMLHttpRequest();
        httpRequest.overrideMimeType('text/xml');
      } else if(window.ActiveXObject) { // IE
        try {
          httpRequest = new ActiveXObject('Msxml2.XMLHTTP');
        } catch (e) {
          httpRequest = new ActiveXObject('Microsoft.XMLHTTP');
        }
      }
    };

    // WebAPIレスポンスの処理
    processResult = function() {
      if(httpRequest.readyState == 4) {
        if(httpRequest.status == 200 || httpRequest.status == 201) {
          $scope.result = '';
          $scope.result = httpRequest.responseText.toString();
        } else {
          // error
          console.log('error.');
        }
      }
    };

    // 初期化
    $scope.init = function() {
      initHttpRequest();

      $scope.accessKey = '';

      // パラメータ
      $scope.format = 'json';
      $scope.from = '東京';
      $scope.to = '高円寺';
      $scope.date = '';

      $scope.result = '';
    };

    // WebAPI呼び出し
    $scope.invokeWebAPI = function(apiURL) {
      $scope.url = apiURL;
      httpRequest.open('GET', apiURL, true);
      httpRequest.onreadystatechange = processResult;
      httpRequest.send(null);
    };

    // 平均待ち時間探索
    $scope.searchCoursePlain = function() {
      var params = '';
      params = params += 'from=' + $scope.from + '&';
      params = params += 'to=' + $scope.to + '&';
      if ($scope.date != '') {
        params = params += 'date=' + $scope.date;
      }
      var api = 'http://api.ekispert.jp/v1/' + $scope.format + '/search/course/plain?key=' + $scope.accessKey + '&' + params;
      $scope.invokeWebAPI(api);
    };

    // 駅簡易情報
    $scope.stationLight = function() {
      var params = '';
      var api = 'http://api.ekispert.jp/v1/' + $scope.format + '/station/light?key=' + $scope.accessKey + '&name=' + $scope.from;
      $scope.invokeWebAPI(api);
    };

    // データバージョン
    $scope.dataversion = function() {
      var params = '';
      var api = 'http://api.ekispert.jp/v1/' + $scope.format + '/dataversion?key=' + $scope.accessKey;
      $scope.invokeWebAPI(api);
    };

    // AngularJS読み込み時にデータを初期化する。
    $scope.init();
  }
]);

