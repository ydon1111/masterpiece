$(document).ready(function(){
    LoadingWithSpinner = function() {
        var spinnerHeight = $(document).height();
        var spinnerWidth  = window.document.body.clientWidth;
         
        var spinner =  '<div id="spinner" style="position:absolute; z-index:999; display:none; left:0; top:0; text-align: center; margin: auto; background-color: rgba( 0, 0, 0, 0.5 ); display: flex;">' +
                            '<div style = "width: 120px; height: 120px; border-radius: 60px; background-color: #fff; display:inline-block; margin: auto; display: flex;">' +
                                '<svg width="80px" height="80px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="lds-bucket" style="background: none; margin: auto;">' +
                                    '<defs>' +
                                        '<clipPath id="lds-cp-bucket">' +
                                            '<path d="M57.6,64.3c6.1,5.4,9.9,13.2,9.9,22c0,0.2,0,0.5,0,0.7h44c0-0.2,0-0.5,0-0.7c0-40.3-32.5-73-72.7-73.3v20.1 l9.5,25.6C48.4,58.8,54.9,61.9,57.6,64.3"></path>' +
                                        '</clipPath>' +
                                    '</defs>' +
                                    '<path ng-attr-fill="{{config.c1}}" d="M54.6,66c-1.2,0-2.2-0.8-2.5-2c-0.3-1.4,0.6-2.7,2-2.9l0.3-0.1c0.3-0.2,1.3-1.6,1.5-5.8 c0.1-4.4-0.8-9.9-2.5-15.6c-1.7-5.7-4.1-10.8-6.6-14.4c-2.4-3.4-4-4.1-4.4-4l-0.3,0.1c-1.3,0.5-2.7-0.1-3.3-1.3 c-0.5-1.3,0.1-2.7,1.3-3.3l0.5-0.2c0.1,0,0.2-0.1,0.3-0.1c2.2-0.7,5.7-0.2,10,5.9c2.8,4,5.4,9.6,7.3,15.8 c1.9,6.2,2.8,12.3,2.7,17.2c-0.2,7.4-2.9,9.8-5.1,10.4c-0.1,0-0.2,0-0.3,0.1L55.1,66C54.9,66,54.8,66,54.6,66z" fill="#dbdbdb" transform="translate(0 1.89752)">' +
                                        '<animateTransform attributeName="transform" type="translate" keyTimes="0;0.5;1" values="0,0;0,3;0 0" ng-attr-dur="{{config.speed2}}s" repeatCount="indefinite" dur="1s"></animateTransform>' +
                                    '</path>' +
                                    '<g id="lds-bucket-rainbow" clip-path="url(#lds-cp-bucket)">' +
                                        '<path fill="#ff6565" stroke-width="0" ng-attr-d="{{config.d1}}" d="M 100 85Q 102.45 88.17 102.02 91.32T 98.55 96.97T 94.51 101.88T 94.27 108.24T 93.12 114.77T 87.43 118.16T 81.56 120.63T 78.4 126.15T 74.35 131.4T 67.73 131.75T 61.39 131.22T 56.03 134.64T 50 137.4T 43.97 134.64T 38.61 131.22T 32.27 131.75T 25.65 131.4T 21.6 126.15T 18.44 120.63T 12.57 118.16T 6.88 114.77T 5.73 108.24T 5.49 101.88T 1.45 96.97T -2.02 91.32T 0 85T 2.75 79.26T 1.45 73.03T 1.01 66.42T 5.73 61.76T 10.83 57.96T 12.57 51.84T 15.25 45.78T 21.6 43.85T 27.88 42.85T 32.27 38.25T 37.46 34.12T 43.97 35.36T 50 37.4T 56.03 35.36T 62.54 34.12T 67.73 38.25T 72.12 42.85T 78.4 43.85T 84.75 45.78T 87.43 51.84T 89.17 57.96T 94.27 61.76T 98.99 66.42T 98.55 73.03T 97.25 79.26T 100 85ZM 77.5 85Q 76.81 83.38 76.7 81.76T 76.7 78.42T 76.27 75.04T 74.35 72.22T 72.14 69.72T 70.58 66.76T 68.63 63.97T 65.62 62.37T 62.5 61.18T 59.75 59.29T 56.72 57.72T 53.31 57.7T 50 58.1T 46.69 57.7T 43.28 57.72T 40.25 59.29T 37.5 61.18T 34.38 62.37T 31.37 63.97T 29.42 66.76T 27.86 69.72T 25.65 72.22T 23.73 75.04T 23.3 78.42T 23.3 81.76T 22.5 85T 22.1 88.39T 23.3 91.58T 24.85 94.54T 25.65 97.78T 26.87 100.96T 29.42 103.24T 32.16 105.13T 34.38 107.63T 36.94 109.88T 40.25 110.71T 43.56 111.12T 46.69 112.3T 50 113.1T 53.31 112.3T 56.44 111.12T 59.75 110.71T 63.06 109.88T 65.62 107.63T 67.84 105.13T 70.58 103.24T 73.13 100.96T 74.35 97.78T 75.15 94.54T 76.7 91.58T 77.9 88.39Z" transform="rotate(17.5156 50 85)">' +
                                            '<animateTransform attributeName="transform" type="rotate" ng-attr-values="{{config.a1}}" ng-attr-dur="{{config.speed1}}s" repeatCount="indefinite" keyTimes="0;1" values="0 50 85;27.692307692307693 50 85" dur="0.5s"></animateTransform>' +
                                        '</path>' +
                                        '<path fill="#ffe967" stroke-width="0" ng-attr-d="{{config.d2}}" d="M 92.5 85Q 94.93 88.21 94.44 91.39T 90.78 96.97T 86.48 101.66T 85.75 107.98T 83.93 114.4T 77.83 117.12T 71.68 118.73T 67.66 123.66T 62.65 128.08T 56.05 127.07T 50 125.1T 43.95 127.07T 37.35 128.08T 32.34 123.66T 28.32 118.73T 22.17 117.12T 16.07 114.4T 14.25 107.98T 13.52 101.66T 9.22 96.97T 5.56 91.39T 7.5 85T 10.31 79.29T 9.22 73.03T 9.16 66.35T 14.25 62.02T 19.69 58.74T 22.17 52.88T 25.73 47.23T 32.34 46.34T 38.7 46.52T 43.95 42.93T 50 40.1T 56.05 42.93T 61.3 46.52T 67.66 46.34T 74.27 47.23T 77.83 52.88T 80.31 58.74T 85.75 62.02T 90.84 66.35T 90.78 73.03T 89.69 79.29T 92.5 85ZM 77.5 85Q 76.8 83.08 76.63 81.17T 76.39 77.25T 75.56 73.33T 73.13 70.13T 70.33 67.38T 68.01 64.22T 65.19 61.36T 61.42 59.99T 57.58 59.19T 53.91 57.78T 50 56.9T 46.09 57.78T 42.42 59.19T 38.58 59.99T 34.81 61.36T 31.99 64.22T 29.67 67.38T 26.87 70.13T 24.44 73.33T 23.61 77.25T 23.37 81.17T 22.5 85T 22.19 89T 23.61 92.75T 25.53 96.17T 26.87 99.87T 28.76 103.4T 31.99 105.78T 35.46 107.63T 38.58 110.01T 42.08 111.96T 46.09 112.22T 50 111.9T 53.91 112.22T 57.92 111.96T 61.42 110.01T 64.54 107.63T 68.01 105.78T 71.24 103.4T 73.13 99.87T 74.47 96.17T 76.39 92.75T 77.81 89Z" transform="rotate(10.3501 50 85)">' +
                                            '<animateTransform attributeName="transform" type="rotate" ng-attr-values="{{config.a2}}" ng-attr-dur="{{config.speed2}}s" repeatCount="indefinite" keyTimes="0;1" values="0 50 85;32.72727272727273 50 85" dur="1s"></animateTransform>' +
                                        '</path>' +
                                        '<path fill="#a7ff62" stroke-width="0" ng-attr-d="{{config.d3}}" d="M 86 85Q 87.76 88.3 87.23 91.56T 83.83 97.31T 79.62 102.1T 77.58 108.14T 74.3 113.96T 68 116.18T 61.7 117.14T 56.25 120.45T 50 122.8T 43.75 120.45T 38.3 117.14T 32 116.18T 25.7 113.96T 22.42 108.14T 20.38 102.1T 16.17 97.31T 12.77 91.56T 14 85T 16.32 79.06T 16.17 72.69T 17.26 66.1T 22.42 61.86T 28.02 58.8T 32 53.82T 37.07 49.48T 43.75 49.55T 50 50.8T 56.25 49.55T 62.93 49.48T 68 53.82T 71.98 58.8T 77.58 61.86T 82.74 66.1T 83.83 72.69T 83.68 79.06T 86 85ZM 77.5 85Q 76.76 82.66 76.49 80.33T 75.84 75.59T 74.34 70.95T 71.07 67.32T 67.29 64.39T 63.75 61.18T 59.61 58.59T 54.78 57.92T 50 58.1T 45.22 57.92T 40.39 58.59T 36.25 61.18T 32.71 64.39T 28.93 67.32T 25.66 70.95T 24.16 75.59T 23.51 80.33T 22.5 85T 22.33 89.88T 24.16 94.41T 26.7 98.45T 28.93 102.68T 31.94 106.53T 36.25 108.82T 40.8 110.28T 45.22 112.08T 50 113.1T 54.78 112.08T 59.2 110.28T 63.75 108.82T 68.06 106.53T 71.07 102.68T 73.3 98.45T 75.84 94.41T 77.67 89.88Z" transform="rotate(25.3003 50 85)">' +
                                            '<animateTransform attributeName="transform" type="rotate" ng-attr-values="{{config.a3}}" ng-attr-dur="{{config.speed1}}s" repeatCount="indefinite" keyTimes="0;1" values="0 50 85;40 50 85" dur="0.5s"></animateTransform>' +
                                        '</path>' +
                                        '<path fill="#7cc2d6" stroke-width="0" ng-attr-d="{{config.d4}}" d="M 80.5 85Q 81.57 88.56 80.91 92.05T 77.48 98.23T 72.91 103.27T 69.02 108.85T 63.75 113.56T 56.79 114.74T 50 114.3T 43.21 114.74T 36.25 113.56T 30.98 108.85T 27.09 103.27T 22.52 98.23T 19.09 92.05T 19.5 85T 21.43 78.48T 22.52 71.77T 25.22 65.24T 30.98 61.15T 37.29 58.6T 43.21 55.26T 50 53.3T 56.79 55.26T 62.71 58.6T 69.02 61.15T 74.78 65.24T 77.48 71.77T 78.57 78.48T 80.5 85ZM 76 85Q 75.2 82.16 74.76 79.35T 73.43 73.72T 70.8 68.42T 66.21 64.67T 61.02 62.12T 55.79 59.65T 50 58.4T 44.21 59.65T 38.98 62.12T 33.79 64.67T 29.2 68.42T 26.57 73.72T 25.24 79.35T 24 85T 24.07 90.92T 26.57 96.28T 30.14 100.84T 33.79 105.33T 38.46 108.97T 44.21 110.35T 50 110.4T 55.79 110.35T 61.54 108.97T 66.21 105.33T 69.86 100.84T 73.43 96.28T 75.93 90.92Z" transform="rotate(16.2645 50 85)">' +
                                            '<animateTransform attributeName="transform" type="rotate" ng-attr-values="{{config.a4}}" ng-attr-dur="{{config.speed2}}s" repeatCount="indefinite" keyTimes="0;1" values="0 50 85;51.42857142857143 50 85" dur="1s"></animateTransform>' +
                                        '</path>' +
                                    '</g>' +
                                    '<path ng-attr-fill="{{config.c1}}" d="M57.1,63.3c-0.1-1.4-1.4-2.4-2.7-2.2c-1.8,0.2-7.3-6.1-11-18.4c-3.7-12.2-2.6-20.6-1-21.4 c1.2-0.6,1.7-2.2,1-3.4c-0.6-1.2-2.2-1.7-3.4-1c-1.4,0.7-2.4,2.1-3.1,3.9c-4.5,2.2-24.3,12-32.3,15.3c-1.8,0.8-3,2.5-3.1,4.4 c-0.4,10.6,2.6,20.2,8.8,29c1.1,1.6,3.1,2.4,5.1,2.1l28.5-6.3c-1.8-1.4-3.3-3-4.4-4.8c-0.2-0.3-0.6-0.5-1-0.4l-1.1,0.3 C35.5,61,33.5,59.9,33,58c-0.5-1.9,0.7-3.8,2.5-4.3l0.9-0.3c0.4-0.1,0.7-0.5,0.6-0.9l0,0c-0.1-0.5-0.6-0.9-1.1-0.7l-8.2,2.5 c-1.9,0.6-3.9-0.5-4.4-2.5c-0.5-1.9,0.7-3.8,2.5-4.3l9.5-2.9c0.4-0.1,0.6-0.5,0.6-0.9c-0.1-2.6,0.1-5.1,0.7-7.4 c0.5,2.6,1.1,5.3,1.9,7.9C41.8,54.8,48,66,54.3,66c0.2,0,0.4,0,0.5,0C56.2,65.9,57.2,64.6,57.1,63.3z" fill="#dbdbdb" transform="translate(0 1.89752)">' +
                                        '<animateTransform attributeName="transform" type="translate" keyTimes="0;0.5;1" values="0 0;0 3;0 0" ng-attr-dur="{{config.speed2}}s" repeatCount="indefinite" dur="1s"></animateTransform>' +
                                    '</path>' +
                                '</svg>' +
                            '</div>' +
                        '</div>' +
                        '</div>';

        $('body').append(spinner)
     
        $('#spinner').css({
                'width' : spinnerWidth,
                'height': spinnerHeight
        });
      
        $('#spinner').show();
    }
     
    closeLoadingWithSpinner = function() {
        $('div').remove('#spinner'); 
    }

    $(window).ajaxStart(function(){
        LoadingWithSpinner()
    }).ajaxStop(function(){
        closeLoadingWithSpinner()
    });

});

