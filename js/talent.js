function generateTalentInput(talent_num) {
   var talent_input = document.getElementById("talent_input");
    talent_input.innerHTML = "";
    for (var i = 1; i <= talent_num; i++) {
        talent_input.innerHTML += "<h3>天赋" + i + "</h3><label for='talent_name_" + i + "'>天赋名称：</label><input type='text' id='talent_name_" + i + "' name='talent_name_" + i + "'><br><label for='talent_content_" + i + "'>天赋内容：</label><textarea id='talent_content_" + i + "' name='talent_content_" + i + "' style='width: 300px;'></textarea><br><br>";
    }
}


document.getElementById("talent_num").addEventListener("change", function() {
    var talent_num = document.getElementById("talent_num").value;
    generateTalentInput(talent_num);
});


// Display input area for the number of talents by default
var talent_num = document.getElementById("talent_num").value;
generateTalentInput(talent_num);