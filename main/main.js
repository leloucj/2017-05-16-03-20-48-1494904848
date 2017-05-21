const loadAllItems = require('./loadAllItems.js');

module.exports = function main(inputs) {
var item;
var item_list=[];   
var a=loadAllItems();
var list='***<没钱赚商店>购物清单***';
var sum=0;


for(var i=0;i<a.length;i++)
{
   item=a[i];
   
   item_list.push(item);
    item_list[i].count=0;
	for(var j=0;j<inputs.length;j++)
	{
		if(inputs[j]==a[i].barcode)
		{
			item_list[i].count++;
		}
	}
}


    for(var n=0;n< item_list.length;n++){
    if(item_list[n].count!=0){
    list=list+'\n'+'名称：'+item_list[n].name+'，'+'数量：'+item_list[n].count+item_list[n].unit+'，'+'单价：'+item_list[n].price+'.00(元)'+'，'+'小计：'+item_list[n].count*item_list[n].price+'.00(元)';
     sum+=item_list[n].count*item_list[n].price;
    }}

list=list+'\n'+'----------------------'+'\n'+'总计：'+sum+'.00(元)'+'\n'+'**********************';
 console.log("Debug Info");
return list;

    
 
};



