function checkn(){
    var val=document.getElementsByName("Name")[0].value;
    if(val.length>=2){
        document.getElementById("00").innerHTML="";
    }
    else{
        document.getElementById("00").innerHTML="enter valid name";
    }
}
function pwd(){
    var p1=document.getElementById("p1").value;
    if(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(p1)){
        document.getElementById("0").innerHTML="";
    }
    else{
        document.getElementById("0").innerHTML=" password should contain atleast six character and 1 uppercase,1 lowercase,1 digit";
    }
}

function pwd1(){
    var p1=document.getElementById("p1").value;
    var p2=document.getElementById("p2").value;
    if(p1==p2){
        document.getElementById("1").innerHTML="";
    }
    else{
        document.getElementById("1").innerHTML="passwords dont match enter again";
    }
}

function validmail(){
    var mail=document.getElementsByName("email")[0].value;
    //console.log(mail);
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)){
        document.getElementById("2").innerHTML="";
    }
    else{
        document.getElementById("2").innerHTML="enter valid email id example@domain.extension";
    }
}

function validno(){
    var num=document.getElementsByName("number")[0].value;
    if(/^\d{10}$/.test(num)){
        document.getElementById("3").innerHTML="";
    }
    else{
        document.getElementById("3").innerHTML="enter exactly 10 digits";
    }
}

function validatedob(){
    var lblError = document.getElementById("4");
        var dateString = document.getElementsByName("dob")[0].value;
        var regex = /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;
        if (regex.test(dateString)) {
            var d=new Date();
            var value=d.getFullYear();
            var cmp=dateString.substring(dateString.length-4,dateString.length);
            if(value-cmp>=18){
                lblError.innerHTML="";
            }
            else{
                lblError.innerHTML="should be above 18 years to register";
            }

        } 
        else {
            lblError.innerHTML = "Enter date in dd/mm/yyyy format ONLY.";
        }
    }

function submit(){
    var n=document.getElementsByName("Name")[0].value;
    var n1=document.getElementsByName("password")[0].value;
    var n2=document.getElementsByName("password1")[0].value;
    var n3=document.getElementsByName("email")[0].value;
    var n4=document.getElementsByName("number")[0].value;
    var n5=document.getElementsByName("dob")[0].value;
    if(n=="" || n1=="" || n2=="" || n3=="" || n4=="" || n5==""){
        alert("enter all the fields");
    }
    else{
        alert("successfully registered")
    }
}

