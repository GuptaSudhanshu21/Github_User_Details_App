import React from "react";
import { Card, CardBody } from "reactstrap";

const Usercard = ({user}) => {
    return(
        <Card className="text-center mt-3 mb-4">
            <img src={user.avatar_url} className="img-thumbnail" />
            <CardBody>
                <div className="text-primary">{user.name}</div>
                <div className="text-primary">{user.location}</div>
                <div className="text-primary">{user.bio}</div>
                <div className="text-primary"> Available for Hiring: {user.hireable ? "YES": "NO"}</div>
                <div className="text-info"> Followers {user.followers}</div>
            </CardBody>
        </Card>
    )
}

export default Usercard;