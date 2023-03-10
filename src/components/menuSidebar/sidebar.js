import React from "react";
import mySignature from '../../assets/images/signature.png';



class Sidebar extends React.Component{

    render(){
        return(
            <div className="sideBar">
                <div className="siganature">
                    <img className="signature_img" src={mySignature} alt = "This is my signature"/>
                </div>
                <div className="sideBar_menu">
                    <ul>
                        <li> <a href={"https://demo.cocobasic.com/fabius-wp/demo-1/"}>HOME</a></li>
                        <li> <a href={"https://demo.cocobasic.com/fabius-wp/demo-1/"}>ABOUT</a></li>
                        <li> <a href={"https://demo.cocobasic.com/fabius-wp/demo-1/"}>SERVICES</a></li>
                        <li> <a href={"https://demo.cocobasic.com/fabius-wp/demo-1/"}>SKILLS</a></li>
                        <li> <a href={"https://demo.cocobasic.com/fabius-wp/demo-1/"}>EXPERIENCE</a></li>
                        <li> <a href={"https://demo.cocobasic.com/fabius-wp/demo-1/"}>TESTIMONIAL</a></li>
                        <li> <a href={"https://demo.cocobasic.com/fabius-wp/demo-1/"}>CONTACT</a></li>
                        <li> <a href={"https://demo.cocobasic.com/fabius-wp/demo-1/"}>LOGIN TO ADMINISTRATOR</a></li>
                       

                    </ul>
                </div>
            </div>
        )
    }
}

export default Sidebar;