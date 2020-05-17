function requestMethod(par1,par2,par3,callback) {

//创建请求对象xhr
    var xhr = new XMLHttpRequest();
//建立与服务器的连接
    xhr.open(par1, 'https://mockapi.eolinker.com/2ZhGVxjacb39010e6753bd9c02ee803e6e3bfeab6e8007c/'+par2);
//设置头信息，让数据以表单形式传递给服务器
    xhr.setRequestHeader(
        "content-type",
        "application/x-www-form-urlencoded"
    );
//发送请求
    xhr.send(par3);
//接受服务器返回的数据
    xhr.onreadystatechange = function () {
        //readState==4  代表ajax数据请求已经完成
        //status==200  表示数据成功返回
        if (xhr.readyState == 4 && xhr.status == 200) {
            //responseText包含服务器端返回的数据

            var res = JSON.parse(xhr.responseText);
            var str = res.data;
            callback(str);
        }
    }
}
function requestMethod2(par1,par2,par3,callback) {

//创建请求对象xhr
    var xhr = new XMLHttpRequest();
//建立与服务器的连接
    xhr.open(par1, 'https://mockapi.eolinker.com/2ZhGVxjacb39010e6753bd9c02ee803e6e3bfeab6e8007c/'+par2);
//设置头信息，让数据以表单形式传递给服务器
    xhr.setRequestHeader(
        "content-type",
        "application/x-www-form-urlencoded"
    );
//发送请求
    xhr.send(par3);
//接受服务器返回的数据
    xhr.onreadystatechange = function () {
        //readState==4  代表ajax数据请求已经完成
        //status==200  表示数据成功返回
        if (xhr.readyState == 4 && xhr.status == 200) {
            //responseText包含服务器端返回的数据

            var res = JSON.parse(xhr.responseText);
            var title_content=document.getElementById("title");
            var subTitle_content=document.getElementById("subTitle");
            var info_content=document.getElementById("info");
            title_content.innerHTML=res.data.title;
            subTitle_content.innerHTML=res.data.subTitle;
            info_content.innerHTML=res.data.info;
            callback(title_content,subTitle_content,info_content);
        }
    }
}


