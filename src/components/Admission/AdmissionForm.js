import React,{Component} from 'react'
import {db} from '../../Services/Firebase'
import './Form.css'

class AdmissionForm extends Component {

    constructor(props){
        super(props);
        this.state={
            firstname:"",
            lastname:"",
            semail:"",
            phone:"",
            level:"-1",
            dialogMessage:""
        }
        this.snackdangerRef = React.createRef();
        this.snacksuccessRef=React.createRef();
        this.onFormSubmit=this.onFormSubmit.bind(this)
    }

    componentDidMount(){
        //this.getStudents()
        //console.log(new Date().getMonth()+1)
    }


    render() {
        return (
            <div className="container">
            <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
            <div>
                <p  className="d-none" ref={this.snackdangerRef}>Check all the fields and input correct values or information</p>
                <p  className="d-none" ref={this.snacksuccessRef}>You are successfully registered for the software developer masterclass.</p>
            </div>
            </div>            
            <div className="col-md-4"></div>
            </div>
            <div className="row">
                <div className="col-md-3">                                   
                </div>
                <div className="col-md-6 bg-dark text-white">
                <form className="was-validated" >
                <div className="form-row">
                    <div className="col form-group">
                        <label>First Name : </label>
                        <input type="text" 
                        className="form-control" 
                        id="firstname" 
                        name="firstname"
                        onChange={e=>this.inputChange(e)}
                        value={this.state.firstname}
                        placeholder="Enter your first name" 
                        required autoComplete="off"/>
                        <div className="valid-feedback"> Valid </div>
                        <div className="invalid-feedback"> Please enter your first name</div>
                    </div>
                    <div className="form-group">
                        <label>Last Name : </label>
                        <input type="text" 
                        className="form-control" 
                        id="lastname" 
                        name="lastname"
                        onChange={e=>this.inputChange(e)}
                        value={this.state.lastname}
                        placeholder="Enter your last name" required autoComplete="off"/>
                        <div className="valid-feedback"> Valid </div>
                        <div className="invalid-feedback"> Please enter your last name</div>
                    </div>
                </div>
                <div className="form-group">
                <label>Email : </label>
                    <input type="email" 
                    className="form-control"
                    id="semail" 
                    name="semail"
                    onChange={e=>this.inputChange(e)}
                    value={this.state.semail}
                    placeholder="example@live.com" required autoComplete="off"/>
                    <div className="valid-feedback"> Valid </div>
                    <div className="invalid-feedback"> Please enter your email address</div>
                </div>
                
                <div className="form-group">
                <label>Phone Number: </label>
                    <input type="tel" 
                    className="form-control" 
                    id="phone" 
                    name="phone"
                    onChange={e=> this.inputChange(e)}
                    value={this.state.phone}
                    placeholder="024xxxxxxx" required autoComplete="off"/>
                    <div className="invalid-feedback"> Please enter your phone number</div>
                </div>
                <div className="form-group">
                    <label>Select Your Level : </label>
                    <select
                    className="form-control" 
                    name="level"
                    onChange={e=>this.inputChange(e)}
                    onSelect={e=>this.inputChange(e)}
                    value={this.state.level}
                    >
                        <option value="-1">--Select your level--</option>
                        <option value="One">Level One (Novice)</option>
                        <option value="Two">Level Two (Intermediate)</option>
                        <option value="Three">Level Three (Advanced)</option>
                    </select>
                </div>                       
                </form>
                <div className="row mt-3 mb-4">
                    <div className="col-md-4 col-sm-5"></div>
                    <div className="col-md-4 col-sm-2">
                        <input type="submit" 
                        className="btn btn-xm btn-success" 
                        onClick={e =>this.onFormSubmit(e)}
                        value="Submit"></input>
                    </div>
                    <div className="col-md-4 col-sm-5"></div>
                </div> 
            </div>
            <div className="col-md-3">
            </div>

        </div>        
        </div>
        )
    }

    hasDiscount=()=>{
        let month=new Date().getMonth()+1;
        if(month===2 || month===3){
            return "Yes"
        }else{
            return "No"
        }
    }
    addNewStudent=()=>{

        const studentInfo={
            firstname: this.state.firstname,
            lastname : this.state.lastname,
            email:this.state.semail,
            phone:this.state.phone,
            level:this.state.level,
            dateEnrolled: this.getDate(),
            hasDiscount: this.hasDiscount()
        };
        studentInfo !==null &&
            db.collection('studentReg')
            .add(studentInfo)
            .then(res=>{
                this.resetValueFields()
                this.showSnackBarSuccess()
                setTimeout(()=>{
                    window.location="/"
                },5000)
            })
            .catch(err=>console.log(err))
    }

    validateFormFields = (e)=>{
        //TODO: Do the form validation here
        let fnamefield=this.state.firstname;
        let lnamefield=this.state.lastname;
        let emailfield=this.state.semail;
        let phonefield=this.state.phone;
        let levelfield=this.state.level;
        let errorMesg="";

        if(fnamefield===null || fnamefield==="" || fnamefield.length <3 ){
            errorMesg+="Please enter a valid First Name\n";
        }
        if(lnamefield===null || lnamefield==="" || lnamefield.length <3 ){
            errorMesg+="Please enter a valid Last Name\n";
        }
        if(!this.validateEmail(emailfield)){
            errorMesg+="Please enter a valid Email\n";
        }
        if(phonefield===null || phonefield==="" || (phonefield.length <9 || phonefield.length>12 )){
            errorMesg+="Please enter a valid Phone number. i.e 024xxxxxxx\n";
        }
        if(levelfield===null || levelfield==="" || levelfield==="-1" ){
            errorMesg+="Please select a valid Program Level\n";
        }
        if(errorMesg==="")
            return true;
        else{
            this.showSnackBarDanger();
            return false;
        }
    };

   
    showSnackBarDanger() {        
        let node = this.snackdangerRef.current;
        node.className = "show alert-danger d-block text-center";
        setTimeout( ()=> {
            node.className = node.className="d-none";
        }, 7000);
    
    }

    showSnackBarSuccess() {        
        let node = this.snacksuccessRef.current
        node.className = "show alert-success d-block text-center";
        setTimeout(()=> {
            node.className = node.className="d-none";
        }, 8000);
    
    }

    validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }

    getStudents=()=>{
        db.collection('studentReg')
        .get()
        .then(snapshot=>{
            snapshot.forEach(doc=>{
                const data=doc.data()
                console.log(data)
            })
        })
        .catch(err=>console.log(err))
    }

    getDate() {
        var d = new Date(),
        dformat = [
            d.getDate(),
            d.getMonth()+1,               
            d.getFullYear()].join('-')+' '+
            [d.getHours(),
            d.getMinutes(),
            d.getSeconds()].join(':');
        return dformat;
    }


    inputChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value                 
        });

        if(e.target.name==="level"){
            this.setState({
                level:e.target.value
            })
        }
    }

    onFormSubmit= (e)=> {        
        e.preventDefault();        
        if(this.validateFormFields(e)){
            this.addNewStudent();
        }
    }

    resetValueFields=()=>{
        this.setState({
            firstname:"",
            lastname:"",
            semail:"",
            phone:"",
            level:"-1"
        })
    }


}


export default AdmissionForm;
