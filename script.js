const reels = [
  {
    ismuted : true,
    username: "aman.yadav",
    likes: 12450,
    isLiked: true,
    comments: 320,
    caption: "Consistency > Motivation 💪 #gym #discipline",
    video: "./reel/1.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/1.jpg",
    shares: 210,
    isFollowed: true
  },
  {
    username: "fit.with.raj",
    likes: 8932,
    isLiked: false,
    comments: 210,
    caption: "Leg day hits different 😤🔥",
    video: "./reel/2.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/2.jpg",
    shares: 140,
    isFollowed: false
  },
  {
    username: "travel.diaries",
    likes: 15432,
    isLiked: true,
    comments: 500,
    caption: "Lost in the mountains 🏔️❤️",
    video: "./reel/3.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/3.jpg",
    shares: 350,
    isFollowed: true
  },
  {
    username: "codewithme",
    likes: 6789,
    isLiked: false,
    comments: 98,
    caption: "Day 10 of learning JavaScript 🚀",
    video: "./reel/4.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/4.jpg",
    shares: 60,
    isFollowed: false
  },
  {
    username: "foodie.vibes",
    likes: 22340,
    isLiked: true,
    comments: 870,
    caption: "Street food in Ahmedabad 😍🔥",
    video: "./reel/5.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/5.jpg",
    shares: 500,
    isFollowed: true
  },
  {
    username: "daily.memes",
    likes: 31200,
    isLiked: false,
    comments: 1200,
    caption: "Relatable or not? 😂",
    video: "./reel/6.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/6.jpg",
    shares: 800,
    isFollowed: false
  },
  {
    username: "nature.lens",
    likes: 11200,
    isLiked: true,
    comments: 430,
    caption: "Peace in nature 🌿✨",
    video: "./reel/7.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/7.jpg",
    shares: 260,
    isFollowed: true
  },
  {
    username: "startup.grind",
    likes: 5400,
    isLiked: false,
    comments: 75,
    caption: "Building something big 🚀",
    video: "./reel/8.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/8.jpg",
    shares: 45,
    isFollowed: false
  },
  {
    username: "dance.moves",
    likes: 27890,
    isLiked: true,
    comments: 980,
    caption: "Trending steps 💃🔥",
    video: "./reel/9.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/9.jpg",
    shares: 670,
    isFollowed: true
  },
  {
    username: "tech.updates",
    likes: 9100,
    isLiked: false,
    comments: 150,
    caption: "AI is changing everything 🤖",
    video: "./reel/10.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/10.jpg",
    shares: 120,
    isFollowed: false
  }
];
var allReels = document.querySelector('.all-reels')

function addData(){
  var sum = ''

reels.forEach(function(elem,idx){
    // console.log(elem);
    // console.log(idx);
    sum =sum + `<div class="reel">
                                <video autoplay loop ${elem.ismuted ? 'muted' : ''} src="${elem.video}"></video>
                                <div class="mute" id=${idx}>
                                ${elem.ismuted?'<i class="ri-volume-mute-fill"></i>':'<i class="ri-volume-up-fill"></i>'}
                                </div>
                                <div class="bottom">
                        <div class="user">
                            <img src="${elem.userProfile}"alt="">
                            <h4>${elem.username}</h4>
                            <button id="${idx}" class ='follow'>${elem.isFollowed?"UnFollow":"Follow"}</button>
                        </div>
                        <h3>${elem.caption}
                        </h3>
                    </div>
                    <div class="right">
                       <div id=${idx} class="like">
                        <h4 class="like-icon icon">${elem.isLiked?'<i class=" love ri-heart-3-fill"></i>':'<i class="ri-heart-3-line"></i>'}</h4>
                        <h6>${elem.likes}</h6>
                       </div>
                        <div class="comment">
                            <h4 class="comment-icon icon"> <i class="ri-chat-3-line"></i> </h4>
                            <h6>${elem.comments}</h6>
                        </div>
                        <div class="share">
                            <h4 class="share-icon icon"> <i class="ri-share-forward-line"></i></h4>
                            <h6>${elem.shares}</h6>
                        </div>
                        <div class="menu">
                            <h4 class="menu-icon icon"> <i class="ri-more-2-fill"></i></h4>
                        </div>
                    </div>
                </div>`
})

allReels.innerHTML = sum
}

addData()

//event modeling:

allReels.addEventListener('click', function(dets){  
  // console.log("Hello"); // aap kahi v click karoge hello milega on screen.
  // console.log(dets);
  // console.log(dets.target);// it gives value of targeting elemnt : eg:- like , share , video , comments , caption , etc
  // console.log(dets.target.id); // arrays ki indexes jesi hai ye id's : 
  // console.log(reels[dets.target.id]); // id pe click krne pe pura ka pura object milega 
  // console.log(reels[dets.target.id].caption); // like pe click krne pe pura ka pura object milega for caption
  // console.log(reels[dets.target.id].likes); // likes ka count milega if id attached hot , jo mere code me abhi nahi h.
  // console.log(reels[dets.target.id]); // This is a golden number , you can find every data w help of this.
  // if(!reels[dets.target.id].isLiked){
  //   reels[dets.target.id].likes++;
  //   reels[dets.target.id].isLiked = true;
  // }
  // else{
  // reels[dets.target.id].likes--;
  // reels[dets.target.id].isLiked = false;
  // }

    // reels[dets.target.id].likes++;
    // reels[dets.target.id].is Liked = true;
  
    // console.log(dets.target.className);

    if(dets.target.className == 'like'){
      if(!reels[dets.target.id].isLiked){
        reels[dets.target.id].likes++ ;
        reels[dets.target.id].isLiked = true ;
      }else{
        reels[dets.target.id].likes-- ;
      reels[dets.target.id].isLiked = false ;
      }
       addData();
    }



    if(dets.target.className == 'follow'){
      if(!reels[dets.target.id].isFollowed){
        reels[dets.target.id].isFollowed = true;
      }
      else{
        reels[dets.target.id].isFollowed = false;
      }
       addData();
    }


    if(dets.target.className == 'mute'){
      if(!reels[dets.target.id].ismuted){
        reels[dets.target.id].ismuted = true;
      }
      else{
        reels[dets.target.id].ismuted= false;
      }
       addData();
    }


    

  // console.log(reels);
   

  
})

// var arr = [10,20,30,40]

// arr.forEach(function(elem,idx){ // first variable will print element , 2nd variable will print index numbers
//   console.log(elem); // gives value of element in array
//   console.log(idx); //gives index number   
// })
