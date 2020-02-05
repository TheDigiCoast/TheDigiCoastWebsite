import React from 'react'

// const courseLevels=[
//     {id:1, label: 'Level One (Novice)'},
//     {id:2, label: 'Level Two (Intermediate)'},
//     {id:3, label: 'Level Three (Advanced)'},
    
//   ]

 function AdmissionForm() {
    return (
        <div className="container-sm">
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
            <form className="was-validated">
            <div className="form-row">
                <div className="col form-group">
                    <label>First Name : </label>
                    <input type="text" className="form-control" id="fname" name="fname" placeholder="Enter your first name" required autoComplete="off"/>
                    <div className="valid-feedback"> Valid </div>
                    <div className="invalid-feedback"> Please enter your first name</div>
                </div>
                <div className="form-group">
                    <label>Last Name : </label>
                    <input type="text" className="form-control" id="lname" name="lname" placeholder="Enter your last name" required autoComplete="off"/>
                    <div className="valid-feedback"> Valid </div>
                    <div className="invalid-feedback"> Please enter your last name</div>
            </div>
            </div>
            <div className="form-group">
            <label>Email : </label>
                <input type="email" className="form-control" id="semail" name="semail" placeholder="example@live.com" required autoComplete="off"/>
                <div className="valid-feedback"> Valid </div>
                <div className="invalid-feedback"> Please enter your email address</div>
            </div>
            
            <div className="form-group">
            <label>Phone Number: </label>
                <input type="tel" className="form-control" id="sphone" name="sphone" placeholder="024xxxxxxx" required autoComplete="off"/>
                <div className="invalid-feedback"> Please enter your phone number</div>
            </div>
            <div className="form-group">
                <label>Select Your Level : </label>
                <select className="form-control" name="slevel" id="slevel">
                    <option value="Level1">Level One (Novice)</option>
                    <option value="Level2">Level Two (Intermediate)</option>
                    <option value="level3">Level Three (Advanced)</option>
                </select>
            </div>
            
        </form>
            </div>
            <div className="col-md-3"></div>

        </div>        
        </div>
            )
}

export default AdmissionForm;
