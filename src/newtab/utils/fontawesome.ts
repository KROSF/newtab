import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faGithub,
  faGoogle,
  faAmazon,
  faYoutube,
  faTwitter,
  faReddit,
  faDev,
  faDocker,
} from "@fortawesome/free-brands-svg-icons";

const initFontAwesome = () => {
  library.add(
    fab,
    faGithub,
    faGoogle,
    faAmazon,
    faYoutube,
    faTwitter,
    faReddit,
    faDev,
    faDocker
  );
};

export default initFontAwesome;
