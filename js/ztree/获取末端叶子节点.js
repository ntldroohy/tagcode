//获取节点下所有末端叶子节点
function getHclb(treeNode,result) {
    var childrenNodes = treeNode.children;
    if(childrenNodes){
        for(let i = 0;i<childrenNodes.length;i++){
            let node = childrenNodes[i];
            if(node.isParent){
                result = getHclb(node,result);
            }else{
                result.push(node.id);
            }
        }
    }
    return result;
}


 function onClick (event, treeId, treeNode) {
    if (treeNode) {
        var treeObj = $.fn.zTree.getZTreeObj("tree");
        treeObj.selectNode(treeNode, false, true);
        if(treeNode.isParent){
            $("#hclb").val(getHclb(treeNode,[]))
        }else{
            $("#hclb").val(treeNode.id);
        }
        ppeSearch();
    }
}