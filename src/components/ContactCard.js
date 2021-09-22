import React from 'react';



function ContactCard({contacts}) {
    return (
        <div>
            {
                contacts.map(contact => (
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
                                {contact.name}
                                </div>
                                <div>Email: {contact.email}</div>
                            </div>
                        </div>
                        <i className="trash alternate outline icon" style={{color:"red",fontSize:"22px"}}> </i>
                    </div>
                ))
            }
        </div>
    )
}

export default ContactCard;
