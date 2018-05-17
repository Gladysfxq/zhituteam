var teacher = new Vue({
	el:'#familyTeacher',
	data:{
		list:[],
		condition: null,
		grade: '年级',
		subject: '学科',
		teacherType: '教师类型',
		isShowAll: false,
		isShowGrade: false,
		isShowSubject: false,
		isShowType: false,
	},
	mounted: function(){
		this.getData(); 
	},
	methods: {
		getQuery:function(){
						var str = (location.search.length > 0 ? location.search.substring(1) : ''),
						args = {},
						items = str.length ? str.split("&") : [],
						item = null,
						name = null,
						value = null;
						for (i=0; i < items.length; i++){
							item = items[i].split("=");
							name = decodeURIComponent(item[0]);
							value = decodeURIComponent(item[1]);
							if (name.length) {
								args[name] = value;
							}
						}
						return args;
					},
		getData:function(){
			var that = this;
			$.ajax({
				url:'http:////api.zhituteam.com/api/teacher/lists',
				type:'get',
				datatype:'json',
				success:function(res){
					res.data.condition.grade.forEach(function(item){
						item.isSelected = false;
					})
					res.data.condition.subject.forEach(function(item){
						item.isSelected = false;
					})
					res.data.condition.type.forEach(function(item){
						item.isSelected = false;
					})
					that.list = res.data.teacher;
					// if(that.condition == null){
					  that.condition = res.data.condition;
					// }
                    console.log(that.condition)
				}
			})
		},
				clickGrade: function(){
                    this.isShowAll = true;
                    this.isShowGrade = true;
                    this.isShowSubject = false;
                    this.isShowType = false;
				},
				clickSubject: function(){
                    this.isShowAll = true;
                    this.isShowGrade = false;
                    this.isShowSubject = true;
                    this.isShowType = false;
				},
				clickType: function(){
                    this.isShowAll = true;
                    this.isShowGrade = false;
                    this.isShowSubject = false;
                    this.isShowType = true;
				},
				clickItem: function(item){
					this.condition.grade.forEach(function(f){
                            f.isSelected = false;
                        })
                        this.condition.subject.forEach(function(f){
                            f.isSelected = false;
                        })
                        this.condition.type.forEach(function(f){
                            f.isSelected = false;
                        })
                        item.isSelected = true;
                        this.isShowAll = false;
                        if(this.isShowGrade){
                            this.grade = item.label;
                        }
                        if(this.isShowSubject){
                            this.subject = item.label;
                        }
                        if(this.isShowType){
                            this.teacherType = item.label;
                        }
				}

	}
})
