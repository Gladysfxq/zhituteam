var teacher = new Vue({
	el:'#familyTeacher',
	data:{
		list:{},
	},
	mounted: function(){
		this.getData(); 
	},
	methods: {
		getData:function(){
			var that = this;
			var num = window.location.search.split("=")[1];
			$.ajax({
				url:'http://api.zhituteam.com/api/teacher/info',
				type:'get',
				datatype:'json',
				data:{
					id: num,
				},
				success:function(res){
					console.log(res);
					console.log(res.data.teacher);
					that.list = res.data.teacher;
				}
			});
			console.log(this.list);
			console.log(that.list);
		},
    }
})