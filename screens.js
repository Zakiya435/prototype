class Screens 
{
    constructor() 
    {
    this.passwordOfPerson = createInput("Password");
    this.emailOfPerson = createInput("Email");
    this.phoneNoOfPerson = createInput("Phone No.");
    this.hotel = createButton('Hotel/Individual');
    this.ngo = createButton('NGO');
    this.register = createButton('Register');
    this.title = createElement('h1',"HOME PAGE");
    }
    
    hide()
    {
      this.hotel.hide();
      this.ngo.hide();
      this.passwordOfPerson.hide();
      this.emailOfPerson.hide();
      this.phoneNoOfPerson.hide();
      this.title.hide();
      this.register.hide();
    }
    screen1()
    {
    
      this.title.position(130,50);
      this.emailOfPerson.position(130,160);
      this.passwordOfPerson.position(130,190);
      this.phoneNoOfPerson.position(130,220);
      this.hotel.position(130,250);
      this.ngo.position(250,250);
      this.register.position(170,300);
      
      this.hotel.mousePressed(()=>{
        this.hide();
        game.update(1);
        hotel.details();

      });
      this.ngo.mousePressed(()=>{
        this.hide();
        game.update(2);
        ngo.dashboard();
      });
      this.register.mousePressed(()=>{
        this.hide();
        this.registering();
      });
      
  
    }
    registering()
    {
      this.registertitle = createElement('h1',"REGISTER");
      this.registertitle.position(130,30);
      this.first = createInput('First Name');
      this.first.position(10,100);
      this.last = createInput('Last Name');
      this.last.position(200,100);
      this.name = createInput('Hotel/NGO name');
      this.name.position(130,150);
      this.email = createInput('Email');
      this.email.position(130,175);
      this.phone = createInput('Phone No.');
      this.phone.position(130,200);
      this.password = createInput('Password');
      this.password.position(130,225);
      this.password2 = createInput('Repeat Password');
      this.password2.position(130,250);
      this.building = createInput('Building Name');
      this.building.position(130,290);
      this.sector = createInput('Sector');
      this.sector.position(130,320);
      this.city = createInput('City');
      this.city.position(130,350);
      this.state = createInput('State');
      this.state.position(130,380);
      this.pincode = createInput('Pin');
      this.pincode.position(130,410);
      this.button3 = createButton('Register');
      this.button3.position(150,450);

      this.button3.mousePressed(()=>{
        this.registertitle.hide();
        this.first.hide();
        this.last.hide();
        this.name.hide();
        this.email.hide();
        this.password.hide();
        this.password2.hide();
        this.phone.hide();
        this.building.hide();
        this.sector.hide();
        this.city.hide();
        this.state.hide();
        this.pincode.hide();
        this.button3.hide();
        this.thanks(); 
      })
    }
    thanks()
    {
      this.thank = createElement('h1',"Thank You For Registering");
      this.thank.position(10,200);
      this.go = createButton('OK');
      this.go.position(170,400);
      this.go.mousePressed(()=>{
        this.thank.hide();
        this.go.hide();
        var sc1 = new Screens();
        sc1.screen1();
      })
    }
}