import React from "react";

const DropboxVideoEmbed = ({ videoLink }) => {
  // Convert the shareable link to a direct link
  const directLink = videoLink.replace(
    "www.dropbox.com",
    "dl.dropboxusercontent.com"
  );

  return (
    <video className="object-cover" poster="/images/awwficial-openFrame.jpg" autoPlay loop muted>
      <source src={directLink} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default DropboxVideoEmbed;
