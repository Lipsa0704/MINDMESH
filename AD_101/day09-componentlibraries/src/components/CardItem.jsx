import { Card, CardContent, Typography, Button } from "@mui/material";

const CardItem = () => {
  return (
    <Card sx={{ maxWidth: 300, margin: 2 }}>
      <CardContent>
        <Typography variant="h5">MUI Card</Typography>
        <Typography variant="body2" color="text.secondary">
          This is a card component using Material UI.
        </Typography>
        <Button variant="contained" sx={{ marginTop: 1 }}>
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
};

export default CardItem;
