// $(function(){
//  $.ajax({
// 	 url:"http://api.zhituteam.com/api/index",
// 	 type: "get",
//      dataType: "json",
//      success:function(result){
        
//      }

// });
// 	$(document).ready(function () {
// 		 var mySwiper = new Swiper('.swiper-container', {
// 	      // spaceBetween: 30,
// 	      // centeredSlides: true,
// 	      observer:true,//修改swiper自己或子元素时，自动初始化swiper
// 	      observeParents:true,//修改swiper的父元素时，自动初始化swiper
// 	      autoplay: {
// 	        delay: 2500,
// 	        disableOnInteraction: false,
// 	      },
// 	      // pagination: {
// 	      //   el: '.swiper-pagination',
// 	      //   clickable: true,
// 	      // },
// 	    });
//     })

// })
var teacher = new Vue({
	el:'#familyTeacher',
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
					var newBannerList = [];
					for(var i = 0;i<5;i++){
						newBannerList = newBannerList.concat(res.data.banner)
					}
					that.banner = newBannerList;
					that.swiperBanner();
				}
			});
			console.log(this.list);
			console.log(that.list);
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
