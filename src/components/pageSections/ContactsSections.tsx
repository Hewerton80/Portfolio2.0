import classNames from 'classnames'
import Link from 'next/link'
import { useContext, useEffect, useRef } from 'react'
import { ActiveUrlContext } from '../../contexts/ActiveUrlContext'
import { IDS_SECTIONS } from '../../utils/idsSections'
import { staticInfo } from '../../utils/staticInfo'
import { getHtmlTagWrapperStyle } from '../function/getHtmlTagWrapperStyle'
import Text from '../ui/typography/Text'

function ContactsSections({ className, ...restProps }: GlobalProps) {
  const { setActiveUrl } = useContext(ActiveUrlContext)
  const sectionRef = useRef<HTMLElement>(null)

  const someContacts1 = [
    {
      text: 'Email: ',
      textLink: staticInfo.contontacts.email,
      href: staticInfo.contontacts.emailLink,
    },
    {
      text: 'Telephone: ',
      textLink: staticInfo.contontacts.phone,
      href: staticInfo.contontacts.whatsappLink,
    },
  ]

  const someContacts2 = [
    {
      textLink: 'GitHub',
      href: staticInfo.contontacts.githubLink,
    },
    {
      textLink: 'Linkedin',
      href: staticInfo.contontacts.linkedin,
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          setActiveUrl(IDS_SECTIONS.CONTACT)
        }
      })
    }, {})
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    return () => observer.disconnect()
  }, [setActiveUrl])

  return (
    <section
      id={IDS_SECTIONS.CONTACT}
      className={classNames('flex', 'w-full min-h-screen', 'px-7.5 py-22.5', className)}
      ref={sectionRef}
      {...restProps}
    >
      <div className="flex flex-col pl-12">
        <Text
          as="h2"
          hasWordHoverEffect
          className={classNames('title-section', getHtmlTagWrapperStyle('h2'))}
        >
          Contacts
        </Text>
        <div className="flex flex-col space-y-8">
          <ul
            className={classNames(
              'flex flex-col text-lg relative '
              // getHtmlTagWrapperStyle('ul')
            )}
          >
            {someContacts1.map((mediaItem, index) => (
              <li
                className={classNames(
                  'flex items-center space-x-3 text-sm sm:text-base'
                  // getHtmlTagWrapperStyle('li')
                )}
                key={index + 'media'}
              >
                <span className="w-16 sm:w-20">{mediaItem.text}</span>
                <Link href={mediaItem.href} passHref>
                  <a
                    className="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {mediaItem.textLink}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col">
            {someContacts2.map((mediaItem, index) => (
              <li key={index + 'media2'}>
                <Link href={mediaItem.href} passHref>
                  <a
                    className="hover:underline underline text-primary text-sm sm:text-base"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {mediaItem.textLink}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ContactsSections
