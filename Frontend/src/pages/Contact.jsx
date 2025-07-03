import React from "react";
import ProfileCard from "../components/ProfileCard";

const Contact = () => {
  return (
    <div className="flex gap-5 mt-8">
      <ProfileCard
        name="Harsh Agrawal"
        title="Software Engineer"
        handle="HarshAgrawal7672"
        status="Online"
        contactText="Contact Me"
        avatarUrl="/harsh2.png"
        showUserInfo={true}
        enableTilt={true}
        onContactClick={() => console.log("Contact clicked")}
      />
      <ProfileCard
        name="Sneha Gupta"
        title="Software Engineer"
        handle="SnehaGupta"
        status="Online"
        contactText="Contact Me"
        avatarUrl="/sneha2.png"
        showUserInfo={true}
        enableTilt={true}
        onContactClick={() => console.log("Contact clicked")}
      />
      <ProfileCard
        name="Kishan Behera"
        title="Software Engineer"
        handle="KishanBehera"
        status="Online"
        contactText="Contact Me"
        avatarUrl="/kishan2.png"
        showUserInfo={true}
        enableTilt={true}
        onContactClick={() => console.log("Contact clicked")}
      />
    </div>
  );
};

export default Contact;
