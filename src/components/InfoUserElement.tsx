import { Typography } from "@mui/material";
import moment from "moment";
import { FC, ReactElement } from "react";

type PropsName = {
  firstname: string;
  lastname: string;
};

type PropsEmail = {
  email: string;
};

type PropsBirthday = {
  date: string;
};

type PropsLocation = {
  location: string;
};

type PropsPhone = {
  phone: string;
};

type PropsPass = {
  pass: string;
};

export const Name: FC<PropsName> = (props): ReactElement => (
  <>
    <Typography
      noWrap
      component="span"
      sx={{ fontSize: "20px", fontWeight: 500 }}
      color="secondary.dark"
    >
      Hi, my name is
    </Typography>
    <Typography noWrap component="span">
      {props.firstname} {props.lastname}
    </Typography>
  </>
);

export const Email: FC<PropsEmail> = (props): ReactElement => (
  <>
    <Typography
      noWrap
      component="span"
      sx={{ fontSize: "20px", fontWeight: 500 }}
      color="secondary.dark"
    >
      My email is
    </Typography>
    <Typography noWrap component="span">
      {props.email}
    </Typography>
  </>
);

export const Birthday: FC<PropsBirthday> = (props): ReactElement => (
  <>
    <Typography
      noWrap
      component="span"
      sx={{ fontSize: "20px", fontWeight: 500 }}
      color="secondary.dark"
    >
      My birthday is
    </Typography>
    <Typography noWrap component="span">
      {moment(props.date).format("dd/mm/aa")}
    </Typography>
  </>
);

export const Address: FC<PropsLocation> = (props): ReactElement => (
  <>
    <Typography
      noWrap
      component="span"
      sx={{ fontSize: "20px", fontWeight: 500 }}
      color="secondary.dark"
    >
      My location is
    </Typography>
    <Typography noWrap component="span">
      {props.location}
    </Typography>
  </>
);

export const Phone: FC<PropsPhone> = (props): ReactElement => (
  <>
    <Typography
      noWrap
      component="span"
      sx={{ fontSize: "20px", fontWeight: 500 }}
      color="secondary.dark"
    >
      My phone is
    </Typography>
    <Typography noWrap component="span">
      {props.phone}
    </Typography>
  </>
);

export const Pass: FC<PropsPass> = (props): ReactElement => (
  <>
    <Typography
      noWrap
      component="span"
      sx={{ fontSize: "20px", fontWeight: 500 }}
      color="secondary.dark"
    >
      My password
    </Typography>
    <Typography noWrap component="span">
      {props.pass}
    </Typography>
  </>
);
