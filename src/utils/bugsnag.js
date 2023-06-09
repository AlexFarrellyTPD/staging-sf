import Bugsnag from "@bugsnag/js";
import BugsnagPluginReact from "@bugsnag/plugin-react";

if (!Bugsnag._client) {
  Bugsnag.start({
    apiKey: process.env.NEXT_PUBLIC_BUGSNAG_API_KEY,
    plugins: [new BugsnagPluginReact()],
  });
}

export default Bugsnag;
