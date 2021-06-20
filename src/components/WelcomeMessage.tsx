import { Box } from "@material-ui/core";

interface WelcomeMessageInterface {
  position: string;
  country?: string;
}

const WelcomeMessage = ({
  position,
  country = "Vietnam",
}: WelcomeMessageInterface) => {
  return (
    <Box mb={1}>
      Welcome {position} from {country}
    </Box>
  );
};

export default WelcomeMessage;
