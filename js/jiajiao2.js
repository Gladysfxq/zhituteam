var app = new Vue({
	el: '#app',
	data:{
		subjectList: [],
		list:[],
		banner:[],
	},
	mounted: function(){
		this.getData(); 
	},
	methods: {
		getData:function(){
			var that = this;
			$.ajax({
				url:'http://api.zhituteam.com/api/index',
				type:'get',
				datatype:'json',
				success:function(res){
					console.log(res);
					that.subjectList = res.data.subjects;
					console.log(res.data.teacher);
					that.list = res.data.teacher;
			        console.log(that.list);

					var newBannerList = [];
					for(var i = 0;i<5;i++){
						newBannerList = newBannerList.concat(res.data.banner)
					}
					that.banner = newBannerList;
					that.swiperBanner();
				}
			});
			console.log(this.list);
		},
		swiperBanner:function(){
			var mySwiper = new Swiper ('.swiper-container', {
			    loop: true,
			    observer: true,
			    
			    // 如果需要分页器
			    // pagination: {
			    //   el: '.swiper-pagination',
			    // },
			    
			}) 
		}
	},
})
