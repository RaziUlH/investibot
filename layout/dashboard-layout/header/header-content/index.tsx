// material-ui
import { Box, IconButton, Link, useMediaQuery } from "@mui/material";

// project import
import Search from "./Search";
import Profile from "./profile";
import Notification from "./Notification";
import MobileSection from "./MobileSection";
import { GitHub } from "@mui/icons-material";

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
  // const matchesXs = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <>
      {/* {!matchesXs && <Search />}
      {matchesXs && <Box sx={{ width: "100%", ml: 1 }} />} */}

      <IconButton
        component={Link}
        href="https://github.com/codedthemes/mantis-free-react-admin-template"
        target="_blank"
        disableRipple
        color="secondary"
        title="Download Free Version"
        sx={{ color: "text.primary", bgcolor: "grey.100" }}
      >
        <GitHub />
      </IconButton>

      {/* <Notification /> */}
      {/* {!matchesXs && <Profile />}
      {matchesXs && <MobileSection />} */}
    </>
  );
};

export default HeaderContent;
