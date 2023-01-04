import React from "react";
import Script from "next/script";

const ScheduleHubspot = () => {
  return (
    <>
    <div class="meetings-iframe-container" data-src="https://meetings.hubspot.com/sami-najjar?embed=true"></div>
    <Script type="text/javascript" src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"></Script>
    </>
  );
}

export default ScheduleHubspot;
