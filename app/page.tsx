import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="flex justify-between items-center py-6 px-8 md:px-16">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">Authly</h1>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#features" className="hover:text-gray-600 transition-colors">Features</a>
          <a href="#pricing" className="hover:text-gray-600 transition-colors">Pricing</a>
          <a href="#docs" className="hover:text-gray-600 transition-colors">Documentation</a>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/logIn" className="hover:text-gray-600 transition-colors">Log In</Link>
          <Link href="/signUp" className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors">Sign Up</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col md:flex-row items-center justify-center px-8 md:px-16 py-12 md:py-24">
        <div className="w-full md:w-1/2 mb-12 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Simple, Secure Authentication for Everyone</h2>
          <p className="text-lg text-gray-600 mb-8">
            Authly provides hassle-free authentication solutions for developers. 
            Implement secure login flows in minutes, not days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/signUp" className="bg-black text-white px-6 py-3 rounded-md text-center hover:bg-gray-800 transition-colors">
              Get Started Free
            </Link>
            <Link href="#docs" className="border border-gray-200 px-6 py-3 rounded-md text-center hover:bg-gray-50 transition-colors">
              View Documentation
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md h-64 md:h-80 bg-gray-100 rounded-xl overflow-hidden">
            {/* You can replace this with an actual image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="bg-white p-6 rounded-lg shadow-md w-64">
                  <div className="mb-4 text-left">
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <div className="h-8 bg-gray-100 rounded w-full"></div>
                  </div>
                  <div className="mb-6 text-left">
                    <label className="block text-sm font-medium mb-1">Password</label>
                    <div className="h-8 bg-gray-100 rounded w-full"></div>
                  </div>
                  <div className="h-10 bg-black rounded w-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-8 md:px-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Authly</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure by Default</h3>
            <p className="text-gray-600">
              Built with security best practices. All data is encrypted and we follow OWASP guidelines.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Quick Integration</h3>
            <p className="text-gray-600">
              Implement authentication in your app with just a few lines of code. Save days of development time.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Customizable</h3>
            <p className="text-gray-600">
              Tailor the authentication flow to match your brand. Full control over the UI and user experience.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-8 md:px-16">
        <h2 className="text-3xl font-bold text-center mb-12">Simple, Transparent Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="border border-gray-200 rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-2">Free</h3>
            <p className="text-3xl font-bold mb-6">$0<span className="text-gray-500 text-lg font-normal">/month</span></p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Up to 1,000 monthly active users
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Email authentication
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Basic support
              </li>
            </ul>
            <Link href="/signUp" className="block w-full text-center border border-black px-4 py-2 rounded-md hover:bg-gray-50 transition-colors">
              Get Started
            </Link>
          </div>
          <div className="border-2 border-black rounded-lg p-8 relative">
            <div className="absolute top-0 right-0 bg-black text-white text-xs px-3 py-1 transform translate-y-0 translate-x-0">
              POPULAR
            </div>
            <h3 className="text-xl font-semibold mb-2">Pro</h3>
            <p className="text-3xl font-bold mb-6">$29<span className="text-gray-500 text-lg font-normal">/month</span></p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Up to 10,000 monthly active users
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Social login providers
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Advanced customization
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Priority support
              </li>
            </ul>
            <Link href="/signUp" className="block w-full text-center bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors">
              Get Started
            </Link>
          </div>
          <div className="border border-gray-200 rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
            <p className="text-3xl font-bold mb-6">Custom</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Unlimited users
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                SSO and custom integrations
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Dedicated support manager
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                SLA guarantees
              </li>
            </ul>
            <Link href="/contact" className="block w-full text-center border border-black px-4 py-2 rounded-md hover:bg-gray-50 transition-colors">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-8 md:px-16 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to secure your application?</h2>
          <p className="text-lg mb-8 text-gray-300">
            Join thousands of developers who trust Authly for their authentication needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signUp" className="bg-white text-black px-6 py-3 rounded-md text-center hover:bg-gray-100 transition-colors">
              Create Free Account
            </Link>
            <Link href="/docs" className="border border-white px-6 py-3 rounded-md text-center hover:bg-white/10 transition-colors">
              Read the Docs
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 md:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-black">Features</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Pricing</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Security</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Roadmap</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-black">Documentation</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Guides</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">API Reference</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-black">About</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Customers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Careers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-black">Privacy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Terms</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 mb-4 md:mb-0">© 2025 Authly. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-black">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
