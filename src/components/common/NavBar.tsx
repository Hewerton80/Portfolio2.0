import classnames from 'classnames'
import Link from 'next/link'
import { useContext } from 'react'
import { ActiveUrlContext } from '../../contexts/ActiveUrlContext'
import { IDS_SECTIONS } from '../../utils/idsSections'
import TiktokLogoReplica from '../ui/dataDisplay/TiktokLogoReplica'
import Text from '../ui/typography/Text'

function NavBar({ className, ...restProps }: GlobalProps) {
  const { activeUrl } = useContext(ActiveUrlContext)
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
  ]
  return (
    <aside
      className={classnames(
        'fixed left-0 top-0 z-10',
        'w-32.5 h-screen',
        ' bg-gray-900',
        className
      )}
      {...restProps}
    >
      <div
        className={classnames(
          'flex flex-col items-center',
          'w-full pb-5 pt-1',
          'bg-black  border-b border-gray-800'
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
                'border-b border-gray-800',
                'text-gray-300 hover:text-primary ease-in-out duration-500',
                {
                  'text-primary': activeUrl === navItem.value,
                }
              )}
              key={navItem.href}
            >
              <Link href={navItem.href}>
                <a className="flex w-full h-12 items-center justify-center">
                  {navItem.text}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default NavBar
