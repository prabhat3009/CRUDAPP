import { useState, useEffect } from "react";

import {
  FormControl,
  FormGroup,
  InputLabel,
  Input,
  Typography,
  styled,
  Button,
} from "@mui/material";

import { addUser } from "../service/api";
import { useNavigate } from "react-router-dom";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

const defaultValue = {
  category: "",
  title: "",
  content: "",
  date: "",
};

/*const myKeyValue = window.location.search;
const urlParams = new URLSearchParams(myKeyValue);
const paramValue = urlParams.get("category")?.toString();*/
//console.log("Category Parameter:", paramValue);


const AddUser = () => {
  const [user, setUser] = useState(defaultValue);
  const [paramValue, setParamValue] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setParamValue(urlParams.get("category") || "");
  }, []);

  // Ensure the category input uses paramValue as initial state
  useEffect(() => {
    if (paramValue) {
      setUser((prevUser) => ({
        ...prevUser,
        category: paramValue,
      }));
    }
  }, [paramValue]);

  const onValueChange = (e) => {
    console.log(e.target.name, e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const addUserDetails = async () => {
    if (!user.category || !user.title || !user.content || !user.date) {
      alert("All fields are compulsory!");
      return;
    }
    await addUser(user);
    navigate("/all");
  };

  return (
    <Container>
      <Typography variant="h4">Add Note</Typography>
      <FormControl>
        <InputLabel>Category</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="category"
          value={paramValue || user.category}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Title</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="title" />
      </FormControl>
      <FormControl>
        <InputLabel>Content</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="content" />
      </FormControl>
      <FormControl>
        <InputLabel>Date</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="date" />
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={() => addUserDetails()}>
          Add Note
        </Button>
      </FormControl>
    </Container>
  );
};

export default AddUser;
