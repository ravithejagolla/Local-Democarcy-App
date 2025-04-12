import React from "react";

const Footer = () => {
  return (
    <div className="ml-0">
      <footer className="bg-[#111133] text-white py-10 px-4 flex flex-wrap justify-evenly">
        <div className="min-w-[150px] m-4 flex-1">
          <h4 className="mb-3 text-lg uppercase font-semibold">Local-Democracy</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline cursor-pointer">About</li>
            <li className="hover:underline cursor-pointer">Mission</li>
            <li className="hover:underline cursor-pointer">Team</li>
            <li className="hover:underline cursor-pointer">Contact</li>
            <li className="hover:underline cursor-pointer">Get Involved</li>
          </ul>
        </div>

        <div className="min-w-[150px] m-4 flex-1">
          <h4 className="mb-3 text-lg uppercase font-semibold">For Citizens</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline cursor-pointer">Report Issues</li>
            <li className="hover:underline cursor-pointer">Vote on Topics</li>
            <li className="hover:underline cursor-pointer">Civic Resources</li>
            <li className="hover:underline cursor-pointer">Government Directory</li>
            <li className="hover:underline cursor-pointer">Public Announcements</li>
          </ul>
        </div>

        <div className="min-w-[150px] m-4 flex-1">
          <h4 className="mb-3 text-lg uppercase font-semibold">For Representatives</h4>
          <ul className="space-y-2 text-sm mb-4">
            <li className="hover:underline cursor-pointer">Create Profile</li>
            <li className="hover:underline cursor-pointer">Respond to Issues</li>
            <li className="hover:underline cursor-pointer">Host Events</li>
          </ul>
          <h4 className="mb-3 text-lg uppercase font-semibold">For NGOs</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline cursor-pointer">Partner With Us</li>
            <li className="hover:underline cursor-pointer">Awareness Campaigns</li>
          </ul>
        </div>

        <div className="min-w-[150px] m-4 flex-1">
          <h4 className="mb-3 text-lg uppercase font-semibold">Resources</h4>
          <ul className="space-y-2 text-sm mb-4">
            <li className="hover:underline cursor-pointer">Help Center</li>
            <li className="hover:underline cursor-pointer">Privacy Policy</li>
            <li className="hover:underline cursor-pointer">Terms of Use</li>
            <li className="hover:underline cursor-pointer">Open Data</li>
          </ul>
          <h4 className="mb-3 text-lg uppercase font-semibold">Connect</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline cursor-pointer">Facebook</li>
            <li className="hover:underline cursor-pointer">Twitter</li>
            <li className="hover:underline cursor-pointer">LinkedIn</li>
            <li className="hover:underline cursor-pointer">YouTube</li>
            <li className="hover:underline cursor-pointer">GitHub</li>
          </ul>
        </div>

        <div className="w-full text-center mt-10 text-sm border-t border-white/20 pt-4">
          <p>© {new Date().getFullYear()}, Loac-Democracy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
