// 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。输入一个递增排序的数组的一个旋转，输出旋转数组的最小元素。例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一个旋转，该数组的最小值为1。
function minArray(numbers: number[]): number {
  // recover and find number.
  let i = 0, j = numbers.length-1;
  while(i<j) {
    let m = i+ Math.floor((j-i)/2);
    if(numbers[m]>numbers[j]) {
      i=m+1;
    }else if(numbers[m]>numbers[j]) {
      j=m;
    }else {
      j--;//当相等时无法确定下标，所以干脆往前再推一位 可能会有相等值出现
    }
    
  }
  return numbers[i];
};

// 示例一 [1, 0, 1, 1, 1][1,0,1,1,1] ：旋转点 x = 1x=1 ，因此 m = 2m=2 在 右排序数组 中。
// 示例二 [1, 1, 1, 0, 1][1,1,1,0,1] ：旋转点 x = 3x=3 ，因此 m = 2m=2 在 左排序数组 中。


