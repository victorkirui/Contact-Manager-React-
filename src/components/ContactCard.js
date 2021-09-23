import React from 'react';

function ContactCard(props) {
    return (
        <div>
                    <div className="item"
                        style={{display: "flex",
                                justifyContent: "space-between",
                                alignItems:"center",
                                paddingBottom: "10px",
                                marginTop:"10px",
                                borderBottom: "1px solid #ddd"}}
                        > 
                        <div className="content" style={{display: "flex"}}>
                            <i className="user outline icon" style={{fontSize:"22px"}} />
                            <div>
                                <div className="ui header">
                                {props.contact.name}
                                </div>
                                <div>Email: {props.contact.email}</div>
                            </div>
                        </div>
                        <i className="trash alternate outline icon" 
                            style={{color:"red",fontSize:"22px",cursor:"pointer"}}
                            onClick = {() => props.clickHandler(props.contact.id)}> </i>
                    </div>
        </div>
    )
}

export default ContactCard;
