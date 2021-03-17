/**
 * LINK: https://leetcode.com/explore/interview/card/amazon/76/array-and-strings/2963/
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var startPoint = 0;
    var maxContainerHeight = Number.MIN_VALUE;
    var calculateContainerWithCurrentHeight = calculateContainerHeight(height);
    while(startPoint < height.length - 1) {
        for (var i = height.length - 1; i > startPoint; i--) {
            var currentContainerHeight = calculateContainerWithCurrentHeight(startPoint, i)
            if (maxContainerHeight < currentContainerHeight) {
                maxContainerHeight = currentContainerHeight;
            }
        }
        
        startPoint++;
    }
    
    return maxContainerHeight;
};

var calculateContainerHeight = (height) => (startPoint, endPoint) => Math.min(height[startPoint], height[endPoint]) * (endPoint - startPoint)