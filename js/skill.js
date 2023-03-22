function generateSkillInput(skill_num) {
    var skill_input = document.getElementById("skill_input");
    skill_input.innerHTML = "";
    for (var i = 1; i <= skill_num; i++) {
        skill_input.innerHTML += "<h3>技能" + i + "</h3><label for='skill_name_" + i + "'>技能名称：</label><input type='text' id='skill_name_" + i + "' name='skill_name_" + i + "'><br><label for='skill_description_" + i + "'>技能描述：</label><textarea id='skill_description_" + i + "' name='skill_description_" + i + "' rows='4' cols='50'></textarea><br><label for='skill_type_" + i + "'>技能类型：</label><select id='skill_type_" + i + "' name='skill_type_" + i + "'><option value='passive'>被动</option><option value='manual'>手动开启</option><option value='auto'>自动开启</option></select><br><div id='skill_parameter_" + i + "'></div><br>";
        document.getElementById("skill_type_" + i).addEventListener("change", function() {
            var skill_type = this.value;
            var id = this.id.slice(-1);
            var skill_parameter = document.getElementById("skill_parameter_" + id);
            skill_parameter.innerHTML = "";
            if (skill_type == "passive") {
                
            } else if (skill_type == "manual" || skill_type == "auto") {
                skill_parameter.innerHTML += "<label for='skill_initial_sp_" + id + "'>初始技力：</label><input type='text' id='skill_initial_sp_" + id + "' name='skill_initial_sp_" + id + "'><br><label for='skill_sp_cost_" + id + "'>技力需求：</label><input type='text' id='skill_sp_cost_" + id + "' name='skill_sp_cost_" + id + "'><br><label for='skill_duration_" + id + "'>持续时间：</label><input type='text' id='skill_duration_" + id + "' name='skill_duration_" + id + "'><br><label for='skill_sp_recovery_" + id + "'>技力恢复方式：</label><select id='skill_sp_recovery_" + id + "' name='skill_sp_recovery_" + id + "'><option value='hit'>受击恢复</option><option value='auto'>自动恢复</option><option value='attack'>攻击恢复</option></select><br>";
            }
        });
    }
}

document.getElementById("skill_num").addEventListener("change", function() {
    var skill_num = document.getElementById("skill_num").value;
    generateSkillInput(skill_num);
});

// Display input area for the number of skills by default
var skill_num = document.getElementById("skill_num").value;
generateSkillInput(skill_num);
