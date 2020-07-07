class Ngo
{
   constructor()
   {}
   hide()
   {
       this.event.hide();
       this.event1.hide();
       this.time1.hide();
       this.time2.hide();
       this.one.hide();
       this.event2.hide();
       this.two.hide();
       this.signout.hide();
   }
   dashboard()
   {
       this.event = createElement('h1');
       this.event.html("Events");
       this.event.position(150,10);

       this.event1 = createElement('h3',"Event 1: abc Hotel");
       this.event1.position(50,100);
       this.time1 = createElement('h4',"23 July, 4:00 pm");
       this.time1.position(70,120);
       this.one = createButton('Choose');
       this.one.position(300,120);
       
       this.event2 = createElement('h3',"Event 2: xyz Hotel");
       this.event2.position(50,200);
       this.time2 = createElement('h4',"21 July, 4:00 pm");
       this.time2.position(70,220);
       this.two = createButton('Choose');
       this.two.position(300,220);

       this.signout = createButton('Sign out');
       this.signout.position(200,500);
       this.signout.mousePressed(()=>{
           this.hide();           
           var sc1 = new Screens();
           sc1.screen1();
       })
       this.one.mousePressed(()=>{
        this.hide();
        this.layout();
        this.first();
       });
       this.two.mousePressed(()=>{
        this.hide();
        this.layout();
        this.second();
       });
    }
    layout()
    {
        this.header = createElement('h1',"Hotel Details");
        this.header.position(100,10);
        this.name = createElement('h3');
        this.name.position(50,100);
        this.qone = createElement('h3');
        this.qone.position(50,140);
        this.qtwo = createElement('h3');
        this.qtwo.position(50,180);
        this.qthree = createElement('h3');
        this.qthree.position(50,220);
        this.qfour = createElement('h3');
        this.qfour.position(50,260);
        this.qfive = createElement('h3');
        this.qfive.position(50,300);
        this.accept = createButton('Accept');
        this.accept.position(220,400);
        this.nope = createButton('Go Back');
        this.nope.position(150,400);
        this.accept.mousePressed(()=>{
            this.header.hide();
            this.name.hide();
            this.qone.hide();
            this.qtwo.hide();
            this.qthree.hide();
            this.qfour.hide();
            this.qfive.hide();
            this.accept.hide();
            this.nope.hide();
            this.verify();
        })
        this.nope.mousePressed(()=>{
            this.header.hide();
            this.name.hide();
            this.qone.hide();
            this.qtwo.hide();
            this.qthree.hide();
            this.qfour.hide();
            this.qfive.hide();
            this.accept.hide();
            this.nope.hide();
            var ngo3 = new Ngo();
            ngo3.dashboard();
        })
    }
    first()
    {
       this.name.html("abc Hotel");
       this.qone.html("Type Of Food: Veg");
       this.qtwo.html("Enough to feed: 3-5 people");
       this.qthree.html("Drinks included");
       this.qfour.html("Event at 23 July, 4:00 pm");
       this.qfive.html("Event end at 23 July, 7:00 pm");

    }
    second()
    {
        this.name.html("xyz Hotel");
        this.qone.html("Type Of Food: Non-Veg");
        this.qtwo.html("Enough to feed: 6-8 people");
        this.qthree.html("Drinks not included");
        this.qfour.html("Event at 21 July, 4:00 pm");
       this.qfive.html("Event end at 21 July, 7:00 pm");
    }
    verify()
    {
        this.title = createElement('h1',"Confirm Details");
        this.title.position(100,10);
        this.ngoname = createElement('h3',"abc NGO");
        this.ngoname.position(50,100);
        this.ngono = createElement('h3',"Phone No.: 9855366543");
        this.ngono.position(50,140);
        this.ngoemail = createElement('h3',"Email: absngo@gmail.com");
        this.ngoemail.position(50,180);
        this.confirm = createButton('Confirm');
        this.confirm.position(170,400);
        this.confirm.mousePressed(()=>{
            this.title.html('Thank You');
            this.title2 = createElement('h2',"Your Details have been sent");
            this.title2.position(80,240);
            this.title.position(120,200);
            this.goback = createButton('Go Back To List');
            this.goback.position(170,400);
            this.ngono.hide();
            this.ngoname.hide();
            this.ngoemail.hide();
            this.confirm.hide();
            this.goback.mousePressed(()=>{
                this.title.hide();
                this.title2.hide();
                this.goback.hide();
                var ngo2 = new Ngo();
                ngo2.dashboard();
            })
        })
    }
}