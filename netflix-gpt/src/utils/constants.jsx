import logo from "../assets/images/netflix_logo.png";

export const LOGO = logo;


export const USER_AVATAR="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp"


export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + import.meta.env.VITE_TMDB_KEY
  }
};

export const IMG_CDN_URL="https://image.tmdb.org/t/p/w500/";

export const BG_URL='https://assets.nflxext.com/ffe/siteui/vlv3/75b0ed49-75ab-4a63-bd45-37bc2c95cb73/web/IN-en-20250623-TRIFECTA-perspective_ae5833b7-6ce5-4e88-853e-014f38c506f1_large.jpg';

export const SUPPORTED_LANGUAGES=[
  {identifier:"en",name:"English"},
  {identifier:"hindi",name:"Hindi"},
  {identifier:"spanish",name:"Spanish"}
]

export const OPENAI_KEY=import.meta.env.VITE_OPENAI_KEY;