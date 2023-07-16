import classNames from 'classnames'
import { getHtmlTagWrapperStyle } from '../function/getHtmlTagWrapperStyle'
import Text from '../ui/typography/Text'
import UTSLocales from '../../../UTSLocales.json'
import TiktokLogoReplica from '../ui/dataDisplay/TiktokLogoReplica'
import Link from 'next/link'
import { IDS_SECTIONS } from '../../utils/idsSections'
import Button from '../ui/forms/Button'
import { Select } from '../ui/forms/Select/Select'
import { useMemo } from 'react'
import useTranslate from '../../hooks/useTranslate'

function HomeSection({ className, ...restProps }: GlobalProps) {
  const { activedLocale, translate } = useTranslate()

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
      <span className="absolute top-2.5 left-2.5 lg:left-auto right-auto lg:right-2.5">
        {
          <Select
            value={activedLocale}
            onChange={(e) => (document.location.href = `/${e.target.value}`)}
            options={languageOptions}
          />
        }
      </span>
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
            {translate('hi')},
          </Text>
          <br />
          <Text as="span" hasWordHoverEffect>
            {translate('iAm')}{' '}
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
        <Button asChild>
          <Link href={`#${IDS_SECTIONS.CONTACT}`}>{translate('contacts')}</Link>
        </Button>
      </div>
    </section>
  )
}

export default HomeSection
