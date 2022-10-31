var string = ["Имя", "Улица", "Город", "Возраст"];
var int = [5, 8, 6, 4];
var res = [];
 
function widthOfCol(row, colWidth) {
  for (var i = 0; i < row.length; i++) {
    if (row[i].length < colWidth[i]) {
      var deff = colWidth[i] - row[i].length;
      var space = "";
      for (j = 0; j < deff; j++){
        space = space + " ";
      }
      res.push(row[i] + space);
    }
    else {
      res.push(row[i]);
    }
  }
  return res;
}
var res = widthOfCol(string, int);
console.log(res);

console.table([[4, 6, 8], [6, 9, 12], [8, 12, 16]]);