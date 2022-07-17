import classNames from 'classnames'
import { getHtmlTagWrapperStyle } from '../function/getHtmlTagWrapperStyle'
import Text from '../ui/typography/Text'
import UTSLocales from '../../../UTSLocales.json'
import TiktokLogoReplica from '../ui/dataDisplay/TiktokLogoReplica'
import Link from 'next/link'
import { IDS_SECTIONS } from '../../utils/idsSections'
import Button from '../ui/forms/Button'
import { Select } from '../ui/forms/Select/Select'
import { useContext, useMemo } from 'react'
import { ActiveUrlContext } from '../../contexts/ActiveUrlContext'
import { TranslateContext } from '../../contexts/TranslateContext'
import { CodeLocalesNameType } from '../../locales'
import Cookies from 'js-cookie'
import { getLocaleCodeFromCookies } from '../../utils/cookies'

function HomeSection({ className, ...restProps }: GlobalProps) {
  const { activedLocale, setActivedLocale } = useContext(TranslateContext)

  const languageOptions = useMemo(
    () =>
      Object.entries(UTSLocales).map(([key, value]) => ({
        value: key,
        label: value,
      })),
    []
  )

  return (
    <section
      className={classNames('relative', 'min-h-screen', 'px-7.5 py-22.5', className)}
      {...restProps}
    >
      {/* <span className="absolute top-2.5 left-2.5 lg:left-auto right-auto lg:right-2.5">
        <>{console.log('activedLocale', activedLocale)}</>
        {
          <Select
            value={activedLocale}
            onChange={(e) => setActivedLocale(e.target.value as CodeLocalesNameType)}
            options={languageOptions}
          />
        }
      </span> */}
      <div className={classNames('flex flex-col', 'pl-12 space-y-16')}>
        <Text
          as="h1"
          className={classNames(
            'text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold',
            'slide-left',
            getHtmlTagWrapperStyle('h1')
          )}
        >
          <Text as="span" hasWordHoverEffect>
            Hi,
          </Text>
          <br />
          <Text as="span" hasWordHoverEffect>
            I&apos;m{' '}
          </Text>
          <span>
            <TiktokLogoReplica char="H" />
            <Text as="span" hasWordHoverEffect>
              ewerton,
            </Text>
          </span>
          <br />
          <Text as="span" hasWordHoverEffect>
            web developer
          </Text>
        </Text>
        <Text
          as="p"
          className={classNames(
            'text-gray-600 tracking-[0.25rem]',
            'slide-left',
            getHtmlTagWrapperStyle('p')
          )}
        >
          Front End Developer / Full stack
        </Text>
        <Link href={`#${IDS_SECTIONS.CONTACT}`}>
          <a>
            <Button>contacts</Button>
          </a>
        </Link>
      </div>
    </section>
  )
}

export default HomeSection
