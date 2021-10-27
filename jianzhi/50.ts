//在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。

// 示例 1:

// 输入：s = "abaccdeff"
// 输出：'b'
// 示例 2:

// 输入：s = "" 
// 输出：' '
 
function firstUniqChar(s: string): string {
  if(s.length === 0 ) return ' ';
  let mapView = new Map();
  for(let i=0;i<s.length;i++) {
    let cur = s[i]
    if(mapView.has(cur)) {
      mapView.set(cur, mapView.get(cur)+1)
    }else {
      mapView.set(cur,1)
    }
  }
  for(let j=0;j<s.length;j++) {
    if(mapView.get(s[j])===1){
      return s[j];
    }
  }
  return ' '

};
var a  ='abaccdeff';
console.log(firstUniqChar(a));

