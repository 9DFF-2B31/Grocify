import React from "react";
import ProfileCard from "../components/ProfileCard";

const Contact = () => {
  return (
    <div className="grid gap-5 mt-8  md:grid-cols-2 lg:grid-cols-3">
     <div className="w-fit">
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
     </div>
      <div className="w-fit">
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
      </div>
      <div className="w-fit">
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
    </div>
  );
};

export default Contact;
