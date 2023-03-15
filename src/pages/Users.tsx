import { Box, Link, styled, Typography } from "@mui/material";
import { ReactElement } from "react";
import Lottie from "lottie-react";
import br from "../assets/lotties/usa.json";
import usa from "../assets/lotties/brazil.json";
import fr from "../assets/lotties/france.json";
import { useNavigate } from "react-router-dom";

const style = {
  width: 200,
};

export const Users = (): ReactElement => {
  const navigate = useNavigate();

  const onClick = (nat: string) =>
    navigate("/users/nationality", { state: { nat } });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        component="div"
        sx={{ fontSize: "24px", fontWeight: 500, mb: 3 }}
      >
        Select a nationality
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          cursor: "pointer",
        }}
      >
        <ContentBanner onClick={() => onClick("us")}>
          <Lottie animationData={usa} style={style} />
        </ContentBanner>
        <ContentBanner onClick={() => onClick("br")}>
          <Lottie animationData={br} style={style} />
        </ContentBanner>
        <ContentBanner onClick={() => onClick("fr")}>
          <Lottie animationData={fr} style={style} />
        </ContentBanner>
      </Box>
      <Box>
        <Link href="/">Go to home</Link>
      </Box>
    </Box>
  );
};

export const ContentBanner = styled(Box)(({ theme }) => ({
  padding: "8px",
  borderRadius: "8px",
  marginRight: "16px",
  marginBottom: "16px",
  backgroundColor: theme.palette.secondary.main,
}));
