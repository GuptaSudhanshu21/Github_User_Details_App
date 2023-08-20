import React, { useState, useContext } from "react";
import axios from "axios";
import {
  Row,
  Container,
  Col,
  Input,
  Button,
  InputGroup,
  InputGroupAddon,
} from "reactstrap";

import Usercard from "../components/UserCard";
import Repos from "../components/Repos";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { toast } from "react-toastify";
import { type } from "@testing-library/user-event/dist/type";

const Home = () => {
  const context = useContext(UserContext);
  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);

  const fetchDetails = async () => {
    try {
      const { data } = await axios.get(`https://api.github.com/users/${query}`);
      setUser(data);
      console.log({data});
    } catch (error) {
      toast("Not able to find the User", (type = "error"));
    }
  };

  //Put AnyPage behind login

  if (!context.user?.uid) {
    return <Navigate to= "/signin" />
  }

  return (
    <Container>
      <Row className="mt-3">
        <Col md="5">
          <InputGroup>
            <Input
              type="text"
              value= {query}
              onChange={e=>setQuery(e.target.value)}
              placeholder="Please provide the Username"
            />
            <Button onClick={fetchDetails} color="primary">Fetch User</Button>
          </InputGroup>
          {user ? <Usercard user={user} /> : null}
        </Col>
        <Col md = "7">
            {user ? <Repos repos_url={user.repos_url} /> : null}
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
