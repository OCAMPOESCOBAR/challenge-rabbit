import { Avatar, Box, Link, styled, Typography } from "@mui/material";
import { ReactElement } from "react";
import { useLocation } from "react-router-dom";
import { useMe } from "../hooks/queries/users.queries";

export const Nationality = (): ReactElement => {
  const location = useLocation();
  const nat = location?.state?.nat;
  const { data } = useMe({ nat, results: "9" });
  console.log(data);

  return (
    <>
      <Typography
        component="div"
        sx={{
          fontSize: "20px",
          fontWeight: 500,
          padding: "20px",
          textAlign: "center",
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        Users by Nat
        <Link sx={{textAlign: 'center'}} href="/users">Go to Nat</Link>
      </Typography>
      <Box
        sx={{
          display: "flex",
          height: "100vh",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          padding: "40px",
        }}
      >
        {data?.results?.map((item) => (
          <Box key={item.login.uuid}>
            <ContentUser>
              <Avatar
                alt=""
                src={item.picture.medium}
                sx={{ width: 56, height: 56 }}
              />
              <Typography>
                {item.name.first} {item.name.last}
              </Typography>
              <Typography>{item.cell}</Typography>
            </ContentUser>
          </Box>
        ))}
      </Box>
    </>
  );
};

export const ContentUser = styled(Box)(({ theme }) => ({
  width: "250px",
  padding: "8px",
  display: "flex",
  flexDirection: "column",
  marginBottom: "16px",
  border: "1px solid rgba(0, 0, 0, 0.12)",
  borderRadius: "8px",
  alignItems: 'center',
  backgroundColor: theme.palette.secondary.main,
}));
