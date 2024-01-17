import { Box, Card, CardContent, Typography } from "@mui/material";

const SecretCard = ({ secret }) => {
  return (
    <Box sx={{ width: 500 }}>
      <Card variant="outlined" style={{ margin: "1rem" }}>
        <CardContent>
          <Typography sx={{ fontSize: 24 }} color="text.primary" gutterBottom>
            {secret.secret}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SecretCard;
