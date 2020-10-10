
window.onload=function(){
    var oEmail = document.getElementById("input1");
    var oEmail_span = document.getElementById("oemail_span");
    var oPassword = document.getElementById("password");
    var oPassword_span = document.getElementById("password_span");
    var oTestSpan = document.getElementById("testSpan");
    var aSpans = oTestSpan.getElementsByTagName("span");

    oPassword.onfocus = function(){
        oPassword_span.style.display = "block"
        oPassword_span.innerHTML = "6~16个字符，区分大小写";
        oPassword_span.style.color = "grey";

    }
    oPassword.onblur = function(){
        oPassword_span.style.display = "none";
        oTestSpan.style.display = "none";
    }
    oPassword.oninput = function(){
        var oValue = this.value;
        if(oValue.length>=6){
            //显示密码判断
            oTestSpan.style.display = "block";
            oPassword_span.style.display = "none"
            //判断密码强度
            //<1>取消所有span样式
             for(var i = 0;i<aSpans.length;i++){
                 aSpans[i].className = "";
             }
             //判断当前密码的强弱
             if(/^\d+$/.test(oValue) || /^[a-z]+$/.test(oValue) || /^[A-Z]+$/.test(oValue)){
                 aSpans[0].className = "active";
             }else if(/\d/.test(oValue) && /[a-z]/.test(oValue) && /[A-Z]/.test(oValue)){
                 aSpans[2].className = "active";
             }else{
                 aSpans[1].className = "active";
             }
        }else{
            //显示提示部分
            oTestSpan.style.display = "none";
            oPassword_span.style.display = "block";
        }
    }
    oEmail.onfocus = function(){
        oEmail_span.style.display = "block";
        oEmail_span.style.color = "grey";
        oEmail_span.innerHTML =
         "6~18个字符，可以使用字母。数字，下划线，需要以字母开头";
    }
    oEmail.onblur = function(){
        var oValue = this.value;
        //判断输入框内容是否为空
        if(!oValue){
         oEmail_span.style.display = "none";
        }else if(oValue.length > 18 || oValue.length < 6){
         oEmail_span.style.display = "block";
         oEmail_span.style.color = "grey";
         oEmail_span.innerHTML =
         "长度应为6~18个字符";
        }else if(/[^a-zA-Z]/.test(oValue[0])){
         oEmail_span.style.display = "block";
         oEmail_span.style.color = "grey";
         oEmail_span.innerHTML =
         "!邮箱地址需要以字母开头";
        }else if(/\W/.test(oValue)){
         oEmail_span.style.display = "block";
         oEmail_span.style.color = "grey";
         oEmail_span.innerHTML =
         "!只能输入字母，数字，下划线";
        }else{
         oEmail_span.style.display = "block";
         oEmail_span.style.color = "green";
         oEmail_span.innerHTML =
         "✔恭喜，该邮箱可以注册";
        }
    }
}
