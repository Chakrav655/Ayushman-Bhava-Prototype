class User{
    constructor(){
        this.index = null;
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.bloodGroup = null;
        this.phone = 1111111111;        
        this.name = null;
    }
        getUserCount(){
        var userCountRef = database.ref('userInfo/userId');
        userCountRef.on("value",(data)=>{
          userCount = data.val();
        }) 
      }
    
      updateCount(userId){
        database.ref('/').update({
          userCount: userId
        });
      }
    
      update(){
        var userIndex = "WRF" + this.index;
        database.ref(userIndex).set({
          name:this.name,
          height:this.height,
          age:this.age,
          bloodGroup:this.bloodGroup,
          weight:this.weight,
          insurance:this.insurance,
          phoneNumber:this.phone
        });
      }
    
     /* static getPlayerInfo(){
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value",(data)=>{
          allPlayers = data.val();
        })
      }
      */
    }

