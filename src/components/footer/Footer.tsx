import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto flex flex-col bg-transparent text-gray-800 dark:text-gray-300 py-10 px-7 md:px-4 border-t border-gray-300 dark:border-gray-700">
      <div className="container mx-auto flex flex-wrap justify-between items-start gap-8">
        <div className="flex items-center md:justify-center">
          <Image src="/logo.png" alt="trustless" width={100} height={100} />
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-2">Contact</h4>
          <p>
            Email:{" "}
            <Link
              href="mailto:trustlesswork@gmail.com"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              trustlesswork@gmail.com
            </Link>
          </p>
          <p>
            Website:{" "}
            <Link
              href="https://www.trustlesswork.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              trustlesswork.com
            </Link>
          </p>
        </div>

        {/* Team members */}
        <div>
          <h4 className="font-semibold text-lg mb-1">Team Members</h4>
          <ul>
            <li>
              <Link
                href="https://example.com/joel-vargas"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Joel Vargas
              </Link>
            </li>
            <li>
              <Link
                href="https://example.com/armando-cortes"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Armando Cortés
              </Link>
            </li>
            <li>
              <Link
                href="https://example.com/caleb-loria"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Caleb Loría
              </Link>
            </li>
            <li>
              <Link
                href="https://example.com/alberto-chaves"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Alberto Chaves
              </Link>
            </li>
          </ul>
        </div>

        {/* Social links */}
        <div>
          <h4 className="font-semibold text-lg mb-1 text-center">Social</h4>
          <div className="flex space-x-4">
            <Link
              href="https://www.linkedin.com/company/trustlesswork/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <Image
                src="/assets/social-networks/linkedin.svg"
                alt="LinkedIn"
                width={50}
                height={50}
              />
            </Link>
            <Link
              href="https://x.com/TrustlessWork"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <Image
                src="/assets/social-networks/x.svg"
                alt="X"
                width={50}
                height={50}
              />
            </Link>
          </div>
        </div>
      </div>
      <p className="mt-4 text-center pt-4">
        © {currentYear} All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
