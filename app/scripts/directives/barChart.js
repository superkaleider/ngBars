  'use strict';

  angular.module('ngBarsApp')
    .directive('barChart', function ($timeout) {
      return {
        // template: '',
        restrict: 'E',
        scope: {
          data: "=",
          chartName: "@",
          height: "=",
          width: "="
        },
        templateUrl: 'partials/barchart.html',
        link: function (scope, element, attrs) {
          scope.color = function (id) {
            var colors = [
              "#c62828",
              "#3f51b5",
              "#457e45",
              "#825b11",
              "#8044cc",
              "#ff9105"
            ];
            console.log(colors[id]);
            return colors[id];
          }
          // $timeout(function () {}, 200);

          function generate() {
            // element.empty(); 
            var cd = alasql('SELECT label, SUM(v) AS val FROM ? GROUP BY label', [scope.data]);
            scope.bars = cd;
            var count = 0;
            scope.count = 0;
            var max = 0;
            scope.max = 0;
            angular.forEach(cd, function (i) {
              if (i.val > max) {
                max = i.val;
                scope.max = i.val
              }
              count += 1;
              scope.count += 1;
            });
            if (scope.chartName) {
              var barheight = (scope.height - 50) / count || element.css('height');
            } else {
              var barheight = scope.height / count || element.css('height');
            }
            // var height = scope.height || element.css('height');
            // var width = scope.width || element.css('width');
            // var chartContainer = angular.element('<div class="chartContainer"></div>');
            // chartContainer.css('width', width + 'px');
            // chartContainer.css('height', height + 'px');
            // if (scope.chartName) {
            //   var chartLabel = angular.element('<h5 class="chartName">' + scope.chartName + '</h5>');
            //   // chartContainer.append(chartLabel);
            // }
            var index = 0;
            // angular.forEach(cd, function (d) {
            // index++;
            // var container = angular.element('<div class="series"></div>');
            // var label = angular.element('<div class="chartSeries">' + d.label + '</div>');
            // label.css('width', width + 'px');
            // var bar = angular.element('<div class="bar"></div>');
            // bar.css('z-index', count - index);
            // container.css("width", (d.val / max * width) + 'px');
            // container.css("height", barheight + 'px');
            // container.css("background-color", color());

            // var valueLabel = angular.element('<label class="chartLabels">' + d.val + '</label>');

            // container.append(label);
            // container.append(bar);
            // bar.append(valueLabel);
            // chartContainer.append(container);
            // })
            // element.append(chartContainer);
          }



          scope.$watch('data', function (n, o) {
            // console.log('new', n, 'old', o);
            generate();
          });
        },
      };
    });
