//在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
function findNumberIn2DArray(matrix: number[][], target: number): boolean {
  if (!matrix || matrix.length ===0 || matrix[0].length===0) return false;
  let i = 0, j= matrix[0].length-1;
  
  while(i<matrix.length && j>=0) {
    if(matrix[i][j] > target) {
      j--;
    }else if(matrix[i][j]<target) {
      i++;
    }else if(matrix[i][j]===target){
      return true;
    
    }
  }
  return false;
};

// 后记 主要错误在边界条件没有界定清楚
//1, i length matrix.length j的下标从matrix[0].length-1 即最后一个开始 且最后在等于0 的时候还要进循环再走一次。