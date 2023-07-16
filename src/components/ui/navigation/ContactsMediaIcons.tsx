import { ReactNode } from 'react'
import { staticInfo } from '../../../utils/staticInfo'
import { FaGithub, FaLinkedin, FaMailBulk, FaWhatsapp } from 'react-icons/fa'
import Link from 'next/link'
import classNames from 'classnames'

interface ContactsMediaIconsProps extends GlobalProps {}

export const socialMediaItems = [
  {
    textDescription: 'Github',
    text: staticInfo.contontacts.github,
    href: staticInfo.contontacts.githubLink,
    icon: <FaGithub />,
  },
  {
    textDescription: 'Linkedin',
    text: staticInfo.contontacts.linkedin,
    href: staticInfo.contontacts.linkedin,
    icon: <FaLinkedin />,
  },
  {
    textDescription: 'Email',
    text: staticInfo.contontacts.email,
    href: staticInfo.contontacts.emailLink,
    icon: <FaMailBulk />,
  },
  {
    textDescription: 'Whatsapp',
    text: staticInfo.contontacts.phone,
    href: staticInfo.contontacts.whatsappLink,
    icon: <FaWhatsapp />,
  },
]

export function ContactsMediaIcons({ className }: ContactsMediaIconsProps) {
  return (
    <div className={classNames('flex justify-center space-x-3', className)}>
      {socialMediaItems.map((socialMediaItem) => (
        <Link
          key={socialMediaItem.href}
          href={socialMediaItem.href}
          passHref
          className="text-gray-300 hover:text-primary ease-in-out duration-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          {socialMediaItem.icon}
        </Link>
      ))}
    </div>
  )
}
