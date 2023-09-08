import { Button, Paper } from "@mui/material";
import { Container } from "@mui/system";

interface ErrorComponentProps {
  errorMessage: string;
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({ errorMessage }) => {
  return (
    <Container maxWidth="md" className="error-component">
      <Paper sx={{ padding: 3 }} elevation={8}>
        <h2>{errorMessage}</h2>
        <Button variant="contained" href="/">
          Back
        </Button>
      </Paper>
    </Container>
  );
};

export default ErrorComponent;
