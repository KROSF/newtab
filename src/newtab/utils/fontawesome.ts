import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faGithub,
  faGoogle,
  faAmazon,
  faYoutube,
  faTwitter,
  faReddit,
} from "@fortawesome/free-brands-svg-icons";

const initFontAwesome = () => {
  library.add(
    fab,
    faGithub,
    faGoogle,
    faAmazon,
    faYoutube,
    faTwitter,
    faReddit
  );
};

export default initFontAwesome;
