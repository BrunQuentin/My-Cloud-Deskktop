let man=new Vue({
	el : '#MAN',
	data : {
		Noms: ['PULL', 'T-shirt'],
		prix:['150','100'],
		success : false,

	},

	methods:{
		close : function(){
			
		}
	}
})

new Vue({
	el : '#man',
	data :{
		m : 'Hey '
	},
	methods:{
		affiche: function(){
			man.success = true,
			woman.success = false
		}
	}
})


let woman=new Vue({
	el : '#WOMAN',
	data : {
		success : false,

	},

	methods:{
		close : function(){
			this.success = false
		}
	}
})

new Vue({
	el : '#woman',
	data :{
		m : 'Hey '
	},
	methods:{
		affiche: function(){
			woman.success = true,
			man.success= false
		}
	}
})
