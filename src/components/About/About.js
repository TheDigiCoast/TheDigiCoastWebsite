import React, { Component } from 'react'
import InfoCard from './InfoCard'
import david from '../../Assets/OwnersImg/david.jpg'
import fiifi from '../../Assets/OwnersImg/fiifi.jpg'
import wendolin from '../../Assets/OwnersImg/wendolin.jpg'
import { db } from '../../Services/Firebase'
import './About.css'
import Foot from '../Navigation/Foot'

class About extends Component {

    constructor(props){
        super(props)
        this.state={
            owners:[]
        }
    }

    componentDidMount(){
        //this.getOwnersData();
        const owners=[
            {
                name:"Fiifi Gordon",
                title:"IT Specialist",
                information:"",
                image:fiifi,
                email:"gordchill@gmail.com",
                phone:"+233546484338"
            },
            {
                name:"Frank David Addae",
                title:"IT Specialist",
                information:"",
                image:david,
                email:"frankdavid.addae@gmail.com",
                phone:"+233201794078"
            },
            {
                name:"Samuel Wendolin Ketechie",
                title:"Software Engineer",
                information:"A full-stack developer in the fields of web development and enterprise application development. Microsoft & Java technologies, Angular, React, Ionic and many others are some fields of development.",
                image:wendolin,
                email:"samuelwendolin2@gmail.com",
                phone:"+233247218146"
            }
        ]
        this.setState({
            owners:owners
        })
        
    }
    
   
    render() {
        return (
            <div>
                <h3 className="text-center mb-4">The DigiCoast Training Institute</h3>
                <div className="text-center mb-3 mt-4">
                    <p> We provide quality training and education on software development                         
                    and engineering for beginners, intermediates and even advanced levels.<br/>
                        We also offer on-the-job training for companies who wants to help develop and improve upon quality of work and performance of their employees.<br/>
                     </p>
                </div>
                
                <hr/>
                <br/>
                {/* <div className="text-center mb-3 mt-4">
                 <h3 className="text-center mt-3">Contact Us</h3>
                    <p></p>
                </div> <hr/>*/}
                
                
                <h3 className="text-center mt-3">Locate Us</h3>
                <div className="text-center mt-4">
                    <p>We are located at St. Martin De Porres, Dansoman, Accra - Ghana</p>
                    <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d992.7603036941607!2d-0.2643443!3d5.56091!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd18fe368b02ddd27!2sSt%20Martin%20de%20Porres%20School!5e0!3m2!1sen!2sgh!4v1581091457499!5m2!1sen!2sgh" 
                    className="map" frameBorder="0" allowFullScreen="1" ></iframe>
                    
                </div>
                <hr/>
                <h3 className="text-center mt-4 mb-4">Co-founders</h3>
                <div className="row">
                {this.state.owners.map(info=>(
                    <div key={info.name} className="col-md-4">
                        <InfoCard ownerInfo={info}/>
                    </div>
                ))}
                </div>
                <hr/>
                <Foot/>
            </div>
        )
    }

    getOwnersData=()=>{
        db.collection("owners")
        .get()
        .then(snapshot=>{
            snapshot.forEach(doc=>{
                const ownerData=[]
                const data=doc.data()
                ownerData.push(data)
                this.setState({
                    owners:ownerData
                })
                console.log(data)
            })
        }).catch(err=>console.log(err))
    }
}

export default About;