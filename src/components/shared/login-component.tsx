import {
  Button,
  TextField,
  Container,
  Card,
  CardHeader,
  CardContent,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/posts");
  };

  return (
    <div>
      <Container maxWidth="sm" className="login-component">
        <Card elevation={8} className="login-component__card">
          <CardHeader title="Log in or sign up"></CardHeader>
          <CardContent>
            <TextField label="Username" variant="filled" />
            <br />
            <br />
            <TextField label="Password" variant="filled" />
            <br />
            <br />
            <Button
              className="login-button"
              variant="contained"
              onClick={handleNavigation}
            >
              Login
            </Button>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}
