export type TUserParams = {
    nat: string;
    results: string;
}

export type TUser = {
    results: TResult[];
    info:    TInfo;
}

export type TInfo = {
    seed:    string;
    results: number;
    page:    number;
    version: string;
}

export type TResult = {
    gender:     string;
    name:       TName;
    location:   TLocation;
    email:      string;
    login:      TLogin;
    dob:        TDob;
    registered: TDob;
    phone:      string;
    cell:       string;
    id:         TID;
    picture:    TPicture;
    nat:        string;
}

export type TDob = {
    date: string;
    age:  number;
}

export type TID = {
    name:  string;
    value: string;
}

export type TLocation = {
    street:      TStreet;
    city:        string;
    state:       string;
    country:     string;
    postcode:    number;
    coordinates: TCoordinates;
    timezone:    TTimezone;
}

export type TCoordinates = {
    latitude:  string;
    longitude: string;
}

export type TStreet = {
    number: number;
    name:   string;
}

export type TTimezone = {
    offset:      string;
    description: string;
}

export type TLogin = {
    uuid:     string;
    username: string;
    password: string;
    salt:     string;
    md5:      string;
    sha1:     string;
    sha256:   string;
}

export type TName = {
    title: string;
    first: string;
    last:  string;
}

export type TPicture = {
    large:     string;
    medium:    string;
    thumbnail: string;
}