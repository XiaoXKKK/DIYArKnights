```html
<!DOCTYPE html>
<script src="https://d3js.org/d3.v7.min.js"></script>


<html>
<head>
	<title>明日方舟角色DIY</title>
</head>
<body>
	<h1>明日方舟角色DIY</h1>
	<div style="display: flex; flex-direction: row;">
		<div style="flex: 1;">
			<h2>基础属性</h2>
			<ul>
				<li>生命值：<input type="number" name="health" value="100"></li>
				<li>攻击力：<input type="number" name="attack" value="50"></li>
				<li>防御力：<input type="number" name="defense" value="20"></li>
				<li>法术抗性：<input type="number" name="magic_resistance" value=""></li>
				<li>阻挡数：<input type="number" name="block" value="1"></li>
				<li>部署费用：<input type="number" name="cost" value="10"></li>
				<li>再部署时间：
					<select name="respawn_time">
						<option value="very_fast">非常快</option>
						<option value="fast">快</option>
						<option value="medium">中等</option>
						<option value="slow">慢</option>
						<option value="very_slow">非常慢</option>
					</select>
				</li>
				<li>攻击速度：
					<select name="attack_speed">
						<option value="very_fast">非常快</option>
						<option value="fast">快</option>
						<option value="medium">中等</option>
						<option value="slow">慢</option>
						<option value="very_slow">非常慢</option>
					</select>
				</li>
			</ul>
<h2>潜能</h2>
<ul>
	<li>潜能等级2：<input type="text" name="potential_1" value=""></li>
	<li>潜能等级3：<input type="text" name="potential_2" value=""></li>
	<li>潜能等级4：<input type="text" name="potential_3" value=""></li>
	<li>潜能等级5：<input type="text" name="potential_4" value=""></li>
	<li>潜能等级6：<input type="text" name="potential_5" value=""></li>
</ul>
		</div>
		<div id="attack_range" style="flex: 1;">
			<h2>攻击范围</h2>
			<script src="js/atk_range.js"></script>
			</div>
			<h2>分支</h2>
			
		<div style="flex: 1;">
			<h2>技能</h2>
			<label for="skill_num">技能个数：</label>
			<input type="number" id="skill_num" name="skill_num" min="0" max="3" value="3"><br><br>
			<div id="skill_input"></div>
			<script src="js/skill.js"></script>
		</div>
		<div style="flex: 1;">
			<h2>天赋</h2>
			<label for="talent_num">天赋个数：</label>
			<input type="number" id="talent_num" name="talent_num" min="0" max="2" value="2"><br><br>
			<div id="talent_input"></div>
			<script  src="js/talent.js">
			</script>
		</div>
	</div>
</body>
</html>
```