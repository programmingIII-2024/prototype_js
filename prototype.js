function prototype_print()
{
	const person =
	{
		age: 5,
		weight: 80.0,
		show_age: function()
		{
			alert("年齢は"+this.age+"です");
		},
		set_age: function(age)
		{
			this.age = age;
		}
	};

	// プロトタイプによる継承
	const character =
	{
		TV: "fuji",
		__proto__: person,	// personオブジェクトをプロトタイプとして参照

		// 関数のオーバーライド
		show_age: function()
		{
			alert("年齢は"+this.age+"、体重は"+this.weight+"テレビ局は"+this.TV+"です。");
		}

	}

	character.set_age(50);	// プロトタイプで参照しているので元のメソッドも使える
	character.show_age();	// オーバーライドしたメソッドが呼ばれる
}
