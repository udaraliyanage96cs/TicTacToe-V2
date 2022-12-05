let arr = ['x','','','','','','','',''];
let turn = 'o';
$(".button1").css('pointer-events','none');
function set_click(id){
    let x_place = false;
    if(is_empty_sp(id)){

        set_data_o_sp(id);
        set_disable(id);

        if(check_win_x()){
            alert("Udara's AI Won");
            disable_all();
        }else if(check_win_o()){
            alert("User Won");
            disable_all();
        }else if(win_x_avilable()){
            let pot = win_x_avilable();
            console.log(pot);
            set_data_x(pot);
            if(check_win_x()){
                alert("Udara's AI Won");
                disable_all();
                console.log("c");
            }
            console.log("a");
        }else if(win_o_avilable() && turn=='o'){
            let pot = win_o_avilable();
            console.log(pot);
            set_data_o(pot);
            if(check_win_o()){
                alert("User Won");
                disable_all();
                console.log("b");
            }
            console.log("b");
        }else{

            if(win_x_avilable()){
                set_data_x(win_x_avilable());
                
                if(check_win_x()){
                    alert("Udara's AI Won");
                    disable_all();
                    console.log("c");
                }else{
                    console.log("d");
                }
            }else if(win_o_avilable() && turn=='o'){
                set_data_o(win_o_avilable());
                if(check_win_o()){
                    alert("User Won");
                    disable_all();
                    console.log("e");
                }
                console.log("f");
            }else{

                console.log(turn);
                console.log(win_o_avilable());
                if(win_o_avilable() && turn =='x'){
                    set_data_x(win_o_avilable());
                }else{
                    if(is_empty_sp(9)){
                        set_data_x_sp(9);
                        set_disable(9);
                        console.log("g");
                    }else if(is_empty_sp(3)){
                        set_data_x_sp(3);
                        set_disable(3);
                        console.log("h");
                    }else if(is_empty_sp(7)){
                        set_data_x_sp(7);
                        set_disable(7);
                        console.log("i");
                    }else{
                        console.log("j");
                    }
                }
                
            }
        }
    }else{
        
    }

    if(game_over() && !check_win_x() && !check_win_o() ){
        alert("Game Over");
    }

   
    console.log(arr);
}

function is_empty(id){
    if(arr[id] == ''){
        return true;
    }else{
        return false;
    }
}
function is_empty_sp(id){
    if(arr[id-1] == ''){
        return true;
    }else{
        return false;
    }
}

function set_disable(id){
    $(".button"+id).css('pointer-events','none');
}

function set_data_o_sp(id){
    arr[id-1] = 'o';
    $(".button"+id).text('O');
    turn = 'x';
}
function set_data_o(id){
    arr[id] = 'o';
    let btn = id+1;
    $(".button"+btn).text('O');
    turn = 'x';
}
function set_data_x_sp(id){
    arr[id-1] = 'x';
    $(".button"+id).html('<i class="fas fa-times"></i>');
    x_place = true;
    turn = 'o';
}
function set_data_x(id){
    arr[id] = 'x';
    let btn = id+1;
    $(".button"+btn).html('<i class="fas fa-times"></i>');
    x_place = true;
    turn = 'o';
}

function check_win_x(){
    if(arr[0] == 'x' && arr[1] == 'x' && arr[2] == 'x'){
        make_color(0,1,2);
        return true;
    }else if(arr[3] == 'x' && arr[4] == 'x' && arr[5] == 'x'){
        make_color(3,4,5);
        return true;
    }else if(arr[6] == 'x' && arr[7] == 'x' && arr[8] == 'x'){
        make_color(6,7,8);
        return true;
    }else if(arr[0] == 'x' && arr[3] == 'x' && arr[6] == 'x'){
        make_color(0,3,6);
        return true;
    }else if(arr[1] == 'x' && arr[4] == 'x' && arr[7] == 'x'){
        make_color(1,4,7);
        return true;
    }else if(arr[2] == 'x' && arr[5] == 'x' && arr[8] == 'x'){
        make_color(2,5,8);
        return true;
    }else if(arr[0] == 'x' && arr[4] == 'x' && arr[8] == 'x'){
        make_color(0,4,8);
        return true;
    }else if(arr[2] == 'x' && arr[4] == 'x' && arr[6] == 'x'){
        make_color(2,4,6);
        return true;
    }
}

function make_color(btn1,btn2,btn3){
    btn1 = btn1+1;
    btn2 = btn2+1;
    btn3 = btn3+1;

    console.log(btn1+" : "+btn2+" : "+btn3);
    $(".button"+btn1).css('background-color','#f00');
    $(".button"+btn2).css('background-color','#f00');
    $(".button"+btn3).css('background-color','#f00');

    $(".button"+btn1).css('color','#fff');
    $(".button"+btn2).css('color','#fff');
    $(".button"+btn3).css('color','#fff');

   
}

function check_win_o(){
    if(arr[0] == 'o' && arr[1] == 'o' && arr[2] == 'o'){
        make_color(0,1,2);
        return true;
    }else if(arr[3] == 'o' && arr[4] == 'o' && arr[5] == 'o'){
        make_color(3,4,5);
        return true;
    }else if(arr[6] == 'o' && arr[7] == 'o' && arr[8] == 'o'){
        make_color(6,7,8);
        return true;
    }else if(arr[0] == 'o' && arr[3] == 'o' && arr[6] == 'o'){
        make_color(0,3,6);
        return true;
    }else if(arr[1] == 'o' && arr[4] == 'o' && arr[7] == 'o'){
        make_color(1,4,7);
        return true;
    }else if(arr[2] == 'o' && arr[5] == 'o' && arr[8] == 'o'){
        make_color(2,5,8);
        return true;
    }else if(arr[0] == 'o' && arr[4] == 'o' && arr[8] == 'o'){
        make_color(0,4,8);
        return true;
    }else if(arr[2] == 'o' && arr[4] == 'o' && arr[6] == 'o'){
        make_color(2,4,6);
        return true;
    }
}

function win_x_avilable(){
    if(arr[0]=="x" && arr[1] == "x" && is_empty(2)){
        return 2;
    }else if(arr[0]=="x" && arr[2] == "x" && is_empty(1)){
        return 1;
    }else if(arr[0]=="x" && arr[3] == "x" && is_empty(6)){
        return 6;
    }else if(arr[0]=="x" && arr[6] == "x" && is_empty(3)){
        return 3;
    }else if(arr[0]=="x" && arr[4] == "x" && is_empty(8)){
        return 8;
    }else if(arr[0]=="x" && arr[8] == "x" && is_empty(4)){
        return 4;
    }else if(arr[2]=="x" && arr[5] == "x" && is_empty(8)){
        return 8;
    }else if(arr[2]=="x" && arr[8] == "x" && is_empty(5)){
        return 5;
    }else if(arr[8]=="x" && arr[5] == "x" && is_empty(2)){
        return 2;
    }else if(arr[6]=="x" && arr[7] == "x" && is_empty(8)){
        return 8;
    }else if(arr[6]=="x" && arr[8] == "x" && is_empty(7)){
        return 7;
    }else if(arr[8]=="x" && arr[7] == "x" && is_empty(6)){
        return 6;
    }else if(arr[2]=="x" && arr[4] == "x" && is_empty(6)){
        return 6;
    }else if(arr[2]=="x" && arr[6] == "x" && is_empty(4)){
        console.log("here");
        return 4;
        
    }else if(arr[6]=="x" && arr[4] == "x" && is_empty(2)){
        return 2;
    }else{
        return false;
    }
}

function win_o_avilable(){
    if(arr[0]=="o" && arr[1] == "o" && is_empty(2)){
        return 2;
    }else if(arr[0]=="o" && arr[2] == "o" && is_empty(1)){
        return 1;
    }else if(arr[0]=="o" && arr[3] == "o" && is_empty(6)){
        return 6;
    }else if(arr[0]=="o" && arr[6] == "o" && is_empty(3)){
        return 3;
    }else if(arr[0]=="o" && arr[4] == "o" && is_empty(8)){
        return 8;
    }else if(arr[0]=="o" && arr[8] == "o" && is_empty(4)){
        return 4;
    }else if(arr[2]=="o" && arr[5] == "o" && is_empty(8)){
        return 8;
    }else if(arr[2]=="o" && arr[8] == "o" && is_empty(5)){
        return 5;
    }else if(arr[8]=="o" && arr[5] == "o" && is_empty(2)){
        return 2;
    }else if(arr[6]=="o" && arr[7] == "o" && is_empty(8)){
        return 8;
    }else if(arr[6]=="o" && arr[8] == "o" && is_empty(7)){
        return 7;
    }else if(arr[8]=="o" && arr[7] == "o" && is_empty(6)){
        return 6;
    }else if(arr[2]=="o" && arr[4] == "o" && is_empty(6)){
        return 6;
    }else if(arr[2]=="o" && arr[6] == "o" && is_empty(4)){
        return 4;
    }else if(arr[6]=="o" && arr[4] == "o" && is_empty(2)){
        return 2;
    }else if(arr[3]=="o" && arr[4] == "o" && is_empty(5)){
        return 5;
    }else if(arr[3]=="o" && arr[5] == "o" && is_empty(4)){
        return 4;
    }else if(arr[5]=="o" && arr[4] == "o" && is_empty(3)){
        return 3;
    }else if(arr[1]=="o" && arr[4] == "o" && is_empty(7)){
        return 7;
    }else if(arr[1]=="o" && arr[7] == "o" && is_empty(4)){
        return 4;
    }else if(arr[7]=="o" && arr[4] == "o" && is_empty(1)){
        return 1;
    }else{
        return false;
    }
}

function disable_all(){
    for (let i = 1; i < 10; i++) {
        $(".button"+i).css('pointer-events','none');
    }
    send_mail();
}

function game_over(){
    let over = true;
    for (let j = 0; j < arr.length; j++) {
        if(arr[j] == ''){
            over = false;
        }
    }
    send_mail();
    return over;

}

function send_mail(){
    // let user_name = $("#uname").val();
    // $(".toebox").css('display','block');
    // $("#uname").attr("disabled", true);
    // $("#restartbtn").css('display','block');
    // $("#playbtn").css('display','none');
    
    $.ajax({
        url: "sendmail.php",
        type: 'GET',
        dataType: 'json', // added data type
        success: function(res) {
            console.log(res);
            alert(res);
        }
    });
}

$("#restartbtn").click(function (){
    location.reload();
});