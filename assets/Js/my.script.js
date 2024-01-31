
// >>>>>>>>>>>>>> Question 1 <<<<<<<<<<<<<<<
document.getElementById("sub").onclick=function(){
    var answer_1= document.getElementById("ques").value;
    document.getElementById( "answer").innerHTML=(answer_1);
}
// ###################################################
document.getElementById("res").onclick=function(){
    document.getElementById("ques").value ="";
    document.getElementById( "answer").innerHTML ="";
}
// #####################################################
// >>>>>>>>>>>>>> Question 2 <<<<<<<<<<<<<<<
document.getElementById("sub2").onclick=function(){
    var answer_2=document.getElementById("ques2").value;
    if(answer_2 ==""){
        document.getElementById("answer2").innerHTML=("No zero");
        }else if(answer_2%2==0&&answer_2%3==0){
            document.getElementById("answer2").innerHTML=("Correct answer");
        }else{
        document.getElementById("answer2").innerHTML=("Try again");
        }
}
// ###################################################
document.getElementById("res2").onclick=function(){
    document.getElementById("ques2").value ="";
    document.getElementById( "answer2").innerHTML ="";
}
// #####################################################
// >>>>>>>>>>>>>> Question 3 <<<<<<<<<<<<<<<
document.getElementById("sub3").onclick=function(){
    var answer_3=document.getElementById("ques3").value;
    var answer_2_3=document.getElementById("ques_3").value;
    if( +answer_3 > +answer_2_3 ){
        document.getElementById("answer3").innerHTML=( answer_3);
    }else if(+answer_3 < +answer_2_3){

        document.getElementById("answer3").innerHTML=( answer_2_3);

    }else{
        document.getElementById("answer3").innerHTML=("Try again");
        }
}
// #####################################################
document.getElementById("res3").onclick=function(){
    document.getElementById("ques3").value ="";
    document.getElementById("ques_3").value ="";
    document.getElementById( "answer3").innerHTML ="";
}
// #####################################################
// >>>>>>>>>>>>>> Question 4 <<<<<<<<<<<<<<<
document.getElementById("sub4").onclick=function(){
    var answer4=document.getElementById("ques4").value;
    if(answer4 >0){
        document.getElementById("answer4").innerHTML=("positive");
    }else if(answer4==0){
        document.getElementById("answer4").innerHTML=("No zero");
    }else{
        document.getElementById("answer4").innerHTML=("negative");
    }
}
// #####################################################
document.getElementById("res4").onclick=function(){
    document.getElementById("ques4").value ="";
    document.getElementById( "answer4").innerHTML ="";
}
// #####################################################
// >>>>>>>>>>>>>> Question 5 <<<<<<<<<<<<<<<
document.getElementById("sub5").onclick=function(){
    var answer5=document.getElementById("ques5").value;
    var answer_2_5=document.getElementById("ques_2_5").value;
    var answer_3_5=document.getElementById("ques_3_5").value;
    if(+answer5 > +answer_2_5 && +answer5 > +answer_3_5 ){
        document.getElementById("answer5").innerHTML=(Math.max(answer5));
        document.getElementById("answer_5").innerHTML=(Math.min(answer5 ,answer_2_5 ,answer_3_5));
    }
else if(+answer_2_5 > +answer5 && +answer_2_5 > +answer_3_5){
    document.getElementById("answer5").innerHTML=(Math.max(answer_2_5));
    document.getElementById("answer_5").innerHTML=(Math.min(answer5 ,answer_2_5 ,answer_3_5));
}
else if(+answer_3_5 > +answer5 && +answer_3_5 > +answer_2_5){
    document.getElementById("answer5").innerHTML=(Math.max(answer_3_5));
    document.getElementById("answer_5").innerHTML=(Math.min(answer5 ,answer_2_5 ,answer_3_5));
}else{
    document.getElementById("answer5").innerHTML=("no no no ");
    document.getElementById("answer_5").innerHTML=("no no no ");
}
}
// #####################################################
document.getElementById("res5").onclick=function(){
    document.getElementById("ques5").value ="";
    document.getElementById("ques_2_5").value ="";
    document.getElementById("ques_3_5").value ="";
    document.getElementById( "answer5").innerHTML ="";
    document.getElementById( "answer_5").innerHTML ="";
}
// #####################################################
// >>>>>>>>>>>>>> Question 6 <<<<<<<<<<<<<<<
document.getElementById("sub6").onclick=function(){
    var answer6=document.getElementById("ques6").value;
    if(+answer6 % 2 == 0){
        document.getElementById("answer6").innerHTML=("Oven");
    }else if( +answer6 % 2 !=1 ){
        document.getElementById("answer6").innerHTML=("");
    }else if( +answer6 % 2 == 1){
        document.getElementById("answer6").innerHTML=("odd");
    }
}
// #####################################################
document.getElementById("res6").onclick=function(){
    document.getElementById("ques6").value ="";
    document.getElementById( "answer6").innerHTML ="";
}
// #####################################################
// >>>>>>>>>>>>>> Question 7 <<<<<<<<<<<<<<<
document.getElementById("sub7").onclick=function(){
    var answer7=document.getElementById("ques7").value;
    if(answer7 =="a"  || answer7 =="o" || answer7 =="i" || answer7 =="e" || answer7 =="u" || answer7 =="A"  || answer7 =="O" || answer7 =="I" || answer7 =="E" || answer7 =="U" ){
        document.getElementById("answer7").innerHTML=("vowel");
    }else if(+answer7 ){
        document.getElementById("answer7").innerHTML=("No number");
    }else{
        document.getElementById("answer7").innerHTML=("Consonant");
    }
}
// #####################################################
document.getElementById("res7").onclick=function(){
    document.getElementById("ques7").value ="";
    document.getElementById( "answer7").innerHTML ="";
}
// #####################################################
// >>>>>>>>>>>>>> Question 8 <<<<<<<<<<<<<<<
document.getElementById("sub8").onclick=function (){
    var answer8=document.getElementById("ques8").value;
    for(res=1 ; res <= answer8 ; res++){
        console.log(res)}
}
// #####################################################
// >>>>>>>>>>>>>> Question 9 <<<<<<<<<<<<<<<
document.getElementById("sub9").onclick=function (){
    var answer9=document.getElementById("ques9").value;
    for(res=0 ; res <=12 ; res++){
        console.log(res * answer9)}
}
// #####################################################
// >>>>>>>>>>>>>> Question 10 <<<<<<<<<<<<<<<
document.getElementById("sub10").onclick=function (){
    var answer10=document.getElementById("ques10").value;
    for(res=0 ; res <=answer10 ; res+=2){
        console.log(res)}
}
// #####################################################
// >>>>>>>>>>>>>> Question 12 <<<<<<<<<<<<<<<
document.getElementById("sub12").onclick=function(){
    var answer_12=document.getElementById("ques12").value;
    var answer_2_12=document.getElementById("ques_12").value;
        document.getElementById("answer12").innerHTML=(answer_12**answer_2_12);
}
// ###################################################
document.getElementById("res12").onclick=function(){
    document.getElementById("ques12").value ="";
    document.getElementById("ques_12").value ="";
    document.getElementById( "answer12").innerHTML ="";
}
// #####################################################
// >>>>>>>>>>>>>> Question 13 <<<<<<<<<<<<<<<
document.getElementById("sub13").onclick=function(){
    var answer_13=document.getElementById("ques_13").value;
    var answer_2_13=document.getElementById("ques_2_13").value;
    var answer_3_13=document.getElementById("ques_3_13").value;
    var answer_4_13=document.getElementById("ques_4_13").value;
    var answer_5_13=document.getElementById("ques_5_13").value;
    var totleMark=500
        var totle=document.getElementById("answer13").innerHTML=(+answer_13 + +answer_2_13 + +answer_3_13 + +answer_4_13 + +answer_5_13 );
        document.getElementById("answer_2_13").innerHTML=(totle / 5 );
        document.getElementById("answer_3_13").innerHTML=(totle / 5 + " %") ;
}
// ###################################################
document.getElementById("res13").onclick=function(){
    document.getElementById("ques_13").value ="";
    document.getElementById("ques_2_13").value ="";
    document.getElementById("ques_3_13").value ="";
    document.getElementById("ques_4_13").value ="";
    document.getElementById("ques_5_13").value ="";
    document.getElementById( "answer13").innerHTML ="";
    document.getElementById( "answer_2_13").innerHTML ="";
    document.getElementById( "answer_3_13").innerHTML ="";
}
// #####################################################
// >>>>>>>>>>>>>> Question 14 <<<<<<<<<<<<<<<
document.getElementById("sub14").onclick=function(){
    var answer_14=document.getElementById("ques_14").value;
    var answer_1_14=document.getElementById("ques_2_14").value;
    var answer_2_14=document.getElementById("ques_3_14").value;
    var answer_3_14=document.getElementById("ques_4_14").value;
    var answer_4_14=document.getElementById("ques_5_14").value;
    var totleMark=500

    if(answer_14 >100){
        document.getElementById("answer14").innerHTML=( "Marks wrong");
    }else if(answer_14 >=90){
        document.getElementById("answer14").innerHTML=( "Grad A");
    }else if(answer_14 >=80){
        document.getElementById("answer14").innerHTML=( "Grad B");
    }else if(answer_14 >=70){
        document.getElementById("answer14").innerHTML=( "Grad C");
    }else if(answer_14 >=60){
        document.getElementById("answer14").innerHTML=( "Grad D");
    }else if(answer_14 >=40){
        document.getElementById("answer14").innerHTML=( "Grad E");
    }else if(answer_14 ==""){
        document.getElementById("answer14").innerHTML=("");
    }else{
        document.getElementById("answer14").innerHTML=( "Grad F");
    }
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
    if(answer_1_14 >100){
        document.getElementById("answer_1_14").innerHTML=( "Marks wrong");
    }else if(answer_1_14 >=90){
        document.getElementById("answer_1_14").innerHTML=( "Grad A");
    }else if(answer_1_14 >=80){
        document.getElementById("answer_1_14").innerHTML=( "Grad B");
    }else if(answer_1_14 >=70){
        document.getElementById("answer_1_14").innerHTML=( "Grad C");
    }else if(answer_1_14 >=60){
        document.getElementById("answer_1_14").innerHTML=( "Grad D");
    }else if(answer_1_14 >=40){
        document.getElementById("answer_1_14").innerHTML=( "Grad E");
    }else if(answer_1_14 ==""){
        document.getElementById("answer_1_14").innerHTML=( "");
    }else{
        document.getElementById("answer_1_14").innerHTML=( "Grad F");
    }
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
if(answer_2_14 >100){
    document.getElementById("answer_2_14").innerHTML=( "Marks wrong");
}else if(answer_2_14 >=90){
    document.getElementById("answer_2_14").innerHTML=( "Grad A");
}else if(answer_2_14 >=80){
    document.getElementById("answer_2_14").innerHTML=( "Grad B");
}else if(answer_2_14 >=70){
    document.getElementById("answer_2_14").innerHTML=( "Grad C");
}else if(answer_2_14 >=60){
    document.getElementById("answer_2_14").innerHTML=( "Grad D");
}else if(answer_2_14 >=40){
    document.getElementById("answer_2_14").innerHTML=( "Grad E");
}else if(answer_2_14 ==""){
    document.getElementById("answer_2_14").innerHTML=( "");
}else{
    document.getElementById("answer_2_14").innerHTML=( "Grad F");
}
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
if(answer_3_14 > 100){
    document.getElementById("answer_3_14").innerHTML=( "Marks wrong");
}else if(answer_3_14 >=90){
    document.getElementById("answer_3_14").innerHTML=( "Grad A");
}else if(answer_3_14 >=80){
    document.getElementById("answer_3_14").innerHTML=( "Grad B");
}else if(answer_3_14 >=70){
    document.getElementById("answer_3_14").innerHTML=( "Grad C");
}else if(answer_3_14 >=60){
    document.getElementById("answer_3_14").innerHTML=( "Grad D");
}else if(answer_3_14 >=40){
    document.getElementById("answer_3_14").innerHTML=( "Grad E");
}else if(answer_3_14 ==""){
    document.getElementById("answer_3_14").innerHTML=( "");
}else{
    document.getElementById("answer_3_14").innerHTML=( "Grad F");
}
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
if(answer_4_14 > 100){
    document.getElementById("answer_4_14").innerHTML=( "Marks wrong");
}else if(answer_4_14 >=90){
    document.getElementById("answer_4_14").innerHTML=( "Grad A");
}else if(answer_4_14 >=80){
    document.getElementById("answer_4_14").innerHTML=( "Grad B");
}else if(answer_4_14 >=70){
    document.getElementById("answer_4_14").innerHTML=( "Grad C");
}else if(answer_4_14 >=60){
    document.getElementById("answer_4_14").innerHTML=( "Grad D");
}else if(answer_4_14 >=40){
    document.getElementById("answer_4_14").innerHTML=( "Grad E");
}else if(answer_4_14 == ""){
    document.getElementById("answer_4_14").innerHTML=( "");
}else{
    document.getElementById("answer_4_14").innerHTML=( "Grad F");
}
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
    var tot=(+answer_14 + +answer_1_14 + +answer_2_14 + +answer_3_14 + +answer_4_14)
    if(tot>500){
        document.getElementById("totale_d").innerHTML=( "Marks wrong");
    }else if(tot>=450 ){
        document.getElementById("totale_d").innerHTML=( "Grad A");
    }else if(tot>=400){
        document.getElementById("totale_d").innerHTML=( "Grad B");
    }else if(tot>=350){
        document.getElementById("totale_d").innerHTML=( "Grad C");
    }else if(tot>=300){
        document.getElementById("totale_d").innerHTML=( "Grad D");
    }else if(tot>=200){
        document.getElementById("totale_d").innerHTML=( "Grad E");
    }else if(tot ==""){
        document.getElementById("totale_d").innerHTML=("");
    }else {
        document.getElementById("totale_d").innerHTML=( "Grad F");
    }

}
// ###################################################
document.getElementById("res14").onclick=function(){
    document.getElementById("ques_14").value ="";
    document.getElementById("ques_2_14").value ="";
    document.getElementById("ques_3_14").value ="";
    document.getElementById("ques_4_14").value ="";
    document.getElementById("ques_5_14").value ="";
    document.getElementById( "answer14").innerHTML ="";
    document.getElementById( "answer_1_14").innerHTML ="";
    document.getElementById( "answer_2_14").innerHTML ="";
    document.getElementById( "answer_3_14").innerHTML ="";
    document.getElementById( "answer_4_14").innerHTML ="";
    document.getElementById("totale_d").innerHTML="";
}
// #####################################################

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// calc

var text_view= document.getElementById("text_view").value;
    btn_c=document.getElementById("btn_c").value;
    btn_del=document.getElementById("btn_del").value;
    btn_mod=document.getElementById("btn_mod").value;//    %
    btn_sub=document.getElementById("btn_sub").value;//    +
    btn_eq=document.getElementById("btn_eq").value;//      +
    btn_min=document.getElementById("btn_min").value;//    -
    btn_mult=document.getElementById("btn_mult").value;//  *
    btn_div=document.getElementById("btn_div").value;//    /
    btn_9=document.getElementById("btn_9").value;
    btn_8=document.getElementById("btn_8").value;
    btn_7=document.getElementById("btn_7").value;
    btn_6=document.getElementById("btn_6").value;
    btn_5=document.getElementById("btn_5").value;
    btn_4=document.getElementById("btn_4").value;
    btn_3=document.getElementById("btn_3").value;
    btn_2=document.getElementById("btn_2").value;
    btn_1=document.getElementById("btn_1").value;
    btn_0=document.getElementById("btn_0").value;
    btn_dot=document.getElementById("btn_dot").value;
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
function btnsub(){
    text_view = text_view + btn_sub;
    document.getElementById("text_view").value=text_view ;
}
function btndiv(){
    text_view = text_view + btn_div;
    document.getElementById("text_view").value=text_view ;
}

function btnmod(){
    text_view = text_view + btn_mod;
    document.getElementById("text_view").value=text_view ;
}
function btnmin(){
    text_view = text_view + btn_min;
    document.getElementById("text_view").value=text_view ;
}
function btnmult(){
    text_view = text_view + btn_mult;
    document.getElementById("text_view").value=text_view ;
}
function btnc(){
    text_view =""
    document.getElementById("text_view").value="";
}
function btneq(){
    document.getElementById("text_view").value = eval(text_view);

}

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
function btn9(){
    text_view = text_view + btn_9;
    document.getElementById("text_view").value=text_view
}
function btn8(){
    text_view = text_view + btn_8;
    document.getElementById("text_view").value=text_view
}
function btn7(){
    text_view = text_view + btn_7;
    document.getElementById("text_view").value=text_view
}
function btn6(){
    text_view = text_view + btn_6;
    document.getElementById("text_view").value=text_view
}
function btn5(){
    text_view = text_view + btn_5;
    document.getElementById("text_view").value=text_view
}
function btn4(){
    text_view = text_view + btn_4;
    document.getElementById("text_view").value=text_view
}
function btn3(){
    text_view = text_view + btn_3;
    document.getElementById("text_view").value=text_view
}
function btn2(){
    text_view = text_view + btn_2;
    document.getElementById("text_view").value=text_view
}
function btn1(){
    text_view = text_view + btn_1;
    document.getElementById("text_view").value=text_view
}
function btn0(){
    text_view = text_view + btn_0;
    document.getElementById("text_view").value=text_view
}
function btndot(){
    text_view = text_view + btn_dot;
    document.getElementById("text_view").value=text_view
}
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$4
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$4
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$4
function hed(){
    document.getElementById("calc").style.display="none";
    document.getElementById("hid").style.display="none";
    document.getElementById("sho").style.display="inline";
}
function sho(){
    document.getElementById("calc").style.display="block";
    document.getElementById("hid").style.display="inline";
    document.getElementById("sho").style.display="none";
    // document.getElementById("calc").style.opacity="1";

}

















