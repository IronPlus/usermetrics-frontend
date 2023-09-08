import {
  Button,
  TextField,
  Container,
  Card,
  CardHeader,
  CardContent,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// todo: add types for this component
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleNavigation = () => {
    console.log(username);
    console.log(password);
    // todo: store username and password in session storage
    navigate("/posts");
  };

  return (
    <div>
      <Container maxWidth="sm" className="login-component">
        <Card elevation={8} className="login-component__card">
          <CardHeader title="Welcome back, Log in!"></CardHeader>
          <CardContent>
            <TextField
              label="Username"
              variant="filled"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <br />
            <TextField
              label="Password"
              variant="filled"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <br />
            <Button
              className="login-button"
              variant="contained"
              onClick={handleNavigation}
            >
              Log in
            </Button>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}
