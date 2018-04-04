/**
 * 状态控制
 * @type {{发布: number[]}}
 */
var ctrlCode={发布:[1,2,3]};
function localFunc() {//监听选中事件，控制功能可用状态
    _bstable.on('check.bs.table uncheck.bs.table uncheck-all.bs.table check-all.bs.table ', function(row, $element) {
        var selected = $("#table").bootstrapTable("getSelections");
        var zts=$.map(selected,function (obj) {
            return ctrlCode[obj.zt];
        })
        disabledBtn(zts.unique());
    });
}

function disabledBtn(ids) {
    $("#tb>.btn-link").prop("disabled",false);
    for(var s in ids){
        $("#tb>.btn-link").eq(ids[s]).prop("disabled",true);
    }
}
//数组去重
Array.prototype.unique= function(){
    var res = [];
    var json = {};
    for(var i = 0; i < this.length; i++){
        if(!json[this[i]]){
            res.push(this[i]);
            json[this[i]] = 1;
        }
    }
    return res;
}