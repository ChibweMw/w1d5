var dataList = [];

module.exports = {
  newData: function (num) {
    dataList.push(num);
    return dataList;
  },
  sortDataList: function () {
    dataList.sort(function (a, b){
      return a - b;
    });
      return dataList;
  }
}