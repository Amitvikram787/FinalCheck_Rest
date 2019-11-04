import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

   signup:FormGroup;
   formss:boolean;
  constructor() { }

  ngOnInit() {
    this.signup=new FormGroup({
      'name' :new FormControl(null,[Validators.required,Validators.maxLength(20)],this.isuser),
       'fname':new FormControl(null,[Validators.required,Validators.pattern('^[a-zA-Z]+$'),Validators.maxLength(50)]),
       'lname':new FormControl(null,[Validators.required,Validators.pattern('^[a-zA-Z]+$'),Validators.maxLength(50)]),
       'password': new FormControl(null,Validators.required),
       'cpassword': new FormControl(null,[Validators.required,this.mcp.bind(this)] )

      

    });
    
    
  }
  get name()
    {
      return this.signup.get('name');
    }

  get fname()
  {
    return this.signup.get('fname');
  }
  get lname()
  {
    return this.signup.get('lname');

  }
  get password()
  {
    return this.signup.get('password');
  }
  get cpassword()
  {
    return this.signup.get('cpassword');
  }
  isuser(formcontrol:FormControl): Promise<any>
  {
    const promise= new Promise((resolve,reject)=>{
      setTimeout(()=>{
        if(formcontrol.value==='John')
        {
          resolve({'userNameTaken':true});
        }else{
          resolve(null);
        }
      },1000);
    

    }



    
    );
    return promise;

  }
  mcp(formcontrol:FormControl)
  {
    if(this.signup)
    {
      if(formcontrol.value && formcontrol.value.length>0 &&
        formcontrol.value !==this.password.value)
        {
          return {'nomatch':true};
        }
    }
  return null;
  }
  onSubmit()
  {
    this.formss=true;
    this.signup.reset();
  }
  
}
