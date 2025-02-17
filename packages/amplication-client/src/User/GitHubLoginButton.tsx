import { Icon } from "@amplication/design-system";
import { isEmpty } from "lodash";
import { Button, EnumButtonStyle } from "../Components/Button";
import { REACT_APP_GITHUB_CONTROLLER_LOGIN_URL } from "../env";
import "./GitHubLoginButton.scss";
import { AnalyticsEventNames } from "../util/analytics-events.types";

export const GitHubLoginButton = () => {
  return (
    <a
      href={
        isEmpty(REACT_APP_GITHUB_CONTROLLER_LOGIN_URL)
          ? "/github"
          : REACT_APP_GITHUB_CONTROLLER_LOGIN_URL
      }
      className="github-login-button"
    >
      <Button
        type="button"
        buttonStyle={EnumButtonStyle.Primary}
        eventData={{
          eventName: AnalyticsEventNames.SignInWithGitHub,
        }}
      >
        <Icon icon="github" />
        Continue with GitHub
      </Button>
    </a>
  );
};
