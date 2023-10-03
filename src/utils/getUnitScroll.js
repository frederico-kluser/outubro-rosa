const desktopHeight = 482;
const mobileHeight = 540;
// radio-group
// @media screen and (max-width: 1226px) {

const getUnitScroll = () => {
	const width = window.innerWidth;
	const height = window.innerHeight;
	const unitScroll = width > 1226 ? desktopHeight : height - (70 + 158 + 42 + 24 + 24 + 48);
	return unitScroll;
};

export default getUnitScroll;

/*
  desktop:
  70px
  24px
  70px
  42px
  24px
  24px
  16px
  // radio-group
  24px
  48px
  40px
  100px
  70+24+70+42+24+24+16+24+48+40+100 = 482px
  ----------------------
  mobile:
  70px
  24px
  70px
  42px
  24px
  24px
  16px
  // radio-group
  24px
  48px
  40px
  158px
  70+24+70+42+24+24+16+24+48+40+158 = 540px
*/
