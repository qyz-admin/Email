function showw(){
       var xhr;
       var strHtml ="orderPrefix=NR007311326091024&_user=1343&_token=2808f4bc7e60b89ca3fc0b93cd3997ec";
       var xhr_url = "http://gimp.giikin.com/service?service=gorder.customer&action=getQueryOrder";
           if( window.XMLHttpRequest ){
              xhr=new XMLHttpRequest();
            }else{
              xhr = new ActiveXObject("Microsoft.XMLHTTP");
           };
          xhr.onreadystatechange=function(){
            if( xhr.readyState==4 && xhr.status==200){
              var hhNode = document.getElementsByClassName("table table-striped table-bordered table-hover")[0];
                  hhNode.firstChild.innerHTML ='"<tr>'
                                            +'<th> 订单号 </th>'
                                            +'<th> 订单状态 </th>'
                                            +'<th> 物流单号 </th>'
                                            +'<th> 来源平台 </th>'
                                            +'<th> 商品名称 </th>'
                                            +'<th> 是否二次改派 </th>'
                                            +'<th> 是否克隆 </th>'
                                            +'<th> 规格 </th>'
                                            +'<th> 数量 </th>'
                                            +'<th> 币种 </th>'
                                            +'<th> 金额 </th>'
                                            +'<th> 支付类型 </th>'
                                            +'<th> 链接地址 </th>'
                                            +'<th> 下单时间 </th>'
                                            +'<th> 姓名 </th>'
                                            +'<th> 电话 </th>'
                                            +'<th> 拉黑率 </th>'
                                            +'<th> 重量 </th>'
                                            +'<th> 物流状态 </th>'
                                            +'<th> 物流更新时间 </th>'
                                            +'<th> 物流公司 </th>'
                                            +'<th> 地址 </th>'
                                            +'<th> IP </th>'
                                            +'<th> 站点ID </th>'
                                            +'<th> 审核方式 </th>'
                                            +'<th> 操作00 </th>'
                                        +'</tr>";'
                console.log(xhr.responseText);
          var mp3 = eval("("+ this.responseText +")");
                console.log(mp3);
                console.log(mp3.data.list);
                console.log(mp3.data.list[0]);
          var mp3Val = mp3.data.list;
             }
        }
        xhr.open("post",xhr_url,true);
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhr.send(strHtml);
};