import { Avatar, Box, Divider, Link, styled } from "@mui/material";
import { ReactElement, useState } from "react";
import { useMe } from "../hooks/queries/users.queries";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import EmailOutlined from "@mui/icons-material/EmailOutlined";
import PermContactCalendarOutlinedIcon from "@mui/icons-material/PermContactCalendarOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
  Address,
  Birthday,
  Email,
  Name,
  Pass,
  Phone,
} from "../components/InfoUserElement";

export const Home = (): ReactElement => {
  const { data } = useMe();
  const [showName, setIsShowName] = useState(false);
  const [showEmail, setIsShowEmail] = useState(false);
  const [showDate, setIsShowDate] = useState(false);
  const [showLocation, setIsShowLocation] = useState(false);
  const [showPhone, setIsShowPhone] = useState(false);
  const [showPass, setIsShowPass] = useState(false);

  const picture = data?.results[0]?.picture?.medium;
  const firstname = data?.results[0]?.name?.first ?? "";
  const lastname = data?.results[0]?.name?.last ?? "";
  const email = data?.results[0]?.email ?? "";
  const phone = data?.results[0]?.phone ?? "";
  const date = data?.results[0]?.dob?.date ?? "";
  const location = data?.results[0]?.location?.city ?? "";
  const pass = data?.results[0]?.login?.password ?? "";

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Banner>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <ContentBanner>
            <Avatar
              alt="Picture"
              src={picture}
              sx={{ width: 200, height: 200 }}
            />
          </ContentBanner>
        </Box>
      </Banner>
      <Divider sx={{ width: "100%" }} />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          paddingTop: "120px",
          flexDirection: "column",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", height: "100px" }}>
          {showName && <Name firstname={firstname} lastname={lastname} />}
          {showEmail && <Email email={email} />}
          {showDate && <Birthday date={date} />}
          {showLocation && <Address location={location} />}
          {showPhone && <Phone phone={phone} />}
          {showPass && <Pass pass={pass} />}
        </Box>
        <Box sx={{ display: "flex", gap: "30px", height: "50px" }}>
          <Person2OutlinedIcon
            fontSize={showName ? "large" : "medium"}
            color={showName ? "primary" : "inherit"}
            onMouseEnter={() => setIsShowName(true)}
            onMouseLeave={() => setIsShowName(false)}
          />
          <EmailOutlined
            fontSize={showEmail ? "large" : "medium"}
            color={showEmail ? "primary" : "inherit"}
            onMouseEnter={() => setIsShowEmail(true)}
            onMouseLeave={() => setIsShowEmail(false)}
          />
          <PermContactCalendarOutlinedIcon
            fontSize={showDate ? "large" : "medium"}
            color={showDate ? "primary" : "inherit"}
            onMouseEnter={() => setIsShowDate(true)}
            onMouseLeave={() => setIsShowDate(false)}
          />
          <LocationOnOutlinedIcon
            fontSize={showLocation ? "large" : "medium"}
            color={showLocation ? "primary" : "inherit"}
            onMouseEnter={() => setIsShowLocation(true)}
            onMouseLeave={() => setIsShowLocation(false)}
          />
          <PhoneOutlinedIcon
            fontSize={showPhone ? "large" : "medium"}
            color={showPhone ? "primary" : "inherit"}
            onMouseEnter={() => setIsShowPhone(true)}
            onMouseLeave={() => setIsShowPhone(false)}
          />
          <LockOutlinedIcon
            fontSize={showPass ? "large" : "medium"}
            color={showPass ? "primary" : "inherit"}
            onMouseEnter={() => setIsShowPass(true)}
            onMouseLeave={() => setIsShowPass(false)}
          />
        </Box>
        <Box sx={{ mt: 2 }}>
          <Link href="/users">Go to users</Link>
        </Box>
      </Box>
    </Box>
  );
};

export const Banner = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
}));

export const ContentBanner = styled(Box)(() => ({
  top: "100px",
  position: "relative",
  width: "220px",
  padding: "8px",
  border: "1px solid rgba(0, 0, 0, 0.12)",
  borderRadius: "120px",
  backgroundColor: "white",
}));
