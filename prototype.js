function prototype_print()
{
	const person =
	{
		age: 5,
		weight: 80.0,
		show_age: function()
		{
			alert("年齢は"+this.age+"です");
		}
	};

	// プロトタイプによる継承
	const character =
	{
		TV: "fuji",
		__proto__: person	//personオブジェクトをプロトタイプとして参照
	}

	character.show_age();	//プロトタイプで参照しているので元のメソッドも使える
}
