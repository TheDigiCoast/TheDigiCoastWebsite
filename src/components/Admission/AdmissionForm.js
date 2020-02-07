import React,{Component} from 'react'
import {db} from '../../Services/Firebase'


class AdmissionForm extends Component {

    constructor(props){
        super(props);
        this.state={
            firstname:"",
            lastname:"",
            semail:"",
            phone:"",
            level:"-1"
        }
        //this.inputChange=this.inputChange.bind(this)
        this.onFormSubmit=this.onFormSubmit.bind(this)
    }

    componentDidMount(){
        //this.getStudents()
    }

    addNewStudent=()=>{
        const studentInfo={
            firstname: this.state.firstname,
            lastname : this.state.lastname,
            email:this.state.semail,
            phone:this.state.phone,
            level:this.state.level,
            dateEnrolled: this.getDate()
        };
        studentInfo !==null &&
            db.collection('studentReg')
            .add(studentInfo)
            .then(res=>{
                this.resetValueFields()
            })
            .catch(err=>console.log(err))
    }

    validateFormFields = (e)=>{

        //TODO: Do the form validation here
        return true;
    };

    render() {
        return (
            <div className="container">
        <div className="row">
            <div className="col-md-3"></div>
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
            <div className="col-md-3"></div>

        </div>        
        </div>
        )
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
