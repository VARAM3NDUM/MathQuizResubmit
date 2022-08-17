player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");
player1_score = 0;
player2_score = 0;

document.getElementById("player1_name_score").innerHTML= player1_name + " : ";
document.getElementById("player2_name_score").innerHTML= player2_name + " : ";
document.getElementById("player1_score").innerHTML= player1_score;
document.getElementById("player2_score").innerHTML= player2_score;

document.getElementById("player_question").innerHTML= "Question turn : " + player1_name;
document.getElementById("player_answer").innerHTML= "Answer turn : " + player2_name;

function send()
{
    get_Num1 = document.getElementById("Num1").value;
    get_Num2 = document.getElementById("Num2").value;
    Q = get_Num1 + " X " + get_Num2;
    Answer = parseInt(Num1) * parseInt(Num1);

    Question = "<h4 style='margin-left : 5px;' id='Num1_display'> Question : " + Q + "</h4>";
    Input_box = "<br> Answer : <input type='ibox' id='Input_check'> </input>";
    check_button = "<br><br> <button style='margin-left : -50px;' class='btn btn-info' onClick='check()'> check </button> <br> <br>";
    row = Question + Input_box + check_button;
    document.getElementById("Output").innerHTML=row;
    document.getElementById("Num1").value = "";
    document.getElementById("Num2").value = "";
}

question_Turn = "player1";
answer_Turn = "player2";

function check()
{
    answer_Given = Number(document.getElementById("Input_check").value);
    actual_Answer = get_Num1 * get_Num2;
    console.log(actual_Answer);
    console.log(answer_Given);
    if (answer_Given == actual_Answer)
    {
        if (answer_Turn == "player1")
        {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else
        {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }

    if (question_Turn == "player1")
    {
        question_Turn = "player2";
        document.getElementById("player_question").innerHTML = "Question turn :" + player2_name;
    }
    else
    {
        question_Turn = "player1";
        document.getElementById("player_question").innerHTML = "Question turn :" + player1_name;
    }
    

    if (answer_Turn == "player2")
    {
        answer_Turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer turn :" + player1_name;
    }
    else
    {
        answer_Turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer turn :" + player2_name;
    }

    document.getElementById("Output").innerHTML = "";
}