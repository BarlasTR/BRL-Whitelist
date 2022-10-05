var mysqlc = require('../data/db').mysqlc; // EN: Database connector location  TR: Database lokasyonunuzu giriniz. Discord: Barlas#2157


mp.events.add('playerJoin', player => {
    mysqlc.query(`SELECT * FROM brl_whitelist WHERE socialID`, function(err, results){
        var ok;
        results.filter(result=>{
            if(result.socialID == player.rgscId){
                ok = result.socialID;
            }
       })
        
      
       if(ok== player.rgscId){
        console.log("You are whitelisted");
    }else{
        player.kick("You are not whitelisted");
       }

    })
});

