/**
 * LINK: https://leetcode.com/explore/interview/card/amazon/76/array-and-strings/2963/
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var startPoint = 0;
    var endPoint = height.length - 1;
    var maxContainerArea = Number.MIN_VALUE;
    
    while(startPoint < endPoint) {
        var height = Math.min(height[startPoint], height[endPoint]);
        var width = endPoint - startPoint;

        var currentArea = height * width;
        maxContainerArea = Math.max(currentArea, maxContainerArea);

        if (height[startPoint] < height[endPoint]) {
            startPoint++;
        } else {
            endPoint --;
        }
    }

    return maxContainerArea;
    
};

