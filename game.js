class Game {
    constructor(){
  
    }
  
    getState(){
      var appStateRef  = database.ref('appState');
      appStateRef.on("value",function(data){
        appState = data.val();
      })  
    }
  
    update(state){
      database.ref('/').update({
        appState: state
      });
    }
}