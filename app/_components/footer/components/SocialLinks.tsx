import { socialLinks } from "@/_data/socialLinks";
import Link from "next/link";

export default function SocialLinks() {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex items-center justify-center gap-6">
        {socialLinks.map(({ name, href, Icon }) => (
          <Link
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
          >
            <Icon className="h-8 w-auto" />
          </Link>
        ))}
      </div>
      <Link
        href="https://mail.google.com/mail/?view=cm&to=peyman.front.developer@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary"
        aria-label="Send email to peyman.front.developer@gmail.com"
      >
        peyman.front.developer@gmail.com
      </Link>
    </div>
  );
}
