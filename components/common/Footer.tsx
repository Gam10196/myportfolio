const footerLinks = {
  pages: [
    { name: "Home", url: "/" },
    { name: "Projects", url: "/projects" },
    { name: "About", url: "/about" },
    { name: "Contact", url: "/contact" },
  ],
  resources: [
    { name: "GitHub", url: "https://github.com/Gam10196" },
    { name: "W3School", url: "https://www.w3schools.com/"},
  ],
  connect: [
    { name: "GitHub", url: "https://github.com/Gam10196" },
    { name: "Facebook", url: "https://www.facebook.com/gamaliel10196/" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 px-50px py-3 mt-5">
      <div className="container mx-auto md:px-12 grid grid-cols-1 md:grid-cols-4 gap-25">

        {/* About */}
        <div>
          <h2 className="text-lg font-bold">Gamaliel C. Octobre</h2>
          <p className="text-sm">Aspiring Web Dev</p>
          <p className="text-sm mt-2">Sabang Danao Cebu, Philippines</p>
        </div>

        {/* Pages */}
        <div>
          <h3 className="font-semibold mb-2">Pages</h3>
          <ul className="space-y-1">
            {footerLinks.pages.map((link) => (<li key={link.name}><a href={link.url} className="hover:text-blue-500">{link.name}</a></li>))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold mb-2">Resources</h3>
          <ul className="space-y-1">
            {footerLinks.resources.map((link) => (<li key={link.name}><a href={link.url} className="hover:text-blue-500" target="_blank">{link.name}</a></li>))}
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="font-semibold mb-2">Connect</h3>
          <ul className="space-y-1">
            {footerLinks.connect.map((link) => (<li key={link.name}><a href={link.url} className="hover:text-blue-500" target="_blank">{link.name}</a></li>))}
          </ul>
        </div>
      </div>
        
      <div className="text-center text-sm text-gray-500 mt-10">© 2026. All rights reserved.</div>
    </footer>
  );
}
