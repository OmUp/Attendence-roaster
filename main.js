var DArray = [];

function submit() {
    var DArray1 = [];

    for(var j = 1; j <= 4; j++) {
        var Names = document.getElementById("name_of_the_student_"+j).value;
        DArray1.push(Names);
    }
    console.log(DArray1);
    length1 = DArray1.length;

    for(var i = 0; i < length1; i++) {
        DArray.push("Name = "+DArray1[i]);
    }
    document.getElementById("display_name_with_commas").innerHTML = DArray;
    var DArray_WC = DArray.join(" ");
    document.getElementById("display_name_without_commas").innerHTML = DArray_WC;

    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}

function sorting() {
    DArray.sort();
    document.getElementById("display_name_without_commas").innerHTML = DArray;
}