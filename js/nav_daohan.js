/**
     * Created by Shannon on 2018/4/4.
     */
    if (typeof jQuery != 'undefined') {
        console.log('jquery成功加载')
    }
    else
    {
        alert("jquery没有被加载");
    }
    /*实例化导航列表*/
    (function(){
           var red_living = document.getElementById('nav_s');//頭部
           var content_children = document.getElementById('content_children');//view
           var red_living_src = ['首页','关于我们','信息中心','联系我们'];//頭部導航列表數組
           var view_children=['view/1.html','view/2.html','view/3.html','view/4.html'];//為子頁地址數組

           var List_DV_z='';
           for(var i=0;i<red_living_src.length;i++){
               List_DV_z +='<li><span >'+red_living_src[i]+'</span></li>'
           }
           var List_DV = '<ul class="flex">'+List_DV_z+'</ul>';
           $(red_living).html(List_DV);

            /*上述子操作-标签页切换*/
            var arr_idP = document.getElementsByClassName('flex');
            var arr_id = $(arr_idP).children();
            $($(arr_id)[0]).addClass('select');//默认选择第一个
            for(var i=0;i<arr_id.length;i++){
                arr_id[i].onclick=function(){
                    $(this).addClass('select').siblings().removeClass('select');
                }
            }

            /*根据导航栏触发的菜单目录替换view页面*/
            if(document.getElementById('content_children')){
                $.get(view_children[0],function(r){//默认加载第一页
                    $(content_children).html(r)
                },'html');
                $(arr_idP).click(function(){
                    /*拿到选中下标*/
                    var index_num = red_living_src.indexOf($('li.select').children().text());
                    $.get(view_children[index_num],function(r){
                        $(content_children).html(r)
                    },'html');
                })
            }
    })();


