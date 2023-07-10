"use client"; //as we are using browser capability

/* SessionProvider is Provider to wrap the app in to make session data available globally. 
It Can also be used to throttle the number of requests to the endpoint 
/api/auth/session. */

import { SessionProvider } from "next-auth/react";

const Provider = ({ children, session }) => {
  //SessionProvider is HOC.
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Provider;
