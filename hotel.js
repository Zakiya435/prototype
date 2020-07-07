class Hotel
{
   constructor()
   {

   }
   details()
   {
    this.title3 = createElement('h2',"DONATE");
    this.title3.position(150,30);

    this.q_1 = createElement('h4',"Type Of Food: ");
    this.q_1.position(10,100);
    this.q1 = createRadio();
    this.q1.option("Non-Veg");
    this.q1.option("Veg");
    this.q1.option("Both");
    this.q1.position(120,120);

    this.q_2 = createElement('h4',"Enough to feed: ");
    this.q_2.position(10,170);
    this.q2 = createRadio();
    this.q2.option("3-5 people");
    this.q2.option("6-8 people");
    this.q2.option("9+ people");
    this.q2.position(120,190);

    this.q_3 = createElement('h4',"Are there any drinks?");
    this.q_3.position(10,250);
    this.q3 = createRadio();
    this.q3.option("Yes");
    this.q3.option("No");
    this.q3.position(160,270);

    this.q_4 = createElement('h4',"Event start date: ");
    this.q_4.position(10,310);
    this.q4 = createInput("");
    this.q4.position(160,330);

    this.q_41 = createElement('h4',"Event start time: ");
    this.q_41.position(10,350);
    this.q41 = createInput("");
    this.q41.position(160,370);

    this.q_5 = createElement('h4',"Event end date: ");
    this.q_5.position(10,390);
    this.q5 = createInput("");
    this.q5.position(160,410);   

    this.q_51 = createElement('h4',"Event end time: ");
    this.q_51.position(10,430);
    this.q51 = createInput("");
    this.q51.position(160,450);

    this.button4 = createButton('Donate');
    this.button4.position(150,550);

    this.button4.mousePressed(()=>{

      this.title3.hide();
      this.q_1.hide();
      this.q_2.hide();
      this.q_3.hide();
      this.q1.hide();
      this.q2.hide();
      this.q3.hide();
      this.q_4.hide();
      this.q4.hide();
      this.q_41.hide();
      this.q41.hide();
      this.q_5.hide();
      this.q5.hide();
      this.q_51.hide();
      this.q51.hide();
      this.button4.hide();

      this.thanks = createElement('h2',"THANK YOU FOR THE DONATION");
      this.thanks.position(0,200);
      this.home = createButton('Sign Out');
      this.home.position(170,430);

      this.home.mousePressed(()=>{
        var sc1 = new Screens();
        sc1.screen1();
        this.thanks.hide();
        this.home.hide();
      })
    })
    
   }
   
   
}