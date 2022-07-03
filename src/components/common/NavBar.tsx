import classnames from 'classnames'
import Link from 'next/link'
import { useContext, useState } from 'react'
import { VscChromeClose, VscThreeBars } from 'react-icons/vsc'
import { IoClose } from 'react-icons/io5'
import { ActiveUrlContext } from '../../contexts/ActiveUrlContext'
import { IDS_SECTIONS } from '../../utils/idsSections'
import TiktokLogoReplica from '../ui/dataDisplay/TiktokLogoReplica'
import { ContactsMediaIcons } from '../ui/navigation/ContactsMediaIcons'
import Text from '../ui/typography/Text'

function NavBar({ className, ...restProps }: GlobalProps) {
  const { activeUrl } = useContext(ActiveUrlContext)
  const [showMenu, setShowMenu] = useState(false)

  const navItems = [
    { text: 'Sobre mim', href: `/#${IDS_SECTIONS.ABOUT}`, value: IDS_SECTIONS.ABOUT },
    {
      text: 'Portfolio',
      href: `/#${IDS_SECTIONS.PORTFOLIO}`,
      value: IDS_SECTIONS.PORTFOLIO,
    },
    {
      text: 'Experiência',
      href: `/#${IDS_SECTIONS.EXPERIENCE}`,
      value: IDS_SECTIONS.EXPERIENCE,
    },
    {
      text: 'Contatos',
      href: `/#${IDS_SECTIONS.CONTACT}`,
      value: IDS_SECTIONS.CONTACT,
    },
  ]

  const navElement = (
    <div
      className={classnames(
        'flex flex-col justify-between lg:justify-start',
        'h-full w-full pb-8 bg-gray-900'
      )}
    >
      <div
        className={classnames(
          'flex flex-col items-center',
          'w-full pb-5 pt-8 lg:pt-1 mb-0 lg:mb-0',
          'bg-black'
        )}
      >
        <TiktokLogoReplica char="H" className="text-8xl font-bold" />
        <Text className="font-bold text-xl mb-2">Hewerton</Text>
        <Text className="text-xs text-gray-400">Web developer</Text>
      </div>
      <nav className="flex flex-col h-ful">
        <ul className="flex flex-col">
          {navItems.map((navItem) => (
            <li
              className={classnames(
                'border-b first:border-t border-gray-800',
                'text-gray-300 hover:text-primary ease-in-out duration-500',
                {
                  'text-primary': activeUrl === navItem.value,
                }
              )}
              key={navItem.href}
            >
              <Link href={navItem.href}>
                <a
                  className="flex w-full h-12 items-center justify-center"
                  onClick={() => setShowMenu(false)}
                >
                  {navItem.text}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <ContactsMediaIcons className="mt-8" />
    </div>
  )

  return (
    <>
      <aside
        className={classnames(
          'hidden lg:block',
          'fixed left-0 top-0 z-10',
          'w-32.5 h-screen',
          className
        )}
        {...restProps}
      >
        {navElement}
      </aside>
      {showMenu && (
        <div
          className={classnames(
            'fixed z-[999] top-0 left-0',
            'flex lg:hidden flex-col',
            'w-full h-full'
          )}
        >
          {navElement}
        </div>
      )}
      <span
        role="button"
        className={classnames(
          'fixed z-[1000] top-2.5 right-2.5',
          'flex lg:hidden items-center justify-center',
          'w-[50px] h-[50px] cursor-pointer',
          'text-4xl',
          'bg-[#0000004c]'
        )}
        onClick={() => setShowMenu(!showMenu)}
      >
        {showMenu ? <VscChromeClose /> : <VscThreeBars />}
        {/* // <FaBars className="text-4xl" /> */}
      </span>
    </>
  )
}

export default NavBar
